export default function SelectedPartnersPage() {
  const categories = [
    {
      title: '豐富金物流選項',
      desc: '整合多元金流與物流服務，讓商家輕鬆提供消費者最便利的付款與收貨方式。',
      partners: ['ARVIX Payments', 'LINE Pay', 'Apple Pay', '街口支付', '黑貓宅急便', '7-11 超商取貨', '全家便利商店', '郵局'],
    },
    {
      title: '專業設計、行銷團隊',
      desc: '與頂尖設計與行銷服務商合作，協助品牌打造專業形象並提升行銷成效。',
      partners: ['品牌設計公司', '數位行銷代理商', 'SEO 優化服務', '社群媒體管理', '廣告投放服務', '內容行銷團隊'],
    },
    {
      title: '多元服務滿足各式需求',
      desc: '涵蓋 ERP、CRM、倉儲物流等各類企業服務，打造完整的電商生態圈。',
      partners: ['ERP 系統整合', 'CRM 客戶管理', '倉儲物流服務', '客服系統', '數據分析工具', 'AI 行銷工具'],
    },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            ARVIX 夥伴提供您各式支援
          </h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            精選合作夥伴生態圈，為你的品牌提供全方位的專業服務支援
          </p>
          <a href="/cooperate" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            成為合作夥伴
          </a>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section key={cat.title} className="py-20" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#F4F7FC' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>{cat.title}</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#687280' }}>{cat.desc}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cat.partners.map((p) => (
                <div key={p} className="p-4 bg-white rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: '#EBF1F8' }}>
                    <span className="text-xl">🤝</span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#354253' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
