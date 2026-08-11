'use client'

import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'

const hrefs = ['/online-store', '/social-commerce', '/pos', '/smart-omo', '/shopper-app']
const imgs = [
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
]

export default function Solutions() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)

  return (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF', color: '#12131F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: '#5B5FF0' }}>{t.solutions.eyebrow}</p>
          <h2 className="font-black mb-4 text-3xl md:text-4xl" style={{ color: '#12131F' }}>{t.solutions.title}</h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-sm" style={{ color: '#5C5F7A' }}>{t.solutions.subtitle}</p>
        </div>

        <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto mb-8"
          style={{ background: '#F6F7FB', border: '1px solid rgba(91,95,240,0.14)' }}>
          <img src={imgs[active]} alt={t.solutions.items[active].title} className="w-full h-48 sm:h-64 object-cover" />
          <div className="p-5 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="text-5xl flex-shrink-0">{t.solutions.items[active].icon}</div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black mb-3" style={{ color: '#12131F' }}>{t.solutions.items[active].title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: '#5C5F7A' }}>{t.solutions.items[active].desc}</p>
              <a href={hrefs[active]} className="inline-block mt-5 font-bold text-sm hover:underline" style={{ color: '#5B5FF0' }}>
                {t.solutions.learnMore} →
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {t.solutions.items.map((s, i) => (
            <div key={i} onClick={() => setActive(i)} className="rounded-xl p-3 sm:p-5 cursor-pointer transition-all"
              style={active === i
                ? { border: '1px solid rgba(91,95,240,0.55)', background: '#F0F1FE' }
                : { border: '1px solid rgba(18,19,31,0.08)', background: '#fff' }}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-sm font-bold" style={{ color: active === i ? '#5B5FF0' : '#3A3D55' }}>{s.title}</div>
            </div>
          ))}
        </div>
        <div className="sr-only" aria-hidden="true">
          {hrefs.map((href, i) => (
            <a key={i} href={href}>{t.solutions.items[i]?.title}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
