export default function PosFeaturesPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            門市 iPad POS 系統<br />銷售營運透明好管理
          </h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            一鍵搞定門市的庫存、進銷存管理，從收銀到收帳，數量、金額不出錯！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>收銀結帳</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '完整收銀紀錄', desc: '每筆交易完整記錄，隨時查詢對帳' },
              { title: '智慧收銀結帳介面', desc: '直覺操作介面，新手也能快速上手' },
              { title: '實體金流串接', desc: '支援多種刷卡機與行動支付裝置' },
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
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>完整功能</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '庫存即時同步', '進銷存管理', '員工權限管理', '班次管理',
              '多門市管理', '商品條碼掃描', '電子發票', '會員整合',
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
