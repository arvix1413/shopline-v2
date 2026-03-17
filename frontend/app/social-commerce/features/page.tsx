export default function SocialCommerceFeaturesPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            高互動、快速導購！<br />智慧社群購物系統
          </h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            社群與電商的完美結合，巧妙運用社群粉絲的高互動性與系統導購功能，快速收單、簡單開賣！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>社群商店</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '化繁為簡，替社群量身打造的商店', desc: '專為社群平台設計的購物體驗，讓粉絲輕鬆購買' },
              { title: '分享購物車連結', desc: '一鍵分享購物車，讓顧客快速完成結帳' },
              { title: '簡約大方的商品頁面', desc: '清晰的商品展示，提升購買意願' },
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
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>完整功能列表</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '直播購物整合', 'FB/IG/LINE +1 自動接單', '導購機器人', '訊息整合中心',
              '社群商店', '購物車連結分享', '自動整單', '多平台同步',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ backgroundColor: '#356DFF' }}>✓</span>
                <span className="font-medium text-sm" style={{ color: '#354253' }}>{item}</span>
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
