export default function OnlineStoreFeaturesPage() {
  const features = [
    { category: '商店建立', items: ['獨有網址 & SSL 安全憑證', '內建 SEO 搜尋引擎優化', '商品摘要', '多語言支援', '自訂網域'] },
    { category: '商品管理', items: ['無限商品上架', '商品分類管理', '庫存追蹤', '商品變體', '批量匯入匯出'] },
    { category: '訂單管理', items: ['訂單自動處理', '出貨通知', '退換貨管理', '訂單備註', '多幣別支援'] },
    { category: '行銷工具', items: ['折扣碼', '滿額優惠', '會員點數', '電子報', '社群分享'] },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>簡單、強悍的網路商店功能</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            SHOPLINE 協助你輕鬆創建、管理、擴展你的品牌網店，締造更高的營收成長！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.category} className="p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <h2 className="text-xl font-bold mb-6" style={{ color: '#00142D' }}>{f.category}</h2>
                <ul className="space-y-3">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#354253' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ backgroundColor: '#356DFF' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
