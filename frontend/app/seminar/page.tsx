'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SeminarCopy = {
  title: string
  subtitle: string
  cta: string
  whoTitle: string
  audience: { title: string; desc: string }[]
  learnTitle: string
  topics: { title: string; desc: string }[]
  subsidyTitle: string
  subsidies: { title: string; sub: string }[]
  ctaTitle: string
}

const zhTW: SeminarCopy = {
  title: '全通路開店講座',
  subtitle: '全通路開店講座 — 專業顧問解析零售開店趨勢，一次掌握數位轉型所有秘訣',
  cta: '立即報名免費講座',
  whoTitle: '講座適合誰？',
  audience: [
    { title: '我有商品，不想只在各大商城平台販售', desc: '建立專屬品牌官網，一手掌握會員、數據及流量' },
    { title: '常開團購，但都用私訊、留言人工統計收單', desc: '團購變現不再只靠 Excel，告訴你快速開團的技巧' },
    { title: '經營 IG、FB 及 LINE 多個社群耗時又難轉換', desc: '拆解社群消費行為，提升互動黏著度外還能導購' },
    { title: '有店面想進軍線上通路，想整合實體及網路門市', desc: '一站就能實現 OMO 全通路，實體 x 網店流量雙向導流' },
  ],
  learnTitle: '參加講座，你將學會這些開店關鍵',
  topics: [
    { title: '快速建立網路商店', desc: 'ARVIX 提供超過 20 種商店版型，並支援信用卡、電子支付等多元金流服務，完整電商功能一次到位。' },
    { title: '打造高回購會員經營系統', desc: '不只是會賣！更要讓顧客回來！從會員分級、分眾優惠設定到自動化推播，教你打造持續變現的會員經營閉環。' },
    { title: '用數據驅動品牌成長', desc: '視覺化報表、多種專業分析報告到商品潛力預測，透過完整數據洞察優化行銷效益，讓你看懂數據、用對數據！' },
    { title: '多管道流量整合', desc: '社群、官網、團購、門市…等多元流量來源也能輕鬆管控。為你整合多管道流量，讓每一筆流量都能有效變現。' },
    { title: '掌握全通路整合心法', desc: 'ARVIX 透過「系統、通路、數據」三大核心整合，實體 x 網店流量雙向導流，實現 OMO 全通路模式。' },
  ],
  subsidyTitle: '補助、資源一次到位！ARVIX 祭出總價值超過 20 萬補貼',
  subsidies: [
    { title: '新簽約用戶最高可享運費補助金', sub: '5 折優惠再送 SSL 網站資安加密 (價值 NT$3000)' },
    { title: '現在起購買開店方案最高享', sub: '價值超過 NT$ 85,000 再送破萬價值的產業數據報告' },
    { title: '專屬電商課程超過 40 個精選主題', sub: '限量名額顧問陪跑計劃享' },
  ],
  ctaTitle: '商家好評推薦\n全球超過 60 萬品牌使用 ARVIX',
}

