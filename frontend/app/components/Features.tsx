'use client'

import { useI18n } from '../../contexts/I18nContext'

const imgs = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
]
const accents = ['#1E40AF', '#1D4ED8', '#2563EB']

export default function Features() {
  const { t } = useI18n()

  return (
    <section className="py-24" style={{ backgroundColor: '#0E0E2C', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#60A5FA' }}>{t.features.eyebrow}</p>
          <h2 className="font-black mb-3" style={{ color: '#fff', fontSize: 40 }}>{t.features.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.features.items.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="overflow-hidden relative">
                <img src={imgs[i]} alt={f.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" style={{ opacity: 0.8 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(14,14,44,0.9) 100%)' }} />
              </div>
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accents[i] }}>{f.tag}</div>
                <h3 className="text-xl font-black mb-3" style={{ color: '#fff' }}>{f.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/about/pricing"
            className="inline-block font-bold transition-all hover:opacity-90 btn-glow"
            style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)', color: '#fff', borderRadius: 30, fontSize: 17, fontWeight: 700, padding: '13px 44px' }}>
            {t.features.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}
