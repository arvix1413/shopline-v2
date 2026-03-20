export default function DataAnalysisPage() {
  const items = [
    { key: '人', title: '找到對的人賣貨', tags: ['智慧 RFIM 價值模型'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: '透過 ARVIX 獨家的 RFIM 價值模型讓你找到對的人賣貨' },
    { key: '貨', title: '選品銷貨更精準', tags: ['數據分析中心 (Pro) - 商品成長探測', 'AI 演算智慧商品推薦'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', alt: 'ARVIX 透過全面數據分析讓品牌精準掌握商品生命週期和市場需求波動' },
    { key: '場', title: '全通路場景無縫整合', tags: ['全通路洞察', '產業基準值'], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80', alt: 'ARVIX 整合多通路銷售管道數據，實現全通路的無縫客戶體驗' },
  ]
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">數據賦能解決方案</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>擺脫數據迷霧，擁抱精準洞察！ARVIX 整合第一方數據，精煉「人」、「貨」、「場」三大核心指標數據，搭配顧問服務與產業趨勢報告，讓數據驅動決策、有效提升業績！</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>立即免費試用</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="ARVIX 數據賦能解決方案" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>降維決策，升維經營</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>想從數據洞察品牌商機，卻仍在盲人摸象？</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '數據碎片化，全貌難尋', desc: '各平台數據分散，無法整合成完整視圖，難以掌握品牌整體經營狀況。' },
              { title: '數據失焦，無從下手', desc: '數據量龐大，不知道該關注哪些指標，導致分析資源浪費。' },
              { title: '成效模糊，憑感覺決策', desc: '缺乏數據支撐，行銷決策靠直覺，難以評估投資報酬率。' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>聚焦「人、貨、場」</h2>
          <p className="text-center mb-16" style={{ color: '#687280' }}>掌握零售三要素加速品牌全面成長</p>
          <div className="space-y-20">
            {items.map((item, i) => (
              <div key={item.key} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-4xl font-black mb-3" style={{ color: '#356DFF' }}>「{item.key}」</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#00142D' }}>{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#EBF1F8', color: '#356DFF' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <img src={item.img} alt={item.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>數據×顧問×洞察<br />策略顧問服務與產業趨勢報告</h2>
            <p className="text-lg" style={{ color: '#687280' }}>除了強大的數據工具，ARVIX 還提供專業顧問服務與產業趨勢報告，讓你的決策更有依據。</p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="ARVIX 強大策略顧問團隊" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white/70 mb-8">立即加入，開始你的全通路零售之旅</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>立即免費試用</a>
        </div>
      </section>
    </main>
  )
}
