'use client'

import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

const trialSystems = [
  'https://tinywearhouse-frontend.pages.dev',
  'https://daf-shoes-frontend.pages.dev',
  'https://meierq-frontend.pages.dev',
  'https://molava-frontend.pages.dev',
  'https://zenlet-frontend.pages.dev',
]

type TagKey = 'themeColor' | 'footerColor' | 'fontColor' | 'font' | 'bgColor'

const templates: { name: string; src: string; tags: TagKey[]; system: number }[] = [
  { name: 'Dusk', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: ['themeColor', 'footerColor', 'fontColor'], system: 0 },
  { name: 'Philia', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: ['themeColor', 'font'], system: 1 },
  { name: 'Varm', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: ['themeColor', 'footerColor'], system: 2 },
  { name: 'Skya', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: ['themeColor', 'bgColor', 'fontColor'], system: 3 },
  { name: 'Sangria', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: ['themeColor', 'font'], system: 4 },
  { name: 'Bianco', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: ['themeColor', 'font'], system: 0 },
  { name: 'Doris Bien', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: ['themeColor'], system: 1 },
  { name: 'Kingsman', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: ['themeColor', 'font'], system: 2 },
  { name: 'Ultra Chic', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: ['themeColor', 'bgColor'], system: 3 },
  { name: 'Basic', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: [], system: 4 },
  { name: 'Nightfall', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: [], system: 0 },
  { name: 'Paola', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: [], system: 1 },
  { name: 'Ell', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: [], system: 2 },
  { name: 'Fresh Urban', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: [], system: 3 },
  { name: 'Hype', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: [], system: 4 },
  { name: 'Studio', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: [], system: 0 },
  { name: 'Gentleman', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: [], system: 1 },
  { name: 'Lace', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: [], system: 2 },
  { name: 'Mint', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: [], system: 3 },
  { name: 'Lux Moss', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: [], system: 4 },
  { name: 'Simple', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: [], system: 0 },
  { name: 'Simple Patterns', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: [], system: 1 },
  { name: 'Boxed Patterns', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: [], system: 2 },
  { name: 'Rebel', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: [], system: 3 },
  { name: 'Swanky', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: [], system: 4 },
  { name: 'Slate', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80', tags: [], system: 0 },
  { name: 'Chic', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80', tags: [], system: 1 },
  { name: 'King', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80', tags: [], system: 2 },
  { name: 'Streetify', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', tags: [], system: 3 },
]

type TemplatesCopy = {
  title: string
  subtitle: string
  cta: string
  preview: string
  tryFree: string
  ctaTitle: string
  ctaButton: string
  tags: Record<TagKey, string>
}

const zhTW: TemplatesCopy = {
  title: '多款風格版型主題設計',
  subtitle: '多樣化的設計樣式供你隨時套用，為你的品牌打造最合適的風格店面',
  cta: '免費試用版型',
  preview: '預覽版型',
  tryFree: '免費試用',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaButton: '免費試用 14 天',
  tags: {
    themeColor: '自訂主題顏色',
    footerColor: '自訂頁尾顏色',
    fontColor: '自訂主題字型顏色',
    font: '自訂主題字型',
    bgColor: '自訂背景顏色',
  },
}

const zhCN: TemplatesCopy = {
  title: '多款风格版型主题设计',
  subtitle: '多样化的设计样式供你随时套用，为你的品牌打造最合适的风格店面',
  cta: '免费试用版型',
  preview: '预览版型',
  tryFree: '免费试用',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaButton: '免费试用 14 天',
  tags: {
    themeColor: '自定义主题颜色',
    footerColor: '自定义页脚颜色',
    fontColor: '自定义主题字体颜色',
    font: '自定义主题字体',
    bgColor: '自定义背景颜色',
  },
}

const en: TemplatesCopy = {
  title: 'Themes for every brand style',
  subtitle: 'Apply polished layouts anytime and shape a storefront that fits your brand',
  cta: 'Try themes free',
  preview: 'Preview',
  tryFree: 'Free trial',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaButton: 'Free 14-day trial',
  tags: {
    themeColor: 'Custom theme color',
    footerColor: 'Custom footer color',
    fontColor: 'Custom font color',
    font: 'Custom fonts',
    bgColor: 'Custom background',
  },
}

const copy: Partial<Record<Locale, TemplatesCopy>> & { 'zh-TW': TemplatesCopy; en: TemplatesCopy } = {
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

export default function TemplatesPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <main>
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {templates.map((t) => {
              const previewUrl = trialSystems[t.system]
              return (
                <div key={t.name}
                  className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                  onMouseEnter={() => setHovered(t.name)}
                  onMouseLeave={() => setHovered(null)}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                    <img
                      src={t.src}
                      alt={`ARVIX theme ${t.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {hovered === t.name && (
                      <div className="absolute inset-0 flex items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <a href={previewUrl} target="_blank" rel="noopener noreferrer"
                          className="text-white font-bold px-4 py-2 rounded-full text-sm hover:opacity-90"
                          style={{ backgroundColor: '#5B5FF0' }}>
                          {c.preview}
                        </a>
                        <a href="/trial-redirect"
                          className="text-white font-bold px-4 py-2 rounded-full text-sm hover:opacity-90"
                          style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.5)' }}>
                          {c.tryFree}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#00142D' }}>{t.name}</h3>
                    {t.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {t.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>{c.tags[tag]}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-8">{c.ctaTitle}</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
