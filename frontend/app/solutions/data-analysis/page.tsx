export default function DataAnalysisPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>數據賦能解決方案</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            擺脫數據迷霧，擁抱精準洞察！SHOPLINE 整合第一方數據，精煉「人」、「貨」、「場」三大核心指標數據，搭配顧問服務與產業趨勢報告，讓數據驅動決策、有效提升業績！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>降維決策，升維經營</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>想從數據洞察品牌商機，卻仍在盲人摸象？</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '數據碎片化，全貌難尋', desc: '各平台數據分散，無法整合成完整視圖' },
              { title: '數據失焦，無從下手', desc: '數據量龐大，不知道該關注哪些指標' },
              { title: '成效模糊，憑感覺決策', desc: '缺乏數據支撐，行銷決策靠直覺' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>聚焦「人、貨、場」</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>掌握零售三要素加速品牌全面成長</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: '人', title: '找到對的人賣貨', desc: '精準顧客分群，了解誰是你的核心客群' },
              { key: '貨', title: '選品銷貨更精準', desc: '商品數據分析，掌握暢銷品與滯銷品' },
              { key: '場', title: '全通路場景無縫整合', desc: '線上線下場景數據統一，洞察消費旅程' },
            ].map((item) => (
              <div key={item.key} className="p-8 bg-white rounded-2xl shadow-sm text-center">
                <div className="text-5xl font-black mb-4" style={{ color: '#356DFF' }}>「{item.key}」</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
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
