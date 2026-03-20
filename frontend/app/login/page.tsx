'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
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
      if (!res.ok) { setError(data.error || '登入失敗'); return }
      login(data.token, data.user)
      router.push('/')
    } catch {
      setError('網路錯誤，請重試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #2c3e50 0%, #3d5166 40%, #2c4a6e 70%, #1a3a5c 100%)' }}>

      <div className="mb-10 flex items-center gap-2">
        <span className="text-4xl font-black tracking-tight text-white">
          SH
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white mx-0.5 relative" style={{ verticalAlign: 'middle' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <circle cx="12" cy="10" r="4" fill="#3b82f6" />
              <path d="M8 10 Q12 16 16 10" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            </svg>
          </span>
          PLINE
        </span>
      </div>

      <div className="w-full max-w-md">
        {error && (
          <div className="mb-3 px-4 py-3 rounded-lg bg-red-500/20 text-red-200 text-sm text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Email 或帳號" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
            required />
          <input type="password" placeholder="密碼" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full px-5 py-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
            required />

          <button type="submit" disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-white font-bold text-lg transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
            style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)' }}>
            {loading ? '處理中...' : '登入'}
            {!loading && <ArrowRight size={22} />}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4 text-white/80 text-sm">
          <Link href="/register" className="hover:text-white transition-colors">免費註冊</Link>
          <span className="text-white/30">|</span>
          <Link href="/forgot-password" className="hover:text-white transition-colors">忘記密碼</Link>
        </div>

        <p className="mt-6 text-center text-white/40 text-xs">© 2013–2026 ARVIX Limited</p>
      </div>
    </div>
  )
}
