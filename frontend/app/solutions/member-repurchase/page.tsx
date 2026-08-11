'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type MemberRepurchaseCopy = {
  title: string
  subtitle: string
  cta: string
  advantagesTitle: string
  whyTitle: string
  whyStats: { stat: string; title: string }[]
  loopTitle: string
  steps: { step: string; title: string; img: string; alt: string }[]
  driveTitle: string
  driveItems: { title: string; desc: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: MemberRepurchaseCopy = {
  title: '會員回購解決方案\n4 步驟打造高回購閉環',
  subtitle: '在流量紅利消失的時代，ARVIX 提供 4 大核心策略，透過「會員分眾」、「行銷優惠」、「回購驅動」、「數據分析」為你打造高轉換的會員行銷閉環。',
  cta: '立即免費試用',
  advantagesTitle: '會員經營 4 大核心優勢',
  whyTitle: '品牌會員經營為什麼至關重要？',
  whyStats: [
    { stat: '5x', title: '熟客帶來轉換成果是新客的 5 倍' },
    { stat: '↑', title: '熟客的平均花費金額會高於新客' },
    { stat: '+利潤', title: '多留住 5% 熟客，有助利潤提升' },
  ],
  loopTitle: '如何打造「高循環」、「高精準」、「高效率」的會員經營閉環？',
  steps: [
    { step: 'STEP 01', title: '會員分眾：快速掌握顧客輪廓，精準制定行銷分群策略', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 獨家 RFIM 價值模型，提供 9 大智慧顧客分群' },
    { step: 'STEP 02', title: '行銷優惠：高達 205 種促購玩法，精準提升顧客回購率', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 提供多元的優惠設定' },
    { step: 'STEP 03', title: '回購驅動：多通路精準推播策略，不浪費每一次曝光', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 自動化推播系統整合多管道' },
    { step: 'STEP 04', title: '數據分析：55 種專業報表全面解析，精準掌握投資回報，最大化行銷價值', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'ARVIX Shoplytics 數據分析提供 55 種專業分析報表' },
  ],
  driveTitle: '驅動會員持續回購\n流量碎片化時代的致勝關鍵',
  driveItems: [
    { title: '有效提升會員經營效率', desc: '自動化行銷流程，節省人力成本，讓你專注在策略制定。' },
    { title: '建立高循環的行銷閉環', desc: '從獲客到留客，完整的會員旅程管理，持續提升顧客終身價值。' },
    { title: '持續優化行銷投資報酬', desc: '數據驅動決策，精準投放資源，最大化每一分行銷預算的效益。' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: MemberRepurchaseCopy = {
  title: '会员复购解决方案\n4 步骤打造高复购闭环',
  subtitle: '在流量红利消失的时代，ARVIX 提供 4 大核心策略，通过「会员分群」、「营销优惠」、「复购驱动」、「数据分析」为你打造高转化的会员营销闭环。',
  cta: '立即免费试用',
  advantagesTitle: '会员经营 4 大核心优势',
  whyTitle: '品牌会员经营为什么至关重要？',
  whyStats: [
    { stat: '5x', title: '熟客带来转化成果是新客的 5 倍' },
    { stat: '↑', title: '熟客的平均花费金额会高于新客' },
    { stat: '+利润', title: '多留住 5% 熟客，有助利润提升' },
  ],
  loopTitle: '如何打造「高循环」、「高精准」、「高效率」的会员经营闭环？',
  steps: [
    { step: 'STEP 01', title: '会员分群：快速掌握顾客轮廓，精准制定营销分群策略', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 独家 RFIM 价值模型，提供 9 大智慧顾客分群' },
    { step: 'STEP 02', title: '营销优惠：高达 205 种促购玩法，精准提升顾客复购率', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 提供多元的优惠设定' },
    { step: 'STEP 03', title: '复购驱动：多渠道精准推送策略，不浪费每一次曝光', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 自动化推送系统整合多管道' },
    { step: 'STEP 04', title: '数据分析：55 种专业报表全面解析，精准掌握投资回报，最大化营销价值', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'ARVIX Shoplytics 数据分析提供 55 种专业分析报表' },
  ],
  driveTitle: '驱动会员持续复购\n流量碎片化时代的致胜关键',
  driveItems: [
    { title: '有效提升会员经营效率', desc: '自动化营销流程，节省人力成本，让你专注在策略制定。' },
    { title: '建立高循环的营销闭环', desc: '从获客到留客，完整的会员旅程管理，持续提升顾客终身价值。' },
    { title: '持续优化营销投资回报', desc: '数据驱动决策，精准投放资源，最大化每一分营销预算的效益。' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: MemberRepurchaseCopy = {
  title: 'Member repurchase solution\n4 steps to a high-repeat loop',
  subtitle: 'As traffic bonuses fade, ARVIX’s four pillars — segments, offers, repurchase triggers, and analytics — build a high-converting loyalty loop.',
  cta: 'Start free trial',
  advantagesTitle: 'Four pillars of membership growth',
  whyTitle: 'Why membership matters',
  whyStats: [
    { stat: '5x', title: 'Returning buyers convert 5x vs new visitors' },
    { stat: '↑', title: 'Loyal customers spend more on average' },
    { stat: '+Profit', title: 'Retain 5% more loyals to lift profit' },
  ],
  loopTitle: 'Build a high-cycle, high-precision, high-efficiency loyalty loop',
  steps: [
    { step: 'STEP 01', title: 'Segment: know customer profiles and target smarter', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'RFIM model with 9 smart segments' },
    { step: 'STEP 02', title: 'Offers: 205+ promotion plays to lift repurchase', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Flexible promotion settings' },
    { step: 'STEP 03', title: 'Triggers: omnichannel pushes that waste no impression', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'Automated multi-channel messaging' },
    { step: 'STEP 04', title: 'Analytics: 55 reports to maximize marketing ROI', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'Shoplytics professional reports' },
  ],
  driveTitle: 'Drive ongoing repurchase\nThe edge in a fragmented-traffic era',
  driveItems: [
    { title: 'Run membership more efficiently', desc: 'Automate marketing so your team focuses on strategy.' },
    { title: 'Close a high-cycle loop', desc: 'From acquisition to retention — grow lifetime value.' },
    { title: 'Optimize marketing ROI', desc: 'Data-backed spend that maximizes every budget dollar.' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const copy: Partial<Record<Locale, MemberRepurchaseCopy>> & { 'zh-TW': MemberRepurchaseCopy; en: MemberRepurchaseCopy } = {
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

export default function MemberRepurchasePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white whitespace-pre-line">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.cta}</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.advantagesTitle}</h2>
          <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt={c.advantagesTitle} className="w-full rounded-2xl" />
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.whyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {c.whyStats.map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center bg-white">
                <div className="text-5xl font-black mb-4" style={{ color: '#5B5FF0' }}>{item.stat}</div>
                <h3 className="text-base font-bold" style={{ color: '#00142D' }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.loopTitle}</h2>
          <div className="space-y-16">
            {c.steps.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h3 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h3>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.driveTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {c.driveItems.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#5B5FF0' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white/70 mb-8">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>{c.cta}</a>
        </div>
      </section>
    </main>
  )
}
