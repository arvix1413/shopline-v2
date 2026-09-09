'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { RESERVED_STORE_SLUGS } from '../../../lib/storeSlug'
import StoreLayoutView from '../../components/StoreLayoutView'
import { parseStoreLayout, type StoreLayout } from '../../../lib/storeLayout'
import { findStorePage, parseStorePages, displayStorePageTitle, displayStorePageBody, type StorePage } from '../../../lib/storePages'
import { storeHomeUrl } from '../../../lib/storefrontUrl'
import { useI18n } from '../../../contexts/I18nContext'
import { getCheckoutCopy } from '../../../lib/checkoutCopy'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

/** 出貨選項跟語系無關；超商取貨是選配物流 */
type Store = {
  id: number
  slug: string
  name: string
  tagline?: string
  status: string
  urlPath: string
  suspended?: boolean
  suspendReason?: string | null
  layout?: StoreLayout | null
  pages?: StorePage[]
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

function formatPrice(n: number, currency: 'TWD' | 'USD' = 'TWD') {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
      maximumFractionDigits: currency === 'TWD' ? 0 : 2,
    }).format(n)
  } catch {
    return currency === 'USD' ? `$${n.toLocaleString()}` : `NT$ ${Math.round(n).toLocaleString('zh-TW')}`
  }
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

/** Internal category sentinel — never show this string; always localize the label. */
const ALL_CATEGORY = '__all__'

