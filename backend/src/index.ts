import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from './schema'

type Bindings = {
  DB: D1Database
  R2_BUCKET: R2Bucket
  R2_DOMAIN: string
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

// 用户相关路由
app.get('/api/users', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const users = await db.select().from(schema.users)
  return c.json(users)
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

export default app