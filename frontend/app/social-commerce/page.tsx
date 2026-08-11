import Image from 'next/image';

const liveFeatures = [
  'ARVIX LIVE 獨立直播間',
  'FB / IG / LINE +1 接單',
  '專屬開播 APP',
  '直播商品庫存與網店同步',
  '抽獎、競標、搶答、留言搶優惠等活動',
  '直播成效統計報告',
];

const botFeatures = [
  'FB & LINE 對話式購物',
  'FB 歡迎訊息及選單設定',
  'FB & LINE 訂單通知機器人',
  '自訂聊天機器人腳本',
  'FB & IG 貼文 +1 銷售',
  '社群快速註冊連結',
];

const msgFeatures = [
  '多管道訊息整合',
  '預存常用訊息',
  '極速購物車',
  '訊息篩選與快速搜尋',
  'FB 貼文快速回覆',
  '自動 / 手動指派回覆對話幫手',
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 mt-6">
      {items.map(item => (
        <div key={item} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }} />
          <span className="font-semibold text-sm" style={{ color: '#00142D' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function SocialCommercePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(255, 225, 249) 0%, rgb(238, 169, 255) 50%, rgb(149, 92, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>
              ARVIX 社群購物系統<br />簡單開賣、快速整單
            </h1>
            <p className="text-lg mb-8" style={{ color: '#3D4A5C' }}>
              全方位的「社群＋電商」購物系統！善用社群的高互動性並透過系統的高導購性，包含直播購物、導購機器人及訊息整合中心，從直播互動、留言導購到後續整單付款等無縫整合購物體驗，讓顧客快速下單，你輕鬆收單！
            </p>
            <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              立即免費試用
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80" alt="ARVIX 社群購物系統" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 1 - 直播購物 */}
      <section className="py-20" style={{ background: 'linear-gradient(rgb(238, 231, 253) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>直播購物就該這樣玩</h2>
            <p style={{ color: '#687280' }}>
              ARVIX LIVE 獨立直播間可同步串連 Facebook、Instagram 及 LINE 直播，跨渠道同步開播。只要輸入關鍵字 +1，系統將自動發送購物連結，讓顧客快速完成結帳。
            </p>
            <FeatureList items={liveFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="ARVIX 直播購物" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 2 - 社群導購機器人 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>邊聊邊買<br />社群導購機器人</h2>
            <p style={{ color: '#687280' }}>
              總是會不小心漏掉顧客訊息？讓聊天機器人來幫你！ARVIX 社群導購機器人可以在對話嵌入商品、購買按鈕及關鍵字，顧客只需點選即可開始購物；同時，也可以設定常用回覆，提升服務效率。
            </p>
            <FeatureList items={botFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80" alt="ARVIX 社群導購機器人" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* Section 3 - 訊息整合中心 */}
      <section className="py-20" style={{ background: 'linear-gradient(rgb(238, 231, 253) 0%, rgb(255, 255, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>暢行無阻<br />訊息整合中心</h2>
            <p style={{ color: '#687280' }}>
              顧客從四面八方來，該如何管理來自各渠道的訊息？訊息整合中心的一站式管理介面，整併網店、訂單、Facebook 和 Instagram 的訊息 / 貼文及 LINE 還有 WhatsApp 的訊息，為商家提供最完整的訊息管理解決方案。
            </p>
            <FeatureList items={msgFeatures} />
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="ARVIX 訊息整合中心" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(130, 124, 255) 0%, rgb(246, 208, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-4" style={{ color: '#00142D' }}>ARVIX 社群購物系統完美結合「社群＋電商」</h2>
          <p className="mb-8" style={{ color: '#3D4A5C' }}>跳脫一般社群平台破碎化的購物流程，讓你的顧客邊看直播就能邊下單，打造全方位的社群購物體驗！</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  );
}
