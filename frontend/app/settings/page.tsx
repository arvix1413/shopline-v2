'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Lock, Bell, Globe, Shield } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

export default function SettingsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user, router])

  if (!user) return null

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen px-4 py-16"
      style={{ background: 'linear-gradient(160deg, #07071A 0%, #0C0C28 100%)' }}>
      <div className="max-w-lg mx-auto">
        <Link href="/profile" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          ← 返回個人資料
        </Link>

        <h1 className="text-2xl font-black text-white mb-8">帳號設定</h1>

        {saved && (
          <div className="mb-4 px-4 py-3 rounded-lg text-sm text-center"
            style={{ background: 'rgba(34,197,94,0.15)', color: '#86EFAC', border: '1px solid rgba(34,197,94,0.2)' }}>
            設定已儲存
          </div>
        )}

        {/* Change password */}
        <div className="rounded-2xl p-6 mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Lock size={16} style={{ color: '#9B9EF8' }} />
            <h2 className="text-sm font-bold text-white">變更密碼</h2>
          </div>
          <form onSubmit={handleSave} className="space-y-3">
            <input type="password" placeholder="目前密碼"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <input type="password" placeholder="新密碼"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <input type="password" placeholder="確認新密碼"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <button type="submit"
              className="px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(90deg, #5B5FF0, #484CE8)' }}>
              更新密碼
            </button>
          </form>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl p-6 mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Bell size={16} style={{ color: '#9B9EF8' }} />
            <h2 className="text-sm font-bold text-white">通知設定</h2>
          </div>
          <div className="space-y-3">
            {['電子郵件通知', '產品更新通知', '行銷資訊'].map((label) => (
              <label key={label} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</span>
                <div className="w-10 h-5 rounded-full relative transition-colors"
                  style={{ background: 'rgba(91,95,240,0.6)' }}>
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} style={{ color: '#9B9EF8' }} />
            <h2 className="text-sm font-bold text-white">安全性</h2>
          </div>
          <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
            帳號：{user.email}
          </p>
          <Link href="/forgot-password"
            className="text-sm transition-colors hover:text-white"
            style={{ color: '#9B9EF8' }}>
            忘記密碼？點此重設 →
          </Link>
        </div>
      </div>
    </div>
  )
}
