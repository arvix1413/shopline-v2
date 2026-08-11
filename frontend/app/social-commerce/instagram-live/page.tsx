'use client'

import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type IgLiveCopy = {
  title: string
  subtitle: string
  cta: string
  sec1Title: string
  sec1Desc: string
  sec2Title: string
  sec2Desc: string
  sec3Title: string
  sec3Desc: string
  sec4Title: string
  sec4Desc: string
  ctaTitle: string
}

const zhTW: IgLiveCopy = {
  title: '圈粉、轉單一把罩！\n讓 Instagram 幫你賣更多！',
  subtitle: 'LIVE 獨家功能幫你在 Instagram 創造最大效益，直播 +1 喊單自動加入購物車。',
  cta: '立即免費試用',
  sec1Title: 'LIVE獨家功能\n幫你在 Instagram 創造最大效益',
  sec1Desc: '直播 +1 喊單自動加入購物車，讓粉絲邊看邊買，業績輕鬆翻倍。',
  sec2Title: '互動遊戲讓人走不開\n有效提高粉絲黏著度',
  sec2Desc: '豐富的互動遊戲功能，讓直播更有趣，粉絲停留更久，購買意願更高。',
  sec3Title: '聊天勸敗不可少\n30 秒私訊接單術',
  sec3Desc: '自動私訊功能，讓顧客在 30 秒內完成下單，大幅提升轉換率。',
  sec4Title: '全方位數據報告\n專攻社群轉換成效',
  sec4Desc: '完整的直播數據分析，幫你了解每場直播的轉換成效，持續優化策略。',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: IgLiveCopy = {
  title: '圈粉、转单一把罩！\n让 Instagram 帮你卖更多！',
  subtitle: 'LIVE 独家功能帮你在 Instagram 创造最大效益，直播 +1 喊单自动加入购物车。',
  cta: '立即免费试用',
  sec1Title: 'LIVE 独家功能\n帮你在 Instagram 创造最大效益',
  sec1Desc: '直播 +1 喊单自动加入购物车，让粉丝边看边买，业绩轻松翻倍。',
  sec2Title: '互动游戏让人走不开\n有效提高粉丝黏着度',
  sec2Desc: '丰富的互动游戏功能，让直播更有趣，粉丝停留更久，购买意愿更高。',
  sec3Title: '聊天劝败不可少\n30 秒私信接单术',
  sec3Desc: '自动私信功能，让顾客在 30 秒内完成下单，大幅提升转化率。',
  sec4Title: '全方位数据报告\n专攻社群转化成效',
  sec4Desc: '完整的直播数据分析，帮你了解每场直播的转化成效，持续优化策略。',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: IgLiveCopy = {
  title: 'Grow fans, close sales\nSell more with Instagram',
  subtitle: 'Exclusive LIVE tools maximize Instagram impact — +1 comments auto-add to cart.',
  cta: 'Start free trial',
  sec1Title: 'Exclusive LIVE tools\nMaximize Instagram impact',
  sec1Desc: '+1 shout-outs auto-add to cart so fans buy while they watch.',
  sec2Title: 'Interactive games\nKeep fans glued',
  sec2Desc: 'Fun live games boost dwell time and purchase intent.',
  sec3Title: 'Chat that converts\nClose in 30 seconds via DM',
  sec3Desc: 'Automated DMs help shoppers checkout in about 30 seconds.',
  sec4Title: 'Full analytics\nBuilt for social conversion',
  sec4Desc: 'See every live session’s conversion and keep optimizing.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, IgLiveCopy>> & { 'zh-TW': IgLiveCopy; en: IgLiveCopy } = {
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

export default function InstagramLivePage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 225, 249) 0%, rgb(238, 169, 255) 50%, rgb(149, 92, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram Live" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec1Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec1Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Instagram LIVE" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec2Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec2Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200&q=80" alt="Interactive games" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec3Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec3Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="DM checkout" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec4Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec4Desc}</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="Live analytics" width={600} height={450} className="w-full h-auto" unoptimized />
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
