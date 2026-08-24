'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'

const hrefs = ['/online-store/shop-builder', '/payments', '/pos', '/targeted-marketing', '/compliance-center']
const imgs = [
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
]

export default function OneStop() {
  const { t } = useI18n()

  return (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF', color: '#12131F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#5B5FF0' }}>{t.oneStop.eyebrow}</p>
          <h2 className="font-black mb-4 text-3xl md:text-[2.75rem] md:leading-tight tracking-tight" style={{ color: '#12131F' }}>{t.oneStop.title}</h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-sm" style={{ color: '#5C5F7A' }}>{t.oneStop.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {t.oneStop.items.map((item, i) => (
            <Link key={i} href={hrefs[i]}
              className="group rounded-[22px] p-3.5 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: '#fff', border: '1px solid rgba(91,95,240,0.12)', boxShadow: '0 8px 28px rgba(18,19,31,0.04)' }}>
              <div className="overflow-hidden rounded-[15px] mb-5 relative">
                <img src={imgs[i]} alt={item.name} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#5B5FF0' }}>↗</span>
              </div>
              <div className="px-2 pb-3">
                <h3 className="font-black text-base mb-2" style={{ color: '#12131F' }}>{item.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B6B8A' }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
