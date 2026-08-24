'use client'
import { useState } from 'react'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'
import PricingCheckoutButton from '../../components/PricingCheckoutButton'

const checkoutPlans = ['starter', 'growth', 'omo'] as const

type PricingCopy = {
  title: string
  subtitle: string
  monthly: string
  yearly: string
  save: string
  popular: string
  limitedTitle: string
  limitedSubtitle: string
  commonFeatures: string[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
  plans: {
    name: string
    price: string
    period: string
    desc: string
    features: string[]
    cta: string
    popular: boolean
    color: string
  }[]
}

const zhTW: PricingCopy = {
  title: '選擇最適合你的方案',
  subtitle: '立即開始免費試用，無需信用卡，14 天免費體驗所有功能',
  monthly: '月繳',
  yearly: '年繳',
  save: '省 20%',
  popular: '最受歡迎',
  limitedTitle: 'ARVIX 限定方案',
  limitedSubtitle: '所有方案均包含以下核心功能',
  commonFeatures: ['SSL 安全憑證', '無限頻寬', '行動裝置優化', '多種金流選項', '物流整合', 'SEO 工具', '折扣碼管理', '24/7 系統監控'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即開始，14 天免費試用',
  ctaButton: '立即免費試用',
  plans: [
    {
      name: '網店探索者', price: 'NT$990', period: '/月', desc: '適合剛起步的品牌，快速建立網路商店',
      features: ['網路商店', '無限商品上架', '基本版型主題', '訂單管理', '基本客服支援', 'SSL 安全憑證'],
      cta: '免費試用', popular: false, color: '#5B5FF0',
    },
    {
      name: '電商戰略家', price: 'NT$1,990', period: '/月', desc: '適合成長中的品牌，強化行銷與數據能力',
      features: ['網店探索者全部功能', '社群購物', '分眾行銷 RFIM', 'Shoplytics 數據分析', '優先客服支援', '多語言商店'],
      cta: '免費試用', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO 大師', price: 'NT$3,990', period: '/月', desc: '適合線上線下整合的品牌，實現全通路零售',
      features: ['電商戰略家全部功能', 'POS 零售系統', 'Smart OMO', '全通路庫存管理', '專屬顧問服務', 'API 串接'],
      cta: '免費試用', popular: false, color: '#5B5FF0',
    },
    {
      name: '全通路領航員', price: '聯繫我們', period: '', desc: '適合大型品牌，量身打造全通路解決方案',
      features: ['OMO 大師全部功能', 'Shopper App', '企業級 API', '專屬技術支援', '客製化開發', '多店管理'],
      cta: '預約諮詢', popular: false, color: '#00142D',
    },
  ],
}

const zhCN: PricingCopy = {
  title: '选择最适合你的方案',
  subtitle: '立即开始免费试用，无需信用卡，14 天免费体验所有功能',
  monthly: '月付',
  yearly: '年付',
  save: '省 20%',
  popular: '最受欢迎',
  limitedTitle: 'ARVIX 限定方案',
  limitedSubtitle: '所有方案均包含以下核心功能',
  commonFeatures: ['SSL 安全证书', '无限带宽', '移动端优化', '多种支付选项', '物流整合', 'SEO 工具', '折扣码管理', '24/7 系统监控'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即开始，14 天免费试用',
  ctaButton: '立即免费试用',
  plans: [
    {
      name: '网店探索者', price: 'NT$990', period: '/月', desc: '适合刚起步的品牌，快速建立网络商店',
      features: ['网络商店', '无限商品上架', '基本版型主题', '订单管理', '基本客服支持', 'SSL 安全证书'],
      cta: '免费试用', popular: false, color: '#5B5FF0',
    },
    {
      name: '电商战略家', price: 'NT$1,990', period: '/月', desc: '适合成长中的品牌，强化营销与数据能力',
      features: ['网店探索者全部功能', '社群购物', '分众营销 RFIM', 'Shoplytics 数据分析', '优先客服支持', '多语言商店'],
      cta: '免费试用', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO 大师', price: 'NT$3,990', period: '/月', desc: '适合线上线下整合的品牌，实现全渠道零售',
      features: ['电商战略家全部功能', 'POS 零售系统', 'Smart OMO', '全渠道库存管理', '专属顾问服务', 'API 对接'],
      cta: '免费试用', popular: false, color: '#5B5FF0',
    },
    {
      name: '全渠道领航员', price: '联系我们', period: '', desc: '适合大型品牌，量身打造全渠道解决方案',
      features: ['OMO 大师全部功能', 'Shopper App', '企业级 API', '专属技术支持', '定制开发', '多店管理'],
      cta: '预约咨询', popular: false, color: '#00142D',
    },
  ],
}

const en: PricingCopy = {
  title: 'Choose the plan that fits you',
  subtitle: 'Start your free trial — no credit card required. Try every feature for 14 days.',
  monthly: 'Monthly',
  yearly: 'Yearly',
  save: 'Save 20%',
  popular: 'Most popular',
  limitedTitle: 'Included with every ARVIX plan',
  limitedSubtitle: 'Core features available on all plans',
  commonFeatures: ['SSL certificate', 'Unlimited bandwidth', 'Mobile optimized', 'Multiple payment options', 'Logistics integrations', 'SEO tools', 'Discount codes', '24/7 system monitoring'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Start today with a 14-day free trial',
  ctaButton: 'Start free trial',
  plans: [
    {
      name: 'Store Explorer', price: 'NT$990', period: '/mo', desc: 'For new brands ready to launch an online store',
      features: ['Online store', 'Unlimited products', 'Starter themes', 'Order management', 'Basic support', 'SSL certificate'],
      cta: 'Start free trial', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Commerce Strategist', price: 'NT$1,990', period: '/mo', desc: 'For growing brands that need marketing and analytics',
      features: ['Everything in Store Explorer', 'Social commerce', 'RFIM segmentation', 'Shoplytics analytics', 'Priority support', 'Multi-language store'],
      cta: 'Start free trial', popular: true, color: '#5B5FF0',
    },
    {
      name: 'OMO Master', price: 'NT$3,990', period: '/mo', desc: 'For brands unifying online and offline retail',
      features: ['Everything in Commerce Strategist', 'Retail POS', 'Smart OMO', 'Omnichannel inventory', 'Dedicated advisor', 'API access'],
      cta: 'Start free trial', popular: false, color: '#5B5FF0',
    },
    {
      name: 'Omnichannel Navigator', price: 'Contact us', period: '', desc: 'For enterprise brands that need a tailored solution',
      features: ['Everything in OMO Master', 'Shopper App', 'Enterprise API', 'Dedicated tech support', 'Custom development', 'Multi-store management'],
      cta: 'Book a consult', popular: false, color: '#00142D',
    },
  ],
}

const copy: Partial<Record<Locale, PricingCopy>> & { 'zh-TW': PricingCopy; en: PricingCopy } = {
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

export default function PricingPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <div className="inline-flex rounded-full p-1 mb-8" style={{ backgroundColor: '#E5EAF0' }}>
            <button onClick={() => setBilling('monthly')} className="px-6 py-2 rounded-full text-sm font-bold transition-all"
              style={billing === 'monthly' ? { backgroundColor: '#5B5FF0', color: 'white' } : { color: '#687280' }}>
              {c.monthly}
            </button>
            <button onClick={() => setBilling('yearly')} className="px-6 py-2 rounded-full text-sm font-bold transition-all"
              style={billing === 'yearly' ? { backgroundColor: '#5B5FF0', color: 'white' } : { color: '#687280' }}>
              {c.yearly} <span className="text-xs ml-1" style={{ color: billing === 'yearly' ? 'rgba(255,255,255,0.8)' : '#5B5FF0' }}>{c.save}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.plans.map((plan, index) => (
              <div key={plan.name} className={`rounded-2xl overflow-hidden flex flex-col ${plan.popular ? 'shadow-2xl ring-2 ring-blue-500' : 'border border-gray-100'}`}>
                {plan.popular && (
                  <div className="py-2 text-center text-sm font-bold text-white" style={{ backgroundColor: '#5B5FF0' }}>
                    {c.popular}
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-2" style={{ color: '#00142D' }}>{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#687280' }}>{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black" style={{ color: '#5B5FF0' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span className="text-green-500 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  {index < checkoutPlans.length ? (
                    <PricingCheckoutButton plan={checkoutPlans[index]} />
                  ) : (
                    <a href="/consultation" className="block text-center py-3 rounded-full font-bold transition-opacity hover:opacity-90"
                      style={{ border: '2px solid #5B5FF0', color: '#5B5FF0' }}>
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-4 text-center" style={{ color: '#00142D' }}>{c.limitedTitle}</h2>
          <p className="text-center mb-8" style={{ color: '#687280' }}>{c.limitedSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {c.commonFeatures.map((f) => (
              <div key={f} className="p-4 bg-white rounded-xl text-sm font-semibold text-center" style={{ color: '#354253' }}>
                ✓ {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
