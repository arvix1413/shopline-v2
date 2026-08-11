'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ConsultationCopy = {
  title: string
  subtitle: string
  cta: string
  stagesTitle: string
  stages: { title: string; desc: string }[]
  featuresTitle: string
  featuresSubtitle: string
  features: { title: string; desc: string }[]
  subsidyTitle: string
  subsidies: { title: string; sub: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: ConsultationCopy = {
  title: '零售開店大小事，讓 ARVIX 專家來幫你！',
  subtitle: '專業顧問一對一解答開店疑難雜症！從數位轉型到全通路整合，立即預約免費專人諮詢，開啟你的電商生意。',
  cta: '立即預約免費諮詢',
  stagesTitle: '你正處於哪個階段？',
  stages: [
    { title: '數位轉型', desc: '想從傳統零售拓展到線上通路，放大客群' },
    { title: '營收突破', desc: '想突破品牌的成長瓶頸，更精準找到對的顧客' },
    { title: '全通路經營', desc: '想要 OMO 整合，打造虛實融合的無縫購物體驗' },
    { title: '自動化管理', desc: '想提升營運效率，有效降低管理及人力成本' },
  ],
  featuresTitle: '全方位零售解決方案',
  featuresSubtitle: 'ARVIX 提供全方位零售解決方案，橫跨電商與實體通路，不管是從實體店做數位轉型還是網店拓展線下新商機，全面支援你所有需求。',
  features: [
    { title: '免寫程式快速打造高質感品牌購物網站', desc: '不用複雜的程式語法，透過拖曳排列方式與一鍵套用設計主題，你也能在短時間內打造高質感的專屬品牌網店！' },
    { title: '告別資訊碎片化一站式整合全通路零售生意', desc: '透過 ARVIX 一站整合社群商務、品牌 APP、與實體 POS 數據全面打通，實現真正的會員導購與全通路營收。' },
    { title: '精準掌握第一方數據有效提升品牌回購率與業績', desc: '深度洞察顧客行為並結合多種彈性優惠玩法與自動化行銷推播，做出品牌差異化，大幅提升 CRM 經營成效。' },
    { title: '用 AI 智慧助攻轉換率', desc: '一鍵就能啟用！ARVIX「AI 智慧商品推薦 PLUS」透過 AI 演算法深度學習分析消費偏好，自動呈現個人化推薦商品清單，協助商家提升整體轉單率與客單價！' },
  ],
  subsidyTitle: '補助、資源一次到位！ARVIX 祭出總價值超過 20 萬補貼',
  subsidies: [
    { title: '新簽約用戶最高可享運費補助金', sub: '5 折優惠再送 SSL 網站資安加密 (價值 NT$3000)' },
    { title: '現在起購買開店方案最高享', sub: '價值超過 NT$ 85,000 再送破萬價值的產業數據報告' },
    { title: '專屬電商課程超過 40 個精選主題', sub: '限量名額顧問陪跑計劃享' },
  ],
  ctaTitle: '商家好評推薦\n全球超過 60 萬品牌已使用 ARVIX',
  ctaSubtitle: '與 ARVIX 專業顧問進行一對一免費電話諮詢！',
}

const zhCN: ConsultationCopy = {
  title: '零售开店大小事，让 ARVIX 专家来帮你！',
  subtitle: '专业顾问一对一解答开店疑难杂症！从数字转型到全渠道整合，立即预约免费专人咨询，开启你的电商生意。',
  cta: '立即预约免费咨询',
  stagesTitle: '你正处于哪个阶段？',
  stages: [
    { title: '数字转型', desc: '想从传统零售拓展到线上渠道，放大客群' },
    { title: '营收突破', desc: '想突破品牌的成长瓶颈，更精准找到对的顾客' },
    { title: '全渠道经营', desc: '想要 OMO 整合，打造虚实融合的无缝购物体验' },
    { title: '自动化管理', desc: '想提升运营效率，有效降低管理及人力成本' },
  ],
  featuresTitle: '全方位零售解决方案',
  featuresSubtitle: 'ARVIX 提供全方位零售解决方案，横跨电商与实体渠道，不管是从实体店做数字转型还是网店拓展线下新商机，全面支持你所有需求。',
  features: [
    { title: '免写程序快速打造高质感品牌购物网站', desc: '不用复杂的程序语法，通过拖曳排列与一键套用设计主题，你也能在短时间内打造高质感的专属品牌网店！' },
    { title: '告别信息碎片化一站式整合全渠道零售生意', desc: '通过 ARVIX 一站整合社群商务、品牌 APP、与实体 POS 数据全面打通，实现真正的会员导购与全渠道营收。' },
    { title: '精准掌握第一方数据有效提升品牌回购率与业绩', desc: '深度洞察顾客行为并结合多种弹性优惠玩法与自动化营销推送，做出品牌差异化，大幅提升 CRM 经营成效。' },
    { title: '用 AI 智慧助攻转化率', desc: '一键就能启用！ARVIX「AI 智慧商品推荐 PLUS」通过 AI 算法深度学习分析消费偏好，自动呈现个性化推荐商品清单，协助商家提升整体转单率与客单价！' },
  ],
  subsidyTitle: '补助、资源一次到位！ARVIX 祭出总价值超过 20 万补贴',
  subsidies: [
    { title: '新签约用户最高可享运费补助金', sub: '5 折优惠再送 SSL 网站资安加密 (价值 NT$3000)' },
    { title: '现在起购买开店方案最高享', sub: '价值超过 NT$ 85,000 再送破万价值的产业数据报告' },
    { title: '专属电商课程超过 40 个精选主题', sub: '限量名额顾问陪跑计划享' },
  ],
  ctaTitle: '商家好评推荐\n全球超过 60 万品牌已使用 ARVIX',
  ctaSubtitle: '与 ARVIX 专业顾问进行一对一免费电话咨询！',
}

const en: ConsultationCopy = {
  title: 'Retail launch questions? ARVIX experts can help.',
  subtitle: 'One-on-one advisors for everything from digital transformation to omnichannel. Book a free consult and start selling.',
  cta: 'Book a free consult',
  stagesTitle: 'Where are you today?',
  stages: [
    { title: 'Digital transformation', desc: 'Expand traditional retail online and grow your audience' },
    { title: 'Revenue breakthrough', desc: 'Break growth ceilings and find the right customers' },
    { title: 'Omnichannel ops', desc: 'Unify OMO for a seamless online–offline experience' },
    { title: 'Automation', desc: 'Raise efficiency and cut management overhead' },
  ],
  featuresTitle: 'Full-stack retail solutions',
  featuresSubtitle: 'ARVIX covers ecommerce and physical retail — whether you digitize stores or expand online brands offline.',
  features: [
    { title: 'No-code brand storefronts', desc: 'Drag-and-drop layouts and one-click themes help you launch a polished brand store fast.' },
    { title: 'One hub for omnichannel commerce', desc: 'Connect social commerce, brand apps, and POS data for true membership-driven revenue.' },
    { title: 'First-party data that drives repurchase', desc: 'Understand behavior, run flexible offers, and automate outreach to lift CRM results.' },
    { title: 'AI that lifts conversion', desc: 'Enable AI product recommendations that personalize catalogs and raise AOV and conversion.' },
  ],
  subsidyTitle: 'Credits & resources in one place — over NT$200K in value',
  subsidies: [
    { title: 'Shipping credits for new contracts', sub: '50% off plus SSL encryption (value NT$3,000)' },
    { title: 'Launch plan bonuses', sub: 'Over NT$85,000 in value plus industry reports' },
    { title: '40+ ecommerce course topics', sub: 'Limited advisor coaching seats' },
  ],
  ctaTitle: 'Loved by merchants\n600,000+ brands use ARVIX',
  ctaSubtitle: 'Book a free one-on-one phone consult with an ARVIX advisor.',
}

const copy: Partial<Record<Locale, ConsultationCopy>> & { 'zh-TW': ConsultationCopy; en: ConsultationCopy } = {
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

export default function ConsultationPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #EEF0FF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg mb-10" style={{ color: '#687280' }}>{c.subtitle}</p>
          <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.stagesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.stages.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E0E3E8', backgroundColor: '#F8FAFC' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{s.title}</h3>
                <p style={{ color: '#687280' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.featuresTitle}</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>{c.featuresSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="text-base font-bold mb-3" style={{ color: '#00142D' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.subsidyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {c.subsidies.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4 whitespace-pre-line">{c.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
