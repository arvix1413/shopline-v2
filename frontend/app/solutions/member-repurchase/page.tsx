export default function MemberRepurchasePage() {
  const steps = [
    { step: 'STEP 01', title: '會員分眾：快速掌握顧客輪廓，精準制定行銷分群策略', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 獨家 RFIM 價值模型，提供 9 大智慧顧客分群' },
    { step: 'STEP 02', title: '行銷優惠：高達 205 種促購玩法，精準提升顧客回購率', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 提供多元的優惠設定' },
    { step: 'STEP 03', title: '回購驅動：多通路精準推播策略，不浪費每一次曝光', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', alt: 'ARVIX 自動化推播系統整合多管道' },
    { step: 'STEP 04', title: '數據分析：55 種專業報表全面解析，精準掌握投資回報，最大化行銷價值', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80', alt: 'ARVIX Shoplytics 數據分析提供 55 種專業分析報表' },
  ]
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">會員回購解決方案<br />4 步驟打造高回購閉環</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>在流量紅利消失的時代，ARVIX 提供 4 大核心策略，透過「會員分眾」、「行銷優惠」、「回購驅動」、「數據分析」為你打造高轉換的會員行銷閉環。</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>立即免費試用</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="ARVIX 會員回購解決方案" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>會員經營 4 大核心優勢</h2>
          <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="ARVIX 會員經營 4 大核心優勢" className="w-full rounded-2xl" />
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>品牌會員經營為什麼至關重要？</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { stat: '5x', title: '熟客帶來轉換成果是新客的 5 倍' },
              { stat: '↑', title: '熟客的平均花費金額會高於新客' },
              { stat: '+利潤', title: '多留住 5% 熟客，有助利潤提升' },
            ].map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center bg-white">
                <div className="text-5xl font-black mb-4" style={{ color: '#5B5FF0' }}>{item.stat}</div>
                <h3 className="text-base font-bold" style={{ color: '#00142D' }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>如何打造「高循環」、「高精準」、「高效率」的會員經營閉環？</h2>
          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-2" style={{ color: '#5B5FF0' }}>{s.step}</div>
                  <h3 className="text-xl font-bold" style={{ color: '#00142D' }}>{s.title}</h3>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>驅動會員持續回購<br />流量碎片化時代的致勝關鍵</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: '有效提升會員經營效率', desc: '自動化行銷流程，節省人力成本，讓你專注在策略制定。' },
              { title: '建立高循環的行銷閉環', desc: '從獲客到留客，完整的會員旅程管理，持續提升顧客終身價值。' },
              { title: '持續優化行銷投資報酬', desc: '數據驅動決策，精準投放資源，最大化每一分行銷預算的效益。' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#5B5FF0' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white/70 mb-8">立即加入，開始你的全通路零售之旅</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>立即免費試用</a>
        </div>
      </section>
    </main>
  )
}
