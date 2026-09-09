'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

const sectionImages = [
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&q=80'
]

type Feature = { name: string; desc: string }
type Section = { label: string; features: Feature[] }
type PosFeaturesCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  cta: string
  sections: Section[]
}

const zhTW: PosFeaturesCopy = {
  title: '門市 iPad POS 系統，銷售營運透明好管理',
  subtitle: '一鍵搞定門市的庫存、進銷存管理，從收銀到收帳，數量、金額不出錯！',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
  sections: [
    {
      label: '收銀結帳',
      features: [
      { name: '完整收銀紀錄', desc: '從顧客拿著商品到櫃檯結帳那刻起，清楚保留所有資訊：代入會員、結帳店員、通路選擇、折扣與付款方式等。' },
      { name: '智慧收銀結帳介面', desc: '視覺化的商品呈現、可調整商品排序、即時查看商品庫存等資訊，簡單又好上手的介面設計。' },
      { name: '實體金流串接', desc: 'ARVIX Payments 可串接門市收款場景，協助線上線下帳務整合。' },
      { name: '流暢的購物車', desc: '在顧客挑選時先替顧客將已挑選的商品加入購物車，並先設定會員、優惠等資訊，有效節省結帳時間。' },
      { name: '多樣化折扣與變價設定', desc: '靈活設定商品折扣，從單樣商品折扣、整單優惠折扣都能輕鬆應變，也可設定現金折扣或折數折扣。' },
      { name: '多種付款情境與收款方式', desc: '預定單、未付款留貨、單筆拆不同方式付款及退換貨等付款情境都能聰明應對，系統自動更新庫存、營收。' },
      { name: '發票收據開立', desc: '串連發票硬體，電子發票與收據輕鬆開！可開關發票與收據是否需要列印，應付每一個可能的狀況。' },
      { name: '自訂折扣模板', desc: 'POS 後台內建折扣模板，自訂折扣名稱及 % 數折扣或固定金額折扣，於收銀購物車內快速選擇帶入。' },
      ],
    },
    {
      label: '商品與庫存',
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
      features: [
      { name: '自動生成商品條碼', desc: '系統自動為商品生成條碼，搭配標籤機列印商品條碼來製作吊牌，讓商品管理更有效率。' },
      { name: '條碼掃描結帳', desc: '結帳時利用掃描槍掃描條碼，快速完成結帳流程，大幅提升門市結帳效率。' },
      { name: '條碼盤點', desc: '商品盤點時，利用掃描槍掃描條碼在 iPad 上完成操作，讓盤點作業更快速準確。' },
      ],
    },
    {
      label: '多店管理',
      features: [
      { name: '多店商品與庫存管理', desc: '在後台一站同步管理各通路庫存，讓多店管理更輕鬆省時。' },
      { name: '多店銷售分析', desc: '比較各門市的銷售表現，找出最佳實踐，優化整體營運策略。' },
      { name: '商品調撥', desc: '支援門市間的商品調撥功能，靈活調配庫存，避免缺貨或積壓。' },
      ],
    },
    {
      label: '分析報表',
      features: [
      { name: '全通路銷售分析', desc: '圖表化的報告包含全通路、網店及實體店的銷售分析，讓你一目瞭然營運狀況。' },
      { name: '顧客消費分析', desc: '深度分析顧客消費行為，掌握每位顧客的喜好，讓行銷更精準有效。' },
      { name: '員工打卡、業績分析', desc: '管理員工出勤記錄，分析各員工業績表現，讓人力管理更有效率。' },
      { name: '商品銷售與進銷存分析', desc: '完整分析商品銷售趨勢和進銷存狀況，讓選品補貨決策更有依據。' },
      ],
    },
    {
      label: '其他店務',
      features: [
      { name: '發票報稅報表', desc: '系統支援發票報稅報表，讓你開店更省力，財務管理更清晰。' },
      { name: '員工管理', desc: '設定不同員工帳號和權限，讓門市管理更有條理，保護商業資訊安全。' },
      { name: '預定單管理', desc: '支援預定單功能，讓顧客可以預先訂購商品，提升顧客服務體驗。' },
      ],
    },
    {
      label: '全通路整合',
      features: [
      { name: '線上買門市取 APP', desc: '支援線上下單、門市取貨的購物模式，提供顧客更靈活的購物體驗。' },
      { name: 'Smart OMO 推薦商品導購連結', desc: '店員可透過客製化購物車連結，隨時隨地將顧客導至網店消費，導購價值極大化。' },
      { name: '顧客分群搭配廣播中心', desc: '搭配分眾行銷工具，精準觸達不同客群，提升行銷效益。' },
      { name: 'Shopper App 整合', desc: 'Shopper App 與 ARVIX POS 全面整合電子會員條碼、訂單取貨碼及優惠券條碼。' },
      ],
    },
  ],
}

