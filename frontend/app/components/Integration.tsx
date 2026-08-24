'use client'

import { useI18n } from '../../contexts/I18nContext'

export default function Integration() {
  const { t } = useI18n()

  return (
    <section className="py-24 relative" style={{ backgroundColor: '#F6F7FB', color: '#12131F' }}>
      <div className="absolute pointer-events-none" style={{ width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,95,240,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#5B5FF0' }}>{t.integration.eyebrow}</p>
          <h2 className="font-black mb-4 text-3xl md:text-[2.75rem] md:leading-tight tracking-tight" style={{ color: '#12131F' }}>{t.integration.title}</h2>
          <p style={{ color: '#5C5F7A' }} className="max-w-2xl mx-auto text-sm">{t.integration.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.integration.items.map((s, i) => (
            <div key={i} className="group rounded-[22px] p-7 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ background: '#fff', border: '1px solid rgba(18,19,31,0.08)', boxShadow: '0 8px 28px rgba(18,19,31,0.035)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(91,95,240,0.35)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(18,19,31,0.08)' }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-105 transition-transform" style={{ background: '#F0F1FE' }}>{s.icon}</div>
                <span className="text-xs font-bold" style={{ color: '#B8BAD0' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-base font-black mb-3" style={{ color: '#12131F' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C5F7A' }}>{s.desc}</p>
            </div>
          ))}
          <div className="rounded-[22px] p-7 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
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
