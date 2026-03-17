export default function PricingPage() {
  const plans = [
    { name: '基礎版', price: 'NT$990', period: '/月', features: ['網路商店', '無限商品', '基本行銷工具', '客服支援'], cta: '免費試用' },
    { name: '進階版', price: 'NT$1,990', period: '/月', features: ['基礎版全部功能', '社群購物', '分眾行銷', 'Shoplytics 數據分析', '優先客服'], cta: '免費試用', highlight: true },
    { name: '旗艦版', price: '聯繫我們', period: '', features: ['進階版全部功能', 'POS 系統', 'Smart OMO', 'Shopper App', '專屬顧問服務'], cta: '預約諮詢' },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>SHOPLINE 方案費用</h1>
          <p className="text-lg mb-4" style={{ color: '#687280' }}>選擇最適合你的方案，立即開始免費試用</p>
          <p className="text-sm" style={{ color: '#356DFF' }}>所有方案均提供 14 天免費試用，無需信用卡</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl ${plan.highlight ? 'shadow-xl' : 'border border-gray-100'}`}
                style={plan.highlight ? { backgroundColor: '#356DFF' } : { backgroundColor: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: plan.highlight ? 'white' : '#00142D' }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black" style={{ color: plan.highlight ? 'white' : '#356DFF' }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : '#687280' }}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: plan.highlight ? 'rgba(255,255,255,0.9)' : '#354253' }}>
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="/register" className="block text-center py-3 rounded-full font-bold transition-opacity hover:opacity-90"
                  style={plan.highlight ? { backgroundColor: 'white', color: '#356DFF' } : { backgroundColor: '#356DFF', color: 'white' }}>
                  {plan.cta}
                </a>
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
