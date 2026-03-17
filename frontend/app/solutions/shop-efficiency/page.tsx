export default function ShopEfficiencyPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>商店營運效率解決方案</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            SHOPLINE 提供一站式操作介面 x 自動化訂單管理 x 多元銷售管道管理，全面協助商家在「商店準備」、「銷售管理」及「售後服務」過程中，提升商店營運效率，有效節省人力成本！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>SHOPLINE 解決商店營運的重要關鍵</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '一站式後台管理', desc: '所有商店管理功能集中在單一後台，操作直覺簡單' },
              { title: '自動化訂單管理', desc: '訂單自動處理、通知、追蹤，大幅減少人工作業' },
              { title: '多管道整合', desc: '網店、POS、社群購物統一管理，數據即時同步' },
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
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>最全方位的零售整合專家，完整提升商家營運效率！</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '品牌開店前置作業', items: ['商店設定', '商品上架', '版型設計', '金物流串接'] },
              { title: '銷售與訂單管理', items: ['訂單處理', '庫存管理', '促銷活動', '多通路銷售'] },
              { title: '出貨及售後服務', items: ['物流追蹤', '退換貨處理', '客服管理', '評價管理'] },
            ].map((col) => (
              <div key={col.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#356DFF' }}>{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                      <span style={{ color: '#356DFF' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
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
