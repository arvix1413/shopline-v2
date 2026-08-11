'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'

const copy = {
  'zh-TW': { title: '會員條款', body: 'ARVIX 會員服務條款。' },
  'zh-CN': { title: '会员条款', body: 'ARVIX 会员服务条款。' },
  en: { title: 'Terms of Service', body: 'ARVIX membership terms of service.' },
}
const aliased = { ...copy, ko: copy.en, ja: copy.en, vi: copy.en, es: copy.en, pt: copy.en, de: copy.en, fr: copy.en }

export default function TermsPage() {
  const { locale } = useI18n()
  const t = pickCopy(locale, aliased)
  return (
    <main className="min-h-screen pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: '#00142D' }}>{t.title}</h1>
      <p style={{ color: '#354253' }}>{t.body}</p>
    </main>
  )
}
