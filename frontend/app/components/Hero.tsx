'use client'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white text-center"
      style={{ backgroundColor: '#F2F7FC' }}
    >
      {/* Left radial gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(100% 102.19% at 0% 0%, #381095 0%, #011259 49.9%, #00142D 100%)',
        height: '150%', top: 0, left: 0, zIndex: 0,
      }} />
      {/* Right radial gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(50% 50.01% at 100% 0%, #3083EC 0%, #130ABD 37.53%, rgba(19,10,189,0) 100%)',
        zIndex: 0,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-0">
        <h1 className="font-black leading-tight mb-6 tracking-tight text-white" style={{ fontSize: 48 }}>
          全方位零售整合專家
        </h1>
        <p className="text-lg leading-relaxed mb-10 mx-auto text-white" style={{ maxWidth: 580 }}>
          SHOPLINE 提供全方位的零售解決方案，一站實現全通路整合，<br className="hidden lg:block" />
          並透過知識賦能與生態圈服務拓展商機、驅動成長！
        </p>
        {/* Hero CTA: white bg, #356DFF text, 30px radius, 18px/700 */}
        <a
          href="https://admin.shoplineapp.com/users/sign_up?locale=zh-hant"
          className="inline-block font-bold transition-colors mb-16"
          style={{
            backgroundColor: '#fff',
            color: '#356DFF',
            borderRadius: 30,
            fontSize: 18,
            fontWeight: 700,
            padding: '12px 40px',
          }}
        >
          免費試用
        </a>

        {/* Dashboard screenshot */}
        <div className="overflow-hidden text-center">
          <img
            src="https://shoplineimg.com/59c0fd06080f0690b5000cd1/67a177ab434c8c000cb94b4e/1598.webp?source_format=png"
            alt="SHOPLINE 全方位整合零售專家"
            width={1597}
            height={465}
            className="h-auto"
            style={{ maxWidth: 'unset', position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '111%' }}
          />
        </div>
      </div>
    </section>
  )
}