const zhCN: PosFeaturesCopy = {
  title: '门店 iPad POS 系统，销售运营透明好管理',
  subtitle: '一键搞定门店的库存、进销存管理，从收银到收账，数量、金额不出错！',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
  sections: [
    {
      label: '收银结账',
      features: [
      { name: '完整收银记录', desc: '从顾客拿着商品到柜台结账那刻起，清楚保留所有信息：代入会员、结账店员、渠道选择、折扣与付款方式等。' },
      { name: '智慧收银结账界面', desc: '视觉化的商品呈现、可调整商品排序、即时查看商品库存等信息，简单又好上手的界面设计。' },
      { name: '实体金流串接', desc: 'ARVIX Payments 可串接门店收款场景，协助线上线下账务整合。' },
      { name: '流畅的购物车', desc: '在顾客挑选时先替顾客将已挑选的商品加入购物车，并先设定会员、优惠等信息，有效节省结账时间。' },
      { name: '多样化折扣与变价设定', desc: '灵活设定商品折扣，从单样商品折扣、整单优惠折扣都能轻松应变，也可设定现金折扣或折数折扣。' },
      { name: '多种付款情境与收款方式', desc: '预定单、未付款留货、单笔拆不同方式付款及退换货等付款情境都能聪明应对，系统自动更新库存、营收。' },
      { name: '发票收据开立', desc: '串接发票硬件，电子发票与收据轻松开！可开关发票与收据是否需要打印，应付每一个可能的状况。' },
      { name: '自定义折扣模板', desc: 'POS 后台内建折扣模板，自定义折扣名称及 % 数折扣或固定金额折扣，于收银购物车内快速选择带入。' },
      ],
    },
    {
      label: '商品与库存',
      features: [
      { name: '商品建立 功能模块', desc: '每间商店可上传 1,000 件商品，支持各式新增商品情境，可设定商品照片、规格、库存、分类、供应商等信息。' },
      { name: '商品盘点', desc: '透过扫描枪扫描条码在 iPad 上完成盘点操作，精准掌握库存状况，避免库存误差。' },
      { name: '商品进货', desc: '完整记录进货历程，搭配扫描枪快速完成进货作业，让库存管理更有效率。' },
      { name: '库存状况与异动记录', desc: '随时掌握库存动向，完整记录每一笔库存异动，让商品管理更透明清晰。' },
      { name: '商品供应商', desc: '管理商品供应商信息，方便追踪进货来源，优化供应链管理。' },
      { name: '隐藏设定', desc: '可设定隐藏商品，灵活应对不同的销售情境，让商品管理更弹性。' },
      ],
    },
    {
      label: '会员管理',
      features: [
      { name: '顾客管理系统', desc: '完整记录顾客资料与消费历程，让你深入了解每位顾客的需求与偏好。' },
      { name: '顾客交易记录', desc: '查看顾客线上、线下完整消费记录，掌握顾客全渠道消费轮廓。' },
      { name: '顾客标签与备注', desc: '为顾客添加标签和备注，方便进行精准分群营销和个人化服务。' },
      { name: '新增顾客与加入会员', desc: '门店过路客扫描 QR code 即可快速成为会员，加入会员一点都不复杂。' },
      { name: '广播中心 功能模块', desc: '透过广播中心发送 Email / 短信等，精准触达目标顾客，提升复购率。' },
      { name: '会员分级与专属价格 功能模块', desc: '设定多层会员等级，提供不同等级的专属优惠，有效培养忠实顾客。' },
      ],
    },
    {
      label: '商品条码',
      features: [
      { name: '自动生成商品条码', desc: '系统自动为商品生成条码，搭配标签机打印商品条码来制作吊牌，让商品管理更有效率。' },
      { name: '条码扫描结账', desc: '结账时利用扫描枪扫描条码，快速完成结账流程，大幅提升门店结账效率。' },
      { name: '条码盘点', desc: '商品盘点时，利用扫描枪扫描条码在 iPad 上完成操作，让盘点作业更快速准确。' },
      ],
    },
    {
      label: '多店管理',
      features: [
      { name: '多店商品与库存管理', desc: '在后台一站同步管理各渠道库存，让多店管理更轻松省时。' },
      { name: '多店销售分析', desc: '比较各门店的销售表现，找出最佳实践，优化整体运营策略。' },
      { name: '商品调拨', desc: '支持门店间的商品调拨功能，灵活调配库存，避免缺货或积压。' },
      ],
    },
    {
      label: '分析报表',
      features: [
      { name: '全渠道销售分析', desc: '图表化的报告包含全渠道、网店及实体店的销售分析，让你一目了然运营状况。' },
      { name: '顾客消费分析', desc: '深度分析顾客消费行为，掌握每位顾客的喜好，让营销更精准有效。' },
      { name: '员工打卡、业绩分析', desc: '管理员工出勤记录，分析各员工业绩表现，让人力管理更有效率。' },
      { name: '商品销售与进销存分析', desc: '完整分析商品销售趋势和进销存状况，让选品补货决策更有依据。' },
      ],
    },
    {
      label: '其他店务',
      features: [
      { name: '发票报税报表', desc: '系统支持发票报税报表，让你开店更省力，财务管理更清晰。' },
      { name: '员工管理', desc: '设定不同员工账号和权限，让门店管理更有条理，保护商业信息安全。' },
      { name: '预定单管理', desc: '支持预定单功能，让顾客可以预先订购商品，提升顾客服务体验。' },
      ],
    },
    {
      label: '全渠道整合',
      features: [
      { name: '线上买门店取 APP', desc: '支持线上下单、门店取货的购物模式，提供顾客更灵活的购物体验。' },
      { name: 'Smart OMO 推荐商品导购链接', desc: '店员可透过定制化购物车链接，随时随地将顾客导至网店消费，导购价值极大化。' },
      { name: '顾客分群搭配广播中心', desc: '搭配分群营销工具，精准触达不同客群，提升营销效益。' },
      { name: 'Shopper App 整合', desc: 'Shopper App 与 ARVIX POS 全面整合电子会员条码、订单取货码及优惠券条码。' },
      ],
    },
  ],
}

const en: PosFeaturesCopy = {
  title: 'In-store iPad POS — clear sales ops',
  subtitle: 'Inventory, purchasing, and checkout in one flow — quantities and amounts stay accurate.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
  sections: [
    {
      label: 'Checkout',
      features: [
      { name: 'Complete checkout logs', desc: 'Capture member, cashier, channel, discounts, and payment from the moment of sale.' },
      { name: 'Smart checkout UI', desc: 'Visual products, sortable lists, and live stock — simple to learn.' },
      { name: 'In-store payments', desc: 'ARVIX Payments helps unify online and in-store payment operations.' },
      { name: 'Smooth cart flow', desc: 'Preload cart items, membership, and offers while shoppers browse to cut wait time.' },
      { name: 'Flexible discounts', desc: 'Item or order discounts, cash-off or percent-off templates.' },
      { name: 'Multiple payment scenarios', desc: 'Deposits, hold-unpaid, split tender, and returns with auto stock/revenue updates.' },
      { name: 'Invoices & receipts', desc: 'Connect invoice hardware; toggle print for invoices and receipts.' },
      { name: 'Discount templates', desc: 'Named % or fixed discounts ready to apply from the POS cart.' },
      ],
    },
    {
      label: 'Products & inventory',
      features: [
      { name: 'Product creation', desc: 'Upload up to 1,000 products with photos, variants, stock, categories, and suppliers.' },
      { name: 'Stocktakes', desc: 'Scan barcodes on iPad for accurate counts.' },
      { name: 'Receiving', desc: 'Log receiving history with scanner-assisted workflows.' },
      { name: 'Stock & movement logs', desc: 'Track every inventory change with full transparency.' },
      { name: 'Suppliers', desc: 'Manage supplier data for cleaner purchasing.' },
      { name: 'Hidden products', desc: 'Hide SKUs when sales scenarios need flexibility.' },
      ],
    },
    {
      label: 'Membership',
      features: [
      { name: 'CRM', desc: 'Full profiles and purchase history.' },
      { name: 'Transaction history', desc: 'Online + offline spend for a complete profile.' },
      { name: 'Tags & notes', desc: 'Annotate customers for precise outreach.' },
      { name: 'Quick enroll', desc: 'Walk-ins scan a QR code to join membership.' },
      { name: 'Broadcast center', desc: 'Email/SMS campaigns that drive repurchase.' },
      { name: 'Tiers & member pricing', desc: 'Tiered benefits and exclusive prices.' },
      ],
    },
    {
      label: 'Barcodes',
      features: [
      { name: 'Auto barcodes', desc: 'Generate barcodes and print hang tags with a labeler.' },
      { name: 'Scan to checkout', desc: 'Scanner-assisted checkout for faster lines.' },
      { name: 'Scan stocktakes', desc: 'Barcode stocktakes on iPad for speed and accuracy.' },
      ],
    },
    {
      label: 'Multi-store',
      features: [
      { name: 'Multi-store inventory', desc: 'Sync channel stock from one admin.' },
      { name: 'Multi-store sales analytics', desc: 'Compare stores and copy what works.' },
      { name: 'Transfers', desc: 'Move stock between stores to avoid stockouts or overstock.' },
      ],
    },
    {
      label: 'Reports',
      features: [
      { name: 'Omnichannel sales', desc: 'Chart online, offline, and all-channel performance.' },
      { name: 'Customer spend analysis', desc: 'Behavior insights for sharper marketing.' },
      { name: 'Attendance & staff performance', desc: 'Track shifts and individual results.' },
      { name: 'Merchandising & inventory', desc: 'Sales trends and purchasing signals for better replenishment.' },
      ],
    },
    {
      label: 'Store ops',
      features: [
      { name: 'Tax & invoice reports', desc: 'Simplify store finance and compliance.' },
      { name: 'Staff management', desc: 'Accounts and permissions that protect ops data.' },
      { name: 'Pre-orders', desc: 'Let customers reserve products ahead of time.' },
      ],
    },
    {
      label: 'Omnichannel',
      features: [
      { name: 'BOPIS app', desc: 'Buy online, pick up in store.' },
      { name: 'Smart OMO shopping links', desc: 'Staff share custom carts anytime to maximize guided sales.' },
      { name: 'Segments + broadcast', desc: 'Target the right cohorts with broadcast tools.' },
      { name: 'Shopper App integration', desc: 'Member barcodes, pickup codes, and coupon barcodes with POS.' },
      ],
    },
  ],
}

