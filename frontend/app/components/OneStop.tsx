'use client'

const items = [
  { name: 'SHOP Builder', desc: '快速架設品牌官網', href: '#', icon: '🏗️' },
  { name: 'SHOPLINE Payments', desc: '安全便利的金流收款', href: '#', icon: '💳' },
  { name: '網紅團購模組', desc: '搶攻團購商機必備', href: '#', icon: '🛍️' },
  { name: 'RFIM 分眾行銷中心', desc: '智慧顧客分群', href: '#', icon: '📊' },
  { name: '資安防護', desc: '打造安全交易環境', href: '#', icon: '🔒' },
]

export default function OneStop() {
  return (
    /* Section 5: bg #F2F7FC, color #00142D */
    <section className="py-20" style={{ backgroundColor: '#F2F7FC', color: '#00142D' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="font-black mb-4" style={{ color: '#00142D', fontSize: 40 }}>一站掌握</h2>
          <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: '#354253' }}>
            一個後台，全面掌握品牌經營所需！強大齊全的功能及彈性的架構，從後端營運管理到前端銷售，助你高效經營、快速拓展市場。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#fff', border: '1px solid #E0E3E8' }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="font-black text-sm mb-1" style={{ color: '#00142D' }}>{item.name}</h3>
              <p className="text-xs" style={{ color: '#354253' }}>{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
