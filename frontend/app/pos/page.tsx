'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type PosCopy = {
  title: string
  subtitle: string
  cta: string
  pains: { title: string; desc: string }[]
  checkoutTitle: string
  checkoutAccent: string
  checkoutDesc: string
  checkoutItems: string[]
  memberTitle: string
  memberDesc: string
  memberItems: string[]
  reportTitle: string
  reportDesc: string
  reportItems: string[]
  inventoryTitle: string
  inventoryDesc: string
  inventoryItems: string[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: PosCopy = {
  title: '開啟你的全通路生意',
  subtitle: '一台 iPad 為你搞定開店大小事！收銀、庫存、會員、報表，全部一手掌握。',
  cta: '立即免費試用',
  pains: [
    { title: '網店、實體店資料分散？', desc: '線上線下數據各自為政，無法統一管理，錯失商機。' },
    { title: '人工記帳總是出錯？', desc: '手動記帳耗時費力，容易出錯，影響營運效率。' },
    { title: '生意好壞只憑感覺？', desc: '缺乏數據支撐，無法精準掌握門市營運狀況。' },
  ],
  checkoutTitle: '一台 iPad\n為你搞定開店大小事！',
  checkoutAccent: '簡單直覺收銀結帳效率 UP',
  checkoutDesc: '簡單直覺的收銀介面，讓結帳效率大幅提升，減少顧客等待時間。',
  checkoutItems: ['串接 POS 刷卡機及多元支付選項', '一鍵套用優惠 / 加入會員', '發票、收據快速開立', '即時掌握實時交易明細'],
  memberTitle: '輪廓分析\n會員經營沒難度',
  memberDesc: '深度會員輪廓分析，讓你精準掌握顧客消費行為，提升回購率。',
  memberItems: ['顧客快速加入會員', '顧客線上、線下消費紀錄', '會員分級與專屬價格', '顧客標籤與備註'],
  reportTitle: '有憑有據\n分析報表自動化',
  reportDesc: '自動化報表系統，讓你隨時掌握門市營運狀況，做出正確決策。',
  reportItems: ['即時掌握實時交易明細', '多維度銷售報表', '商品銷售排行', '員工業績統計'],
  inventoryTitle: '一目瞭然\n庫存與商品管理有條理',
  inventoryDesc: '即時庫存管理，讓你輕鬆掌握商品狀況，避免缺貨或積壓問題。',
  inventoryItems: ['即時庫存同步', '商品批量管理', '庫存預警通知', '網店與門市庫存整合'],
  ctaTitle: 'ARVIX POS 讓品牌再進化！',
  ctaSubtitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: PosCopy = {
  title: '开启你的全渠道生意',
  subtitle: '一台 iPad 为你搞定开店大小事！收银、库存、会员、报表，全部一手掌握。',
  cta: '立即免费试用',
  pains: [
    { title: '网店、实体店资料分散？', desc: '线上线下数据各自为政，无法统一管理，错失商机。' },
    { title: '人工记账总是出错？', desc: '手动记账耗时费力，容易出错，影响运营效率。' },
    { title: '生意好坏只凭感觉？', desc: '缺乏数据支撑，无法精准掌握门店运营状况。' },
  ],
  checkoutTitle: '一台 iPad\n为你搞定开店大小事！',
  checkoutAccent: '简单直觉收银结账效率 UP',
  checkoutDesc: '简单直觉的收银界面，让结账效率大幅提升，减少顾客等待时间。',
  checkoutItems: ['对接 POS 刷卡机及多元支付选项', '一键套用优惠 / 加入会员', '发票、收据快速开立', '即时掌握实时交易明细'],
  memberTitle: '轮廓分析\n会员经营没难度',
  memberDesc: '深度会员轮廓分析，让你精准掌握顾客消费行为，提升回购率。',
  memberItems: ['顾客快速加入会员', '顾客线上、线下消费纪录', '会员分级与专属价格', '顾客标签与备注'],
  reportTitle: '有凭有据\n分析报表自动化',
  reportDesc: '自动化报表系统，让你随时掌握门店运营状况，做出正确决策。',
  reportItems: ['即时掌握实时交易明细', '多维度销售报表', '商品销售排行', '员工业绩统计'],
  inventoryTitle: '一目了然\n库存与商品管理有条理',
  inventoryDesc: '即时库存管理，让你轻松掌握商品状况，避免缺货或积压问题。',
  inventoryItems: ['即时库存同步', '商品批量管理', '库存预警通知', '网店与门店库存整合'],
  ctaTitle: 'ARVIX POS 让品牌再进化！',
  ctaSubtitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: PosCopy = {
  title: 'Open your omnichannel business',
  subtitle: 'One iPad handles checkout, inventory, members, and reports — everything in one place.',
  cta: 'Start free trial',
  pains: [
    { title: 'Online and offline data siloed?', desc: 'Separate systems mean missed opportunities and no unified view.' },
    { title: 'Manual bookkeeping errors?', desc: 'Handwritten ledgers waste time and hurt operational efficiency.' },
    { title: 'Guessing how the store is doing?', desc: 'Without data, you cannot steer store performance with confidence.' },
  ],
  checkoutTitle: 'One iPad\nruns the whole store',
  checkoutAccent: 'Intuitive checkout that speeds up sales',
  checkoutDesc: 'A simple POS interface cuts wait times and speeds every transaction.',
  checkoutItems: ['Card readers and multi-payment options', 'One-tap discounts / membership', 'Fast receipts and invoices', 'Live transaction details'],
  memberTitle: 'Profile insights\nMembership made easy',
  memberDesc: 'Deep member profiles help you understand buying behavior and lift repurchase.',
  memberItems: ['Quick member enrollment', 'Online and offline purchase history', 'Tiers and member pricing', 'Customer tags and notes'],
  reportTitle: 'Evidence-based\nAutomated analytics',
  reportDesc: 'Auto reports keep store performance visible so decisions stay sharp.',
  reportItems: ['Live transaction details', 'Multi-dimension sales reports', 'Product sales rankings', 'Staff performance stats'],
  inventoryTitle: 'Clear at a glance\nInventory that stays organized',
  inventoryDesc: 'Real-time stock control helps avoid stockouts and overstock.',
  inventoryItems: ['Real-time inventory sync', 'Bulk product management', 'Low-stock alerts', 'Online and store stock unified'],
  ctaTitle: 'ARVIX POS levels up your brand',
  ctaSubtitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, PosCopy>> & { 'zh-TW': PosCopy; en: PosCopy } = {
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

export default function PosPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(225, 225, 255) 0%, rgb(169, 255, 241) 50%, rgb(44, 194, 114) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="ARVIX POS" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {c.pains.map(item => (
              <div key={item.title} className="bg-white p-6 rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2 whitespace-pre-line" style={{ color: '#00142D' }}>{c.checkoutTitle}</h2>
            <h2 className="text-2xl font-black mb-4" style={{ color: '#5B5FF0' }}>{c.checkoutAccent}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.checkoutDesc}</p>
            <div className="space-y-3">
              {c.checkoutItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="ARVIX POS checkout" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.memberTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.memberDesc}</p>
            <div className="space-y-3">
              {c.memberItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80" alt="ARVIX POS members" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.reportTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.reportDesc}</p>
            <div className="space-y-3">
              {c.reportItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80" alt="ARVIX POS reports" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.inventoryTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.inventoryDesc}</p>
            <div className="space-y-3">
              {c.inventoryItems.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="ARVIX POS inventory" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white mb-8 opacity-80">{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
