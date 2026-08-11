'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import SocialIcons from './SocialIcons'

const colHrefs = [
  ['/online-store', '/about/pricing', '/templates', '/about/pricing', '/showcase'],
  ['/trial-redirect', '/trial-redirect', '/trial-redirect'],
  ['/trial-redirect', '/trial-redirect', '/trial-redirect'],
  ['/trial-redirect', '/about/pricing', '/consultation'],
  ['/apps', '/faq/overview', '/faq/overview', '/faq/overview', 'https://line.me/R/ti/p/@kxh0647n'],
  ['/changelog', '/faq/overview'],
  ['/about', '/about', '/about', '/contact'],
]

const bottomHrefs = ['/about/sitemap', '/about/privacy', '/about/terms']

export default function Footer() {
  const { t } = useI18n()
  const bottomLabels = [t.footer.sitemap, t.footer.privacy, t.footer.terms]

  return (
    <footer style={{ backgroundColor: '#15162A', color: '#fff' }}>
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="text-white font-bold text-sm hover:text-white/80 transition-colors">{t.footer.about}</Link>
            <Link href="/about/press" className="text-white font-bold text-sm hover:text-white/80 transition-colors">{t.footer.news}</Link>
            <a href="/compliance-center" target="_blank" rel="noopener noreferrer"
              className="border border-white/40 text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
              {t.footer.security}
            </a>
          </div>
          <SocialIcons showLabels={false} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 mb-12">
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-4 flex-wrap">
            {bottomLabels.map((label, i) => (
              <Link key={i} href={bottomHrefs[i]} className="text-gray-500 hover:text-white text-xs transition-colors">
                {label}
              </Link>
            ))}
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
