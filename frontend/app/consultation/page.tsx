export default function ConsultationPage() {
  const stages = [
    { title: '數位轉型', desc: '想從傳統零售拓展到線上通路，放大客群' },
    { title: '營收突破', desc: '想突破品牌的成長瓶頸，更精準找到對的顧客' },
    { title: '全通路經營', desc: '想要 OMO 整合，打造虛實融合的無縫購物體驗' },
    { title: '自動化管理', desc: '想提升營運效率，有效降低管理及人力成本' },
  ]

  const features = [
    {
      title: '免寫程式快速打造高質感品牌購物網站',
      desc: '不用複雜的程式語法，透過拖曳排列方式與一鍵套用設計主題，你也能在短時間內打造高質感的專屬品牌網店！',
    },
    {
      title: '告別資訊碎片化一站式整合全通路零售生意',
      desc: '透過 ARVIX 一站整合社群商務、品牌 APP、與實體 POS 數據全面打通，實現真正的會員導購與全通路營收。',
    },
    {
      title: '精準掌握第一方數據有效提升品牌回購率與業績',
      desc: '深度洞察顧客行為並結合多種彈性優惠玩法與自動化行銷推播，做出品牌差異化，大幅提升 CRM 經營成效。',
    },
    {
      title: '用 AI 智慧助攻轉換率',
      desc: '一鍵就能啟用！ARVIX「AI 智慧商品推薦 PLUS」透過 AI 演算法深度學習分析消費偏好，自動呈現個人化推薦商品清單，協助商家提升整體轉單率與客單價！',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #f3e8ff 100%)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
            零售開店大小事，讓 ARVIX 專家來幫你！
          </h1>
          <p className="text-lg mb-10" style={{ color: '#687280' }}>
            專業顧問一對一解答開店疑難雜症！從數位轉型到全通路整合，立即預約免費專人諮詢，開啟你的電商生意。
          </p>
          <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            立即預約免費諮詢
          </a>
        </div>
      </section>

      {/* 你正處於哪個階段 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>你正處於哪個階段？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E0E3E8', backgroundColor: '#F8FAFC' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00142D' }}>{s.title}</h3>
                <p style={{ color: '#687280' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全方位零售解決方案 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4" style={{ color: '#00142D' }}>全方位零售解決方案</h2>
          <p className="text-center mb-12" style={{ color: '#687280' }}>
            ARVIX 提供全方位零售解決方案，橫跨電商與實體通路，不管是從實體店做數位轉型還是網店拓展線下新商機，全面支援你所有需求。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="text-base font-bold mb-3" style={{ color: '#00142D' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 補助資源 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>
            補助、資源一次到位！ARVIX 祭出總價值超過 20 萬補貼
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: '新簽約用戶最高可享運費補助金', sub: '5 折優惠再送 SSL 網站資安加密 (價值 NT$3000)' },
              { title: '現在起購買開店方案最高享', sub: '價值超過 NT$ 85,000 再送破萬價值的產業數據報告' },
              { title: '專屬電商課程超過 40 個精選主題', sub: '限量名額顧問陪跑計劃享' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl text-left" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">商家好評推薦<br />全球超過 60 萬品牌已使用 ARVIX</h2>
          <p className="text-white/80 mb-8">與 ARVIX 專業顧問進行一對一免費電話諮詢！</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即預約免費諮詢
          </a>
        </div>
      </section>
    </main>
  )
}
