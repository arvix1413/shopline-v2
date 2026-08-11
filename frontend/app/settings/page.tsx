'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Lock, Bell, Shield } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SettingsCopy = {
  backProfile: string
  title: string
  saved: string
  changePassword: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
  updatePassword: string
  notifications: string
  notifyEmail: string
  notifyProduct: string
  notifyMarketing: string
  security: string
  account: string
  forgotPassword: string
}

const zhTW: SettingsCopy = {
  backProfile: '← 返回個人資料',
  title: '帳號設定',
  saved: '設定已儲存',
  changePassword: '變更密碼',
  currentPassword: '目前密碼',
  newPassword: '新密碼',
  confirmPassword: '確認新密碼',
  updatePassword: '更新密碼',
  notifications: '通知設定',
  notifyEmail: '電子郵件通知',
  notifyProduct: '產品更新通知',
  notifyMarketing: '行銷資訊',
  security: '安全性',
  account: '帳號：',
  forgotPassword: '忘記密碼？點此重設 →',
}

const zhCN: SettingsCopy = {
  backProfile: '← 返回个人资料',
  title: '账号设置',
  saved: '设置已保存',
  changePassword: '变更密码',
  currentPassword: '当前密码',
  newPassword: '新密码',
  confirmPassword: '确认新密码',
  updatePassword: '更新密码',
  notifications: '通知设置',
  notifyEmail: '电子邮件通知',
  notifyProduct: '产品更新通知',
  notifyMarketing: '营销信息',
  security: '安全性',
  account: '账号：',
  forgotPassword: '忘记密码？点此重设 →',
}

const en: SettingsCopy = {
  backProfile: '← Back to profile',
  title: 'Account settings',
  saved: 'Settings saved',
  changePassword: 'Change password',
  currentPassword: 'Current password',
  newPassword: 'New password',
  confirmPassword: 'Confirm new password',
  updatePassword: 'Update password',
  notifications: 'Notifications',
  notifyEmail: 'Email notifications',
  notifyProduct: 'Product updates',
  notifyMarketing: 'Marketing messages',
  security: 'Security',
  account: 'Account: ',
  forgotPassword: 'Forgot password? Reset here →',
}

const copy: Partial<Record<Locale, SettingsCopy>> & { 'zh-TW': SettingsCopy; en: SettingsCopy } = {
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

export default function SettingsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
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

  const notifyLabels = [c.notifyEmail, c.notifyProduct, c.notifyMarketing]

  return (
    <div className="min-h-screen px-4 sm:px-6 py-16"
      style={{ background: 'linear-gradient(160deg, #07071A 0%, #0C0C28 100%)' }}>
      <div className="max-w-lg mx-auto">
        <Link href="/profile" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          {c.backProfile}
        </Link>

        <h1 className="text-2xl font-black text-white mb-8">{c.title}</h1>

        {saved && (
          <div className="mb-4 px-4 py-3 rounded-lg text-sm text-center"
            style={{ background: 'rgba(34,197,94,0.15)', color: '#86EFAC', border: '1px solid rgba(34,197,94,0.2)' }}>
            {c.saved}
          </div>
        )}

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Lock size={16} style={{ color: '#9B9EF8' }} />
            <h2 className="text-sm font-bold text-white">{c.changePassword}</h2>
          </div>
          <form onSubmit={handleSave} className="space-y-3">
            <input type="password" placeholder={c.currentPassword}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <input type="password" placeholder={c.newPassword}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <input type="password" placeholder={c.confirmPassword}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            <button type="submit"
              className="px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(90deg, #5B5FF0, #484CE8)' }}>
              {c.updatePassword}
            </button>
          </form>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Bell size={16} style={{ color: '#9B9EF8' }} />
            <h2 className="text-sm font-bold text-white">{c.notifications}</h2>
          </div>
          <div className="space-y-3">
            {notifyLabels.map((label) => (
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

        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} style={{ color: '#9B9EF8' }} />
            <h2 className="text-sm font-bold text-white">{c.security}</h2>
          </div>
          <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {c.account}{user.email}
          </p>
          <Link href="/forgot-password"
            className="text-sm transition-colors hover:text-white"
            style={{ color: '#9B9EF8' }}>
            {c.forgotPassword}
          </Link>
        </div>
      </div>
    </div>
  )
}
