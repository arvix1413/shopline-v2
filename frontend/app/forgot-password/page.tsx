'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function ForgotPasswordPage() {
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
      if (!res.ok) { setError(data.error || '發送失敗'); return }
      setSent(true)
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
          SH<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white mx-0.5 relative" style={{ verticalAlign: 'middle' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <circle cx="12" cy="10" r="4" fill="#3b82f6" />
              <path d="M8 10 Q12 16 16 10" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            </svg>
          </span>PLINE
        </span>
      </div>

      <div className="w-full max-w-md">
        {sent ? (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-green-400" />
            </div>
            <h2 className="text-white text-xl font-bold mb-2">郵件已發送</h2>
            <p className="text-white/60 text-sm mb-6">
              重置連結已發送至 <span className="text-white font-medium">{email}</span>，請檢查收件匣（含垃圾郵件）。
            </p>
            <Link href="/login" className="text-blue-400 hover:text-blue-300 text-sm flex items-center justify-center gap-1">
              <ArrowLeft size={14} /> 返回登入
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-white text-xl font-bold mb-1 text-center">忘記密碼</h2>
            <p className="text-white/50 text-sm text-center mb-6">輸入你的 Email，我們會發送重置連結</p>

            {error && (
              <div className="mb-3 px-4 py-3 rounded-lg bg-red-500/20 text-red-200 text-sm text-center">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-white font-bold text-lg transition-all hover:brightness-110 disabled:opacity-60"
                style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)' }}
              >
                {loading ? '發送中...' : '發送重置連結'}
                {!loading && <ArrowRight size={22} />}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/login" className="text-white/60 hover:text-white text-sm flex items-center justify-center gap-1">
                <ArrowLeft size={14} /> 返回登入
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
