import Image from 'next/image';

export default function OnlineStorePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(244, 247, 252) 0%, rgb(122, 210, 254) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              網路開店超簡單<br />立即開始你的網路生意
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              想開網路商店？開店一切所需都在 ARVIX，從商品上架、金物流串接到行銷推廣，一站就能輕鬆搞定。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80" alt="ARVIX 網路開店超簡單" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 - 免寫程式 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>免寫程式也能打造品牌官網</h2>
            <p className="mb-6" style={{ color: '#687280' }}>直覺式介面，讓你輕鬆建立專業品牌網站，不需要任何程式知識。</p>
            <div className="space-y-4">
              {[
                { title: '拖曳方式編輯', desc: '透過拖曳排列方式，輕鬆完成網店頁面建置，無需任何程式語法。' },
                { title: '多樣設計主題', desc: '多款精美版型主題，一鍵套用，快速打造高質感品牌網店。' },
                { title: 'ARVIX Payments', desc: '內建金流服務，支援信用卡、電子支付等多元收款方式，安全便利。' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#356DFF' }}></span>
                  <div>
                    <span className="font-semibold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="透過 ARVIX 後台的拖曳方式就能完成網店建置" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 - 一頁商店 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>實現高轉單率<br />用一頁商店衝刺業績</h2>
            <p className="mb-6" style={{ color: '#687280' }}>3 步驟打造超強導購一頁商店，讓顧客快速完成購買，大幅提升轉換率。</p>
            <div className="space-y-4">
              {[
                { step: 'STEP 1', title: '選擇版型', desc: '從多款一頁商店版型中選擇最適合你商品的設計。' },
                { step: 'STEP 2', title: '編輯內容', desc: '拖曳方式快速編排商品資訊、圖片與購買按鈕。' },
                { step: 'STEP 3', title: '發布上線', desc: '一鍵發布，立即開始接單，輕鬆衝刺業績。' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="text-sm font-black px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF', color: '#fff' }}>{item.step}</span>
                  <div>
                    <span className="font-semibold block" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" alt="ARVIX 一頁商店" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 - 訂單管理 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>事半功倍<br />網店最強訂單管理工具</h2>
            <p className="mb-6" style={{ color: '#687280' }}>色塊化區分訂單類別，讓訂單管理更直覺高效，提升出貨效率。</p>
            <div className="space-y-3">
              {['色塊化區分訂單類別', '未完成購物車結帳提醒', '拆單功能', '彈性匯出訂單報表'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX 訂單管理" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">ARVIX 為你的網路開店做好一切準備！</h2>
          <p className="text-white mb-8 opacity-80">全球超過 600,000 商家已使用 ARVIX</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
