import Image from 'next/image';

export default function PaymentsPage() {
  const paymentTypes = [
    { name: '信用卡刷卡＆分期', desc: '支援各大信用卡及分期付款' },
    { name: 'ATM 銀行轉帳', desc: '方便快速的銀行轉帳服務' },
    { name: '行動電子支付', desc: '支援 LINE Pay、街口支付等主流行動支付' },
    { name: 'BNPL 無卡分期', desc: '先買後付，提升顧客購買意願' },
    { name: 'POS 實體刷卡機', desc: '門市實體刷卡，線上線下一體整合' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 211, 146) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              快速付、輕鬆收
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              ARVIX Payments 安全支付、提升交易成功率。多元收款服務，線上就能申請，一次開通多種支付方式。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX Payments" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 - 多元收款 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-2" style={{ color: '#00142D' }}>ARVIX Payments 安全支付、提升交易成功率</h2>
            <p className="mb-6" style={{ color: '#687280' }}>一頁完成付款免跳轉，告別訂單流失。穩定流暢！刷卡成功率高於 99%。</p>
            <div className="space-y-3">
              {paymentTypes.map(p => (
                <div key={p.name} className="p-4 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&q=80" alt="ARVIX 多元支付" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 - 簡單啟用 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>簡單啟用<br />線上申請超省力</h2>
            <p className="mb-6" style={{ color: '#687280' }}>線上就能申請，一次開通多種支付方式。快速付款多元行動電子支付。</p>
            <div className="space-y-4">
              {['一頁完成付款免跳轉告別訂單流失', '線上就能申請 一次開通多種支付方式', '穩定流暢！ 刷卡成功率高於 99%'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#356DFF' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="ARVIX 支付申請" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 - AI 風控 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>領先台灣開店平台<br />使用 Cybersource, A Visa solution</h2>
            <p className="mb-6" style={{ color: '#687280' }}>採用業界頂尖的支付安全技術，讓每一筆交易都安全可靠。一站整合門市 POS 刷卡機。</p>
            <div className="p-5 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
              <h4 className="font-bold mb-2" style={{ color: '#00142D' }}>獨家 AI 智慧風控監控系統</h4>
              <p className="text-sm" style={{ color: '#687280' }}>透過 AI 智慧風控系統即時監控每筆交易，自動識別異常行為，有效降低詐騙風險，保障商家與消費者的交易安全。</p>
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=1200&q=80" alt="ARVIX Cybersource" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
