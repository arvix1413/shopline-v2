'use client';
import { useState } from 'react';
import Image from 'next/image';

const sections = [
  {
    label: '商店建立',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: '獨有網址 ＆ SSL 安全憑證', desc: '使用自有網域或購買全新品牌網域，全站免費提供 SSL 安全憑證 ( HTTPS )，確保資料傳輸安全。' },
      { name: '內建 SEO 搜尋引擎優化', desc: '從首頁、分類頁、部落格到商品頁，皆有內建 SEO 欄位，自動生成網站地圖，協助品牌爭取流量。' },
      { name: '商品摘要', desc: '將商品特點、限定活動等重點內容優先顯示於商品名稱下方，幫助客人短時間內了解商品。' },
      { name: 'RWD 介面彈性切換', desc: '所有版型皆採 RWD 響應式網頁設計，不管使用裝置大小，都能聰明適應不同螢幕尺寸。' },
      { name: '圖片 ALT 屬性', desc: '可在商品圖、加購品、分類橫圖等編輯圖片 ALT 屬性，提升網店的 SEO 表現。' },
      { name: '一頁商店功能模組', desc: '每間商店支援建立 10 組一頁商店，在單一頁面即可完整呈現商品描述，有效衝高轉換率。' },
      { name: 'SEO 結構化資料', desc: 'ARVIX 商店會自動為商品頁面產出結構化資料格式，讓搜尋引擎更有效率蒐集商店資訊。' },
      { name: '隱藏賣場功能模組', desc: '可於進階分頁加入多個隱藏商品後打造成隱藏賣場，並將分頁連結分享給特定的顧客群。' },
      { name: '部落格', desc: '可於商店後台直接建立部落格文章，自訂文章的標題、內容、圖片及 SEO 等。' },
      { name: '圖片庫管理功能模組', desc: '每間商店擁有自己的專屬圖片庫，最多可上傳 30,000 張圖片，讓上架流程更有效率。' },
    ],
  },
  {
    label: '商品庫存管理',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    features: [
      { name: '商品建立功能模組', desc: '支援各式新增商品情境，可設定商品照片、規格、庫存、分類等資訊，方便後續追蹤商品狀況。' },
      { name: '商品缺貨提醒', desc: '當商品庫存不足時，系統自動提醒，讓你隨時掌握庫存動向，避免缺貨影響銷售。' },
      { name: '多層商品分類及自訂排序', desc: '支援多層商品分類架構，讓顧客輕鬆找到想要的商品，提升購物體驗。' },
      { name: '商品庫存管理', desc: '完整紀錄進貨到出售歷程，精準掌握商品供需狀況，讓庫存管理更輕鬆。' },
      { name: '預約商品上架和銷售時間功能模組', desc: '可預先設定商品上架時間，讓行銷活動更有計劃性，提升銷售效率。' },
      { name: 'AI 智慧商品推薦 PLUS', desc: '透過 AI 演算法分析顧客行為，自動推薦最適合的商品，提升客單價與轉換率。' },
      { name: '加購品功能模組', desc: '在結帳流程中推薦相關商品，有效提升客單價，讓每筆訂單都能創造更多價值。' },
      { name: '贈品功能模組', desc: '設定滿額贈品活動，吸引顧客提高消費金額，有效提升客單價與顧客滿意度。' },
      { name: '隱藏商品功能模組', desc: '可設定隱藏商品，僅對特定顧客群開放，適合網紅合作或會員專屬優惠。' },
      { name: '多規格商品及預購商品', desc: '支援多種商品規格設定，以及預購商品功能，讓商品管理更靈活彈性。' },
      { name: '商品評價獎賞', desc: '鼓勵顧客留下商品評價，提升商品可信度，並透過獎賞機制增加顧客互動。' },
    ],
  },
  {
    label: '金物流串接',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80',
    features: [
      { name: 'ARVIX Payments', desc: '通過 PCI-DSS 安全認證，提供信用卡刷卡 / 分期、ATM 轉帳、無卡分期及行動支付等付款方式。' },
      { name: '第三方金流串接', desc: '支援 LINE Pay、街口支付、PayPal 等多種第三方金流平台串接，滿足不同顧客的付款需求。' },
      { name: '超商取貨付款', desc: '提供 7-11、全家便利商店超商取貨付款服務，貼近台灣在地消費者習慣。' },
      { name: '多元物流整合', desc: '整合黑貓宅急便、7-11、全家等主流物流商，讓出貨流程更順暢高效。' },
    ],
  },
  {
    label: '商店設計',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    features: [
      { name: 'SHOP Builder 頁面編輯器', desc: '透過拖曳方式就能添加文字、商品等元件來編排頁面，不會程式語法也能做出精美頁面。' },
      { name: '產業推薦版型', desc: '提供 53 款由專業設計師設計的網站主題，隨選隨用，也可依據產業選擇合適的模板。' },
      { name: 'Layout Engine', desc: '可額外開啟 HTML / CSS / Javascript 等前端語言的客製化權限，讓商店設計更符合需求。' },
      { name: '15+ 互動型元件', desc: '多達 15 種以上的互動型元件，透過拖拉、排列就能建立精美頁面，支援響應式設計。' },
    ],
  },
  {
    label: '訂單管理',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: '色塊化區分訂單類別', desc: '透過色塊化方式直覺區分不同訂單狀態，讓訂單管理更清晰高效。' },
      { name: '未完成購物車結帳提醒', desc: '自動提醒未完成結帳的顧客，有效降低購物車棄單率，提升轉換率。' },
      { name: '拆單功能', desc: '支援將一筆訂單拆分為多筆出貨，靈活應對不同的出貨情境。' },
      { name: '彈性匯出訂單報表', desc: '可依需求匯出訂單報表，方便進行財務對帳和業績分析。' },
      { name: '後台代客下單', desc: '商家可在後台代替顧客建立訂單，提升服務彈性和顧客滿意度。' },
      { name: '訂單退貨管理', desc: '完整的退貨管理流程，讓售後服務更順暢，提升顧客信任度。' },
    ],
  },
  {
    label: '顧客管理',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    features: [
      { name: '顧客管理系統', desc: '完整記錄顧客資料與消費歷程，讓你深入了解每位顧客的需求與偏好。' },
      { name: '會員分級制度', desc: '設定多層會員等級，提供不同等級的專屬優惠，有效培養忠實顧客。' },
      { name: '顧客標籤與備註', desc: '為顧客添加標籤和備註，方便進行精準分眾行銷和個人化服務。' },
      { name: 'RFIM 分眾行銷', desc: '透過獨家 RFIM 價值模型，智慧演算出 9 種顧客分群，精準鎖定目標受眾。' },
    ],
  },
  {
    label: '優惠活動',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80',
    features: [
      { name: '折扣碼管理', desc: '建立多種折扣碼活動，吸引新客下單，提升整體銷售業績。' },
      { name: '滿額優惠', desc: '設定滿額折扣或贈品活動，有效提升客單價，讓每筆訂單都能創造更多價值。' },
      { name: '限時特賣', desc: '設定限時特賣活動，製造緊迫感，有效催化顧客的購買決策。' },
      { name: '全通路優惠活動', desc: '線上線下同步進行優惠活動，讓全通路顧客都能享受一致的購物體驗。' },
    ],
  },
  {
    label: '行銷推廣',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    features: [
      { name: 'Meta 廣告整合', desc: '串接 Meta 像素，精準追蹤廣告成效，讓每一分廣告預算都能發揮最大效益。' },
      { name: 'Google 廣告整合', desc: '整合 Google Analytics 和廣告追蹤，全面掌握流量來源和轉換數據。' },
      { name: 'LINE 行銷整合', desc: '串接 LINE 官方帳號，透過 LINE 精準廣播觸達目標客群，提升行銷效益。' },
      { name: 'Email 行銷', desc: '透過廣播中心發送 Email 行銷訊息，精準觸達目標顧客，提升回購率。' },
    ],
  },
  {
    label: '數據分析',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: 'Shoplytics 數據分析中心', desc: '提供銷售趨勢、訂單庫存、會員生態、流量組成、行銷成果 5 大面向的圖表化報告。' },
      { name: 'AI 洞察策略', desc: '集結第一方數據並運用 AI 智慧演算，讓電商品牌有效透過數據驅動決策。' },
      { name: '即時營運儀表', desc: '輕鬆隨時掌握商店即時數據概況，包含本日瀏覽量、成交額、訂單數等關鍵指標。' },
      { name: '多通路整合數據', desc: '整合線上到線下的相關銷售數據，提供完整的全通路視角，優化品牌經營策略。' },
    ],
  },
  {
    label: '營運管理',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: '多帳號管理', desc: '支援多個後台帳號，設定不同權限，讓團隊協作更有效率。' },
      { name: '多語言商店', desc: '提供商店前後台多國語系顯示及幣值切換，協助你快速拓展海外市場。' },
      { name: 'Open API', desc: '以市場最成熟的 Open API 能力，讓商店因應需求彈性擴充，支持品牌生意無限拓展。' },
      { name: '擴充功能商店', desc: '豐富的第三方擴充功能，讓你的商店功能更強大，滿足各種業務需求。' },
    ],
  },
  {
    label: '廣告導流',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: 'Meta 廣告代操', desc: '由官方認證的專業投手團隊，協助品牌投遞 Meta 廣告，精準觸達目標客群。' },
      { name: 'Google 廣告代操', desc: '專業 Google 廣告投放服務，從關鍵字廣告到購物廣告，全面提升品牌曝光。' },
      { name: 'LINE 廣告', desc: '透過 LINE 廣告觸達台灣最大社群平台用戶，有效擴大品牌知名度。' },
      { name: '廣告成效追蹤', desc: '完整的廣告成效追蹤系統，讓你清楚掌握每筆廣告預算的投資回報率。' },
    ],
  },
  {
    label: '全通路整合',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: 'Smart OMO 會員導購工具', desc: '讓線下顧客快速註冊會員、店員隨時精準導購，極速提升 OMO 虛實整合業績。' },
      { name: 'POS 系統整合', desc: '線上網店與線下 POS 完全整合，庫存、訂單、會員資料即時同步。' },
      { name: 'Shopper App', desc: '快速推出專屬品牌 App，結合品牌官網及 App 優勢，有效培養品牌黏著度。' },
      { name: '線上買門市取', desc: '支援線上下單、門市取貨的購物模式，提供顧客更靈活的購物體驗。' },
    ],
  },
  {
    label: '跨境電商',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    features: [
      { name: '多國語系', desc: '提供商店前後台多國語系顯示，讓海外顧客也能輕鬆瀏覽購物。' },
      { name: '幣值切換', desc: '支援多種幣值切換，讓海外顧客以熟悉的貨幣進行交易。' },
      { name: '跨境金流服務', desc: '提供 PayPal 等跨境金流服務，讓你輕鬆接收來自全球的訂單。' },
      { name: '稅金設定', desc: '支援不同地區的稅金設定，確保跨境交易的合規性。' },
    ],
  },
];

export default function OnlineStoreFeaturesPage() {
  const [active, setActive] = useState(0);
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 87, 230) 0%, rgb(0, 65, 177) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
            簡單、強悍的網路商店功能
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>ARVIX 協助你輕鬆創建、管理、擴展你的品牌網店，締造更高的營收成長！</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-56 flex-shrink-0">
            <div className="flex flex-col gap-1">
              {sections.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className="text-left px-4 py-3 rounded-lg font-semibold text-sm transition-all"
                  style={{
                    backgroundColor: active === i ? '#5B5FF0' : 'transparent',
                    color: active === i ? '#fff' : '#00142D',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src={sections[active].img} alt={sections[active].label} width={800} height={500} className="w-full h-auto rounded-2xl mb-8" unoptimized />
            <div className="grid md:grid-cols-2 gap-4">
              {sections[active].features.map(f => (
                <div key={f.name} className="p-4 rounded-xl" style={{ backgroundColor: '#F4F7FC' }}>
                  <h3 className="font-bold mb-1 text-sm" style={{ color: '#00142D' }}>{f.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#687280' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