const zhCN: SeminarCopy = {
  title: '全渠道开店讲座',
  subtitle: '全渠道开店讲座 — 专业顾问解析零售开店趋势，一次掌握数字转型所有秘诀',
  cta: '立即报名免费讲座',
  whoTitle: '讲座适合谁？',
  audience: [
    { title: '我有商品，不想只在各大商城平台贩售', desc: '建立专属品牌官网，一手掌握会员、数据及流量' },
    { title: '常开团购，但都用私信、留言人工统计收单', desc: '团购变现不再只靠 Excel，告诉你快速开团的技巧' },
    { title: '经营 IG、FB 及 LINE 多个社群耗时又难转化', desc: '拆解社群消费行为，提升互动粘着度外还能导购' },
    { title: '有店面想进军线上渠道，想整合实体及网络门店', desc: '一站就能实现 OMO 全渠道，实体 x 网店流量双向导流' },
  ],
  learnTitle: '参加讲座，你将学会这些开店关键',
  topics: [
    { title: '快速建立网络商店', desc: 'ARVIX 提供超过 20 种商店版型，并支持信用卡、电子支付等多元支付服务，完整电商功能一次到位。' },
    { title: '打造高回购会员经营系统', desc: '不只是会卖！更要让顾客回来！从会员分级、分众优惠设定到自动化推播，教你打造持续变现的会员经营闭环。' },
    { title: '用数据驱动品牌成长', desc: '可视化报表、多种专业分析报告到商品潜力预测，通过完整数据洞察优化营销效益，让你看懂数据、用对数据！' },
    { title: '多渠道流量整合', desc: '社群、官网、团购、门店…等多元流量来源也能轻松管控。为你整合多渠道流量，让每一笔流量都能有效变现。' },
    { title: '掌握全渠道整合心法', desc: 'ARVIX 通过「系统、渠道、数据」三大核心整合，实体 x 网店流量双向导流，实现 OMO 全渠道模式。' },
  ],
  subsidyTitle: '补助、资源一次到位！ARVIX 祭出总价值超过 20 万补贴',
  subsidies: [
    { title: '新签约用户最高可享运费补助金', sub: '5 折优惠再送 SSL 网站资安加密 (价值 NT$3000)' },
    { title: '现在起购买开店方案最高享', sub: '价值超过 NT$ 85,000 再送破万价值的产业数据报告' },
    { title: '专属电商课程超过 40 个精选主题', sub: '限量名额顾问陪跑计划享' },
  ],
  ctaTitle: '商家好评推荐\n全球超过 60 万品牌使用 ARVIX',
}

const en: SeminarCopy = {
  title: 'Omnichannel retail seminar',
  subtitle: 'Expert advisors unpack retail trends so you master digital transformation in one session',
  cta: 'Register for free',
  whoTitle: 'Who is this for?',
  audience: [
    { title: 'I sell products but want more than marketplaces', desc: 'Build a brand site and own members, data, and traffic' },
    { title: 'I run group buys via DMs and comments', desc: 'Stop living in spreadsheets — learn faster group-buy ops' },
    { title: 'IG, FB, and LINE take time with low conversion', desc: 'Decode social buying behavior and turn engagement into sales' },
    { title: 'I have a store and want online + offline together', desc: 'Launch OMO in one place with two-way traffic between store and site' },
  ],
  learnTitle: 'What you will learn',
  topics: [
    { title: 'Launch an online store fast', desc: '20+ themes plus cards and e-wallets — a complete commerce stack.' },
    { title: 'Build a high-repurchase loyalty system', desc: 'From tiers and segment offers to automated pushes — a loop that keeps converting.' },
    { title: 'Grow with data', desc: 'Visual reports, analytics, and product potential insights so you act on the right numbers.' },
    { title: 'Unify multi-channel traffic', desc: 'Social, site, group buys, stores — control every source and monetize each visit.' },
    { title: 'Master omnichannel integration', desc: 'ARVIX connects systems, channels, and data for true OMO.' },
  ],
  subsidyTitle: 'Subsidies and resources in one place — over NT$200K in ARVIX support',
  subsidies: [
    { title: 'New signups can get shipping subsidies', sub: '50% off plus SSL encryption (worth NT$3,000)' },
    { title: 'Store plans include premium value', sub: 'Over NT$85,000 in value plus industry data reports' },
    { title: '40+ curated ecommerce courses', sub: 'Limited advisor coaching seats' },
  ],
  ctaTitle: 'Loved by merchants\n600,000+ brands use ARVIX',
}

const copy: Partial<Record<Locale, SeminarCopy>> & { 'zh-TW': SeminarCopy; en: SeminarCopy } = {
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

export default function SeminarPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #e8f4ff 0%, #f0e8ff 100%)' }}>
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
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.whoTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.audience.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E0E3E8', backgroundColor: '#F8FAFC' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{a.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.learnTitle}</h2>
          <div className="space-y-4">
            {c.topics.map((t, i) => (
              <div key={t.title} className="bg-white p-6 rounded-2xl flex gap-5 items-start" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <span className="text-2xl font-black flex-shrink-0" style={{ color: '#5B5FF0' }}>0{i + 1}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{t.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-10" style={{ color: '#00142D' }}>{c.subsidyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
