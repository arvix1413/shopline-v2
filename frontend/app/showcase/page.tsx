export default function ShowcasePage() {
  const cases = [
    { brand: '時尚品牌 A', category: '服飾', result: '業績成長 300%', desc: '透過 SHOPLINE OMO 整合線上線下通路，打造無縫購物體驗' },
    { brand: '美妝品牌 B', category: '美妝保養', result: '會員數增加 5 倍', desc: '運用分眾行銷精準觸達目標客群，大幅提升回購率' },
    { brand: '食品品牌 C', category: '食品飲料', result: '轉換率提升 150%', desc: '社群購物系統整合 FB/IG 直播，快速累積訂單' },
    { brand: '3C 品牌 D', category: '3C 電子', result: '客單價提升 80%', desc: 'Shoplytics 數據分析驅動精準行銷決策' },
    { brand: '居家品牌 E', category: '居家生活', result: '新客成長 200%', desc: '網紅團購模組快速擴大品牌知名度' },
    { brand: '運動品牌 F', category: '運動戶外', result: 'App 下載 10 萬+', desc: 'Shopper App 強化會員黏著度與回購率' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>精選品牌案例</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            SHOPLINE 商家的真實成功案例，一站實現品牌全通路整合！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            瞭解更多
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.brand} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-xs font-bold mb-2 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#EBF1F8', color: '#356DFF' }}>
                  {c.category}
                </div>
                <h3 className="text-xl font-bold mt-3 mb-2" style={{ color: '#00142D' }}>{c.brand}</h3>
                <div className="text-2xl font-black mb-3" style={{ color: '#356DFF' }}>{c.result}</div>
                <p className="text-sm" style={{ color: '#687280' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 SHOPLINE</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
