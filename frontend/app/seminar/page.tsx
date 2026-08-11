export default function SeminarPage() {
  const audience = [
    { title: '我有商品，不想只在各大商城平台販售', desc: '建立專屬品牌官網，一手掌握會員、數據及流量' },
    { title: '常開團購，但都用私訊、留言人工統計收單', desc: '團購變現不再只靠 Excel，告訴你快速開團的技巧' },
    { title: '經營 IG、FB 及 LINE 多個社群耗時又難轉換', desc: '拆解社群消費行為，提升互動黏著度外還能導購' },
    { title: '有店面想進軍線上通路，想整合實體及網路門市', desc: '一站就能實現 OMO 全通路，實體 x 網店流量雙向導流' },
  ]

  const topics = [
    { title: '快速建立網路商店', desc: 'ARVIX 提供超過 20 種商店版型，並支援信用卡、電子支付等多元金流服務，完整電商功能一次到位。' },
    { title: '打造高回購會員經營系統', desc: '不只是會賣！更要讓顧客回來！從會員分級、分眾優惠設定到自動化推播，教你打造持續變現的會員經營閉環。' },
    { title: '用數據驅動品牌成長', desc: '視覺化報表、多種專業分析報告到商品潛力預測，透過完整數據洞察優化行銷效益，讓你看懂數據、用對數據！' },
    { title: '多管道流量整合', desc: '社群、官網、團購、門市…等多元流量來源也能輕鬆管控。為你整合多管道流量，讓每一筆流量都能有效變現。' },
    { title: '掌握全通路整合心法', desc: 'ARVIX 透過「系統、通路、數據」三大核心整合，實體 x 網店流量雙向導流，實現 OMO 全通路模式。' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #e8f4ff 0%, #f0e8ff 100%)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
            全通路開店講座
          </h1>
          <p className="text-lg mb-10" style={{ color: '#687280' }}>
            全通路開店講座 — 專業顧問解析零售開店趨勢，一次掌握數位轉型所有秘訣
          </p>
          <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
            立即報名免費講座
          </a>
        </div>
      </section>

      {/* 講座適合誰 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>講座適合誰？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audience.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E0E3E8', backgroundColor: '#F8FAFC' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{a.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 你將學會這些開店關鍵 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>參加講座，你將學會這些開店關鍵</h2>
          <div className="space-y-4">
            {topics.map((t, i) => (
              <div key={t.title} className="bg-white p-6 rounded-2xl flex gap-5 items-start" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <span className="text-2xl font-black flex-shrink-0" style={{ color: '#5B5FF0' }}>0{i + 1}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{t.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 補助資源 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-10" style={{ color: '#00142D' }}>
            補助、資源一次到位！ARVIX 祭出總價值超過 20 萬補貼
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-black text-white mb-4">商家好評推薦<br />全球超過 60 萬品牌使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即報名免費講座
          </a>
        </div>
      </section>
    </main>
  )
}
