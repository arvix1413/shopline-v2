export default function OnlineStoreSetupPage() {
  const steps = [
    {
      num: '1',
      title: '建立品牌網站商店',
      items: ['設定商店名稱、品牌標誌 ( Logo )', '在 ARVIX 後台申請專屬的獨有網址'],
    },
    {
      num: '2',
      title: '打造獨特品牌風格',
      items: ['自由選擇版型，挑選符合品牌調性的設計主題', '開始建置頁面，透過拖曳方式完成頁面編排'],
    },
    {
      num: '3',
      title: '設定物流送貨選項',
      items: ['多樣物流選擇，整合黑貓、7-11、全家等主流物流', '設定運費規則，依重量、金額或地區彈性設定'],
    },
    {
      num: '4',
      title: '制定金流收款方式',
      items: ['開通 ARVIX Payments，一次申請多種支付方式', '支援信用卡、ATM 轉帳、行動支付等多元收款'],
    },
    {
      num: '5',
      title: '上傳商品並建立分類',
      items: ['新增商品資訊、圖片與價格，設定商品規格', '建立商品分類，讓顧客輕鬆找到想要的商品'],
    },
  ]

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            5 個步驟<br />輕鬆建立你的網路商店
          </h1>
          <p className="text-lg" style={{ color: '#687280' }}>
            想架設品牌電商網站該怎麼開始？ARVIX 為你整理開店關鍵 5 大步驟，助你快速上線開賣！
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
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
