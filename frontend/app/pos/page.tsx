export default function PosPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>開啟你的全通路生意</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            專為零售品牌打造的智慧 OMO POS 系統，簡單直覺的操作介面，讓結帳收銀順暢無阻，並整合線上及線下的會員、商品、庫存、數據等資訊。一台 iPad 輕鬆管理開店大小事，打造無縫 OMO 旅程！
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
              { title: '網店、實體店資料分散？', desc: '線上線下數據無法整合，難以掌握全局' },
              { title: '人工記帳總是出錯？', desc: '手動記帳耗時費力，錯誤率高' },
              { title: '生意好壞只憑感覺？', desc: '缺乏數據支撐，無法做出精準決策' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>一台 iPad 為你搞定開店大小事！</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '串接 POS 刷卡機及多元支付選項', desc: '信用卡、行動支付、現金一次搞定' },
              { title: '一鍵套用優惠 / 加入會員', desc: '結帳同時完成會員登記與優惠套用' },
              { title: '發票、收據快速開立', desc: '電子發票自動開立，符合法規要求' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#356DFF' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">SHOPLINE POS 讓品牌再進化！</h2>
          <p className="text-white/70 mb-8">全球超過 600,000 商家已使用 SHOPLINE</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
