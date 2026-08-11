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

export default function BrandStoreClient() {
  const params = useParams<{ slug: string }>()
  const slug = useMemo(() => {
    if (typeof window !== 'undefined') {
      const parts = window.location.pathname.split('/').filter(Boolean)
      const fromPath = parts[0] === 's' ? parts[1] : parts[0]
      if (fromPath && fromPath !== '_') return fromPath.toLowerCase()
    }
    const p = (params?.slug || '').toLowerCase()
    return p === '_' ? '' : p
  }, [params])

  const [store, setStore] = useState<Store | null>(null)
  const [loading, setLoading] = useState(true)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    if (!slug || RESERVED_STORE_SLUGS.has(slug)) {
      setMissing(true)
      setLoading(false)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`${API}/api/stores/${encodeURIComponent(slug)}`)
        if (!res.ok) {
          if (!cancelled) setMissing(true)
          return
        }
        const data = await res.json()
        if (!cancelled) setStore(data)
      } catch {
        if (!cancelled) setMissing(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#FFFFFF' }}>
        <div className="text-sm" style={{ color: '#5C5F7A' }}>載入品牌店舖中...</div>
      </main>
    )
  }

  if (missing || !store) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: '#FFFFFF' }}>
        <p className="font-brand text-2xl font-extrabold brand-text mb-4">ARVIX</p>
        <h1 className="text-2xl font-black mb-2" style={{ color: '#12131F' }}>找不到這間店</h1>
        <p className="text-sm mb-8" style={{ color: '#5C5F7A' }}>
          網址 /{slug || '...'} 尚未開通，或品牌名稱有誤。
        </p>
        <Link href="/register" className="btn-brand btn-glow px-6 py-3 rounded-full text-sm font-bold">
          免費開一間自己的店
        </Link>
      </main>
    )
  }

  const host = typeof window !== 'undefined' ? window.location.host : 'arvixai.com'
  const publicUrl = `${host}/${store.slug}`

  return (
    <main className="min-h-screen" style={{ background: '#FFFFFF', color: '#12131F' }}>
      <header className="border-b" style={{ borderColor: 'rgba(18,19,31,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-brand text-xl font-extrabold brand-text">ARVIX</Link>
          <div className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: '#F0F1FE', color: '#5B5FF0' }}>
            {publicUrl}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute pointer-events-none animate-aurora" style={{
          width: 640, height: 640, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,95,240,0.16) 0%, transparent 68%)',
          top: -220, left: '50%', transform: 'translateX(-50%)',
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#5B5FF0' }}>
            Powered by ARVIX
          </p>
          <h1 className="font-black tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {store.name}
          </h1>
          <p className="text-base mb-8 mx-auto" style={{ color: '#5C5F7A', maxWidth: 480 }}>
            {store.tagline || '這間品牌店已成功架起來，可以開始上架商品、開賣了。'}
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link href="/online-store-setup" className="btn-brand btn-glow px-7 py-3 rounded-full text-sm font-bold">
              繼續完善開店設定
            </Link>
            <Link href="/trial" className="px-7 py-3 rounded-full text-sm font-semibold"
              style={{ border: '1px solid rgba(18,19,31,0.12)', color: '#3A3D55' }}>
              進入試用系統
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl p-10 text-center" style={{ background: '#F6F7FB', border: '1px solid rgba(91,95,240,0.12)' }}>
            <h2 className="text-xl font-black mb-3">商品區即將上線</h2>
            <p className="text-sm mb-6" style={{ color: '#5C5F7A' }}>
              你的公開網址已生效：<span className="font-semibold" style={{ color: '#5B5FF0' }}>/{store.slug}</span>
              。接下來可以把商品、版型與金物流接上來。
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                { t: '品牌網址', d: `arvixai.com/${store.slug}` },
                { t: '開店狀態', d: store.status === 'active' ? '已啟用' : store.status },
                { t: '下一步', d: '上架第一件商品，開始接單' },
              ].map((item) => (
                <div key={item.t} className="rounded-xl p-5 bg-white" style={{ border: '1px solid rgba(18,19,31,0.06)' }}>
                  <div className="text-xs font-bold mb-1" style={{ color: '#5B5FF0' }}>{item.t}</div>
                  <div className="text-sm font-medium" style={{ color: '#12131F' }}>{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
