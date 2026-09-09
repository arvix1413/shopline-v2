'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'

const copy = {
  'zh-TW': { title: '網站地圖', body: 'ARVIX 網站完整頁面索引。' },
  'zh-CN': { title: '网站地图', body: 'ARVIX 网站完整页面索引。' },
  en: { title: 'Sitemap', body: 'Full index of ARVIX website pages.' },
  ko: { title: '사이트맵', body: 'ARVIX 웹사이트 전체 페이지 색인.' },
  ja: { title: 'サイトマップ', body: 'ARVIX ウェブサイトの全ページ索引。' },
  vi: { title: 'Sơ đồ trang', body: 'Chỉ mục đầy đủ các trang website ARVIX.' },
  es: { title: 'Mapa del sitio', body: 'Índice completo de páginas del sitio ARVIX.' },
  pt: { title: 'Mapa do site', body: 'Índice completo das páginas do site ARVIX.' },
  de: { title: 'Sitemap', body: 'Vollständiger Index der ARVIX-Website-Seiten.' },
  fr: { title: 'Plan du site', body: 'Index complet des pages du site ARVIX.' },
}

export default function SitemapPage() {
  const { locale } = useI18n()
  const t = pickCopy(locale, copy)
  return (
    <main className="min-h-screen pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: '#00142D' }}>{t.title}</h1>
      <p style={{ color: '#354253' }}>{t.body}</p>
    </main>
  )
}
