'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SocialCopy = {
  title: string
  subtitle: string
  cta: string
  liveTitle: string
  liveDesc: string
  liveFeatures: string[]
  botTitle: string
  botDesc: string
  botFeatures: string[]
  msgTitle: string
  msgDesc: string
  msgFeatures: string[]
  ctaTitle: string
  ctaSubtitle: string
}

const zhTW: SocialCopy = {
  title: 'ARVIX 社群購物系統\n簡單開賣、快速整單',
  subtitle: '全方位的「社群＋電商」購物系統！善用社群的高互動性並透過系統的高導購性，包含直播購物、導購機器人及訊息整合中心，從直播互動、留言導購到後續整單付款等無縫整合購物體驗，讓顧客快速下單，你輕鬆收單！',
  cta: '立即免費試用',
  liveTitle: '直播購物就該這樣玩',
  liveDesc: 'ARVIX LIVE 獨立直播間可同步串連 Facebook、Instagram 及 LINE 直播，跨渠道同步開播。只要輸入關鍵字 +1，系統將自動發送購物連結，讓顧客快速完成結帳。',
  liveFeatures: ['ARVIX LIVE 獨立直播間', 'FB / IG / LINE +1 接單', '專屬開播 APP', '直播商品庫存與網店同步', '抽獎、競標、搶答、留言搶優惠等活動', '直播成效統計報告'],
  botTitle: '邊聊邊買\n社群導購機器人',
  botDesc: '總是會不小心漏掉顧客訊息？讓聊天機器人來幫你！ARVIX 社群導購機器人可以在對話嵌入商品、購買按鈕及關鍵字，顧客只需點選即可開始購物；同時，也可以設定常用回覆，提升服務效率。',
  botFeatures: ['FB & LINE 對話式購物', 'FB 歡迎訊息及選單設定', 'FB & LINE 訂單通知機器人', '自訂聊天機器人腳本', 'FB & IG 貼文 +1 銷售', '社群快速註冊連結'],
  msgTitle: '暢行無阻\n訊息整合中心',
  msgDesc: '顧客從四面八方來，該如何管理來自各渠道的訊息？訊息整合中心的一站式管理介面，整併網店、訂單、Facebook 和 Instagram 的訊息 / 貼文及 LINE 還有 WhatsApp 的訊息，為商家提供最完整的訊息管理解決方案。',
  msgFeatures: ['多管道訊息整合', '預存常用訊息', '極速購物車', '訊息篩選與快速搜尋', 'FB 貼文快速回覆', '自動 / 手動指派回覆對話幫手'],
  ctaTitle: 'ARVIX 社群購物系統完美結合「社群＋電商」',
  ctaSubtitle: '跳脫一般社群平台破碎化的購物流程，讓你的顧客邊看直播就能邊下單，打造全方位的社群購物體驗！',
}

const zhCN: SocialCopy = {
  title: 'ARVIX 社群购物系统\n简单开卖、快速整单',
  subtitle: '全方位的「社群＋电商」购物系统！善用社群的高互动性并通过系统的高导购性，包含直播购物、导购机器人及消息整合中心，从直播互动、留言导购到后续整单付款等无缝整合购物体验，让顾客快速下单，你轻松收单！',
  cta: '立即免费试用',
  liveTitle: '直播购物就该这样玩',
  liveDesc: 'ARVIX LIVE 独立直播间可同步串联 Facebook、Instagram 及 LINE 直播，跨渠道同步开播。只要输入关键字 +1，系统将自动发送购物链接，让顾客快速完成结账。',
  liveFeatures: ['ARVIX LIVE 独立直播间', 'FB / IG / LINE +1 接单', '专属开播 APP', '直播商品库存与网店同步', '抽奖、竞标、抢答、留言抢优惠等活动', '直播成效统计报告'],
  botTitle: '边聊边买\n社群导购机器人',
  botDesc: '总是会不小心漏掉顾客消息？让聊天机器人来帮你！ARVIX 社群导购机器人可以在对话嵌入商品、购买按钮及关键字，顾客只需点选即可开始购物；同时，也可以设定常用回复，提升服务效率。',
  botFeatures: ['FB & LINE 对话式购物', 'FB 欢迎消息及选单设定', 'FB & LINE 订单通知机器人', '自定义聊天机器人脚本', 'FB & IG 贴文 +1 销售', '社群快速注册链接'],
  msgTitle: '畅行无阻\n消息整合中心',
  msgDesc: '顾客从四面八方来，该如何管理来自各渠道的消息？消息整合中心的一站式管理界面，整并网店、订单、Facebook 和 Instagram 的消息 / 贴文及 LINE 还有 WhatsApp 的消息，为商家提供最完整的消息管理解决方案。',
  msgFeatures: ['多渠道消息整合', '预存常用消息', '极速购物车', '消息筛选与快速搜索', 'FB 贴文快速回复', '自动 / 手动指派回复对话帮手'],
  ctaTitle: 'ARVIX 社群购物系统完美结合「社群＋电商」',
  ctaSubtitle: '跳脱一般社群平台破碎化的购物流程，让你的顾客边看直播就能边下单，打造全方位的社群购物体验！',
}