const ko: PosFeaturesCopy = {
  title: '매장 iPad POS — 판매 운영을 투명하게',
  subtitle: '재고·매입·결제를 한 흐름으로 — 수량과 금액이 정확하게 유지됩니다.',
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
  cta: '무료 체험 시작',
  sections: [
    {
      label: '결제',
      features: [
      { name: '완전한 결제 기록', desc: '판매 순간부터 회원, 캐셔, 채널, 할인, 결제 수단을 기록합니다.' },
      { name: '스마트 결제 UI', desc: '시각적 상품, 정렬 가능한 목록, 실시간 재고 — 배우기 쉽습니다.' },
      { name: '매장 결제', desc: 'ARVIX Payments가 온라인과 매장 결제를 통합하는 데 도움을 줍니다.' },
      { name: '매끄러운 장바구니', desc: '쇼핑 중 장바구니·회원·혜택을 미리 넣어 대기 시간을 줄입니다.' },
      { name: '유연한 할인', desc: '상품/주문 할인, 금액 또는 비율 할인 템플릿.' },
      { name: '다양한 결제 시나리오', desc: '예약금, 미결제 보류, 분할 결제, 반품 — 재고·매출 자동 반영.' },
      { name: '인보이스 & 영수증', desc: '인보이스 하드웨어 연결; 인쇄 on/off 가능.' },
      { name: '할인 템플릿', desc: '이름이 있는 % 또는 고정 할인을 POS 장바구니에서 바로 적용.' },
      ],
    },
    {
      label: '상품 & 재고',
      features: [
      { name: '상품 생성', desc: '사진, 옵션, 재고, 카테고리, 공급업체와 함께 최대 1,000개 상품 업로드.' },
      { name: '재고 실사', desc: 'iPad에서 바코드를 스캔해 정확한 실사를 진행합니다.' },
      { name: '입고', desc: '스캐너 지원 워크플로로 입고 이력을 기록합니다.' },
      { name: '재고 & 변동 기록', desc: '모든 재고 변동을 투명하게 추적합니다.' },
      { name: '공급업체', desc: '공급업체 데이터를 관리해 구매를 정리합니다.' },
      { name: '숨김 상품', desc: '판매 시나리오에 따라 SKU를 숨길 수 있습니다.' },
      ],
    },
    {
      label: '회원',
      features: [
      { name: 'CRM', desc: '전체 프로필과 구매 이력.' },
      { name: '거래 이력', desc: '온·오프라인 소비로 완전한 프로필을 파악.' },
      { name: '태그 & 메모', desc: '정밀한 아웃리치를 위한 고객 메모.' },
      { name: '빠른 가입', desc: '방문객이 QR 코드를 스캔해 회원 가입.' },
      { name: '브로드캐스트 센터', desc: '재구매를 유도하는 Email/SMS 캠페인.' },
      { name: '등급 & 회원가', desc: '등급별 혜택과 전용 가격.' },
      ],
    },
    {
      label: '바코드',
      features: [
      { name: '자동 바코드', desc: '바코드를 생성하고 라벨러로 행택을 인쇄.' },
      { name: '스캔 결제', desc: '스캐너 지원 결제로 대기열을 단축.' },
      { name: '스캔 실사', desc: 'iPad에서 바코드 실사로 속도와 정확도 향상.' },
      ],
    },
    {
      label: '멀티 스토어',
      features: [
      { name: '멀티 스토어 재고', desc: '하나의 관리자에서 채널 재고를 동기화.' },
      { name: '멀티 스토어 판매 분석', desc: '매장을 비교하고 성공 사례를 복제.' },
      { name: '이관', desc: '매장 간 재고를 이동해 품절·과잉을 방지.' },
      ],
    },
    {
      label: '리포트',
      features: [
      { name: '옴니채널 판매', desc: '온라인·오프라인·전체 채널 성과를 차트로.' },
      { name: '고객 소비 분석', desc: '더 날카로운 마케팅을 위한 행동 인사이트.' },
      { name: '근태 & 직원 성과', desc: '근무와 개인 실적을 추적.' },
      { name: '머천다이징 & 재고', desc: '판매 추세와 구매 신호로 더 나은 보충.' },
      ],
    },
    {
      label: '매장 운영',
      features: [
      { name: '세금 & 인보이스 리포트', desc: '매장 재무와 컴플라이언스를 단순화.' },
      { name: '직원 관리', desc: '운영 데이터를 보호하는 계정과 권한.' },
      { name: '사전 주문', desc: '고객이 미리 상품을 예약할 수 있습니다.' },
      ],
    },
    {
      label: '옴니채널',
      features: [
      { name: 'BOPIS 앱', desc: '온라인 구매, 매장 픽업.' },
      { name: 'Smart OMO 쇼핑 링크', desc: '직원이 맞춤 장바구니를 공유해 가이드 판매를 극대화.' },
      { name: '세그먼트 + 브로드캐스트', desc: '브로드캐스트 도구로 올바른 코호트를 타깃.' },
      { name: 'Shopper App 연동', desc: '회원 바코드, 픽업 코드, 쿠폰 바코드를 POS와 연동.' },
      ],
    },
  ],
}

