export default function LineSolutionPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#00B900', color: 'white' }}>
            唯一 LINE 指定技術合作夥伴
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            SHOP 不能沒有 LINE<br />用 LINE 官方帳號賣更多！
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#687280' }}>
            零死角圈粉、轉單成為鐵粉！3 大策略產品驅動你的 LINE 官方帳號有。感。成。長
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            預約專人諮詢
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>全效整合 LINE 好友</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '輕鬆圈粉', desc: '多種加好友方式，快速累積 LINE 好友數' },
              { title: '導購衝單', desc: '精準推播商品訊息，將好友轉化為顧客' },
              { title: '智慧客服', desc: 'AI 自動回覆，24 小時不間斷服務顧客' },
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
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>流量＋留量 再行銷一氣呵成</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { title: '360° 導購', desc: '流量變現就靠它，從加好友到完成購買全程陪伴' },
              { title: '精準分眾推播', desc: '依顧客行為分群，推送最相關的商品與優惠' },
              { title: 'LINE 購物整合', desc: '直接在 LINE 內完成購物，降低購買門檻' },
              { title: '會員點數整合', desc: 'LINE Points 與品牌點數整合，提升回購動力' },
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
            預約專人諮詢
          </a>
        </div>
      </section>
    </main>
  )
}
