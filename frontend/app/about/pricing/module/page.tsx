const modules = [
  {
    category: '行銷工具',
    items: [
      { name: 'RFIM 分眾行銷', price: 'NT$990/月', desc: '精準分眾，提升行銷 ROI' },
      { name: 'LINE 官方帳號整合', price: 'NT$490/月', desc: '串接 LINE OA，直接觸達會員' },
      { name: '團購解決方案', price: 'NT$690/月', desc: '網紅團購、群組購物一站搞定' },
    ],
  },
  {
    category: '數據分析',
    items: [
      { name: 'Shoplytics 數據分析', price: 'NT$790/月', desc: '人貨場全方位數據洞察' },
      { name: 'AI 洞察策略', price: 'NT$490/月', desc: 'AI 自動分析，提供可執行建議' },
    ],
  },
  {
    category: '全通路整合',
    items: [
      { name: 'Smart OMO', price: 'NT$1,490/月', desc: '智慧串連門市與網店' },
      { name: 'Shopper App', price: 'NT$1,990/月', desc: '品牌專屬會員購物 App' },
      { name: 'POS 零售系統', price: '依規格報價', desc: '實體門市收銀與庫存管理' },
    ],
  },
  {
    category: '金流服務',
    items: [
      { name: 'ARVIX Payments', price: '依交易量計費', desc: '一站式金流，支援多種支付方式' },
    ],
  },
]

export default function PricingModulePage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>功能模組費用</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            依需求彈性選購功能模組，搭配主方案打造最適合你的電商解決方案
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/about/pricing" className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-80 transition-opacity" style={{ borderColor: '#356DFF', color: '#356DFF' }}>
              查看主方案費用
            </a>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              免費試用
            </a>
          </div>
        </div>
      </section>

      {modules.map((cat, i) => (
        <section key={cat.category} className="py-16" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#F4F7FC' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-black mb-8" style={{ color: '#00142D' }}>{cat.category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{item.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#687280' }}>{item.desc}</p>
                  <div className="text-xl font-black" style={{ color: '#356DFF' }}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">More solutions for your business</h2>
          <p className="text-white opacity-70 mb-8">全球超過 600,000 商家已使用 ARVIX</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
