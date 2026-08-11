'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type ShopEfficiencyCopy = {
  title: string
  subtitle: string
  cta: string
  keysTitle: string
  keys: { title: string; desc: string }[]
  expertTitle: string
  sections: { title: string; items: string[]; img: string; alt: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: ShopEfficiencyCopy = {
  title: '商店營運效率解決方案',
  subtitle: 'ARVIX 提供一站式操作介面 x 自動化訂單管理 x 多元銷售管道管理，全面協助商家在「商店準備」、「銷售管理」及「售後服務」過程中，提升商店營運效率，有效節省人力成本！',
  cta: '立即免費試用',
  keysTitle: 'ARVIX 解決商店營運的重要關鍵',
  keys: [
    { title: '一站式後台管理', desc: '所有商店管理功能集中在單一後台，操作直覺簡單，大幅降低學習成本。' },
    { title: '自動化訂單管理', desc: '訂單自動處理、通知、追蹤，大幅減少人工作業，提升處理效率。' },
    { title: '多管道整合', desc: '網店、POS、社群購物統一管理，數據即時同步，掌握全通路銷售狀況。' },
  ],
  expertTitle: '最全方位的零售整合專家，完整提升商家營運效率！',
  sections: [
    { title: '品牌開店前置作業', items: ['多元金物流整合', '多元網頁活動頁面', '大量批次管理及 Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 一站完成品牌開店前置作業' },
    { title: '銷售與訂單管理', items: ['多元銷售管道管理', '商品管理', '訂單管理', '庫存管理'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'ARVIX 整合多元銷售通路，並提供完整的後台商品、訂單及庫存管理' },
    { title: '出貨及售後服務', items: ['訊息中心', '電子發票服務', '對帳管理工具'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'ARVIX 提供品牌完整的出貨及售後服務' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: ShopEfficiencyCopy = {
  title: '商店运营效率解决方案',
  subtitle: 'ARVIX 提供一站式操作界面 x 自动化订单管理 x 多元销售管道管理，全面协助商家在「商店准备」、「销售管理」及「售后服务」过程中，提升商店运营效率，有效节省人力成本！',
  cta: '立即免费试用',
  keysTitle: 'ARVIX 解决商店运营的重要关键',
  keys: [
    { title: '一站式后台管理', desc: '所有商店管理功能集中在单一后台，操作直觉简单，大幅降低学习成本。' },
    { title: '自动化订单管理', desc: '订单自动处理、通知、追踪，大幅减少人工作业，提升处理效率。' },
    { title: '多管道整合', desc: '网店、POS、社群购物统一管理，数据即时同步，掌握全渠道销售状况。' },
  ],
  expertTitle: '最全方位的零售整合专家，完整提升商家运营效率！',
  sections: [
    { title: '品牌开店前置作业', items: ['多元金物流整合', '多元网页活动页面', '大量批次管理及 Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 一站完成品牌开店前置作业' },
    { title: '销售与订单管理', items: ['多元销售管道管理', '商品管理', '订单管理', '库存管理'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'ARVIX 整合多元销售渠道' },
    { title: '出货及售后服务', items: ['消息中心', '电子发票服务', '对账管理工具'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'ARVIX 提供品牌完整的出货及售后服务' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: ShopEfficiencyCopy = {
  title: 'Store operations efficiency',
  subtitle: 'One UI × automated orders × multi-channel selling — streamline prep, sales, and after-sales while cutting labor cost.',
  cta: 'Start free trial',
  keysTitle: 'Keys to efficient store ops',
  keys: [
    { title: 'One admin for everything', desc: 'All store tools in one intuitive back office — lower learning curve.' },
    { title: 'Automated order ops', desc: 'Auto process, notify, and track orders with far less manual work.' },
    { title: 'Multi-channel unity', desc: 'Online, POS, and social commerce managed together with live sync.' },
  ],
  expertTitle: 'Full-stack retail integration to lift operating efficiency',
  sections: [
    { title: 'Pre-launch brand setup', items: ['Payments & logistics integrations', 'Campaign landing pages', 'Bulk tools & Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Brand storefront prep' },
    { title: 'Sales & order management', items: ['Multi-channel selling', 'Products', 'Orders', 'Inventory'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'Sales and inventory ops' },
    { title: 'Fulfillment & after-sales', items: ['Message center', 'E-invoicing', 'Reconciliation tools'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Fulfillment and support' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const copy: Partial<Record<Locale, ShopEfficiencyCopy>> & { 'zh-TW': ShopEfficiencyCopy; en: ShopEfficiencyCopy } = {
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

export default function ShopEfficiencyPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

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
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.keysTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.keys.map((item) => (
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
          <h2 className="text-3xl font-black text-center mb-16" style={{ color: '#00142D' }}>{c.expertTitle}</h2>
          <div className="space-y-20">
            {c.sections.map((s, i) => (
              <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-4" style={{ color: '#00142D' }}>{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span style={{ color: '#5B5FF0' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
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
