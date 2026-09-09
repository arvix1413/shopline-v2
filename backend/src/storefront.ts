import { ensureStoresTable } from './stores'

/** Storefront-related schema patches (products/orders scoped to stores) */
export async function ensureStorefrontSchema(db: D1Database) {
  await ensureStoresTable(db)

  const productExtras = [
    `ALTER TABLE products ADD COLUMN store_id INTEGER`,
    `ALTER TABLE products ADD COLUMN status TEXT DEFAULT 'active'`,
  ]
  for (const sql of productExtras) {
    await db.prepare(sql).run().catch(() => {})
  }
  await db.prepare(`CREATE INDEX IF NOT EXISTS idx_products_store_id ON products(store_id)`).run().catch(() => {})

  const orderExtras = [
    `ALTER TABLE orders ADD COLUMN store_id INTEGER`,
    `ALTER TABLE orders ADD COLUMN payment_status TEXT DEFAULT 'unpaid'`,
    `ALTER TABLE orders ADD COLUMN payment_method TEXT DEFAULT ''`,
    `ALTER TABLE orders ADD COLUMN customer_name TEXT DEFAULT ''`,
    `ALTER TABLE orders ADD COLUMN customer_email TEXT DEFAULT ''`,
    `ALTER TABLE orders ADD COLUMN customer_phone TEXT DEFAULT ''`,
    `ALTER TABLE orders ADD COLUMN note TEXT DEFAULT ''`,
  ]
  for (const sql of orderExtras) {
    await db.prepare(sql).run().catch(() => {})
  }
  await db.prepare(`CREATE INDEX IF NOT EXISTS idx_orders_store_id ON orders(store_id)`).run().catch(() => {})
}

export async function syncStoreProductCount(db: D1Database, storeId: number) {
  await db.prepare(
    `UPDATE stores SET product_count = (
       SELECT COUNT(*) FROM products WHERE store_id = ? AND COALESCE(status, 'active') = 'active'
     ), updated_at = datetime('now', '+8 hours')
     WHERE id = ?`
  ).bind(storeId, storeId).run()
}
