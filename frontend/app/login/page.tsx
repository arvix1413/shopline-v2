'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { useI18n } from '../../contexts/I18nContext'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function LoginPage() {
  const { t } = useI18n()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || t.auth.loginCta); return }
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      window.location.href = data.user?.isAdmin ? '/admin' : '/trial'
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
        <h1 className="text-2xl font-bold text-center mb-6" style={{ color: '#00142D' }}>{t.auth.loginTitle}</h1>

        {error && (
          <div className="mb-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 text-sm text-center border border-red-100">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder={t.auth.email}
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
            required
          />

          <div className="relative">
            <input
              type={showPw ? 'text' : 'password'}
              placeholder={t.auth.password}
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="w-full px-5 py-4 pr-14 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
              required
            />
            <button
              type="button"
              onClick={() => setShowPw(v => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold text-lg transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60 btn-glow"
            style={{ background: 'linear-gradient(90deg, #5B5FF0 0%, #484CE8 100%)' }}
          >
            {loading ? t.common.loading : t.auth.loginCta}
            {!loading && <ArrowRight size={22} />}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm" style={{ color: '#5C5F7A' }}>
          <Link href="/register" className="hover:text-[#5B5FF0] transition-colors">
            {t.auth.noAccount} {t.auth.createAccount}
          </Link>
          <span style={{ color: '#C5C7D6' }}>|</span>
          <Link href="/forgot-password" className="hover:text-[#5B5FF0] transition-colors">
            {t.auth.forgotPassword}
          </Link>
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: '#8A8DA8' }}>{t.footer.copyright}</p>
      </div>
    </div>
  )
}
