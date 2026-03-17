export default function TrafficConversionPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>流量獲取與轉換解決方案</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            在消費者注意高度分散、廣告效益明顯下降的今日，SHOPLINE 提供全方位的流量獲取與轉換解決方案，從多流量池的佈局到跨平台的數據整合分析，全面賦能品牌在多變的數位環境中搶占先機！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>零售品牌遇到的 3 大流量經營困境</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '流量破碎化挑戰', desc: '消費者分散在各大平台，難以統一管理' },
              { title: '消費決策路徑複雜', desc: '多觸點購物旅程，轉換漏斗難以追蹤' },
              { title: '多通路數據孤島', desc: '各平台數據無法整合，決策缺乏依據' },
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
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>市場最完整的流量佈局解決方案</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>從流量獲取、整合到轉換，多方位掌握！</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '全方位功能支援', desc: '強化多銷售場景轉換效能！' },
              { title: '全場景流量掌控專家', desc: '為你破解流量困境！' },
              { title: '全通路流量整合管理', desc: '釋放流量最大價值！' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#356DFF' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>SHOPLINE 2025 最新流量獲取工具</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '網紅團購模組', desc: '整合網紅資源，快速建立分潤機制' },
              { title: '商品募資', desc: '預售模式驗證市場，降低庫存風險' },
              { title: 'POS 快閃店', desc: '線下快閃活動，快速導流至線上' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-gray-100">
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
