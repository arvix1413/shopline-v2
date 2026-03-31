'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff, CheckCircle } from 'lucide-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

function ResetForm() {
  const router = useRouter()
  const params = useSearchParams()
  const token = params.get('token') || ''

  const [form, setForm] = useState({ password: '', confirm: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) setError('連結無效或已過期')
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirm) { setError('兩次密碼不一致'); return }
    if (form.password.length < 6) { setError('密碼至少 6 個字元'); return }
    setError(''); setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || '重置失敗'); return }
      setDone(true)
      setTimeout(() => router.push('/login'), 3000)
    } catch {
      setError('網路錯誤，請重試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      {done ? (
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-400" />
          </div>
          <h2 className="text-white text-xl font-bold mb-2">密碼已重置</h2>
          <p className="text-white/60 text-sm">3 秒後自動跳轉到登入頁...</p>
        </div>
      ) : (
        <>
          <h2 className="text-white text-xl font-bold mb-1 text-center">設定新密碼</h2>
          <p className="text-white/50 text-sm text-center mb-6">請輸入你的新密碼</p>

          {error && (
            <div className="mb-3 px-4 py-3 rounded-lg bg-red-500/20 text-red-200 text-sm text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="新密碼（至少 6 個字元）"
                value={form.password}
                onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                className="w-full px-5 py-4 pr-14 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
                required
              />
              <button type="button" onClick={() => setShowPw(v => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" tabIndex={-1}>
                {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <input
              type={showPw ? 'text' : 'password'}
              placeholder="確認新密碼"
              value={form.confirm}
              onChange={e => setForm(p => ({ ...p, confirm: e.target.value }))}
              className="w-full px-5 py-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
              required
            />
            <button
              type="submit"
              disabled={loading || !token}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-white font-bold text-lg transition-all hover:brightness-110 disabled:opacity-60"
              style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)' }}
            >
              {loading ? '處理中...' : '確認重置'}
              {!loading && <ArrowRight size={22} />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-white/60 hover:text-white text-sm">返回登入</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #2c3e50 0%, #3d5166 40%, #2c4a6e 70%, #1a3a5c 100%)' }}>
      <div className="mb-10">
        <span className="text-4xl font-black tracking-tight text-white">
          SH<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white mx-0.5 relative" style={{ verticalAlign: 'middle' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <circle cx="12" cy="10" r="4" fill="#3b82f6" />
              <path d="M8 10 Q12 16 16 10" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            </svg>
          </span>PLINE
        </span>
      </div>
      <Suspense fallback={<div className="text-white/40">載入中...</div>}>
        <ResetForm />
      </Suspense>
    </div>
  )
}
