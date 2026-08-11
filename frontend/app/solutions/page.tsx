'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SolutionsCopy = {
  title: string
  subtitle: string
  cta: string
  stats: { label: string; num: string; unit: string; sub: string }[]
  problemsTitle: string
  problems: { title: string; desc: string }[]
  learnMore: string
  ctaTitle: string
  ctaSubtitle: string
  questionsTitle: string
  questionsSubtitle: string
  bookConsult: string
  solutions: {
    title: string
    subtitle: string
    desc: string
    items: { title: string; desc: string }[]
    href: string
    img: string
  }[]
}

const zhTW: SolutionsCopy = {
  title: '全方位零售解決方案\nOMO 虛實整合再進化',
  subtitle: 'ARVIX 提供全方位零售解決方案，橫跨電商與實體通路，打造無縫購物體驗，從新創到國際級品牌都能輕鬆擴展市場版圖！',
  cta: '立即免費試用',
  stats: [
    { label: '整合全通路開店一切所需', num: '5', unit: '大', sub: '解決方案' },
    { label: '使用 ARVIX', num: '60', unit: '萬+', sub: '商家使用' },
    { label: '全面助力商家業績成長', num: '3', unit: '倍', sub: '營收成長' },
  ],
  problemsTitle: '你開店時是否也遇到以下問題',
  problems: [
    { title: '全通路整合成本太高', desc: '整合全通路太困難、管理成本又高，有節省成本又高效的方式來佈局全通路嗎？' },
    { title: '顧客數據難以取得', desc: '無法取得新舊客相關數據，要如何掌握流量和數據並從中洞察到重要商機？' },
    { title: '無法突破業績天花板', desc: '業績成長遇到瓶頸，如何找到新的增長點並突破現有的業績天花板？' },
  ],
  learnMore: '了解更多',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
  questionsTitle: '有疑問嗎？',
  questionsSubtitle: '我們的專業顧問團隊隨時為你解答，協助你找到最適合的解決方案',
  bookConsult: '預約免費諮詢',
  solutions: [
    {
      title: '流量獲取與轉換解決方案', subtitle: '流量轉換一氣呵成',
      desc: '跨場景流量覆蓋 x 流量轉換工具 x 一站式整合服務，協助商家突破流量天花板，輕輕鬆鬆流量變現、提升轉換！',
      items: [
        { title: '跨場景流量覆蓋', desc: '面對社群、官網到門市等不同銷售場景，助商家打破流量破碎障礙，實現自動化整合！' },
        { title: '流量轉換工具', desc: '多元行銷工具組合，從廣告投放到社群導購，全面提升流量轉換效率。' },
        { title: '一站式整合服務', desc: '整合所有流量來源，統一管理，讓每一分流量都能發揮最大價值。' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO 全通路整合解決方案', subtitle: '低成本高效率',
      desc: '不管是從實體店做數位轉型還是網店拓展線下新商機，皆能透過「系統、通路、數據」三大核心的整合，創造零斷點的 OMO 全通路生意。',
      items: [
        { title: '通路整合', desc: '線上網店、線下 POS 一站式全面整合，輔以 Smart OMO、品牌會員購物 App 工具打造流暢的跨通路消費體驗！' },
        { title: '數據整合', desc: '整合線上線下所有消費數據，建立完整的顧客輪廓，讓每個決策都有數據支撐。' },
        { title: '系統整合', desc: '串接 ERP、CRM 等企業系統，打通所有業務流程，實現真正的全通路管理。' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: '商店營運效率解決方案', subtitle: '降本增效超 EASY',
      desc: 'ARVIX 全面支援商家在「品牌開店前置作業」、「銷售與訂單管理」及「出貨及售後服務」過程中，有效節省人力成本、加強營運效率！',
      items: [
        { title: '品牌開店前置作業', desc: '協助商家在大量商品管理、金物流串接及多通路銷售等，一站搞定所有流程，省時又省力。' },
        { title: '銷售與訂單管理', desc: '色塊化區分訂單類別，讓訂單管理更直覺高效，未完成購物車自動提醒，提升結帳轉換率。' },
        { title: '出貨及售後服務', desc: '整合多家物流商，自動化出貨流程，售後服務一站管理，提升顧客滿意度。' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: '會員回購解決方案', subtitle: '打造顧客循環回購',
      desc: '想打造專屬品牌網店的會員經營閉環？從精準顧客分眾、活動優惠玩法到自動化推播系統，ARVIX 幫助品牌打造高回購閉環，提升客戶終身價值！',
      items: [
        { title: '精準分群，圈出目標受眾', desc: '多種分級玩法 x ARVIX 獨家 RFIM 價值模型，透過獨家數據演算出 9 大智慧顧客分群，讓你精準找到可驅動回購的消費輪廓和樣貌。' },
        { title: '多元優惠，驅動會員回購力', desc: '點數、折扣、會員專屬優惠多元組合，讓顧客每次都有回購的理由。' },
        { title: '自動推播，輕鬆擴大觸及', desc: '設定自動化行銷流程，在對的時間推送對的訊息，輕鬆擴大觸及範圍。' },
        { title: '洞察數據，掌握會員喜好', desc: '深度分析會員行為數據，掌握每位顧客的喜好，讓行銷更精準有效。' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: '數據賦能解決方案', subtitle: '加速洞察驅動成長',
      desc: '告別低效數據圖表！ARVIX 整合第一方數據，精煉「人」、「貨」、「場」三大指標數據，搭配顧問服務與產業趨勢報告，助你洞察市場、加速決策、提升業績！',
      items: [
        { title: '人', desc: '有貨還要能賣給對的人！Shoplytics 提供顧客輪廓與行為分析搭配 RFIM 智慧分群，助你精準鎖定目標受眾，賣得更好！' },
        { title: '貨', desc: '掌握商品銷售趨勢，精準選品補貨，讓每件商品都能發揮最大銷售潛力。' },
        { title: '場', desc: '分析各通路銷售效益，優化資源配置，讓每個銷售場景都能創造最大價值。' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const zhCN: SolutionsCopy = {
  ...zhTW,
  title: '全方位零售解决方案\nOMO 虚实整合再进化',
  subtitle: 'ARVIX 提供全方位零售解决方案，横跨电商与实体渠道，打造无缝购物体验，从新创到国际级品牌都能轻松扩展市场版图！',
  cta: '立即免费试用',
  problemsTitle: '你开店时是否也遇到以下问题',
  learnMore: '了解更多',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
  questionsTitle: '有疑问吗？',
  questionsSubtitle: '我们的专业顾问团队随时为你解答，协助你找到最适合的解决方案',
  bookConsult: '预约免费咨询',
}

const en: SolutionsCopy = {
  title: 'Full-stack retail solutions\nOMO, evolved',
  subtitle: 'ARVIX spans ecommerce and physical retail so startups and global brands can expand with a seamless shopping experience.',
  cta: 'Start free trial',
  stats: [
    { label: 'Everything for omnichannel launch', num: '5', unit: '', sub: 'core solutions' },
    { label: 'Powered by ARVIX', num: '600', unit: 'K+', sub: 'merchants' },
    { label: 'Built to grow revenue', num: '3', unit: 'x', sub: 'growth potential' },
  ],
  problemsTitle: 'Sound familiar when you launch a store?',
  problems: [
    { title: 'Omnichannel costs too much', desc: 'Unifying channels is hard and expensive — is there a leaner way?' },
    { title: 'Customer data is hard to get', desc: 'Without new and returning shopper data, how do you find the next opportunity?' },
    { title: 'Revenue hits a ceiling', desc: 'Growth stalls — where is the next unlock?' },
  ],
  learnMore: 'Learn more',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
  questionsTitle: 'Questions?',
  questionsSubtitle: 'Our advisors can help you pick the right solution',
  bookConsult: 'Book a free consult',
  solutions: [
    {
      title: 'Traffic & conversion', subtitle: 'Turn traffic into revenue',
      desc: 'Cross-channel coverage, conversion tools, and one hub to break traffic ceilings.',
      items: [
        { title: 'Cross-channel coverage', desc: 'Unify social, site, and store traffic without fragmentation.' },
        { title: 'Conversion toolkit', desc: 'Ads to social shopping — tools that lift conversion.' },
        { title: 'One integration layer', desc: 'Manage every source so each visit works harder.' },
      ],
      href: '/solutions/traffic-and-conversion',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
      title: 'OMO omnichannel', subtitle: 'Lower cost, higher efficiency',
      desc: 'Whether you digitize stores or expand online brands offline, unify systems, channels, and data.',
      items: [
        { title: 'Channel integration', desc: 'Online store + POS with Smart OMO and member apps.' },
        { title: 'Data integration', desc: 'One customer profile across online and offline.' },
        { title: 'System integration', desc: 'Connect ERP/CRM and run true omnichannel ops.' },
      ],
      href: '/solutions/omo',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    {
      title: 'Store operations', subtitle: 'Cut cost, raise efficiency',
      desc: 'From launch prep to orders and after-sales — save labor and move faster.',
      items: [
        { title: 'Launch prep', desc: 'Catalog, payments, logistics, and multi-channel sales in one place.' },
        { title: 'Sales & orders', desc: 'Color-coded orders and cart reminders that lift checkout.' },
        { title: 'Fulfillment & support', desc: 'Automate shipping and centralize after-sales.' },
      ],
      href: '/solutions/shop-efficiency',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    },
    {
      title: 'Member repurchase', subtitle: 'Build the repurchase loop',
      desc: 'Segmentation, offers, and automated messaging that raise lifetime value.',
      items: [
        { title: 'Precise segments', desc: 'RFIM-powered smart cohorts that drive repurchase.' },
        { title: 'Flexible rewards', desc: 'Points, discounts, and member-only perks.' },
        { title: 'Automated outreach', desc: 'Send the right message at the right time.' },
        { title: 'Member insights', desc: 'Understand preferences and market with precision.' },
      ],
      href: '/solutions/member-repurchase',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
    },
    {
      title: 'Data empowerment', subtitle: 'Insights that drive growth',
      desc: 'First-party data across people, products, and places — plus advisors and industry reports.',
      items: [
        { title: 'People', desc: 'Shoplytics + RFIM to reach the right buyers.' },
        { title: 'Products', desc: 'Track sell-through and restock what wins.' },
        { title: 'Places', desc: 'Compare channel ROI and allocate smarter.' },
      ],
      href: '/solutions/data-analysis',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
  ],
}

const copy: Partial<Record<Locale, SolutionsCopy>> & { 'zh-TW': SolutionsCopy; en: SolutionsCopy } = {
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

export default function SolutionsPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <img src="/hero-decoration.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white whitespace-pre-line">{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.cta}</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80" alt="ARVIX solutions" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(rgb(11, 37, 100) 0%, rgb(0, 20, 45) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
            {c.stats.map((s) => (
              <li key={s.sub} className="flex flex-col gap-2">
                <span className="text-sm opacity-70">{s.label}</span>
                <div className="flex items-end gap-1">
                  <span className="text-7xl font-black leading-none">{s.num}</span>
                  <span className="text-3xl font-bold mb-2">{s.unit}</span>
                </div>
                <span className="text-sm opacity-70">{s.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'rgb(28, 39, 94)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12 text-white">{c.problemsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {c.problems.map((p) => (
              <div key={p.title} className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <h3 className="text-lg font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {c.solutions.map((s, i) => (
              <div key={s.href} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-10 bg-white rounded-2xl p-8 shadow-sm`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-1" style={{ color: '#5B5FF0' }}>{s.subtitle}</div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: '#00142D' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#687280' }}>{s.desc}</p>
                  <div className="space-y-4 mb-6">
                    {s.items.map(item => (
                      <div key={item.title} className="flex gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#5B5FF0' }}>✓</span>
                        <div>
                          <h3 className="text-sm font-bold mb-0.5" style={{ color: '#00142D' }}>{item.title}</h3>
                          <p className="text-xs leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={s.href} className="inline-block text-sm font-semibold px-6 py-2 rounded-full border-2 hover:bg-[#5B5FF0] hover:text-white transition-colors" style={{ borderColor: '#5B5FF0', color: '#5B5FF0' }}>{c.learnMore}</Link>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={"ARVIX " + s.title} className="w-full rounded-xl" />
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

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-4" style={{ color: '#00142D' }}>{c.questionsTitle}</h2>
          <p className="mb-6" style={{ color: '#687280' }}>{c.questionsSubtitle}</p>
          <a href="/trial-redirect" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>{c.bookConsult}</a>
        </div>
      </section>
    </main>
  )
}
