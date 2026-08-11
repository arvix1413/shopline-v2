'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type LineCopy = {
  title: string
  subtitle: string
  cta: string
  integrateTitle: string
  integrateDesc: string
  integrateItems: string[]
  retargetTitle: string
  retargetDesc: string
  retargetItems: { title: string; desc: string }[]
  aiTitle: string
  aiDesc: string
  ctaTitle: string
}

const zhTW: LineCopy = {
  title: '唯一 LINE 指定技術合作夥伴\nSHOP 不能沒有 LINE\n用 LINE 官方帳號賣更多！',
  subtitle: '全效整合 LINE 好友，流量＋留量再行銷一氣呵成，360° 導購流量變現就靠它。',
  cta: '立即免費試用',
  integrateTitle: '全效整合 LINE 好友',
  integrateDesc: '輕鬆圈粉、導購衝單、智慧客服，讓 LINE 成為你最強的銷售渠道。',
  integrateItems: ['輕鬆圈粉', '導購衝單', '智慧客服'],
  retargetTitle: '流量＋留量再行銷\n一氣呵成',
  retargetDesc: '靠 LINE 直播 +1 讓直播業績飆升，轉戰 LINE 成效型廣告大幅降低轉換成本。',
  retargetItems: [
    { title: 'LINE 快速登入 & 訂單狀態通知', desc: '顧客一鍵 LINE 登入，訂單狀態即時推播通知。' },
    { title: 'LINE 好友與官網會員綁定', desc: '將 LINE 好友與官網會員帳號綁定，打通數據。' },
    { title: 'LINE PNP 通知型訊息獨家支援', desc: '獨家支援 LINE PNP，精準觸達顧客。' },
    { title: 'LINE 精準廣播', desc: '依據顧客分群，發送精準廣播訊息，提升開封率。' },
  ],
  aiTitle: '智慧客服 AI\n搶攻對話商機',
  aiDesc: '360° 導購流量變現就靠它，AI 智慧客服讓每一次對話都成為銷售機會。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: LineCopy = {
  title: '唯一 LINE 指定技术合作伙伴\nSHOP 不能没有 LINE\n用 LINE 官方账号卖更多！',
  subtitle: '全效整合 LINE 好友，流量＋留量再营销一气呵成，360° 导购流量变现就靠它。',
  cta: '立即免费试用',
  integrateTitle: '全效整合 LINE 好友',
  integrateDesc: '轻松圈粉、导购冲单、智慧客服，让 LINE 成为你最强的销售渠道。',
  integrateItems: ['轻松圈粉', '导购冲单', '智慧客服'],
  retargetTitle: '流量＋留量再营销\n一气呵成',
  retargetDesc: '靠 LINE 直播 +1 让直播业绩飙升，转战 LINE 成效型广告大幅降低转化成本。',
  retargetItems: [
    { title: 'LINE 快速登录 & 订单状态通知', desc: '顾客一键 LINE 登录，订单状态即时推播通知。' },
    { title: 'LINE 好友与官网会员绑定', desc: '将 LINE 好友与官网会员账号绑定，打通数据。' },
    { title: 'LINE PNP 通知型消息独家支持', desc: '独家支持 LINE PNP，精准触达顾客。' },
    { title: 'LINE 精准广播', desc: '依据顾客分群，发送精准广播消息，提升开封率。' },
  ],
  aiTitle: '智慧客服 AI\n抢攻对话商机',
  aiDesc: '360° 导购流量变现就靠它，AI 智慧客服让每一次对话都成为销售机会。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: LineCopy = {
  title: 'Official LINE tech partner\nYour shop needs LINE\nSell more with Official Account',
  subtitle: 'Unify LINE friends, traffic, retention, and retargeting — turn 360° shopping traffic into revenue.',
  cta: 'Start free trial',
  integrateTitle: 'Fully integrate LINE friends',
  integrateDesc: 'Grow fans, drive orders, and run smart support — make LINE your strongest sales channel.',
  integrateItems: ['Grow fans easily', 'Drive orders', 'Smart support'],
  retargetTitle: 'Traffic + retention retargeting\nin one flow',
  retargetDesc: 'Boost live sales with LINE live +1, then cut conversion cost with LINE performance ads.',
  retargetItems: [
    { title: 'LINE login & order status alerts', desc: 'One-tap LINE login with realtime order push alerts.' },
    { title: 'Bind LINE friends to store members', desc: 'Link LINE friends with store accounts to unify data.' },
    { title: 'Exclusive LINE PNP support', desc: 'Reach customers precisely with LINE PNP messages.' },
    { title: 'Precision LINE broadcasts', desc: 'Segment audiences and send targeted broadcasts that open.' },
  ],
  aiTitle: 'AI customer service\nWin every conversation',
  aiDesc: 'Monetize shopping traffic with AI support that turns every chat into a sales opportunity.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, LineCopy>> & { 'zh-TW': LineCopy; en: LineCopy } = {
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

export default function LineSolutionPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 250, 198) 0%, rgb(167, 254, 156) 50%, rgb(5, 199, 93) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="mb-4">
              <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE partner" width={120} height={40} className="h-10 w-auto" unoptimized />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="ARVIX LINE solution" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.integrateTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.integrateDesc}</p>
            <div className="space-y-4">
              {c.integrateItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="LINE integration" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.retargetTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.retargetDesc}</p>
            <div className="grid grid-cols-1 gap-3">
              {c.retargetItems.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-semibold block text-sm" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-xs" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE retargeting" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.aiTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.aiDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE AI support" width={600} height={450} className="w-full h-auto" unoptimized />
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
