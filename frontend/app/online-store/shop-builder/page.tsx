export default function ShopBuilderPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            隨心所欲、盡情發揮<br />SHOP Builder 頁面編輯器
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            跟複雜的語法、老套的設計說 Bye Bye! 透過拖曳排列、互動型元件加上專業的商店設計主題，不管時尚、運動、經典或是各種風格都能輕鬆駕馭，打造吸睛的質感品牌網店一點都不難！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            免費試用
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '免寫程式 自由拖曳完成編排', desc: '直覺式拖曳介面，任何人都能輕鬆上手' },
              { title: '產業推薦版型 多種設計版型任選', desc: '針對不同產業設計的專業版型，快速套用' },
              { title: 'Layout Engine 前端語言編輯權限', desc: '進階用戶可直接編輯前端代碼，無限客製化' },
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
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>SHOP Builder + 產業推薦版型</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>打造一流品牌網站不是夢</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#356DFF' }}>SHOP Builder</h3>
              <ul className="space-y-3 text-sm" style={{ color: '#354253' }}>
                {['拖曳式頁面編輯', '15+ 互動型元件', '即時預覽', '響應式設計', '多語言支援'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span style={{ color: '#356DFF' }}>✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#356DFF' }}>產業推薦版型</h3>
              <ul className="space-y-3 text-sm" style={{ color: '#354253' }}>
                {['時尚服飾版型', '美妝保養版型', '食品飲料版型', '3C 電子版型', '居家生活版型'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span style={{ color: '#356DFF' }}>✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">款款巧妙 15+ 互動型元件</h2>
          <p className="text-white/70 mb-8">輪播圖、倒數計時、彈出視窗等豐富元件，讓你的網店更生動吸引人</p>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
