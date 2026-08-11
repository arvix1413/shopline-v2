'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

const sectionImages = [
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80'
]

type Feature = { name: string; desc: string }
type Section = { label: string; features: Feature[] }
type OnlineStoreFeaturesCopy = {
  title: string
  subtitle: string
  ctaTitle: string
  cta: string
  sections: Section[]
}

const zhTW: OnlineStoreFeaturesCopy = {
  title: '簡單、強悍的網路商店功能',
  subtitle: 'ARVIX 協助你輕鬆創建、管理、擴展你的品牌網店，締造更高的營收成長！',
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
  cta: '立即免費試用',
  sections: [
    {
      label: '商店建立',
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
      features: [
      { name: 'ARVIX Payments', desc: '通過 PCI-DSS 安全認證，提供信用卡刷卡 / 分期、ATM 轉帳、無卡分期及行動支付等付款方式。' },
      { name: '第三方金流串接', desc: '支援 LINE Pay、街口支付、PayPal 等多種第三方金流平台串接，滿足不同顧客的付款需求。' },
      { name: '超商取貨付款', desc: '提供 7-11、全家便利商店超商取貨付款服務，貼近台灣在地消費者習慣。' },
      { name: '多元物流整合', desc: '整合黑貓宅急便、7-11、全家等主流物流商，讓出貨流程更順暢高效。' },
      ],
    },
    {
      label: '商店設計',
      features: [
      { name: 'SHOP Builder 頁面編輯器', desc: '透過拖曳方式就能添加文字、商品等元件來編排頁面，不會程式語法也能做出精美頁面。' },
      { name: '產業推薦版型', desc: '提供 53 款由專業設計師設計的網站主題，隨選隨用，也可依據產業選擇合適的模板。' },
      { name: 'Layout Engine', desc: '可額外開啟 HTML / CSS / Javascript 等前端語言的客製化權限，讓商店設計更符合需求。' },
      { name: '15+ 互動型元件', desc: '多達 15 種以上的互動型元件，透過拖拉、排列就能建立精美頁面，支援響應式設計。' },
      ],
    },
    {
      label: '訂單管理',
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
      features: [
      { name: '顧客管理系統', desc: '完整記錄顧客資料與消費歷程，讓你深入了解每位顧客的需求與偏好。' },
      { name: '會員分級制度', desc: '設定多層會員等級，提供不同等級的專屬優惠，有效培養忠實顧客。' },
      { name: '顧客標籤與備註', desc: '為顧客添加標籤和備註，方便進行精準分眾行銷和個人化服務。' },
      { name: 'RFIM 分眾行銷', desc: '透過獨家 RFIM 價值模型，智慧演算出 9 種顧客分群，精準鎖定目標受眾。' },
      ],
    },
    {
      label: '優惠活動',
      features: [
      { name: '折扣碼管理', desc: '建立多種折扣碼活動，吸引新客下單，提升整體銷售業績。' },
      { name: '滿額優惠', desc: '設定滿額折扣或贈品活動，有效提升客單價，讓每筆訂單都能創造更多價值。' },
      { name: '限時特賣', desc: '設定限時特賣活動，製造緊迫感，有效催化顧客的購買決策。' },
      { name: '全通路優惠活動', desc: '線上線下同步進行優惠活動，讓全通路顧客都能享受一致的購物體驗。' },
      ],
    },
    {
      label: '行銷推廣',
      features: [
      { name: 'Meta 廣告整合', desc: '串接 Meta 像素，精準追蹤廣告成效，讓每一分廣告預算都能發揮最大效益。' },
      { name: 'Google 廣告整合', desc: '整合 Google Analytics 和廣告追蹤，全面掌握流量來源和轉換數據。' },
      { name: 'LINE 行銷整合', desc: '串接 LINE 官方帳號，透過 LINE 精準廣播觸達目標客群，提升行銷效益。' },
      { name: 'Email 行銷', desc: '透過廣播中心發送 Email 行銷訊息，精準觸達目標顧客，提升回購率。' },
      ],
    },
    {
      label: '數據分析',
      features: [
      { name: 'Shoplytics 數據分析中心', desc: '提供銷售趨勢、訂單庫存、會員生態、流量組成、行銷成果 5 大面向的圖表化報告。' },
      { name: 'AI 洞察策略', desc: '集結第一方數據並運用 AI 智慧演算，讓電商品牌有效透過數據驅動決策。' },
      { name: '即時營運儀表', desc: '輕鬆隨時掌握商店即時數據概況，包含本日瀏覽量、成交額、訂單數等關鍵指標。' },
      { name: '多通路整合數據', desc: '整合線上到線下的相關銷售數據，提供完整的全通路視角，優化品牌經營策略。' },
      ],
    },
    {
      label: '營運管理',
      features: [
      { name: '多帳號管理', desc: '支援多個後台帳號，設定不同權限，讓團隊協作更有效率。' },
      { name: '多語言商店', desc: '提供商店前後台多國語系顯示及幣值切換，協助你快速拓展海外市場。' },
      { name: 'Open API', desc: '以市場最成熟的 Open API 能力，讓商店因應需求彈性擴充，支持品牌生意無限拓展。' },
      { name: '擴充功能商店', desc: '豐富的第三方擴充功能，讓你的商店功能更強大，滿足各種業務需求。' },
      ],
    },
    {
      label: '廣告導流',
      features: [
      { name: 'Meta 廣告代操', desc: '由官方認證的專業投手團隊，協助品牌投遞 Meta 廣告，精準觸達目標客群。' },
      { name: 'Google 廣告代操', desc: '專業 Google 廣告投放服務，從關鍵字廣告到購物廣告，全面提升品牌曝光。' },
      { name: 'LINE 廣告', desc: '透過 LINE 廣告觸達台灣最大社群平台用戶，有效擴大品牌知名度。' },
      { name: '廣告成效追蹤', desc: '完整的廣告成效追蹤系統，讓你清楚掌握每筆廣告預算的投資回報率。' },
      ],
    },
    {
      label: '全通路整合',
      features: [
      { name: 'Smart OMO 會員導購工具', desc: '讓線下顧客快速註冊會員、店員隨時精準導購，極速提升 OMO 虛實整合業績。' },
      { name: 'POS 系統整合', desc: '線上網店與線下 POS 完全整合，庫存、訂單、會員資料即時同步。' },
      { name: 'Shopper App', desc: '快速推出專屬品牌 App，結合品牌官網及 App 優勢，有效培養品牌黏著度。' },
      { name: '線上買門市取', desc: '支援線上下單、門市取貨的購物模式，提供顧客更靈活的購物體驗。' },
      ],
    },
    {
      label: '跨境電商',
      features: [
      { name: '多國語系', desc: '提供商店前後台多國語系顯示，讓海外顧客也能輕鬆瀏覽購物。' },
      { name: '幣值切換', desc: '支援多種幣值切換，讓海外顧客以熟悉的貨幣進行交易。' },
      { name: '跨境金流服務', desc: '提供 PayPal 等跨境金流服務，讓你輕鬆接收來自全球的訂單。' },
      { name: '稅金設定', desc: '支援不同地區的稅金設定，確保跨境交易的合規性。' },
      ],
    },
  ],
}

