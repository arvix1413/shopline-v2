'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

const PLANS = [
  {
    id: 'starter',
    name: '入門方案',
    price: 'NT$990',
    period: '/月',
    desc: '適合一人創業、剛開始上架',
    features: ['網路商店', '基礎金物流', '14 天開通後續約', 'Email 支援'],
  },
  {
    id: 'standard',
    name: '成長方案',
    price: 'NT$2,490',
    period: '/月',
    desc: '適合正在衝單的品牌電商',
    features: ['入門方案全部功能', '行銷模組', '優先客服', '進階報表'],
    highlight: true,
  },
  {
    id: 'pro',
    name: '專業方案',
    price: 'NT$4,990',
    period: '/月',
    desc: '適合多通路與規模化團隊',
    features: ['成長方案全部功能', '多通路整合', '專屬顧問', 'API 擴充'],
  },
]

type TrialInfo = {
  planStatus: string
  daysLeft: number | null
  expired: boolean
  stage?: string
  stageLabel?: string
  stages?: { id: string; label: string }[]
  store?: { slug?: string; onboardingStage?: string } | null
}

export default function BillingPage() {
  const { user, token, isLoading } = useAuth()
  const router = useRouter()
  const [trial, setTrial] = useState<TrialInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [selected, setSelected] = useState('standard')

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace('/login')
      return
    }
    fetch(`${API}/api/me/trial`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => {})
  }, [user, token, isLoading, router])

  const activate = async () => {
    if (!token) return
    setLoading(true)
    setMsg('')
    try {
      const res = await fetch(`${API}/api/me/activate`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selected }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '開通失敗')
      setMsg('開通成功！你的方案已啟用。')
      setTrial((t) => (t ? { ...t, planStatus: 'paid', expired: false } : t))
    } catch (e: any) {
      setMsg(e.message || '開通失敗')
    } finally {
      setLoading(false)
    }
  }

  const markStage = async (stage: string) => {
    if (!token) return
    await fetch(`${API}/api/me/onboarding`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ stage }),
    })
    const res = await fetch(`${API}/api/me/trial`, { headers: { Authorization: `Bearer ${token}` } })
    if (res.ok) setTrial(await res.json())
  }

  return (
    <main className="min-h-screen" style={{ background: '#F6F7FB' }}>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#5B5FF0' }}>Billing</p>
          <h1 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: '#12131F' }}>開通 ARVIX 方案</h1>
          <p className="text-sm sm:text-base" style={{ color: '#5C5F7A' }}>
            {trial?.planStatus === 'paid'
              ? '你已完成付款開通，可持續使用完整功能。'
              : trial?.expired
              ? '試用已結束，選擇方案後即可重新開通。'
              : `試用剩餘 ${trial?.daysLeft ?? '—'} 天 · 目前進度：${trial?.stageLabel || '—'}`}
          </p>
        </div>

        {msg && (
          <div className="mb-6 text-center text-sm font-medium px-4 py-3 rounded-xl"
            style={{ background: msg.includes('成功') ? '#ECFDF5' : '#FEF2F2', color: msg.includes('成功') ? '#047857' : '#B91C1C' }}>
            {msg}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {PLANS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              className="text-left rounded-2xl p-6 transition-all"
              style={{
                background: '#fff',
                border: selected === p.id ? '2px solid #5B5FF0' : '1px solid rgba(18,19,31,0.08)',
                boxShadow: p.highlight ? '0 12px 40px rgba(91,95,240,0.12)' : undefined,
              }}
            >
              {p.highlight && (
                <div className="text-xs font-bold mb-2" style={{ color: '#5B5FF0' }}>最受歡迎</div>
              )}
              <h3 className="text-xl font-black mb-1" style={{ color: '#12131F' }}>{p.name}</h3>
              <p className="text-sm mb-4" style={{ color: '#5C5F7A' }}>{p.desc}</p>
              <div className="mb-4">
                <span className="text-3xl font-black" style={{ color: '#5B5FF0' }}>{p.price}</span>
                <span className="text-sm" style={{ color: '#8A8DA8' }}>{p.period}</span>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: '#3A3D55' }}>
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {trial?.planStatus !== 'paid' && (
          <div className="text-center mb-14">
            <button
              type="button"
              disabled={loading}
              onClick={activate}
              className="btn-brand text-white font-bold px-10 py-3.5 rounded-full disabled:opacity-60"
            >
              {loading ? '處理中…' : '確認開通（測試付款）'}
            </button>
            <p className="mt-3 text-xs" style={{ color: '#8A8DA8' }}>
              目前為內部開通流程，之後可串接金流（信用卡／發票）。開通後會通知業務團隊。
            </p>
          </div>
        )}

        <div className="rounded-2xl p-6 sm:p-8" style={{ background: '#fff', border: '1px solid rgba(18,19,31,0.08)' }}>
          <h2 className="text-lg font-black mb-2" style={{ color: '#12131F' }}>開店進度自助更新</h2>
          <p className="text-sm mb-5" style={{ color: '#5C5F7A' }}>
            完成後點一下，方便我們掌握你的進度並提供協助。
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'products_added', label: '我已上架商品' },
              { id: 'payments_setup', label: '我已設定金流' },
              { id: 'live', label: '商店已上線' },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => markStage(s.id)}
                className="text-sm font-semibold px-4 py-2 rounded-full"
                style={{ background: '#F0F1FE', color: '#5B5FF0' }}
              >
                {s.label}
              </button>
            ))}
            {trial?.store?.slug && (
              <Link
                href={`/s/shop?slug=${trial.store.slug}`}
                className="text-sm font-semibold px-4 py-2 rounded-full"
                style={{ background: '#15162A', color: '#fff' }}
              >
                查看我的商店
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
