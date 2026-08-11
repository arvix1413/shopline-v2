'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'

const copy = {
  'zh-TW': { title: '網站地圖', body: 'ARVIX 網站完整頁面索引。' },
  'zh-CN': { title: '网站地图', body: 'ARVIX 网站完整页面索引。' },
  en: { title: 'Sitemap', body: 'Full index of ARVIX website pages.' },
}
const aliased = { ...copy, ko: copy.en, ja: copy.en, vi: copy.en, es: copy.en, pt: copy.en, de: copy.en, fr: copy.en }

export default function SitemapPage() {
  const { locale } = useI18n()
  const t = pickCopy(locale, aliased)
  return (
    <main className="min-h-screen pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: '#00142D' }}>{t.title}</h1>
      <p style={{ color: '#354253' }}>{t.body}</p>
    </main>
  )
}
