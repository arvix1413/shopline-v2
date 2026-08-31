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

/** Demo store hero banners (full-bleed). */
const STORE_BANNERS: Record<string, string> = {
  bennis: 'https://shopline-backend.arvix1413.workers.dev/images/products/1788146474810-bennis-banner.jpg',
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

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('slug')
    if (q) {
      setSlug(q.toLowerCase())
      return
    }
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
        }
      } catch {
        if (!cancelled) setMissing(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [slug])

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
        .store-rise-delay-3 { animation-delay: 0.24s; }
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
            <a
              href="#products"
              className="text-sm font-semibold px-4 py-2 transition hover:opacity-90"
              style={{ background: '#111827', color: '#FAFBFA' }}
            >
              選購枕頭
            </a>
          </div>
        </header>

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

            {visible.length === 0 ? (
              <div
                className="px-6 py-16 text-center"
                style={{ background: '#fff', border: '1px solid rgba(17,24,39,0.06)' }}
              >
                <p className="text-sm" style={{ color: '#6B7280' }}>此分類尚無商品</p>
              </div>
            ) : (
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
            )}
          </div>
        </section>

        <section id="about" className="pb-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="px-6 py-12 md:px-12 md:py-14" style={{ background: '#111827', color: '#F9FAFB' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">關於品牌</h2>
              <p className="text-sm md:text-base max-w-xl leading-relaxed" style={{ color: 'rgba(249,250,251,0.78)' }}>
                {store.tagline || '選對枕頭，睡出好眠。此為 ARVIX 店舖功能示範，商品資料來源於班尼斯枕頭分類。'}
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t py-8" style={{ borderColor: 'rgba(17,24,39,0.06)' }}>
          <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs" style={{ color: '#9CA3AF' }}>
            <span>{store.name} · Demo store on ARVIX</span>
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
              <button
                type="button"
                className="w-full py-3 text-sm font-semibold"
                style={{ background: '#111827', color: '#FAFBFA' }}
                onClick={() => setSelected(null)}
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
