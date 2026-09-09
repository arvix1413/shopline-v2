/** Merchant storefront content pages (custom pages with own URLs). */

import type { CheckoutCopy } from './checkoutCopy'

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

export function findStorePage(pages: StorePage[], key: string): StorePage | null {
  const k = slugifyPageKey(key)
  return pages.find((p) => p.key === k && p.published) || null
}

const STOCK_TITLES: Record<string, string[]> = {
  about: ['關於我們', '关于我们', 'About', 'About us', '소개', '私たちについて', 'Giới thiệu', 'Sobre nosotros', 'Sobre', 'Über uns', 'À propos'],
  contact: ['聯絡我們', '联系我们', 'Contact', 'Contact us', '문의', 'お問い合わせ', 'Liên hệ', 'Contacto', 'Fale conosco', 'Kontakt', 'Nous contacter'],
  shipping: ['配送政策', 'Shipping', 'Shipping policy', '배송 정책', '配送ポリシー', 'Chính sách giao hàng', 'Política de envío', 'Política de envio', 'Versandrichtlinie', 'Politique de livraison'],
  returns: ['退換貨政策', '退换货政策', 'Returns', 'Returns policy', 'Return policy', '교환·반품 정책', '返品・交換ポリシー', 'Đổi trả', 'Devoluciones', 'Trocas e devoluções', 'Rückgabe', 'Retours'],
}

const STOCK_BODY_MARKERS: Record<string, string[]> = {
  about: ['用心挑選每一件商品', '用心挑选每一件商品', 'carefully selects every product', '상품을 신중히 고릅니다', '商品を丁寧に選んでいます'],
  contact: ['如需協助，請透過訂單備註', '如需协助，请通过订单备注', 'Leave a note on your order', '주문 메모를 남기거나', '注文メモを残すか'],
  shipping: ['台灣出貨商店可選 7-11', '台湾出货商店可选 7-11', 'Taiwan-shipping stores can offer 7-11', '대만 출고 스토어는 7-11', '台湾発送のストアは 7-11'],
  returns: ['若商品有瑕疵或與描述不符', '若商品有瑕疵或与描述不符', 'If an item is defective', '상품에 하자가 있거나', '不良や記載違いがある場合'],
}

function pageLabel(key: string, cx: CheckoutCopy): string | null {
  if (key === 'about') return cx.aboutNav
  if (key === 'contact') return cx.contactNav
  if (key === 'shipping') return cx.shippingPage
  if (key === 'returns') return cx.returnsPage
  return null
}

function pageBodyTemplate(key: string, cx: CheckoutCopy): string | null {
  if (key === 'about') return cx.aboutBody
  if (key === 'contact') return cx.contactBody
  if (key === 'shipping') return cx.shippingBody
  if (key === 'returns') return cx.returnsBody
  return null
}

export function displayStorePageTitle(key: string, storedTitle: string, cx: CheckoutCopy): string {
  const label = pageLabel(key, cx)
  if (!label) return storedTitle
  const stock = STOCK_TITLES[key] || []
  if (!storedTitle || stock.includes(storedTitle)) return label
  return storedTitle
}

export function displayStorePageBody(key: string, storedBody: string, storeName: string, cx: CheckoutCopy): string {
  const template = pageBodyTemplate(key, cx)
  if (!template) return storedBody
  const markers = STOCK_BODY_MARKERS[key] || []
  if (markers.some((m) => storedBody.includes(m)) || !storedBody.trim()) {
    return template.replace(/\{name\}/g, storeName || cx.storeFallback)
  }
  return storedBody
}
