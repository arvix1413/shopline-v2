'use client'

import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type ShopBuilderCopy = {
  title: string
  subtitle: string
  cta: string
  sec1Title: string
  sec1Desc: string
  sec1Items: string[]
  sec2Title: string
  sec2Desc: string
  sec2Items: string[]
  sec3Title: string
  sec3Desc: string
  sec3Items: string[]
  ctaTitle: string
}

const zhTW: ShopBuilderCopy = {
  title: '隨心所欲、盡情發揮\nSHOP Builder 頁面編輯器',
  subtitle: '免寫程式，自由拖曳完成頁面編排，打造一流品牌網站不再是夢。',
  cta: '立即免費試用',
  sec1Title: 'SHOP Builder + 產業推薦版型\n打造一流品牌網站不是夢',
  sec1Desc: '多種設計版型任選，搭配產業推薦版型，快速建立專業品牌形象。',
  sec1Items: ['免寫程式自由拖曳完成編排', '產業推薦版型多種設計版型任選', 'Layout Engine前端語言編輯權限'],
  sec2Title: '款款巧妙\n15+ 互動型元件',
  sec2Desc: '豐富的互動元件，讓你的網站更生動有趣，提升訪客停留時間。',
  sec2Items: ['SHOP Builder 促購元件 APP', '官網也能建立募資頁面'],
  sec3Title: '效能優化\n讓網站更上一層樓',
  sec3Desc: '優化頁面載入速度，提升 Google 網站評分，帶來更多長尾 SEO 效益。',
  sec3Items: ['有助提升頁面元素載入速度', '有助優化Google 網站評分', '絕佳 SEO帶來更多長尾效益'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: ShopBuilderCopy = {
  title: '随心所欲、尽情发挥\nSHOP Builder 页面编辑器',
  subtitle: '免写代码，自由拖曳完成页面编排，打造一流品牌网站不再是梦。',
  cta: '立即免费试用',
  sec1Title: 'SHOP Builder + 产业推荐版型\n打造一流品牌网站不是梦',
  sec1Desc: '多种设计版型任选，搭配产业推荐版型，快速建立专业品牌形象。',
  sec1Items: ['免写代码自由拖曳完成编排', '产业推荐版型多种设计版型任选', 'Layout Engine 前端语言编辑权限'],
  sec2Title: '款款巧妙\n15+ 互动型组件',
  sec2Desc: '丰富的互动组件，让你的网站更生动有趣，提升访客停留时间。',
  sec2Items: ['SHOP Builder 促购组件 APP', '官网也能建立募资页面'],
  sec3Title: '效能优化\n让网站更上一层楼',
  sec3Desc: '优化页面加载速度，提升 Google 网站评分，带来更多长尾 SEO 效益。',
  sec3Items: ['有助提升页面元素加载速度', '有助优化 Google 网站评分', '绝佳 SEO 带来更多长尾效益'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: ShopBuilderCopy = {
  title: 'Design freely\nSHOP Builder page editor',
  subtitle: 'No code required — drag and drop to build pages and create a world-class brand site.',
  cta: 'Start free trial',
  sec1Title: 'SHOP Builder + industry themes\nA premium brand site made easy',
  sec1Desc: 'Choose from curated layouts and industry-ready themes to launch a polished brand look fast.',
  sec1Items: ['Drag-and-drop editing, no coding', 'Industry-recommended theme options', 'Layout Engine for front-end customization'],
  sec2Title: 'Smart building blocks\n15+ interactive modules',
  sec2Desc: 'Rich interactive modules keep visitors engaged and increase time on site.',
  sec2Items: ['SHOP Builder conversion modules', 'Crowdfunding pages on your storefront'],
  sec3Title: 'Performance boost\nTake your site further',
  sec3Desc: 'Faster loads and stronger Google scores unlock more long-tail SEO value.',
  sec3Items: ['Faster page element loading', 'Better Google site scores', 'Strong SEO for long-tail traffic'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const copy: Partial<Record<Locale, ShopBuilderCopy>> & { 'zh-TW': ShopBuilderCopy; en: ShopBuilderCopy } = {
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

export default function ShopBuilderPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(244, 247, 252) 0%, rgb(122, 210, 254) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>
              {c.title}
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80" alt="SHOP Builder" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec1Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec1Desc}</p>
            <div className="space-y-4">
              {c.sec1Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="SHOP Builder themes" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec2Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec2Desc}</p>
            <div className="space-y-4">
              {c.sec2Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80" alt="SHOP Builder modules" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec3Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec3Desc}</p>
            <div className="space-y-4">
              {c.sec3Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80" alt="SHOP Builder SEO" width={600} height={450} className="w-full h-auto" unoptimized />
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
