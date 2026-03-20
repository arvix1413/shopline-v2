import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from './schema'
import { hashPassword, verifyPassword, signToken, verifyToken } from './auth'

type Bindings = {
  DB: D1Database
  R2_BUCKET: R2Bucket
  R2_DOMAIN: string
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS 配置
app.use('*', cors({
  origin: ['https://shopline-frontend.pages.dev', 'http://localhost:3000'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

// 健康检查
app.get('/', (c) => {
  return c.json({ message: 'SHOPLINE Clone API is running!' })
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
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, name TEXT NOT NULL, password_hash TEXT NOT NULL DEFAULT '', phone TEXT, address TEXT, is_admin INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT, image_url TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT, price REAL NOT NULL, image_url TEXT, category TEXT, stock INTEGER DEFAULT 0, featured INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id), total_amount REAL NOT NULL, status TEXT DEFAULT 'pending', shipping_address TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS order_items (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER REFERENCES orders(id), product_id INTEGER REFERENCES products(id), quantity INTEGER NOT NULL, price REAL NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS cart_items (id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT NOT NULL, user_id INTEGER REFERENCES users(id), product_id INTEGER REFERENCES products(id) NOT NULL, quantity INTEGER NOT NULL DEFAULT 1, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS trial_systems (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, desc TEXT NOT NULL DEFAULT '', url TEXT NOT NULL, color TEXT NOT NULL DEFAULT '#3B82F6', bg TEXT NOT NULL DEFAULT 'rgba(59,130,246,0.08)', border TEXT NOT NULL DEFAULT 'rgba(59,130,246,0.2)', emoji TEXT NOT NULL DEFAULT '🌐', tags TEXT NOT NULL DEFAULT '[]', active INTEGER NOT NULL DEFAULT 1, sort_order INTEGER NOT NULL DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, anonymous_id TEXT NOT NULL, user_id INTEGER, event TEXT NOT NULL, properties TEXT DEFAULT '{}', created_at TEXT DEFAULT CURRENT_TIMESTAMP)`,
  ]
  try {
    for (const sql of stmts) {
      await c.env.DB.prepare(sql).run()
    }
    // migration: add columns if missing
    try { await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN password_hash TEXT NOT NULL DEFAULT ''`).run() } catch {}
    try { await c.env.DB.prepare(`ALTER TABLE users ADD COLUMN is_admin INTEGER DEFAULT 0`).run() } catch {}
    return c.json({ message: 'DB initialized' })
  } catch (error) {
    console.error('Init error:', error)
    return c.json({ error: String(error) }, 500)
  }
})

// Auth 路由
app.post('/api/auth/register', async (c) => {
  try {
    const { email, password, name, phone, shopName } = await c.req.json()
    if (!email || !password) return c.json({ error: '請填寫 Email 和密碼' }, 400)
    if (password.length < 6) return c.json({ error: '密碼至少 6 個字元' }, 400)

    const db = drizzle(c.env.DB, { schema })
    const existing = await db.select().from(schema.users).where(eq(schema.users.email, email)).get()
    if (existing) return c.json({ error: 'Email 已被註冊' }, 409)

    const passwordHash = await hashPassword(password)
    const user = await db.insert(schema.users).values({
      email,
      name: name || shopName || email.split('@')[0],
      passwordHash,
      phone: phone || null,
    }).returning().get()

    const token = await signToken({ userId: user.id, email: user.email, isAdmin: user.isAdmin }, c.env.JWT_SECRET)
    return c.json({ token, user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin } }, 201)
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
      `INSERT INTO events (anonymous_id, user_id, event, properties, created_at) VALUES (?, ?, ?, ?, datetime('now'))`
    ).bind(anonymousId, userId ?? null, event, JSON.stringify(properties || {})).run()
    return c.json({ ok: true })
  } catch (e: any) { return c.json({ error: String(e) }, 500) }
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

export default app