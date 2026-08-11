'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type OnlineStoreCopy = {
  title: string
  subtitle: string
  cta: string
  noCodeTitle: string
  noCodeSubtitle: string
  noCodeItems: { title: string; desc: string }[]
  onePageTitle: string
  onePageSubtitle: string
  steps: { step: string; title: string; desc: string }[]
  ordersTitle: string
  ordersSubtitle: string
  orderFeatures: string[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: OnlineStoreCopy = {
  title: '網路開店超簡單\n立即開始你的網路生意',
  subtitle: '想開網路商店？開店一切所需都在 ARVIX，從商品上架、金物流串接到行銷推廣，一站就能輕鬆搞定。',
  cta: '立即免費試用',
  noCodeTitle: '免寫程式也能打造品牌官網',
  noCodeSubtitle: '直覺式介面，讓你輕鬆建立專業品牌網站，不需要任何程式知識。',
  noCodeItems: [
    { title: '拖曳方式編輯', desc: '透過拖曳排列方式，輕鬆完成網店頁面建置，無需任何程式語法。' },
    { title: '多樣設計主題', desc: '多款精美版型主題，一鍵套用，快速打造高質感品牌網店。' },
    { title: 'ARVIX Payments', desc: '內建金流服務，支援信用卡、電子支付等多元收款方式，安全便利。' },
  ],
  onePageTitle: '實現高轉單率\n用一頁商店衝刺業績',
  onePageSubtitle: '3 步驟打造超強導購一頁商店，讓顧客快速完成購買，大幅提升轉換率。',
  steps: [
    { step: 'STEP 1', title: '選擇版型', desc: '從多款一頁商店版型中選擇最適合你商品的設計。' },
    { step: 'STEP 2', title: '編輯內容', desc: '拖曳方式快速編排商品資訊、圖片與購買按鈕。' },
    { step: 'STEP 3', title: '發布上線', desc: '一鍵發布，立即開始接單，輕鬆衝刺業績。' },
  ],
  ordersTitle: '事半功倍\n網店最強訂單管理工具',
  ordersSubtitle: '色塊化區分訂單類別，讓訂單管理更直覺高效，提升出貨效率。',
  orderFeatures: ['色塊化區分訂單類別', '未完成購物車結帳提醒', '拆單功能', '彈性匯出訂單報表'],
  ctaTitle: 'ARVIX 為你的網路開店做好一切準備！',
  ctaSubtitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: OnlineStoreCopy = {
  title: '网络开店超简单\n立即开始你的网络生意',
  subtitle: '想开网络商店？开店一切所需都在 ARVIX，从商品上架、金物流对接到营销推广，一站就能轻松搞定。',
  cta: '立即免费试用',
  noCodeTitle: '免写程序也能打造品牌官网',
  noCodeSubtitle: '直觉式界面，让你轻松建立专业品牌网站，不需要任何程序知识。',
  noCodeItems: [
    { title: '拖曳方式编辑', desc: '通过拖曳排列方式，轻松完成网店页面建置，无需任何程序语法。' },
    { title: '多样设计主题', desc: '多款精美版型主题，一键套用，快速打造高质感品牌网店。' },
    { title: 'ARVIX Payments', desc: '内建支付服务，支持信用卡、电子支付等多元收款方式，安全便利。' },
  ],
  onePageTitle: '实现高转单率\n用一页商店冲刺业绩',
  onePageSubtitle: '3 步骤打造超强导购一页商店，让顾客快速完成购买，大幅提升转化率。',
  steps: [
    { step: 'STEP 1', title: '选择版型', desc: '从多款一页商店版型中选择最适合你商品的设计。' },
    { step: 'STEP 2', title: '编辑内容', desc: '拖曳方式快速编排商品信息、图片与购买按钮。' },
    { step: 'STEP 3', title: '发布上线', desc: '一键发布，立即开始接单，轻松冲刺业绩。' },
  ],
  ordersTitle: '事半功倍\n网店最强订单管理工具',
  ordersSubtitle: '色块化区分订单类别，让订单管理更直觉高效，提升出货效率。',
  orderFeatures: ['色块化区分订单类别', '未完成购物车结账提醒', '拆单功能', '弹性导出订单报表'],
  ctaTitle: 'ARVIX 为你的网络开店做好一切准备！',
  ctaSubtitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: OnlineStoreCopy = {
  title: 'Launch online. Keep it simple.\nStart selling today.',
  subtitle: 'Everything you need to open an online store — catalog, payments, logistics, and marketing — in one ARVIX hub.',
  cta: 'Start free trial',
  noCodeTitle: 'Build a brand site without code',
  noCodeSubtitle: 'An intuitive builder so anyone can launch a professional brand storefront.',
  noCodeItems: [
    { title: 'Drag-and-drop editing', desc: 'Arrange pages visually — no programming required.' },
    { title: 'Curated themes', desc: 'Apply polished themes in one click for a premium look.' },
    { title: 'ARVIX Payments', desc: 'Built-in payments for cards and e-wallets — secure and simple.' },
  ],
  onePageTitle: 'Higher conversion\nwith one-page stores',
  onePageSubtitle: 'Launch a high-converting landing store in three steps.',
  steps: [
    { step: 'STEP 1', title: 'Pick a layout', desc: 'Choose a one-page template that fits your product.' },
    { step: 'STEP 2', title: 'Edit content', desc: 'Drag in product info, images, and buy buttons.' },
    { step: 'STEP 3', title: 'Publish', desc: 'Go live in one click and start taking orders.' },
  ],
  ordersTitle: 'Order ops that scale\nwith your store',
  ordersSubtitle: 'Color-coded statuses keep fulfillment fast and clear.',
  orderFeatures: ['Color-coded order types', 'Abandoned cart reminders', 'Split orders', 'Flexible order exports'],
  ctaTitle: 'ARVIX is ready for your online store',
  ctaSubtitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, OnlineStoreCopy>> & { 'zh-TW': OnlineStoreCopy; en: OnlineStoreCopy } = {
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

export default function OnlineStorePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(244, 247, 252) 0%, rgb(122, 210, 254) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80" alt="ARVIX online store" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.noCodeTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.noCodeSubtitle}</p>
            <div className="space-y-4">
              {c.noCodeItems.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-semibold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="ARVIX drag-and-drop builder" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.onePageTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.onePageSubtitle}</p>
            <div className="space-y-4">
              {c.steps.map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="text-sm font-black px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0', color: '#fff' }}>{item.step}</span>
                  <div>
                    <span className="font-semibold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" alt="ARVIX one-page store" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.ordersTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.ordersSubtitle}</p>
            <div className="space-y-3">
              {c.orderFeatures.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX order management" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white mb-8 opacity-80">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
