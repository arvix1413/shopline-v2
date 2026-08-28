/** Resolve visitor geo + classify traffic (human / bot / datacenter / internal) */

export type RequestGeo = {
  country: string
  city: string
  region: string
  ip: string
  deviceType: string
  asOrganization: string
}

export type TrafficType = 'human' | 'bot' | 'datacenter' | 'internal'

const BOT_UA_RE =
  /bot|spider|crawl|slurp|facebookexternalhit|preview|headless|phantom|selenium|puppeteer|playwright|wget|curl\/|python-requests|go-http|axios\/|node-fetch|httpclient|scrapy|semrush|ahrefs|mj12bot|petalbot|bytespider|gptbot|claudebot|ccbot|amazonbot|pingdom|uptimerobot|statuscake|monitor|lighthouse|chrome-lighthouse|pagespeed|yandex|baidu|sogou|duckduck|applebot|twitterbot|linkedinbot|discordbot|telegrambot|whatsapp|slackbot|google-inspection|storebot-google|adsbot|mediapartners/i

/** Cities that are almost always cloud/datacenter egress, not retail visitors */
const DATACENTER_CITY_SAFE = new Set([
  'boardman',
  'the dalles',
  'quincy',
  'ashburn',
  'brambleton',
  'sterling',
  'manassas',
  'herndon',
  'council bluffs',
  'moncks corner',
  'hamina',
  'luleå',
  'lulea',
])

const DATACENTER_ORG_RE =
  /amazon|aws|google|microsoft|azure|digitalocean|linode|akamai|fastly|cloudflare|oracle|ovh|hetzner|vultr|alibaba|tencent|huawei cloud|leaseweb|choopa|contabo|upcloud|scaleway|softlayer|ibm cloud|equinix|colocation|datacenter|data center|hosting|vps|dedicated/i

export function getRequestGeo(c: { req: { raw: Request; header: (name: string) => string | undefined } }): RequestGeo {
  const cf = (c.req.raw as Request & { cf?: Record<string, unknown> }).cf
  const countryRaw = String(cf?.country || c.req.header('CF-IPCountry') || 'unknown')
  const cityRaw = String(cf?.city || c.req.header('CF-IPCity') || 'unknown')
  const regionRaw = String(cf?.region || cf?.regionCode || '')
  const asOrganization = String(cf?.asOrganization || '')
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
    asOrganization,
  }
}

export function isBotUserAgent(ua: string): boolean {
  if (!ua || ua.length < 10) return true
  return BOT_UA_RE.test(ua)
}

export function isDatacenterGeo(opts: {
  city?: string
  region?: string
  asOrganization?: string
}): boolean {
  const city = (opts.city || '').trim().toLowerCase()
  if (city && DATACENTER_CITY_SAFE.has(city)) return true
  const org = opts.asOrganization || ''
  if (org && DATACENTER_ORG_RE.test(org)) return true
  return false
}

export function classifyTraffic(opts: {
  ua: string
  city?: string
  region?: string
  asOrganization?: string
  anonymousId?: string
  internal?: boolean
}): TrafficType {
  if (opts.internal || opts.anonymousId?.startsWith('internal_')) return 'internal'
  if (isBotUserAgent(opts.ua)) return 'bot'
  if (isDatacenterGeo(opts)) return 'datacenter'
  return 'human'
}

/** SQL CASE for classifying historical rows that may lack traffic_type */
export const TRAFFIC_TYPE_SQL = `
  CASE
    WHEN COALESCE(traffic_type, '') IN ('human','bot','datacenter','internal') THEN traffic_type
    WHEN anonymous_id LIKE 'internal_%' THEN 'internal'
    WHEN LOWER(COALESCE(user_agent,'')) GLOB '*bot*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*spider*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*crawl*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*slurp*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*headless*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*puppeteer*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*playwright*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*python-requests*'
      OR LOWER(COALESCE(user_agent,'')) GLOB '*curl/*'
      OR LENGTH(COALESCE(user_agent,'')) < 10 THEN 'bot'
    WHEN LOWER(COALESCE(city,'')) IN (
      'boardman','the dalles','quincy','ashburn','brambleton','sterling','manassas','herndon','council bluffs','moncks corner','hamina','lulea','luleå'
    ) THEN 'datacenter'
    ELSE 'human'
  END
`.replace(/\s+/g, ' ').trim()

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
      traffic_type TEXT DEFAULT 'human',
      as_org TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now', '+8 hours'))
    )
  `).run()
  try { await db.prepare(`ALTER TABLE pageviews ADD COLUMN traffic_type TEXT DEFAULT 'human'`).run() } catch {}
  try { await db.prepare(`ALTER TABLE pageviews ADD COLUMN as_org TEXT DEFAULT ''`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_country ON pageviews(country)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_city ON pageviews(country, city)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_created ON pageviews(created_at)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_anon ON pageviews(anonymous_id)`).run() } catch {}
  try { await db.prepare(`CREATE INDEX IF NOT EXISTS idx_pageviews_type ON pageviews(traffic_type)`).run() } catch {}
}
