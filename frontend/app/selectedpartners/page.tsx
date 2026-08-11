'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type PartnersCopy = {
  title: string
  subtitle: string
  becomePartner: string
  categories: { title: string; desc: string; partners: string[] }[]
  ctaTitle: string
  cta: string
}

const zhTW: PartnersCopy = {
  title: 'ARVIX 夥伴提供您各式支援',
  subtitle: '精選合作夥伴生態圈，為你的品牌提供全方位的專業服務支援',
  becomePartner: '成為合作夥伴',
  categories: [
    {
      title: '豐富金物流選項',
      desc: '整合多元金流與物流服務，讓商家輕鬆提供消費者最便利的付款與收貨方式。',
      partners: ['ARVIX Payments', 'LINE Pay', 'Apple Pay', '街口支付', '黑貓宅急便', '7-11 超商取貨', '全家便利商店', '郵局'],
    },
    {
      title: '專業設計、行銷團隊',
      desc: '與頂尖設計與行銷服務商合作，協助品牌打造專業形象並提升行銷成效。',
      partners: ['品牌設計公司', '數位行銷代理商', 'SEO 優化服務', '社群媒體管理', '廣告投放服務', '內容行銷團隊'],
    },
    {
      title: '多元服務滿足各式需求',
      desc: '涵蓋 ERP、CRM、倉儲物流等各類企業服務，打造完整的電商生態圈。',
      partners: ['ERP 系統整合', 'CRM 客戶管理', '倉儲物流服務', '客服系統', '數據分析工具', 'AI 行銷工具'],
    },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
}

const zhCN: PartnersCopy = {
  title: 'ARVIX 伙伴为您提供各式支持',
  subtitle: '精选合作伙伴生态圈，为你的品牌提供全方位的专业服务支持',
  becomePartner: '成为合作伙伴',
  categories: [
    {
      title: '丰富金物流选项',
      desc: '整合多元金流与物流服务，让商家轻松提供消费者最便利的付款与收货方式。',
      partners: ['ARVIX Payments', 'LINE Pay', 'Apple Pay', '街口支付', '黑猫宅急便', '7-11 超商取货', '全家便利商店', '邮局'],
    },
    {
      title: '专业设计、营销团队',
      desc: '与顶尖设计与营销服务商合作，协助品牌打造专业形象并提升营销成效。',
      partners: ['品牌设计公司', '数字营销代理商', 'SEO 优化服务', '社群媒体管理', '广告投放服务', '内容营销团队'],
    },
    {
      title: '多元服务满足各式需求',
      desc: '涵盖 ERP、CRM、仓储物流等各类企业服务，打造完整的电商生态圈。',
      partners: ['ERP 系统整合', 'CRM 客户管理', '仓储物流服务', '客服系统', '数据分析工具', 'AI 营销工具'],
    },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
}

const en: PartnersCopy = {
  title: 'ARVIX partners have your back',
  subtitle: 'A curated partner ecosystem for full-stack professional support',
  becomePartner: 'Become a partner',
  categories: [
    {
      title: 'Payments & logistics options',
      desc: 'Integrate diverse payment and shipping services for convenient checkout and delivery.',
      partners: ['ARVIX Payments', 'LINE Pay', 'Apple Pay', 'JKO Pay', 'Black Cat', '7-Eleven pickup', 'FamilyMart', 'Post Office'],
    },
    {
      title: 'Design & marketing teams',
      desc: 'Work with top design and marketing partners to elevate brand and performance.',
      partners: ['Brand design studios', 'Digital agencies', 'SEO services', 'Social media management', 'Media buying', 'Content teams'],
    },
    {
      title: 'Services for every need',
      desc: 'ERP, CRM, warehousing, and more — a complete commerce ecosystem.',
      partners: ['ERP integration', 'CRM', 'Warehousing & logistics', 'Support systems', 'Analytics tools', 'AI marketing tools'],
    },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
}

const copy: Partial<Record<Locale, PartnersCopy>> & { 'zh-TW': PartnersCopy; en: PartnersCopy } = {
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

export default function SelectedPartnersPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="/cooperate" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.becomePartner}
          </a>
        </div>
      </section>

      {c.categories.map((cat, i) => (
        <section key={cat.title} className="py-20" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#F4F7FC' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{cat.title}</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#687280' }}>{cat.desc}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cat.partners.map((p) => (
                <div key={p} className="p-4 bg-white rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#EEF0FF' }}>
                    <span className="text-xl">🤝</span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#354253' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
