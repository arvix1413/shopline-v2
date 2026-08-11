'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ShoplyticsCopy = {
  title: string
  subtitle: string
  cta: string
  sec1Title: string
  sec1Desc: string
  sec1Items: string[]
  sec2Title: string
  sec2Desc: string
  sec2Items: string[]
  sec3Title: string
  sec3Desc: string
  sec3Items: string[]
  sec4Title: string
  sec4Desc: string
  ctaTitle: string
}

const zhTW: ShoplyticsCopy = {
  title: 'Shoplytics 零售數據分析\n善用數據驅動決策，讓你掌握商機',
  subtitle: '即時銷售數據分析、AI 洞察策略、多通路整合數據，讓品牌經營更有方向。',
  cta: '立即免費試用',
  sec1Title: 'Shoplytics 數據分析中心',
  sec1Desc: '一站查看從數據到決策，讓品牌經營更有方向。',
  sec1Items: ['即時銷售數據分析', 'AI 洞察策略', 'AI 數據自動應用', '即時營運儀表'],
  sec2Title: 'Shoplytics x AI\n驅動智慧洞察',
  sec2Desc: 'AI 驅動的智慧洞察，讓你快速掌握市場趨勢，做出更精準的決策。',
  sec2Items: ['顧客行為分析', '多維度行銷分析'],
  sec3Title: '一站查看\n從數據到決策，讓品牌經營更有方向',
  sec3Desc: '多通路整合數據，讓你在一個平台上掌握所有銷售渠道的表現。',
  sec3Items: ['多通路整合數據', '流量組成', '銷售數據', '轉換分析'],
  sec4Title: '即時掌握\n每一個關鍵數據',
  sec4Desc: '即時營運儀表，讓你隨時掌握品牌的最新狀況，快速應對市場變化。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: ShoplyticsCopy = {
  title: 'Shoplytics 零售数据分析\n善用数据驱动决策，让你掌握商机',
  subtitle: '即时销售数据分析、AI 洞察策略、多渠道整合数据，让品牌经营更有方向。',
  cta: '立即免费试用',
  sec1Title: 'Shoplytics 数据分析中心',
  sec1Desc: '一站查看从数据到决策，让品牌经营更有方向。',
  sec1Items: ['即时销售数据分析', 'AI 洞察策略', 'AI 数据自动应用', '即时运营仪表'],
  sec2Title: 'Shoplytics x AI\n驱动智慧洞察',
  sec2Desc: 'AI 驱动的智慧洞察，让你快速掌握市场趋势，做出更精准的决策。',
  sec2Items: ['顾客行为分析', '多维度营销分析'],
  sec3Title: '一站查看\n从数据到决策，让品牌经营更有方向',
  sec3Desc: '多渠道整合数据，让你在一个平台上掌握所有销售渠道的表现。',
  sec3Items: ['多渠道整合数据', '流量组成', '销售数据', '转化分析'],
  sec4Title: '即时掌握\n每一个关键数据',
  sec4Desc: '即时运营仪表，让你随时掌握品牌的最新状况，快速应对市场变化。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: ShoplyticsCopy = {
  title: 'Shoplytics retail analytics\nDecide with data and catch every opportunity',
  subtitle: 'Live sales analytics, AI insights, and omnichannel data to steer the brand.',
  cta: 'Start free trial',
  sec1Title: 'Shoplytics analytics center',
  sec1Desc: 'From data to decisions in one place — clearer brand direction.',
  sec1Items: ['Live sales analytics', 'AI strategy insights', 'Automated AI data actions', 'Live ops dashboard'],
  sec2Title: 'Shoplytics × AI\nSmarter insights',
  sec2Desc: 'AI-driven insights so you spot trends and decide with precision.',
  sec2Items: ['Customer behavior analysis', 'Multi-dimensional marketing analysis'],
  sec3Title: 'One view\nFrom data to decisions',
  sec3Desc: 'Omnichannel data so every sales channel’s performance is clear.',
  sec3Items: ['Omnichannel data', 'Traffic mix', 'Sales metrics', 'Conversion analysis'],
  sec4Title: 'Live pulse\nEvery critical metric',
  sec4Desc: 'A live ops dashboard keeps you ready for market shifts.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, ShoplyticsCopy>> & { 'zh-TW': ShoplyticsCopy; en: ShoplyticsCopy } = {
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

export default function ShoplyticsPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(29, 15, 125) 0%, rgb(33, 67, 191) 50%, rgb(110, 150, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white whitespace-pre-line">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Shoplytics" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.sec1Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec1Desc}</p>
            <div className="space-y-4">
              {c.sec1Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="Shoplytics center" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec2Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec2Desc}</p>
            <div className="space-y-4">
              {c.sec2Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80" alt="Shoplytics AI" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec3Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec3Desc}</p>
            <div className="space-y-4">
              {c.sec3Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Omnichannel data" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec4Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec4Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Live dashboard" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