const zhCN: OnlineStoreFeaturesCopy = {
  title: '简单、强悍的网络商店功能',
  subtitle: 'ARVIX 协助你轻松创建、管理、扩展你的品牌网店，缔造更高的营收成长！',
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
  cta: '立即免费试用',
  sections: [
    {
      label: '商店建立',
      features: [
      { name: '独有网址 ＆ SSL 安全凭证', desc: '使用自有域名或购买全新品牌域名，全站免费提供 SSL 安全凭证 ( HTTPS )，确保资料传输安全。' },
      { name: '内建 SEO 搜索引擎优化', desc: '从首页、分类页、博客到商品页，皆有内建 SEO 栏位，自动生成网站地图，协助品牌争取流量。' },
      { name: '商品摘要', desc: '将商品特点、限定活动等重点内容优先显示于商品名称下方，帮助客人短时间内了解商品。' },
      { name: 'RWD 界面弹性切换', desc: '所有版型皆采 RWD 响应式网页设计，不管使用装置大小，都能聪明适应不同屏幕尺寸。' },
      { name: '图片 ALT 属性', desc: '可在商品图、加购品、分类横图等编辑图片 ALT 属性，提升网店的 SEO 表现。' },
      { name: '一页商店功能模块', desc: '每间商店支持建立 10 组一页商店，在单一页面即可完整呈现商品描述，有效冲高转化率。' },
      { name: 'SEO 结构化数据', desc: 'ARVIX 商店会自动为商品页面产出结构化数据格式，让搜索引擎更有效率收集商店信息。' },
      { name: '隐藏卖场功能模块', desc: '可于进阶分页加入多个隐藏商品后打造成隐藏卖场，并将分页链接分享给特定的顾客群。' },
      { name: '博客', desc: '可于商店后台直接建立博客文章，自定义文章的标题、内容、图片及 SEO 等。' },
      { name: '图片库管理功能模块', desc: '每间商店拥有自己的专属图片库，最多可上传 30,000 张图片，让上架流程更有效率。' },
      ],
    },
    {
      label: '商品库存管理',
      features: [
      { name: '商品建立功能模块', desc: '支持各式新增商品情境，可设定商品照片、规格、库存、分类等信息，方便后续追踪商品状况。' },
      { name: '商品缺货提醒', desc: '当商品库存不足时，系统自动提醒，让你随时掌握库存动向，避免缺货影响销售。' },
      { name: '多层商品分类及自定义排序', desc: '支持多层商品分类架构，让顾客轻松找到想要的商品，提升购物体验。' },
      { name: '商品库存管理', desc: '完整记录进货到出售历程，精准掌握商品供需状况，让库存管理更轻松。' },
      { name: '预约商品上架和销售时间功能模块', desc: '可预先设定商品上架时间，让营销活动更有计划性，提升销售效率。' },
      { name: 'AI 智慧商品推荐 PLUS', desc: '透过 AI 算法分析顾客行为，自动推荐最适合的商品，提升客单价与转化率。' },
      { name: '加购品功能模块', desc: '在结账流程中推荐相关商品，有效提升客单价，让每笔订单都能创造更多价值。' },
      { name: '赠品功能模块', desc: '设定满额赠品活动，吸引顾客提高消费金额，有效提升客单价与顾客满意度。' },
      { name: '隐藏商品功能模块', desc: '可设定隐藏商品，仅对特定顾客群开放，适合网红合作或会员专属优惠。' },
      { name: '多规格商品及预购商品', desc: '支持多种商品规格设定，以及预购商品功能，让商品管理更灵活弹性。' },
      { name: '商品评价奖赏', desc: '鼓励顾客留下商品评价，提升商品可信度，并透过奖赏机制增加顾客互动。' },
      ],
    },
    {
      label: '金物流串接',
      features: [
      { name: 'ARVIX Payments', desc: '通过 PCI-DSS 安全认证，提供信用卡刷卡 / 分期、ATM 转账、无卡分期及行动支付等付款方式。' },
      { name: '第三方金流串接', desc: '支持 LINE Pay、街口支付、PayPal 等多种第三方金流平台串接，满足不同顾客的付款需求。' },
      { name: '超商取货付款', desc: '提供 7-11、全家便利商店超商取货付款服务，贴近台湾在地消费者习惯。' },
      { name: '多元物流整合', desc: '整合黑猫宅急便、7-11、全家等主流物流商，让出货流程更顺畅高效。' },
      ],
    },
    {
      label: '商店设计',
      features: [
      { name: 'SHOP Builder 页面编辑器', desc: '透过拖曳方式就能添加文字、商品等组件来编排页面，不会程序语法也能做出精美页面。' },
      { name: '产业推荐版型', desc: '提供 53 款由专业设计师设计的网站主题，随选随用，也可依据产业选择合适的模板。' },
      { name: 'Layout Engine', desc: '可额外开启 HTML / CSS / Javascript 等前端语言的定制化权限，让商店设计更符合需求。' },
      { name: '15+ 互动型组件', desc: '多达 15 种以上的互动型组件，透过拖拉、排列就能建立精美页面，支持响应式设计。' },
      ],
    },
    {
      label: '订单管理',
      features: [
      { name: '色块化区分订单类别', desc: '透过色块化方式直觉区分不同订单状态，让订单管理更清晰高效。' },
      { name: '未完成购物车结账提醒', desc: '自动提醒未完成结账的顾客，有效降低购物车弃单率，提升转化率。' },
      { name: '拆单功能', desc: '支持将一笔订单拆分为多笔出货，灵活应对不同的出货情境。' },
      { name: '弹性导出订单报表', desc: '可依需求导出订单报表，方便进行财务对账和业绩分析。' },
      { name: '后台代客下单', desc: '商家可以在后台代替顾客建立订单，提升服务弹性和顾客满意度。' },
      { name: '订单退货管理', desc: '完整的退货管理流程，让售后服务更顺畅，提升顾客信任度。' },
      ],
    },
    {
      label: '顾客管理',
      features: [
      { name: '顾客管理系统', desc: '完整记录顾客资料与消费历程，让你深入了解每位顾客的需求与偏好。' },
      { name: '会员分级制度', desc: '设定多层会员等级，提供不同等级的专属优惠，有效培养忠实顾客。' },
      { name: '顾客标签与备注', desc: '为顾客添加标签和备注，方便进行精准分群营销和个人化服务。' },
      { name: 'RFIM 分群营销', desc: '透过独家 RFIM 价值模型，智慧演算出 9 种顾客分群，精准锁定目标受众。' },
      ],
    },
    {
      label: '优惠活动',
      features: [
      { name: '折扣码管理', desc: '建立多种折扣码活动，吸引新客下单，提升整体销售业绩。' },
      { name: '满额优惠', desc: '设定满额折扣或赠品活动，有效提升客单价，让每笔订单都能创造更多价值。' },
      { name: '限时特卖', desc: '设定限时特卖活动，制造紧迫感，有效催化顾客的购买决策。' },
      { name: '全渠道优惠活动', desc: '线上线下同步进行优惠活动，让全渠道顾客都能享受一致的购物体验。' },
      ],
    },
    {
      label: '营销推广',
      features: [
      { name: 'Meta 广告整合', desc: '串接 Meta 像素，精准追踪广告成效，让每一分广告预算都能发挥最大效益。' },
      { name: 'Google 广告整合', desc: '整合 Google Analytics 和广告追踪，全面掌握流量来源和转化数据。' },
      { name: 'LINE 营销整合', desc: '串接 LINE 官方账号，透过 LINE 精准广播触达目标客群，提升营销效益。' },
      { name: 'Email 营销', desc: '透过广播中心发送 Email 营销讯息，精准触达目标顾客，提升复购率。' },
      ],
    },
    {
      label: '数据分析',
      features: [
      { name: 'Shoplytics 数据分析中心', desc: '提供销售趋势、订单库存、会员生态、流量组成、营销成果 5 大面向的图表化报告。' },
      { name: 'AI 洞察策略', desc: '集结第一方数据并运用 AI 智慧演算，让电商品牌有效透过数据驱动决策。' },
      { name: '即时运营仪表', desc: '轻松随时掌握商店即时数据概况，包含本日浏览量、成交额、订单数等关键指标。' },
      { name: '多渠道整合数据', desc: '整合线上到线下的相关销售数据，提供完整的全渠道视角，优化品牌经营策略。' },
      ],
    },
    {
      label: '运营管理',
      features: [
      { name: '多账号管理', desc: '支持多个后台账号，设定不同权限，让团队协作更有效率。' },
      { name: '多语言商店', desc: '提供商店前后台多国语系显示及币值切换，协助你快速拓展海外市场。' },
      { name: 'Open API', desc: '以市场最成熟的 Open API 能力，让商店因应需求弹性扩充，支持品牌生意无限拓展。' },
      { name: '扩充功能商店', desc: '丰富的第三方扩充功能，让你的商店功能更强大，满足各种业务需求。' },
      ],
    },
    {
      label: '广告导流',
      features: [
      { name: 'Meta 广告代操', desc: '由官方认证的专业投手团队，协助品牌投递 Meta 广告，精准触达目标客群。' },
      { name: 'Google 广告代操', desc: '专业 Google 广告投放服务，从关键字广告到购物广告，全面提升品牌曝光。' },
      { name: 'LINE 广告', desc: '透过 LINE 广告触达台湾最大社群平台用户，有效扩大品牌知名度。' },
      { name: '广告成效追踪', desc: '完整的广告成效追踪系统，让你清楚掌握每笔广告预算的投资回报率。' },
      ],
    },
    {
      label: '全渠道整合',
      features: [
      { name: 'Smart OMO 会员导购工具', desc: '让线下顾客快速注册会员、店员随时精准导购，极速提升 OMO 虚实整合业绩。' },
      { name: 'POS 系统整合', desc: '线上网店与线下 POS 完全整合，库存、订单、会员资料即时同步。' },
      { name: 'Shopper App', desc: '快速推出专属品牌 App，结合品牌官网及 App 优势，有效培养品牌黏着度。' },
      { name: '线上买门店取', desc: '支持线上下单、门店取货的购物模式，提供顾客更灵活的购物体验。' },
      ],
    },
    {
      label: '跨境电商',
      features: [
      { name: '多国语系', desc: '提供商店前后台多国语系显示，让海外顾客也能轻松浏览购物。' },
      { name: '币值切换', desc: '支持多种币值切换，让海外顾客以熟悉的货币进行交易。' },
      { name: '跨境金流服务', desc: '提供 PayPal 等跨境金流服务，让你轻松接收来自全球的订单。' },
      { name: '税金设定', desc: '支持不同地区的税金设定，确保跨境交易的合规性。' },
      ],
    },
  ],
}

