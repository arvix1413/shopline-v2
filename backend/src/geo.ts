/** Resolve visitor geo from Cloudflare Worker request.cf + fallback headers */

export type RequestGeo = {
  country: string
  city: string
  region: string
  ip: string
  deviceType: string
}

export function getRequestGeo(c: { req: { raw: Request; header: (name: string) => string | undefined } }): RequestGeo {
  const cf = (c.req.raw as Request & { cf?: Record<string, unknown> }).cf
  const countryRaw = String(cf?.country || c.req.header('CF-IPCountry') || 'unknown')
  const cityRaw = String(cf?.city || c.req.header('CF-IPCity') || 'unknown')
  const regionRaw = String(cf?.region || cf?.regionCode || '')
  const ua = c.req.header('User-Agent') || ''
  let deviceType = 'desktop'
  if (/Mobile/i.test(ua) && !/iPad|Tablet/i.test(ua)) deviceType = 'mobile'
  else if (/iPad|Tablet/i.test(ua)) deviceType = 'tablet'

  return {
    country: countryRaw && countryRaw !== 'XX' ? countryRaw.toUpperCase() : 'unknown',
    city: cityRaw || 'unknown',
    region: regionRaw,
    ip: c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || 'unknown',
    deviceType,
  }
}

export async function ensurePageviewsTable(db: D1Database) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS pageviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      anonymous_id TEXT NOT NULL,
      path TEXT NOT NULL,
      referrer TEXT DEFAULT '',
      country TEXT DEFAULT 'unknown',
      city TEXT DEFAULT 'unknown',
      region TEXT DEFAULT '',
      device_type TEXT DEFAULT 'desktop',
      user_agent TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now', '+8 hours'))
    )
  `).run()
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_country ON pageviews(country)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_city ON pageviews(country, city)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_created ON pageviews(created_at)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_anon ON pageviews(anonymous_id)`).run() } catch {}
}
