export default function ShopEfficiencyPage() {
  const sections = [
    { title: '品牌開店前置作業', items: ['多元金物流整合', '多元網頁活動頁面', '大量批次管理及 Open API'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'ARVIX 一站完成品牌開店前置作業' },
    { title: '銷售與訂單管理', items: ['多元銷售管道管理', '商品管理', '訂單管理', '庫存管理'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80', alt: 'ARVIX 整合多元銷售通路，並提供完整的後台商品、訂單及庫存管理' },
    { title: '出貨及售後服務', items: ['訊息中心', '電子發票服務', '對帳管理工具'], img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'ARVIX 提供品牌完整的出貨及售後服務' },
  ]
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 20, 45) 0%, rgb(0, 65, 147) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">商店營運效率解決方案</h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>ARVIX 提供一站式操作介面 x 自動化訂單管理 x 多元銷售管道管理，全面協助商家在「商店準備」、「銷售管理」及「售後服務」過程中，提升商店營運效率，有效節省人力成本！</p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>立即免費試用</a>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="ARVIX 商店營運效率解決方案" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>ARVIX 解決商店營運的重要關鍵</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '一站式後台管理', desc: '所有商店管理功能集中在單一後台，操作直覺簡單，大幅降低學習成本。' },
              { title: '自動化訂單管理', desc: '訂單自動處理、通知、追蹤，大幅減少人工作業，提升處理效率。' },
              { title: '多管道整合', desc: '網店、POS、社群購物統一管理，數據即時同步，掌握全通路銷售狀況。' },
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
          <h2 className="text-3xl font-black text-center mb-16" style={{ color: '#00142D' }}>最全方位的零售整合專家，完整提升商家營運效率！</h2>
          <div className="space-y-20">
            {sections.map((s, i) => (
              <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-4" style={{ color: '#00142D' }}>{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span style={{ color: '#5B5FF0' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img src={s.img} alt={s.alt} className="w-full rounded-2xl shadow-sm" />
                </div>
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