function ensureCartSession(storeSlug: string) {
  const key = getCartSessionKey(storeSlug)
  let sid = localStorage.getItem(key)
  if (!sid) {
    sid = `store_${storeSlug}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    localStorage.setItem(key, sid)
  }
  return sid
}

/** Demo store hero banners (full-bleed) — seeded into default layout when no custom layout. */
const STORE_BANNERS: Record<string, string> = {
  bennis: 'https://shopline-backend.arvix1413.workers.dev/images/products/1788148237227-bennis-banner-clean.jpg',
}

function resolveLayout(store: Store): StoreLayout {
  const layout = parseStoreLayout(store.layout, store.name, store.tagline || '')
  const banner = STORE_BANNERS[store.slug]
  if (banner && !store.layout) {
    return {
      ...layout,
      sections: layout.sections.map((s) =>
        s.type === 'hero' ? { ...s, props: { ...s.props, image: banner } } : s
      ),
    }
  }
  return layout
}

export default function BrandStoreClient({
  view = 'home',
  pageKey,
}: {
  view?: 'home' | 'products' | 'page'
  pageKey?: string
}) {
  const params = useParams<{ slug: string }>()
  const { locale } = useI18n()
  const cx = getCheckoutCopy(locale)
  const [slug, setSlug] = useState('')
  const [store, setStore] = useState<Store | null>(null)
  const priceCurrency: 'TWD' | 'USD' = 'TWD'
  const [pages, setPages] = useState<StorePage[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [missing, setMissing] = useState(false)
  const [category, setCategory] = useState(ALL_CATEGORY)
  const [selected, setSelected] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [sessionId, setSessionId] = useState('')
  const [adding, setAdding] = useState(false)
  const [checkingOut, setCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')
  const [paidNotice, setPaidNotice] = useState<{
    orderId: string
    method?: string
    shipmentCode?: string
  } | null>(null)
  const [form, setForm] = useState({
    shippingMethod: 'home' as 'seven_eleven' | 'home',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    shippingAddress: '',
    cvsStoreId: '',
    cvsStoreName: '',
    cvsAddress: '',
    /** 地圖選店時的 IsCollection：Y=貨到付款、N=刷卡取貨 */
    cvsCollection: 'N' as 'Y' | 'N',
  })
  const [ecpayMapReady, setEcpayMapReady] = useState(false)

  // 超商取貨為選配：有開綠界地圖就可用；沒開也可選並手填門市
  useEffect(() => {
    if (!slug) return
    fetch(`${API}/api/logistics/seven/status?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((d) => setEcpayMapReady(Boolean(d.configured)))
      .catch(() => setEcpayMapReady(false))
  }, [slug])

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
      setPaidNotice({
        orderId,
        method: q.get('session_id') ? 'stripe' : 'cod',
        shipmentCode: q.get('shipment') || undefined,
      })
      // Stripe webhook may create shipment code async — poll briefly
      const slugForReceipt = (fromQuery || '').toLowerCase() || (() => {
        const parts = window.location.pathname.split('/').filter(Boolean)
        const fromPath = parts[0] === 's' ? parts[1] : parts[0]
        return fromPath && fromPath !== 'shop' ? fromPath.toLowerCase() : ''
      })()
      const initialShipment = q.get('shipment') || ''
      if (!initialShipment && slugForReceipt) {
        let tries = 0
        const poll = async () => {
          tries += 1
          try {
            const res = await fetch(
              `${API}/api/store-checkout/receipt?order=${encodeURIComponent(orderId)}&slug=${encodeURIComponent(slugForReceipt)}`
            )
            if (res.ok) {
              const data = await res.json()
              if (data.shipmentCode) {
                setPaidNotice((prev) =>
                  prev && prev.orderId === orderId
                    ? { ...prev, shipmentCode: data.shipmentCode, method: data.method || prev.method }
                    : prev
                )
                return
              }
            }
          } catch {
            /* ignore */
          }
          if (tries < 8) setTimeout(poll, 1500)
        }
        setTimeout(poll, 800)
      }
    }
    if (q.get('checkout') === 'cancelled') {
      setCheckoutError(cx.errCancelled)
      setCartOpen(true)
    }
    const cvsId = q.get('cvs_id')
    const cvsName = q.get('cvs_name')
    const cvsAddr = q.get('cvs_addr')
    const cvsCollection = q.get('cvs_collection')?.toUpperCase() === 'Y' ? 'Y' : 'N'
    if (cvsId || cvsName || cvsAddr) {
      setForm((f) => ({
        ...f,
        shippingMethod: 'seven_eleven',
        cvsStoreId: cvsId || f.cvsStoreId,
        cvsStoreName: cvsName || f.cvsStoreName,
        cvsAddress: cvsAddr || f.cvsAddress,
        cvsCollection: (cvsId || cvsName || cvsAddr ? cvsCollection : f.cvsCollection) as 'Y' | 'N',
        shippingAddress: [cvsName, cvsId ? `#${cvsId}` : '', cvsAddr].filter(Boolean).join('／') || f.shippingAddress,
      }))
      setCartOpen(true)
    }
    if (q.get('open_cart') === '1') setCartOpen(true)
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
          setPages(parseStorePages(storeData.pages, storeData.name || ''))
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

  const layout = store ? resolveLayout(store) : null
  const cartCount = cartItems.reduce((n, i) => n + i.quantity, 0)
  const cartTotal = cartItems.reduce((n, i) => n + i.product.price * i.quantity, 0)
  const activePage = view === 'page' ? findStorePage(pages, pageKey || 'about') : null

  const addToCart = async (product: Product) => {
    if (!sessionId) return
    if (store?.suspended) {
      setCheckoutError(cx.trialEnded)
      return
    }
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
        setCheckoutError(mapApiError(data, cx.addFail))
        return
      }
      await refreshCart()
      setSelected(null)
      setCartOpen(true)
    } catch {
      setCheckoutError(cx.addFail)
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

  const mapApiError = (data: { code?: string }, fallback: string) => {
    switch (data.code) {
      case 'EMPTY_CART':
        return cx.empty
      case 'STORE_SUSPENDED':
      case 'TRIAL_ENDED':
        return cx.trialEnded
      case 'COD_ONLY_SEVEN':
        return cx.errCodOnly
      case 'COD_NOT_SUPPORTED':
        return cx.errNoCod
      case 'NAME_REQUIRED':
        return cx.errName
      case 'PHONE_REQUIRED':
        return cx.errPhone
      case 'ADDR_REQUIRED':
        return cx.errAddr
      case 'CVS_REQUIRED':
        return cx.errCvsRequired
      case 'CVS_MAP_REQUIRED':
        return cx.errMapRequired
      case 'CVS_COLLECTION_MISMATCH':
        return cx.errCollectionMismatch
      case 'CVS_AMOUNT_LIMIT':
        return cx.errAmountLimit
      case 'OUT_OF_STOCK':
        return cx.errStock
      case 'STRIPE_UNAVAILABLE':
        return cx.errStripeUnavailable
      case 'CART_ADD_FAILED':
      case 'NOT_FOUND':
        return cx.addFail
      default:
        // Never surface raw backend language to shoppers
        return fallback
    }
  }

  const checkout = async (method: 'stripe' | 'cod') => {
    if (!store || !sessionId) return
    if (store.suspended) {
      setCheckoutError(cx.trialEnded)
      return
    }
    const shippingMethod = form.shippingMethod
    if (method === 'cod' && shippingMethod !== 'seven_eleven') {
      setCheckoutError(cx.errCodOnly)
      return
    }
    if (!form.customerName.trim() || form.customerName.trim().length < 2) {
      setCheckoutError(cx.errName)
      return
    }
    if (!form.customerPhone.trim()) {
      setCheckoutError(cx.errPhone)
      return
    }
    if (!form.shippingAddress.trim()) {
      setCheckoutError(
        shippingMethod === 'seven_eleven' ? cx.errCvsRequired : cx.errAddr
      )
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
          shippingMethod,
          customerName: form.customerName,
          customerPhone: form.customerPhone,
          customerEmail: form.customerEmail,
          shippingAddress: form.shippingAddress,
          cvsStoreId: form.cvsStoreId,
          cvsStoreName: form.cvsStoreName,
          cvsAddress: form.cvsAddress,
          cvsCollection: form.cvsCollection,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setCheckoutError(mapApiError(data, cx.checkoutFail))
        return
      }
      if (method === 'stripe' && data.url) {
        window.location.href = data.url
        return
      }
      setPaidNotice({
        orderId: String(data.orderId || ''),
        method,
        shipmentCode: data.shipmentCode || undefined,
      })
      setCartOpen(false)
      await refreshCart()
      if (data.redirectUrl) {
        const u = new URL(data.redirectUrl, window.location.origin)
        if (data.shipmentCode) u.searchParams.set('shipment', String(data.shipmentCode))
        window.history.replaceState({}, '', `${u.pathname}${u.search}`)
      }
    } catch {
      setCheckoutError(cx.checkoutFail)
    } finally {
      setCheckingOut(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#FAFBFA' }}>
        <div className="text-sm tracking-wide" style={{ color: '#6B7280' }}>{cx.loadingStore}</div>
      </main>
    )
  }

  if (missing || !store) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: '#FAFBFA' }}>
        <p className="font-brand text-2xl font-extrabold brand-text mb-4">ARVIX</p>
        <h1 className="text-2xl font-black mb-2" style={{ color: '#111827' }}>{cx.storeNotFound}</h1>
        <p className="text-sm mb-8" style={{ color: '#6B7280' }}>
          {cx.storeNotFoundTip} /{slug || '...'}
        </p>
        <Link href="/register" className="btn-brand btn-glow px-6 py-3 rounded-full text-sm font-bold">
          {cx.openStoreCta}
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ background: layout?.theme.background || '#FAFBFA', color: layout?.theme.text || '#111827' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
      `}</style>

      {paidNotice && (
        <div className="px-5 py-3 text-sm text-center" style={{ background: '#ECFDF5', color: '#065F46' }}>
          {cx.paidPrefix} #{paidNotice.orderId} {cx.paidThanks}
          {paidNotice.method === 'stripe' ? cx.paidCard : cx.paidCod}
          {paidNotice.shipmentCode
            ? ` ${cx.paidShipment.replace('{code}', paidNotice.shipmentCode)}`
            : ''}
          <button type="button" className="ml-3 underline" onClick={() => setPaidNotice(null)}>{cx.close}</button>
        </div>
      )}

      {store.suspended && (
        <div className="px-5 py-3 text-sm text-center" style={{ background: '#FEF2F2', color: '#B91C1C' }}>
          {cx.suspended}
        </div>
      )}

      {layout && (
        <StoreLayoutView
          layout={layout}
          storeName={store.name}
          storeSlug={store.slug}
          pages={pages}
          products={products}
          category={category}
          onCategory={setCategory}
          onSelectProduct={setSelected}
          cartCount={cartCount}
          onOpenCart={() => setCartOpen(true)}
          chromeOnly={view !== 'home'}
        >
          {view === 'products' && (
            <section className="max-w-6xl mx-auto px-5 py-12">
              <h1 className="text-3xl font-bold mb-2">{cx.catalogTitle}</h1>
              <p className="text-sm mb-8" style={{ color: layout.theme.muted }}>
                {cx.catalogCount.replace('{n}', String(products.length))}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[ALL_CATEGORY, ...Array.from(new Set(products.map((p) => p.category).filter(Boolean) as string[]))].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className="px-3 py-1.5 text-sm border"
                    style={{
                      borderColor: category === c ? layout.theme.primary : `${layout.theme.text}22`,
                      background: category === c ? layout.theme.primary : 'transparent',
                      color: category === c ? layout.theme.background : layout.theme.text,
                    }}
                  >
                    {c === ALL_CATEGORY ? cx.allCategory : c}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {(category === ALL_CATEGORY ? products : products.filter((p) => p.category === category)).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="text-left group"
                    onClick={() => setSelected(p)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.imageUrl || ''}
                      alt=""
                      className="w-full aspect-square object-cover mb-3"
                      style={{ background: `${layout.theme.text}10` }}
                    />
                    <div className="text-sm font-semibold line-clamp-2 mb-1 group-hover:opacity-70">{p.name}</div>
                    <div className="text-sm font-bold">{formatPrice(p.price, priceCurrency)}</div>
                  </button>
                ))}
              </div>
              {products.length === 0 && (
                <p className="text-sm text-center py-16" style={{ color: layout.theme.muted }}>{cx.noProducts}</p>
              )}
            </section>
          )}

          {view === 'page' && (
            <section className="max-w-3xl mx-auto px-5 py-14">
              {activePage ? (
                <>
                  <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: layout.theme.muted }}>
                    <a href={storeHomeUrl(store.slug)} className="hover:opacity-70">{cx.homeNav}</a>
                    <span className="mx-2">/</span>
                    {displayStorePageTitle(activePage.key, activePage.title, cx)}
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-6">{displayStorePageTitle(activePage.key, activePage.title, cx)}</h1>
                  <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: layout.theme.muted }}>
                    {displayStorePageBody(activePage.key, activePage.body, store.name || '', cx)}
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold mb-3">{cx.pageNotFound}</h1>
                  <p className="text-sm mb-6" style={{ color: layout.theme.muted }}>{cx.pageNotFoundTip}</p>
                  <a href={storeHomeUrl(store.slug)} className="text-sm font-semibold underline">{cx.backHome}</a>
                </>
              )}
            </section>
          )}
        </StoreLayoutView>
      )}

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
                {selected.category || cx.productFallback}
              </div>
              <h3 className="text-xl font-bold mb-3">{selected.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-lg font-bold">{formatPrice(selected.price, priceCurrency)}</span>
                {(() => {
                  const list = parseListPrice(selected.description)
                  return list && list > selected.price ? (
                    <span className="text-sm line-through" style={{ color: '#9CA3AF' }}>{formatPrice(list, priceCurrency)}</span>
                  ) : null
                })()}
              </div>
                  {selected.description && (
                <p className="text-sm mb-6 leading-relaxed" style={{ color: '#4B5563' }}>
                  {selected.description.replace(/原價\s*NT\$?\s*[0-9,]+\s*/i, '').trim()}
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
                {adding ? cx.adding : cx.addToCart}
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
              <h2 className="font-bold text-lg">{cx.cart}</h2>
              <button type="button" className="text-sm" style={{ color: '#6B7280' }} onClick={() => setCartOpen(false)}>{cx.close}</button>
            </div>

            <div className="p-5 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm py-10 text-center" style={{ color: '#6B7280' }}>{cx.empty}</p>
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
                      <div className="text-sm mb-2">{formatPrice(item.product.price, priceCurrency)}</div>
                      <div className="flex items-center gap-2">
                        <button type="button" className="px-2 py-0.5 text-sm border" onClick={() => updateQty(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button type="button" className="px-2 py-0.5 text-sm border" onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                        <button type="button" className="ml-auto text-xs" style={{ color: '#B91C1C' }} onClick={() => removeItem(item.id)}>{cx.remove}</button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {cartItems.length > 0 && (
                <>
                  <div className="border-t pt-4" style={{ borderColor: 'rgba(17,24,39,0.08)' }}>
                    <div className="flex justify-between font-bold mb-4">
                      <span>{cx.total}</span>
                      <span>{formatPrice(cartTotal, priceCurrency)}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                          <div className="text-xs font-semibold mb-2" style={{ color: '#4B5563' }}>{cx.shipping}</div>
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
                              {cx.seven}
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
                              {cx.home}
                            </button>
                          </div>
                          <p className="text-[11px] mt-2 leading-relaxed" style={{ color: '#9CA3AF' }}>
                            {form.shippingMethod === 'seven_eleven' ? cx.sevenTip : cx.homeTip}
                          </p>
                          {form.shippingMethod === 'seven_eleven' && (
                            <div className="mt-3 space-y-2">
                              {ecpayMapReady ? (
                                <>
                                  <a
                                    href={`${API}/api/logistics/ecpay/map?slug=${encodeURIComponent(store?.slug || slug)}&collection=N&device=${typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0}`}
                                    className="block w-full text-center px-3 py-2.5 text-sm font-bold text-white"
                                    style={{ background: '#5B5FF0' }}
                                  >
                                    {cx.mapCard}
                                  </a>
                                  <a
                                    href={`${API}/api/logistics/ecpay/map?slug=${encodeURIComponent(store?.slug || slug)}&collection=Y&device=${typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0}`}
                                    className="block w-full text-center px-3 py-2.5 text-sm font-bold"
                                    style={{ background: '#fff', border: '1px solid #5B5FF0', color: '#5B5FF0' }}
                                  >
                                    {cx.mapCod}
                                  </a>
                                  <p className="text-[11px] leading-relaxed" style={{ color: '#9CA3AF' }}>
                                    {cx.mapRule}
                                  </p>
                                </>
                              ) : (
                                <p className="text-[11px]" style={{ color: '#B45309' }}>
                                  {cx.mapNotReady}
                                </p>
                              )}
                              {form.cvsStoreId && (
                                <div className="text-xs px-3 py-2 rounded" style={{ background: '#ECFDF5', color: '#065F46' }}>
                                  {cx.selectedCvs}：{form.cvsStoreName || '7-11'}（{form.cvsStoreId}）
                                  {form.cvsAddress ? ` · ${form.cvsAddress}` : ''}
                                  {' · '}
                                  {form.cvsCollection === 'Y' ? cx.codPick : cx.cardPick}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      <input
                        className="w-full px-3 py-2 text-sm border outline-none"
                        placeholder={cx.namePh}
                        value={form.customerName}
                        onChange={(e) => setForm((f) => ({ ...f, customerName: e.target.value }))}
                      />
                      <input
                        className="w-full px-3 py-2 text-sm border outline-none"
                        placeholder={cx.phonePh}
                        value={form.customerPhone}
                        onChange={(e) => setForm((f) => ({ ...f, customerPhone: e.target.value }))}
                      />
                      <input
                        className="w-full px-3 py-2 text-sm border outline-none"
                        placeholder={cx.emailPh}
                        value={form.customerEmail}
                        onChange={(e) => setForm((f) => ({ ...f, customerEmail: e.target.value }))}
                      />
                      <textarea
                        className="w-full px-3 py-2 text-sm border outline-none resize-none"
                        rows={3}
                        placeholder={
                          form.shippingMethod === 'seven_eleven'
                            ? ecpayMapReady
                              ? cx.mapPh
                              : cx.cvsPh
                            : cx.addrPh
                        }
                        readOnly={Boolean(form.shippingMethod === 'seven_eleven' && ecpayMapReady && form.cvsStoreId)}
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
                    {checkingOut ? cx.processing : cx.payCard}
                  </button>
                  {form.shippingMethod === 'seven_eleven' && (
                    <button
                      type="button"
                      disabled={checkingOut}
                      className="w-full py-3 text-sm font-semibold disabled:opacity-60"
                      style={{ border: '1px solid rgba(17,24,39,0.15)', background: '#fff' }}
                      onClick={() => checkout('cod')}
                    >
                      {cx.payCod}
                    </button>
                  )}
                  <p className="text-[11px] leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {form.shippingMethod === 'seven_eleven'
                      ? cx.tipSeven
                      : cx.tipCardOnly}
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
