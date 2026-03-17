'use client'

const solutions = [
  { icon: '🎯', title: '流量獲取與轉換解決方案', description: '跨場景流量覆蓋 x 流量轉換工具 x 一站式整合服務，協助商家突破流量天花板，輕輕鬆鬆流量變現、提升轉換！', color: 'bg-blue-100 text-blue-600' },
  { icon: '🔄', title: 'OMO 全通路整合解決方案', description: '不管是從實體店做數位轉型還是網店拓展線下新商機，皆能透過「系統、通路、數據」三大核心的整合，創造零斷點的 OMO 生意。', color: 'bg-purple-100 text-purple-600' },
  { icon: '⚡', title: '商店營運效率解決方案', description: 'SHOPLINE 全面支援商家在「商店建立準備」、「銷售與訂單管理」及「出貨及售後服務」過程中，有效節省人力成本、加強營運效率！', color: 'bg-orange-100 text-orange-600' },
  { icon: '📊', title: '數據賦能解決方案', description: '告別低效數據圖表！SHOPLINE 整合第一方數據，精煉「人」、「貨」、「場」三大指標數據，搭配顧問服務與產業趨勢報告，助你洞察市場、加速決策、提升業績！', color: 'bg-green-100 text-green-600' },
  { icon: '🔁', title: '會員回購解決方案', description: '想打造專屬品牌網店的會員經營閉環？從精準顧客分眾、活動優惠玩法到自動化推播系統，SHOPLINE 幫你輕鬆建立，低成本打造高回購，舊客經營 level up！', color: 'bg-pink-100 text-pink-600' },
]

export default function Integration() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">全方位零售解決方案</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">針對不同業務需求，提供完整的解決方案，助你全面升級零售競爭力</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div key={i} className="group rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between">
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-black mb-3">找到最適合你的方案</h3>
              <p className="text-white/80 text-sm leading-relaxed">讓我們的專業顧問為你量身打造最佳零售解決方案</p>
            </div>
            <a href="#" className="mt-8 inline-block bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-center">
              了解更多 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
