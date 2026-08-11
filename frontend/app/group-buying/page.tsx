'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type GroupBuyingCopy = {
  title: string
  subtitle: string
  cta: string
  solutionTitle: string
  solutionAccent: string
  solutionDesc: string
  features: { title: string; desc: string }[]
  socialTitle: string
  socialDesc: string
  partnerTitle: string
  partnerDesc: string
  siteTitle: string
  siteDesc: string
  ctaTitle: string
}

const zhTW: GroupBuyingCopy = {
  title: '打造團購銷售熱潮\n新客、業績一把罩！',
  subtitle: '業績放大術，團購經濟魅力無法擋。ARVIX 推出「團購解決方案」，你的開團得力助手。',
  cta: '立即免費試用',
  solutionTitle: 'ARVIX 推出「團購解決方案」\n你的開團得力助手',
  solutionAccent: '獨立分潤賣場快速下單超方便',
  solutionDesc: '為每位合作夥伴建立獨立分潤賣場，讓顧客快速下單，提升購買體驗。',
  features: [
    { title: '獨立分潤賣場', desc: '為每位 KOL 建立專屬賣場' },
    { title: '團購隱藏賣場', desc: '限定顧客才能進入的專屬賣場' },
    { title: '優惠直接套用', desc: '自動套用折扣，無需手動輸入' },
    { title: '推薦活動與分潤', desc: '靈活設定推薦分潤比例' },
    { title: '各商品設定不同分潤', desc: '依商品設定不同分潤比例' },
    { title: '一頁結帳', desc: '簡化結帳流程，提升轉換率' },
  ],
  socialTitle: '多管道社群導流\n先讓客人嗨起來',
  socialDesc: '透過多元社群渠道導流，讓更多潛在顧客加入你的團購活動。',
  partnerTitle: '合作夥伴成效中心\n即時數據一目瞭然',
  partnerDesc: '即時追蹤每位合作夥伴的銷售成效，讓數據說話，優化團購策略。',
  siteTitle: '官網一站式整合\n團購效益最大化',
  siteDesc: '將團購與官網完美整合，讓顧客享受無縫的購物體驗，最大化團購效益。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: GroupBuyingCopy = {
  title: '打造团购销售热潮\n新客、业绩一把罩！',
  subtitle: '业绩放大术，团购经济魅力无法挡。ARVIX 推出「团购解决方案」，你的开团得力助手。',
  cta: '立即免费试用',
  solutionTitle: 'ARVIX 推出「团购解决方案」\n你的开团得力助手',
  solutionAccent: '独立分润卖场快速下单超方便',
  solutionDesc: '为每位合作伙伴建立独立分润卖场，让顾客快速下单，提升购买体验。',
  features: [
    { title: '独立分润卖场', desc: '为每位 KOL 建立专属卖场' },
    { title: '团购隐藏卖场', desc: '限定顾客才能进入的专属卖场' },
    { title: '优惠直接套用', desc: '自动套用折扣，无需手动输入' },
    { title: '推荐活动与分润', desc: '灵活设定推荐分润比例' },
    { title: '各商品设定不同分润', desc: '依商品设定不同分润比例' },
    { title: '一页结账', desc: '简化结账流程，提升转化率' },
  ],
  socialTitle: '多渠道社群导流\n先让客人嗨起来',
  socialDesc: '通过多元社群渠道导流，让更多潜在顾客加入你的团购活动。',
  partnerTitle: '合作伙伴成效中心\n即时数据一目了然',
  partnerDesc: '即时追踪每位合作伙伴的销售成效，让数据说话，优化团购策略。',
  siteTitle: '官网一站式整合\n团购效益最大化',
  siteDesc: '将团购与官网完美整合，让顾客享受无缝的购物体验，最大化团购效益。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: GroupBuyingCopy = {
  title: 'Ignite group-buy sales\nNew customers and revenue covered',
  subtitle: 'Scale with the group-buy economy. ARVIX group-buy tools are your launch partner.',
  cta: 'Start free trial',
  solutionTitle: 'ARVIX group-buy solution\nYour campaign co-pilot',
  solutionAccent: 'Commission storefronts for fast checkout',
  solutionDesc: 'Give every partner a dedicated commission store so shoppers buy faster.',
  features: [
    { title: 'Commission storefronts', desc: 'Dedicated shops for every KOL' },
    { title: 'Hidden group-buy shops', desc: 'Invite-only storefronts for selected buyers' },
    { title: 'Auto-applied offers', desc: 'Discounts apply automatically — no codes needed' },
    { title: 'Referral campaigns & commissions', desc: 'Flexible referral commission rates' },
    { title: 'Per-product commissions', desc: 'Set different rates by product' },
    { title: 'One-page checkout', desc: 'Shorter checkout, higher conversion' },
  ],
  socialTitle: 'Multi-channel social traffic\nWarm up the crowd first',
  socialDesc: 'Drive more shoppers into your group buys from every social channel.',
  partnerTitle: 'Partner performance hub\nLive data at a glance',
  partnerDesc: 'Track each partner’s sales in realtime and refine your strategy.',
  siteTitle: 'One-stop store integration\nMaximize group-buy ROI',
  siteDesc: 'Unify group buys with your main store for a seamless shopping experience.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, GroupBuyingCopy>> & { 'zh-TW': GroupBuyingCopy; en: GroupBuyingCopy } = {
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

export default function GroupBuyingPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(175, 194, 251) 0%, rgb(169, 187, 255) 50%, rgb(57, 170, 209) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="ARVIX group buying" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2 whitespace-pre-line" style={{ color: '#00142D' }}>{c.solutionTitle}</h2>
            <h2 className="text-xl font-black mb-4" style={{ color: '#5B5FF0' }}>{c.solutionAccent}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.solutionDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.features.map(item => (
                <div key={item.title} className="p-3 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <div className="font-bold text-sm mb-1" style={{ color: '#00142D' }}>{item.title}</div>
                  <div className="text-xs" style={{ color: '#687280' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="Group buy commission store" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.socialTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.socialDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Group buy social traffic" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.partnerTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.partnerDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="Group buy performance" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.siteTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.siteDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="Group buy store integration" width={600} height={450} className="w-full h-auto" unoptimized />
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
