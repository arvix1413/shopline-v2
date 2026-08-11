'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'

const hrefs = ['/online-store/shop-builder', '/payments', '/group-buying', '/targeted-marketing', '/compliance-center']
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#5B5FF0' }}>{t.oneStop.eyebrow}</p>
          <h2 className="font-black mb-4" style={{ color: '#12131F', fontSize: 40 }}>{t.oneStop.title}</h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-sm" style={{ color: '#5C5F7A' }}>{t.oneStop.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {t.oneStop.items.map((item, i) => (
            <Link key={i} href={hrefs[i]}
              className="group rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: '#F6F7FB', border: '1px solid rgba(91,95,240,0.12)' }}>
              <div className="overflow-hidden rounded-xl mb-4">
                <img src={imgs[i]} alt={item.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-black text-sm mb-1" style={{ color: '#12131F' }}>{item.name}</h3>
              <p className="text-xs" style={{ color: '#6B6B8A' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