const en: SocialCopy = {
  title: 'ARVIX social commerce\nSell simply. Close orders fast.',
  subtitle: 'A full social + commerce stack — live shopping, shopping bots, and an inbox hub — so shoppers buy in the feed and you collect orders without friction.',
  cta: 'Start free trial',
  liveTitle: 'Live shopping, done right',
  liveDesc: 'ARVIX LIVE rooms sync Facebook, Instagram, and LINE streams. Keyword +1 auto-sends a cart link so shoppers check out fast.',
  liveFeatures: ['ARVIX LIVE dedicated room', 'FB / IG / LINE +1 ordering', 'Dedicated broadcast app', 'Live inventory synced to store', 'Giveaways, bids, quizzes, comment deals', 'Live performance reports'],
  botTitle: 'Chat while they shop\nSocial shopping bots',
  botDesc: 'Never miss a DM. Embed products, buy buttons, and keywords in chat — plus canned replies to serve faster.',
  botFeatures: ['FB & LINE conversational shopping', 'FB welcome messages and menus', 'FB & LINE order notify bots', 'Custom chatbot scripts', 'FB & IG post +1 sales', 'Social quick-signup links'],
  msgTitle: 'One clear path\nUnified message hub',
  msgDesc: 'Messages arrive from everywhere. Unify store, orders, Facebook, Instagram, LINE, and WhatsApp in one inbox.',
  msgFeatures: ['Multi-channel inbox', 'Saved quick replies', 'Express cart', 'Filters and fast search', 'Quick FB post replies', 'Auto / manual reply assignment'],
  ctaTitle: 'Social + commerce in one ARVIX system',
  ctaSubtitle: 'Skip fragmented social checkouts — shoppers buy while watching live for a full social shopping journey.',
}

const copy: Partial<Record<Locale, SocialCopy>> & { 'zh-TW': SocialCopy; en: SocialCopy } = {
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

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 mt-6">
      {items.map(item => (
        <div key={item} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }} />
          <span className="font-semibold text-sm" style={{ color: '#00142D' }}>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default function SocialCommercePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 225, 249) 0%, rgb(238, 169, 255) 50%, rgb(149, 92, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#3D4A5C' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="ARVIX social commerce" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(rgb(238, 231, 253) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.liveTitle}</h2>
            <p style={{ color: '#687280' }}>{c.liveDesc}</p>
            <FeatureList items={c.liveFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="ARVIX live shopping" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.botTitle}</h2>
            <p style={{ color: '#687280' }}>{c.botDesc}</p>
            <FeatureList items={c.botFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="ARVIX shopping bots" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(rgb(238, 231, 253) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.msgTitle}</h2>
            <p style={{ color: '#687280' }}>{c.msgDesc}</p>
            <FeatureList items={c.msgFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="ARVIX message hub" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(130, 124, 255) 0%, rgb(246, 208, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.ctaTitle}</h2>
          <p className="mb-8" style={{ color: '#3D4A5C' }}>{c.ctaSubtitle}</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
