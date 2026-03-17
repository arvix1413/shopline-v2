export default function PosHardwarePage() {
  const hardware = [
    { name: '錢櫃 ( 大 / 小 )', desc: '堅固耐用的收銀錢櫃，支援自動彈開功能' },
    { name: '無線條碼標籤機', desc: '快速列印商品條碼標籤，提升作業效率' },
    { name: '無線藍牙掃描槍', desc: '快速掃描商品條碼，結帳更順暢' },
    { name: '熱感收據印表機', desc: '快速列印收據，支援電子發票' },
    { name: 'iPad 支架', desc: '穩固的 iPad 固定支架，適合各種收銀台' },
    { name: '客戶顯示螢幕', desc: '讓顧客清楚看到結帳金額，提升信任感' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>POS 週邊硬體</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            專為服飾、零售業設計的 iPad POS 系統，支援收銀結帳、商品庫存、進銷存及會員管理等功能，搭配直覺式的操作介面讓你輕鬆上手，管理店面超 Easy！
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
              { title: '彈性選購', desc: '依需求選購所需硬體，不強制捆綁' },
              { title: '快速連線', desc: '藍牙 / WiFi 快速配對，即插即用' },
              { title: '輕巧大方', desc: '精緻外觀設計，提升門市質感' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>硬體怎麼用？</h2>
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            {[
              { step: 'STEP 1', desc: '選購所需硬體設備' },
              { step: 'STEP 2', desc: '連接 iPad 並完成配對' },
              { step: 'STEP 3', desc: '開始使用，輕鬆管理門市' },
            ].map((s) => (
              <div key={s.step} className="flex-1 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-sm font-bold mb-2" style={{ color: '#356DFF' }}>{s.step}</div>
                <p className="text-sm" style={{ color: '#354253' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>硬體產品</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardware.map((item) => (
              <div key={item.name} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.name}</h3>
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
