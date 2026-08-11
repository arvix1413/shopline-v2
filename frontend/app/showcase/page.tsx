'use client'
import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ShowcaseCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  ctaButton: string
  categories: { slug: string; label: string }[]
  cases: { brand: string; category: string; result: string; desc: string }[]
}

const zhTW: ShowcaseCopy = {
  title: '精選品牌案例',
  subtitle: 'ARVIX 商家的真實成功案例，一站實現品牌全通路整合！',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaButton: '立即免費試用',
  categories: [
    { slug: 'all', label: '全部' },
    { slug: 'fashion-brand', label: '流行時尚' },
    { slug: 'beauty-health-brand', label: '美妝保養' },
    { slug: 'food-beverage-brand', label: '食品飲料' },
    { slug: 'health-and-supplements', label: '保健食品' },
    { slug: 'lifestyle-brand', label: '生活居家' },
    { slug: 'pets', label: '寵物用品' },
    { slug: 'electronics-brand', label: '家電 3C' },
    { slug: 'sport-outdoor-brand', label: '戶外運動' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: '自辦預購募近 2000 萬', desc: '靠群募聚人氣，網購流量難搶也能突圍' },
    { brand: '好好生醫', category: 'health-and-supplements', result: '分眾行銷帶動回購成長近五成', desc: '佈局 OMO 玩轉社群行銷，奪傑出品牌風格大賞' },
    { brand: 'CAMPFIRE 營火部落', category: 'sport-outdoor-brand', result: '千萬營收', desc: '結合電商與 YouTube 實現戶外生活理想' },
    { brand: 'NISORO 康鮮', category: 'food-beverage-brand', result: '6 成轉換率', desc: '遊戲助攻，互動式行銷打造雙贏顧客體驗' },
    { brand: 'Story Wear', category: 'fashion-brand', result: '永續共好新篇章', desc: '攜手腦麻協會，以設計傳遞行動的力量' },
    { brand: 'VERVE', category: 'fashion-brand', result: '雙位數成長', desc: 'AI 行銷生態圈助攻，beBit TECH 與 ARVIX 聯手' },
    { brand: '古北町', category: 'food-beverage-brand', result: '雙位數成長', desc: 'AI 洞察策略精準觸達目標客群' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: '超強轉換引擎', desc: '告別行銷燒錢戰，打造零售電商轉換新模式' },
    { brand: 'Aromase 艾瑪絲', category: 'beauty-health-brand', result: '團購創下單日銷售 2,500 瓶', desc: '使用獨立分潤賣場開團，創下單日銷售 2,500 瓶商品' },
    { brand: 'OMO 品牌', category: 'fashion-brand', result: 'OMO 佈局實現破億營收', desc: '分眾行銷讓我們可以根據每一個消費者輪廓與行為模式進行分群，提升轉換率' },
    { brand: '保健品牌', category: 'health-and-supplements', result: '專案期間流量成長近 150%、回購與業績更成長了近 600%', desc: 'ARVIX 顧問陪跑計劃協助品牌在各項細節上的優化' },
    { brand: '食品品牌', category: 'food-beverage-brand', result: '團購一週內銷量近 600 組', desc: '合作夥伴成效中心讓團購主隨時自行查看銷售表現' },
    { brand: '3C 品牌', category: 'electronics-brand', result: '團購與募資總銷量破三百萬業績', desc: '募資元件讓品牌在官網建立類似群募平台的銷售頁面' },
    { brand: '美妝品牌', category: 'beauty-health-brand', result: '新品預購兩個月達 400 萬業績', desc: '頁面編輯器能用拖曳的方式自由排版，效率更高' },
    { brand: '保健訂閱品牌', category: 'health-and-supplements', result: '「定期購業績」有逐月成長趨勢', desc: '透過「ARVIX 定期購」省去客人下單的作業流程' },
    { brand: '直播品牌', category: 'lifestyle-brand', result: '雙 12 檔期直播創下百萬銷售', desc: 'LINE 直播+1 的串接讓直播結帳的流程更加順暢' },
    { brand: 'App 品牌', category: 'fashion-brand', result: 'App 業績與訂單成長將近 2 倍', desc: '品牌建立 App 可穩定透過推播與顧客互動，提升品牌黏著度' },
  ],
}

const zhCN: ShowcaseCopy = {
  ...zhTW,
  title: '精选品牌案例',
  subtitle: 'ARVIX 商家的真实成功案例，一站实现品牌全渠道整合！',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaButton: '立即免费试用',
  categories: [
    { slug: 'all', label: '全部' },
    { slug: 'fashion-brand', label: '流行时尚' },
    { slug: 'beauty-health-brand', label: '美妆保养' },
    { slug: 'food-beverage-brand', label: '食品饮料' },
    { slug: 'health-and-supplements', label: '保健食品' },
    { slug: 'lifestyle-brand', label: '生活居家' },
    { slug: 'pets', label: '宠物用品' },
    { slug: 'electronics-brand', label: '家电 3C' },
    { slug: 'sport-outdoor-brand', label: '户外运动' },
  ],
}

