'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type ShopperCopy = {
  title: string
  subtitle: string
  cta: string
  highlightsTitle: string
  highlightsDesc: string
  highlights: string[]
  designTitle: string
  designDesc: string
  pathTitle: string
  pathDesc: string
  pathItems: string[]
  omoTitle: string
  omoDesc: string
  ctaTitle: string
}

const zhTW: ShopperCopy = {
  title: '掌上商店，隨走隨買\n品牌會員購物 App',
  subtitle: '為什麼要經營品牌會員 App？透過 Shopper App 強化會員經營及顧客體驗，讓業績增長將近 70%。',
  cta: '立即免費試用',
  highlightsTitle: '三大亮點功能\n快速打造品牌專屬購物 App',
  highlightsDesc: '設計介面操作簡單，快速建立品牌專屬的購物 App，提升顧客黏著度。',
  highlights: ['設計介面操作簡單', 'App 推播服務', '深化 OMO 整合效益'],
  designTitle: '設計介面操作簡單',
  designDesc: '直覺式設計工具，讓你輕鬆打造符合品牌風格的購物 App，無需技術背景。',
  pathTitle: '透過 Shopper App 縮短與顧客的消費路徑',
  pathDesc: '精準推播通知，讓顧客隨時掌握最新優惠和活動，提升回購率。打造無縫銜接全通路導購銷售。',
  pathItems: ['App 推播服務', '社群購物'],
  omoTitle: '深化 OMO 整合效益',
  omoDesc: '將線上線下完美整合，讓顧客享受無縫的全通路購物體驗，最大化品牌價值。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: ShopperCopy = {
  title: '掌上商店，随走随买\n品牌会员购物 App',
  subtitle: '为什么要经营品牌会员 App？通过 Shopper App 强化会员经营及顾客体验，让业绩增长将近 70%。',
  cta: '立即免费试用',
  highlightsTitle: '三大亮点功能\n快速打造品牌专属购物 App',
  highlightsDesc: '设计界面操作简单，快速建立品牌专属的购物 App，提升顾客粘着度。',
  highlights: ['设计界面操作简单', 'App 推播服务', '深化 OMO 整合效益'],
  designTitle: '设计界面操作简单',
  designDesc: '直觉式设计工具，让你轻松打造符合品牌风格的购物 App，无需技术背景。',
  pathTitle: '通过 Shopper App 缩短与顾客的消费路径',
  pathDesc: '精准推播通知，让顾客随时掌握最新优惠和活动，提升回购率。打造无缝衔接全渠道导购销售。',
  pathItems: ['App 推播服务', '社群购物'],
  omoTitle: '深化 OMO 整合效益',
  omoDesc: '将线上线下完美整合，让顾客享受无缝的全渠道购物体验，最大化品牌价值。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: ShopperCopy = {
  title: 'A store in your pocket\nBrand member shopping app',
  subtitle: 'Why run a brand member app? Shopper App strengthens loyalty and experience — merchants see nearly 70% sales growth.',
  cta: 'Start free trial',
  highlightsTitle: 'Three standout features\nLaunch a branded shopping app fast',
  highlightsDesc: 'Simple design tools to ship a branded app and lift customer stickiness.',
  highlights: ['Easy design tools', 'App push notifications', 'Deeper OMO integration'],
  designTitle: 'Easy design tools',
  designDesc: 'Intuitive builders to match your brand look — no engineering required.',
  pathTitle: 'Shorten the path to purchase with Shopper App',
  pathDesc: 'Precise pushes keep shoppers on offers and events, lifting repurchase and omnichannel sales.',
  pathItems: ['App push notifications', 'Social commerce'],
  omoTitle: 'Deeper OMO impact',
  omoDesc: 'Unify online and offline so shoppers enjoy seamless omnichannel journeys.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, ShopperCopy>> & { 'zh-TW': ShopperCopy; en: ShopperCopy } = {
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

export default function ShopperAppPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(249, 222, 195) 0%, rgb(255, 237, 187) 49%, rgb(252, 217, 101) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.highlightsTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.highlightsDesc}</p>
            <div className="space-y-4">
              {c.highlights.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="Shopper App features" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.designTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.designDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App design" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.pathTitle}</h3>
            <p className="mb-6" style={{ color: '#687280' }}>{c.pathDesc}</p>
            <div className="space-y-4">
              {c.pathItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80" alt="Shopper App push" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{c.omoTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.omoDesc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Shopper App OMO" width={600} height={450} className="w-full h-auto" unoptimized />
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
