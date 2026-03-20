import Image from 'next/image';

export default function PosHardwarePage() {
  const hardware = [
    { name: '錢櫃 ( 大 / 小 )', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '適合各種門市規模的錢櫃選擇，安全收納現金' },
    { name: '無線條碼標籤機', img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80', desc: '快速列印商品條碼標籤，製作吊牌更有效率' },
    { name: '無線藍牙掃描槍', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80', desc: '高效掃描商品條碼，加速結帳、盤點、進貨流程' },
    { name: '電子發票印表機', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80', desc: '符合台灣電子發票規範，串連發票硬體輕鬆開立' },
  ];

  const steps = [
    { num: 'STEP 1', desc: '商品抵達後利用 iPad 建檔，搭配標籤機列印商品條碼來製作吊牌' },
    { num: 'STEP 2', desc: '結帳時利用掃描槍掃描條碼，搭配錢箱及電子發票印表機完成收銀' },
    { num: 'STEP 3', desc: '商品盤點、進貨、移庫時，利用掃描槍掃描條碼在 iPad 上完成操作' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(225, 225, 255) 0%, rgb(169, 255, 241) 50%, rgb(44, 194, 114) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              POS 週邊硬體
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              專為服飾、零售業設計的 iPad POS 系統，支援收銀結帳、商品庫存、進銷存及會員管理等功能，搭配直覺式的操作介面讓你輕鬆上手，管理店面超 Easy！
            </p>
            <div className="flex flex-wrap gap-4">
              {['彈性選購', '快速連線', '輕巧大方', '免費諮詢'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: '#00142D' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" alt="POS 週邊硬體" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* 硬體怎麼用 - STEP 1/2/3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#00142D' }}>硬體怎麼用？</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((step) => (
              <div key={step.num} className="p-8 rounded-2xl text-center" style={{ backgroundColor: '#F4F7FC' }}>
                <h3 className="text-lg font-black mb-4" style={{ color: '#356DFF' }}>{step.num}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#354253' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* 硬體產品列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardware.map(h => (
              <div key={h.name} className="rounded-2xl overflow-hidden border border-gray-100">
                <Image src={h.img} alt={h.name} width={400} height={300} className="w-full h-48 object-cover" unoptimized />
                <div className="p-5">
                  <h3 className="font-bold mb-2" style={{ color: '#00142D' }}>{h.name}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">專為零售業設計的 iPad POS 系統，讓你管理店面超 Easy！</h2>
          <p className="text-white opacity-70 mb-8">與 ARVIX 專業顧問進行一對一免費電話諮詢！</p>
          <a href="/consultation" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            免費諮詢
          </a>
        </div>
      </section>
    </main>
  );
}
