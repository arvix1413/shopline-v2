import Link from 'next/link'

export default function SolutionsPage() {
  const solutions = [
    { title: '流量獲取與轉換', desc: '多渠道流量佈局，精準轉換漏斗優化', href: '/solutions/traffic-and-conversion' },
    { title: '會員回購', desc: '4 步驟打造高回購閉環，深度經營既有會員', href: '/solutions/member-repurchase' },
    { title: 'OMO 全通路整合', desc: '線上線下無縫接軌，整合通路×系統×數據', href: '/solutions/omo' },
    { title: '商店營運效率', desc: '一站式後台管理，自動化訂單與多元銷售管道', href: '/solutions/shop-efficiency' },
    { title: '數據賦能', desc: '整合第一方數據，精煉人、貨、場三大核心指標', href: '/solutions/data-analysis' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            全方位零售解決方案<br />OMO 虛實整合再進化
          </h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            SHOPLINE 提供全方位零售解決方案，橫跨電商與實體通路，打造無縫購物體驗，從新創到國際級品牌都能輕鬆擴展市場版圖！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>你開店時是否也遇到以下問題</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['全通路整合成本太高', '顧客數據難以取得', '無法突破業績天花板'].map((p) => (
              <div key={p} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-4xl mb-4">😓</div>
                <h3 className="text-lg font-bold" style={{ color: '#00142D' }}>{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>5 大解決方案</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link key={s.href} href={s.href} className="block p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#356DFF] transition-colors" style={{ color: '#00142D' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{s.desc}</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: '#356DFF' }}>了解更多 →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 SHOPLINE</h2>
          <p className="text-white/70 mb-8">立即加入，開始你的全通路零售之旅</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
