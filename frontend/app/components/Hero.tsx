'use client'

import { useI18n } from '../../contexts/I18nContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Hero() {
  const { t } = useI18n()
  const { user, isLoading } = useAuth()

  return (
    <section className="relative overflow-hidden text-white text-center" style={{ backgroundColor: '#08081A' }}>
      <div className="absolute pointer-events-none" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,64,175,0.18) 0%, transparent 70%)', top: -200, left: -200, zIndex: 0 }} />
      <div className="absolute pointer-events-none" style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.14) 0%, transparent 70%)', top: -100, right: -150, zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-0">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(30,64,175,0.15)', border: '1px solid rgba(30,64,175,0.3)', color: '#93C5FD' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1E40AF', display: 'inline-block' }} />
          {t.hero.badge}
        </div>

        <h1 className="font-black leading-tight mb-6 tracking-tight text-white" style={{ fontSize: 52 }}>
          {t.hero.title}
        </h1>
        <p className="text-lg leading-relaxed mb-10 mx-auto" style={{ maxWidth: 560, color: 'rgba(255,255,255,0.65)' }}>
          {t.hero.subtitle}
        </p>

        {!isLoading && (
          <a href="/trial-redirect"
            className="inline-block font-bold transition-all mb-16 btn-glow"
            style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)', color: '#fff', borderRadius: 30, fontSize: 17, fontWeight: 700, padding: '13px 44px' }}>
            {t.hero.cta}
          </a>
        )}
        {isLoading && (
          <div className="inline-block mb-16" style={{ height: 50 }} />
        )}

        <div className="overflow-hidden text-center" style={{ borderRadius: '16px 16px 0 0', border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none' }}>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
            alt="ARVIX"
            width={1597} height={465}
            className="h-auto"
            style={{ maxWidth: 'unset', position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '111%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.85 }}
          />
        </div>
      </div>
    </section>
  )
}
