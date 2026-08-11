'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

const sectionImages = [
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80'
]

type Feature = { name: string; desc: string }
type Section = { label: string; features: Feature[] }
type PosFeaturesCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  cta: string
  sections: Section[]
}

const zhTW: PosFeaturesCopy = {
  title: '門市 iPad POS 系統，銷售營運透明好管理',
  subtitle: '一鍵搞定門市的庫存、進銷存管理，從收銀到收帳，數量、金額不出錯！',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
  sections: [
    {
      label: '收銀結帳',
      features: [
      { name: '完整收銀紀錄', desc: '從顧客拿著商品到櫃檯結帳那刻起，清楚保留所有資訊：代入會員、結帳店員、通路選擇、折扣與付款方式等。' },
      { name: '智慧收銀結帳介面', desc: '視覺化的商品呈現、可調整商品排序、即時查看商品庫存等資訊，簡單又好上手的介面設計。' },
      { name: '實體金流串接', desc: 'ARVIX Payments 提供完整的 OMO 金流服務，線下同步串接 POS 刷卡機、LINE Pay，一站整合全通路金流帳務。' },
      { name: '流暢的購物車', desc: '在顧客挑選時先替顧客將已挑選的商品加入購物車，並先設定會員、優惠等資訊，有效節省結帳時間。' },
      { name: '多樣化折扣與變價設定', desc: '靈活設定商品折扣，從單樣商品折扣、整單優惠折扣都能輕鬆應變，也可設定現金折扣或折數折扣。' },
      { name: '多種付款情境與收款方式', desc: '預定單、未付款留貨、單筆拆不同方式付款及退換貨等付款情境都能聰明應對，系統自動更新庫存、營收。' },
      { name: '發票收據開立', desc: '串連發票硬體，電子發票與收據輕鬆開！可開關發票與收據是否需要列印，應付每一個可能的狀況。' },
      { name: '自訂折扣模板', desc: 'POS 後台內建折扣模板，自訂折扣名稱及 % 數折扣或固定金額折扣，於收銀購物車內快速選擇帶入。' },
      ],
    },
    {
      label: '商品與庫存',
      features: [
      { name: '商品建立 功能模組', desc: '每間商店可上傳 1,000 件商品，支援各式新增商品情境，可設定商品照片、規格、庫存、分類、供應商等資訊。' },
      { name: '商品盤點', desc: '透過掃描槍掃描條碼在 iPad 上完成盤點操作，精準掌握庫存狀況，避免庫存誤差。' },
      { name: '商品進貨', desc: '完整紀錄進貨歷程，搭配掃描槍快速完成進貨作業，讓庫存管理更有效率。' },
      { name: '庫存狀況與異動紀錄', desc: '隨時掌握庫存動向，完整記錄每一筆庫存異動，讓商品管理更透明清晰。' },
      { name: '商品供應商', desc: '管理商品供應商資訊，方便追蹤進貨來源，優化供應鏈管理。' },
      { name: '隱藏設定', desc: '可設定隱藏商品，靈活應對不同的銷售情境，讓商品管理更彈性。' },
      ],
    },
    {
      label: '會員管理',
      features: [
      { name: '顧客管理系統', desc: '完整記錄顧客資料與消費歷程，讓你深入了解每位顧客的需求與偏好。' },
      { name: '顧客交易紀錄', desc: '查看顧客線上、線下完整消費紀錄，掌握顧客全通路消費輪廓。' },
      { name: '顧客標籤與備註', desc: '為顧客添加標籤和備註，方便進行精準分眾行銷和個人化服務。' },
      { name: '新增顧客與加入會員', desc: '門市過路客掃描 QR code 即可快速成為會員，加入會員一點都不複雜。' },
      { name: '廣播中心 功能模組', desc: '透過廣播中心發送 Email / 簡訊等，精準觸達目標顧客，提升回購率。' },
      { name: '會員分級與專屬價格 功能模組', desc: '設定多層會員等級，提供不同等級的專屬優惠，有效培養忠實顧客。' },
      ],
    },
    {
      label: '商品條碼',
      features: [
      { name: '自動生成商品條碼', desc: '系統自動為商品生成條碼，搭配標籤機列印商品條碼來製作吊牌，讓商品管理更有效率。' },
      { name: '條碼掃描結帳', desc: '結帳時利用掃描槍掃描條碼，快速完成結帳流程，大幅提升門市結帳效率。' },
      { name: '條碼盤點', desc: '商品盤點時，利用掃描槍掃描條碼在 iPad 上完成操作，讓盤點作業更快速準確。' },
      ],
    },
    {
      label: '多店管理',
      features: [
      { name: '多店商品與庫存管理', desc: '在後台一站同步管理各通路庫存，讓多店管理更輕鬆省時。' },
      { name: '多店銷售分析', desc: '比較各門市的銷售表現，找出最佳實踐，優化整體營運策略。' },
      { name: '商品調撥', desc: '支援門市間的商品調撥功能，靈活調配庫存，避免缺貨或積壓。' },
      ],
    },
    {
      label: '分析報表',
      features: [
      { name: '全通路銷售分析', desc: '圖表化的報告包含全通路、網店及實體店的銷售分析，讓你一目瞭然營運狀況。' },
      { name: '顧客消費分析', desc: '深度分析顧客消費行為，掌握每位顧客的喜好，讓行銷更精準有效。' },
      { name: '員工打卡、業績分析', desc: '管理員工出勤記錄，分析各員工業績表現，讓人力管理更有效率。' },
      { name: '商品銷售與進銷存分析', desc: '完整分析商品銷售趨勢和進銷存狀況，讓選品補貨決策更有依據。' },
      ],
    },
    {
      label: '其他店務',
      features: [
      { name: '發票報稅報表', desc: '系統支援發票報稅報表，讓你開店更省力，財務管理更清晰。' },
      { name: '員工管理', desc: '設定不同員工帳號和權限，讓門市管理更有條理，保護商業資訊安全。' },
      { name: '預定單管理', desc: '支援預定單功能，讓顧客可以預先訂購商品，提升顧客服務體驗。' },
      ],
    },
    {
      label: '全通路整合',
      features: [
      { name: '線上買門市取 APP', desc: '支援線上下單、門市取貨的購物模式，提供顧客更靈活的購物體驗。' },
      { name: 'Smart OMO 推薦商品導購連結', desc: '店員可透過客製化購物車連結，隨時隨地將顧客導至網店消費，導購價值極大化。' },
      { name: '顧客分群搭配廣播中心', desc: '搭配分眾行銷工具，精準觸達不同客群，提升行銷效益。' },
      { name: 'Shopper App 整合', desc: 'Shopper App 與 ARVIX POS 全面整合電子會員條碼、訂單取貨碼及優惠券條碼。' },
      ],
    },
  ],
}

