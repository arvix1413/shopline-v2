'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

const tabImages = [
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
]

type SocialFeaturesCopy = {
  title: string
  subtitle: string
  tabs: string[]
  ctaTitle: string
  cta: string
}

const zhTW: SocialFeaturesCopy = {
  title: '高互動、快速導購！智慧社群購物系統',
  subtitle: '完整社群電商功能，從直播到聊天購物，全面提升社群轉換率。',
  tabs: ['社群商店', '直播購物', '聊天購物', '訊息整合中心', '商品庫存管理', '金物流串接', '訂單管理', '顧客管理', '優惠活動', '行銷推廣', '數據分析', '營運管理', '廣告導流'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
}

const zhCN: SocialFeaturesCopy = {
  title: '高互动、快速导购！智慧社群购物系统',
  subtitle: '完整社群电商功能，从直播到聊天购物，全面提升社群转化率。',
  tabs: ['社群商店', '直播购物', '聊天购物', '消息整合中心', '商品库存管理', '金物流串接', '订单管理', '顾客管理', '优惠活动', '营销推广', '数据分析', '运营管理', '广告导流'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
}

const en: SocialFeaturesCopy = {
  title: 'High engagement, fast conversion — social commerce',
  subtitle: 'Full social commerce toolkit from live shopping to chat checkout.',
  tabs: ['Social store', 'Live shopping', 'Chat shopping', 'Inbox hub', 'Inventory', 'Payments & logistics', 'Orders', 'Customers', 'Promotions', 'Marketing', 'Analytics', 'Operations', 'Ad traffic'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
}

const copy: Partial<Record<Locale, SocialFeaturesCopy>> & { 'zh-TW': SocialFeaturesCopy; en: SocialFeaturesCopy } = {
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

export default function SocialCommerceFeaturesPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [active, setActive] = useState(0)

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
              {c.tabs.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActive(i)}
                  className="text-left px-4 py-3 rounded-lg font-semibold text-sm transition-all"
                  style={{
                    backgroundColor: active === i ? '#5B5FF0' : 'transparent',
                    color: active === i ? '#fff' : '#00142D',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src={tabImages[active]} alt={c.tabs[active]} width={800} height={500} className="w-full h-auto rounded-2xl" unoptimized />
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
