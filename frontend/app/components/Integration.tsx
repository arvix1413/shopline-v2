'use client'

import { useI18n } from '../../contexts/I18nContext'

export default function Integration() {
  const { t } = useI18n()

  return (
    <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0E0E2C 0%, #08081A 100%)', color: '#fff' }}>
      <div className="absolute pointer-events-none" style={{ width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(30,64,175,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#60A5FA' }}>{t.integration.eyebrow}</p>
          <h2 className="font-black mb-4" style={{ color: '#fff', fontSize: 40 }}>{t.integration.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)' }} className="max-w-2xl mx-auto text-sm">{t.integration.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.integration.items.map((s, i) => (
            <div key={i} className="group rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:border-blue-500/30"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-base font-black mb-3" style={{ color: '#fff' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
            </div>
          ))}
          <div className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(30,64,175,0.15) 0%, rgba(29,78,216,0.1) 100%)', border: '1px solid rgba(30,64,175,0.25)' }}>
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-black mb-3" style={{ color: '#fff' }}>{t.integration.ctaTitle}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.integration.ctaDesc}</p>
            </div>
            <a href="/solutions" className="mt-8 inline-block font-bold text-sm hover:underline" style={{ color: '#93C5FD' }}>
              {t.integration.learnMore} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
