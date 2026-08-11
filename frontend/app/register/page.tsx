'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { track, bindUser, getTrafficSource } from '../../lib/tracker'
import { slugifyBrand } from '../../lib/storeSlug'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

export default function RegisterPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '', phone: '', shopName: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const previewSlug = useMemo(() => {
    return slugifyBrand(form.shopName) || slugifyBrand(form.email.split('@')[0] || '') || 'your-brand'
  }, [form.shopName, form.email])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          phone: form.phone,
          shopName: form.shopName,
          slug: previewSlug !== 'your-brand' ? previewSlug : undefined,
          ...getTrafficSource(),
        }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || '註冊失敗'); return }
      login(data.token, data.user)
      track('sign_up_complete', { email: form.email, slug: data.store?.slug }, data.user.id)
      bindUser(data.user.id)
      const path = data.store?.slug ? `/s/shop?slug=${encodeURIComponent(data.store.slug)}` : '/'
      router.push(path)
    } catch {
      setError('網路錯誤，請重試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #F6F7FB 0%, #EEF0FF 45%, #FFFFFF 100%)' }}>

      <div className="mb-8">
        <Link href="/" className="font-brand text-4xl font-extrabold brand-text tracking-tight">ARVIX</Link>
      </div>

      <div className="w-full max-w-md">
        {error && (
          <div className="mb-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 text-sm text-center border border-red-100">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="email" placeholder="Email" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
            required />
          <input type="password" placeholder="密碼（至少 6 個字元）" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5"
            required />
          <input type="tel" placeholder="手機號碼" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5" />
          <input type="text" placeholder="商店名稱（建議用英文，會變成網址）" value={form.shopName}
            onChange={e => setForm({ ...form, shopName: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:ring-2 focus:ring-[#5B5FF0] border border-black/5" />

          <div className="rounded-xl px-4 py-3 text-sm" style={{ background: '#F0F1FE', color: '#3A3D55' }}>
            註冊後網址：
            <span className="font-semibold" style={{ color: '#5B5FF0' }}> arvixai.com/s/shop?slug={previewSlug}</span>
          </div>

          <button type="submit" disabled={loading}
            onClick={() => track('click_signup')}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold text-lg transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60 btn-glow"
            style={{ background: 'linear-gradient(90deg, #5B5FF0 0%, #484CE8 100%)' }}>
            {loading ? '建立商店中...' : '立即註冊開店'}
            {!loading && <ArrowRight size={22} />}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm" style={{ color: '#5C5F7A' }}>
          <Link href="/login" className="hover:text-[#5B5FF0] transition-colors">登入網店</Link>
          <span style={{ color: '#C5C7D6' }}>|</span>
          <Link href="/forgot-password" className="hover:text-[#5B5FF0] transition-colors">忘記密碼</Link>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed" style={{ color: '#8A8DA8' }}>
          當你註冊開店，即表示你已同意{' '}
          <a href="/about/privacy" className="underline">ARVIX隱私權政策</a>
          {' '}與{' '}
          <a href="/about/terms" className="underline">會員條款</a>。
        </p>
      </div>
    </div>
  )
}
