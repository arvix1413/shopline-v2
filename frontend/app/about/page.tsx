'use client'

import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type AboutCopy = {
  title: string
  subtitle: string
  storyTitle: string
  story: string[]
  merchantsLabel: string
  milestonesTitle: string
  milestones: { year: string; desc: string }[]
  awardsTitle: string
  awards: { title: string; desc: string }[]
  ctaTitle: string
  ctaButton: string
}

const zhTW: AboutCopy = {
  title: '我們協助商家成功「賣」向全世界',
  subtitle: 'ARVIX 是全球領先的全方位零售整合平台，協助超過 600,000 個品牌實現 OMO 全通路銷售',
  storyTitle: '我們的故事',
  story: [
    'ARVIX 於 2026 年在新加坡成立，以「讓每個人都能輕鬆開店」為使命，致力於打造最完整的電商解決方案。',
    '從最初的網路商店建置工具，到今日涵蓋社群購物、POS 零售、數據分析、行銷自動化的全方位零售整合平台，ARVIX 持續進化，陪伴品牌在數位時代茁壯成長。',
    '如今，全球超過 600,000 個商家信賴 ARVIX，我們的足跡遍及台灣、香港、馬來西亞、新加坡等地，持續擴展全球版圖。',
  ],
  merchantsLabel: '全球商家數',
  milestonesTitle: 'ARVIX 里程碑',
  milestones: [
    { year: '2026', desc: '在新加坡成立，開始提供電商解決方案' },
    { year: '2015', desc: '進入台灣市場，快速成長' },
    { year: '2017', desc: '商家數突破 50,000，進軍東南亞' },
    { year: '2018', desc: '商家數突破 100,000，完成 B 輪融資' },
    { year: '2020', desc: '推出 OMO 全通路整合解決方案' },
    { year: '2021', desc: '商家數突破 400,000，推出 Shoplytics 數據分析' },
    { year: '2022', desc: '迎接十週年，商家數突破 600,000' },
    { year: '2023', desc: '推出擴充功能商店，打造開放生態圈' },
    { year: '2024', desc: '啟動 AI 洞察策略，定位「全方位零售整合專家」' },
  ],
  awardsTitle: '獲獎及認證紀錄',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: '國際資訊安全管理系統認證' },
    { title: 'PCI-DSS 合規', desc: '支付卡產業資料安全標準' },
    { title: 'CBPR 認證', desc: 'APEC 跨境隱私規則認證' },
    { title: '最佳 IT 雇主獎', desc: 'IT Matters Awards 肯定' },
    { title: 'IIA 國際創新獎', desc: '社群購物解決方案獲獎' },
  ],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  ctaButton: '立即免費試用',
}

const zhCN: AboutCopy = {
  title: '我们协助商家成功「卖」向全世界',
  subtitle: 'ARVIX 是全球领先的全方位零售整合平台，协助超过 600,000 个品牌实现 OMO 全渠道销售',
  storyTitle: '我们的故事',
  story: [
    'ARVIX 于 2026 年在新加坡成立，以「让每个人都能轻松开店」为使命，致力于打造最完整的电商解决方案。',
    '从最初的网络商店建置工具，到今日涵盖社群购物、POS 零售、数据分析、营销自动化的全方位零售整合平台，ARVIX 持续进化，陪伴品牌在数字时代茁壮成长。',
    '如今，全球超过 600,000 个商家信赖 ARVIX，我们的足迹遍及台湾、香港、马来西亚、新加坡等地，持续扩展全球版图。',
  ],
  merchantsLabel: '全球商家数',
  milestonesTitle: 'ARVIX 里程碑',
  milestones: [
    { year: '2026', desc: '在新加坡成立，开始提供电商解决方案' },
    { year: '2015', desc: '进入台湾市场，快速成长' },
    { year: '2017', desc: '商家数突破 50,000，进军东南亚' },
    { year: '2018', desc: '商家数突破 100,000，完成 B 轮融资' },
    { year: '2020', desc: '推出 OMO 全渠道整合解决方案' },
    { year: '2021', desc: '商家数突破 400,000，推出 Shoplytics 数据分析' },
    { year: '2022', desc: '迎接十周年，商家数突破 600,000' },
    { year: '2023', desc: '推出扩展功能商店，打造开放生态圈' },
    { year: '2024', desc: '启动 AI 洞察策略，定位「全方位零售整合专家」' },
  ],
  awardsTitle: '获奖及认证记录',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: '国际信息安全管理体系认证' },
    { title: 'PCI-DSS 合规', desc: '支付卡产业数据安全标准' },
    { title: 'CBPR 认证', desc: 'APEC 跨境隐私规则认证' },
    { title: '最佳 IT 雇主奖', desc: 'IT Matters Awards 肯定' },
    { title: 'IIA 国际创新奖', desc: '社群购物解决方案获奖' },
  ],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  ctaButton: '立即免费试用',
}

