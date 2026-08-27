import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from './schema'
import { hashPassword, verifyPassword, signToken, verifyToken } from './auth'
import { allocateUniqueSlug, ensureStoresTable } from './stores'
import {
  TRIAL_DAYS,
  ONBOARDING_STAGES,
  FOLLOW_UP_STATUSES,
  STAGE_LABELS,
  addDaysIso,
  nowIso,
  computeTrial,
  ensureTrialSchema,
  maxStage,
  type OnboardingStage,
  type FollowUpStatus,
} from './trial'
import { ensurePageviewsTable, getRequestGeo } from './geo'

type Bindings = {
  DB: D1Database
  R2_BUCKET: R2Bucket
  R2_DOMAIN: string
  JWT_SECRET: string
  SHOPLINE_JWT_SECRET: string
  STRIPE_SECRET_KEY?: string
  STRIPE_WEBHOOK_SECRET?: string
  SITE_URL?: string
}

type Variables = {
  adminPayload: { userId: number; email: string; isAdmin?: number }
  userPayload: { userId: number; email: string; isAdmin?: number }
}

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>()

// CORS 配置 - 支持跨系统审计上报
app.use('*', cors({
  origin: [
    'https://shopline-frontend.pages.dev', 
    'https://tinywearhouse-frontend.pages.dev',
    'https://tinywearhouse-v2.pages.dev',
    'https://ims-frontend.pages.dev',
    'https://ims-v2.pages.dev',
    'https://daf-shoes-frontend.pages.dev',
    'https://daf-shoes-v2.pages.dev',
    'https://molava-frontend.pages.dev',
    'https://molava-v2.pages.dev',
    'https://zenlet-frontend.pages.dev',
    'https://zenlet-v2.pages.dev',
    'https://meierq-frontend.pages.dev',
    'https://meierq-v2.pages.dev',
    'https://arvixai.com',
    'https://www.arvixai.com',
    'http://localhost:3000',
    'http://localhost:3001'
  ],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'X-System-Source'],
}))

// 统一审计切面中间件（类似 Java AOP）
app.use('/api/*', async (c, next) => {
  const startTime = Date.now()
  const method = c.req.method
  const url = c.req.url
  const path = new URL(url).pathname
  
  // 跳过不需要审计的路径
  const skipPaths = ['/', '/api/init', '/api/init-admin', '/api/auth/login', '/api/auth/register', '/api/pageviews', '/api/events']
  if (skipPaths.includes(path)) {
    await next()
    return
  }
  
  // 提取用户信息
  let userId = null
  let userEmail = null
  const authHeader = c.req.header('Authorization')
  if (authHeader?.startsWith('Bearer ')) {
    try {
      const token = authHeader.slice(7)
      const payload = await verifyToken(token, c.env.JWT_SECRET)
      if (payload) {
        userId = payload.userId?.toString()
        userEmail = payload.email
      }
    } catch {
      // Token 无效，继续处理
    }
  }
  
  // 执行原始请求
  await next()
  
  // 记录审计日志
  const endTime = Date.now()
  const responseTime = endTime - startTime
  const responseStatus = c.res.status
  
  // 只记录有用户信息的操作
  if (userId && userEmail) {
    try {
      const auditId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      // 解析操作类型
      let operationType = 'unknown'
      let operationDetail = ''
      
      if (path.includes('/products')) {
        if (method === 'GET' && path.includes('/')) {
          operationType = 'product_view'
          operationDetail = '查看商品详情'
        } else if (method === 'GET') {
          operationType = 'product_list_view'
          operationDetail = '浏览商品列表'
        }
      } else if (path.includes('/cart')) {
        operationType = 'cart_operation'
        operationDetail = '购物车操作'
      } else if (path.includes('/orders')) {
        operationType = 'order_operation'
        operationDetail = '订单操作'
      } else if (path.includes('/trial')) {
        operationType = 'trial_operation'
        operationDetail = '试用系统操作'
      } else if (path.includes('/admin')) {
        operationType = 'admin_operation'
        operationDetail = '管理员操作'
      }
      
      await c.env.DB.prepare(`
        INSERT INTO audit_logs (
          id, user_id, session_id, system_name, operation_type, operation_detail,
          ip_address, user_agent, device_type, location_country, location_city,
          timestamp, response_status, response_time
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        auditId,
        userId,
        `session_${Date.now()}`,
        'SHOPLINE',
        operationType,
        operationDetail,
        c.req.header('CF-Connecting-IP') || '',
        c.req.header('User-Agent') || '',
        'web',
        c.req.header('CF-IPCountry') || '',
        c.req.header('CF-IPCity') || '',
        new Date().toISOString(),
        responseStatus,
        responseTime
      ).run()
    } catch (e) {
      console.error('Audit logging error:', e)
    }
  }
})

// 健康检查
app.get('/', (c) => {
  return c.json({ message: 'SHOPLINE Clone API is running!' })
})

const stripePlans = {
  starter: { name: 'ARVIX 網店探索者', unitAmount: 99000 },
  growth: { name: 'ARVIX 電商戰略家', unitAmount: 199000 },
  omo: { name: 'ARVIX OMO 大師', unitAmount: 399000 },
} as const

const secureCompare = (left: string, right: string) => {
  if (left.length !== right.length) return false
  let diff = 0
  for (let i = 0; i < left.length; i += 1) diff |= left.charCodeAt(i) ^ right.charCodeAt(i)
  return diff === 0
}

const signStripePayload = async (secret: string, payload: string) => {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  return Array.from(new Uint8Array(signature)).map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

app.post('/api/checkout/session', async (c) => {
  if (!c.env.STRIPE_SECRET_KEY) return c.json({ error: '付款功能尚未完成商戶配置' }, 503)
  const body = await c.req.json<{ plan?: string; email?: string }>()
  const planKey = String(body.plan || '').toLowerCase() as keyof typeof stripePlans
  const plan = stripePlans[planKey]
  if (!plan) return c.json({ error: '無效的訂閱方案' }, 400)

  const siteUrl = (c.env.SITE_URL || 'https://arvixai.com').replace(/\/$/, '')
  const params = new URLSearchParams({
    mode: 'subscription',
    'line_items[0][price_data][currency]': 'twd',
    'line_items[0][price_data][unit_amount]': String(plan.unitAmount),
    'line_items[0][price_data][recurring][interval]': 'month',
    'line_items[0][price_data][product_data][name]': plan.name,
    'line_items[0][quantity]': '1',
    allow_promotion_codes: 'true',
    'subscription_data[metadata][arvix_plan]': planKey,
    success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/about/pricing?checkout=cancelled`,
  })
  const email = String(body.email || '').trim()
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) params.set('customer_email', email)

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${c.env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  })
  const result = await response.json<any>()
  if (!response.ok || !result?.url) {
    console.error('Stripe Checkout error', result?.error?.type, result?.error?.code)
    return c.json({ error: '暫時無法建立付款頁面，請稍後再試' }, 502)
  }
  return c.json({ url: result.url })
})

app.post('/api/stripe/webhook', async (c) => {
  if (!c.env.STRIPE_WEBHOOK_SECRET) return c.json({ error: 'Webhook 未配置' }, 503)
  const header = c.req.header('Stripe-Signature') || ''
  const timestamp = header.split(',').find((part) => part.startsWith('t='))?.slice(2) || ''
  const signatures = header.split(',').filter((part) => part.startsWith('v1=')).map((part) => part.slice(3))
  const rawBody = await c.req.text()
  if (!timestamp || Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp)) > 300) return c.json({ error: '無效或過期的簽名' }, 400)
  const expected = await signStripePayload(c.env.STRIPE_WEBHOOK_SECRET, `${timestamp}.${rawBody}`)
  if (!signatures.some((signature) => secureCompare(signature, expected))) return c.json({ error: '簽名驗證失敗' }, 400)

  const event = JSON.parse(rawBody)
  await c.env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS stripe_events (
      id TEXT PRIMARY KEY, type TEXT NOT NULL, livemode INTEGER NOT NULL DEFAULT 0,
      payload TEXT NOT NULL, received_at TEXT NOT NULL DEFAULT (datetime('now', '+8 hours'))
    )
  `).run()
  await c.env.DB.prepare('INSERT OR IGNORE INTO stripe_events (id, type, livemode, payload) VALUES (?, ?, ?, ?)')
    .bind(event.id, event.type, event.livemode ? 1 : 0, rawBody).run()
  return c.json({ received: true })
})

// Admin middleware
const requireAdmin = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) return c.json({ error: '未授權' }, 401)
  const token = authHeader.slice(7)
  const payload = await verifyToken(token, c.env.JWT_SECRET)
  if (!payload) return c.json({ error: 'Token 無效或已過期' }, 401)
  if (!payload.isAdmin) return c.json({ error: '需要管理員權限' }, 403)
  c.set('adminPayload', payload)
  await next()
}

const requireUser = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) return c.json({ error: '未授權' }, 401)
  const payload = await verifyToken(authHeader.slice(7), c.env.JWT_SECRET)
  if (!payload) return c.json({ error: 'Token 無效或已過期' }, 401)
  c.set('userPayload', payload as any)
  await next()
}

async function getAuthUser(c: any) {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) return null
  return verifyToken(authHeader.slice(7), c.env.JWT_SECRET)
}

// Init admin account
app.post('/api/init-admin', async (c) => {
  const passwordHash = await hashPassword('admin123')
  try {
    await c.env.DB.prepare(`INSERT OR REPLACE INTO users (email, password_hash, name, is_admin) VALUES ('admin@admin.com', '${passwordHash}', 'Admin', 1)`).run()
    return c.json({ ok: true, email: 'admin@admin.com', password: 'admin123' })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 商品相关路由
app.get('/api/products', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const products = await db.select().from(schema.products)
  return c.json(products)
})

app.get('/api/products/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const db = drizzle(c.env.DB, { schema })
  const product = await db.select().from(schema.products).where(eq(schema.products.id, id)).get()
  
  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }
  
  return c.json(product)
})

app.post('/api/products', async (c) => {
  try {
    const body = await c.req.json()
    const db = drizzle(c.env.DB, { schema })
    
    // 验证必填字段
    if (!body.name || !body.name.trim()) {
      return c.json({ error: '商品名称不能为空' }, 400)
    }
    
    if (!body.price || body.price <= 0) {
      return c.json({ error: '请输入有效的商品价格' }, 400)
    }
    
    if (!body.category) {
      return c.json({ error: '请选择商品分类' }, 400)
    }
    
    const newProduct = await db.insert(schema.products).values({
      name: body.name.trim(),
      description: body.description?.trim() || '',
      price: Number(body.price),
      imageUrl: body.imageUrl || '',
      category: body.category,
      stock: Number(body.stock) || 0,
      featured: Boolean(body.featured)
    }).returning().get()
    
    return c.json(newProduct, 201)
  } catch (error) {
    console.error('Create product error:', error)
    return c.json({ error: '创建商品失败，请重试' }, 500)
  }
})

// 更新商品信息
app.put('/api/products/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  
  try {
    const body = await c.req.json()
    const db = drizzle(c.env.DB, { schema })
    
    // 验证必填字段
    if (!body.name || !body.name.trim()) {
      return c.json({ error: '商品名称不能为空' }, 400)
    }
    
    if (!body.price || body.price <= 0) {
      return c.json({ error: '请输入有效的商品价格' }, 400)
    }
    
    if (!body.category) {
      return c.json({ error: '请选择商品分类' }, 400)
    }
    
    const updatedProduct = await db.update(schema.products)
      .set({
        name: body.name.trim(),
        description: body.description?.trim() || '',
        price: Number(body.price),
        imageUrl: body.imageUrl || '',
        category: body.category,
        stock: Number(body.stock) || 0,
        featured: Boolean(body.featured),
        updatedAt: new Date().toISOString()
      })
      .where(eq(schema.products.id, id))
      .returning()
      .get()
    
    if (!updatedProduct) {
      return c.json({ error: '商品不存在' }, 404)
    }
    
    return c.json(updatedProduct)
  } catch (error) {
    console.error('Update product error:', error)
    return c.json({ error: '更新商品失败，请重试' }, 500)
  }
})

// 删除商品
app.delete('/api/products/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  
  try {
    const db = drizzle(c.env.DB, { schema })
    
    // 先检查商品是否存在
    const existingProduct = await db.select().from(schema.products).where(eq(schema.products.id, id)).get()
    
    if (!existingProduct) {
      return c.json({ error: '商品不存在' }, 404)
    }
    
    // 删除商品
    const deletedProduct = await db.delete(schema.products).where(eq(schema.products.id, id)).returning().get()
    
    if (deletedProduct) {
      return c.json({ message: '商品删除成功' })
    } else {
      return c.json({ error: '删除操作失败' }, 500)
    }
  } catch (error) {
    console.error('Delete product error:', error)
    return c.json({ error: '删除商品失败，请重试' }, 500)
  }
})

// 图片上传到 R2
app.post('/api/upload', async (c) => {
  try {
    const formData = await c.req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return c.json({ error: '请选择要上传的文件' }, 400)
    }
    
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      return c.json({ error: '只支持图片文件格式' }, 400)
    }
    
    // 验证文件大小 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return c.json({ error: '文件大小不能超过 5MB' }, 400)
    }
    
    const fileName = `products/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
    
    await c.env.R2_BUCKET.put(fileName, file.stream(), {
      httpMetadata: {
        contentType: file.type,
      },
    })
    
    // 使用Worker代理URL而不是直接的R2 URL
    const baseUrl = new URL(c.req.url).origin
    const imageUrl = `${baseUrl}/images/${fileName}`
    
    return c.json({ imageUrl })
  } catch (error) {
    console.error('Upload error:', error)
    return c.json({ error: '文件上传失败，请重试' }, 500)
  }
})

