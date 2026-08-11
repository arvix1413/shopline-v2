'use client';
import { useState } from 'react';
import Image from 'next/image';

const sections = [
  {
    label: '收銀結帳',
    img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
    features: [
      { name: '完整收銀紀錄', desc: '從顧客拿著商品到櫃檯結帳那刻起，清楚保留所有資訊：代入會員、結帳店員、通路選擇、折扣與付款方式等。' },
      { name: '智慧收銀結帳介面', desc: '視覺化的商品呈現、可調整商品排序、即時查看商品庫存等資訊，簡單又好上手的介面設計。' },
      { name: '實體金流串接', desc: 'ARVIX Payments 提供完整的 OMO 金流服務，線下同步串接 POS 刷卡機、LINE Pay，一站整合全通路金流帳務。' },
      { name: '流暢的購物車', desc: '在顧客挑選時先替顧客將已挑選的商品加入購物車，並先設定會員、優惠等資訊，有效節省結帳時間。' },
      { name: '多樣化折扣與變價設定', desc: '靈活設定商品折扣，從單樣商品折扣、整單優惠折扣都能輕鬆應變，也可設定現金折扣或折數折扣。' },
      { name: '多種付款情境與收款方式', desc: '預定單、未付款留貨、單筆拆不同方式付款及退換貨等付款情境都能聰明應對，系統自動更新庫存、營收。' },
      { name: '發票收據開立', desc: '串連發票硬體，電子發票與收據輕鬆開！可開關發票與收據是否需要列印，應付每一個可能的狀況。' },
      { name: '自訂折扣模板', desc: 'POS 後台內建折扣模板，自訂折扣名稱及 % 數折扣或固定金額折扣，於收銀購物車內快速選擇帶入。' },
    ],
  },
  {
    label: '商品與庫存',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    features: [
      { name: '商品建立 功能模組', desc: '每間商店可上傳 1,000 件商品，支援各式新增商品情境，可設定商品照片、規格、庫存、分類、供應商等資訊。' },
      { name: '商品盤點', desc: '透過掃描槍掃描條碼在 iPad 上完成盤點操作，精準掌握庫存狀況，避免庫存誤差。' },
      { name: '商品進貨', desc: '完整紀錄進貨歷程，搭配掃描槍快速完成進貨作業，讓庫存管理更有效率。' },
      { name: '庫存狀況與異動紀錄', desc: '隨時掌握庫存動向，完整記錄每一筆庫存異動，讓商品管理更透明清晰。' },
      { name: '商品供應商', desc: '管理商品供應商資訊，方便追蹤進貨來源，優化供應鏈管理。' },
      { name: '隱藏設定', desc: '可設定隱藏商品，靈活應對不同的銷售情境，讓商品管理更彈性。' },
    ],
  },
  {
    label: '會員管理',
    img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
    features: [
      { name: '顧客管理系統', desc: '完整記錄顧客資料與消費歷程，讓你深入了解每位顧客的需求與偏好。' },
      { name: '顧客交易紀錄', desc: '查看顧客線上、線下完整消費紀錄，掌握顧客全通路消費輪廓。' },
      { name: '顧客標籤與備註', desc: '為顧客添加標籤和備註，方便進行精準分眾行銷和個人化服務。' },
      { name: '新增顧客與加入會員', desc: '門市過路客掃描 QR code 即可快速成為會員，加入會員一點都不複雜。' },
      { name: '廣播中心 功能模組', desc: '透過廣播中心發送 Email / 簡訊等，精準觸達目標顧客，提升回購率。' },
      { name: '會員分級與專屬價格 功能模組', desc: '設定多層會員等級，提供不同等級的專屬優惠，有效培養忠實顧客。' },
    ],
  },
  {
    label: '商品條碼',
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80',
    features: [
      { name: '自動生成商品條碼', desc: '系統自動為商品生成條碼，搭配標籤機列印商品條碼來製作吊牌，讓商品管理更有效率。' },
      { name: '條碼掃描結帳', desc: '結帳時利用掃描槍掃描條碼，快速完成結帳流程，大幅提升門市結帳效率。' },
      { name: '條碼盤點', desc: '商品盤點時，利用掃描槍掃描條碼在 iPad 上完成操作，讓盤點作業更快速準確。' },
    ],
  },
  {
    label: '多店管理',
    img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
    features: [
      { name: '多店商品與庫存管理', desc: '在後台一站同步管理各通路庫存，讓多店管理更輕鬆省時。' },
      { name: '多店銷售分析', desc: '比較各門市的銷售表現，找出最佳實踐，優化整體營運策略。' },
      { name: '商品調撥', desc: '支援門市間的商品調撥功能，靈活調配庫存，避免缺貨或積壓。' },
    ],
  },
  {
    label: '分析報表',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    features: [
      { name: '全通路銷售分析', desc: '圖表化的報告包含全通路、網店及實體店的銷售分析，讓你一目瞭然營運狀況。' },
      { name: '顧客消費分析', desc: '深度分析顧客消費行為，掌握每位顧客的喜好，讓行銷更精準有效。' },
      { name: '員工打卡、業績分析', desc: '管理員工出勤記錄，分析各員工業績表現，讓人力管理更有效率。' },
      { name: '商品銷售與進銷存分析', desc: '完整分析商品銷售趨勢和進銷存狀況，讓選品補貨決策更有依據。' },
    ],
  },
  {
    label: '其他店務',
    img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
    features: [
      { name: '發票報稅報表', desc: '系統支援發票報稅報表，讓你開店更省力，財務管理更清晰。' },
      { name: '員工管理', desc: '設定不同員工帳號和權限，讓門市管理更有條理，保護商業資訊安全。' },
      { name: '預定單管理', desc: '支援預定單功能，讓顧客可以預先訂購商品，提升顧客服務體驗。' },
    ],
  },
  {
    label: '全通路整合',
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80',
    features: [
      { name: '線上買門市取 APP', desc: '支援線上下單、門市取貨的購物模式，提供顧客更靈活的購物體驗。' },
      { name: 'Smart OMO 推薦商品導購連結', desc: '店員可透過客製化購物車連結，隨時隨地將顧客導至網店消費，導購價值極大化。' },
      { name: '顧客分群搭配廣播中心', desc: '搭配分眾行銷工具，精準觸達不同客群，提升行銷效益。' },
      { name: 'Shopper App 整合', desc: 'Shopper App 與 ARVIX POS 全面整合電子會員條碼、訂單取貨碼及優惠券條碼。' },
    ],
  },
];

export default function PosFeaturesPage() {
  const [active, setActive] = useState(0);
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 87, 230) 0%, rgb(0, 65, 177) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
            門市 iPad POS 系統，銷售營運透明好管理
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>一鍵搞定門市的庫存、進銷存管理，從收銀到收帳，數量、金額不出錯！</p>
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
