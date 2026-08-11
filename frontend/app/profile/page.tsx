'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, Mail, Calendar, LogOut, Settings } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ProfileCopy = {
  backHome: string
  accountInfo: string
  name: string
  role: string
  admin: string
  user: string
  settings: string
  logout: string
}

const zhTW: ProfileCopy = {
  backHome: '← 返回首頁',
  accountInfo: '帳號資訊',
  name: '姓名',
  role: '角色',
  admin: '管理員',
  user: '一般用戶',
  settings: '帳號設定',
  logout: '登出',
}

const zhCN: ProfileCopy = {
  backHome: '← 返回首页',
  accountInfo: '账号信息',
  name: '姓名',
  role: '角色',
  admin: '管理员',
  user: '一般用户',
  settings: '账号设置',
  logout: '登出',
}

const en: ProfileCopy = {
  backHome: '← Back to home',
  accountInfo: 'Account info',
  name: 'Name',
  role: 'Role',
  admin: 'Admin',
  user: 'Member',
  settings: 'Account settings',
  logout: 'Log out',
}

const copy: Partial<Record<Locale, ProfileCopy>> & { 'zh-TW': ProfileCopy; en: ProfileCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko: en,
  ja: en,
  vi: en,
  es: en,
  pt: en,
  de: en,
  fr: en,
}

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user, router])

  if (!user) return null

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16"
      style={{ background: 'linear-gradient(160deg, #07071A 0%, #0C0C28 100%)' }}>
      <div className="max-w-lg mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          {c.backHome}
        </Link>

        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mb-4"
            style={{ background: 'linear-gradient(135deg, #5B5FF0, #484CE8)', color: '#fff' }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-black text-white">{user.name}</h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{user.email}</p>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {c.accountInfo}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User size={16} style={{ color: '#9B9EF8' }} />
              <div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.name}</div>
                <div className="text-sm text-white">{user.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} style={{ color: '#9B9EF8' }} />
              <div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Email</div>
                <div className="text-sm text-white">{user.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={16} style={{ color: '#9B9EF8' }} />
              <div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.role}</div>
                <div className="text-sm text-white">{user.isAdmin ? c.admin : c.user}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/settings"
            className="flex items-center gap-3 px-6 py-4 transition-colors hover:bg-white/5"
            style={{ color: 'rgba(255,255,255,0.75)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <Settings size={16} />
            <span className="text-sm">{c.settings}</span>
          </Link>
          <button onClick={() => { logout(); router.push('/') }}
            className="w-full flex items-center gap-3 px-6 py-4 transition-colors hover:bg-white/5"
            style={{ color: '#F87171' }}>
            <LogOut size={16} />
            <span className="text-sm">{c.logout}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
