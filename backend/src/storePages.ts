/** Merchant storefront content pages (mirrors frontend/lib/storePages.ts). */

export type StorePage = {
  key: string
  title: string
  body: string
  published: boolean
}

export function defaultStorePages(storeName: string): StorePage[] {
  const name = storeName || '本店'
  return [
    {
      key: 'about',
      title: '關於我們',
      body: `${name} 用心挑選每一件商品，希望帶給顧客更好的生活體驗。\n\n我們相信好產品值得被好好介紹——歡迎在這裡認識我們的品牌故事與理念。`,
      published: true,
    },
    {
      key: 'contact',
      title: '聯絡我們',
      body: `如需協助，請透過訂單備註留下聯絡方式，或於結帳時填寫正確的 Email／電話，我們會盡快回覆。\n\n店名：${name}`,
      published: true,
    },
    {
      key: 'shipping',
      title: '配送政策',
      body: '台灣出貨商店可選 7-11 超商取貨（含貨到付款）或宅配。非台灣出貨商店目前僅支援宅配與信用卡付款。運費與到貨時間由店家說明為準。',
      published: true,
    },
    {
      key: 'returns',
      title: '退換貨政策',
      body: '若商品有瑕疵或與描述不符，請於收貨後盡快與我們聯繫。未拆封／未使用之商品，依個案協助退換。',
      published: true,
    },
  ]
}

export function slugifyPageKey(input: string): string {
  const raw = (input || '').trim().toLowerCase()
  let key = raw
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  if (key.length > 40) key = key.slice(0, 40).replace(/-$/, '')
  return key
}

export function parseStorePages(raw: unknown, storeName: string): StorePage[] {
  if (!Array.isArray(raw) || raw.length === 0) return defaultStorePages(storeName)
  const pages: StorePage[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const row = item as Record<string, unknown>
    const key = slugifyPageKey(String(row.key || ''))
    if (!key) continue
    pages.push({
      key,
      title: String(row.title || key).slice(0, 80),
      body: String(row.body || '').slice(0, 20_000),
      published: row.published !== false,
    })
  }
  return pages.length > 0 ? pages : defaultStorePages(storeName)
}

export function normalizePagesInput(raw: unknown): StorePage[] | null {
  if (!Array.isArray(raw)) return null
  if (raw.length > 20) return null
  const pages: StorePage[] = []
  const seen = new Set<string>()
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const row = item as Record<string, unknown>
    const key = slugifyPageKey(String(row.key || ''))
    if (!key || seen.has(key)) continue
    seen.add(key)
    pages.push({
      key,
      title: String(row.title || key).slice(0, 80),
      body: String(row.body || '').slice(0, 20_000),
      published: row.published !== false,
    })
  }
  return pages
}
