'use client'

const features = [
  {
    tag: '一站到位',
    title: '快速上手',
    description: '不論新手創業還是大型品牌，從網路開店、社群導購、OMO POS 系統到全通路整合，一站為你實現全通路零售升級，加速業績成長！',
    color: 'from-blue-500 to-indigo-600',
    bg: 'rgba(255,255,255,0.08)',
    icon: '🚀',
  },
  {
    tag: '成長引擎',
    title: '業績翻倍',
    description: '突破業績有訣竅！善用會員分級結合第一方數據與精準再行銷，深入掌握顧客需求、降低獲客成本；此外，多元第三方應用程式，讓你靈活應對各種銷售需求。',
    color: 'from-purple-500 to-pink-600',
    bg: 'rgba(255,255,255,0.08)',
    icon: '📈',
  },
  {
    tag: '極致升級',
    title: '全通路整合',
    description: '整合全通路開店包含社群商務、品牌 APP、POS、數據資料及開放的 API 等，大幅降低成本，加上專業的顧問服務與豐富生態圈，讓你快速推進，品牌成長無阻！',
    color: 'from-green-500 to-teal-600',
    bg: 'rgba(255,255,255,0.08)',
    icon: '🔗',
  },
]

export default function Features() {
  return (
    /* Section 2: bg #00142D, color white */
    <section className="py-20" style={{ backgroundColor: '#00142D', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-2" style={{ color: '#fff', fontSize: 40 }}>
            適用各種規模
          </h2>
          <p className="text-xl font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>無論是個人創業還是全球品牌</p>
          <p className="mt-4 max-w-3xl mx-auto leading-relaxed" style={{ color: '#354253' }}>
            不論新手創業還是大型品牌，從網路開店、社群導購、OMO POS 系統到全通路整合，一站為你實現全通路零售升級，加速業績成長！
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#A56DFF' }}>{f.tag}</div>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#fff' }}>{f.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: '#354253' }}>{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* 了解所有方案: bg #356DFF, white text, radius 30px, 18px/700 */}
          <a
            href="#"
            className="inline-block font-bold transition-all hover:opacity-90"
            style={{
              backgroundColor: '#356DFF',
              color: '#fff',
              borderRadius: 30,
              fontSize: 18,
              fontWeight: 700,
              padding: '12px 40px',
            }}
          >
            了解所有方案
          </a>
        </div>
      </div>
    </section>
  )
}
