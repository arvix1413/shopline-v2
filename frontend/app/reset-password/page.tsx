'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff, CheckCircle } from 'lucide-react'
import { useI18n } from '../../contexts/I18nContext'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

function ResetForm() {
  const router = useRouter()
  const params = useSearchParams()
  const { t } = useI18n()
  const token = params.get('token') || ''

  const [form, setForm] = useState({ password: '', confirm: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) setError(t.auth.resetTitle)
  }, [token, t.auth.resetTitle])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirm) { setError(t.auth.password); return }
    if (form.password.length < 6) { setError(t.auth.password); return }
    setError(''); setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || t.auth.resetTitle); return }
      setDone(true)
      setTimeout(() => router.push('/login'), 3000)
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      {done ? (
        <div className="text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#EEF0FF' }}>
            <CheckCircle size={32} style={{ color: '#5B5FF0' }} />
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: '#00142D' }}>{t.auth.resetTitle}</h2>
          <p className="text-sm" style={{ color: '#687280' }}>{t.auth.backToLogin}</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-1 text-center" style={{ color: '#00142D' }}>{t.auth.resetTitle}</h2>
          <p className="text-sm text-center mb-6" style={{ color: '#687280' }}>{t.auth.password}</p>

          {error && (
            <div className="mb-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 text-sm text-center border border-red-100">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                placeholder={t.auth.password}
                value={form.password}
                onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                className="w-full px-5 py-4 pr-14 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
                required
              />
              <button type="button" onClick={() => setShowPw(v => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" tabIndex={-1}>
                {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <input
              type={showPw ? 'text' : 'password'}
              placeholder={t.auth.password}
              value={form.confirm}
              onChange={e => setForm(p => ({ ...p, confirm: e.target.value }))}
              className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
              required
            />
            <button
              type="submit"
              disabled={loading || !token}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold text-lg transition-all hover:brightness-110 disabled:opacity-60 btn-glow"
              style={{ background: 'linear-gradient(90deg, #5B5FF0 0%, #484CE8 100%)' }}
            >
              {loading ? t.common.loading : t.common.submit}
              {!loading && <ArrowRight size={22} />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm hover:opacity-80" style={{ color: '#5C5F7A' }}>{t.auth.backToLogin}</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default function ResetPasswordPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6"
      style={{ background: 'linear-gradient(160deg, #F6F7FB 0%, #EEF0FF 45%, #FFFFFF 100%)' }}>
      <div className="mb-10">
        <Link href="/" className="font-brand text-4xl font-extrabold brand-text tracking-tight">ARVIX</Link>
      </div>
      <Suspense fallback={<div style={{ color: '#8A8DA8' }}>{t.common.loading}</div>}>
        <ResetForm />
      </Suspense>
    </div>
  )
}