const ja: PosFeaturesCopy = {
  title: '店舗 iPad POS — 販売オペを可視化',
  subtitle: '在庫・仕入・チェックアウトをひとつの流れに — 数量と金額を正確に保ちます。',
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
  cta: '無料トライアルを開始',
  sections: [
    {
      label: 'チェックアウト',
      features: [
      { name: '完全な会計ログ', desc: '販売時点から会員・キャッシャー・チャネル・割引・支払いを記録。' },
      { name: 'スマート会計 UI', desc: '視覚的な商品、並べ替え可能な一覧、ライブ在庫 — 習得しやすい。' },
      { name: '店舗決済', desc: 'ARVIX Payments がオンラインと店舗の決済オペを統合。' },
      { name: 'スムーズなカート', desc: '買い物中にカート・会員・特典を事前セットして待ち時間を短縮。' },
      { name: '柔軟な割引', desc: '商品／注文割引、定額または％割引テンプレート。' },
      { name: '多様な支払いシナリオ', desc: '予約金、未払い保留、分割支払、返品 — 在庫・売上を自動更新。' },
      { name: '請求書とレシート', desc: '請求ハードウェア接続；印刷のオン／オフ可能。' },
      { name: '割引テンプレート', desc: '名前付き％または定額割引を POS カートからすぐ適用。' },
      ],
    },
    {
      label: '商品と在庫',
      features: [
      { name: '商品作成', desc: '写真・バリエーション・在庫・カテゴリ・仕入先付きで最大 1,000 商品をアップロード。' },
      { name: '棚卸', desc: 'iPad でバーコードをスキャンし正確に棚卸。' },
      { name: '入荷', desc: 'スキャナ対応ワークフローで入荷履歴を記録。' },
      { name: '在庫と移動ログ', desc: 'すべての在庫変更を透明に追跡。' },
      { name: '仕入先', desc: '仕入先データを管理し購買を整理。' },
      { name: '非表示商品', desc: '販売シナリオに応じて SKU を非表示。' },
      ],
    },
    {
      label: '会員',
      features: [
      { name: 'CRM', desc: '完全なプロフィールと購入履歴。' },
      { name: '取引履歴', desc: 'オンライン＋オフラインの支出で全体像を把握。' },
      { name: 'タグとメモ', desc: '精密なアウトリーチのための注釈。' },
      { name: 'かんたん登録', desc: '来店客が QR コードをスキャンして会員登録。' },
      { name: 'ブロードキャストセンター', desc: 'リピート購入を促す Email/SMS キャンペーン。' },
      { name: '等級と会員価格', desc: '等級別特典と専用価格。' },
      ],
    },
    {
      label: 'バーコード',
      features: [
      { name: '自動バーコード', desc: 'バーコードを生成しラベル機で値札を印刷。' },
      { name: 'スキャン会計', desc: 'スキャナ対応会計で待ち行列を短縮。' },
      { name: 'スキャン棚卸', desc: 'iPad のバーコード棚卸で速く正確に。' },
      ],
    },
    {
      label: 'マルチストア',
      features: [
      { name: 'マルチストア在庫', desc: 'ひとつの管理画面でチャネル在庫を同期。' },
      { name: 'マルチストア売上分析', desc: '店舗を比較し成功事例を横展開。' },
      { name: '振替', desc: '店舗間で在庫を移し欠品や過剰を防ぐ。' },
      ],
    },
    {
      label: 'レポート',
      features: [
      { name: 'オムニチャネル売上', desc: 'オンライン・オフライン・全チャネル実績をチャート化。' },
      { name: '顧客支出分析', desc: 'より鋭いマーケティングのための行動インサイト。' },
      { name: '出勤とスタッフ実績', desc: 'シフトと個人成果を追跡。' },
      { name: 'マーチャンダイジングと在庫', desc: '売上トレンドと購買シグナルで補充を最適化。' },
      ],
    },
    {
      label: '店舗オペ',
      features: [
      { name: '税務・請求レポート', desc: '店舗の財務とコンプライアンスを簡素化。' },
      { name: 'スタッフ管理', desc: 'オペデータを守るアカウントと権限。' },
      { name: '予約注文', desc: '顧客が事前に商品を予約可能。' },
      ],
    },
    {
      label: 'オムニチャネル',
      features: [
      { name: 'BOPIS アプリ', desc: 'オンライン購入、店舗受け取り。' },
      { name: 'Smart OMO ショッピングリンク', desc: 'スタッフがカスタムカートを共有しガイド販売を最大化。' },
      { name: 'セグメント＋ブロードキャスト', desc: 'ブロードキャストツールで適切なコホートをターゲット。' },
      { name: 'Shopper App 連携', desc: '会員バーコード、受取コード、クーポンバーコードを POS と統合。' },
      ],
    },
  ],
}

