'use client'

import { useI18n } from '../../contexts/I18nContext'

export default function Integration() {
  const { t } = useI18n()

  return (
    <section className="py-24 relative" style={{ backgroundColor: '#F6F7FB', color: '#12131F' }}>
      <div className="absolute pointer-events-none" style={{ width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,95,240,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#5B5FF0' }}>{t.integration.eyebrow}</p>
          <h2 className="font-black mb-4" style={{ color: '#12131F', fontSize: 40 }}>{t.integration.title}</h2>
          <p style={{ color: '#5C5F7A' }} className="max-w-2xl mx-auto text-sm">{t.integration.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.integration.items.map((s, i) => (
            <div key={i} className="group rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{ background: '#fff', border: '1px solid rgba(18,19,31,0.08)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(91,95,240,0.35)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(18,19,31,0.08)' }}>
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-base font-black mb-3" style={{ color: '#12131F' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C5F7A' }}>{s.desc}</p>
            </div>
          ))}
          <div className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(91,95,240,0.12) 0%, rgba(72,76,232,0.08) 100%)', border: '1px solid rgba(91,95,240,0.22)' }}>
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-black mb-3" style={{ color: '#12131F' }}>{t.integration.ctaTitle}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C5F7A' }}>{t.integration.ctaDesc}</p>
            </div>
            <a href="/solutions" className="mt-8 inline-block font-bold text-sm hover:underline" style={{ color: '#5B5FF0' }}>
              {t.integration.learnMore} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
