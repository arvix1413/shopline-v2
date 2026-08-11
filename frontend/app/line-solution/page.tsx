import Image from 'next/image';

export default function LineSolutionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 250, 198) 0%, rgb(167, 254, 156) 50%, rgb(5, 199, 93) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="mb-4">
              <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE 合作夥伴認證" width={120} height={40} className="h-10 w-auto" unoptimized />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              唯一 LINE 指定技術合作夥伴<br />SHOP 不能沒有 LINE<br />用 LINE 官方帳號賣更多！
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>
              全效整合 LINE 好友，流量＋留量再行銷一氣呵成，360° 導購流量變現就靠它。
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="ARVIX LINE 解決方案" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>全效整合 LINE 好友</h2>
            <p className="mb-6" style={{ color: '#687280' }}>輕鬆圈粉、導購衝單、智慧客服，讓 LINE 成為你最強的銷售渠道。</p>
            <div className="space-y-4">
              {['輕鬆圈粉', '導購衝單', '智慧客服'].map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="LINE 整合功能" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>流量＋留量再行銷<br />一氣呵成</h2>
            <p className="mb-6" style={{ color: '#687280' }}>靠 LINE 直播 +1 讓直播業績飆升，轉戰 LINE 成效型廣告大幅降低轉換成本。</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'LINE 快速登入 & 訂單狀態通知', desc: '顧客一鍵 LINE 登入，訂單狀態即時推播通知。' },
                { title: 'LINE 好友與官網會員綁定', desc: '將 LINE 好友與官網會員帳號綁定，打通數據。' },
                { title: 'LINE PNP 通知型訊息獨家支援', desc: '獨家支援 LINE PNP，精準觸達顧客。' },
                { title: 'LINE 精準廣播', desc: '依據顧客分群，發送精準廣播訊息，提升開封率。' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <div>
                    <span className="font-semibold block text-sm" style={{ color: '#00142D' }}>{item.title}</span>
                    <span className="text-xs" style={{ color: '#687280' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE 再行銷" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>智慧客服 AI<br />搶攻對話商機</h2>
            <p className="mb-6" style={{ color: '#687280' }}>360° 導購流量變現就靠它，AI 智慧客服讓每一次對話都成為銷售機會。</p>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80" alt="LINE AI 智慧客服" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
