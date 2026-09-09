'use client'

import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'
import { TEMPLATES, TEMPLATE_TAG_LABELS, type TemplateTag } from '../../lib/storeLayout'
import ThemeMockPreview from '../components/ThemeMockPreview'

type TemplatesCopy = {
  title: string
  subtitle: string
  cta: string
  preview: string
  tryFree: string
  useTheme: string
  ctaTitle: string
  ctaButton: string
  tags: Record<TemplateTag, string>
}

const zhTW: TemplatesCopy = {
  title: '多款風格版型主題設計',
  subtitle: '多樣化的設計樣式供你隨時套用，為你的品牌打造最合適的風格店面',
  cta: '免費試用版型',
  preview: '預覽版型',
  tryFree: '免費試用',
  useTheme: '使用此主題',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaButton: '免費試用 14 天',
  tags: TEMPLATE_TAG_LABELS,
}

const zhCN: TemplatesCopy = {
  title: '多款风格版型主题设计',
  subtitle: '多样化的设计样式供你随时套用，为你的品牌打造最合适的风格店面',
  cta: '免费试用版型',
  preview: '预览版型',
  tryFree: '免费试用',
  useTheme: '使用此主题',
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
  useTheme: 'Use theme',
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
      <section className="py-20 md:py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a
            href="/register"
            className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#5B5FF0' }}
          >
            {c.cta}
          </a>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {TEMPLATES.map((t) => (
              <div
                key={t.id}
                className="group"
                onMouseEnter={() => setHovered(t.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    aspectRatio: '4 / 5',
                    boxShadow: '0 12px 40px rgba(15, 23, 42, 0.12)',
                  }}
                >
                  <ThemeMockPreview
                    template={t}
                    storeName="ARVIX 示範店"
                    className="absolute inset-0"
                  />
                  {hovered === t.id && (
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-2"
                      style={{ backgroundColor: 'rgba(0,20,45,0.42)' }}
                    >
                      <a
                        href={`/login?next=${encodeURIComponent(`/my-store/design?template=${t.id}`)}`}
                        className="text-white font-bold px-4 py-2 rounded-full text-sm hover:opacity-90"
                        style={{ backgroundColor: '#5B5FF0' }}
                      >
                        {c.useTheme}
                      </a>
                      <a
                        href="/register"
                        className="text-white font-bold px-4 py-2 rounded-full text-sm hover:opacity-90"
                        style={{ backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.5)' }}
                      >
                        {c.tryFree}
                      </a>
                    </div>
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="font-bold text-base mb-2" style={{ color: '#00142D' }}>{t.name}</h3>
                  {t.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}
                        >
                          {c.tags[tag]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-8">{c.ctaTitle}</h2>
          <a
            href="/register"
            className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            style={{ color: '#5B5FF0' }}
          >
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
