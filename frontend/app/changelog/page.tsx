'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ChangelogCopy = {
  title: string
  subtitle: string
  listTitle: string
  updates: { date: string; version: string; title: string; desc: string; highlight?: boolean }[]
  ctaTitle: string
  ctaSubtitle: string
  cta: string
}

const zhTW: ChangelogCopy = {
  title: '產品最新動態',
  subtitle: '持續進化的 ARVIX 平台，每月帶來全新功能與優化，助你掌握零售先機',
  listTitle: '產品更新紀錄',
  updates: [
    { date: '2024 H1', version: '產品發表大會', title: '2024 H1 產品發表大會', desc: '全新 AI 洞察功能、Smart OMO 升級、社群購物全面強化，助商家迎戰新零售時代。', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI 洞察策略上線', desc: 'Shoplytics 新增 AI 自動分析功能，提供可執行的行銷建議，讓數據驅動決策更簡單。' },
    { date: '2025-02', version: 'v3.4', title: '網紅團購模組升級', desc: '新增合作夥伴成效中心，快速計算分潤金額，一鍵管理所有網紅合作。' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO 全新改版', desc: '會員導購工具介面全面升級，操作更直覺，線上線下整合更流暢。' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments 升級', desc: '新增 Apple Pay、Google Pay 快速結帳，支援更多支付方式，提升結帳轉換率。' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping 整合', desc: '直播電商玩法再升級，導入 YouTube Shopping 功能，提供 API 技術串接。' },
    { date: '2024-10', version: 'v3.0', title: '擴充功能商店上線', desc: '全台首推「一鍵訂閱」夥伴擴充功能，開放 API 串接，打造電商界最強擴充功能商店。' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App 全面升級', desc: '品牌 App 新增個人化推薦、會員積點兌換、推播通知等功能，強化會員黏著度。' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaSubtitle: '有疑問嗎？我們的團隊隨時為您解答',
  cta: '立即免費試用',
}

const zhCN: ChangelogCopy = {
  title: '产品最新动态',
  subtitle: '持续进化的 ARVIX 平台，每月带来全新功能与优化，助你掌握零售先机',
  listTitle: '产品更新纪录',
  updates: [
    { date: '2024 H1', version: '产品发表大会', title: '2024 H1 产品发表大会', desc: '全新 AI 洞察功能、Smart OMO 升级、社群购物全面强化，助商家迎战新零售时代。', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI 洞察策略上线', desc: 'Shoplytics 新增 AI 自动分析功能，提供可执行的营销建议，让数据驱动决策更简单。' },
    { date: '2025-02', version: 'v3.4', title: '网红团购模块升级', desc: '新增合作伙伴成效中心，快速计算分润金额，一键管理所有网红合作。' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO 全新改版', desc: '会员导购工具界面全面升级，操作更直觉，线上线下整合更流畅。' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments 升级', desc: '新增 Apple Pay、Google Pay 快速结账，支持更多支付方式，提升结账转化率。' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping 整合', desc: '直播电商玩法再升级，导入 YouTube Shopping 功能，提供 API 技术对接。' },
    { date: '2024-10', version: 'v3.0', title: '扩展功能商店上线', desc: '全台首推「一键订阅」伙伴扩展功能，开放 API 对接，打造电商界最强扩展功能商店。' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App 全面升级', desc: '品牌 App 新增个性化推荐、会员积分兑换、推播通知等功能，强化会员粘着度。' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaSubtitle: '有疑问吗？我们的团队随时为您解答',
  cta: '立即免费试用',
}

const en: ChangelogCopy = {
  title: 'Product updates',
  subtitle: 'ARVIX ships new features and improvements every month so you stay ahead in retail',
  listTitle: 'Release notes',
  updates: [
    { date: '2024 H1', version: 'Product launch', title: '2024 H1 product launch', desc: 'New AI insights, Smart OMO upgrades, and stronger social commerce for the new retail era.', highlight: true },
    { date: '2025-03', version: 'v3.5', title: 'AI insight strategies', desc: 'Shoplytics adds AI analysis with actionable marketing recommendations.' },
    { date: '2025-02', version: 'v3.4', title: 'Influencer group-buy upgrade', desc: 'Partner performance hub calculates commissions and manages collaborations in one place.' },
    { date: '2025-01', version: 'v3.3', title: 'Smart OMO redesign', desc: 'Member shopping tools get a clearer UI and smoother online-offline flows.' },
    { date: '2024-12', version: 'v3.2', title: 'ARVIX Payments upgrade', desc: 'Apple Pay and Google Pay for faster checkout and higher conversion.' },
    { date: '2024-11', version: 'v3.1', title: 'YouTube Shopping', desc: 'Live commerce expands with YouTube Shopping and API integrations.' },
    { date: '2024-10', version: 'v3.0', title: 'App store launch', desc: 'One-click partner apps and open APIs for the strongest ecommerce extension store.' },
    { date: '2024-09', version: 'v2.9', title: 'Shopper App upgrade', desc: 'Personalized recommendations, points redemption, and push notifications for stronger loyalty.' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaSubtitle: 'Questions? Our team is ready to help',
  cta: 'Start free trial',
}

const copy: Partial<Record<Locale, ChangelogCopy>> & { 'zh-TW': ChangelogCopy; en: ChangelogCopy } = {
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

export default function ChangelogPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

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
          <h2 className="text-2xl font-black mb-10" style={{ color: '#00142D' }}>{c.listTitle}</h2>
          <div className="space-y-6">
            {c.updates.map((u) => (
              <div key={u.version} className={`p-8 rounded-2xl ${u.highlight ? 'text-white' : 'border border-gray-100'}`}
                style={u.highlight ? { backgroundColor: '#5B5FF0' } : {}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={u.highlight ? { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' } : { backgroundColor: '#EEF0FF', color: '#5B5FF0' }}>
                    {u.date}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: u.highlight ? 'rgba(255,255,255,0.7)' : '#687280' }}>{u.version}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: u.highlight ? 'white' : '#00142D' }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: u.highlight ? 'rgba(255,255,255,0.85)' : '#687280' }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
