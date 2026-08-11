'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type PaymentsCopy = {
  title: string
  subtitle: string
  cta: string
  multiTitle: string
  multiDesc: string
  paymentTypes: { name: string; desc: string }[]
  easyTitle: string
  easyDesc: string
  easyItems: string[]
  securityTitle: string
  securityDesc: string
  aiTitle: string
  aiDesc: string
  ctaTitle: string
}

const zhTW: PaymentsCopy = {
  title: '快速付、輕鬆收',
  subtitle: 'ARVIX Payments 安全支付、提升交易成功率。多元收款服務，線上就能申請，一次開通多種支付方式。',
  cta: '立即免費試用',
  multiTitle: 'ARVIX Payments 安全支付、提升交易成功率',
  multiDesc: '一頁完成付款免跳轉，告別訂單流失。穩定流暢！刷卡成功率高於 99%。',
  paymentTypes: [
    { name: '信用卡刷卡＆分期', desc: '支援各大信用卡及分期付款' },
    { name: 'ATM 銀行轉帳', desc: '方便快速的銀行轉帳服務' },
    { name: '行動電子支付', desc: '支援 LINE Pay、街口支付等主流行動支付' },
    { name: 'BNPL 無卡分期', desc: '先買後付，提升顧客購買意願' },
    { name: 'POS 實體刷卡機', desc: '門市實體刷卡，線上線下一體整合' },
  ],
  easyTitle: '簡單啟用\n線上申請超省力',
  easyDesc: '線上就能申請，一次開通多種支付方式。快速付款多元行動電子支付。',
  easyItems: ['一頁完成付款免跳轉告別訂單流失', '線上就能申請 一次開通多種支付方式', '穩定流暢！ 刷卡成功率高於 99%'],
  securityTitle: '領先台灣開店平台\n使用 Cybersource, A Visa solution',
  securityDesc: '採用業界頂尖的支付安全技術，讓每一筆交易都安全可靠。一站整合門市 POS 刷卡機。',
  aiTitle: '獨家 AI 智慧風控監控系統',
  aiDesc: '透過 AI 智慧風控系統即時監控每筆交易，自動識別異常行為，有效降低詐騙風險，保障商家與消費者的交易安全。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: PaymentsCopy = {
  title: '快速付、轻松收',
  subtitle: 'ARVIX Payments 安全支付、提升交易成功率。多元收款服务，线上就能申请，一次开通多种支付方式。',
  cta: '立即免费试用',
  multiTitle: 'ARVIX Payments 安全支付、提升交易成功率',
  multiDesc: '一页完成付款免跳转，告别订单流失。稳定流畅！刷卡成功率高于 99%。',
  paymentTypes: [
    { name: '信用卡刷卡＆分期', desc: '支持各大信用卡及分期付款' },
    { name: 'ATM 银行转账', desc: '方便快速的银行转账服务' },
    { name: '移动电子支付', desc: '支持 LINE Pay、街口支付等主流移动支付' },
    { name: 'BNPL 无卡分期', desc: '先买后付，提升顾客购买意愿' },
    { name: 'POS 实体刷卡机', desc: '门店实体刷卡，线上线下一站整合' },
  ],
  easyTitle: '简单启用\n线上申请超省力',
  easyDesc: '线上就能申请，一次开通多种支付方式。快速付款多元移动电子支付。',
  easyItems: ['一页完成付款免跳转告别订单流失', '线上就能申请 一次开通多种支付方式', '稳定流畅！ 刷卡成功率高于 99%'],
  securityTitle: '领先台湾开店平台\n使用 Cybersource, A Visa solution',
  securityDesc: '采用业界顶尖的支付安全技术，让每一笔交易都安全可靠。一站整合门店 POS 刷卡机。',
  aiTitle: '独家 AI 智慧风控监控系统',
  aiDesc: '通过 AI 智慧风控系统即时监控每笔交易，自动识别异常行为，有效降低诈骗风险，保障商家与消费者的交易安全。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: PaymentsCopy = {
  title: 'Pay fast. Get paid easily.',
  subtitle: 'ARVIX Payments boosts success rates with secure checkout. Apply online and enable multiple methods at once.',
  cta: 'Start free trial',
  multiTitle: 'Secure payments that lift conversion',
  multiDesc: 'One-page checkout without redirects. Stable flows with card success rates above 99%.',
  paymentTypes: [
    { name: 'Cards & installments', desc: 'Major cards and installment plans' },
    { name: 'ATM bank transfer', desc: 'Fast, convenient bank transfers' },
    { name: 'Mobile wallets', desc: 'LINE Pay, JKOPAY, and more' },
    { name: 'BNPL', desc: 'Buy now, pay later to lift purchase intent' },
    { name: 'In-store POS terminals', desc: 'Unified online and offline card acceptance' },
  ],
  easyTitle: 'Simple setup\nApply online in minutes',
  easyDesc: 'Apply online once and open multiple payment methods. Fast mobile wallet checkout included.',
  easyItems: ['One-page checkout without drop-off', 'Apply online — enable many methods at once', 'Stable flows with 99%+ card success'],
  securityTitle: 'Leading Taiwan commerce platform\nPowered by Cybersource, a Visa solution',
  securityDesc: 'Top-tier payment security for every transaction. POS terminals included in one stack.',
  aiTitle: 'Exclusive AI risk monitoring',
  aiDesc: 'AI monitors every transaction in real time, flags anomalies, and reduces fraud for merchants and shoppers.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, PaymentsCopy>> & { 'zh-TW': PaymentsCopy; en: PaymentsCopy } = {
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

export default function PaymentsPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 211, 146) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX Payments" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2" style={{ color: '#00142D' }}>{c.multiTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.multiDesc}</p>
            <div className="space-y-3">
              {c.paymentTypes.map(p => (
                <div key={p.name} className="p-4 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&q=80" alt="ARVIX multi payment" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.easyTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.easyDesc}</p>
            <div className="space-y-4">
              {c.easyItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX payment apply" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.securityTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.securityDesc}</p>
            <div className="p-5 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
              <h4 className="font-bold mb-2" style={{ color: '#00142D' }}>{c.aiTitle}</h4>
              <p className="text-sm" style={{ color: '#687280' }}>{c.aiDesc}</p>
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=1200&q=80" alt="ARVIX Cybersource" width={600} height={450} className="w-full h-auto" unoptimized />
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
