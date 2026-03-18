'use client'

const solutions = [
  {
    icon: '🎯',
    title: '流量獲取與轉換解決方案',
    description: '跨場景流量覆蓋 x 流量轉換工具 x 一站式整合服務，協助商家突破流量天花板，輕輕鬆鬆流量變現、提升轉換！',
  },
  {
    icon: '🔄',
    title: 'OMO 全通路整合解決方案',
    description: '不管是從實體店做數位轉型還是網店拓展線下新商機，皆能透過「系統、通路、數據」三大核心的整合，創造零斷點的 OMO 生意。',
  },
  {
    icon: '⚡',
    title: '商店營運效率解決方案',
    description: 'SHOPLINE 全面支援商家在「商店建立準備」、「銷售與訂單管理」及「出貨及售後服務」過程中，有效節省人力成本、加強營運效率！',
  },
  {
    icon: '📊',
    title: '數據賦能解決方案',
    description: '告別低效數據圖表！SHOPLINE 整合第一方數據，精煉「人」、「貨」、「場」三大指標數據，搭配顧問服務與產業趨勢報告，助你洞察市場、加速決策、提升業績！',
  },
  {
    icon: '🔁',
    title: '會員回購解決方案',
    description: '想打造專屬品牌網店的會員經營閉環？從精準顧客分眾、活動優惠玩法到自動化推播系統，SHOPLINE 幫你輕鬆建立，低成本打造高回購，舊客經營 level up！',
  },
]

export default function Integration() {
  return (
    /* Section 4: transparent bg, gradient from #00142D to #004193 via CSS */
    <section className="py-20" style={{ background: 'linear-gradient(180deg, #00142D 0%, #004193 100%)', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-black mb-4" style={{ color: '#fff', fontSize: 40 }}>全方位零售解決方案</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)' }} className="max-w-2xl mx-auto">針對不同業務需求，提供完整的解決方案，助你全面升級零售競爭力</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div key={i} className="group rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-lg font-black mb-3" style={{ color: '#fff' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.description}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="rounded-3xl p-8 flex flex-col justify-between" style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-black mb-3" style={{ color: '#fff' }}>找到最適合你的方案</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>讓我們的專業顧問為你量身打造最佳零售解決方案</p>
            </div>
            {/* 了解更多: transparent bg, #356DFF color */}
            <a href="/solutions" className="mt-8 inline-block font-bold text-sm hover:underline" style={{ color: '#356DFF' }}>
              了解更多 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
