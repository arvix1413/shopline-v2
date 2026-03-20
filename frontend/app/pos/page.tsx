import Image from 'next/image';

export default function PosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(225, 225, 255) 0%, rgb(169, 255, 241) 50%, rgb(44, 194, 114) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              開啟你的全通路生意
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              一台 iPad 為你搞定開店大小事！收銀、庫存、會員、報表，全部一手掌握。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="ARVIX POS 全通路" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* 痛點區 */}
      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '網店、實體店資料分散？', desc: '線上線下數據各自為政，無法統一管理，錯失商機。' },
              { title: '人工記帳總是出錯？', desc: '手動記帳耗時費力，容易出錯，影響營運效率。' },
              { title: '生意好壞只憑感覺？', desc: '缺乏數據支撐，無法精準掌握門市營運狀況。' },
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-2xl" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#687280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 - 收銀 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2" style={{ color: '#00142D' }}>一台 iPad<br />為你搞定開店大小事！</h2>
            <h2 className="text-2xl font-black mb-4" style={{ color: '#356DFF' }}>簡單直覺收銀結帳效率 UP</h2>
            <p className="mb-6" style={{ color: '#687280' }}>簡單直覺的收銀介面，讓結帳效率大幅提升，減少顧客等待時間。</p>
            <div className="space-y-3">
              {['串接 POS 刷卡機及多元支付選項', '一鍵套用優惠 / 加入會員', '發票、收據快速開立', '即時掌握實時交易明細'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="ARVIX POS 收銀" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 - 會員 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>輪廓分析<br />會員經營沒難度</h2>
            <p className="mb-6" style={{ color: '#687280' }}>深度會員輪廓分析，讓你精準掌握顧客消費行為，提升回購率。</p>
            <div className="space-y-3">
              {['顧客快速加入會員', '顧客線上、線下消費紀錄', '會員分級與專屬價格', '顧客標籤與備註'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80" alt="ARVIX POS 會員管理" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 - 報表 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>有憑有據<br />分析報表自動化</h2>
            <p className="mb-6" style={{ color: '#687280' }}>自動化報表系統，讓你隨時掌握門市營運狀況，做出正確決策。</p>
            <div className="space-y-3">
              {['即時掌握實時交易明細', '多維度銷售報表', '商品銷售排行', '員工業績統計'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80" alt="ARVIX POS 分析報表" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 4 - 庫存 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>一目瞭然<br />庫存與商品管理有條理</h2>
            <p className="mb-6" style={{ color: '#687280' }}>即時庫存管理，讓你輕鬆掌握商品狀況，避免缺貨或積壓問題。</p>
            <div className="space-y-3">
              {['即時庫存同步', '商品批量管理', '庫存預警通知', '網店與門市庫存整合'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="ARVIX POS 庫存管理" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">ARVIX POS 讓品牌再進化！</h2>
          <p className="text-white mb-8 opacity-80">全球超過 600,000 商家已使用 ARVIX</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