const vi: PosFeaturesCopy = {
  title: 'POS iPad tại cửa hàng — vận hành bán hàng rõ ràng',
  subtitle: 'Tồn kho, nhập hàng và thanh toán trong một luồng — số lượng và số tiền luôn chính xác.',
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
  cta: 'Bắt đầu dùng thử miễn phí',
  sections: [
    {
      label: 'Thanh toán',
      features: [
      { name: 'Nhật ký thanh toán đầy đủ', desc: 'Ghi lại hội viên, thu ngân, kênh, giảm giá và phương thức thanh toán ngay khi bán.' },
      { name: 'UI thanh toán thông minh', desc: 'Sản phẩm trực quan, danh sách sắp xếp được và tồn kho trực tiếp — dễ học.' },
      { name: 'Thanh toán tại cửa hàng', desc: 'ARVIX Payments giúp hợp nhất vận hành thanh toán online và tại cửa hàng.' },
      { name: 'Luồng giỏ hàng mượt', desc: 'Nạp sẵn giỏ, hội viên và ưu đãi khi khách duyệt để giảm thời gian chờ.' },
      { name: 'Giảm giá linh hoạt', desc: 'Giảm theo sản phẩm hoặc đơn, mẫu giảm tiền hoặc phần trăm.' },
      { name: 'Nhiều kịch bản thanh toán', desc: 'Đặt cọc, giữ hàng chưa thanh toán, tách tender và đổi trả với cập nhật tồn/doanh thu tự động.' },
      { name: 'Hóa đơn & biên lai', desc: 'Kết nối phần cứng hóa đơn; bật/tắt in hóa đơn và biên lai.' },
      { name: 'Mẫu giảm giá', desc: 'Giảm % hoặc cố định có tên sẵn để áp từ giỏ POS.' },
      ],
    },
    {
      label: 'Sản phẩm & tồn kho',
      features: [
      { name: 'Tạo sản phẩm', desc: 'Tải tối đa 1.000 sản phẩm với ảnh, biến thể, tồn, danh mục và nhà cung cấp.' },
      { name: 'Kiểm kê', desc: 'Quét mã vạch trên iPad để đếm chính xác.' },
      { name: 'Nhập hàng', desc: 'Ghi lịch sử nhập hàng với quy trình hỗ trợ máy quét.' },
      { name: 'Tồn & nhật ký biến động', desc: 'Theo dõi mọi thay đổi tồn kho minh bạch.' },
      { name: 'Nhà cung cấp', desc: 'Quản lý dữ liệu nhà cung cấp để mua hàng gọn hơn.' },
      { name: 'Sản phẩm ẩn', desc: 'Ẩn SKU khi kịch bản bán cần linh hoạt.' },
      ],
    },
    {
      label: 'Hội viên',
      features: [
      { name: 'CRM', desc: 'Hồ sơ đầy đủ và lịch sử mua.' },
      { name: 'Lịch sử giao dịch', desc: 'Chi tiêu online + offline cho hồ sơ hoàn chỉnh.' },
      { name: 'Thẻ & ghi chú', desc: 'Gắn thẻ khách để tiếp cận chính xác.' },
      { name: 'Đăng ký nhanh', desc: 'Khách vãng lai quét QR để tham gia hội viên.' },
      { name: 'Trung tâm phát sóng', desc: 'Chiến dịch Email/SMS thúc đẩy mua lại.' },
      { name: 'Hạng & giá hội viên', desc: 'Ưu đãi theo hạng và giá độc quyền.' },
      ],
    },
    {
      label: 'Mã vạch',
      features: [
      { name: 'Mã vạch tự động', desc: 'Tạo mã vạch và in thẻ treo bằng máy in nhãn.' },
      { name: 'Quét để thanh toán', desc: 'Thanh toán hỗ trợ máy quét để hàng đợi nhanh hơn.' },
      { name: 'Kiểm kê bằng quét', desc: 'Kiểm kê mã vạch trên iPad cho tốc độ và độ chính xác.' },
      ],
    },
    {
      label: 'Đa cửa hàng',
      features: [
      { name: 'Tồn kho đa cửa hàng', desc: 'Đồng bộ tồn kênh từ một admin.' },
      { name: 'Phân tích bán đa cửa hàng', desc: 'So sánh cửa hàng và nhân rộng những gì hiệu quả.' },
      { name: 'Chuyển kho', desc: 'Chuyển hàng giữa cửa hàng để tránh hết hàng hoặc thừa.' },
      ],
    },
    {
      label: 'Báo cáo',
      features: [
      { name: 'Doanh số omnichannel', desc: 'Biểu đồ hiệu suất online, offline và mọi kênh.' },
      { name: 'Phân tích chi tiêu khách', desc: 'Insight hành vi cho marketing sắc hơn.' },
      { name: 'Chấm công & hiệu suất nhân viên', desc: 'Theo dõi ca và kết quả cá nhân.' },
      { name: 'Merchandising & tồn kho', desc: 'Xu hướng bán và tín hiệu mua để bổ sung tốt hơn.' },
      ],
    },
    {
      label: 'Vận hành cửa hàng',
      features: [
      { name: 'Báo cáo thuế & hóa đơn', desc: 'Đơn giản hóa tài chính và tuân thủ cửa hàng.' },
      { name: 'Quản lý nhân viên', desc: 'Tài khoản và quyền bảo vệ dữ liệu vận hành.' },
      { name: 'Đặt trước', desc: 'Cho khách đặt sản phẩm trước.' },
      ],
    },
    {
      label: 'Omnichannel',
      features: [
      { name: 'App BOPIS', desc: 'Mua online, nhận tại cửa hàng.' },
      { name: 'Link mua Smart OMO', desc: 'Nhân viên chia sẻ giỏ tùy chỉnh mọi lúc để tối đa hóa bán có hướng dẫn.' },
      { name: 'Phân khúc + phát sóng', desc: 'Nhắm đúng cohort bằng công cụ phát sóng.' },
      { name: 'Tích hợp Shopper App', desc: 'Mã vạch hội viên, mã nhận hàng và mã phiếu giảm giá với POS.' },
      ],
    },
  ],
}

