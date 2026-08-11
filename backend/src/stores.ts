/** Shared store slug helpers */

export const RESERVED_STORE_SLUGS = new Set([
  'about', 'admin', 'api', 'apps', 'cart', 'changelog', 'compliance-center',
  'components', 'consultation', 'cooperate', 'faq', 'forgot-password',
  'group-buying', 'line-solution', 'login', 'online-store', 'online-store-setup',
  'payments', 'pos', 'products', 'profile', 'register', 'reset-password',
  'selectedpartners', 'seminar', 'settings', 'shoplytics', 'shopper-app',
  'showcase', 'smart-omo', 'social-commerce', 'solutions', 'targeted-marketing',
  'templates', 'trial', 'trial-redirect', 's', 'store', 'stores', 'www',
  'static', 'assets', 'favicon.ico', 'robots.txt', 'sitemap.xml', '_next',
])

export function slugifyBrand(input: string): string {
  const raw = (input || '').trim().toLowerCase()
  // Keep ascii letters/numbers; turn other separators into hyphen
  let slug = raw
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  if (slug.length > 48) slug = slug.slice(0, 48).replace(/-$/, '')
  return slug
}

export async function ensureStoresTable(db: D1Database) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS stores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      tagline TEXT DEFAULT '',
      status TEXT NOT NULL DEFAULT 'active',
      created_at TEXT DEFAULT (datetime('now', '+8 hours')),
      updated_at TEXT DEFAULT (datetime('now', '+8 hours'))
    )
  `).run()
  await db.prepare(`CREATE INDEX IF NOT EXISTS idx_stores_user_id ON stores(user_id)`).run().catch(() => {})
}

export async function allocateUniqueSlug(db: D1Database, preferred: string, fallbackSeed: string): Promise<string> {
  let base = slugifyBrand(preferred)
  if (!base || RESERVED_STORE_SLUGS.has(base)) {
    base = slugifyBrand(fallbackSeed) || 'shop'
  }
  if (RESERVED_STORE_SLUGS.has(base)) base = `shop-${base}`.replace(/-+/g, '-')

  let candidate = base
  let n = 2
  while (true) {
    if (!RESERVED_STORE_SLUGS.has(candidate)) {
      const row = await db.prepare(`SELECT id FROM stores WHERE slug = ?`).bind(candidate).first()
      if (!row) return candidate
    }
    candidate = `${base}-${n}`
    n += 1
    if (n > 1000) {
      candidate = `shop-${Date.now().toString(36)}`
      break
    }
  }
  return candidate
}