const zhCN: PosFeaturesCopy = {
  title: '门店 iPad POS 系统，销售运营透明好管理',
  subtitle: '一键搞定门店的库存、进销存管理，从收银到收账，数量、金额不出错！',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
  sections: [
    {
      label: '收银结账',
      features: [
      { name: '完整收银记录', desc: '从顾客拿着商品到柜台结账那刻起，清楚保留所有信息：代入会员、结账店员、渠道选择、折扣与付款方式等。' },
      { name: '智慧收银结账界面', desc: '视觉化的商品呈现、可调整商品排序、即时查看商品库存等信息，简单又好上手的界面设计。' },
      { name: '实体金流串接', desc: 'ARVIX Payments 提供完整的 OMO 金流服务，线下同步串接 POS 刷卡机、LINE Pay，一站整合全渠道金流账务。' },
      { name: '流畅的购物车', desc: '在顾客挑选时先替顾客将已挑选的商品加入购物车，并先设定会员、优惠等信息，有效节省结账时间。' },
      { name: '多样化折扣与变价设定', desc: '灵活设定商品折扣，从单样商品折扣、整单优惠折扣都能轻松应变，也可设定现金折扣或折数折扣。' },
      { name: '多种付款情境与收款方式', desc: '预定单、未付款留货、单笔拆不同方式付款及退换货等付款情境都能聪明应对，系统自动更新库存、营收。' },
      { name: '发票收据开立', desc: '串接发票硬件，电子发票与收据轻松开！可开关发票与收据是否需要打印，应付每一个可能的状况。' },
      { name: '自定义折扣模板', desc: 'POS 后台内建折扣模板，自定义折扣名称及 % 数折扣或固定金额折扣，于收银购物车内快速选择带入。' },
      ],
    },
    {
      label: '商品与库存',
      features: [
      { name: '商品建立 功能模块', desc: '每间商店可上传 1,000 件商品，支持各式新增商品情境，可设定商品照片、规格、库存、分类、供应商等信息。' },
      { name: '商品盘点', desc: '透过扫描枪扫描条码在 iPad 上完成盘点操作，精准掌握库存状况，避免库存误差。' },
      { name: '商品进货', desc: '完整记录进货历程，搭配扫描枪快速完成进货作业，让库存管理更有效率。' },
      { name: '库存状况与异动记录', desc: '随时掌握库存动向，完整记录每一笔库存异动，让商品管理更透明清晰。' },
      { name: '商品供应商', desc: '管理商品供应商信息，方便追踪进货来源，优化供应链管理。' },
      { name: '隐藏设定', desc: '可设定隐藏商品，灵活应对不同的销售情境，让商品管理更弹性。' },
      ],
    },
    {
      label: '会员管理',
      features: [
      { name: '顾客管理系统', desc: '完整记录顾客资料与消费历程，让你深入了解每位顾客的需求与偏好。' },
      { name: '顾客交易记录', desc: '查看顾客线上、线下完整消费记录，掌握顾客全渠道消费轮廓。' },
      { name: '顾客标签与备注', desc: '为顾客添加标签和备注，方便进行精准分群营销和个人化服务。' },
      { name: '新增顾客与加入会员', desc: '门店过路客扫描 QR code 即可快速成为会员，加入会员一点都不复杂。' },
      { name: '广播中心 功能模块', desc: '透过广播中心发送 Email / 短信等，精准触达目标顾客，提升复购率。' },
      { name: '会员分级与专属价格 功能模块', desc: '设定多层会员等级，提供不同等级的专属优惠，有效培养忠实顾客。' },
      ],
    },
    {
      label: '商品条码',
      features: [
      { name: '自动生成商品条码', desc: '系统自动为商品生成条码，搭配标签机打印商品条码来制作吊牌，让商品管理更有效率。' },
      { name: '条码扫描结账', desc: '结账时利用扫描枪扫描条码，快速完成结账流程，大幅提升门店结账效率。' },
      { name: '条码盘点', desc: '商品盘点时，利用扫描枪扫描条码在 iPad 上完成操作，让盘点作业更快速准确。' },
      ],
    },
    {
      label: '多店管理',
      features: [
      { name: '多店商品与库存管理', desc: '在后台一站同步管理各渠道库存，让多店管理更轻松省时。' },
      { name: '多店销售分析', desc: '比较各门店的销售表现，找出最佳实践，优化整体运营策略。' },
      { name: '商品调拨', desc: '支持门店间的商品调拨功能，灵活调配库存，避免缺货或积压。' },
      ],
    },
    {
      label: '分析报表',
      features: [
      { name: '全渠道销售分析', desc: '图表化的报告包含全渠道、网店及实体店的销售分析，让你一目了然运营状况。' },
      { name: '顾客消费分析', desc: '深度分析顾客消费行为，掌握每位顾客的喜好，让营销更精准有效。' },
      { name: '员工打卡、业绩分析', desc: '管理员工出勤记录，分析各员工业绩表现，让人力管理更有效率。' },
      { name: '商品销售与进销存分析', desc: '完整分析商品销售趋势和进销存状况，让选品补货决策更有依据。' },
      ],
    },
    {
      label: '其他店务',
      features: [
      { name: '发票报税报表', desc: '系统支持发票报税报表，让你开店更省力，财务管理更清晰。' },
      { name: '员工管理', desc: '设定不同员工账号和权限，让门店管理更有条理，保护商业信息安全。' },
      { name: '预定单管理', desc: '支持预定单功能，让顾客可以预先订购商品，提升顾客服务体验。' },
      ],
    },
    {
      label: '全渠道整合',
      features: [
      { name: '线上买门店取 APP', desc: '支持线上下单、门店取货的购物模式，提供顾客更灵活的购物体验。' },
      { name: 'Smart OMO 推荐商品导购链接', desc: '店员可透过定制化购物车链接，随时随地将顾客导至网店消费，导购价值极大化。' },
      { name: '顾客分群搭配广播中心', desc: '搭配分群营销工具，精准触达不同客群，提升营销效益。' },
      { name: 'Shopper App 整合', desc: 'Shopper App 与 ARVIX POS 全面整合电子会员条码、订单取货码及优惠券条码。' },
      ],
    },
  ],
}

