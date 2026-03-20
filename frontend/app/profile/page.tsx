'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, Mail, Calendar, LogOut, Settings } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user, router])

  if (!user) return null

  return (
    <div className="min-h-screen px-4 py-16"
      style={{ background: 'linear-gradient(160deg, #08081A 0%, #0E0E2C 100%)' }}>
      <div className="max-w-lg mx-auto">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          ← 返回首頁
        </Link>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mb-4"
            style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', color: '#fff' }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-black text-white">{user.name}</h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{user.email}</p>
        </div>

        {/* Info card */}
        <div className="rounded-2xl p-6 mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            帳號資訊
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User size={16} style={{ color: '#60A5FA' }} />
              <div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>姓名</div>
                <div className="text-sm text-white">{user.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} style={{ color: '#60A5FA' }} />
              <div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Email</div>
                <div className="text-sm text-white">{user.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={16} style={{ color: '#60A5FA' }} />
              <div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>角色</div>
                <div className="text-sm text-white">{user.isAdmin ? '管理員' : '一般用戶'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/settings"
            className="flex items-center gap-3 px-6 py-4 transition-colors hover:bg-white/5"
            style={{ color: 'rgba(255,255,255,0.75)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <Settings size={16} />
            <span className="text-sm">帳號設定</span>
          </Link>
          <button onClick={() => { logout(); router.push('/') }}
            className="w-full flex items-center gap-3 px-6 py-4 transition-colors hover:bg-white/5"
            style={{ color: '#F87171' }}>
            <LogOut size={16} />
            <span className="text-sm">登出</span>
          </button>
        </div>
      </div>
    </div>
  )
}
