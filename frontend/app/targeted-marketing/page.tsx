'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type TargetedCopy = {
  title: string
  subtitle: string
  cta: string
  whichTitle: string
  whichDesc: string
  models: { title: string; sub: string }[]
  tags: string[]
  deepTitle: string
  deepDesc: string
  seamlessTitle: string
  seamlessDesc: string
  findTitle: string
  findDesc: string
  ctaTitle: string
}

const zhTW: TargetedCopy = {
  title: '精準鎖定、放大轉單\nARVIX 分眾行銷中心',
  subtitle: '獨家 RFIM 價值模型，9 大智慧顧客分群，讓你精準觸達對的人，有效提升行銷 ROI。',
  cta: '立即免費試用',
  whichTitle: '哪個更重要？\n開發新客 & 經營舊客',
  whichDesc: '你也遇到這些問題？如何找到對的人？ARVIX 分眾行銷中心讓你一勞永逸！',
  models: [
    { title: 'RFIM 價值模型', sub: '9 大智慧顧客分群獨家數據演算' },
    { title: '內建分群', sub: '6 大分類、55+ 篩選條件' },
  ],
  tags: ['指標性分類篩選', '細緻的分眾選項', '預先掌握觸及人數', '自動更新分群名單獨家支援', '靈活運用客群'],
  deepTitle: '比你想的更深，比你想的更簡單\n獨家演算！ 數據賦能的 RFIM 價值模型',
  deepDesc: '運用 RFIM 價值模型分群有效喚回顧客，讓每一分行銷預算都花在刀口上。',
  seamlessTitle: '溝通零斷點\n打造無痛分眾行銷',
  seamlessDesc: '分眾行銷搭配多元優惠衝高單品銷售成長，讓每個顧客都感受到專屬服務。',
  findTitle: '如何找到對的人？\nARVIX 分眾行銷中心讓你一勞永逸！',
  findDesc: '6 大分類、55+ 篩選條件，精準定位目標客群，提升行銷效益。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: TargetedCopy = {
  title: '精准锁定、放大转单\nARVIX 分众营销中心',
  subtitle: '独家 RFIM 价值模型，9 大智慧顾客分群，让你精准触达对的人，有效提升营销 ROI。',
  cta: '立即免费试用',
  whichTitle: '哪个更重要？\n开发新客 & 经营旧客',
  whichDesc: '你也遇到这些问题？如何找到对的人？ARVIX 分众营销中心让你一劳永逸！',
  models: [
    { title: 'RFIM 价值模型', sub: '9 大智慧顾客分群独家数据演算' },
    { title: '内建分群', sub: '6 大分类、55+ 筛选条件' },
  ],
  tags: ['指标性分类筛选', '细致的分众选项', '预先掌握触及人数', '自动更新分群名单独家支持', '灵活运用客群'],
  deepTitle: '比你想的更深，比你想的更简单\n独家演算！ 数据赋能的 RFIM 价值模型',
  deepDesc: '运用 RFIM 价值模型分群有效唤回顾客，让每一分营销预算都花在刀刃上。',
  seamlessTitle: '沟通零断点\n打造无痛分众营销',
  seamlessDesc: '分众营销搭配多元优惠冲高单品销售成长，让每个顾客都感受到专属服务。',
  findTitle: '如何找到对的人？\nARVIX 分众营销中心让你一劳永逸！',
  findDesc: '6 大分类、55+ 筛选条件，精准定位目标客群，提升营销效益。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: TargetedCopy = {
  title: 'Target precisely. Convert more.\nARVIX segmentation center',
  subtitle: 'Exclusive RFIM value model with 9 smart segments — reach the right people and lift marketing ROI.',
  cta: 'Start free trial',
  whichTitle: 'What matters more?\nNew customers & retaining old ones',
  whichDesc: 'Struggling to find the right audience? ARVIX segmentation makes it simple.',
  models: [
    { title: 'RFIM value model', sub: '9 smart segments powered by exclusive scoring' },
    { title: 'Built-in segments', sub: '6 categories and 55+ filters' },
  ],
  tags: ['Metric-based filters', 'Fine-grained segments', 'Preview reach before send', 'Auto-updating audience lists', 'Flexible audience use'],
  deepTitle: 'Deeper than you expect, simpler than you think\nExclusive RFIM scoring',
  deepDesc: 'Use RFIM segments to win customers back and spend every marketing dollar wisely.',
  seamlessTitle: 'No communication gaps\nFrictionless segmented marketing',
  seamlessDesc: 'Pair segments with offers to grow SKU sales and make every shopper feel recognized.',
  findTitle: 'How do you find the right people?\nARVIX segmentation has you covered',
  findDesc: '6 categories and 55+ filters to lock onto target audiences and improve ROI.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, TargetedCopy>> & { 'zh-TW': TargetedCopy; en: TargetedCopy } = {
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

export default function TargetedMarketingPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(251, 225, 255) 0%, rgb(169, 181, 255) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="ARVIX targeted marketing" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.whichTitle}</h2>
            <p className="mb-4" style={{ color: '#687280' }}>{c.whichDesc}</p>
            <div className="space-y-3 mb-6">
              {c.models.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-bold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.tags.map(tag => (
                <div key={tag} className="text-xs px-3 py-2 rounded-lg font-medium" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>{tag}</div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="RFIM model" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.deepTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.deepDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="RFIM data" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.seamlessTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.seamlessDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="Segmented messaging" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.findTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.findDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="Audience filters" width={600} height={450} className="w-full h-auto" unoptimized />
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
