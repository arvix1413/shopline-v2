'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { RESERVED_STORE_SLUGS } from '../../../lib/storeSlug'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

type Store = {
  id: number
  slug: string
  name: string
  tagline?: string
  status: string
  urlPath: string
}

type Product = {
  id: number
  name: string
  description?: string
  price: number
  imageUrl?: string
  category?: string
  featured?: boolean
  stock?: number
}

type CartItem = {
  id: number
  productId: number
  quantity: number
  product: {
    id: number
    name: string
    price: number
    imageUrl?: string
    category?: string
    stock?: number
  }
}

function formatPrice(n: number) {
  return `NT$ ${Math.round(n).toLocaleString('zh-TW')}`
}

function parseListPrice(description?: string): number | null {
  if (!description) return null
  const m = description.match(/原價\s*NT\$?\s*([0-9,]+)/i)
  if (!m) return null
  const v = Number(m[1].replace(/,/g, ''))
  return Number.isFinite(v) ? v : null
}

function getCartSessionKey(storeSlug: string) {
  return `arvix_cart_${storeSlug}`
}

function ensureCartSession(storeSlug: string) {
  const key = getCartSessionKey(storeSlug)
  let sid = localStorage.getItem(key)
  if (!sid) {
    sid = `store_${storeSlug}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    localStorage.setItem(key, sid)
  }
  return sid
}

/** Demo store hero banners (full-bleed). */
const STORE_BANNERS: Record<string, string> = {
  bennis: 'https://shopline-backend.arvix1413.workers.dev/images/products/1788148237227-bennis-banner-clean.jpg',
}

export default function BrandStoreClient() {
  const params = useParams<{ slug: string }>()
  const [slug, setSlug] = useState('')
  const [store, setStore] = useState<Store | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [missing, setMissing] = useState(false)
  const [category, setCategory] = useState('全部')
  const [selected, setSelected] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [sessionId, setSessionId] = useState('')
  const [adding, setAdding] = useState(false)
  const [checkingOut, setCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')
  const [paidNotice, setPaidNotice] = useState<{ orderId: string; method?: string } | null>(null)
  const [form, setForm] = useState({
    shippingMethod: 'seven_eleven' as 'seven_eleven' | 'home',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    shippingAddress: '',
  })

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const fromQuery = q.get('slug')
    if (fromQuery) {
      setSlug(fromQuery.toLowerCase())
    } else {
      const parts = window.location.pathname.split('/').filter(Boolean)
      const fromPath = parts[0] === 's' ? parts[1] : parts[0]
      const resolved = (fromPath && fromPath !== '_' && fromPath !== 'shop'
        ? fromPath
        : ''
      ).toLowerCase()
      if (!resolved) {
        window.location.replace('/')
        return
      }
      setSlug(resolved)
    }
    const paid = q.get('paid')
    const orderId = q.get('order')
    if (paid === '1' && orderId) {
      setPaidNotice({ orderId, method: q.get('session_id') ? 'stripe' : 'cod' })
    }
  }, [params])

  useEffect(() => {
    if (!slug) return
    if (RESERVED_STORE_SLUGS.has(slug)) {
      setMissing(true)
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    setMissing(false)
    ;(async () => {
      try {
        const [storeRes, productRes] = await Promise.all([
          fetch(`${API}/api/stores/${encodeURIComponent(slug)}`),
          fetch(`${API}/api/products?store=${encodeURIComponent(slug)}`),
        ])
        if (!storeRes.ok) {
          if (!cancelled) setMissing(true)
          return
        }
        const storeData = await storeRes.json()
        const productData = productRes.ok ? await productRes.json() : []
        if (!cancelled) {
          setStore(storeData)
          setProducts(Array.isArray(productData) ? productData : [])
          const sid = ensureCartSession(slug)
          setSessionId(sid)
          await refreshCart(sid)
        }
      } catch {
        if (!cancelled) setMissing(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [slug])

  const refreshCart = async (sid = sessionId) => {
    if (!sid) return
    try {
      const res = await fetch(`${API}/api/cart/${encodeURIComponent(sid)}`)
      if (!res.ok) return
      const items = await res.json()
      setCartItems(Array.isArray(items) ? items.filter((i: CartItem) => i.product) : [])
    } catch {
      /* ignore */
    }
  }

  const categories = useMemo(() => {
    const set = new Set<string>()
    for (const p of products) {
      if (p.category) set.add(p.category)
    }
    return ['全部', ...Array.from(set)]
  }, [products])

  const visible = useMemo(() => {
    if (category === '全部') return products
    return products.filter((p) => p.category === category)
  }, [products, category])

  const bannerUrl = store ? STORE_BANNERS[store.slug] : undefined
  const cartCount = cartItems.reduce((n, i) => n + i.quantity, 0)
  const cartTotal = cartItems.reduce((n, i) => n + i.product.price * i.quantity, 0)

  const addToCart = async (product: Product) => {
    if (!sessionId) return
    setAdding(true)
    setCheckoutError('')
    try {
      const res = await fetch(`${API}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, productId: product.id, quantity: 1 }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setCheckoutError(data.error || '加入購物車失敗')
        return
      }
      await refreshCart()
      setSelected(null)
      setCartOpen(true)
    } catch {
      setCheckoutError('加入購物車失敗，請稍後再試')
    } finally {
      setAdding(false)
    }
  }

  const updateQty = async (itemId: number, quantity: number) => {
    if (quantity < 1) return
    const res = await fetch(`${API}/api/cart/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    })
    if (res.ok) await refreshCart()
  }

  const removeItem = async (itemId: number) => {
    const res = await fetch(`${API}/api/cart/${itemId}`, { method: 'DELETE' })
    if (res.ok) await refreshCart()
  }

  const checkout = async (method: 'stripe' | 'cod') => {
    if (!store || !sessionId) return
    if (method === 'cod' && form.shippingMethod !== 'seven_eleven') {
      setCheckoutError('貨到付款僅限 7-11 取貨')
      return
    }
    if (!form.customerName.trim() || form.customerName.trim().length < 2) {
      setCheckoutError('請填寫收貨人全名')
      return
    }
    setCheckingOut(true)
    setCheckoutError('')
    try {
      const res = await fetch(`${API}/api/store-checkout/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          storeSlug: store.slug,
          method,
          shippingMethod: form.shippingMethod,
          customerName: form.customerName,
          customerPhone: form.customerPhone,
          customerEmail: form.customerEmail,
          shippingAddress: form.shippingAddress,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setCheckoutError(data.error || '結帳失敗')
        return
      }
      if (method === 'stripe' && data.url) {
        window.location.href = data.url
        return
      }
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl
        return
      }
      setPaidNotice({ orderId: String(data.orderId || ''), method })
      setCartOpen(false)
      await refreshCart()
    } catch {
      setCheckoutError('結帳失敗，請稍後再試')
    } finally {
      setCheckingOut(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#FAFBFA' }}>
        <div className="text-sm tracking-wide" style={{ color: '#6B7280' }}>載入店舖中...</div>
      </main>
    )
  }

  if (missing || !store) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: '#FAFBFA' }}>
        <p className="font-brand text-2xl font-extrabold brand-text mb-4">ARVIX</p>
        <h1 className="text-2xl font-black mb-2" style={{ color: '#111827' }}>找不到這間店</h1>
        <p className="text-sm mb-8" style={{ color: '#6B7280' }}>
          網址 /{slug || '...'} 尚未開通，或品牌名稱有誤。
        </p>
        <Link href="/register" className="btn-brand btn-glow px-6 py-3 rounded-full text-sm font-bold">
          免費開一間自己的店
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ background: '#FAFBFA', color: '#111827' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        .bennis-store { font-family: 'Outfit', system-ui, sans-serif; }
        @keyframes store-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .store-rise { animation: store-rise 0.65s ease both; }
        .store-rise-delay-1 { animation-delay: 0.08s; }
        .store-rise-delay-2 { animation-delay: 0.16s; }
        .product-card:hover .product-img { transform: scale(1.04); }
        .product-img { transition: transform 0.45s ease; }
        @keyframes banner-zoom {
          from { transform: scale(1.06); }
          to { transform: scale(1); }
        }
        .store-banner-img { animation: banner-zoom 8s ease-out both; }
      `}</style>

      <div className="bennis-store">
        <header
          className="sticky top-0 z-30 backdrop-blur-md"
          style={{ background: 'rgba(250,251,250,0.9)', borderBottom: '1px solid rgba(17,24,39,0.06)' }}
        >
          <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-xl font-bold tracking-tight truncate">{store.name}</div>
              <div className="text-[11px] tracking-wide" style={{ color: '#9CA3AF' }}>Powered by ARVIX · Studio</div>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium" style={{ color: '#4B5563' }}>
              <a href="#products" className="hover:opacity-70 transition">商品</a>
              <a href="#about" className="hover:opacity-70 transition">品牌</a>
            </nav>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative text-sm font-semibold px-4 py-2 transition hover:opacity-90"
              style={{ background: '#111827', color: '#FAFBFA' }}
            >
              購物車{cartCount > 0 ? ` (${cartCount})` : ''}
            </button>
          </div>
        </header>

        {paidNotice && (
          <div className="px-5 py-3 text-sm text-center" style={{ background: '#ECFDF5', color: '#065F46' }}>
            訂單 #{paidNotice.orderId} 已成立
            {paidNotice.method === 'stripe' ? '（信用卡付款）' : '（貨到付款）'}。感謝購買！
            <button type="button" className="ml-3 underline" onClick={() => setPaidNotice(null)}>關閉</button>
          </div>
        )}

        <section className="relative overflow-hidden" style={{ minHeight: 'min(78vh, 720px)' }}>
          {bannerUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bannerUrl}
                alt=""
                className="store-banner-img absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(17,24,39,0.62) 0%, rgba(17,24,39,0.38) 42%, rgba(17,24,39,0.12) 100%)',
                }}
              />
            </>
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 55% at 78% 18%, rgba(56,120,92,0.16), transparent 58%), linear-gradient(165deg, #EEF2EF 0%, #FAFBFA 42%, #E8F0EB 100%)',
              }}
            />
          )}
          <div
            className="relative z-10 max-w-6xl mx-auto px-5 flex flex-col justify-end"
            style={{ minHeight: 'min(78vh, 720px)', paddingTop: '5rem', paddingBottom: '3.5rem' }}
          >
            <h1
              className="store-rise font-extrabold tracking-tight mb-4"
              style={{
                fontSize: 'clamp(2.6rem, 7vw, 4.4rem)',
                lineHeight: 1.05,
                maxWidth: '10ch',
                color: bannerUrl ? '#FAFBFA' : '#111827',
              }}
            >
              {store.name}
            </h1>
            <p
              className="store-rise store-rise-delay-1 text-base md:text-lg mb-8"
              style={{
                color: bannerUrl ? 'rgba(250,251,250,0.88)' : '#4B5563',
                maxWidth: 420,
                lineHeight: 1.65,
              }}
            >
              {store.tagline || '枕頭｜天然乳膠枕頭，選對枕頭，睡出好眠。'}
            </p>
            <div className="store-rise store-rise-delay-2">
              <a
                href="#products"
                className="inline-block px-7 py-3 text-sm font-semibold"
                style={
                  bannerUrl
                    ? { background: '#FAFBFA', color: '#111827' }
                    : { background: '#111827', color: '#FAFBFA' }
                }
              >
                瀏覽全部商品
              </a>
            </div>
          </div>
        </section>

        <section id="products" className="pb-20 pt-4">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">熱銷商品 Must-have</h2>
                <p className="text-sm" style={{ color: '#6B7280' }}>乳膠枕頭系列</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className="px-3.5 py-1.5 text-xs font-semibold transition"
                    style={
                      category === c
                        ? { background: '#111827', color: '#FAFBFA' }
                        : { background: 'rgba(17,24,39,0.05)', color: '#4B5563' }
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {visible.map((p, i) => {
                const list = parseListPrice(p.description)
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelected(p)}
                    className="product-card text-left group"
                    style={{ animation: `store-rise 0.55s ease both`, animationDelay: `${Math.min(i, 8) * 0.04}s` }}
                  >
                    <div className="overflow-hidden mb-3 aspect-[4/5]" style={{ background: '#E5E7EB' }}>
                      {p.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="product-img w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs" style={{ color: '#9CA3AF' }}>
                          暫無圖片
                        </div>
                      )}
                    </div>
                    <div className="text-[11px] font-semibold tracking-wide mb-1" style={{ color: '#3F6B55' }}>
                      {p.category || '商品'}
                    </div>
                    <h3 className="text-sm font-semibold leading-snug mb-2 line-clamp-2 group-hover:opacity-80 transition">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-bold">{formatPrice(p.price)}</span>
                      {list && list > p.price && (
                        <span className="text-xs line-through" style={{ color: '#9CA3AF' }}>
                          {formatPrice(list)}
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="pb-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="px-6 py-12 md:px-12 md:py-14" style={{ background: '#111827', color: '#F9FAFB' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">關於品牌</h2>
              <p className="text-sm md:text-base max-w-xl leading-relaxed" style={{ color: 'rgba(249,250,251,0.78)' }}>
                {store.tagline || '選對枕頭，睡出好眠。馬來西亞天然乳膠，守護每一夜好眠。'}
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t py-8" style={{ borderColor: 'rgba(17,24,39,0.06)' }}>
          <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs" style={{ color: '#9CA3AF' }}>
            <span>{store.name}</span>
            <Link href="/" className="hover:opacity-70 transition">arvixai.com</Link>
          </div>
        </footer>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ background: 'rgba(17,24,39,0.5)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full sm:max-w-lg max-h-[90vh] overflow-auto"
            style={{ background: '#FAFBFA' }}
            onClick={(e) => e.stopPropagation()}
          >
            {selected.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={selected.imageUrl} alt={selected.name} className="w-full aspect-[4/3] object-cover" />
            )}
            <div className="p-6">
              <div className="text-[11px] font-semibold tracking-wide mb-2" style={{ color: '#3F6B55' }}>
                {selected.category || '商品'}
              </div>
              <h3 className="text-xl font-bold mb-3">{selected.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-lg font-bold">{formatPrice(selected.price)}</span>
                {(() => {
                  const list = parseListPrice(selected.description)
                  return list && list > selected.price ? (
                    <span className="text-sm line-through" style={{ color: '#9CA3AF' }}>{formatPrice(list)}</span>
                  ) : null
                })()}
              </div>
              {selected.description && (
                <p className="text-sm mb-6 leading-relaxed" style={{ color: '#4B5563' }}>
                  {selected.description.replace(/原價\s*NT\$?\s*[0-9,]+\s*/i, '').trim() || '天然乳膠枕頭'}
                </p>
              )}
              {checkoutError && <p className="text-sm mb-3" style={{ color: '#B91C1C' }}>{checkoutError}</p>}
              <button
                type="button"
                disabled={adding}
                className="w-full py-3 text-sm font-semibold disabled:opacity-60"
                style={{ background: '#111827', color: '#FAFBFA' }}
                onClick={() => addToCart(selected)}
              >
                {adding ? '加入中...' : '加入購物車'}
              </button>
            </div>
          </div>
        </div>
      )}

      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          style={{ background: 'rgba(17,24,39,0.45)' }}
          onClick={() => setCartOpen(false)}
        >
          <div
            className="h-full w-full sm:max-w-md overflow-auto"
            style={{ background: '#FAFBFA' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between px-5 h-16 border-b" style={{ borderColor: 'rgba(17,24,39,0.08)', background: '#FAFBFA' }}>
              <h2 className="font-bold text-lg">購物車</h2>
              <button type="button" className="text-sm" style={{ color: '#6B7280' }} onClick={() => setCartOpen(false)}>關閉</button>
            </div>

            <div className="p-5 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm py-10 text-center" style={{ color: '#6B7280' }}>購物車是空的</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.imageUrl || ''}
                      alt=""
                      className="w-16 h-16 object-cover"
                      style={{ background: '#E5E7EB' }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold line-clamp-2 mb-1">{item.product.name}</div>
                      <div className="text-sm mb-2">{formatPrice(item.product.price)}</div>
                      <div className="flex items-center gap-2">
                        <button type="button" className="px-2 py-0.5 text-sm border" onClick={() => updateQty(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button type="button" className="px-2 py-0.5 text-sm border" onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                        <button type="button" className="ml-auto text-xs" style={{ color: '#B91C1C' }} onClick={() => removeItem(item.id)}>移除</button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {cartItems.length > 0 && (
                <>
                  <div className="border-t pt-4" style={{ borderColor: 'rgba(17,24,39,0.08)' }}>
                    <div className="flex justify-between font-bold mb-4">
                      <span>合計</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold mb-2" style={{ color: '#4B5563' }}>配送方式</div>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            className="px-3 py-2 text-sm font-semibold text-left"
                            style={
                              form.shippingMethod === 'seven_eleven'
                                ? { background: '#111827', color: '#FAFBFA' }
                                : { background: '#fff', border: '1px solid rgba(17,24,39,0.12)' }
                            }
                            onClick={() => setForm((f) => ({ ...f, shippingMethod: 'seven_eleven' }))}
                          >
                            7-11 取貨
                          </button>
                          <button
                            type="button"
                            className="px-3 py-2 text-sm font-semibold text-left"
                            style={
                              form.shippingMethod === 'home'
                                ? { background: '#111827', color: '#FAFBFA' }
                                : { background: '#fff', border: '1px solid rgba(17,24,39,0.12)' }
                            }
                            onClick={() => setForm((f) => ({ ...f, shippingMethod: 'home' }))}
                          >
                            宅配／其他
                          </button>
                        </div>
                        <p className="text-[11px] mt-2 leading-relaxed" style={{ color: '#9CA3AF' }}>
                          {form.shippingMethod === 'seven_eleven'
                            ? '7-11：可刷卡或貨到付款；收貨人請留全名。'
                            : '宅配／其他：僅接受信用卡付款。'}
                        </p>
                      </div>
                      <input
                        className="w-full px-3 py-2 text-sm border outline-none"
                        placeholder="收貨人全名 *"
                        value={form.customerName}
                        onChange={(e) => setForm((f) => ({ ...f, customerName: e.target.value }))}
                      />
                      <input
                        className="w-full px-3 py-2 text-sm border outline-none"
                        placeholder="手機 *"
                        value={form.customerPhone}
                        onChange={(e) => setForm((f) => ({ ...f, customerPhone: e.target.value }))}
                      />
                      <input
                        className="w-full px-3 py-2 text-sm border outline-none"
                        placeholder="Email（選填）"
                        value={form.customerEmail}
                        onChange={(e) => setForm((f) => ({ ...f, customerEmail: e.target.value }))}
                      />
                      <textarea
                        className="w-full px-3 py-2 text-sm border outline-none resize-none"
                        rows={3}
                        placeholder={
                          form.shippingMethod === 'seven_eleven'
                            ? '7-11 門市名稱／店號 *'
                            : '收件地址 *'
                        }
                        value={form.shippingAddress}
                        onChange={(e) => setForm((f) => ({ ...f, shippingAddress: e.target.value }))}
                      />
                    </div>
                  </div>

                  {checkoutError && <p className="text-sm" style={{ color: '#B91C1C' }}>{checkoutError}</p>}

                  <button
                    type="button"
                    disabled={checkingOut}
                    className="w-full py-3 text-sm font-semibold disabled:opacity-60"
                    style={{ background: '#111827', color: '#FAFBFA' }}
                    onClick={() => checkout('stripe')}
                  >
                    {checkingOut ? '處理中...' : '信用卡付款'}
                  </button>
                  {form.shippingMethod === 'seven_eleven' && (
                    <button
                      type="button"
                      disabled={checkingOut}
                      className="w-full py-3 text-sm font-semibold disabled:opacity-60"
                      style={{ border: '1px solid rgba(17,24,39,0.15)', background: '#fff' }}
                      onClick={() => checkout('cod')}
                    >
                      貨到付款下單
                    </button>
                  )}
                  <p className="text-[11px] leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {form.shippingMethod === 'seven_eleven'
                      ? '7-11 取貨可用刷卡或貨到付款；刷卡時收貨人請留全名。'
                      : '此配送方式僅能刷信用卡付款。'}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
