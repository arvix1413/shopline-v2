'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ContactCopy = {
  title: string
  subtitle: string
  channelsTitle: string
  channels: { icon: string; title: string; desc: string; cta: string; href: string }[]
  hoursTitle: string
  hours: string
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
}

const zhTW: ContactCopy = {
  title: '聯絡我們',
  subtitle: '無論是開店諮詢、技術支援或商務合作，ARVIX 團隊都樂意協助你。',
  channelsTitle: '你可以這樣聯繫我們',
  channels: [
    {
      icon: '💬',
      title: 'LINE 客服',
      desc: '即時詢問開店與產品問題，工作日快速回覆。',
      cta: '開啟 LINE 對話',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: '預約免費諮詢',
      desc: '一對一顧問諮詢，從數位轉型到全通路整合一次說清楚。',
      cta: '立即預約',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: '商務合作',
      desc: '代理、聯盟、開發者與技術夥伴，歡迎一起拓展生態圈。',
      cta: '了解合作機會',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: '非即時需求可寄信給我們，我們會盡快回覆。',
      cta: 'contact@arvixai.com',
      href: 'mailto:contact@arvixai.com',
    },
  ],
  hoursTitle: '服務時間',
  hours: '週一至週五 10:00–19:00（台灣時間，國定假日除外）',
  ctaTitle: '想更快開始賣貨？',
  ctaSubtitle: '14 天免費試用，零門檻架起你的品牌電商。',
  ctaButton: '開始免費開店',
}

const zhCN: ContactCopy = {
  title: '联系我们',
  subtitle: '无论是开店咨询、技术支持还是商务合作，ARVIX 团队都乐意协助你。',
  channelsTitle: '你可以这样联系我们',
  channels: [
    {
      icon: '💬',
      title: 'LINE 客服',
      desc: '即时询问开店与产品问题，工作日快速回复。',
      cta: '打开 LINE 对话',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: '预约免费咨询',
      desc: '一对一顾问咨询，从数字转型到全渠道整合一次说清楚。',
      cta: '立即预约',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: '商务合作',
      desc: '代理、联盟、开发者与技术伙伴，欢迎一起拓展生态圈。',
      cta: '了解合作机会',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: '非即时需求可写信给我们，我们会尽快回复。',
      cta: 'contact@arvixai.com',
      href: 'mailto:contact@arvixai.com',
    },
  ],
  hoursTitle: '服务时间',
  hours: '周一至周五 10:00–19:00（台湾时间，法定假日除外）',
  ctaTitle: '想更快开始卖货？',
  ctaSubtitle: '14 天免费试用，零门槛架起你的品牌电商。',
  ctaButton: '开始免费开店',
}

const en: ContactCopy = {
  title: 'Contact us',
  subtitle: 'Whether you need store setup help, product support, or a partnership conversation — the ARVIX team is here.',
  channelsTitle: 'Ways to reach us',
  channels: [
    {
      icon: '💬',
      title: 'LINE support',
      desc: 'Ask product and setup questions in real time on business days.',
      cta: 'Chat on LINE',
      href: 'https://line.me/R/ti/p/@kxh0647n',
    },
    {
      icon: '📞',
      title: 'Book a free consult',
      desc: 'Talk 1:1 with an advisor about digital transformation and omnichannel growth.',
      cta: 'Book now',
      href: '/consultation',
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      desc: 'Resellers, affiliates, developers, and tech partners — let’s build together.',
      cta: 'Explore partnerships',
      href: '/cooperate',
    },
    {
      icon: '✉️',
      title: 'Email',
      desc: 'For non-urgent requests, email us and we’ll get back to you.',
      cta: 'contact@arvixai.com',
      href: 'mailto:contact@arvixai.com',
    },
  ],
  hoursTitle: 'Service hours',
  hours: 'Mon–Fri 10:00–19:00 (Taiwan time, excluding public holidays)',
  ctaTitle: 'Ready to start selling?',
  ctaSubtitle: '14-day free trial — launch your brand store with zero friction.',
  ctaButton: 'Start free store',
}

const copy: Partial<Record<Locale, ContactCopy>> & { 'zh-TW': ContactCopy; en: ContactCopy } = {
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

export default function ContactPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-center" style={{ color: '#00142D' }}>{c.channelsTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.channels.map((ch) => (
              <a
                key={ch.title}
                href={ch.href}
                target={ch.href.startsWith('http') || ch.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                style={{ background: '#F7F8FC', border: '1px solid rgba(18,19,31,0.06)' }}
              >
                <div className="text-3xl mb-3">{ch.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#12131F' }}>{ch.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#687280' }}>{ch.desc}</p>
                <span className="text-sm font-bold" style={{ color: '#5B5FF0' }}>{ch.cta} →</span>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-6 text-center" style={{ background: '#F7F8FC' }}>
            <div className="text-sm font-semibold mb-1" style={{ color: '#5B5FF0' }}>{c.hoursTitle}</div>
            <div className="text-sm" style={{ color: '#5C5F7A' }}>{c.hours}</div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #5B5FF0 0%, #3A3FCF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-3">{c.ctaTitle}</h2>
          <p className="text-white/85 mb-8">{c.ctaSubtitle}</p>
          <a
            href="/trial-redirect"
            className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            style={{ color: '#5B5FF0' }}
          >
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
