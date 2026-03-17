export default function MemberRepurchasePage() {
  const steps = [
    { step: 'STEP 01', title: '會員分眾', desc: '快速掌握顧客輪廓，精準制定行銷分群策略' },
    { step: 'STEP 02', title: '行銷優惠', desc: '高達 205 種促購玩法，精準提升顧客回購率' },
    { step: 'STEP 03', title: '回購驅動', desc: '多通路精準推播策略，不浪費每一次曝光' },
    { step: 'STEP 04', title: '數據分析', desc: '完整會員行為數據，持續優化行銷策略' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            會員回購解決方案<br />4 步驟打造高回購閉環
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            在流量紅利消失的時代，SHOPLINE 提供 4 大核心策略，透過「會員分眾」、「行銷優惠」、「回購驅動」、「數據分析」為你打造高轉換的會員行銷閉環。
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>品牌會員經營為什麼至關重要？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '5x', desc: '熟客帶來轉換成果是新客的 5 倍' },
              { stat: '↑', desc: '熟客的平均花費金額會高於新客' },
              { stat: '+利潤', desc: '多留住 5% 熟客，有助利潤提升' },
            ].map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-5xl font-black mb-4" style={{ color: '#356DFF' }}>{item.stat}</div>
                <p className="text-sm font-medium" style={{ color: '#00142D' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>如何打造「高循環」、「高精準」、「高效率」的會員經營閉環？</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {steps.map((s) => (
              <div key={s.step} className="p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-sm font-bold mb-2" style={{ color: '#356DFF' }}>{s.step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00142D' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{s.desc}</p>
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