const en: OnlineStoreFeaturesCopy = {
  title: 'Simple, powerful online store features',
  subtitle: 'Create, manage, and scale your brand storefront for stronger revenue growth.',
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
  cta: 'Start free trial',
  sections: [
    {
      label: 'Store setup',
      features: [
      { name: 'Custom domain & SSL', desc: 'Use your own domain or buy a new one. Free sitewide SSL (HTTPS) keeps data secure.' },
      { name: 'Built-in SEO', desc: 'SEO fields from home to product pages, plus auto sitemaps to win more traffic.' },
      { name: 'Product summary', desc: 'Surface key selling points under the product name so shoppers get it instantly.' },
      { name: 'Responsive UI', desc: 'Every theme is RWD-ready and adapts cleanly across devices.' },
      { name: 'Image ALT attributes', desc: 'Edit ALT on product and category images to strengthen SEO.' },
      { name: 'One-page store modules', desc: 'Create up to 10 one-page stores to present products and lift conversion.' },
      { name: 'SEO structured data', desc: 'Auto-generate product structured data for better search crawling.' },
      { name: 'Hidden storefronts', desc: 'Build private storefront pages and share links with selected audiences.' },
      { name: 'Blog', desc: 'Publish posts with custom titles, content, images, and SEO from admin.' },
      { name: 'Image library', desc: 'Per-store library with up to 30,000 uploads for faster merchandising.' },
      ],
    },
    {
      label: 'Products & inventory',
      features: [
      { name: 'Product creation', desc: 'Create products with photos, variants, stock, and categories for easy tracking.' },
      { name: 'Low-stock alerts', desc: 'Get notified when stock runs low so sales are not interrupted.' },
      { name: 'Multi-level categories', desc: 'Nested categories and custom sort so shoppers find products fast.' },
      { name: 'Inventory management', desc: 'Track goods from receiving to sale with clear supply visibility.' },
      { name: 'Scheduled publish & sale', desc: 'Schedule go-live times so campaigns launch on plan.' },
      { name: 'AI product recommendations PLUS', desc: 'AI recommends the right products to lift AOV and conversion.' },
      { name: 'Add-ons', desc: 'Suggest related items in checkout to grow order value.' },
      { name: 'Gifts', desc: 'Threshold gift campaigns that raise spend and satisfaction.' },
      { name: 'Hidden products', desc: 'Restrict products to selected audiences — ideal for creators or members.' },
      { name: 'Variants & preorders', desc: 'Flexible variants plus preorder support.' },
      { name: 'Review rewards', desc: 'Encourage reviews with rewards to build trust and engagement.' },
      ],
    },
    {
      label: 'Payments & logistics',
      features: [
      { name: 'ARVIX Payments', desc: 'PCI-DSS certified cards/installments, ATM, cardless installments, and wallets.' },
      { name: 'Third-party payments', desc: 'Connect LINE Pay, JKO Pay, PayPal, and more.' },
      { name: 'Convenience store COD', desc: '7-Eleven and FamilyMart pickup & pay for local habits.' },
      { name: 'Multi-carrier shipping', desc: 'Black Cat, 7-Eleven, FamilyMart, and more for smoother fulfillment.' },
      ],
    },
    {
      label: 'Store design',
      features: [
      { name: 'SHOP Builder editor', desc: 'Drag-and-drop text and products — no code required.' },
      { name: 'Industry themes', desc: '53 designer themes ready to use by industry.' },
      { name: 'Layout Engine', desc: 'Optional HTML/CSS/JS customization when you need it.' },
      { name: '15+ interactive modules', desc: 'Build polished responsive pages by arranging modules.' },
      ],
    },
    {
      label: 'Orders',
      features: [
      { name: 'Color-coded order types', desc: 'See order status at a glance with color blocks.' },
      { name: 'Abandoned cart reminders', desc: 'Auto-nudge incomplete checkouts to recover sales.' },
      { name: 'Split shipments', desc: 'Split one order into multiple shipments as needed.' },
      { name: 'Flexible order exports', desc: 'Export reports for finance and performance review.' },
      { name: 'Proxy ordering', desc: 'Create orders for customers from admin.' },
      { name: 'Returns management', desc: 'Full returns flow that builds post-purchase trust.' },
      ],
    },
    {
      label: 'Customers',
      features: [
      { name: 'CRM', desc: 'Full profiles and purchase history for every shopper.' },
      { name: 'Membership tiers', desc: 'Tiered benefits that grow loyal customers.' },
      { name: 'Tags & notes', desc: 'Tag and annotate for precise, personal outreach.' },
      { name: 'RFIM segments', desc: 'Exclusive RFIM model with 9 smart segments.' },
      ],
    },
    {
      label: 'Promotions',
      features: [
      { name: 'Discount codes', desc: 'Multiple code campaigns to win new buyers.' },
      { name: 'Spend thresholds', desc: 'Threshold discounts or gifts that lift AOV.' },
      { name: 'Flash sales', desc: 'Time-boxed sales that create urgency.' },
      { name: 'Omnichannel promos', desc: 'Aligned online/offline offers for a consistent experience.' },
      ],
    },
    {
      label: 'Marketing',
      features: [
      { name: 'Meta ads integration', desc: 'Meta Pixel tracking so ad spend works harder.' },
      { name: 'Google ads integration', desc: 'GA and ad tracking for source and conversion clarity.' },
      { name: 'LINE marketing', desc: 'LINE OA broadcasts that reach the right audience.' },
      { name: 'Email marketing', desc: 'Broadcast center emails that drive repurchase.' },
      ],
    },
    {
      label: 'Analytics',
      features: [
      { name: 'Shoplytics center', desc: 'Charts across sales, orders/stock, members, traffic, and campaigns.' },
      { name: 'AI strategy insights', desc: 'First-party data + AI to drive decisions.' },
      { name: 'Live ops dashboard', desc: 'Today’s views, GMV, orders, and more at a glance.' },
      { name: 'Omnichannel data', desc: 'Online-to-offline sales in one view.' },
      ],
    },
    {
      label: 'Operations',
      features: [
      { name: 'Multi-account admin', desc: 'Team accounts with role-based permissions.' },
      { name: 'Multilingual store', desc: 'Front/back-office languages and currency switching.' },
      { name: 'Open API', desc: 'Mature APIs to extend the store as you grow.' },
      { name: 'App marketplace', desc: 'Third-party apps that expand capabilities.' },
      ],
    },
    {
      label: 'Paid traffic',
      features: [
      { name: 'Meta ads managed service', desc: 'Certified specialists run Meta campaigns.' },
      { name: 'Google ads managed service', desc: 'Search to shopping ads for more brand reach.' },
      { name: 'LINE ads', desc: 'Reach Taiwan’s largest social platform.' },
      { name: 'Ad performance tracking', desc: 'Clear ROI on every ad dollar.' },
      ],
    },
    {
      label: 'Omnichannel',
      features: [
      { name: 'Smart OMO member tools', desc: 'Enroll offline members and guide purchases to grow OMO sales.' },
      { name: 'POS integration', desc: 'Online store + POS with live stock, orders, and members.' },
      { name: 'Shopper App', desc: 'Launch a branded app that deepens loyalty.' },
      { name: 'BOPIS', desc: 'Buy online, pick up in store for flexible shopping.' },
      ],
    },
    {
      label: 'Cross-border',
      features: [
      { name: 'Multiple languages', desc: 'Localize storefront and admin for overseas shoppers.' },
      { name: 'Currency switching', desc: 'Let shoppers pay in familiar currencies.' },
      { name: 'Cross-border payments', desc: 'PayPal and more to accept global orders.' },
      { name: 'Tax settings', desc: 'Region-aware tax rules for compliance.' },
      ],
    },
  ],
}

const copy: Partial<Record<Locale, OnlineStoreFeaturesCopy>> & { 'zh-TW': OnlineStoreFeaturesCopy; en: OnlineStoreFeaturesCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko: en,
  ja: en,
  vi: en,
  es: en,
  pt: en,
  de: en,
  fr: en,
}

export default function OnlineStoreFeaturesPage() {
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
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