const es: PosFeaturesCopy = {
  title: 'POS iPad en tienda — operaciones de venta claras',
  subtitle: 'Inventario, compras y checkout en un solo flujo — cantidades e importes se mantienen precisos.',
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
  cta: 'Empieza la prueba gratis',
  sections: [
    {
      label: 'Checkout',
      features: [
      { name: 'Registros de checkout completos', desc: 'Captura miembro, cajero, canal, descuentos y pago desde el momento de la venta.' },
      { name: 'UI de checkout inteligente', desc: 'Productos visuales, listas ordenables y stock en vivo — fácil de aprender.' },
      { name: 'Pagos en tienda', desc: 'ARVIX Payments ayuda a unificar operaciones de pago online y en tienda.' },
      { name: 'Flujo de carrito fluido', desc: 'Precarga ítems, membresía y ofertas mientras el cliente navega para reducir espera.' },
      { name: 'Descuentos flexibles', desc: 'Descuentos por ítem u orden, plantillas de importe o porcentaje.' },
      { name: 'Múltiples escenarios de pago', desc: 'Depósitos, retención sin pago, split tender y devoluciones con actualización automática de stock/ingresos.' },
      { name: 'Facturas y recibos', desc: 'Conecta hardware de facturación; activa o desactiva la impresión.' },
      { name: 'Plantillas de descuento', desc: 'Descuentos % o fijos con nombre listos para aplicar desde el carrito POS.' },
      ],
    },
    {
      label: 'Productos e inventario',
      features: [
      { name: 'Creación de productos', desc: 'Sube hasta 1.000 productos con fotos, variantes, stock, categorías y proveedores.' },
      { name: 'Inventarios físicos', desc: 'Escanea códigos de barras en iPad para conteos precisos.' },
      { name: 'Recepción', desc: 'Registra el historial de recepción con flujos asistidos por escáner.' },
      { name: 'Stock y movimientos', desc: 'Rastrea cada cambio de inventario con total transparencia.' },
      { name: 'Proveedores', desc: 'Gestiona datos de proveedores para compras más limpias.' },
      { name: 'Productos ocultos', desc: 'Oculta SKUs cuando el escenario de venta lo requiere.' },
      ],
    },
    {
      label: 'Membresía',
      features: [
      { name: 'CRM', desc: 'Perfiles completos e historial de compras.' },
      { name: 'Historial de transacciones', desc: 'Gasto online + offline para un perfil completo.' },
      { name: 'Etiquetas y notas', desc: 'Anota clientes para outreach preciso.' },
      { name: 'Alta rápida', desc: 'Visitantes escanean un QR para unirse a la membresía.' },
      { name: 'Centro de difusión', desc: 'Campañas Email/SMS que impulsan la recompra.' },
      { name: 'Niveles y precios de miembro', desc: 'Beneficios por nivel y precios exclusivos.' },
      ],
    },
    {
      label: 'Códigos de barras',
      features: [
      { name: 'Códigos automáticos', desc: 'Genera códigos e imprime etiquetas con una etiquetadora.' },
      { name: 'Escanear para pagar', desc: 'Checkout asistido por escáner para filas más rápidas.' },
      { name: 'Inventario por escaneo', desc: 'Inventarios con código de barras en iPad para velocidad y precisión.' },
      ],
    },
    {
      label: 'Multi-tienda',
      features: [
      { name: 'Inventario multi-tienda', desc: 'Sincroniza stock de canales desde un solo admin.' },
      { name: 'Analítica de ventas multi-tienda', desc: 'Compara tiendas y replica lo que funciona.' },
      { name: 'Transferencias', desc: 'Mueve stock entre tiendas para evitar quiebres o exceso.' },
      ],
    },
    {
      label: 'Informes',
      features: [
      { name: 'Ventas omnicanal', desc: 'Grafica el rendimiento online, offline y de todos los canales.' },
      { name: 'Análisis de gasto del cliente', desc: 'Insights de comportamiento para un marketing más preciso.' },
      { name: 'Asistencia y rendimiento del personal', desc: 'Sigue turnos y resultados individuales.' },
      { name: 'Merchandising e inventario', desc: 'Tendencias de venta y señales de compra para mejor reposición.' },
      ],
    },
    {
      label: 'Operaciones de tienda',
      features: [
      { name: 'Informes fiscales y de facturas', desc: 'Simplifica finanzas y cumplimiento de la tienda.' },
      { name: 'Gestión de personal', desc: 'Cuentas y permisos que protegen datos operativos.' },
      { name: 'Pedidos anticipados', desc: 'Permite a los clientes reservar productos con antelación.' },
      ],
    },
    {
      label: 'Omnicanal',
      features: [
      { name: 'App BOPIS', desc: 'Compra online, recoge en tienda.' },
      { name: 'Enlaces de compra Smart OMO', desc: 'El personal comparte carritos personalizados para maximizar ventas guiadas.' },
      { name: 'Segmentos + difusión', desc: 'Apunta a las cohortes correctas con herramientas de difusión.' },
      { name: 'Integración Shopper App', desc: 'Códigos de miembro, recogida y cupones con POS.' },
      ],
    },
  ],
}

const pt: PosFeaturesCopy = {
  title: 'POS iPad na loja — operações de venda claras',
  subtitle: 'Estoque, compras e checkout em um fluxo — quantidades e valores permanecem precisos.',
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
  cta: 'Começar teste grátis',
  sections: [
    {
      label: 'Checkout',
      features: [
      { name: 'Logs de checkout completos', desc: 'Capture membro, caixa, canal, descontos e pagamento no momento da venda.' },
      { name: 'UI de checkout inteligente', desc: 'Produtos visuais, listas ordenáveis e estoque ao vivo — fácil de aprender.' },
      { name: 'Pagamentos na loja', desc: 'ARVIX Payments ajuda a unificar operações de pagamento online e na loja.' },
      { name: 'Fluxo de carrinho fluido', desc: 'Pré-carregue itens, associação e ofertas enquanto o cliente navega para reduzir espera.' },
      { name: 'Descontos flexíveis', desc: 'Descontos por item ou pedido, templates de valor ou percentual.' },
      { name: 'Vários cenários de pagamento', desc: 'Depósitos, retenção sem pagamento, split tender e devoluções com atualização automática de estoque/receita.' },
      { name: 'Faturas e recibos', desc: 'Conecte hardware de fatura; ative ou desative a impressão.' },
      { name: 'Templates de desconto', desc: 'Descontos % ou fixos com nome prontos para aplicar no carrinho POS.' },
      ],
    },
    {
      label: 'Produtos e estoque',
      features: [
      { name: 'Criação de produtos', desc: 'Envie até 1.000 produtos com fotos, variantes, estoque, categorias e fornecedores.' },
      { name: 'Inventários', desc: 'Escaneie códigos de barras no iPad para contagens precisas.' },
      { name: 'Recebimento', desc: 'Registre o histórico de recebimento com fluxos assistidos por scanner.' },
      { name: 'Estoque e movimentos', desc: 'Acompanhe cada mudança de inventário com total transparência.' },
      { name: 'Fornecedores', desc: 'Gerencie dados de fornecedores para compras mais organizadas.' },
      { name: 'Produtos ocultos', desc: 'Oculte SKUs quando o cenário de venda precisar de flexibilidade.' },
      ],
    },
    {
      label: 'Associação',
      features: [
      { name: 'CRM', desc: 'Perfis completos e histórico de compras.' },
      { name: 'Histórico de transações', desc: 'Gasto online + offline para um perfil completo.' },
      { name: 'Tags e notas', desc: 'Anote clientes para outreach preciso.' },
      { name: 'Cadastro rápido', desc: 'Visitantes escaneiam um QR para entrar na associação.' },
      { name: 'Central de broadcast', desc: 'Campanhas Email/SMS que impulsionam a recompra.' },
      { name: 'Níveis e preços de membro', desc: 'Benefícios por nível e preços exclusivos.' },
      ],
    },
    {
      label: 'Códigos de barras',
      features: [
      { name: 'Códigos automáticos', desc: 'Gere códigos e imprima etiquetas com uma etiquetadora.' },
      { name: 'Escanear para pagar', desc: 'Checkout assistido por scanner para filas mais rápidas.' },
      { name: 'Inventário por escaneamento', desc: 'Inventários com código de barras no iPad para velocidade e precisão.' },
      ],
    },
    {
      label: 'Multi-loja',
      features: [
      { name: 'Estoque multi-loja', desc: 'Sincronize estoque de canais em um único admin.' },
      { name: 'Analytics de vendas multi-loja', desc: 'Compare lojas e replique o que funciona.' },
      { name: 'Transferências', desc: 'Mova estoque entre lojas para evitar ruptura ou excesso.' },
      ],
    },
    {
      label: 'Relatórios',
      features: [
      { name: 'Vendas omnichannel', desc: 'Grafique desempenho online, offline e de todos os canais.' },
      { name: 'Análise de gasto do cliente', desc: 'Insights de comportamento para marketing mais preciso.' },
      { name: 'Frequência e desempenho da equipe', desc: 'Acompanhe turnos e resultados individuais.' },
      { name: 'Merchandising e estoque', desc: 'Tendências de venda e sinais de compra para melhor reposição.' },
      ],
    },
    {
      label: 'Operações da loja',
      features: [
      { name: 'Relatórios fiscais e de faturas', desc: 'Simplifique finanças e conformidade da loja.' },
      { name: 'Gestão de equipe', desc: 'Contas e permissões que protegem dados operacionais.' },
      { name: 'Pré-encomendas', desc: 'Permita que clientes reservem produtos antecipadamente.' },
      ],
    },
    {
      label: 'Omnichannel',
      features: [
      { name: 'App BOPIS', desc: 'Compre online, retire na loja.' },
      { name: 'Links de compra Smart OMO', desc: 'A equipe compartilha carrinhos personalizados para maximizar vendas guiadas.' },
      { name: 'Segmentos + broadcast', desc: 'Direcione as cohortes certas com ferramentas de broadcast.' },
      { name: 'Integração Shopper App', desc: 'Códigos de membro, retirada e cupons com o POS.' },
      ],
    },
  ],
}

