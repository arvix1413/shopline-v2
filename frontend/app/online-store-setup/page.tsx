export default function OnlineStoreSetupPage() {
  const steps = [
    { num: '1', title: '建立你的品牌網站商店', items: ['設定你的商店名稱、品牌標誌 ( Logo )', '在 SHOPLINE 後台申請專屬的獨有網址', '自由選擇網店設計風格與版型架構'] },
    { num: '2', title: '上架你的商品', items: ['新增商品資訊、圖片與價格', '設定商品分類與標籤', '管理庫存與商品變體'] },
    { num: '3', title: '設定金流與物流', items: ['開通 SHOPLINE Payments 金流服務', '串接物流合作夥伴', '設定運費規則'] },
    { num: '4', title: '行銷推廣', items: ['設定 SEO 關鍵字', '建立社群媒體連結', '設定首波促銷活動'] },
    { num: '5', title: '正式開賣！', items: ['預覽並測試商店', '公開商店讓顧客瀏覽', '開始接收訂單'] },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            5 個步驟<br />輕鬆建立你的網路商店
          </h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            想架設品牌電商網站該怎麼開始？SHOPLINE 為你整理開店關鍵 5 大步驟，助你快速上線開賣！
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 p-8 rounded-2xl" style={{ backgroundColor: '#F4F7FC' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shrink-0" style={{ backgroundColor: '#356DFF' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00142D' }}>STEP. {step.num} {step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span style={{ color: '#356DFF' }}>→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">大功告成！ 立即開始你的網路生意</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
