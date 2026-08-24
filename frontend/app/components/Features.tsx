'use client'

import { useI18n } from '../../contexts/I18nContext'

const imgs = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
]

export default function Features() {
  const { t } = useI18n()

  return (
    <section className="py-24" style={{ backgroundColor: '#F6F7FB', color: '#12131F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#5B5FF0' }}>{t.features.eyebrow}</p>
          <h2 className="font-black mb-3 text-3xl md:text-[2.75rem] md:leading-tight tracking-tight" style={{ color: '#12131F' }}>{t.features.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-sm" style={{ color: '#5C5F7A' }}>{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.features.items.map((f, i) => (
            <div key={i} className="rounded-[24px] overflow-hidden transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
              style={{ background: '#fff', border: '1px solid rgba(91,95,240,0.12)', boxShadow: '0 8px 30px rgba(18,19,31,0.04)' }}>
              <div className="overflow-hidden relative">
                <img src={imgs[i]} alt={f.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#5B5FF0' }}>{f.tag}</div>
                <h3 className="text-xl font-black mb-3" style={{ color: '#12131F' }}>{f.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: '#5C5F7A' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/about/pricing"
            className="inline-block font-bold transition-all hover:opacity-90 btn-glow btn-brand"
            style={{ borderRadius: 30, fontSize: 17, fontWeight: 700, padding: '13px 44px' }}>
            {t.features.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}