const en: ShowcaseCopy = {
  title: 'Featured brand stories',
  subtitle: 'Real ARVIX merchant wins — omnichannel growth in one platform.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaButton: 'Start free trial',
  categories: [
    { slug: 'all', label: 'All' },
    { slug: 'fashion-brand', label: 'Fashion' },
    { slug: 'beauty-health-brand', label: 'Beauty' },
    { slug: 'food-beverage-brand', label: 'Food & drink' },
    { slug: 'health-and-supplements', label: 'Supplements' },
    { slug: 'lifestyle-brand', label: 'Lifestyle' },
    { slug: 'pets', label: 'Pets' },
    { slug: 'electronics-brand', label: 'Electronics' },
    { slug: 'sport-outdoor-brand', label: 'Outdoor' },
  ],
  cases: [
    { brand: 'XROUND', category: 'electronics-brand', result: 'Nearly NT$20M in pre-orders', desc: 'Crowdfunding momentum that broke through crowded ecommerce traffic' },
    { brand: '好好生醫', category: 'health-and-supplements', result: 'Repurchase up ~50% via segmentation', desc: 'OMO + social marketing that won brand style awards' },
    { brand: 'CAMPFIRE', category: 'sport-outdoor-brand', result: 'NT$10M+ revenue', desc: 'Ecommerce + YouTube for outdoor lifestyle brands' },
    { brand: 'NISORO', category: 'food-beverage-brand', result: '60% conversion', desc: 'Gamified interactive marketing that customers love' },
    { brand: 'Story Wear', category: 'fashion-brand', result: 'Sustainability chapter', desc: 'Design with purpose alongside community partners' },
    { brand: 'VERVE', category: 'fashion-brand', result: 'Double-digit growth', desc: 'AI marketing ecosystem with beBit TECH + ARVIX' },
    { brand: '古北町', category: 'food-beverage-brand', result: 'Double-digit growth', desc: 'AI insights that reach the right audience' },
    { brand: 'Bello Store', category: 'lifestyle-brand', result: 'Conversion engine', desc: 'Retail ecommerce conversion without burning ad spend' },
    { brand: 'Aromase', category: 'beauty-health-brand', result: '2,500 bottles in a day', desc: 'Independent affiliate storefront for group buys' },
    { brand: 'OMO Brand', category: 'fashion-brand', result: 'NT$100M+ via OMO', desc: 'RFIM segmentation by shopper profiles and behavior' },
    { brand: 'Wellness brand', category: 'health-and-supplements', result: 'Traffic +150%, sales +600%', desc: 'Advisor coaching that optimized every detail' },
    { brand: 'Food brand', category: 'food-beverage-brand', result: '~600 sets in a week', desc: 'Partner performance hub for group-buy hosts' },
    { brand: '3C brand', category: 'electronics-brand', result: 'NT$3M+ from campaigns', desc: 'Crowdfunding-style pages on the brand site' },
    { brand: 'Beauty brand', category: 'beauty-health-brand', result: 'NT$4M in two months', desc: 'Drag-and-drop page editor for faster launches' },
    { brand: 'Subscription brand', category: 'health-and-supplements', result: 'Growing subscription GMV', desc: 'ARVIX subscriptions that remove reorder friction' },
    { brand: 'Live brand', category: 'lifestyle-brand', result: 'NT$1M+ Double 12 live sales', desc: 'LINE Live +1 checkout that feels effortless' },
    { brand: 'App brand', category: 'fashion-brand', result: 'App orders nearly 2x', desc: 'Push-driven brand apps that deepen loyalty' },
  ],
}

const copy: Partial<Record<Locale, ShowcaseCopy>> & { 'zh-TW': ShowcaseCopy; en: ShowcaseCopy } = {
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

export default function ShowcasePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? c.cases : c.cases.filter(item => item.category === active)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {c.categories.map((cat) => (
              <button key={cat.slug} onClick={() => setActive(cat.slug)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={active === cat.slug
                  ? { backgroundColor: '#5B5FF0', color: 'white' }
                  : { backgroundColor: '#F4F7FC', color: '#687280' }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={`${item.brand}-${item.result}`} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-xs font-bold mb-3 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>
                  {c.categories.find(cat => cat.slug === item.category)?.label}
                </div>
                <h3 className="text-xl font-bold mt-2 mb-2" style={{ color: '#00142D' }}>{item.brand}</h3>
                <h4 className="text-lg font-black mb-3" style={{ color: '#5B5FF0' }}>{item.result}</h4>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
