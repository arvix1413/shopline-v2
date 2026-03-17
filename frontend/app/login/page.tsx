'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to backend
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

      {/* Form card */}
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
            required
          />
          <input
            type="password"
            placeholder="密碼"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full px-5 py-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-blue-400 border-0"
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-white font-bold text-lg transition-all hover:brightness-110 active:scale-[0.99]"
            style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)' }}
          >
            登入
            <ArrowRight size={22} />
          </button>
        </form>

        {/* Bottom links */}
        <div className="mt-6 flex items-center justify-center gap-4 text-white/80 text-sm">
          <Link href="/register" className="hover:text-white transition-colors">免費註冊</Link>
          <span className="text-white/30">|</span>
          <Link href="/forgot-password" className="hover:text-white transition-colors">忘記密碼</Link>
        </div>

        <p className="mt-6 text-center text-white/40 text-xs">
          © 2013–2026 SHOPLINE Limited
        </p>
      </div>
    </div>
  )
}
