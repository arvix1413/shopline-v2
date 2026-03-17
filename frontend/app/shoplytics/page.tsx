export default function ShoplyticsPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            Shoplytics 零售數據分析<br />善用數據驅動決策，讓你掌握商機
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            無論是個人賣家還是大型品牌，精準掌握數據是邁向成長的第一步！SHOPLINE Shoplytics 提供完整的電商數據分析，從基礎報表到 AI 洞察與應用，化簡為繁，助品牌一手掌握營運狀況，用數據驅動決策與成長。
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: '即時銷售數據分析', desc: '即時掌握銷售狀況，快速做出反應' },
              { title: 'AI 洞察策略', desc: 'AI 自動分析數據，提供可執行的行銷建議' },
              { title: 'AI 數據自動應用', desc: '數據洞察自動轉化為行銷行動，省時省力' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>Shoplytics 數據分析中心</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '即時營運儀表', desc: '一目瞭然的儀表板，掌握今日、本週、本月業績' },
              { title: '顧客行為分析', desc: '了解顧客購買路徑、偏好商品、消費頻率' },
              { title: '多維度行銷分析', desc: '各行銷渠道成效比較，找出最佳投資報酬率' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#356DFF' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>Shoplytics x AI 驅動智慧洞察</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: '智慧商品推薦', desc: 'AI 分析購買行為，自動推薦最可能購買的商品' },
              { title: '流失顧客預警', desc: '提前識別可能流失的顧客，及時採取挽留措施' },
              { title: '最佳推播時機', desc: 'AI 分析顧客活躍時間，在最佳時機發送行銷訊息' },
              { title: '庫存智慧預測', desc: '根據銷售趨勢預測庫存需求，避免缺貨或積壓' },
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
