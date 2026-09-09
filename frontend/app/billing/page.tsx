'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useI18n } from '../../contexts/I18nContext'
import { getBillingCopy } from '../../lib/billingCopy'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

type TrialInfo = {
  planStatus: string
  daysLeft: number | null
  expired: boolean
  stage?: string
  store?: { slug?: string; onboardingStage?: string } | null
}

export default function BillingPage() {
  const { user, token, isLoading } = useAuth()
  const { locale } = useI18n()
  const c = getBillingCopy(locale)
  const router = useRouter()
  const [trial, setTrial] = useState<TrialInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState(false)
  const [selected, setSelected] = useState('standard')

  const refreshTrial = async (authToken: string) => {
    const res = await fetch(`${API}/api/me/trial`, { headers: { Authorization: `Bearer ${authToken}` } })
    if (res.ok) setTrial(await res.json())
  }

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace('/login')
      return
    }
    const params = new URLSearchParams(window.location.search)
    if (params.get('paid') === '1') {
      setMsg(c.paidPending)
      setOk(true)
      const sessionId = params.get('session_id')
      if (sessionId && token) {
        fetch(`${API}/api/me/confirm-subscription`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        })
          .then(async (res) => {
            if (res.ok) {
              setMsg(c.paidOk)
              setOk(true)
              await refreshTrial(token)
            }
          })
          .catch(() => {})
      }
    } else if (params.get('checkout') === 'cancelled') {
      setMsg(c.cancelled)
      setOk(false)
    }
    refreshTrial(token).catch(() => {})
  }, [user, token, isLoading, router, c.paidPending, c.paidOk, c.cancelled])

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
      if (!res.ok) throw new Error(c.fail)
      if (data.url) {
        window.location.href = data.url
        return
      }
      setMsg(c.success)
      setOk(true)
      setTrial((t) => (t ? { ...t, planStatus: 'paid', expired: false } : t))
    } catch (e: any) {
      setMsg(e.message || c.fail)
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen" style={{ background: '#F6F7FB' }}>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#5B5FF0' }}>Billing</p>
          <h1 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: '#12131F' }}>{c.title}</h1>
          <p className="text-sm sm:text-base" style={{ color: '#5C5F7A' }}>
            {trial?.planStatus === 'paid'
              ? c.paid
              : trial?.expired
              ? c.expired
              : c.leftover.replace('{days}', String(trial?.daysLeft ?? '—'))}
          </p>
        </div>

        {msg && (
          <div className="mb-6 text-center text-sm font-medium px-4 py-3 rounded-xl"
            style={{ background: ok ? '#ECFDF5' : '#FEF2F2', color: ok ? '#047857' : '#B91C1C' }}>
            {msg}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {c.plans.map((p) => (
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
                <div className="text-xs font-bold mb-2" style={{ color: '#5B5FF0' }}>{c.popular}</div>
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
              {loading ? c.processing : c.payCta}
            </button>
            <p className="mt-3 text-xs" style={{ color: '#8A8DA8' }}>
              {c.payHint}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/my-store" className="text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{ background: '#5B5FF0' }}>
            {c.backStore}
          </Link>
          {trial?.store?.slug && (
            <Link
              href={`/s/shop?slug=${trial.store.slug}`}
              className="text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ background: '#15162A', color: '#fff' }}
            >
              {c.viewStore}
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
