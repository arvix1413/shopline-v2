'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #2c3e50 0%, #3d5166 40%, #2c4a6e 70%, #1a3a5c 100%)' }}>

      {/* Logo */}
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
        {sent ? (
          <div className="text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-white text-xl font-bold mb-2">重設密碼郵件已寄出</h2>
            <p className="text-white/70 text-sm mb-8">請檢查你的信箱，依照郵件指示重設密碼。</p>
            <Link href="/login" className="text-white/80 hover:text-white text-sm underline">返回登入</Link>
          </div>
        ) : (
          <>
            <p className="text-white/70 text-sm text-center mb-6">輸入你的 Email，我們將寄送重設密碼連結。</p>
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
                className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-white font-bold text-lg transition-all hover:brightness-110 active:scale-[0.99]"
                style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)' }}
              >
                發送重設連結
                <ArrowRight size={22} />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-white/80 text-sm">
              <Link href="/login" className="hover:text-white transition-colors">返回登入</Link>
              <span className="text-white/30">|</span>
              <Link href="/register" className="hover:text-white transition-colors">免費註冊</Link>
            </div>
          </>
        )}

        <p className="mt-8 text-center text-white/40 text-xs">
          © 2013–2026 ARVIX Limited
        </p>
      </div>
    </div>
  )
}
