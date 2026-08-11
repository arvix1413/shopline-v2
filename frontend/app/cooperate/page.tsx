'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type CooperateCopy = {
  title: string
  subtitle: string
  cta: string
  typesTitle: string
  types: { title: string; desc: string; icon: string }[]
  advantagesTitle: string
  advantages: { title: string; desc: string }[]
  contactTitle: string
  contactDesc: string
  contactCta: string
  ctaTitle: string
  trialCta: string
}

const zhTW: CooperateCopy = {
  title: '加入 ARVIX 開放生態圈，成為我們的合作夥伴！',
  subtitle: '與全球超過 600,000 商家的電商平台合作，共同打造零售新未來',
  cta: '立即申請合作',
  typesTitle: '與 ARVIX 的合作機會',
  types: [
    { title: '策略合作夥伴', desc: '與 ARVIX 共同開拓市場，提供互補的產品或服務，共創商業價值。', icon: '🤝' },
    { title: '代理商與聯盟夥伴', desc: '代理 ARVIX 服務，協助商家導入電商解決方案，享有豐厚分潤機制。', icon: '🏢' },
    { title: '開發者合作夥伴', desc: '透過 ARVIX 開放 API 開發擴充功能，上架至擴充功能商店觸及 60 萬商家。', icon: '💻' },
    { title: '技術合作夥伴', desc: '整合金流、物流、行銷等技術服務，成為 ARVIX 生態圈的一環。', icon: '⚙️' },
  ],
  advantagesTitle: '四大合作優勢',
  advantages: [
    { title: '全新客戶來源坐享其成', desc: '借助 ARVIX 60 萬商家基礎，快速觸及潛在客戶，降低獲客成本。' },
    { title: '提升服務範疇開拓新商機', desc: '結合 ARVIX 全方位零售解決方案，擴大服務範疇，開拓更多商業機會。' },
    { title: '打造三贏局面創造收入', desc: '商家、夥伴、ARVIX 三方共贏，透過合作創造穩定收入來源。' },
    { title: '提供專人輔導省時省力', desc: '專屬夥伴成功團隊全程輔導，協助快速上手並持續優化合作成效。' },
  ],
  contactTitle: '想跟我們合作嗎？',
  contactDesc: '請填寫以下表單，我們將盡快與您聯繫，謝謝！',
  contactCta: '聯繫合作團隊',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  trialCta: '立即免費試用',
}

const zhCN: CooperateCopy = {
  title: '加入 ARVIX 开放生态圈，成为我们的合作伙伴！',
  subtitle: '与全球超过 600,000 商家的电商平台合作，共同打造零售新未来',
  cta: '立即申请合作',
  typesTitle: '与 ARVIX 的合作机会',
  types: [
    { title: '策略合作伙伴', desc: '与 ARVIX 共同开拓市场，提供互补的产品或服务，共创商业价值。', icon: '🤝' },
    { title: '代理商与联盟伙伴', desc: '代理 ARVIX 服务，协助商家导入电商解决方案，享有丰厚分润机制。', icon: '🏢' },
    { title: '开发者合作伙伴', desc: '通过 ARVIX 开放 API 开发扩展功能，上架至扩展功能商店触及 60 万商家。', icon: '💻' },
    { title: '技术合作伙伴', desc: '整合支付、物流、营销等技术服务，成为 ARVIX 生态圈的一环。', icon: '⚙️' },
  ],
  advantagesTitle: '四大合作优势',
  advantages: [
    { title: '全新客户来源坐享其成', desc: '借助 ARVIX 60 万商家基础，快速触及潜在客户，降低获客成本。' },
    { title: '提升服务范畴开拓新商机', desc: '结合 ARVIX 全方位零售解决方案，扩大服务范畴，开拓更多商业机会。' },
    { title: '打造三赢局面创造收入', desc: '商家、伙伴、ARVIX 三方共赢，通过合作创造稳定收入来源。' },
    { title: '提供专人辅导省时省力', desc: '专属伙伴成功团队全程辅导，协助快速上手并持续优化合作成效。' },
  ],
  contactTitle: '想跟我们合作吗？',
  contactDesc: '请填写以下表单，我们将尽快与您联系，谢谢！',
  contactCta: '联系合作团队',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  trialCta: '立即免费试用',
}

const en: CooperateCopy = {
  title: 'Join the ARVIX partner ecosystem',
  subtitle: 'Partner with a commerce platform trusted by 600,000+ merchants and shape the future of retail',
  cta: 'Apply to partner',
  typesTitle: 'Ways to partner with ARVIX',
  types: [
    { title: 'Strategic partners', desc: 'Co-develop markets with complementary products and shared value.', icon: '🤝' },
    { title: 'Resellers & affiliates', desc: 'Resell ARVIX and help merchants adopt commerce solutions with strong commissions.', icon: '🏢' },
    { title: 'Developer partners', desc: 'Build apps on ARVIX APIs and reach 600K merchants in the app store.', icon: '💻' },
    { title: 'Technology partners', desc: 'Integrate payments, logistics, and marketing into the ARVIX ecosystem.', icon: '⚙️' },
  ],
  advantagesTitle: 'Four partner advantages',
  advantages: [
    { title: 'Ready-made customer reach', desc: 'Tap 600K merchants to lower acquisition cost.' },
    { title: 'Expand your service scope', desc: 'Combine with ARVIX retail solutions to open new opportunities.' },
    { title: 'Win-win-win revenue', desc: 'Merchants, partners, and ARVIX grow together with stable income.' },
    { title: 'Dedicated success coaching', desc: 'A partner success team helps you ramp and optimize results.' },
  ],
  contactTitle: 'Want to partner with us?',
  contactDesc: 'Reach out and our team will get back to you soon.',
  contactCta: 'Contact partnership team',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  trialCta: 'Start free trial',
}

const copy: Partial<Record<Locale, CooperateCopy>> & { 'zh-TW': CooperateCopy; en: CooperateCopy } = {
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

export default function CooperatePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="#contact" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.typesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.types.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.advantagesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {c.advantages.map((a) => (
              <div key={a.title} className="p-8 bg-white rounded-2xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#5B5FF0' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.contactTitle}</h2>
          <p className="mb-8" style={{ color: '#687280' }}>{c.contactDesc}</p>
          <a href="mailto:partner@arvix.com" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.contactCta}
          </a>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.trialCta}
          </a>
        </div>
      </section>
    </main>
  )
}
