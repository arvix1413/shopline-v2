'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react'
import { useI18n } from '../../contexts/I18nContext'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function ForgotPasswordPage() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || t.auth.resetCta); return }
      setSent(true)
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6"
      style={{ background: 'linear-gradient(160deg, #F6F7FB 0%, #EEF0FF 45%, #FFFFFF 100%)' }}>

      <div className="mb-10">
        <Link href="/" className="font-brand text-4xl font-extrabold brand-text tracking-tight">ARVIX</Link>
      </div>

      <div className="w-full max-w-md">
        {sent ? (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#EEF0FF' }}>
              <Mail size={32} style={{ color: '#5B5FF0' }} />
            </div>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#00142D' }}>{t.auth.resetTitle}</h2>
            <p className="text-sm mb-6" style={{ color: '#687280' }}>
              <span className="font-medium" style={{ color: '#00142D' }}>{email}</span>
            </p>
            <Link href="/login" className="text-sm flex items-center justify-center gap-1 hover:opacity-80" style={{ color: '#5B5FF0' }}>
              <ArrowLeft size={14} /> {t.auth.backToLogin}
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1 text-center" style={{ color: '#00142D' }}>{t.auth.forgotPassword}</h2>
            <p className="text-sm text-center mb-6" style={{ color: '#687280' }}>{t.auth.resetTitle}</p>

            {error && (
              <div className="mb-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 text-sm text-center border border-red-100">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder={t.auth.email}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold text-lg transition-all hover:brightness-110 disabled:opacity-60 btn-glow"
                style={{ background: 'linear-gradient(90deg, #5B5FF0 0%, #484CE8 100%)' }}
              >
                {loading ? t.common.loading : t.auth.resetCta}
                {!loading && <ArrowRight size={22} />}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm flex items-center justify-center gap-1 hover:opacity-80" style={{ color: '#5C5F7A' }}>
                <ArrowLeft size={14} /> {t.auth.backToLogin}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