const en: PosFeaturesCopy = {
  title: 'In-store iPad POS — clear sales ops',
  subtitle: 'Inventory, purchasing, and checkout in one flow — quantities and amounts stay accurate.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
  sections: [
    {
      label: 'Checkout',
      features: [
      { name: 'Complete checkout logs', desc: 'Capture member, cashier, channel, discounts, and payment from the moment of sale.' },
      { name: 'Smart checkout UI', desc: 'Visual products, sortable lists, and live stock — simple to learn.' },
      { name: 'In-store payments', desc: 'ARVIX Payments + POS terminals and LINE Pay for unified omnichannel finance.' },
      { name: 'Smooth cart flow', desc: 'Preload cart items, membership, and offers while shoppers browse to cut wait time.' },
      { name: 'Flexible discounts', desc: 'Item or order discounts, cash-off or percent-off templates.' },
      { name: 'Multiple payment scenarios', desc: 'Deposits, hold-unpaid, split tender, and returns with auto stock/revenue updates.' },
      { name: 'Invoices & receipts', desc: 'Connect invoice hardware; toggle print for invoices and receipts.' },
      { name: 'Discount templates', desc: 'Named % or fixed discounts ready to apply from the POS cart.' },
      ],
    },
    {
      label: 'Products & inventory',
      features: [
      { name: 'Product creation', desc: 'Upload up to 1,000 products with photos, variants, stock, categories, and suppliers.' },
      { name: 'Stocktakes', desc: 'Scan barcodes on iPad for accurate counts.' },
      { name: 'Receiving', desc: 'Log receiving history with scanner-assisted workflows.' },
      { name: 'Stock & movement logs', desc: 'Track every inventory change with full transparency.' },
      { name: 'Suppliers', desc: 'Manage supplier data for cleaner purchasing.' },
      { name: 'Hidden products', desc: 'Hide SKUs when sales scenarios need flexibility.' },
      ],
    },
    {
      label: 'Membership',
      features: [
      { name: 'CRM', desc: 'Full profiles and purchase history.' },
      { name: 'Transaction history', desc: 'Online + offline spend for a complete profile.' },
      { name: 'Tags & notes', desc: 'Annotate customers for precise outreach.' },
      { name: 'Quick enroll', desc: 'Walk-ins scan a QR code to join membership.' },
      { name: 'Broadcast center', desc: 'Email/SMS campaigns that drive repurchase.' },
      { name: 'Tiers & member pricing', desc: 'Tiered benefits and exclusive prices.' },
      ],
    },
    {
      label: 'Barcodes',
      features: [
      { name: 'Auto barcodes', desc: 'Generate barcodes and print hang tags with a labeler.' },
      { name: 'Scan to checkout', desc: 'Scanner-assisted checkout for faster lines.' },
      { name: 'Scan stocktakes', desc: 'Barcode stocktakes on iPad for speed and accuracy.' },
      ],
    },
    {
      label: 'Multi-store',
      features: [
      { name: 'Multi-store inventory', desc: 'Sync channel stock from one admin.' },
      { name: 'Multi-store sales analytics', desc: 'Compare stores and copy what works.' },
      { name: 'Transfers', desc: 'Move stock between stores to avoid stockouts or overstock.' },
      ],
    },
    {
      label: 'Reports',
      features: [
      { name: 'Omnichannel sales', desc: 'Chart online, offline, and all-channel performance.' },
      { name: 'Customer spend analysis', desc: 'Behavior insights for sharper marketing.' },
      { name: 'Attendance & staff performance', desc: 'Track shifts and individual results.' },
      { name: 'Merchandising & inventory', desc: 'Sales trends and purchasing signals for better replenishment.' },
      ],
    },
    {
      label: 'Store ops',
      features: [
      { name: 'Tax & invoice reports', desc: 'Simplify store finance and compliance.' },
      { name: 'Staff management', desc: 'Accounts and permissions that protect ops data.' },
      { name: 'Pre-orders', desc: 'Let customers reserve products ahead of time.' },
      ],
    },
    {
      label: 'Omnichannel',
      features: [
      { name: 'BOPIS app', desc: 'Buy online, pick up in store.' },
      { name: 'Smart OMO shopping links', desc: 'Staff share custom carts anytime to maximize guided sales.' },
      { name: 'Segments + broadcast', desc: 'Target the right cohorts with broadcast tools.' },
      { name: 'Shopper App integration', desc: 'Member barcodes, pickup codes, and coupon barcodes with POS.' },
      ],
    },
  ],
}

const copy: Partial<Record<Locale, PosFeaturesCopy>> & { 'zh-TW': PosFeaturesCopy; en: PosFeaturesCopy } = {
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

export default function PosFeaturesPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [active, setActive] = useState(0)
  const section = c.sections[active]

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 87, 230) 0%, rgb(0, 65, 177) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">{c.title}</h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-56 flex-shrink-0">
            <div className="flex flex-col gap-1">
              {c.sections.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className="text-left px-4 py-3 rounded-lg font-semibold text-sm transition-all"
                  style={{
                    backgroundColor: active === i ? '#5B5FF0' : 'transparent',
                    color: active === i ? '#fff' : '#00142D',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src={sectionImages[active]} alt={section.label} width={800} height={500} className="w-full h-auto rounded-2xl mb-8" unoptimized />
            <div className="grid md:grid-cols-2 gap-4">
              {section.features.map(f => (
                <div key={f.name} className="p-4 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <h3 className="font-bold mb-1 text-sm" style={{ color: '#00142D' }}>{f.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#687280' }}>{f.desc}</p>
                </div>
              ))}
            </div>
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