// 分类相关路由
app.get('/api/categories', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const categories = await db.select().from(schema.categories)
  return c.json(categories)
})

// DB 初始化 / migration
app.post('/api/init', async (c) => {
  const stmts = [
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, name TEXT NOT NULL, password_hash TEXT NOT NULL DEFAULT '', phone TEXT, address TEXT, is_admin INTEGER DEFAULT 0, created_at TEXT DEFAULT datetime('now', '+8 hours'), updated_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT, image_url TEXT, created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT, price REAL NOT NULL, image_url TEXT, category TEXT, stock INTEGER DEFAULT 0, featured INTEGER DEFAULT 0, created_at TEXT DEFAULT datetime('now', '+8 hours'), updated_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id), total_amount REAL NOT NULL, status TEXT DEFAULT 'pending', shipping_address TEXT, created_at TEXT DEFAULT datetime('now', '+8 hours'), updated_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS order_items (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER REFERENCES orders(id), product_id INTEGER REFERENCES products(id), quantity INTEGER NOT NULL, price REAL NOT NULL, created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS cart_items (id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT NOT NULL, user_id INTEGER REFERENCES users(id), product_id INTEGER REFERENCES products(id) NOT NULL, quantity INTEGER NOT NULL DEFAULT 1, created_at TEXT DEFAULT datetime('now', '+8 hours'), updated_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS trial_systems (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, desc TEXT NOT NULL DEFAULT '', url TEXT NOT NULL, color TEXT NOT NULL DEFAULT '#3B82F6', bg TEXT NOT NULL DEFAULT 'rgba(59,130,246,0.08)', border TEXT NOT NULL DEFAULT 'rgba(59,130,246,0.2)', emoji TEXT NOT NULL DEFAULT '🌐', tags TEXT NOT NULL DEFAULT '[]', active INTEGER NOT NULL DEFAULT 1, sort_order INTEGER NOT NULL DEFAULT 0, created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, anonymous_id TEXT NOT NULL, user_id INTEGER, event TEXT NOT NULL, properties TEXT DEFAULT '{}', created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS audit_logs (id TEXT PRIMARY KEY, user_id TEXT, session_id TEXT NOT NULL, system_name TEXT NOT NULL, operation_type TEXT NOT NULL, operation_detail TEXT, ip_address TEXT, user_agent TEXT, device_type TEXT, location_country TEXT, location_city TEXT, timestamp DATETIME DEFAULT datetime('now', '+8 hours'), response_status INTEGER, response_time INTEGER, error_message TEXT, created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS user_sessions (session_id TEXT PRIMARY KEY, user_id TEXT, system_name TEXT NOT NULL, ip_address TEXT, user_agent TEXT, device_type TEXT, start_time DATETIME DEFAULT datetime('now', '+8 hours'), last_activity DATETIME DEFAULT datetime('now', '+8 hours'), page_count INTEGER DEFAULT 1, is_active BOOLEAN DEFAULT 1)`,
    `CREATE TABLE IF NOT EXISTS operation_types (id TEXT PRIMARY KEY, category TEXT NOT NULL, action TEXT NOT NULL, description TEXT, risk_level INTEGER DEFAULT 1)`,
    `CREATE TABLE IF NOT EXISTS audit_systems (id TEXT PRIMARY KEY, name TEXT NOT NULL, display_name TEXT NOT NULL, url TEXT, color TEXT DEFAULT '#3B82F6', active BOOLEAN DEFAULT 1)`,
    // Affiliate & traffic tracking
    `CREATE TABLE IF NOT EXISTS affiliates (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT NOT NULL UNIQUE, name TEXT NOT NULL, email TEXT, commission_rate REAL NOT NULL DEFAULT 0.1, total_clicks INTEGER DEFAULT 0, total_conversions INTEGER DEFAULT 0, total_revenue REAL DEFAULT 0, total_commission REAL DEFAULT 0, active INTEGER DEFAULT 1, created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
    `CREATE TABLE IF NOT EXISTS affiliate_conversions (id INTEGER PRIMARY KEY AUTOINCREMENT, affiliate_code TEXT NOT NULL, user_id INTEGER, event TEXT NOT NULL, revenue REAL DEFAULT 0, commission REAL DEFAULT 0, created_at TEXT DEFAULT datetime('now', '+8 hours'))`,
  ]
  try {
    for (const sql of stmts) {
      await c.env.DB.prepare(sql).run()
    }
    
    // 插入初始化数据
    const initData = [
      `INSERT OR IGNORE INTO audit_systems (id, name, display_name, url, color) VALUES 
        ('shopline', 'shopline', 'SHOPLINE 主系统', 'https://shopline-frontend.pages.dev', '#3B82F6'),
        ('daf-shoes', 'daf-shoes', 'DAF Shoes', 'https://daf-shoes.pages.dev', '#10B981'),
        ('molava', 'molava', 'XYN Shop', 'https://xyn-shop.pages.dev', '#8B5CF6'),
        ('ims', 'ims', 'IMS 系统', 'https://ims.pages.dev', '#F59E0B'),
        ('meierq', 'meierq', 'MeierQ', 'https://meierq.pages.dev', '#EF4444'),
        ('tinywearhouse', 'tinywearhouse', 'Tiny Warehouse', 'https://tinywearhouse.pages.dev', '#EC4899'),
        ('zenlet', 'zenlet', 'Zenlet', 'https://zenlet.pages.dev', '#6366F1')`,
      `INSERT OR IGNORE INTO operation_types (id, category, action, description, risk_level) VALUES 
        ('auth_login', '认证', '登录', '用户登录系统', 1),
        ('auth_logout', '认证', '登出', '用户登出系统', 1),
        ('auth_register', '认证', '注册', '新用户注册', 2),
        ('page_view', '页面', '浏览', '用户浏览页面', 1),
        ('product_view', '商品', '查看', '用户查看商品详情', 1),
        ('product_search', '商品', '搜索', '用户搜索商品', 1),
        ('cart_add', '购物车', '添加', '添加商品到购物车', 2),
        ('cart_remove', '购物车', '移除', '从购物车移除商品', 2),
        ('cart_clear', '购物车', '清空', '清空购物车', 2),
        ('order_create', '订单', '创建', '用户创建订单', 3),
        ('order_cancel', '订单', '取消', '用户取消订单', 3),
        ('admin_login', '管理', '登录', '管理员登录', 3),
        ('admin_product_create', '管理', '创建商品', '管理员创建商品', 3),
        ('admin_product_update', '管理', '更新商品', '管理员更新商品', 3),
        ('admin_product_delete', '管理', '删除商品', '管理员删除商品', 4),
        ('admin_user_delete', '管理', '删除用户', '管理员删除用户', 4),
        ('error_404', '错误', '404', '页面不存在', 2),
        ('error_500', '错误', '500', '服务器错误', 3)`
    ]
    
    for (const sql of initData) {
      await c.env.DB.prepare(sql).run()
    }
    
    // migration: add columns if missing
    try { await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN password_hash TEXT NOT NULL DEFAULT ''`).run() } catch {}
    try { await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN is_admin INTEGER DEFAULT 0`).run() } catch {}
    await ensureStoresTable(c.env.DB)
    await ensureTrialSchema(c.env.DB)
    return c.json({ message: 'DB initialized' })
  } catch (error) {
    console.error('Init error:', error)
    return c.json({ error: String(error) }, 500)
  }
})

// Auth 路由
app.post('/api/auth/register', async (c) => {
  try {
    const { email, password, name, phone, shopName, slug: requestedSlug, ref, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = await c.req.json()
    if (!email || !password) return c.json({ error: '請填寫 Email 和密碼' }, 400)
    if (password.length < 6) return c.json({ error: '密碼至少 6 個字元' }, 400)

    const db = drizzle(c.env.DB, { schema })
    const existing = await db.select().from(schema.users).where(eq(schema.users.email, email)).get()
    if (existing) return c.json({ error: 'Email 已被註冊' }, 409)

    const passwordHash = await hashPassword(password)
    const displayName = name || shopName || email.split('@')[0]
    const user = await db.insert(schema.users).values({
      email,
      name: displayName,
      passwordHash,
      phone: phone || null,
    }).returning().get()

    // Migrate: add traffic source columns if not exist
    await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN ref TEXT`).run().catch(() => {})
    await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN utm_source TEXT`).run().catch(() => {})
    await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN utm_medium TEXT`).run().catch(() => {})
    await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN utm_campaign TEXT`).run().catch(() => {})

    // Save traffic source
    if (ref || utm_source) {
      await c.env.DB.prepare(
        `UPDATE users SET ref=?, utm_source=?, utm_medium=?, utm_campaign=? WHERE id=?`
      ).bind(ref||null, utm_source||null, utm_medium||null, utm_campaign||null, user.id).run()
    }

    // Track affiliate conversion
    if (ref) {
      await c.env.DB.prepare(`ALTER TABLE affiliates ADD COLUMN code TEXT`).run().catch(() => {})
      const aff = await c.env.DB.prepare(`SELECT id, commission_rate FROM affiliates WHERE code=? AND active=1`).bind(ref).first<{id:number,commission_rate:number}>()
      if (aff) {
        await c.env.DB.prepare(`UPDATE affiliates SET total_clicks=total_clicks+1, total_conversions=total_conversions+1 WHERE code=?`).bind(ref).run()
        await c.env.DB.prepare(`INSERT INTO affiliate_conversions (affiliate_code, user_id, event, revenue, commission) VALUES (?,?,?,0,0)`).bind(ref, user.id, 'register').run()
      }
    }

    // Provision brand store: public URL /{slug}
    await ensureStoresTable(c.env.DB)
    await ensureTrialSchema(c.env.DB)
    const preferred = requestedSlug || shopName || displayName
    const slug = await allocateUniqueSlug(c.env.DB, preferred, email.split('@')[0] || `shop${user.id}`)
    const storeName = (shopName || displayName || slug).trim()
    const trialStart = nowIso()
    const trialEnd = addDaysIso(TRIAL_DAYS)
    await c.env.DB.prepare(
      `UPDATE users SET trial_started_at=?, trial_ends_at=?, plan_status='trialing', follow_up_status='new' WHERE id=?`
    ).bind(trialStart, trialEnd, user.id).run()
    await c.env.DB.prepare(
      `INSERT INTO stores (user_id, slug, name, tagline, status, onboarding_stage, last_active_at) VALUES (?, ?, ?, ?, 'active', 'store_created', ?)`
    ).bind(user.id, slug, storeName, '用 ARVIX 架起來的品牌電商', trialStart).run()

    // Funnel event
    await c.env.DB.prepare(
      `INSERT INTO events (anonymous_id, user_id, event, properties, created_at) VALUES (?, ?, 'sign_up_complete', ?, datetime('now', '+8 hours'))`
    ).bind(`user_${user.id}`, user.id, JSON.stringify({ slug, trialEndsAt: trialEnd })).run().catch(() => {})

    const token = await signToken({ userId: user.id, email: user.email, isAdmin: user.isAdmin }, c.env.JWT_SECRET)
    return c.json({
      token,
      user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin },
      store: { slug, name: storeName, urlPath: `/s/shop?slug=${slug}` },
      trial: { planStatus: 'trialing', trialStartedAt: trialStart, trialEndsAt: trialEnd, daysLeft: TRIAL_DAYS },
    }, 201)
  } catch (error) {
    console.error('Register error:', error)
    return c.json({ error: '註冊失敗，請重試' }, 500)
  }
})

app.post('/api/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json()
    if (!email || !password) return c.json({ error: '請填寫 Email 和密碼' }, 400)

    const db = drizzle(c.env.DB, { schema })
    const user = await db.select().from(schema.users).where(eq(schema.users.email, email)).get()
    if (!user) return c.json({ error: 'Email 或密碼錯誤' }, 401)

    const valid = await verifyPassword(password, user.passwordHash)
    if (!valid) return c.json({ error: 'Email 或密碼錯誤' }, 401)

    const token = await signToken({ userId: user.id, email: user.email, isAdmin: user.isAdmin }, c.env.JWT_SECRET)
    return c.json({ token, user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin } })
  } catch (error) {
    console.error('Login error:', error)
    return c.json({ error: '登入失敗，請重試' }, 500)
  }
})

