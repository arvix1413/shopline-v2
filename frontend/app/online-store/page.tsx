export default function OnlineStorePage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            網路開店超簡單<br />立即開始你的網路生意
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            想開網路商店？開店一切所需都在 SHOPLINE，從商品上架、金物流串接到行銷推廣，一站就能輕鬆搞定，還有超豐富的開店教學資源，讓你第一次開店就上手！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>免寫程式 也能打造品牌官網</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '拖曳方式編輯', desc: '直覺式拖曳介面，輕鬆打造專業品牌網站' },
              { title: '多樣設計主題', desc: '數十款精美版型，各種風格任你選擇' },
              { title: 'SHOPLINE Payments', desc: '內建金流服務，多種支付方式一次開通' },
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
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>SHOPLINE 為你的網路開店做好一切準備！</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['商品管理', '訂單處理', '行銷工具', '數據分析', '金流串接', '物流整合', 'SEO 優化', '客服支援'].map((item) => (
              <div key={item} className="p-6 bg-white rounded-xl text-center shadow-sm">
                <div className="text-2xl mb-3">✓</div>
                <div className="font-semibold text-sm" style={{ color: '#00142D' }}>{item}</div>
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
