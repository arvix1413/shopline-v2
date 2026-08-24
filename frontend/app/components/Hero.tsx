'use client'

import { useI18n } from '../../contexts/I18nContext'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF', color: '#12131F' }}>
      <div
        className="absolute pointer-events-none animate-aurora"
        style={{
          width: 820,
          height: 820,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,95,240,0.18) 0%, transparent 68%)',
          top: -280,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,95,240,0.1) 0%, transparent 70%)',
          top: 120,
          right: -80,
          zIndex: 0,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(91,95,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,95,240,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 55% at 50% 18%, black 15%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 50% 18%, black 15%, transparent 75%)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 md:pt-28 pb-0 text-center">
        <p className="font-brand rise-in text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 sm:mb-8 brand-text">
          ARVIX
        </p>

        <h1
          className="rise-in rise-in-delay-1 font-black leading-[1.12] mb-4 sm:mb-6 tracking-tight text-balance"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.35rem)', color: '#12131F' }}
        >
          {t.hero.title}
        </h1>

        <p
          className="rise-in rise-in-delay-2 text-[15px] sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 mx-auto whitespace-pre-line text-pretty"
          style={{ maxWidth: 640, color: '#5C5F7A' }}
        >
          {t.hero.subtitle}
        </p>

        <div className="rise-in rise-in-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 max-w-sm sm:max-w-none mx-auto">
            <a
              href="/trial-redirect"
              className="inline-block text-center font-bold btn-glow btn-brand"
              style={{ borderRadius: 999, fontSize: 16, padding: '14px 40px' }}
            >
              {t.hero.cta}
            </a>
            <a
              href="/online-store-setup"
              className="inline-block text-center font-semibold transition-all hover:bg-[#F0F1FE]"
              style={{
                borderRadius: 999,
                fontSize: 15,
                padding: '13px 28px',
                color: '#3A3D55',
                border: '1px solid rgba(18,19,31,0.12)',
              }}
            >
              {t.hero.ctaSecondary}
            </a>
        </div>

        <div className="rise-in rise-in-delay-4 relative mx-auto" style={{ maxWidth: 1100 }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '70%',
              height: 120,
              bottom: -10,
              background: 'radial-gradient(ellipse, rgba(91,95,240,0.22) 0%, transparent 70%)',
              filter: 'blur(18px)',
              zIndex: 0,
            }}
          />
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: '20px 20px 0 0',
              border: '1px solid rgba(91,95,240,0.18)',
              borderBottom: 'none',
              boxShadow: '0 -12px 60px rgba(91,95,240,0.12)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=85"
              alt="ARVIX store builder"
              width={1800}
              height={900}
              className="w-full h-auto block"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                maxHeight: 420,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.55) 88%, #FFFFFF 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
