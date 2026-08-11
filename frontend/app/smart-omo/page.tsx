'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SmartOmoCopy = {
  title: string
  subtitle: string
  cta: string
  joinTitle: string
  joinDesc: string
  joinItems: string[]
  profileTitle: string
  profileDesc: string
  profileItems: string[]
  kolTitle: string
  kolDesc: string
  kolItems: string[]
  ctaTitle: string
}

const zhTW: SmartOmoCopy = {
  title: '解鎖全通路新零售',
  subtitle: '你知道嗎？同時在網店和門市消費的會員能多帶來 3 倍業績。Smart OMO 會員導購工具助你輕鬆轉型全通路新零售模式。',
  cta: '立即免費試用',
  joinTitle: '快速註冊、綁定 LINE 帳號\n會員，輕鬆 Get!',
  joinDesc: '進店註冊會員，會員數、LINE 好友同步成長，讓你的顧客資產快速累積。',
  joinItems: ['快速加入會員', '同步加 LINE 好友'],
  profileTitle: '全通路消費輪廓整合\n店員銷售強力推手',
  profileDesc: '掌握會員全通路資訊，提袋率大幅增加。店員 = 你的最佳 KOL，銷售更多可能。',
  profileItems: ['全通路資料整合', '線下消費金額同步累積'],
  kolTitle: '店員 = 你的最佳 KOL\n銷售，更多可能',
  kolDesc: '客製化購物車連結，導購不分時、地、域。關鍵 3 步驟跨入全通路時代趁現在。',
  kolItems: ['商品導購連結', '業績歸屬管理'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: SmartOmoCopy = {
  title: '解锁全渠道新零售',
  subtitle: '你知道吗？同时在网店和门店消费的会员能多带来 3 倍业绩。Smart OMO 会员导购工具助你轻松转型全渠道新零售模式。',
  cta: '立即免费试用',
  joinTitle: '快速注册、绑定 LINE 账号\n会员，轻松 Get!',
  joinDesc: '进店注册会员，会员数、LINE 好友同步成长，让你的顾客资产快速累积。',
  joinItems: ['快速加入会员', '同步加 LINE 好友'],
  profileTitle: '全渠道消费轮廓整合\n店员销售强力推手',
  profileDesc: '掌握会员全渠道信息，提袋率大幅增加。店员 = 你的最佳 KOL，销售更多可能。',
  profileItems: ['全渠道资料整合', '线下消费金额同步累积'],
  kolTitle: '店员 = 你的最佳 KOL\n销售，更多可能',
  kolDesc: '定制化购物车链接，导购不分时、地、域。关键 3 步骤跨入全渠道时代趁现在。',
  kolItems: ['商品导购链接', '业绩归属管理'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: SmartOmoCopy = {
  title: 'Unlock omnichannel retail',
  subtitle: 'Members who shop both online and in-store drive 3x more revenue. Smart OMO member tools help you go omnichannel with ease.',
  cta: 'Start free trial',
  joinTitle: 'Quick signup + LINE binding\nMembers, easy.',
  joinDesc: 'Enroll in-store so membership and LINE friends grow together — build customer assets faster.',
  joinItems: ['Fast member enrollment', 'Add LINE friends in sync'],
  profileTitle: 'Unified omnichannel profiles\nStaff as your sales engine',
  profileDesc: 'Know the full member picture and lift basket rate. Your staff become your best KOLs.',
  profileItems: ['Omnichannel data unified', 'Offline spend syncs to loyalty'],
  kolTitle: 'Staff = your best KOLs\nMore ways to sell',
  kolDesc: 'Custom cart links for anytime, anywhere shopping. Three steps into the omnichannel era.',
  kolItems: ['Product shopping links', 'Sales attribution'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, SmartOmoCopy>> & { 'zh-TW': SmartOmoCopy; en: SmartOmoCopy } = {
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

export default function SmartOmoPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(90deg, rgb(127, 193, 255) 0%, rgb(0, 159, 180) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#00142D' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Smart OMO" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.joinTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.joinDesc}</p>
            <div className="space-y-4">
              {c.joinItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Smart OMO signup" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.profileTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.profileDesc}</p>
            <div className="space-y-4">
              {c.profileItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Smart OMO profiles" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.kolTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.kolDesc}</p>
            <div className="space-y-4">
              {c.kolItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Smart OMO staff shopping" width={600} height={450} className="w-full h-auto" unoptimized />
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
