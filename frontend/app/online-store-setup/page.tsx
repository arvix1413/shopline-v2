'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SetupCopy = {
  title: string
  subtitle: string
  steps: { num: string; title: string; items: string[] }[]
  doneTitle: string
  cta: string
}

const zhTW: SetupCopy = {
  title: '5 個步驟\n輕鬆建立你的網路商店',
  subtitle: '想架設品牌電商網站該怎麼開始？ARVIX 為你整理開店關鍵 5 大步驟，助你快速上線開賣！',
  steps: [
    { num: '1', title: '建立品牌網站商店', items: ['設定商店名稱、品牌標誌 ( Logo )', '在 ARVIX 後台申請專屬的獨有網址'] },
    { num: '2', title: '打造獨特品牌風格', items: ['自由選擇版型，挑選符合品牌調性的設計主題', '開始建置頁面，透過拖曳方式完成頁面編排'] },
    { num: '3', title: '設定物流送貨選項', items: ['多樣物流選擇，整合黑貓、7-11、全家等主流物流', '設定運費規則，依重量、金額或地區彈性設定'] },
    { num: '4', title: '制定金流收款方式', items: ['開通 ARVIX Payments，一次申請多種支付方式', '支援信用卡、ATM 轉帳、行動支付等多元收款'] },
    { num: '5', title: '上傳商品並建立分類', items: ['新增商品資訊、圖片與價格，設定商品規格', '建立商品分類，讓顧客輕鬆找到想要的商品'] },
  ],
  doneTitle: '大功告成！ 立即開始你的網路生意',
  cta: '立即免費試用',
}

const zhCN: SetupCopy = {
  title: '5 个步骤\n轻松建立你的网络商店',
  subtitle: '想架设品牌电商网站该怎么开始？ARVIX 为你整理开店关键 5 大步骤，助你快速上线开卖！',
  steps: [
    { num: '1', title: '建立品牌网站商店', items: ['设定商店名称、品牌标志 ( Logo )', '在 ARVIX 后台申请专属的独有网址'] },
    { num: '2', title: '打造独特品牌风格', items: ['自由选择版型，挑选符合品牌调性的设计主题', '开始建置页面，透过拖曳方式完成页面编排'] },
    { num: '3', title: '设定物流送货选项', items: ['多样物流选择，整合黑猫、7-11、全家等主流物流', '设定运费规则，依重量、金额或地区弹性设定'] },
    { num: '4', title: '制定金流收款方式', items: ['开通 ARVIX Payments，一次申请多种支付方式', '支持信用卡、ATM 转账、行动支付等多元收款'] },
    { num: '5', title: '上传商品并建立分类', items: ['新增商品信息、图片与价格，设定商品规格', '建立商品分类，让顾客轻松找到想要的商品'] },
  ],
  doneTitle: '大功告成！立即开始你的网络生意',
  cta: '立即免费试用',
}

const en: SetupCopy = {
  title: '5 steps\nLaunch your online store with ease',
  subtitle: 'Not sure where to start? ARVIX outlines five key steps to go live fast.',
  steps: [
    { num: '1', title: 'Create your brand store', items: ['Set store name and logo', 'Request a unique store URL in ARVIX admin'] },
    { num: '2', title: 'Define your brand look', items: ['Pick a theme that matches your brand', 'Build pages with drag-and-drop'] },
    { num: '3', title: 'Configure shipping', items: ['Integrate major carriers like Black Cat, 7-Eleven, FamilyMart', 'Set flexible shipping rules by weight, amount, or region'] },
    { num: '4', title: 'Set up payments', items: ['Enable ARVIX Payments for multiple methods at once', 'Cards, ATM transfer, mobile wallets, and more'] },
    { num: '5', title: 'Upload products & categories', items: ['Add product info, images, prices, and variants', 'Create categories so shoppers find products easily'] },
  ],
  doneTitle: 'You’re ready — start selling online',
  cta: 'Start free trial',
}

const copy: Partial<Record<Locale, SetupCopy>> & { 'zh-TW': SetupCopy; en: SetupCopy } = {
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

export default function OnlineStoreSetupPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {c.steps.map((step) => (
              <div key={step.num} className="flex gap-6 p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shrink-0" style={{ backgroundColor: '#5B5FF0' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00142D' }}>STEP. {step.num} {step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span style={{ color: '#5B5FF0' }}>→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.doneTitle}</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
