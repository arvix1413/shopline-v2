'use client'

import { useState } from 'react'

const solutions = [
  {
    icon: '🛒',
    title: '網路商店',
    description: '網路開店的所需一切，SHOPLINE 都幫你準備好了！從商品上架、金物流串接、顧客管理到行銷推廣及後台訂單管理等，一個後台就能輕鬆搞定。',
  },
  {
    icon: '📱',
    title: '社群購物',
    description: '內建社群直播購物、AI 導購機器人與訊息整合中心等，確保從互動到下單的每一步都順暢無阻，無縫的社群購物體驗，助你輕鬆收單、提升業績。',
  },
  {
    icon: '🏪',
    title: '零售 POS',
    description: '專為零售品牌打造的智慧 OMO POS 系統，簡單直覺的介面，從結帳收銀、商品庫存管理、會員經營、數據分析到線上、線下的資訊的無縫整併，一站搞定！',
  },
  {
    icon: '👥',
    title: 'Smart OMO 會員導購工具',
    description: '門市和網店聰明串連！不管顧客在實體門市或是網路商店，都能快速註冊品牌會員；店員隨時輕鬆導購，引導跨通路消費，加速全通路業績成長。',
  },
  {
    icon: '📲',
    title: 'Shopper App',
    description: '輕鬆打造品牌專屬購物 App！結合官網及 App 優勢，透過推播通知、會員卡、優惠條碼等 App 專屬體驗，打造穩定會員流量池，深化 OMO 效益。',
  },
]

export default function Solutions() {
  const [active, setActive] = useState(0)

  return (
    /* Section 3: transparent bg (inherits #00142D from parent flow), color #00142D */
    <section className="py-20" style={{ backgroundColor: 'transparent', color: '#00142D' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-bold text-sm uppercase tracking-widest mb-3" style={{ color: '#356DFF' }}>全通路開店整合</p>
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: '#fff', fontSize: 40 }}>市場唯一五大原生開店工具</h2>
          <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            全通路開店工具原生連動，一站整合、免串接！輔以市場最成熟的開放 API，<br className="hidden lg:block" />
            快速實現線上及線下無縫整合，打造 OMO 零售生意！
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {solutions.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={active === i
                ? { backgroundColor: '#356DFF', color: '#fff' }
                : { backgroundColor: '#fff', color: '#00142D', border: '1px solid rgba(255,255,255,0.3)' }
              }
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        {/* Active content */}
        <div className="rounded-3xl p-10 max-w-4xl mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl flex-shrink-0">
              {solutions[active].icon}
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#fff' }}>{solutions[active].title}</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{solutions[active].description}</p>
              {/* 了解更多: transparent bg, #356DFF color, 16px/700 */}
              <a href="#" className="inline-block mt-6 font-bold text-sm hover:underline" style={{ color: '#356DFF' }}>
                了解更多
              </a>
            </div>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {solutions.map((s, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="rounded-2xl p-5 cursor-pointer transition-all"
              style={active === i
                ? { border: '2px solid #356DFF', backgroundColor: 'rgba(53,109,255,0.15)' }
                : { border: '2px solid transparent', backgroundColor: 'rgba(255,255,255,0.06)' }
              }
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-sm font-bold" style={{ color: '#fff' }}>{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
