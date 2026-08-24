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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="font-brand rise-in text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight mb-5 brand-text">ARVIX</p>
            <h1
              className="rise-in rise-in-delay-1 font-black leading-[1.08] mb-5 tracking-[-0.035em] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.65rem)', color: '#12131F', wordBreak: 'keep-all' }}
            >
              {t.hero.title}
            </h1>
            <p
              className="rise-in rise-in-delay-2 text-[15px] sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-9 mx-auto lg:mx-0 whitespace-pre-line text-pretty"
              style={{ maxWidth: 620, color: '#5C5F7A' }}
            >
              {t.hero.subtitle}
            </p>
            <div className="rise-in rise-in-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto lg:mx-0">
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
            <div className="rise-in rise-in-delay-4 mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-semibold" style={{ color: '#6B6E88' }}>
              <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span>{t.banner}</span>
              <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span>SSL</span>
              <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span>OMO</span>
            </div>
          </div>

          <div className="rise-in rise-in-delay-2 relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-6 pointer-events-none rounded-[40px]" style={{ background: 'radial-gradient(circle, rgba(91,95,240,0.16), transparent 68%)', filter: 'blur(16px)' }} />
            <div className="relative rounded-[28px] p-2.5 sm:p-3" style={{ background: 'rgba(255,255,255,0.86)', border: '1px solid rgba(91,95,240,0.18)', boxShadow: '0 28px 80px rgba(45,48,120,0.18), 0 8px 24px rgba(18,19,31,0.08)', backdropFilter: 'blur(18px)' }}>
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]" />
                <span className="ml-3 h-5 flex-1 rounded-full" style={{ background: '#F0F1F6' }} />
              </div>
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: '16/10' }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=88"
                  alt="ARVIX store builder"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 70%, rgba(21,22,42,0.12) 100%)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
