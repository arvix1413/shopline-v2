'use client'

import { useState } from 'react'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type TrafficCopy = {
  title: string
  subtitle: string
  cta: string
  problemsTitle: string
  problems: { title: string; desc: string }[]
  layoutTitle: string
  layoutSubtitle: string
  tabs: { title: string; desc: string }[]
  toolsTitle: string
  tools: { title: string; desc: string; img: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: TrafficCopy = {
  title: '流量獲取與轉換解決方案',
  subtitle: '在消費者注意高度分散、廣告效益明顯下降的今日，ARVIX 提供全方位的流量獲取與轉換解決方案，從多流量池的佈局到跨平台的數據整合分析，全面賦能品牌在多變的數位環境中搶占先機！',
  cta: '立即免費試用',
  problemsTitle: '零售品牌遇到的 3 大流量經營困境',
  problems: [
    { title: '流量破碎化挑戰', desc: '過去集中式流量紅利消失，如今高度分散在 Facebook、Instagram、短影音、搜尋等多元場景，單一管道投放效益遞減，讓預算分散、投資報酬率下滑。' },
    { title: '消費決策路徑複雜', desc: '消費者決策路徑變長，從接觸品牌、了解產品、評價到購買，觸點橫跨多渠道，複雜的跨渠道行為模式讓流量歸因變得困難且難以整合。' },
    { title: '多通路數據孤島', desc: '多平台經營帶來不同數據來源與操作介面，難以整合分析，無法精準評估跨平台行銷成效，不易優化投放策略，導致轉換成效不佳。' },
  ],
  layoutTitle: '市場最完整的流量佈局解決方案',
  layoutSubtitle: '從流量獲取、整合到轉換，多方位掌握！',
  tabs: [
    { title: '全方位功能支援，強化多銷售場景轉換效能！', desc: 'ARVIX 提供多元場景功能支援，讓你針對不同流量特性制定轉換策略，最大化每位訪客價值，有效提升流量轉換和收單，加速品牌成長。' },
    { title: '全場景流量掌控專家，為你破解流量困境！', desc: 'ARVIX 推出市場最完整的流量佈局解決方案，打造多場景流量生態池，讓品牌從流量獲取到轉換，在不同渠道和銷售場景都能主動出擊，掌握流量主導權！' },
    { title: '全通路流量整合管理，釋放流量最大價值！', desc: '當品牌從社群平台、廣告投放等管道獲取流量後，如何有效進行整合是關鍵！ARVIX 具備跨系統流量整合能力，助力品牌統一管理、深度分析並精準再行銷。' },
  ],
  toolsTitle: 'ARVIX 2025 最新流量獲取工具',
  tools: [
    { title: '網紅團購模組', desc: '專屬獨立分潤賣場，顧客不用輸入推薦代碼就能直接套用優惠、下單，搭配合作夥伴成效中心快速計算分潤金，讓你開團沒難度。', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80' },
    { title: '商品募資', desc: '官網也能做商品募資活動！透過 SHOP Builder 促購元件 App，就能自建買氣爆棚的商品預購募資活動頁，支援顯示商品累積銷量、剩餘庫存，創造搶購氛圍。', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80' },
    { title: 'POS 快閃店', desc: 'ARVIX POS 輕巧好移動、易於操作的特點，幫助品牌在百貨快閃、展覽攤位快速建立好結帳定點，不僅能即時同步訂單與庫存，最重要的是能將線下流量納入 OMO 會員池！', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: TrafficCopy = {
  title: '流量获取与转化解决方案',
  subtitle: '在消费者注意高度分散、广告效益明显下降的今日，ARVIX 提供全方位的流量获取与转化解决方案，从多流量池的布局到跨平台的数据整合分析，全面赋能品牌在多变的数字环境中抢占先机！',
  cta: '立即免费试用',
  problemsTitle: '零售品牌遇到的 3 大流量经营困境',
  problems: [
    { title: '流量破碎化挑战', desc: '过去集中式流量红利消失，如今高度分散在 Facebook、Instagram、短视频、搜索等多元场景，单一管道投放效益递减，让预算分散、投资回报率下滑。' },
    { title: '消费决策路径复杂', desc: '消费者决策路径变长，从接触品牌、了解产品、评价到购买，触点横跨多渠道，复杂的跨渠道行为模式让流量归因变得困难且难以整合。' },
    { title: '多渠道数据孤岛', desc: '多平台经营带来不同数据来源与操作界面，难以整合分析，无法精准评估跨平台营销成效，不易优化投放策略，导致转化成效不佳。' },
  ],
  layoutTitle: '市场最完整的流量布局解决方案',
  layoutSubtitle: '从流量获取、整合到转化，多方位掌握！',
  tabs: [
    { title: '全方位功能支持，强化多销售场景转化效能！', desc: 'ARVIX 提供多元场景功能支持，让你针对不同流量特性制定转化策略，最大化每位访客价值，有效提升流量转化和收单，加速品牌成长。' },
    { title: '全场景流量掌控专家，为你破解流量困境！', desc: 'ARVIX 推出市场最完整的流量布局解决方案，打造多场景流量生态池，让品牌从流量获取到转化，在不同渠道和销售场景都能主动出击，掌握流量主导权！' },
    { title: '全渠道流量整合管理，释放流量最大价值！', desc: '当品牌从社群平台、广告投放等管道获取流量后，如何有效进行整合是关键！ARVIX 具备跨系统流量整合能力，助力品牌统一管理、深度分析并精准再营销。' },
  ],
  toolsTitle: 'ARVIX 2025 最新流量获取工具',
  tools: [
    { title: '网红团购模块', desc: '专属独立分润卖场，顾客不用输入推荐代码就能直接套用优惠、下单，搭配合作伙伴成效中心快速计算分润金，让你开团没难度。', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80' },
    { title: '商品募资', desc: '官网也能做商品募资活动！通过 SHOP Builder 促购组件 App，就能自建买气爆棚的商品预购募资活动页，支持显示商品累积销量、剩余库存，创造抢购氛围。', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80' },
    { title: 'POS 快闪店', desc: 'ARVIX POS 轻巧好移动、易于操作，帮助品牌在百货快闪、展览摊位快速建立结账定点，即时同步订单与库存，并将线下流量纳入 OMO 会员池！', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: TrafficCopy = {
  title: 'Traffic acquisition & conversion',
  subtitle: 'Attention is fragmented and ad ROI is falling. ARVIX helps brands win with multi-pool acquisition and cross-platform analytics.',
  cta: 'Start free trial',
  problemsTitle: 'Three traffic challenges retailers face',
  problems: [
    { title: 'Fragmented traffic', desc: 'Traffic is split across Meta, short video, search, and more — single-channel spend loses efficiency.' },
    { title: 'Complex decision paths', desc: 'Longer journeys across many touchpoints make attribution hard to unify.' },
    { title: 'Data silos', desc: 'Different platforms and UIs block analysis, so cross-channel optimization suffers.' },
  ],
  layoutTitle: 'The most complete traffic playbook',
  layoutSubtitle: 'Acquire, unify, and convert — end to end',
  tabs: [
    { title: 'Full toolkit for multi-scene conversion', desc: 'Scene-ready features let you tailor conversion plays to each traffic source and grow order volume.' },
    { title: 'Own every scene’s traffic', desc: 'Build a multi-scene traffic pool so brands can acquire and convert across channels with control.' },
    { title: 'Unify omnichannel traffic value', desc: 'After ads and social bring visitors in, ARVIX unifies management, deep analysis, and retargeting.' },
  ],
  toolsTitle: 'ARVIX 2025 traffic tools',
  tools: [
    { title: 'Influencer group-buy', desc: 'Dedicated affiliate storefronts apply discounts without codes, with partner performance tracking.', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80' },
    { title: 'Product crowdfunding', desc: 'Launch preorder campaigns on your site with SHOP Builder — show sales and remaining stock for urgency.', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80' },
    { title: 'POS pop-up', desc: 'Portable ARVIX POS for mall pop-ups and events — sync orders/inventory and feed offline traffic into your OMO pool.', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const copy: Partial<Record<Locale, TrafficCopy>> & { 'zh-TW': TrafficCopy; en: TrafficCopy } = {
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

export default function TrafficConversionPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.cta}</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.problemsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.problems.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.layoutTitle}</h2>
          <p className="text-center mb-10" style={{ color: '#687280' }}>{c.layoutSubtitle}</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {c.tabs.map((tab, i) => (
              <button key={tab.title} onClick={() => setActiveTab(i)} className="flex-1 px-5 py-4 rounded-xl text-sm font-semibold text-left transition-all"
                style={{ backgroundColor: activeTab === i ? '#5B5FF0' : '#fff', color: activeTab === i ? '#fff' : '#354253', boxShadow: activeTab === i ? '0 4px 16px rgba(91,95,240,0.3)' : '0 1px 4px rgba(0,0,0,0.08)' }}>
                {tab.title}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-base leading-relaxed" style={{ color: '#354253' }}>{c.tabs[activeTab].desc}</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.toolsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.tools.map((tool) => (
              <div key={tool.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <img src={tool.img} alt={'ARVIX ' + tool.title} className="w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{tool.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{tool.desc}</p>
                </div>
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