app.get('/api/auth/me', async (c) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) return c.json({ error: '未授權' }, 401)
  const token = authHeader.slice(7)
  const payload = await verifyToken(token, c.env.JWT_SECRET)
  if (!payload) return c.json({ error: 'Token 無效或已過期' }, 401)

  const db = drizzle(c.env.DB, { schema })
  const user = await db.select().from(schema.users).where(eq(schema.users.id, payload.userId)).get()
  if (!user) return c.json({ error: '用戶不存在' }, 404)
  return c.json({ id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin })
})

// ── Forgot / Reset Password ───────────────────────────────────────────────────
app.post('/api/auth/forgot-password', async (c) => {
  try {
    const { email } = await c.req.json()
    if (!email) return c.json({ error: '請輸入 Email' }, 400)

    // Migrate: add reset_token columns if not exist
    await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN reset_token TEXT`).run().catch(() => {})
    await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN reset_token_exp INTEGER`).run().catch(() => {})

    const user = await c.env.DB.prepare(`SELECT id, email, name FROM users WHERE email = ?`).bind(email).first<{ id: number; email: string; name: string }>()
    // Always return success to prevent email enumeration
    if (!user) return c.json({ ok: true })

    // Generate reset token (random hex)
    const tokenBytes = crypto.getRandomValues(new Uint8Array(32))
    const resetToken = Array.from(tokenBytes).map(b => b.toString(16).padStart(2, '0')).join('')
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 // 1 hour

    await c.env.DB.prepare(`UPDATE users SET reset_token = ?, reset_token_exp = ? WHERE id = ?`).bind(resetToken, exp, user.id).run()

    const resetUrl = `https://shopline-frontend.pages.dev/reset-password?token=${resetToken}`
    const resendKey = (c.env as any).RESEND_API_KEY
    const brevoKey = (c.env as any).BREVO_API_KEY

    const emailHtml = `<!DOCTYPE html>
<html lang="zh-TW">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 16px">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%">
        <!-- Logo -->
        <tr><td align="center" style="padding-bottom:32px">
          <div style="display:inline-flex;align-items:center;gap:8px">
            <div style="width:36px;height:36px;background:#3b82f6;border-radius:8px;display:inline-block;text-align:center;line-height:36px;font-size:18px;font-weight:900;color:#fff">S</div>
            <span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px">SHOPLINE</span>
          </div>
        </td></tr>
        <!-- Card -->
        <tr><td style="background:#1e293b;border-radius:16px;padding:40px 36px;border:1px solid #334155">
          <!-- Icon -->
          <div style="text-align:center;margin-bottom:24px">
            <div style="width:64px;height:64px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:16px;display:inline-block;text-align:center;line-height:64px;font-size:28px">🔐</div>
          </div>
          <!-- Title -->
          <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#f1f5f9;text-align:center">重置你的密碼</h1>
          <p style="margin:0 0 28px;font-size:14px;color:#94a3b8;text-align:center">我們收到了你的密碼重置請求</p>
          <!-- Greeting -->
          <p style="margin:0 0 24px;font-size:15px;color:#cbd5e1;line-height:1.6">
            你好 <strong style="color:#f1f5f9">${user.name}</strong>，<br>
            請點擊下方按鈕設定新密碼。此連結將在 <strong style="color:#f59e0b">1 小時</strong>後失效。
          </p>
          <!-- Button -->
          <div style="text-align:center;margin:32px 0">
            <a href="${resetUrl}" style="display:inline-block;padding:14px 40px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;text-decoration:none;border-radius:10px;font-weight:700;font-size:16px;letter-spacing:0.3px;box-shadow:0 4px 15px rgba(59,130,246,0.4)">
              立即重置密碼 →
            </a>
          </div>
          <!-- Divider -->
          <div style="border-top:1px solid #334155;margin:28px 0"></div>
          <!-- Security note -->
          <div style="background:#0f172a;border-radius:8px;padding:16px;border-left:3px solid #3b82f6">
            <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6">
              🛡️ <strong style="color:#94a3b8">安全提示：</strong>如果你沒有發出此請求，請忽略此郵件，你的帳號不會有任何變更。請勿將此連結分享給任何人。
            </p>
          </div>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:24px 0;text-align:center">
          <p style="margin:0;font-size:12px;color:#475569">© 2026 SHOPLINE · ARVIX Limited</p>
          <p style="margin:4px 0 0;font-size:11px;color:#334155">此郵件由系統自動發送，請勿直接回覆</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

    if (brevoKey) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': brevoKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'SHOPLINE', email: 'wxfaigl@gmail.com' },
          to: [{ email }],
          subject: '【SHOPLINE】重置你的密碼',
          htmlContent: emailHtml,
        }),
      })
    } else if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'SHOPLINE <onboarding@resend.dev>',
          to: [email],
          subject: '【SHOPLINE】重置你的密碼',
          html: emailHtml,
        }),
      })
    }

    return c.json({ ok: true })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

app.post('/api/auth/reset-password', async (c) => {
  try {
    const { token: resetToken, password } = await c.req.json()
    if (!resetToken || !password) return c.json({ error: '參數缺失' }, 400)
    if (password.length < 6) return c.json({ error: '密碼至少 6 個字元' }, 400)

    const now = Math.floor(Date.now() / 1000)
    const user = await c.env.DB.prepare(
      `SELECT id FROM users WHERE reset_token = ? AND reset_token_exp > ?`
    ).bind(resetToken, now).first<{ id: number }>()

    if (!user) return c.json({ error: '連結無效或已過期' }, 400)

    const { hashPassword } = await import('./auth')
    const hash = await hashPassword(password)
    await c.env.DB.prepare(
      `UPDATE users SET password_hash = ?, reset_token = NULL, reset_token_exp = NULL WHERE id = ?`
    ).bind(hash, user.id).run()

    return c.json({ ok: true })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 用户相关路由 (admin only)
app.get('/api/users', requireAdmin, async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const users = await db.select({
    id: schema.users.id,
    email: schema.users.email,
    name: schema.users.name,
    phone: schema.users.phone,
    isAdmin: schema.users.isAdmin,
    createdAt: schema.users.createdAt,
  }).from(schema.users)
  return c.json(users)
})

app.delete('/api/users/:id', requireAdmin, async (c) => {
  const id = parseInt(c.req.param('id'))
  try {
    const db = drizzle(c.env.DB, { schema })
    await db.delete(schema.users).where(eq(schema.users.id, id))
    return c.json({ message: '用戶已刪除' })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// Trial systems CRUD (GET public, others admin only)
app.get('/api/trial-systems', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const systems = await db.select().from(schema.trialSystems).orderBy(schema.trialSystems.sortOrder)
  return c.json(systems.map(s => ({ ...s, tags: JSON.parse(s.tags || '[]') })))
})

app.post('/api/trial-systems', requireAdmin, async (c) => {
  try {
    const body = await c.req.json()
    const db = drizzle(c.env.DB, { schema })
    const item = await db.insert(schema.trialSystems).values({
      name: body.name,
      desc: body.desc || '',
      url: body.url,
      color: body.color || '#3B82F6',
      bg: body.bg || 'rgba(59,130,246,0.08)',
      border: body.border || 'rgba(59,130,246,0.2)',
      emoji: body.emoji || '🌐',
      tags: JSON.stringify(body.tags || []),
      active: body.active ?? 1,
      sortOrder: body.sortOrder ?? 0,
    }).returning().get()
    return c.json({ ...item, tags: JSON.parse(item.tags || '[]') }, 201)
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

app.put('/api/trial-systems/:id', requireAdmin, async (c) => {
  const id = parseInt(c.req.param('id'))
  try {
    const body = await c.req.json()
    const db = drizzle(c.env.DB, { schema })
    const item = await db.update(schema.trialSystems).set({
      name: body.name,
      desc: body.desc || '',
      url: body.url,
      color: body.color || '#3B82F6',
      bg: body.bg || 'rgba(59,130,246,0.08)',
      border: body.border || 'rgba(59,130,246,0.2)',
      emoji: body.emoji || '🌐',
      tags: JSON.stringify(body.tags || []),
      active: body.active ?? 1,
      sortOrder: body.sortOrder ?? 0,
    }).where(eq(schema.trialSystems.id, id)).returning().get()
    if (!item) return c.json({ error: '不存在' }, 404)
    return c.json({ ...item, tags: JSON.parse(item.tags || '[]') })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

app.delete('/api/trial-systems/:id', requireAdmin, async (c) => {
  const id = parseInt(c.req.param('id'))
  try {
    const db = drizzle(c.env.DB, { schema })
    await db.delete(schema.trialSystems).where(eq(schema.trialSystems.id, id))
    return c.json({ message: '已刪除' })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 订单相关路由
app.get('/api/orders', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const orders = await db.select().from(schema.orders)
  return c.json(orders)
})

// 购物车相关路由
app.get('/api/cart/:sessionId', async (c) => {
  const sessionId = c.req.param('sessionId')
  const db = drizzle(c.env.DB, { schema })
  
  try {
    const cartItems = await db.select({
      id: schema.cartItems.id,
      productId: schema.cartItems.productId,
      quantity: schema.cartItems.quantity,
      product: {
        id: schema.products.id,
        name: schema.products.name,
        price: schema.products.price,
        imageUrl: schema.products.imageUrl,
        category: schema.products.category,
        stock: schema.products.stock
      }
    })
    .from(schema.cartItems)
    .leftJoin(schema.products, eq(schema.cartItems.productId, schema.products.id))
    .where(eq(schema.cartItems.sessionId, sessionId))
    
    return c.json(cartItems)
  } catch (error) {
    console.error('Get cart error:', error)
    return c.json({ error: '获取购物车失败' }, 500)
  }
})

app.post('/api/cart', async (c) => {
  try {
    const body = await c.req.json()
    const { sessionId, productId, quantity = 1 } = body
    const db = drizzle(c.env.DB, { schema })
    
    if (!sessionId || !productId) {
      return c.json({ error: '缺少必要参数' }, 400)
    }
    
    // 检查商品是否存在
    const product = await db.select().from(schema.products).where(eq(schema.products.id, productId)).get()
    if (!product) {
      return c.json({ error: '商品不存在' }, 404)
    }
    
    // 检查库存
    if (product.stock < quantity) {
      return c.json({ error: '库存不足' }, 400)
    }
    
    // 检查购物车中是否已有该商品
    const existingItem = await db.select()
      .from(schema.cartItems)
      .where(
        eq(schema.cartItems.sessionId, sessionId) && 
        eq(schema.cartItems.productId, productId)
      )
      .get()
    
    if (existingItem) {
      // 更新数量
      const newQuantity = existingItem.quantity + quantity
      if (product.stock < newQuantity) {
        return c.json({ error: '库存不足' }, 400)
      }
      
      const updatedItem = await db.update(schema.cartItems)
        .set({ 
          quantity: newQuantity,
          updatedAt: new Date().toISOString()
        })
        .where(eq(schema.cartItems.id, existingItem.id))
        .returning()
        .get()
      
      return c.json(updatedItem)
    } else {
      // 添加新商品
      const newItem = await db.insert(schema.cartItems)
        .values({
          sessionId,
          productId,
          quantity
        })
        .returning()
        .get()
      
      return c.json(newItem)
    }
  } catch (error) {
    console.error('Add to cart error:', error)
    return c.json({ error: '添加到购物车失败' }, 500)
  }
})

app.put('/api/cart/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  
  try {
    const body = await c.req.json()
    const { quantity } = body
    const db = drizzle(c.env.DB, { schema })
    
    if (!quantity || quantity < 1) {
      return c.json({ error: '数量必须大于0' }, 400)
    }
    
    // 获取购物车项目和商品信息
    const cartItem = await db.select({
      cartItem: schema.cartItems,
      product: schema.products
    })
    .from(schema.cartItems)
    .leftJoin(schema.products, eq(schema.cartItems.productId, schema.products.id))
    .where(eq(schema.cartItems.id, id))
    .get()
    
    if (!cartItem) {
      return c.json({ error: '购物车项目不存在' }, 404)
    }
    
    // 检查库存
    if (cartItem.product && cartItem.product.stock < quantity) {
      return c.json({ error: '库存不足' }, 400)
    }
    
    const updatedItem = await db.update(schema.cartItems)
      .set({ 
        quantity,
        updatedAt: new Date().toISOString()
      })
      .where(eq(schema.cartItems.id, id))
      .returning()
      .get()
    
    return c.json(updatedItem)
  } catch (error) {
    console.error('Update cart error:', error)
    return c.json({ error: '更新购物车失败' }, 500)
  }
})

app.delete('/api/cart/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  
  try {
    const db = drizzle(c.env.DB, { schema })
    
    const deletedItem = await db.delete(schema.cartItems)
      .where(eq(schema.cartItems.id, id))
      .returning()
      .get()
    
    if (!deletedItem) {
      return c.json({ error: '购物车项目不存在' }, 404)
    }
    
    return c.json({ message: '商品已从购物车移除' })
  } catch (error) {
    console.error('Remove from cart error:', error)
    return c.json({ error: '移除商品失败' }, 500)
  }
})

app.delete('/api/cart/clear/:sessionId', async (c) => {
  const sessionId = c.req.param('sessionId')
  
  try {
    const db = drizzle(c.env.DB, { schema })
    
    await db.delete(schema.cartItems)
      .where(eq(schema.cartItems.sessionId, sessionId))
    
    return c.json({ message: '购物车已清空' })
  } catch (error) {
    console.error('Clear cart error:', error)
    return c.json({ error: '清空购物车失败' }, 500)
  }
})

// 图片代理路由 - 通过Worker提供R2图片访问
app.get('/images/*', async (c) => {
  try {
    const fullPath = c.req.path
    const imagePath = fullPath.replace('/images/', '')
    
    if (!imagePath) {
      return c.json({ error: 'Image path required' }, 400)
    }
    
    // 从R2获取图片
    const object = await c.env.R2_BUCKET.get(imagePath)
    
    if (!object) {
      return c.json({ error: 'Image not found' }, 404)
    }
    
    // 设置适当的响应头
    const headers = new Headers()
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream')
    headers.set('Cache-Control', 'public, max-age=31536000') // 缓存1年
    headers.set('Access-Control-Allow-Origin', '*')
    
    return new Response(object.body, {
      headers
    })
  } catch (error) {
    console.error('Image proxy error:', error)
    return c.json({ error: 'Failed to serve image' }, 500)
  }
})

// ── Events tracking ──────────────────────────────────────────────────────────
app.post('/api/events', async (c) => {
  try {
    const { anonymousId, userId, event, properties } = await c.req.json()
    if (!anonymousId || !event) return c.json({ error: 'missing fields' }, 400)
    await c.env.DB.prepare(
      `INSERT INTO events (anonymous_id, user_id, event, properties, created_at) VALUES (?, ?, ?, ?, datetime('now', '+8 hours'))`
    ).bind(anonymousId, userId ?? null, event, JSON.stringify(properties || {})).run()
    return c.json({ ok: true })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// ── Pageview geo tracking ────────────────────────────────────────────────────
app.post('/api/pageviews', async (c) => {
  try {
    await ensurePageviewsTable(c.env.DB)
    const body = await c.req.json().catch(() => ({} as any))
    const anonymousId = String(body.anonymousId || '').slice(0, 80)
    let path = String(body.path || '/').slice(0, 500)
    if (!anonymousId) return c.json({ error: 'missing anonymousId' }, 400)
    if (!path.startsWith('/')) path = `/${path}`
    // Skip admin / auth noise
    if (path.startsWith('/admin') || path.startsWith('/api')) {
      return c.json({ ok: true, skipped: true })
    }
    const referrer = String(body.referrer || '').slice(0, 500)
    const geo = getRequestGeo(c)
    const ua = (c.req.header('User-Agent') || '').slice(0, 400)

    // Light dedupe: same visitor + path within 20s
    const recent = await c.env.DB.prepare(
      `SELECT id FROM pageviews
       WHERE anonymous_id = ? AND path = ?
         AND datetime(created_at) > datetime('now', '+8 hours', '-20 seconds')
       LIMIT 1`
    ).bind(anonymousId, path).first()
    if (recent) return c.json({ ok: true, deduped: true })

    await c.env.DB.prepare(
      `INSERT INTO pageviews
        (anonymous_id, path, referrer, country, city, region, device_type, user_agent, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now', '+8 hours'))`
    ).bind(
      anonymousId,
      path,
      referrer,
      geo.country,
      geo.city,
      geo.region,
      geo.deviceType,
      ua,
    ).run()
    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

// GET /api/admin/funnel — conversion funnel (admin only)
app.get('/api/admin/funnel', requireAdmin, async (c) => {
  try {
    const steps = ['visit_homepage', 'click_signup', 'sign_up_complete', 'enter_dashboard', 'create_product']
    const result: Record<string, number> = {}
    for (const step of steps) {
      const row = await c.env.DB.prepare(
        `SELECT COUNT(DISTINCT anonymous_id) as cnt FROM events WHERE event = ?`
      ).bind(step).first<{ cnt: number }>()
      result[step] = row?.cnt ?? 0
    }
    // Recent user events (last 50)
    const recent = await c.env.DB.prepare(
      `SELECT e.anonymous_id, e.user_id, e.event, e.created_at, u.email, u.name
       FROM events e LEFT JOIN users u ON e.user_id = u.id
       ORDER BY e.created_at DESC LIMIT 50`
    ).all()
    // Per-user funnel progress
    const userProgress = await c.env.DB.prepare(
      `SELECT u.id, u.email, u.name, u.created_at,
        MAX(CASE WHEN e.event='visit_homepage' THEN 1 ELSE 0 END) as visited,
        MAX(CASE WHEN e.event='click_signup' THEN 1 ELSE 0 END) as clicked_signup,
        MAX(CASE WHEN e.event='sign_up_complete' THEN 1 ELSE 0 END) as signed_up,
        MAX(CASE WHEN e.event='enter_dashboard' THEN 1 ELSE 0 END) as entered_dashboard,
        MAX(CASE WHEN e.event='create_product' THEN 1 ELSE 0 END) as created_product
       FROM users u
       LEFT JOIN events e ON u.id = e.user_id
       WHERE u.is_admin = 0
       GROUP BY u.id ORDER BY u.created_at DESC LIMIT 100`
    ).all()
    return c.json({ funnel: result, recent: recent.results, userProgress: userProgress.results })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// GET /api/admin/audit-log — full event log with user filter
app.get('/api/admin/audit-log', requireAdmin, async (c) => {
  try {
    const userId = c.req.query('userId') || ''
    const event = c.req.query('event') || ''
    const limit = Math.min(parseInt(c.req.query('limit') || '200'), 500)

    // Join with users directly AND also resolve anonymous_id to user via identity events
    let sql = `SELECT e.id, e.anonymous_id, e.user_id, e.event, e.properties, e.created_at,
                      COALESCE(u.email, u2.email) as email,
                      COALESCE(u.name, u2.name) as name
               FROM events e
               LEFT JOIN users u ON e.user_id = u.id
               LEFT JOIN users u2 ON u2.id = (
                 SELECT ei.user_id FROM events ei
                 WHERE ei.anonymous_id = e.anonymous_id AND ei.user_id IS NOT NULL
                 ORDER BY ei.id ASC LIMIT 1
               )
               WHERE 1=1`
    const binds: any[] = []
    if (userId) { sql += ` AND (e.user_id = ? OR u2.id = ?)`; binds.push(userId, userId) }
    if (event) { sql += ` AND e.event = ?`; binds.push(event) }
    sql += ` ORDER BY e.created_at DESC LIMIT ?`
    binds.push(limit)

    const rows = await c.env.DB.prepare(sql).bind(...binds).all()
    return c.json({ logs: rows.results })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// ── 增强审计日志系统 ──────────────────────────────────────────────────────────

// 审计日志收集中间件
const auditLogMiddleware = async (c: any, next: any, operationType: string, operationDetail?: any) => {
  const startTime = Date.now()
  const userAgent = c.req.header('User-Agent') || ''
  const ipAddress = c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || 'unknown'
  const sessionId = c.req.header('X-Session-ID') || 'anonymous'
  
  // 获取设备类型
  let deviceType = 'desktop'
  if (userAgent.includes('Mobile')) deviceType = 'mobile'
  else if (userAgent.includes('Tablet')) deviceType = 'tablet'
  
  // 获取地理位置信息
  const country = c.req.header('CF-IPCountry') || 'unknown'
  const city = c.req.header('CF-IPCity') || 'unknown'
  
  try {
    await next()
    
    // 记录成功的操作
    const responseTime = Date.now() - startTime
    const responseStatus = c.res.status || 200
    
    await c.env.DB.prepare(`
      INSERT INTO audit_logs (id, user_id, session_id, system_name, operation_type, operation_detail, 
                              ip_address, user_agent, device_type, location_country, location_city, 
                              timestamp, response_status, response_time, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now', '+8 hours'))
    `).bind(
      crypto.randomUUID(),
      c.get('userId') || null,
      sessionId,
      'shopline', // 默认系统名
      operationType,
      JSON.stringify(operationDetail || {}),
      ipAddress,
      userAgent,
      deviceType,
      country,
      city,
      new Date().toISOString(),
      responseStatus,
      responseTime
    ).run()
    
    // 更新会话信息
    await c.env.DB.prepare(`
      INSERT OR REPLACE INTO user_sessions (session_id, user_id, system_name, ip_address, user_agent, 
                                          device_type, last_activity, page_count, is_active)
      VALUES (?, ?, ?, ?, ?, ?, datetime('now', '+8 hours'), 
              COALESCE((SELECT page_count FROM user_sessions WHERE session_id = ?), 0) + 1, 1)
    `).bind(sessionId, c.get('userId') || null, 'shopline', ipAddress, userAgent, deviceType, sessionId).run()
    
  } catch (error: any) {
    // 记录错误
    const responseTime = Date.now() - startTime
    await c.env.DB.prepare(`
      INSERT INTO audit_logs (id, user_id, session_id, system_name, operation_type, operation_detail, 
                              ip_address, user_agent, device_type, location_country, location_city, 
                              timestamp, response_status, response_time, error_message, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now', '+8 hours'))
    `).bind(
      crypto.randomUUID(),
      c.get('userId') || null,
      sessionId,
      'shopline',
      operationType,
      JSON.stringify(operationDetail || {}),
      ipAddress,
      userAgent,
      deviceType,
      country,
      city,
      new Date().toISOString(),
      500,
      responseTime,
      error.message
    ).run()
  }
}

// 审计日志查询API
app.get('/api/admin/audit-logs', requireAdmin, async (c) => {
  try {
    const {
      userId,
      systemName,
      operationType,
      dateRangeStart,
      dateRangeEnd,
      ipAddress,
      deviceType,
      page = '1',
      limit = '50',
      sortBy = 'timestamp',
      sortOrder = 'desc'
    } = c.req.query()
    
    const offset = (parseInt(page) - 1) * parseInt(limit)
    const binds: any[] = []
    
    let sql = `
      SELECT al.*, u.email, u.name,
             ot.category, ot.action, ot.description as op_description, ot.risk_level,
             aud.display_name as system_display_name
      FROM audit_logs al
      LEFT JOIN users u ON al.user_id = u.id
      LEFT JOIN operation_types ot ON al.operation_type = ot.id
      LEFT JOIN audit_systems aud ON al.system_name = aud.id
      WHERE 1=1
    `
    
    if (userId) { sql += ` AND al.user_id = ?`; binds.push(userId) }
    if (systemName) { sql += ` AND al.system_name = ?`; binds.push(systemName) }
    if (operationType) { sql += ` AND al.operation_type = ?`; binds.push(operationType) }
    if (dateRangeStart) { sql += ` AND al.timestamp >= ?`; binds.push(dateRangeStart) }
    if (dateRangeEnd) { sql += ` AND al.timestamp <= ?`; binds.push(dateRangeEnd) }
    if (ipAddress) { sql += ` AND al.ip_address = ?`; binds.push(ipAddress) }
    if (deviceType) { sql += ` AND al.device_type = ?`; binds.push(deviceType) }
    
    sql += ` ORDER BY al.${sortBy} ${sortOrder.toUpperCase()} LIMIT ? OFFSET ?`
    binds.push(parseInt(limit), offset)
    
    const logs = await c.env.DB.prepare(sql).bind(...binds).all()
    
    // 获取总数
    let countSql = `SELECT COUNT(*) as total FROM audit_logs al WHERE 1=1`
    const countBinds: any[] = []
    if (userId) { countSql += ` AND al.user_id = ?`; countBinds.push(userId) }
    if (systemName) { countSql += ` AND al.system_name = ?`; countBinds.push(systemName) }
    if (operationType) { countSql += ` AND al.operation_type = ?`; countBinds.push(operationType) }
    if (dateRangeStart) { countSql += ` AND al.timestamp >= ?`; countBinds.push(dateRangeStart) }
    if (dateRangeEnd) { countSql += ` AND al.timestamp <= ?`; countBinds.push(dateRangeEnd) }
    if (ipAddress) { countSql += ` AND al.ip_address = ?`; countBinds.push(ipAddress) }
    if (deviceType) { countSql += ` AND al.device_type = ?`; countBinds.push(deviceType) }
    
    const countResult = await c.env.DB.prepare(countSql).bind(...countBinds).first<{ total: number }>()
    
    return c.json({
      logs: logs.results,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: countResult?.total || 0,
        totalPages: Math.ceil((countResult?.total || 0) / parseInt(limit))
      }
    })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 客户跟踪API
app.get('/api/admin/customers/:userId/timeline', requireAdmin, async (c) => {
  try {
    const userId = c.req.param('userId')
    
    // 获取用户基本信息
    const user = await c.env.DB.prepare(`
      SELECT id, email, name, created_at FROM users WHERE id = ?
    `).bind(userId).first()
    
    if (!user) {
      return c.json({ error: '用户不存在' }, 404)
    }
    
    // 获取用户会话
    const sessions = await c.env.DB.prepare(`
      SELECT * FROM user_sessions WHERE user_id = ? ORDER BY start_time DESC
    `).bind(userId).all()
    
    // 获取用户操作日志
    const logs = await c.env.DB.prepare(`
      SELECT al.*, ot.category, ot.action, ot.description as op_description, aud.display_name as system_display_name
      FROM audit_logs al
      LEFT JOIN operation_types ot ON al.operation_type = ot.id
      LEFT JOIN audit_systems aud ON al.system_name = aud.id
      WHERE al.user_id = ?
      ORDER BY al.timestamp DESC
      LIMIT 100
    `).bind(userId).all()
    
    // 统计信息
    const stats = await c.env.DB.prepare(`
      SELECT 
        COUNT(*) as total_operations,
        COUNT(DISTINCT al.system_name) as systems_visited,
        COUNT(DISTINCT al.operation_type) as operation_types,
        MIN(al.timestamp) as first_activity,
        MAX(al.timestamp) as last_activity
      FROM audit_logs al
      WHERE al.user_id = ?
    `).bind(userId).first()
    
    return c.json({
      user,
      sessions: sessions.results,
      logs: logs.results,
      statistics: stats
    })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 获取系统列表
app.get('/api/admin/audit-systems', requireAdmin, async (c) => {
  try {
    const systems = await c.env.DB.prepare(`
      SELECT * FROM audit_systems WHERE active = 1 ORDER BY display_name
    `).all()
    return c.json(systems.results)
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 获取操作类型列表
app.get('/api/admin/operation-types', requireAdmin, async (c) => {
  try {
    const types = await c.env.DB.prepare(`
      SELECT * FROM operation_types ORDER BY category, risk_level
    `).all()
    return c.json(types.results)
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 实时监控API
app.get('/api/admin/audit-realtime', requireAdmin, async (c) => {
  try {
    const limit = parseInt(c.req.query('limit') || '20')
    
    // 获取最近的日志
    const recentLogs = await c.env.DB.prepare(`
      SELECT al.*, u.email, u.name,
             ot.category, ot.action, aud.display_name as system_display_name
      FROM audit_logs al
      LEFT JOIN users u ON al.user_id = u.id
      LEFT JOIN operation_types ot ON al.operation_type = ot.id
      LEFT JOIN audit_systems aud ON al.system_name = aud.id
      ORDER BY al.timestamp DESC
      LIMIT ?
    `).bind(limit).all()
    
    // 获取活跃会话数
    const activeSessions = await c.env.DB.prepare(`
      SELECT COUNT(*) as count FROM user_sessions WHERE is_active = 1 AND datetime(last_activity) > datetime('now', '-30 minutes')
    `).first<{ count: number }>()
    
    // 获取今日统计
    const todayStats = await c.env.DB.prepare(`
      SELECT 
        COUNT(*) as total_logs,
        COUNT(DISTINCT user_id) as unique_users,
        COUNT(DISTINCT session_id) as unique_sessions,
        COUNT(DISTINCT system_name) as active_systems
      FROM audit_logs
      WHERE date(timestamp) = date('now')
    `).first()
    
    // 获取高风险操作
    const highRiskOps = await c.env.DB.prepare(`
      SELECT al.*, u.email, u.name, aud.display_name as system_display_name
      FROM audit_logs al
      LEFT JOIN users u ON al.user_id = u.id
      LEFT JOIN operation_types ot ON al.operation_type = ot.id
      LEFT JOIN audit_systems aud ON al.system_name = aud.id
      WHERE ot.risk_level >= 3 AND al.timestamp > datetime('now', '-1 hour')
      ORDER BY al.timestamp DESC
      LIMIT 10
    `).all()
    
    return c.json({
      recentLogs: recentLogs.results,
      activeSessions: activeSessions?.count || 0,
      todayStats,
      highRiskOps: highRiskOps.results
    })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 搜索客户API
app.get('/api/admin/customers/search', requireAdmin, async (c) => {
  try {
    const { q, page = '1', limit = '20' } = c.req.query()
    const offset = (parseInt(page) - 1) * parseInt(limit)
    
    if (!q) {
      return c.json({ error: '搜索关键词不能为空' }, 400)
    }
    
    const searchPattern = `%${q}%`
    const users = await c.env.DB.prepare(`
      SELECT u.id, u.email, u.name, u.created_at,
             COUNT(al.id) as operation_count,
             MAX(al.timestamp) as last_activity
      FROM users u
      LEFT JOIN audit_logs al ON u.id = al.user_id
      WHERE u.email LIKE ? OR u.name LIKE ?
      GROUP BY u.id
      ORDER BY operation_count DESC, last_activity DESC
      LIMIT ? OFFSET ?
    `).bind(searchPattern, searchPattern, parseInt(limit), offset).all()
    
    // 获取总数
    const countResult = await c.env.DB.prepare(`
      SELECT COUNT(*) as total FROM users WHERE email LIKE ? OR name LIKE ?
    `).bind(searchPattern, searchPattern).first<{ total: number }>()
    
    return c.json({
      users: users.results,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: countResult?.total || 0,
        totalPages: Math.ceil((countResult?.total || 0) / parseInt(limit))
      }
    })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
})

// 跨系统审计事件上报接口（供 tinywear/ims 调用）
app.post('/api/admin/audit-cross-system', async (c) => {
  try {
    const systemSourceHeader = c.req.header('X-System-Source') // 'tinywear' | 'ims'
    
    const {
      user_id,
      session_id,
      system_name: systemNamePayload,
      operation_type,
      operation_detail,
      ip_address,
      user_agent,
      device_type,
      location_country,
      location_city,
      response_status,
      response_time
    } = await c.req.json()
    
    // 优先使用 payload 中的 system_name，其次使用 Header
    let finalSystemName = systemNamePayload
    if (!finalSystemName) {
      if (systemSourceHeader === 'tinywear') finalSystemName = 'Tiny Wearhouse'
      else if (systemSourceHeader === 'ims') finalSystemName = 'IMS'
      else return c.json({ error: 'Invalid system source' }, 400)
    }
    
    if (!user_id || !operation_type) {
      return c.json({ error: 'Missing required fields' }, 400)
    }
    
    const auditId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    await c.env.DB.prepare(`
      INSERT INTO audit_logs (
        id, user_id, session_id, system_name, operation_type, operation_detail,
        ip_address, user_agent, device_type, location_country, location_city,
        timestamp, response_status, response_time
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      auditId,
      user_id,
      session_id || `session_${Date.now()}`,
      finalSystemName,
      operation_type,
      operation_detail || '',
      ip_address || '',
      user_agent || '',
      device_type || '',
      location_country || '',
      location_city || '',
      new Date().toISOString(),
      response_status || 200,
      response_time || 0
    ).run()
    
    return c.json({ success: true, auditId })
  } catch (e: any) {
    console.error('Cross-system audit error:', e)
    return c.json({ error: String(e) }, 500)
  }
})

// Generate SSO token for trial systems (signed with SHOPLINE_JWT_SECRET)
app.post('/api/auth/sso-token', async (c) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) return c.json({ error: '未授權' }, 401)
  const token = authHeader.slice(7)
  const payload = await verifyToken(token, c.env.JWT_SECRET)
  if (!payload) return c.json({ error: 'Token 無效或已過期' }, 401)

  const ssoSecret = (c.env as any).SHOPLINE_JWT_SECRET || 'shopline_v2_jwt_secret_2026'
  const ssoToken = await signToken({ userId: payload.userId, email: payload.email }, ssoSecret)
  return c.json({ ssoToken })
})

// ── Affiliate API ─────────────────────────────────────────────────────────────
// List affiliates
app.get('/api/admin/affiliates', requireAdmin, async (c) => {
  try {
    const rows = await c.env.DB.prepare(`SELECT * FROM affiliates ORDER BY created_at DESC`).all()
    return c.json(rows.results)
  } catch(e:any) { return c.json({error:String(e)},500) }
})

// Create affiliate
app.post('/api/admin/affiliates', requireAdmin, async (c) => {
  try {
    const { name, email, code, commission_rate } = await c.req.json()
    if (!name || !code) return c.json({error:'name and code required'},400)
    await c.env.DB.prepare(
      `INSERT INTO affiliates (code, name, email, commission_rate) VALUES (?,?,?,?)`
    ).bind(code, name, email||null, commission_rate||0.1).run()
    return c.json({ok:true})
  } catch(e:any) { return c.json({error:String(e)},500) }
})

// Update affiliate
app.put('/api/admin/affiliates/:id', requireAdmin, async (c) => {
  try {
    const id = c.req.param('id')
    const { name, email, commission_rate, active } = await c.req.json()
    await c.env.DB.prepare(
      `UPDATE affiliates SET name=?, email=?, commission_rate=?, active=? WHERE id=?`
    ).bind(name, email||null, commission_rate, active, id).run()
    return c.json({ok:true})
  } catch(e:any) { return c.json({error:String(e)},500) }
})

// Delete affiliate
app.delete('/api/admin/affiliates/:id', requireAdmin, async (c) => {
  try {
    await c.env.DB.prepare(`DELETE FROM affiliates WHERE id=?`).bind(c.req.param('id')).run()
    return c.json({ok:true})
  } catch(e:any) { return c.json({error:String(e)},500) }
})

// Traffic source analytics (+ visitor geo)
app.get('/api/admin/traffic', requireAdmin, async (c) => {
  try {
    await ensurePageviewsTable(c.env.DB)
    // UTM source breakdown
    const sources = await c.env.DB.prepare(
      `SELECT COALESCE(utm_source,'direct') as source, COUNT(*) as users FROM users WHERE is_admin=0 GROUP BY utm_source ORDER BY users DESC`
    ).all()
    // Ref breakdown
    const refs = await c.env.DB.prepare(
      `SELECT ref, COUNT(*) as users FROM users WHERE ref IS NOT NULL AND is_admin=0 GROUP BY ref ORDER BY users DESC`
    ).all()
    // Campaign breakdown
    const campaigns = await c.env.DB.prepare(
      `SELECT utm_campaign, COUNT(*) as users FROM users WHERE utm_campaign IS NOT NULL AND is_admin=0 GROUP BY utm_campaign ORDER BY users DESC`
    ).all()
    // Affiliate conversions
    const affConversions = await c.env.DB.prepare(
      `SELECT ac.affiliate_code, a.name, COUNT(*) as conversions, COALESCE(SUM(ac.revenue),0) as revenue, COALESCE(SUM(ac.commission),0) as commission
       FROM affiliate_conversions ac LEFT JOIN affiliates a ON ac.affiliate_code=a.code
       GROUP BY ac.affiliate_code ORDER BY conversions DESC`
    ).all()

    const days = Math.min(90, Math.max(1, Number(c.req.query('days') || 30)))
    const sinceExpr = `datetime('now', '+8 hours', '-${days} days')`

    const totals = await c.env.DB.prepare(
      `SELECT COUNT(*) as views,
              COUNT(DISTINCT anonymous_id) as visitors,
              COUNT(DISTINCT country) as countries
       FROM pageviews WHERE datetime(created_at) >= ${sinceExpr}`
    ).first()

    const countries = await c.env.DB.prepare(
      `SELECT country,
              COUNT(*) as views,
              COUNT(DISTINCT anonymous_id) as visitors
       FROM pageviews
       WHERE datetime(created_at) >= ${sinceExpr}
       GROUP BY country
       ORDER BY visitors DESC, views DESC
       LIMIT 50`
    ).all()

    const cities = await c.env.DB.prepare(
      `SELECT country, city, region,
              COUNT(*) as views,
              COUNT(DISTINCT anonymous_id) as visitors
       FROM pageviews
       WHERE datetime(created_at) >= ${sinceExpr}
       GROUP BY country, city
       ORDER BY visitors DESC, views DESC
       LIMIT 80`
    ).all()

    const topPaths = await c.env.DB.prepare(
      `SELECT path, COUNT(*) as views, COUNT(DISTINCT anonymous_id) as visitors
       FROM pageviews
       WHERE datetime(created_at) >= ${sinceExpr}
       GROUP BY path
       ORDER BY views DESC
       LIMIT 20`
    ).all()

    const recent = await c.env.DB.prepare(
      `SELECT path, country, city, region, device_type, created_at, anonymous_id
       FROM pageviews
       ORDER BY id DESC
       LIMIT 40`
    ).all()

    return c.json({
      sources: sources.results,
      refs: refs.results,
      campaigns: campaigns.results,
      affConversions: affConversions.results,
      geo: {
        days,
        totals: totals || { views: 0, visitors: 0, countries: 0 },
        countries: countries.results || [],
        cities: cities.results || [],
        topPaths: topPaths.results || [],
        recent: recent.results || [],
      },
    })
  } catch(e:any) { return c.json({error:String(e)},500) }
})

// ── Site Settings (SEO & Content) ────────────────────────────────────────────
app.get('/api/site-settings', async (c) => {
  try {
    await c.env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT DEFAULT (datetime('now', '+8 hours')))`).run()
    const rows = await c.env.DB.prepare(`SELECT key, value FROM site_settings`).all()
    const settings: Record<string, string> = {}
    for (const r of rows.results as any[]) settings[r.key] = r.value
    return c.json(settings)
  } catch(e:any) { return c.json({error:String(e)},500) }
})

app.put('/api/site-settings', requireAdmin, async (c) => {
  try {
    await c.env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT DEFAULT (datetime('now', '+8 hours')))`).run()
    const body = await c.req.json()
    for (const [key, value] of Object.entries(body)) {
      await c.env.DB.prepare(`INSERT INTO site_settings (key, value, updated_at) VALUES (?,?,datetime('now','+8 hours')) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at`).bind(key, String(value)).run()
    }
    return c.json({ ok: true })
  } catch(e:any) { return c.json({error:String(e)},500) }
})

// Admin: clean test data
app.post('/api/admin/clean-test-data', requireAdmin, async (c) => {
  try {
    // Delete test users and their related data
    const testEmails = ['john@example.com','mary@example.com','david@example.com','sarah@example.com','mike@example.com']
    for (const email of testEmails) {
      const user = await c.env.DB.prepare(`SELECT id FROM users WHERE email=?`).bind(email).first<{id:number}>()
      if (!user) continue
      await c.env.DB.prepare(`DELETE FROM order_items WHERE order_id IN (SELECT id FROM orders WHERE user_id=?)`).bind(user.id).run().catch(()=>{})
      await c.env.DB.prepare(`DELETE FROM orders WHERE user_id=?`).bind(user.id).run().catch(()=>{})
      await c.env.DB.prepare(`DELETE FROM cart_items WHERE user_id=?`).bind(user.id).run().catch(()=>{})
      await c.env.DB.prepare(`DELETE FROM events WHERE user_id=?`).bind(user.id).run().catch(()=>{})
      await c.env.DB.prepare(`DELETE FROM users WHERE id=?`).bind(user.id).run().catch(()=>{})
    }
    // Delete test events
    await c.env.DB.prepare(`DELETE FROM events WHERE event='test_tz'`).run().catch(()=>{})
    await c.env.DB.prepare(`DELETE FROM events WHERE anonymous_id LIKE 'test_%'`).run().catch(()=>{})
    return c.json({ ok: true })
  } catch(e:any) { return c.json({error:String(e)},500) }
})


// ── Brand stores (public /{slug}) ─────────────────────────────────────────────
app.get('/api/stores/check-slug', async (c) => {
  try {
    await ensureStoresTable(c.env.DB)
    const { slugifyBrand, RESERVED_STORE_SLUGS } = await import('./stores')
    const raw = c.req.query('slug') || ''
    const slug = slugifyBrand(raw)
    if (!slug) return c.json({ ok: false, reason: 'empty' })
    if (RESERVED_STORE_SLUGS.has(slug)) return c.json({ ok: false, reason: 'reserved', slug })
    const row = await c.env.DB.prepare(`SELECT id FROM stores WHERE slug = ?`).bind(slug).first()
    if (row) return c.json({ ok: false, reason: 'taken', slug })
    return c.json({ ok: true, slug })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

app.get('/api/stores/me', async (c) => {
  try {
    const authHeader = c.req.header('Authorization')
    if (!authHeader?.startsWith('Bearer ')) return c.json({ error: '未授權' }, 401)
    const payload = await verifyToken(authHeader.slice(7), c.env.JWT_SECRET)
    if (!payload) return c.json({ error: 'Token 無效或已過期' }, 401)
    await ensureStoresTable(c.env.DB)
    await ensureTrialSchema(c.env.DB)
    const store = await c.env.DB.prepare(
      `SELECT id, user_id as userId, slug, name, tagline, status,
              onboarding_stage as onboardingStage, payments_enabled as paymentsEnabled,
              is_live as isLive, product_count as productCount,
              created_at as createdAt
       FROM stores WHERE user_id = ? ORDER BY id ASC LIMIT 1`
    ).bind(payload.userId).first()
    if (!store) return c.json({ error: '尚未建立商店' }, 404)
    return c.json({ ...store, urlPath: `/s/shop?slug=${(store as any).slug}` })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

app.get('/api/stores/:slug', async (c) => {
  try {
    await ensureStoresTable(c.env.DB)
    const slug = c.req.param('slug').toLowerCase()
    const { RESERVED_STORE_SLUGS } = await import('./stores')
    if (RESERVED_STORE_SLUGS.has(slug)) return c.json({ error: '商店不存在' }, 404)
    const store = await c.env.DB.prepare(
      `SELECT id, slug, name, tagline, status, created_at as createdAt FROM stores WHERE slug = ? AND status = 'active'`
    ).bind(slug).first()
    if (!store) return c.json({ error: '商店不存在' }, 404)
    return c.json({ ...store, urlPath: `/s/shop?slug=${slug}` })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

// ── Trial + onboarding + merchant CRM ─────────────────────────────────────────

app.get('/api/me/trial', requireUser, async (c) => {
  try {
    await ensureTrialSchema(c.env.DB)
    const payload = await getAuthUser(c)
    if (!payload) return c.json({ error: '未授權' }, 401)
    const row = await c.env.DB.prepare(
      `SELECT id, is_admin, trial_started_at, trial_ends_at, plan_status FROM users WHERE id = ?`
    ).bind(payload.userId).first<any>()
    if (!row) return c.json({ error: '用戶不存在' }, 404)

    // Auto-expire if needed
    const trial = computeTrial(row)
    if (trial.expired && row.plan_status === 'trialing') {
      await c.env.DB.prepare(`UPDATE users SET plan_status='expired' WHERE id=?`).bind(payload.userId).run()
    }

    const store = await c.env.DB.prepare(
      `SELECT slug, name, onboarding_stage as onboardingStage, payments_enabled as paymentsEnabled, is_live as isLive, product_count as productCount
       FROM stores WHERE user_id = ? ORDER BY id ASC LIMIT 1`
    ).bind(payload.userId).first()

    return c.json({
      ...trial,
      planStatus: trial.planStatus,
      stage: (store as any)?.onboardingStage || 'registered',
      stageLabel: STAGE_LABELS[((store as any)?.onboardingStage || 'registered') as OnboardingStage] || '已註冊',
      store: store || null,
      stages: ONBOARDING_STAGES.map((s) => ({ id: s, label: STAGE_LABELS[s] })),
    })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

app.post('/api/me/onboarding', requireUser, async (c) => {
  try {
    await ensureStoresTable(c.env.DB)
    await ensureTrialSchema(c.env.DB)
    const payload = await getAuthUser(c)
    if (!payload) return c.json({ error: '未授權' }, 401)
    const body = await c.req.json().catch(() => ({}))
    const stage = body.stage as string
    if (!ONBOARDING_STAGES.includes(stage as OnboardingStage)) {
      return c.json({ error: '無效的階段', allowed: ONBOARDING_STAGES }, 400)
    }
    if (stage === 'paid') {
      return c.json({ error: '請使用付款開通 API' }, 400)
    }

    const store = await c.env.DB.prepare(
      `SELECT id, onboarding_stage FROM stores WHERE user_id = ? ORDER BY id ASC LIMIT 1`
    ).bind(payload.userId).first<{ id: number; onboarding_stage: string }>()
    if (!store) return c.json({ error: '尚未建立商店' }, 404)

    const next = maxStage(store.onboarding_stage, stage)
    await c.env.DB.prepare(
      `UPDATE stores SET onboarding_stage=?, last_active_at=?, updated_at=? WHERE id=?`
    ).bind(next, nowIso(), nowIso(), store.id).run()

    if (stage === 'payments_setup' || stage === 'live') {
      await c.env.DB.prepare(`UPDATE stores SET payments_enabled=1 WHERE id=?`).bind(store.id).run()
    }
    if (stage === 'live') {
      await c.env.DB.prepare(`UPDATE stores SET is_live=1 WHERE id=?`).bind(store.id).run()
    }
    if (stage === 'products_added') {
      await c.env.DB.prepare(
        `UPDATE stores SET product_count = CASE WHEN COALESCE(product_count,0) < 1 THEN 1 ELSE product_count END WHERE id=?`
      ).bind(store.id).run()
    }

    await c.env.DB.prepare(
      `INSERT INTO events (anonymous_id, user_id, event, properties, created_at) VALUES (?, ?, ?, ?, datetime('now', '+8 hours'))`
    ).bind(`user_${payload.userId}`, payload.userId, 'onboarding_stage', JSON.stringify({ stage: next })).run().catch(() => {})

    if (stage === 'products_added') {
      await c.env.DB.prepare(
        `INSERT INTO events (anonymous_id, user_id, event, properties, created_at) VALUES (?, ?, 'create_product', '{}', datetime('now', '+8 hours'))`
      ).bind(`user_${payload.userId}`, payload.userId).run().catch(() => {})
    }

    return c.json({ ok: true, stage: next, stageLabel: STAGE_LABELS[next] })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

/** Activate paid plan (manual / placeholder checkout). Wire payment provider later. */
app.post('/api/me/activate', requireUser, async (c) => {
  try {
    await ensureTrialSchema(c.env.DB)
    await ensureStoresTable(c.env.DB)
    const payload = await getAuthUser(c)
    if (!payload) return c.json({ error: '未授權' }, 401)
    const body = await c.req.json().catch(() => ({}))
    const plan = (body.plan || 'standard').toString()

    await c.env.DB.prepare(
      `UPDATE users SET plan_status='paid', follow_up_status='won', follow_up_updated_at=?, updated_at=? WHERE id=?`
    ).bind(nowIso(), nowIso(), payload.userId).run()

    await c.env.DB.prepare(
      `UPDATE stores SET onboarding_stage='paid', updated_at=?, last_active_at=? WHERE user_id=?`
    ).bind(nowIso(), nowIso(), payload.userId).run()

    await c.env.DB.prepare(
      `INSERT INTO events (anonymous_id, user_id, event, properties, created_at) VALUES (?, ?, 'plan_purchased', ?, datetime('now', '+8 hours'))`
    ).bind(`user_${payload.userId}`, payload.userId, JSON.stringify({ plan })).run().catch(() => {})

    return c.json({ ok: true, planStatus: 'paid', plan })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

app.get('/api/admin/merchants', requireAdmin, async (c) => {
  try {
    await ensureTrialSchema(c.env.DB)
    await ensureStoresTable(c.env.DB)
    const stage = c.req.query('stage') || ''
    const plan = c.req.query('plan') || ''
    const follow = c.req.query('follow') || ''
    const q = (c.req.query('q') || '').trim()

    // One store per user (oldest) to avoid duplicate merchant rows
    const storeJoin = `
      LEFT JOIN (
        SELECT s.*
        FROM stores s
        INNER JOIN (
          SELECT user_id, MIN(id) AS min_id FROM stores GROUP BY user_id
        ) first ON first.min_id = s.id
      ) s ON s.user_id = u.id
    `

    const whereParts = [`COALESCE(u.is_admin, 0) = 0`]
    const binds: any[] = []
    if (stage) { whereParts.push(`COALESCE(s.onboarding_stage, 'registered') = ?`); binds.push(stage) }
    if (plan) { whereParts.push(`COALESCE(u.plan_status, 'trialing') = ?`); binds.push(plan) }
    if (follow) { whereParts.push(`COALESCE(u.follow_up_status, 'new') = ?`); binds.push(follow) }
    if (q) {
      whereParts.push(`(u.email LIKE ? OR u.name LIKE ? OR u.phone LIKE ? OR IFNULL(s.slug,'') LIKE ? OR IFNULL(s.name,'') LIKE ?)`)
      const like = `%${q}%`
      binds.push(like, like, like, like, like)
    }
    const whereSql = whereParts.join(' AND ')

    const listSql = `
      SELECT u.id, u.email, u.name, u.phone, u.created_at as createdAt,
             u.trial_started_at as trialStartedAt, u.trial_ends_at as trialEndsAt,
             u.plan_status as planStatus, u.follow_up_status as followUpStatus,
             u.follow_up_note as followUpNote, u.follow_up_updated_at as followUpUpdatedAt,
             u.ref, u.utm_source as utmSource, u.utm_campaign as utmCampaign,
             s.slug, s.name as storeName, s.onboarding_stage as onboardingStage,
             s.payments_enabled as paymentsEnabled, s.is_live as isLive,
             s.product_count as productCount, s.last_active_at as lastActiveAt
      FROM users u
      ${storeJoin}
      WHERE ${whereSql}
      ORDER BY u.created_at DESC
      LIMIT 300
    `

    const rows = binds.length
      ? await c.env.DB.prepare(listSql).bind(...binds).all()
      : await c.env.DB.prepare(listSql).all()

    const merchants = (rows.results || []).map((r: any) => {
      const trial = computeTrial({
        plan_status: r.planStatus,
        trial_started_at: r.trialStartedAt,
        trial_ends_at: r.trialEndsAt,
        is_admin: 0,
      })
      const stageKey = (r.onboardingStage || 'registered') as OnboardingStage
      return {
        ...r,
        planStatus: trial.planStatus,
        daysLeft: trial.daysLeft,
        expired: trial.expired,
        stageLabel: STAGE_LABELS[stageKey] || r.onboardingStage || '已註冊',
        storeUrl: r.slug ? `/s/shop?slug=${r.slug}` : null,
      }
    })

    // Summary uses same filters but no LIMIT, so cards stay accurate
    const summarySql = `
      SELECT
        COUNT(*) as total,
        SUM(CASE WHEN COALESCE(u.plan_status, 'trialing') = 'paid' THEN 1 ELSE 0 END) as paid,
        SUM(CASE
          WHEN COALESCE(u.plan_status, 'trialing') = 'expired' THEN 1
          WHEN COALESCE(u.plan_status, 'trialing') = 'trialing'
            AND u.trial_ends_at IS NOT NULL
            AND datetime(u.trial_ends_at) < datetime('now', '+8 hours') THEN 1
          ELSE 0
        END) as expired,
        SUM(CASE
          WHEN COALESCE(u.plan_status, 'trialing') = 'trialing'
            AND (u.trial_ends_at IS NULL OR datetime(u.trial_ends_at) >= datetime('now', '+8 hours')) THEN 1
          ELSE 0
        END) as trialing,
        SUM(CASE
          WHEN COALESCE(u.plan_status, 'trialing') = 'trialing'
            AND u.trial_ends_at IS NOT NULL
            AND datetime(u.trial_ends_at) >= datetime('now', '+8 hours')
            AND datetime(u.trial_ends_at) <= datetime('now', '+8 hours', '+3 days') THEN 1
          ELSE 0
        END) as expiringSoon
      FROM users u
      ${storeJoin}
      WHERE ${whereSql}
    `
    const summaryRow = binds.length
      ? await c.env.DB.prepare(summarySql).bind(...binds).first<any>()
      : await c.env.DB.prepare(summarySql).first<any>()

    const summary = {
      total: Number(summaryRow?.total || 0),
      trialing: Number(summaryRow?.trialing || 0),
      expiringSoon: Number(summaryRow?.expiringSoon || 0),
      expired: Number(summaryRow?.expired || 0),
      paid: Number(summaryRow?.paid || 0),
      byStage: ONBOARDING_STAGES.reduce((acc, s) => {
        acc[s] = merchants.filter((m: any) => (m.onboardingStage || 'registered') === s).length
        return acc
      }, {} as Record<string, number>),
    }

    return c.json({
      merchants,
      summary,
      stages: ONBOARDING_STAGES.map((s) => ({ id: s, label: STAGE_LABELS[s] })),
      followUpStatuses: FOLLOW_UP_STATUSES,
    })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

app.patch('/api/admin/merchants/:id', requireAdmin, async (c) => {
  try {
    await ensureTrialSchema(c.env.DB)
    await ensureStoresTable(c.env.DB)
    const id = parseInt(c.req.param('id'))
    const body = await c.req.json()

    if (body.followUpStatus) {
      if (!FOLLOW_UP_STATUSES.includes(body.followUpStatus as FollowUpStatus)) {
        return c.json({ error: '無效的跟進狀態' }, 400)
      }
      await c.env.DB.prepare(
        `UPDATE users SET follow_up_status=?, follow_up_updated_at=? WHERE id=?`
      ).bind(body.followUpStatus, nowIso(), id).run()
    }
    if (typeof body.followUpNote === 'string') {
      await c.env.DB.prepare(
        `UPDATE users SET follow_up_note=?, follow_up_updated_at=? WHERE id=?`
      ).bind(body.followUpNote, nowIso(), id).run()
    }
    if (body.planStatus) {
      if (!['trialing', 'expired', 'paid'].includes(body.planStatus)) {
        return c.json({ error: '無效的方案狀態' }, 400)
      }
      await c.env.DB.prepare(`UPDATE users SET plan_status=?, updated_at=? WHERE id=?`)
        .bind(body.planStatus, nowIso(), id).run()
      if (body.planStatus === 'paid') {
        await c.env.DB.prepare(
          `UPDATE stores SET onboarding_stage='paid', updated_at=? WHERE user_id=?`
        ).bind(nowIso(), id).run()
        await c.env.DB.prepare(
          `UPDATE users SET follow_up_status='won', follow_up_updated_at=? WHERE id=?`
        ).bind(nowIso(), id).run()
      }
    }
    if (body.onboardingStage) {
      if (!ONBOARDING_STAGES.includes(body.onboardingStage as OnboardingStage)) {
        return c.json({ error: '無效的開店階段' }, 400)
      }
      await c.env.DB.prepare(
        `UPDATE stores SET onboarding_stage=?, updated_at=? WHERE user_id=?`
      ).bind(body.onboardingStage, nowIso(), id).run()
    }
    if (body.extendTrialDays && Number(body.extendTrialDays) > 0) {
      const days = Math.min(Number(body.extendTrialDays), 90)
      await c.env.DB.prepare(
        `UPDATE users SET
           trial_ends_at = datetime(COALESCE(trial_ends_at, datetime('now')), '+' || ? || ' days'),
           plan_status = 'trialing',
           updated_at = ?
         WHERE id = ?`
      ).bind(String(days), nowIso(), id).run()
    }

    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ error: String(e) }, 500)
  }
})

export default app