const en: AboutCopy = {
  title: 'We help merchants sell to the world',
  subtitle: 'ARVIX is a leading omnichannel retail platform, helping 600,000+ brands unify online and offline commerce.',
  storyTitle: 'Our story',
  story: [
    'Founded in Singapore in 2026, ARVIX set out to make launching a store simple for everyone — with a complete commerce toolkit.',
    'From store builders to social commerce, POS, analytics, and marketing automation, ARVIX keeps evolving with brands in the digital era.',
    'Today more than 600,000 merchants trust ARVIX across Taiwan, Hong Kong, Malaysia, Singapore, and beyond.',
  ],
  merchantsLabel: 'Merchants worldwide',
  milestonesTitle: 'ARVIX milestones',
  milestones: [
    { year: '2026', desc: 'Founded in Singapore to deliver commerce solutions' },
    { year: '2015', desc: 'Entered the Taiwan market and grew quickly' },
    { year: '2017', desc: 'Surpassed 50,000 merchants; expanded into Southeast Asia' },
    { year: '2018', desc: 'Surpassed 100,000 merchants; completed Series B' },
    { year: '2020', desc: 'Launched OMO omnichannel solutions' },
    { year: '2021', desc: 'Surpassed 400,000 merchants; launched Shoplytics' },
    { year: '2022', desc: '10th anniversary; surpassed 600,000 merchants' },
    { year: '2023', desc: 'Launched the app marketplace and open ecosystem' },
    { year: '2024', desc: 'Launched AI insights strategy as an omnichannel retail expert' },
  ],
  awardsTitle: 'Awards & certifications',
  awards: [
    { title: 'ISO/IEC 27001:2022', desc: 'International information security management certification' },
    { title: 'PCI-DSS compliant', desc: 'Payment Card Industry Data Security Standard' },
    { title: 'CBPR certified', desc: 'APEC Cross-Border Privacy Rules' },
    { title: 'Best IT Employer', desc: 'Recognized by IT Matters Awards' },
    { title: 'IIA Innovation Award', desc: 'Awarded for social commerce solutions' },
  ],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  ctaButton: 'Start free trial',
}

const copy: Partial<Record<Locale, AboutCopy>> & { 'zh-TW': AboutCopy; en: AboutCopy } = {
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

export default function AboutPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>{c.title}</h1>
          <p className="text-lg" style={{ color: '#687280' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6" style={{ color: '#00142D' }}>{c.storyTitle}</h2>
              {c.story.map((p) => (
                <p key={p.slice(0, 24)} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: '#687280' }}>{p}</p>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#EEF0FF', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="text-center">
                <div className="text-6xl font-black mb-2" style={{ color: '#5B5FF0' }}>600K+</div>
                <div className="text-lg font-bold" style={{ color: '#00142D' }}>{c.merchantsLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.milestonesTitle}</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: '#D1DCE8', transform: 'translateX(-50%)' }} />
            <div className="space-y-8">
              {c.milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block p-6 bg-white rounded-2xl shadow-sm">
                      <div className="text-2xl font-black mb-1" style={{ color: '#5B5FF0' }}>{m.year}</div>
                      <p className="text-sm" style={{ color: '#354253' }}>{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full flex-shrink-0 hidden md:block" style={{ backgroundColor: '#5B5FF0' }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>{c.awardsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {c.awards.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#EEF0FF' }}>
                  <span className="text-xl">🏆</span>
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#00142D' }}>{a.title}</h3>
                <p className="text-xs" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
