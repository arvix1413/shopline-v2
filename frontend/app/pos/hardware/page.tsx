'use client'

import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type PosHardwareCopy = {
  title: string
  subtitle: string
  tags: string[]
  howTitle: string
  steps: { num: string; desc: string }[]
  hardware: { name: string; desc: string; img: string }[]
  ctaTitle: string
  ctaSubtitle: string
  consult: string
}

const zhTW: PosHardwareCopy = {
  title: 'POS 週邊硬體',
  subtitle: '專為服飾、零售業設計的 iPad POS 系統，支援收銀結帳、商品庫存、進銷存及會員管理等功能，搭配直覺式的操作介面讓你輕鬆上手，管理店面超 Easy！',
  tags: ['彈性選購', '快速連線', '輕巧大方', '免費諮詢'],
  howTitle: '硬體怎麼用？',
  steps: [
    { num: 'STEP 1', desc: '商品抵達後利用 iPad 建檔，搭配標籤機列印商品條碼來製作吊牌' },
    { num: 'STEP 2', desc: '結帳時利用掃描槍掃描條碼，搭配錢箱及電子發票印表機完成收銀' },
    { num: 'STEP 3', desc: '商品盤點、進貨、移庫時，利用掃描槍掃描條碼在 iPad 上完成操作' },
  ],
  hardware: [
    { name: '錢櫃 ( 大 / 小 )', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '適合各種門市規模的錢櫃選擇，安全收納現金' },
    { name: '無線條碼標籤機', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '快速列印商品條碼標籤，製作吊牌更有效率' },
    { name: '無線藍牙掃描槍', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '高效掃描商品條碼，加速結帳、盤點、進貨流程' },
    { name: '電子發票印表機', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '符合台灣電子發票規範，串連發票硬體輕鬆開立' },
  ],
  ctaTitle: '專為零售業設計的 iPad POS 系統，讓你管理店面超 Easy！',
  ctaSubtitle: '與 ARVIX 專業顧問進行一對一免費電話諮詢！',
  consult: '免費諮詢',
}

const zhCN: PosHardwareCopy = {
  title: 'POS 周边硬件',
  subtitle: '专为服饰、零售业设计的 iPad POS 系统，支持收银结账、商品库存、进销存及会员管理等功能，搭配直觉式操作界面让你轻松上手，管理店面超 Easy！',
  tags: ['弹性选购', '快速连线', '轻巧大方', '免费咨询'],
  howTitle: '硬件怎么用？',
  steps: [
    { num: 'STEP 1', desc: '商品抵达后利用 iPad 建档，搭配标签机打印商品条码来制作吊牌' },
    { num: 'STEP 2', desc: '结账时利用扫描枪扫描条码，搭配钱箱及电子发票打印机完成收银' },
    { num: 'STEP 3', desc: '商品盘点、进货、移库时，利用扫描枪扫描条码在 iPad 上完成操作' },
  ],
  hardware: [
    { name: '钱柜 ( 大 / 小 )', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '适合各种门店规模的钱柜选择，安全收纳现金' },
    { name: '无线条码标签机', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '快速打印商品条码标签，制作吊牌更有效率' },
    { name: '无线蓝牙扫描枪', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '高效扫描商品条码，加速结账、盘点、进货流程' },
    { name: '电子发票打印机', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '符合电子发票规范，串接发票硬件轻松开立' },
  ],
  ctaTitle: '专为零售业设计的 iPad POS 系统，让你管理店面超 Easy！',
  ctaSubtitle: '与 ARVIX 专业顾问进行一对一免费电话咨询！',
  consult: '免费咨询',
}

const en: PosHardwareCopy = {
  title: 'POS hardware peripherals',
  subtitle: 'An iPad POS built for fashion and retail — checkout, inventory, purchasing, and membership with an intuitive UI that makes store ops easy.',
  tags: ['Flexible purchase', 'Fast pairing', 'Compact design', 'Free consult'],
  howTitle: 'How the hardware works',
  steps: [
    { num: 'STEP 1', desc: 'Receive goods, create products on iPad, and print barcodes with the label printer for hang tags' },
    { num: 'STEP 2', desc: 'Scan barcodes at checkout with the cash drawer and e-invoice printer' },
    { num: 'STEP 3', desc: 'Use the scanner on iPad for stocktakes, receiving, and transfers' },
  ],
  hardware: [
    { name: 'Cash drawer (S / L)', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Secure cash storage sized for any store' },
    { name: 'Wireless barcode label printer', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: 'Print product labels and hang tags faster' },
    { name: 'Wireless Bluetooth scanner', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: 'Speed up checkout, stocktakes, and receiving' },
    { name: 'E-invoice printer', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: 'Compliant e-invoicing hardware, ready to connect' },
  ],
  ctaTitle: 'Retail-ready iPad POS — store management made easy',
  ctaSubtitle: 'Book a free 1:1 call with an ARVIX advisor.',
  consult: 'Free consultation',
}

const copy: Partial<Record<Locale, PosHardwareCopy>> & { 'zh-TW': PosHardwareCopy; en: PosHardwareCopy } = {
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

export default function PosHardwarePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(225, 225, 255) 0%, rgb(169, 255, 241) 50%, rgb(44, 194, 114) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {c.tags.map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: '#00142D' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="POS hardware" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {c.steps.map((step) => (
              <div key={step.num} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-black mb-4" style={{ color: '#5B5FF0' }}>{step.num}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#354253' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.hardware.map(h => (
              <div key={h.name} className="rounded-2xl overflow-hidden border border-gray-100">
                <Image src={h.img} alt={h.name} width={400} height={300} className="w-full h-48 object-cover" unoptimized />
                <div className="p-5">
                  <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{h.name}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white opacity-70 mb-8">{c.ctaSubtitle}</p>
          <a href="/consultation" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.consult}
          </a>
        </div>
      </section>
    </main>
  )
}
