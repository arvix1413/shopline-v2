import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('password_hash').notNull().default(''),
  phone: text('phone'),
  address: text('address'),
  isAdmin: integer('is_admin').default(0),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
})

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP')
})

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  price: real('price').notNull(),
  imageUrl: text('image_url'),
  category: text('category'),
  stock: integer('stock').default(0),
  featured: integer('featured', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
})

export const orders = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  totalAmount: real('total_amount').notNull(),
  status: text('status').default('pending'),
  shippingAddress: text('shipping_address'),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
})

export const orderItems = sqliteTable('order_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  orderId: integer('order_id').references(() => orders.id),
  productId: integer('product_id').references(() => products.id),
  quantity: integer('quantity').notNull(),
  price: real('price').notNull(),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP')
})

export const cartItems = sqliteTable('cart_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sessionId: text('session_id').notNull(),
  userId: integer('user_id').references(() => users.id),
  productId: integer('product_id').references(() => products.id).notNull(),
  quantity: integer('quantity').notNull().default(1),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP')
})

export const trialSystems = sqliteTable('trial_systems', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  desc: text('desc').notNull().default(''),
  url: text('url').notNull(),
  color: text('color').notNull().default('#3B82F6'),
  bg: text('bg').notNull().default('rgba(59,130,246,0.08)'),
  border: text('border').notNull().default('rgba(59,130,246,0.2)'),
  emoji: text('emoji').notNull().default('🌐'),
  tags: text('tags').notNull().default('[]'), // JSON array string
  active: integer('active').notNull().default(1),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
})