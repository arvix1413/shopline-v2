'use client'

import { useState } from 'react'
import { useI18n } from '../../contexts/I18nContext'

const growthImgs = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
]
const growthHrefs = ['/seminar', '/apps']

export default function Growth() {
  const { t } = useI18n()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      {/* Growth items + supports */}
      <section className="py-24" style={{ backgroundColor: '#F5F4FF', color: '#0A0A1A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1E40AF' }}>{t.growth.eyebrow}</p>
            <h2 className="font-black mb-4" style={{ color: '#0A0A1A', fontSize: 40 }}>{t.growth.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {t.growth.items.map((item, i) => (
              <a key={i} href={growthHrefs[i]}
                className="rounded-2xl overflow-hidden block group transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ border: '1px solid rgba(30,64,175,0.12)', backgroundColor: '#fff' }}>
                <div className="overflow-hidden">
                  <img src={growthImgs[i]} alt={item.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-3" style={{ color: '#0A0A1A' }}>{item.title}</h3>
                  <p className="leading-relaxed mb-5 text-sm" style={{ color: '#4B4B6B' }}>{item.desc}</p>
                  <span className="font-bold text-sm" style={{ color: '#1E40AF' }}>{t.growth.learnMore} →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.growth.supports.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 transition-all hover:shadow-md"
                style={{ border: '1px solid rgba(30,64,175,0.1)', backgroundColor: '#fff' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(30,64,175,0.12), rgba(29,78,216,0.12))' }}>
                  {s.icon}
                </div>
                <h4 className="font-black mb-2 text-sm" style={{ color: '#0A0A1A' }}>{s.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#6B6B8A' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: '#08081A', color: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#60A5FA' }}>{t.growth.testimonialsEyebrow}</p>
            <h2 className="font-black" style={{ color: '#fff', fontSize: 36 }}>{t.growth.testimonialsTitle}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-10 mb-8 min-h-[160px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'rgba(255,255,255,0.75)' }}>
                "{t.growth.testimonials[activeTestimonial].quote}"
              </p>
              <div className="font-bold text-sm" style={{ color: '#93C5FD' }}>
                {t.growth.testimonials[activeTestimonial].name} · {t.growth.testimonials[activeTestimonial].brand} {t.growth.testimonials[activeTestimonial].role}
              </div>
            </div>
            <div className="flex justify-center gap-2">
              {t.growth.testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className="h-2 rounded-full transition-all"
                  style={{ width: i === activeTestimonial ? 24 : 8, backgroundColor: i === activeTestimonial ? '#1E40AF' : 'rgba(255,255,255,0.2)' }}
                  aria-label={`${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden" style={{ backgroundColor: '#0E0E2C' }}>
        <div className="absolute pointer-events-none" style={{ width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(30,64,175,0.2) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#60A5FA' }}>{t.growth.ctaEyebrow}</p>
          <h2 className="font-black mb-8" style={{ color: '#fff', fontSize: 40 }}>{t.growth.ctaTitle}</h2>
          <a href="/trial-redirect"
            className="inline-block font-bold transition-all btn-glow"
            style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)', color: '#fff', borderRadius: 30, fontSize: 17, fontWeight: 700, padding: '14px 52px' }}>
            {t.growth.ctaCta}
          </a>
        </div>
      </section>
    </>
  )
}
