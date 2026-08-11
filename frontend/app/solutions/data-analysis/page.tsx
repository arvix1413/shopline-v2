'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type DataAnalysisCopy = {
  title: string
  subtitle: string
  cta: string
  problemsTitle: string
  problemsSubtitle: string
  problems: { title: string; desc: string }[]
  focusTitle: string
  focusSubtitle: string
  items: { key: string; title: string; tags: string[]; img: string; alt: string }[]
  advisorTitle: string
  advisorDesc: string
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: DataAnalysisCopy = {
  title: '數據賦能解決方案',
  subtitle: '擺脫數據迷霧，擁抱精準洞察！ARVIX 整合第一方數據，精煉「人」、「貨」、「場」三大核心指標數據，搭配顧問服務與產業趨勢報告，讓數據驅動決策、有效提升業績！',
  cta: '立即免費試用',
  problemsTitle: '降維決策，升維經營',
  problemsSubtitle: '想從數據洞察品牌商機，卻仍在盲人摸象？',
  problems: [
    { title: '數據碎片化，全貌難尋', desc: '各平台數據分散，無法整合成完整視圖，難以掌握品牌整體經營狀況。' },
    { title: '數據失焦，無從下手', desc: '數據量龐大，不知道該關注哪些指標，導致分析資源浪費。' },
    { title: '成效模糊，憑感覺決策', desc: '缺乏數據支撐，行銷決策靠直覺，難以評估投資報酬率。' },
  ],
  focusTitle: '聚焦「人、貨、場」',
  focusSubtitle: '掌握零售三要素加速品牌全面成長',
  items: [
    { key: '人', title: '找到對的人賣貨', tags: ['智慧 RFIM 價值模型'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '透過 ARVIX 獨家的 RFIM 價值模型讓你找到對的人賣貨' },
    { key: '貨', title: '選品銷貨更精準', tags: ['數據分析中心 (Pro) - 商品成長探測', 'AI 演算智慧商品推薦'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'ARVIX 透過全面數據分析讓品牌精準掌握商品生命週期和市場需求波動' },
    { key: '場', title: '全通路場景無縫整合', tags: ['全通路洞察', '產業基準值'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'ARVIX 整合多通路銷售管道數據，實現全通路的無縫客戶體驗' },
  ],
  advisorTitle: '數據×顧問×洞察\n策略顧問服務與產業趨勢報告',
  advisorDesc: '除了強大的數據工具，ARVIX 還提供專業顧問服務與產業趨勢報告，讓你的決策更有依據。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，開始你的全通路零售之旅',
}

const zhCN: DataAnalysisCopy = {
  title: '数据赋能解决方案',
  subtitle: '摆脱数据迷雾，拥抱精准洞察！ARVIX 整合第一方数据，精炼「人」、「货」、「场」三大核心指标数据，搭配顾问服务与产业趋势报告，让数据驱动决策、有效提升业绩！',
  cta: '立即免费试用',
  problemsTitle: '降维决策，升维经营',
  problemsSubtitle: '想从数据洞察品牌商机，却仍在盲人摸象？',
  problems: [
    { title: '数据碎片化，全貌难寻', desc: '各平台数据分散，无法整合成完整视图，难以掌握品牌整体经营状况。' },
    { title: '数据失焦，无从下手', desc: '数据量庞大，不知道该关注哪些指标，导致分析资源浪费。' },
    { title: '成效模糊，凭感觉决策', desc: '缺乏数据支撑，营销决策靠直觉，难以评估投资回报率。' },
  ],
  focusTitle: '聚焦「人、货、场」',
  focusSubtitle: '掌握零售三要素加速品牌全面成长',
  items: [
    { key: '人', title: '找到对的人卖货', tags: ['智慧 RFIM 价值模型'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '通过 ARVIX 独家的 RFIM 价值模型让你找到对的人卖货' },
    { key: '货', title: '选品销货更精准', tags: ['数据分析中心 (Pro) - 商品成长探测', 'AI 演算智慧商品推荐'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'ARVIX 通过全面数据分析让品牌精准掌握商品生命周期和市场需求波动' },
    { key: '场', title: '全渠道场景无缝整合', tags: ['全渠道洞察', '产业基准值'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'ARVIX 整合多渠道销售管道数据，实现全渠道的无缝客户体验' },
  ],
  advisorTitle: '数据×顾问×洞察\n策略顾问服务与产业趋势报告',
  advisorDesc: '除了强大的数据工具，ARVIX 还提供专业顾问服务与产业趋势报告，让你的决策更有依据。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '立即加入，开始你的全渠道零售之旅',
}

const en: DataAnalysisCopy = {
  title: 'Data-powered growth solution',
  subtitle: 'Cut through the noise. ARVIX unifies first-party data around people, products, and places — plus advisory and industry reports — so decisions drive real growth.',
  cta: 'Start free trial',
  problemsTitle: 'Simpler decisions, smarter growth',
  problemsSubtitle: 'Still guessing instead of seeing the full picture?',
  problems: [
    { title: 'Fragmented data', desc: 'Signals sit in silos — hard to see how the brand is really performing.' },
    { title: 'Too much noise', desc: 'Huge volumes without clear priorities waste analysis effort.' },
    { title: 'Gut-feel decisions', desc: 'Without evidence, marketing ROI is hard to measure.' },
  ],
  focusTitle: 'Focus on people, products, places',
  focusSubtitle: 'Master the retail triad to accelerate growth',
  items: [
    { key: 'People', title: 'Sell to the right customers', tags: ['Smart RFIM value model'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'RFIM value model to find the right buyers' },
    { key: 'Products', title: 'Sharper merchandising', tags: ['Analytics Center (Pro) — product growth', 'AI product recommendations'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'Product lifecycle and demand insights' },
    { key: 'Places', title: 'Seamless omnichannel scenes', tags: ['Omnichannel insights', 'Industry benchmarks'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'Unified channel data for seamless CX' },
  ],
  advisorTitle: 'Data × advisors × insight\nStrategy advisory & industry reports',
  advisorDesc: 'Beyond tools, ARVIX advisors and trend reports ground every decision.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Join and start your omnichannel journey',
}

const copy: Partial<Record<Locale, DataAnalysisCopy>> & { 'zh-TW': DataAnalysisCopy; en: DataAnalysisCopy } = {
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

export default function DataAnalysisPage() {
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
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt={c.title} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.problemsTitle}</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>{c.problemsSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {c.problems.map((item) => (
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
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>{c.focusTitle}</h2>
          <p className="text-center mb-16" style={{ color: '#687280' }}>{c.focusSubtitle}</p>
          <div className="space-y-20">
            {c.items.map((item, i) => (
              <div key={item.key} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-4xl font-black mb-3" style={{ color: '#5B5FF0' }}>「{item.key}」</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#00142D' }}>{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <img src={item.img} alt={item.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.advisorTitle}</h2>
            <p className="text-lg" style={{ color: '#687280' }}>{c.advisorDesc}</p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt={c.advisorTitle} className="w-full rounded-2xl" />
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
