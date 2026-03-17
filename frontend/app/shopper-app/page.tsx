export default function ShopperAppPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            掌上商店，隨走隨買<br />品牌會員購物 App
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            SHOPLINE 品牌會員購物 App，助你快速推出專屬品牌 App，結合品牌官網及 App 優勢，更著力於會員經營，有效培養品牌黏著度、帶來更多業績！
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即申請
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>為什麼要經營品牌會員 App？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '+70%', desc: '透過 Shopper App 強化會員經營及顧客體驗，讓業績增長將近 70%' },
              { stat: '無縫', desc: '透過 Shopper App 縮短與顧客的消費路徑，打造無縫銜接全通路導購銷售' },
              { stat: '黏著', desc: '品牌專屬 App 提升顧客黏著度，培養忠誠會員' },
            ].map((item) => (
              <div key={item.stat} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="text-5xl font-black mb-4" style={{ color: '#356DFF' }}>{item.stat}</div>
                <p className="text-sm" style={{ color: '#354253' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F2F7FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>三大亮點功能 快速打造品牌專屬購物 App</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '品牌客製化', desc: '完整品牌視覺呈現，App 介面與品牌風格一致' },
              { title: '推播通知', desc: '精準推播行銷訊息，直達顧客手機桌面' },
              { title: '會員專屬功能', desc: '點數查詢、專屬優惠、購買紀錄一目瞭然' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl shadow-sm">
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
            立即申請
          </a>
        </div>
      </section>
    </main>
  )
}
