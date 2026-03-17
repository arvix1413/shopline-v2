'use client'

const features = [
  {
    emoji: '🚀',
    tag: '一站到位',
    title: '快速上手',
    description: '不論新手創業還是大型品牌，從網路開店、社群導購、OMO POS 系統到全通路整合，一站為你實現全通路零售升級，加速業績成長！',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
  },
  {
    emoji: '📈',
    tag: '成長引擎',
    title: '業績翻倍',
    description: '突破業績有訣竅！善用會員分級結合第一方數據與精準再行銷，深入掌握顧客需求、降低獲客成本；此外，多元第三方應用程式，讓你靈活應對各種銷售需求。',
    color: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50',
  },
  {
    emoji: '🔗',
    tag: '極致升級',
    title: '全通路整合',
    description: '整合全通路開店包含社群商務、品牌 APP、POS、數據資料及開放的 API 等，大幅降低成本，加上專業的顧問服務與豐富生態圈，讓你快速推進，品牌成長無阻！',
    color: 'from-green-500 to-teal-600',
    bg: 'bg-green-50',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            適用各種規模
          </h2>
          <p className="text-xl text-gray-500 font-medium">無論是個人創業還是全球品牌</p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            不論新手創業還是大型品牌，從網路開店、社群導購、OMO POS 系統到全通路整合，一站為你實現全通路零售升級，加速業績成長！
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`${f.bg} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {f.emoji}
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{f.tag}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border-2 border-[#0066ff] text-[#0066ff] font-bold px-8 py-3 rounded-full hover:bg-[#0066ff] hover:text-white transition-all"
          >
            了解所有方案
          </a>
        </div>
      </div>
    </section>
  )
}
