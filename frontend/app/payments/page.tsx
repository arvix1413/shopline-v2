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
  subtitle: 'ARVIX Payments 以信用卡結帳為主，安全穩定。台灣出貨商店另可開通 7-11 貨到付款。',
  cta: '立即免費試用',
  multiTitle: 'ARVIX Payments 安全支付、提升交易成功率',
  multiDesc: '一頁完成付款免跳轉，告別訂單流失。穩定流暢的信用卡結帳體驗。',
  paymentTypes: [
    { name: '信用卡付款', desc: '商店結帳支援信用卡付款' },
    { name: '7-11 貨到付款', desc: '台灣出貨商店可開通 7-11 取貨並貨到付款（須綠界物流串接）' },
    { name: '安全結帳', desc: '交易走安全付款流程，降低詐騙風險' },
  ],
  easyTitle: '簡單啟用\n線上申請超省力',
  easyDesc: '線上就能申請開通。台灣出貨商店可再串接 7-11 物流。',
  easyItems: ['一頁完成付款免跳轉告別訂單流失', '信用卡結帳快速開通', '台灣出貨商店可加開 7-11 取貨／貨到付款'],
  securityTitle: '安全可靠的收款體驗',
  securityDesc: '採用安全付款技術，讓每一筆信用卡交易更安心。',
  aiTitle: '獨家 AI 智慧風控監控系統',
  aiDesc: '透過 AI 智慧風控系統即時監控每筆交易，自動識別異常行為，有效降低詐騙風險，保障商家與消費者的交易安全。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: PaymentsCopy = {
  title: '快速付、轻松收',
  subtitle: 'ARVIX Payments 以信用卡结账为主，安全稳定。',
  cta: '立即免费试用',
  multiTitle: 'ARVIX Payments 安全支付、提升交易成功率',
  multiDesc: '一页完成付款免跳转，告别订单流失。稳定流畅的信用卡结账体验。',
  paymentTypes: [
    { name: '信用卡付款', desc: '商店结账支持信用卡付款' },
    { name: '安全结账', desc: '交易走安全付款流程，降低诈骗风险' },
  ],
  easyTitle: '简单启用\n线上申请超省力',
  easyDesc: '线上就能申请开通信用卡收款。',
  easyItems: ['一页完成付款免跳转告别订单流失', '信用卡结账快速开通', '稳定流畅的结账体验'],
  securityTitle: '安全可靠的收款体验',
  securityDesc: '采用安全付款技术，让每一笔信用卡交易更安心。',
  aiTitle: '独家 AI 智慧风控监控系统',
  aiDesc: '通过 AI 智慧风控系统即时监控每笔交易，自动识别异常行为，有效降低诈骗风险，保障商家与消费者的交易安全。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: PaymentsCopy = {
  title: 'Pay fast. Get paid easily.',
  subtitle: 'ARVIX Payments focuses on secure card checkout for your store.',
  cta: 'Start free trial',
  multiTitle: 'Secure card payments that lift conversion',
  multiDesc: 'One-page checkout without redirects. Stable card payment flows.',
  paymentTypes: [
    { name: 'Card payments', desc: 'Checkout supports major credit and debit cards' },
    { name: 'Secure checkout', desc: 'Protected payment flow to reduce fraud risk' },
  ],
  easyTitle: 'Simple setup\nApply online in minutes',
  easyDesc: 'Enable card checkout online and start accepting payments.',
  easyItems: ['One-page checkout without drop-off', 'Card payments ready to enable', 'Stable, secure payment flows'],
  securityTitle: 'Secure payment experience',
  securityDesc: 'Built for safer card transactions for merchants and shoppers.',
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
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
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
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
