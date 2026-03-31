'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'

const colHrefs = [
  // SaaS 電商平台: 功能介紹, 方案費用, 版型主題, 金流串接, 客戶案例
  ['/online-store', '/about/pricing', '/templates', '/about/pricing', '/showcase'],
  // APP 開發: iOS, Android, 跨平台
  ['/trial-redirect', '/trial-redirect', '/trial-redirect'],
  // 企業系統: ERP, CRM, AI會計
  ['/trial-redirect', '/trial-redirect', '/trial-redirect'],
  // 開始使用: 免費試用, 方案費用, 預約諮詢
  ['/trial-redirect', '/about/pricing', '/consultation'],
  // 更多資源: 技術部落格, 開發文件, 常見問題, API文件, LINE官方帳號
  ['/apps', '/faq/overview', '/faq/overview', '/faq/overview', 'https://line.me'],
  // 產品支援: 產品更新日誌, 常見問題中心
  ['/changelog', '/faq/overview'],
  // ARVIX: 加入我們, 合作機會, 關於我們, 聯絡我們
  ['/about', '/about', '/about', '/contact'],
]

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/arvix', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/shopline_tw/', icon: 'ig' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/shopline', icon: 'in' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/shoplineglobalsmartcommerceenabler', icon: 'yt' },
  { label: 'LINE', href: 'https://line.me/R/ti/p/%40prs5793t', icon: 'L' },
]

const bottomHrefs = ['/about/sitemap', '/about/privacy', '/about/terms']

export default function Footer() {
  const { t } = useI18n()
  const bottomLabels = t.nav.region === 'Global'
    ? ['Sitemap', 'Privacy Policy', 'Terms of Service']
    : t.nav.region === '中国大陆'
    ? ['网站地图', '隐私权政策', '会员条款']
    : ['網站地圖', '隱私權政策', '會員條款']

  return (
    <footer style={{ backgroundColor: '#050510', color: '#fff' }}>
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center gap-4">
          <Link href="/about" className="text-white font-bold text-sm hover:text-white/80 transition-colors">{t.footer.about}</Link>
          <Link href="/about/press" className="text-white font-bold text-sm hover:text-white/80 transition-colors">{t.footer.news}</Link>
          <a href="/compliance-center" target="_blank" rel="noopener noreferrer"
            className="border border-white/40 text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
            {t.footer.security}
          </a>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {t.footer.cols.map((col, ci) => (
            <div key={ci}>
              <h4 className="font-bold text-white mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((label, li) => (
                  <li key={li}>
                    <Link href={colHrefs[ci]?.[li] ?? '#'}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#B1BFC9' }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3 flex-wrap">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-white/20 hover:text-white transition-all font-bold">
                {s.icon}
              </a>
            ))}
            <div className="flex gap-4 ml-2">
              {bottomLabels.map((label, i) => (
                <Link key={i} href={bottomHrefs[i]} className="text-gray-500 hover:text-white text-xs transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-gray-500 text-xs text-right">
            <div>{t.footer.serviceHours}</div>
            <div className="mt-1">{t.footer.copyright}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
