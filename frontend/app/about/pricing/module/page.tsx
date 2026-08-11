'use client'

import { useI18n } from '../../../../contexts/I18nContext'
import { pickCopy } from '../../../../lib/i18n/pageCopy'
import type { Locale } from '../../../../lib/i18n'

type PricingModuleCopy = {
  title: string
  subtitle: string
  viewPlans: string
  freeTrial: string
  modules: { category: string; items: { name: string; price: string; desc: string }[] }[]
  ctaTitle: string
  ctaSubtitle: string
  cta: string
}

const zhTW: PricingModuleCopy = {
  title: '功能模組費用',
  subtitle: '依需求彈性選購功能模組，搭配主方案打造最適合你的電商解決方案',
  viewPlans: '查看主方案費用',
  freeTrial: '免費試用',
  modules: [
    {
      category: '行銷工具',
      items: [
        { name: 'RFIM 分眾行銷', price: 'NT$990/月', desc: '精準分眾，提升行銷 ROI' },
        { name: 'LINE 官方帳號整合', price: 'NT$490/月', desc: '串接 LINE OA，直接觸達會員' },
        { name: '團購解決方案', price: 'NT$690/月', desc: '網紅團購、群組購物一站搞定' },
      ],
    },
    {
      category: '數據分析',
      items: [
        { name: 'Shoplytics 數據分析', price: 'NT$790/月', desc: '人貨場全方位數據洞察' },
        { name: 'AI 洞察策略', price: 'NT$490/月', desc: 'AI 自動分析，提供可執行建議' },
      ],
    },
    {
      category: '全通路整合',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/月', desc: '智慧串連門市與網店' },
        { name: 'Shopper App', price: 'NT$1,990/月', desc: '品牌專屬會員購物 App' },
        { name: 'POS 零售系統', price: '依規格報價', desc: '實體門市收銀與庫存管理' },
      ],
    },
    {
      category: '金流服務',
      items: [
        { name: 'ARVIX Payments', price: '依交易量計費', desc: '一站式金流，支援多種支付方式' },
      ],
    },
  ],
  ctaTitle: 'More solutions for your business',
  ctaSubtitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
}

const zhCN: PricingModuleCopy = {
  title: '功能模块费用',
  subtitle: '按需求弹性选购功能模块，搭配主方案打造最适合你的电商解决方案',
  viewPlans: '查看主方案费用',
  freeTrial: '免费试用',
  modules: [
    {
      category: '营销工具',
      items: [
        { name: 'RFIM 分群营销', price: 'NT$990/月', desc: '精准分群，提升营销 ROI' },
        { name: 'LINE 官方账号整合', price: 'NT$490/月', desc: '串接 LINE OA，直接触达会员' },
        { name: '团购解决方案', price: 'NT$690/月', desc: '网红团购、群组购物一站搞定' },
      ],
    },
    {
      category: '数据分析',
      items: [
        { name: 'Shoplytics 数据分析', price: 'NT$790/月', desc: '人货场全方位数据洞察' },
        { name: 'AI 洞察策略', price: 'NT$490/月', desc: 'AI 自动分析，提供可执行建议' },
      ],
    },
    {
      category: '全渠道整合',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/月', desc: '智慧串连门店与网店' },
        { name: 'Shopper App', price: 'NT$1,990/月', desc: '品牌专属会员购物 App' },
        { name: 'POS 零售系统', price: '按规格报价', desc: '实体门店收银与库存管理' },
      ],
    },
    {
      category: '金流服务',
      items: [
        { name: 'ARVIX Payments', price: '按交易量计费', desc: '一站式金流，支持多种支付方式' },
      ],
    },
  ],
  ctaTitle: 'More solutions for your business',
  ctaSubtitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
}

const en: PricingModuleCopy = {
  title: 'Add-on module pricing',
  subtitle: 'Pick modules as needed and pair them with a core plan for your stack',
  viewPlans: 'View core plan pricing',
  freeTrial: 'Free trial',
  modules: [
    {
      category: 'Marketing',
      items: [
        { name: 'RFIM segmentation', price: 'NT$990/mo', desc: 'Precise segments that lift marketing ROI' },
        { name: 'LINE Official Account', price: 'NT$490/mo', desc: 'Connect LINE OA and reach members directly' },
        { name: 'Group buying', price: 'NT$690/mo', desc: 'Influencer and group commerce in one place' },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Shoplytics analytics', price: 'NT$790/mo', desc: 'People, products, and place insights' },
        { name: 'AI strategy insights', price: 'NT$490/mo', desc: 'AI analysis with actionable recommendations' },
      ],
    },
    {
      category: 'Omnichannel',
      items: [
        { name: 'Smart OMO', price: 'NT$1,490/mo', desc: 'Connect stores and online smartly' },
        { name: 'Shopper App', price: 'NT$1,990/mo', desc: 'Branded member shopping app' },
        { name: 'POS retail system', price: 'Custom quote', desc: 'In-store checkout and inventory' },
      ],
    },
    {
      category: 'Payments',
      items: [
        { name: 'ARVIX Payments', price: 'Usage-based', desc: 'One payments stack with many methods' },
      ],
    },
  ],
  ctaTitle: 'More solutions for your business',
  ctaSubtitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
}

const copy: Partial<Record<Locale, PricingModuleCopy>> & { 'zh-TW': PricingModuleCopy; en: PricingModuleCopy } = {
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

export default function PricingModulePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <div className="flex gap-4 justify-center">
            <a href="/about/pricing" className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-80 transition-opacity" style={{ borderColor: '#5B5FF0', color: '#5B5FF0' }}>
              {c.viewPlans}
            </a>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.freeTrial}
            </a>
          </div>
        </div>
      </section>

      {c.modules.map((cat, i) => (
        <section key={cat.category} className="py-16" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#F4F7FC' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black mb-8" style={{ color: '#00142D' }}>{cat.category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{item.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#687280' }}>{item.desc}</p>
                  <div className="text-xl font-black" style={{ color: '#5B5FF0' }}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
