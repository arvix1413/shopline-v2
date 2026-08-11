'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type OmoCopy = {
  title: string
  subtitle: string
  cta: string
  prosTitle: string
  pros: string[]
  marketTitle: string
  marketSubtitle: string
  firstVisitTitle: string
  steps1: { step: string; title: string; img: string; alt: string }[]
  revisitTitle: string
  steps2: { step: string; title: string; img: string; alt: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: OmoCopy = {
  title: 'OMO 全通路整合解決方案',
  subtitle: 'ARVIX 提供一站式的 OMO 全通路整合方案，讓實體店及網店無縫接軌，全面整合「通路x系統x數據」拓展新商機。實現線上線下零斷點體驗，精準打造個人化消費旅程。',
  cta: '立即免費試用',
  prosTitle: 'ARVIX OMO 3 大優點',
  pros: ['通路整合', '系統串接', '數據打通'],
  marketTitle: '市場最完整的 OMO 解決方案',
  marketSubtitle: '無縫串接全通路消費旅程！',
  firstVisitTitle: '消費者首次進入實體店\n3 步驟提升顧客註冊率與品牌黏著度',
  steps1: [
    { step: 'STEP 01', title: '新會員優惠 x 簡易註冊流程，快速提升會員數與 App 下載率', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 的簡易註冊流程搭配新會員優惠，讓你快速提升會員數與 App 下載率' },
    { step: 'STEP 02', title: '門市 POS 系統一站整合，線上、線下資料全面打通', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 提供完整線下整合方案，線上、線下資料全面打通' },
    { step: 'STEP 03', title: '顧客離店後持續互動不失聯，讓你線上導購零斷點', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'ARVIX 的多元功能讓顧客離店後持續互動不失聯，線上導購零斷點' },
  ],
  revisitTitle: '提升會員回訪率\n3 步驟幫你提升消費體驗與客單價',
  steps2: [
    { step: 'STEP 01', title: '線上無縫導流門市，會員回店再造商機', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 的「線上買門市取」、「分眾發送門市專屬優惠券」等功能，有效引導顧客從線上進入實體通路' },
    { step: 'STEP 02', title: '會員資訊一目瞭然，強化店員即時導購力', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 整合網店與實體店的會員資訊，讓你掌握會員輪廓、精準導購' },
    { step: 'STEP 03', title: '會員條碼一鍵展開，快速掃描結帳體驗再升級', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO 全通路整合解決方案' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: OmoCopy = {
  title: 'OMO 全渠道整合解决方案',
  subtitle: 'ARVIX 提供一站式的 OMO 全渠道整合方案，让实体店及网店无缝接轨，全面整合「渠道x系统x数据」拓展新商机。实现线上线下零断点体验，精准打造个性化消费旅程。',
  cta: '立即免费试用',
  prosTitle: 'ARVIX OMO 3 大优点',
  pros: ['渠道整合', '系统串接', '数据打通'],
  marketTitle: '市场最完整的 OMO 解决方案',
  marketSubtitle: '无缝串接全渠道消费旅程！',
  firstVisitTitle: '消费者首次进入实体店\n3 步骤提升顾客注册率与品牌黏着度',
  steps1: [
    { step: 'STEP 01', title: '新会员优惠 x 简易注册流程，快速提升会员数与 App 下载率', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'ARVIX 的简易注册流程搭配新会员优惠' },
    { step: 'STEP 02', title: '门店 POS 系统一站整合，线上、线下资料全面打通', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 提供完整线下整合方案' },
    { step: 'STEP 03', title: '顾客离店后持续互动不失联，让你线上导购零断点', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: '离店后持续互动，线上导购零断点' },
  ],
  revisitTitle: '提升会员回访率\n3 步骤帮你提升消费体验与客单价',
  steps2: [
    { step: 'STEP 01', title: '线上无缝导流门店，会员回店再造商机', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: '线上买门店取与门店专属优惠券' },
    { step: 'STEP 02', title: '会员信息一目了然，强化店员即时导购力', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: '整合网店与实体店会员信息' },
    { step: 'STEP 03', title: '会员条码一键展开，快速扫描结账体验再升级', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO 全渠道整合解决方案' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: OmoCopy = {
  title: 'OMO omnichannel integration',
  subtitle: 'One OMO stack that bridges stores and e‑commerce — channels, systems, and data — for a seamless personalized journey.',
  cta: 'Start free trial',
  prosTitle: 'Three OMO advantages',
  pros: ['Channel integration', 'System connectivity', 'Unified data'],
  marketTitle: 'The most complete OMO solution',
  marketSubtitle: 'A seamless omnichannel shopping journey',
  firstVisitTitle: 'First in-store visit\n3 steps to membership & brand stickiness',
  steps1: [
    { step: 'STEP 01', title: 'New-member offers + simple signup grow members & app installs', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Simple signup with new-member offers' },
    { step: 'STEP 02', title: 'Unified POS — online and offline data fully connected', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Offline integration with unified data' },
    { step: 'STEP 03', title: 'Stay engaged after they leave — zero friction online selling', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', alt: 'Continuous engagement after leaving the store' },
  ],
  revisitTitle: 'Lift revisit rate\n3 steps to better CX and AOV',
  steps2: [
    { step: 'STEP 01', title: 'Route online traffic to stores for repeat visits', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'BOPIS and store-exclusive coupons' },
    { step: 'STEP 02', title: 'Member profiles at a glance for real-time staff selling', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', alt: 'Unified member profiles across channels' },
    { step: 'STEP 03', title: 'One-tap member barcodes for faster scan checkout', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX OMO omnichannel solution' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const copy: Partial<Record<Locale, OmoCopy>> & { 'zh-TW': OmoCopy; en: OmoCopy } = {
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

export default function OmoPage() {
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
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.prosTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.pros.map((item) => (
              <div key={item} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-xl font-bold" style={{ color: '#00142D' }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.marketTitle}</h2>
          <p className="text-center mb-16" style={{ color: '#687280' }}>{c.marketSubtitle}</p>
          <h3 className="text-2xl font-black mb-10 text-center whitespace-pre-line" style={{ color: '#00142D' }}>{c.firstVisitTitle}</h3>
          <div className="space-y-16">
            {c.steps1.map((s, i) => (
              <div key={s.step + s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h4 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h4>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-black mb-10 text-center whitespace-pre-line" style={{ color: '#00142D' }}>{c.revisitTitle}</h3>
          <div className="space-y-16">
            {c.steps2.map((s, i) => (
              <div key={s.step + s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h4 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h4>
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
