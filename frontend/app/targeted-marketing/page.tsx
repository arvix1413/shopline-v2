export default function TargetedMarketingPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            精準鎖定、放大轉單<br />SHOPLINE 分眾行銷中心
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            用差異化切入人心！透過「分眾行銷」讓你每筆錢都能花在刀口上，把小眾變大眾、資源效益最大化，進而培養忠誠顧客、提升銷售業績！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>哪個更重要？</h2>
          <p className="text-center text-xl mb-12" style={{ color: '#687280' }}>開發新客 & 經營舊客</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#00142D' }}>開發新客</h3>
              <p className="text-sm" style={{ color: '#687280' }}>獲客成本高，轉換率低，需要大量廣告投入</p>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#EBF1F8', border: '2px solid #356DFF' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#356DFF' }}>經營舊客 ✓</h3>
              <p className="text-sm" style={{ color: '#354253' }}>熟客轉換率是新客 5 倍，回購率高，成本低</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>你也遇到這些問題？</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'RFIM 價值模型 9 大智慧顧客分群', desc: '獨家數據演算，精準識別高價值顧客' },
              { title: '內建分群 6 大分類、55+ 篩選條件', desc: '靈活的分群條件，精準定義目標客群' },
              { title: '多通路精準推播', desc: 'Email、SMS、LINE、推播通知全管道觸達' },
              { title: '行銷成效追蹤', desc: '完整的行銷成效數據，持續優化策略' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#356DFF' }}>{item.title}</h3>
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
