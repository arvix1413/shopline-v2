'use client'

import Link from 'next/link'

const items = [
  {
    name: 'SHOP Builder',
    desc: '快速架設品牌官網',
    href: '/online-store/shop-builder',
    img: 'https://img.shoplineapp.com/media/image_clips/67d0130d8f65d7000f145204/original.png?1741689613',
    alt: 'SHOPLINE Builder 頁面編輯器',
  },
  {
    name: 'SHOPLINE Payments',
    desc: '安全便利的金流收款',
    href: '/payments',
    img: 'https://img.shoplineapp.com/media/image_clips/67d0130d4be1e4000cf60798/original.png?1741689613',
    alt: 'SHOPLINE Payments 金流收款服務',
  },
  {
    name: '網紅團購模組',
    desc: '搶攻團購商機必備',
    href: '/group-buying',
    img: 'https://img.shoplineapp.com/media/image_clips/67d0130d7d892c000f93bdb5/original.png?1741689613',
    alt: 'SHOPLINE 網紅團購模組',
  },
  {
    name: 'RFIM 分眾行銷中心',
    desc: '智慧顧客分群',
    href: '/targeted-marketing',
    img: 'https://img.shoplineapp.com/media/image_clips/67d0130d555fa500111bfca5/original.png?1741689613',
    alt: 'SHOPLINE 分眾行銷中心',
  },
  {
    name: '資安防護',
    desc: '打造安全交易環境',
    href: 'https://marketing.shopline.tw/anti-fraud',
    external: true,
    img: 'https://img.shoplineapp.com/media/image_clips/67d3aaff8d4b02000c791e72/original.png?1741925119',
    alt: 'SHOPLINE 資安防護',
  },
]

export default function OneStop() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F2F7FC', color: '#00142D' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="font-black mb-4" style={{ color: '#00142D', fontSize: 40 }}>一站掌握</h2>
          <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: '#354253' }}>
            一個後台，全面掌握品牌經營所需！強大齊全的功能及彈性的架構，從後端營運管理到前端銷售，助你高效經營、快速拓展市場。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {items.map((item, i) => {
            const inner = (
              <>
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-black text-sm mb-1" style={{ color: '#00142D' }}>{item.name}</h3>
                <p className="text-xs" style={{ color: '#354253' }}>{item.desc}</p>
              </>
            )
            return item.external ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#fff', border: '1px solid #E0E3E8' }}
              >
                {inner}
              </a>
            ) : (
              <Link
                key={i}
                href={item.href}
                className="group rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#fff', border: '1px solid #E0E3E8' }}
              >
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
