'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type PressCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  cta: string
  tagLatest: string
  tagRepost: string
  tagAnnounce: string
  tagWhitepaper: string
  news: { title: string; date: string; tagKey: 'latest' | 'repost' | 'announce' | 'whitepaper' }[]
}

const zhTW: PressCopy = {
  title: '最新消息',
  subtitle: 'ARVIX 最新動態、媒體報導與產業洞察',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
  tagLatest: '最新',
  tagRepost: '轉載',
  tagAnnounce: '公告',
  tagWhitepaper: '白皮書',
  news: [
    { title: '零售 AI 聯盟啟動！beBit TECH 與 ARVIX 助攻《VERVE》、《古北町》雙位數成長，攜手打造 AI 行銷生態圈', date: '2025-03', tagKey: 'latest' },
    { title: '【轉載】親歷金融海嘯也橫跨全球職涯，他最後為何選擇 ARVIX 打造新時代電商人才？｜專訪 ARVIX 聯席總裁 Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX 雙 11 業績連三年創新高！GMV 年增 19%，助攻實戰班商家表現飆升 6 成', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × 腦麻協會 × ARVIX 聯手打造永續共好新篇章，白安與宇宙人暖心助力「點亮自立之路」', date: '2024-10', tagKey: 'announce' },
    { title: '【轉載】自辦預購募近 2000 萬！網購流量難搶 XROUND 如何靠群募聚人氣？', date: '2024-09', tagKey: 'repost' },
    { title: '99 購物節揭開電商旺季序幕，參與 ARVIX 檔期實戰班商家業績成長 26%，毛孩經濟帶動「寵物用品」業績飆升 50% 成黑馬', date: '2024-09', tagKey: 'announce' },
    { title: '【轉載】告別行銷燒錢戰！ARVIX 攜手 Tagnology、Bello Store 打造零售電商超強轉換引擎', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX 榮獲「最佳 IT 雇主」肯定，4 大招聘策略 x 8 項人才培訓措施深度孵化臺灣 IT 產業人才', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 啟動 2025 品牌升級計畫！定位「全方位零售整合專家」', date: '2025-01', tagKey: 'announce' },
    { title: 'ARVIX《2025 全方位零售整合白皮書》上線！「通路＋數據＋系統」三大面向整合迎戰零售新未來', date: '2025-01', tagKey: 'whitepaper' },
    { title: '直播電商玩法再升級！ARVIX 導入 YouTube Shopping 功能，提供 API 技術串接與業界最豐富輔導資源', date: '2023-10', tagKey: 'announce' },
    { title: 'ARVIX《2024 新零售開店白皮書》上線！「OMO 全通路模式」與「社群電商」仍是疫後時代零售發展重點', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const zhCN: PressCopy = {
  title: '最新消息',
  subtitle: 'ARVIX 最新动态、媒体报道与产业洞察',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
  tagLatest: '最新',
  tagRepost: '转载',
  tagAnnounce: '公告',
  tagWhitepaper: '白皮书',
  news: [
    { title: '零售 AI 联盟启动！beBit TECH 与 ARVIX 助攻《VERVE》、《古北町》双位数成长，携手打造 AI 营销生态圈', date: '2025-03', tagKey: 'latest' },
    { title: '【转载】亲历金融海啸也横跨全球职涯，他最后为何选择 ARVIX 打造新时代电商人才？｜专访 ARVIX 联席总裁 Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX 双 11 业绩连三年创新高！GMV 年增 19%，助攻实战班商家表现飙升 6 成', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × 脑麻协会 × ARVIX 联手打造永续共好新篇章，白安与宇宙人暖心助力「点亮自立之路」', date: '2024-10', tagKey: 'announce' },
    { title: '【转载】自办预购募近 2000 万！网购流量难抢 XROUND 如何靠群募聚人气？', date: '2024-09', tagKey: 'repost' },
    { title: '99 购物节揭开电商旺季序幕，参与 ARVIX 档期实战班商家业绩成长 26%，毛孩经济带动「宠物用品」业绩飙升 50% 成黑马', date: '2024-09', tagKey: 'announce' },
    { title: '【转载】告别营销烧钱战！ARVIX 携手 Tagnology、Bello Store 打造零售电商超强转化引擎', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX 荣获「最佳 IT 雇主」肯定，4 大招聘策略 x 8 项人才培训措施深度孵化台湾 IT 产业人才', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 启动 2025 品牌升级计划！定位「全方位零售整合专家」', date: '2025-01', tagKey: 'announce' },
    { title: 'ARVIX《2025 全方位零售整合白皮书》上线！「渠道＋数据＋系统」三大面向整合迎战零售新未来', date: '2025-01', tagKey: 'whitepaper' },
    { title: '直播电商玩法再升级！ARVIX 导入 YouTube Shopping 功能，提供 API 技术串接与业界最丰富辅导资源', date: '2023-10', tagKey: 'announce' },
    { title: 'ARVIX《2024 新零售开店白皮书》上线！「OMO 全渠道模式」与「社群电商」仍是疫后时代零售发展重点', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const en: PressCopy = {
  title: 'Newsroom',
  subtitle: 'Latest ARVIX updates, media coverage, and industry insights',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
  tagLatest: 'New',
  tagRepost: 'Repost',
  tagAnnounce: 'Announcement',
  tagWhitepaper: 'Whitepaper',
  news: [
    { title: 'Retail AI alliance launches — beBit TECH & ARVIX help VERVE and Kobecho grow double-digits', date: '2025-03', tagKey: 'latest' },
    { title: '[Repost] From the financial crisis to a global career — why he chose ARVIX | Interview with Co-President Raymond', date: '2025-02', tagKey: 'repost' },
    { title: 'ARVIX Double 11 hits a 3-year high — GMV +19%, workshop merchants up ~60%', date: '2024-11', tagKey: 'announce' },
    { title: 'Story Wear × CP Association × ARVIX partner for sustainable impact', date: '2024-10', tagKey: 'announce' },
    { title: '[Repost] Nearly NT$20M in preorders — how XROUND crowdsourced demand', date: '2024-09', tagKey: 'repost' },
    { title: '99 Shopping Festival: ARVIX workshop merchants +26%; pet category +50%', date: '2024-09', tagKey: 'announce' },
    { title: '[Repost] Beyond ad burn — ARVIX with Tagnology & Bello Store on conversion', date: '2024-08', tagKey: 'repost' },
    { title: 'ARVIX named a top IT employer — hiring & training for Taiwan’s IT talent', date: '2024-07', tagKey: 'announce' },
    { title: 'ARVIX 2025 brand upgrade — Full-stack retail integration expert', date: '2025-01', tagKey: 'announce' },
    { title: '2025 Omnichannel Retail Integration Whitepaper — channels + data + systems', date: '2025-01', tagKey: 'whitepaper' },
    { title: 'Live commerce upgrade — YouTube Shopping with API support and coaching', date: '2023-10', tagKey: 'announce' },
    { title: '2024 New Retail Launch Whitepaper — OMO & social commerce still lead', date: '2024-01', tagKey: 'whitepaper' },
  ],
}

const copy: Partial<Record<Locale, PressCopy>> & { 'zh-TW': PressCopy; en: PressCopy } = {
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

const tagColors: Record<string, { bg: string; color: string }> = {
  latest: { bg: '#FEF3C7', color: '#D97706' },
  repost: { bg: '#EEF0FF', color: '#5B5FF0' },
  announce: { bg: '#DCFCE7', color: '#16A34A' },
  whitepaper: { bg: '#F3E8FF', color: '#9333EA' },
}

export default function PressPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const tagLabel = {
    latest: c.tagLatest,
    repost: c.tagRepost,
    announce: c.tagAnnounce,
    whitepaper: c.tagWhitepaper,
  }

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {c.news.map((n) => {
              const tc = tagColors[n.tagKey] || { bg: '#EEF0FF', color: '#5B5FF0' }
              return (
                <article key={n.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: tc.bg, color: tc.color }}>{tagLabel[n.tagKey]}</span>
                    <span className="text-xs" style={{ color: '#687280' }}>{n.date}</span>
                  </div>
                  <h2 className="font-bold leading-relaxed hover:underline" style={{ color: '#00142D' }}>{n.title}</h2>
                </article>
              )
            })}
          </div>
        </div>
      </section>

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