const de: PosFeaturesCopy = {
  title: 'Filial-iPad-POS — klare Verkaufsabläufe',
  subtitle: 'Bestand, Einkauf und Checkout in einem Flow — Mengen und Beträge bleiben korrekt.',
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
  cta: 'Kostenlos testen',
  sections: [
    {
      label: 'Checkout',
      features: [
      { name: 'Vollständige Checkout-Logs', desc: 'Erfassen Sie Mitglied, Kassierer, Kanal, Rabatte und Zahlung ab dem Verkaufsmoment.' },
      { name: 'Smartes Checkout-UI', desc: 'Visuelle Produkte, sortierbare Listen und Live-Bestand — leicht zu lernen.' },
      { name: 'Filialzahlungen', desc: 'ARVIX Payments hilft, Online- und Filialzahlungen zu vereinen.' },
      { name: 'Flüssiger Warenkorb', desc: 'Warenkorb, Mitgliedschaft und Angebote vorab laden, um Wartezeit zu verkürzen.' },
      { name: 'Flexible Rabatte', desc: 'Artikel- oder Bestellrabatte, Betrags- oder Prozent-Vorlagen.' },
      { name: 'Mehrere Zahlungsszenarien', desc: 'Anzahlungen, unbezahlte Rücklagen, Split Tender und Retouren mit Auto-Update von Bestand/Umsatz.' },
      { name: 'Rechnungen & Belege', desc: 'Rechnungshardware anbinden; Druck für Rechnungen und Belege umschalten.' },
      { name: 'Rabattvorlagen', desc: 'Benannte %- oder Festbetragsrabatte direkt aus dem POS-Warenkorb.' },
      ],
    },
    {
      label: 'Produkte & Bestand',
      features: [
      { name: 'Produktanlage', desc: 'Bis zu 1.000 Produkte mit Fotos, Varianten, Bestand, Kategorien und Lieferanten hochladen.' },
      { name: 'Inventuren', desc: 'Barcodes auf dem iPad scannen für genaue Zählungen.' },
      { name: 'Wareneingang', desc: 'Eingangshistorie mit scannerunterstützten Workflows erfassen.' },
      { name: 'Bestand & Bewegungsprotokolle', desc: 'Jede Bestandsänderung transparent nachverfolgen.' },
      { name: 'Lieferanten', desc: 'Lieferantendaten für saubereren Einkauf verwalten.' },
      { name: 'Versteckte Produkte', desc: 'SKUs ausblenden, wenn Verkaufsszenarien Flexibilität brauchen.' },
      ],
    },
    {
      label: 'Mitgliedschaft',
      features: [
      { name: 'CRM', desc: 'Vollständige Profile und Kaufhistorie.' },
      { name: 'Transaktionshistorie', desc: 'Online- + Offline-Ausgaben für ein vollständiges Profil.' },
      { name: 'Tags & Notizen', desc: 'Kunden annotieren für präzise Ansprache.' },
      { name: 'Schnelle Anmeldung', desc: 'Laufkundschaft scannt einen QR-Code zur Mitgliedschaft.' },
      { name: 'Broadcast-Center', desc: 'Email/SMS-Kampagnen, die Wiederkäufe fördern.' },
      { name: 'Stufen & Mitgliederpreise', desc: 'Stufenbasierte Vorteile und Exklusivpreise.' },
      ],
    },
    {
      label: 'Barcodes',
      features: [
      { name: 'Auto-Barcodes', desc: 'Barcodes erzeugen und Hangtags mit einem Labeldrucker drucken.' },
      { name: 'Scannen zum Checkout', desc: 'Scannerunterstützter Checkout für schnellere Schlangen.' },
      { name: 'Scan-Inventuren', desc: 'Barcode-Inventuren auf dem iPad für Tempo und Genauigkeit.' },
      ],
    },
    {
      label: 'Multi-Store',
      features: [
      { name: 'Multi-Store-Bestand', desc: 'Kanalbestand aus einem Admin synchronisieren.' },
      { name: 'Multi-Store-Verkaufsanalytik', desc: 'Filialen vergleichen und Erfolgsrezepte übernehmen.' },
      { name: 'Transfers', desc: 'Bestand zwischen Filialen verschieben, um Engpässe oder Überbestand zu vermeiden.' },
      ],
    },
    {
      label: 'Berichte',
      features: [
      { name: 'Omnichannel-Verkauf', desc: 'Online-, Offline- und Gesamtkanal-Leistung charten.' },
      { name: 'Kundenausgabenanalyse', desc: 'Verhaltens-Insights für schärferes Marketing.' },
      { name: 'Anwesenheit & Mitarbeiterleistung', desc: 'Schichten und individuelle Ergebnisse tracken.' },
      { name: 'Merchandising & Bestand', desc: 'Verkaufstrends und Kaufsignale für bessere Nachfüllung.' },
      ],
    },
    {
      label: 'Filialbetrieb',
      features: [
      { name: 'Steuer- & Rechnungsberichte', desc: 'Filialfinanzen und Compliance vereinfachen.' },
      { name: 'Mitarbeiterverwaltung', desc: 'Konten und Berechtigungen, die Betriebsdaten schützen.' },
      { name: 'Vorbestellungen', desc: 'Kunden können Produkte im Voraus reservieren.' },
      ],
    },
    {
      label: 'Omnichannel',
      features: [
      { name: 'BOPIS-App', desc: 'Online kaufen, in der Filiale abholen.' },
      { name: 'Smart-OMO-Shopping-Links', desc: 'Personal teilt jederzeit Custom-Carts, um Guided Sales zu maximieren.' },
      { name: 'Segmente + Broadcast', desc: 'Richtige Kohorten mit Broadcast-Tools ansprechen.' },
      { name: 'Shopper-App-Integration', desc: 'Mitgliederbarcodes, Abholcodes und Coupon-Barcodes mit POS.' },
      ],
    },
  ],
}

