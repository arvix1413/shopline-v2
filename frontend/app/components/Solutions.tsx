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

        <div className="grid lg:grid-cols-[310px_1fr] rounded-[28px] overflow-hidden max-w-6xl mx-auto"
          style={{ background: '#F6F7FB', border: '1px solid rgba(91,95,240,0.14)', boxShadow: '0 20px 60px rgba(18,19,31,0.07)' }}>
          <div className="p-3 sm:p-5 lg:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 content-center" style={{ background: '#fff' }}>
            {t.solutions.items.map((s, i) => (
              <button key={i} type="button" onClick={() => setActive(i)} className="text-left rounded-xl p-3 sm:p-4 cursor-pointer transition-all flex items-center gap-3"
                style={active === i
                  ? { border: '1px solid rgba(91,95,240,0.32)', background: '#F0F1FE', boxShadow: '0 6px 18px rgba(91,95,240,0.08)' }
                  : { border: '1px solid transparent', background: '#fff' }}>
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <span className="text-sm font-bold" style={{ color: active === i ? '#5B5FF0' : '#3A3D55' }}>{s.title}</span>
              </button>
            ))}
          </div>
          <div className="min-w-0">
            <img src={imgs[active]} alt={t.solutions.items[active].title} className="w-full h-56 sm:h-72 lg:h-[360px] object-cover" />
            <div className="p-6 sm:p-8 lg:p-10 flex gap-5 items-start">
              <div className="text-4xl flex-shrink-0 hidden sm:block">{t.solutions.items[active].icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black mb-3" style={{ color: '#12131F' }}>{t.solutions.items[active].title}</h3>
                <p className="leading-relaxed text-sm max-w-2xl" style={{ color: '#5C5F7A' }}>{t.solutions.items[active].desc}</p>
                <a href={hrefs[active]} className="inline-flex items-center gap-2 mt-5 font-bold text-sm hover:gap-3 transition-all" style={{ color: '#5B5FF0' }}>
                  {t.solutions.learnMore} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
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
