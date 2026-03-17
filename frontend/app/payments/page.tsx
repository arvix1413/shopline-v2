export default function PaymentsPage() {
  const paymentMethods = [
    { title: '信用卡刷卡＆分期', desc: '支援 VISA、Mastercard、JCB，最高 24 期分期' },
    { title: 'ATM 銀行轉帳', desc: '支援全台各大銀行 ATM 轉帳' },
    { title: '行動電子支付', desc: 'Apple Pay、LINE Pay、街口支付等主流行動支付' },
    { title: '無卡分期（BNPL）', desc: '先買後付，降低顧客購買門檻' },
    { title: 'POS 實體刷卡機', desc: '門市實體刷卡，線上線下統一管理' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>快速付、輕鬆收</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            SHOPLINE Payments OMO 電商金流服務提供多種付款方式，包括信用卡刷卡與分期、ATM 轉帳、Apple Pay、LINE Pay、無卡分期（BNPL）、街口支付以及 POS 實體刷卡機。顧客「無需跳轉頁面」即可快速完成付款。服務通過 PCI-DSS 安全認證，確保購物過程安全、快速且流暢。
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>SHOPLINE Payments 安全支付、提升交易成功率</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { stat: '99%+', desc: '刷卡成功率高於 99%' },
              { stat: 'PCI-DSS', desc: '通過國際安全認證' },
              { stat: '一頁結帳', desc: '無需跳轉頁面，降低棄單率' },
            ].map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-4xl font-black mb-3" style={{ color: '#356DFF' }}>{item.stat}</div>
                <p className="text-sm font-medium" style={{ color: '#354253' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>多元收款服務</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>簡單啟用 線上申請超省力</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '一頁完成付款免跳轉', desc: '告別訂單流失，顧客在商店內直接完成付款' },
              { title: '線上就能申請', desc: '一次開通多種支付方式，無需分別申請' },
              { title: '穩定流暢！', desc: '刷卡成功率高於 99%，讓每筆交易都順利完成' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
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