const fr: PosFeaturesCopy = {
  title: 'POS iPad en magasin — opérations de vente claires',
  subtitle: 'Stock, achats et checkout dans un seul flux — quantités et montants restent exacts.',
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
  cta: 'Démarrer l’essai gratuit',
  sections: [
    {
      label: 'Checkout',
      features: [
      { name: 'Journaux de checkout complets', desc: 'Capturez membre, caissier, canal, remises et paiement dès la vente.' },
      { name: 'UI de checkout intelligente', desc: 'Produits visuels, listes triables et stock en direct — facile à apprendre.' },
      { name: 'Paiements en magasin', desc: 'ARVIX Payments aide à unifier les opérations de paiement en ligne et en magasin.' },
      { name: 'Parcours panier fluide', desc: 'Préchargez articles, adhésion et offres pendant la navigation pour réduire l’attente.' },
      { name: 'Remises flexibles', desc: 'Remises article ou commande, modèles montant ou pourcentage.' },
      { name: 'Plusieurs scénarios de paiement', desc: 'Acomptes, réserve non payée, split tender et retours avec mise à jour auto stock/CA.' },
      { name: 'Factures & reçus', desc: 'Connectez le matériel de facturation ; activez ou non l’impression.' },
      { name: 'Modèles de remise', desc: 'Remises % ou fixes nommées prêtes à appliquer depuis le panier POS.' },
      ],
    },
    {
      label: 'Produits & stock',
      features: [
      { name: 'Création de produits', desc: 'Téléversez jusqu’à 1 000 produits avec photos, variantes, stock, catégories et fournisseurs.' },
      { name: 'Inventaires', desc: 'Scannez les codes-barres sur iPad pour des comptages précis.' },
      { name: 'Réception', desc: 'Enregistrez l’historique de réception avec des flux assistés par scanner.' },
      { name: 'Stock & mouvements', desc: 'Suivez chaque changement d’inventaire en toute transparence.' },
      { name: 'Fournisseurs', desc: 'Gérez les données fournisseurs pour des achats plus clairs.' },
      { name: 'Produits masqués', desc: 'Masquez des SKU lorsque le scénario de vente l’exige.' },
      ],
    },
    {
      label: 'Adhésion',
      features: [
      { name: 'CRM', desc: 'Profils complets et historique d’achat.' },
      { name: 'Historique des transactions', desc: 'Dépenses online + offline pour un profil complet.' },
      { name: 'Tags & notes', desc: 'Annotez les clients pour une approche précise.' },
      { name: 'Inscription rapide', desc: 'Les visiteurs scannent un QR pour rejoindre l’adhésion.' },
      { name: 'Centre de diffusion', desc: 'Campagnes Email/SMS qui stimulent le rachat.' },
      { name: 'Niveaux & prix membres', desc: 'Avantages par niveau et prix exclusifs.' },
      ],
    },
    {
      label: 'Codes-barres',
      features: [
      { name: 'Codes auto', desc: 'Générez des codes-barres et imprimez des étiquettes avec une étiqueteuse.' },
      { name: 'Scanner pour payer', desc: 'Checkout assisté par scanner pour des files plus rapides.' },
      { name: 'Inventaires par scan', desc: 'Inventaires codes-barres sur iPad pour vitesse et précision.' },
      ],
    },
    {
      label: 'Multi-magasin',
      features: [
      { name: 'Stock multi-magasin', desc: 'Synchronisez le stock des canaux depuis un seul admin.' },
      { name: 'Analytics ventes multi-magasin', desc: 'Comparez les magasins et reproduire ce qui marche.' },
      { name: 'Transferts', desc: 'Déplacez le stock entre magasins pour éviter ruptures ou surstock.' },
      ],
    },
    {
      label: 'Rapports',
      features: [
      { name: 'Ventes omnicanales', desc: 'Graphiquez la performance online, offline et tous canaux.' },
      { name: 'Analyse des dépenses clients', desc: 'Insights comportementaux pour un marketing plus précis.' },
      { name: 'Présence & performance du personnel', desc: 'Suivez les shifts et les résultats individuels.' },
      { name: 'Merchandising & stock', desc: 'Tendances de vente et signaux d’achat pour un meilleur réassort.' },
      ],
    },
    {
      label: 'Ops magasin',
      features: [
      { name: 'Rapports fiscaux & factures', desc: 'Simplifiez finance et conformité du magasin.' },
      { name: 'Gestion du personnel', desc: 'Comptes et permissions qui protègent les données ops.' },
      { name: 'Précommandes', desc: 'Laissez les clients réserver des produits à l’avance.' },
      ],
    },
    {
      label: 'Omnicanal',
      features: [
      { name: 'App BOPIS', desc: 'Achetez en ligne, retirez en magasin.' },
      { name: 'Liens d’achat Smart OMO', desc: 'Le personnel partage des paniers custom pour maximiser les ventes guidées.' },
      { name: 'Segments + diffusion', desc: 'Ciblez les bonnes cohortes avec les outils de diffusion.' },
      { name: 'Intégration Shopper App', desc: 'Codes-barres membres, codes de retrait et coupons avec le POS.' },
      ],
    },
  ],
}

const copy: Partial<Record<Locale, PosFeaturesCopy>> & { 'zh-TW': PosFeaturesCopy; en: PosFeaturesCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko,
  ja,
  vi,
  es,
  pt,
  de,
  fr,
}

export default function PosFeaturesPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [active, setActive] = useState(0)
  const section = c.sections[active]

  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 87, 230) 0%, rgb(0, 65, 177) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">{c.title}</h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>{c.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-56 flex-shrink-0">
            <div className="flex flex-col gap-1">
              {c.sections.map((t, i) => (
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
            <Image src={sectionImages[active]} alt={section.label} width={800} height={500} className="w-full h-auto rounded-2xl mb-8" unoptimized />
            <div className="grid md:grid-cols-2 gap-4">
              {section.features.map(f => (
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
