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
      { name: 'ARVIX Payments', desc: '商店結帳支援信用卡付款，提供安全穩定的收款體驗。' },
      { name: '7-11 超商取貨', desc: '台灣出貨商店可串接 7-11 取貨與貨到付款（須綠界物流）。' },
      { name: '宅配出貨', desc: '支援宅配；運費與出貨流程由店家設定。' },
      { name: '安全結帳', desc: '付款流程注重交易安全，降低異常風險。' },
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
      { name: '跨境金流服務', desc: '海外顧客可使用信用卡完成結帳（實際可用方式依商店設定）。' },
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
      { name: 'ARVIX Payments', desc: '商店结账支持信用卡付款，提供安全稳定的收款体验。' },
      { name: '宅配出货', desc: '支持宅配；运费与出货流程由店家设定。' },
      { name: '安全结账', desc: '付款流程注重交易安全，降低异常风险。' },
      { name: '订单管理', desc: '统一管理订单与出货状态，提升运营效率。' },
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
      { name: '跨境金流服务', desc: '海外顾客可使用信用卡完成结账（实际可用方式依商店设定）。' },
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
      { name: 'ARVIX Payments', desc: 'Card checkout for secure store payments.' },
      { name: 'Home delivery', desc: 'Ship with home delivery; fees and flow are set by the merchant.' },
      { name: 'Secure checkout', desc: 'Payment flow designed to reduce fraud risk.' },
      { name: 'Order management', desc: 'Manage orders and fulfillment status in one place.' },
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
      { name: 'Cross-border payments', desc: 'International shoppers can pay by card (availability depends on store setup).' },
      { name: 'Tax settings', desc: 'Region-aware tax rules for compliance.' },
      ],
    },
  ],
}

const ko: OnlineStoreFeaturesCopy = {
  title: "간단하고 강력한 온라인 스토어 기능",
  subtitle: "브랜드 스토어를 만들고 관리·확장해 더 강한 매출 성장을 이루세요.",
  ctaTitle: "전 세계 60만+ 판매자가 ARVIX를 신뢰합니다",
  cta: "무료 체험 시작",
  sections: [
    {
      label: "스토어 설정",
      features: [
      { name: "맞춤 도메인 & SSL", desc: "자체 도메인을 사용하거나 새로 구매하세요. 전 사이트 무료 SSL(HTTPS)로 데이터를 보호합니다." },
      { name: "내장 SEO", desc: "홈부터 상품 페이지까지 SEO 필드와 자동 사이트맵으로 더 많은 트래픽을 확보하세요." },
      { name: "상품 요약", desc: "상품명 아래에 핵심 셀링 포인트를 노출해 고객이 바로 이해하도록 돕습니다." },
      { name: "반응형 UI", desc: "모든 테마가 RWD로 다양한 기기에 깔끔하게 적응합니다." },
      { name: "이미지 ALT 속성", desc: "상품·카테고리 이미지의 ALT를 편집해 SEO를 강화하세요." },
      { name: "원페이지 스토어 모듈", desc: "최대 10개의 원페이지 스토어로 상품을 제시하고 전환을 높이세요." },
      { name: "SEO 구조화 데이터", desc: "상품 구조화 데이터를 자동 생성해 검색 수집을 개선합니다." },
      { name: "숨김 스토어프론트", desc: "비공개 스토어프론트 페이지를 만들고 선택한 고객에게만 링크를 공유하세요." },
      { name: "블로그", desc: "관리자에서 제목·내용·이미지·SEO를 맞춤 설정해 글을 게시하세요." },
      { name: "이미지 라이브러리", desc: "스토어별 라이브러리에 최대 30,000장 업로드로 머천다이징을 빠르게." },
      ],
    },
    {
      label: "상품 & 재고",
      features: [
      { name: "상품 생성", desc: "사진, 옵션, 재고, 카테고리와 함께 상품을 만들어 쉽게 추적하세요." },
      { name: "재고 부족 알림", desc: "재고가 줄면 알림을 받아 판매 중단을 방지합니다." },
      { name: "다단계 카테고리", desc: "중첩 카테고리와 맞춤 정렬로 고객이 빠르게 찾도록 합니다." },
      { name: "재고 관리", desc: "입고부터 판매까지 명확한 가시성으로 상품을 추적합니다." },
      { name: "예약 게시 & 판매", desc: "캠페인이 계획대로 시작되도록 게시 시간을 예약하세요." },
      { name: "AI 상품 추천 PLUS", desc: "AI가 적합한 상품을 추천해 AOV와 전환을 높입니다." },
      { name: "추가 구매", desc: "결제 중 관련 상품을 제안해 주문 금액을 키웁니다." },
      { name: "사은품", desc: "임계값 사은품 캠페인으로 지출과 만족도를 높입니다." },
      { name: "숨김 상품", desc: "선택한 고객에게만 상품을 공개 — 크리에이터·회원에 적합." },
      { name: "옵션 & 예약 판매", desc: "유연한 옵션과 예약 판매를 지원합니다." },
      { name: "리뷰 리워드", desc: "리워드로 리뷰를 유도해 신뢰와 참여를 키웁니다." },
      ],
    },
    {
      label: "결제 & 물류",
      features: [
      { name: "ARVIX Payments", desc: "안전한 스토어 결제를 위한 카드 결제." },
      { name: "택배 배송", desc: "택배로 출고; 운임과 흐름은 판매자가 설정합니다." },
      { name: "안전한 결제", desc: "사기 위험을 줄이도록 설계된 결제 흐름." },
      { name: "주문 관리", desc: "주문과 출고 상태를 한곳에서 관리합니다." },
      ],
    },
    {
      label: "스토어 디자인",
      features: [
      { name: "SHOP Builder 에디터", desc: "드래그 앤 드롭으로 텍스트와 상품을 배치 — 코딩 불필요." },
      { name: "산업별 테마", desc: "산업별로 바로 쓸 수 있는 디자이너 테마 53종." },
      { name: "Layout Engine", desc: "필요할 때 HTML/CSS/JS 커스터마이즈를 선택적으로 사용." },
      { name: "15+ 인터랙티브 모듈", desc: "모듈을 배치해 세련된 반응형 페이지를 만듭니다." },
      ],
    },
    {
      label: "주문",
      features: [
      { name: "색상 코딩 주문 유형", desc: "색상 블록으로 주문 상태를 한눈에 파악." },
      { name: "장바구니 이탈 리마인더", desc: "미완료 결제를 자동 독려해 매출을 회복." },
      { name: "분할 출고", desc: "필요에 따라 한 주문을 여러 출고로 분할." },
      { name: "유연한 주문 내보내기", desc: "재무·성과 검토용 리포트를 내보내세요." },
      { name: "대리 주문", desc: "관리자에서 고객을 대신해 주문을 생성." },
      { name: "반품 관리", desc: "구매 후 신뢰를 쌓는 완전한 반품 흐름." },
      ],
    },
    {
      label: "고객",
      features: [
      { name: "CRM", desc: "모든 쇼핑객의 전체 프로필과 구매 이력." },
      { name: "회원 등급", desc: "충성 고객을 키우는 등급별 혜택." },
      { name: "태그 & 메모", desc: "정밀하고 개인화된 아웃리치를 위한 태깅." },
      { name: "RFIM 세그먼트", desc: "9개 스마트 세그먼트의 독점 RFIM 모델." },
      ],
    },
    {
      label: "프로모션",
      features: [
      { name: "할인 코드", desc: "신규 구매자를 유치하는 다양한 코드 캠페인." },
      { name: "지출 임계값", desc: "AOV를 높이는 임계값 할인 또는 사은품." },
      { name: "플래시 세일", desc: "긴급감을 만드는 시한부 세일." },
      { name: "옴니채널 프로모", desc: "일관된 경험을 위한 온·오프라인 제휴 혜택." },
      ],
    },
    {
      label: "마케팅",
      features: [
      { name: "Meta 광고 연동", desc: "광고비를 더 효과적으로 쓰는 Meta Pixel 추적." },
      { name: "Google 광고 연동", desc: "소스와 전환을 명확히 하는 GA·광고 추적." },
      { name: "LINE 마케팅", desc: "올바른 오디언스에 도달하는 LINE OA 브로드캐스트." },
      { name: "이메일 마케팅", desc: "재구매를 유도하는 브로드캐스트 센터 이메일." },
      ],
    },
    {
      label: "분석",
      features: [
      { name: "Shoplytics 센터", desc: "판매·주문/재고·회원·트래픽·캠페인 차트." },
      { name: "AI 전략 인사이트", desc: "1자 데이터 + AI로 의사결정을 지원." },
      { name: "실시간 운영 대시보드", desc: "오늘의 조회·GMV·주문 등을 한눈에." },
      { name: "옴니채널 데이터", desc: "온·오프라인 판매를 한 뷰로." },
      ],
    },
    {
      label: "운영",
      features: [
      { name: "다중 계정 관리", desc: "역할 기반 권한의 팀 계정." },
      { name: "다국어 스토어", desc: "프론트/백오피스 언어와 통화 전환." },
      { name: "Open API", desc: "성장에 맞춰 스토어를 확장하는 성숙한 API." },
      { name: "앱 마켓플레이스", desc: "기능을 확장하는 서드파티 앱." },
      ],
    },
    {
      label: "유료 트래픽",
      features: [
      { name: "Meta 광고 대행", desc: "인증 전문가가 Meta 캠페인을 운영." },
      { name: "Google 광고 대행", desc: "검색부터 쇼핑 광고까지 브랜드 도달 확대." },
      { name: "LINE 광고", desc: "대만 최대 소셜 플랫폼에 도달." },
      { name: "광고 성과 추적", desc: "광고비마다 명확한 ROI." },
      ],
    },
    {
      label: "옴니채널",
      features: [
      { name: "Smart OMO 회원 도구", desc: "오프라인 회원을 등록하고 구매를 안내해 OMO 매출을 키웁니다." },
      { name: "POS 연동", desc: "실시간 재고·주문·회원으로 온라인 스토어 + POS." },
      { name: "Shopper App", desc: "충성도를 깊게 하는 브랜드 앱을 출시." },
      { name: "BOPIS", desc: "온라인 구매, 매장 픽업으로 유연한 쇼핑." },
      ],
    },
    {
      label: "크로스보더",
      features: [
      { name: "다중 언어", desc: "해외 쇼핑객을 위해 스토어프론트와 관리자를 현지화." },
      { name: "통화 전환", desc: "익숙한 통화로 결제할 수 있게 합니다." },
      { name: "크로스보더 결제", desc: "해외 쇼핑객은 카드로 결제할 수 있습니다(가용성은 스토어 설정에 따름)." },
      { name: "세금 설정", desc: "컴플라이언스를 위한 지역별 세금 규칙." },
      ],
    },
  ],
}

const ja: OnlineStoreFeaturesCopy = {
  title: "シンプルで強力なオンラインストア機能",
  subtitle: "ブランドストアを作成・管理・拡大し、より強い売上成長を実現。",
  ctaTitle: "世界中 60 万以上の加盟店が ARVIX を利用",
  cta: "無料トライアルを開始",
  sections: [
    {
      label: "ストア設定",
      features: [
      { name: "カスタムドメイン & SSL", desc: "独自ドメインを使うか新規購入。サイト全体の無料 SSL（HTTPS）でデータを保護。" },
      { name: "組み込み SEO", desc: "ホームから商品ページまで SEO 欄と自動サイトマップでトラフィックを獲得。" },
      { name: "商品サマリー", desc: "商品名の下にキーポイントを表示し、すぐ理解できるように。" },
      { name: "レスポンシブ UI", desc: "全テーマが RWD 対応で端末にきれいに適応。" },
      { name: "画像 ALT 属性", desc: "商品・カテゴリ画像の ALT を編集して SEO を強化。" },
      { name: "ワンページストアモジュール", desc: "最大 10 のワンページストアで商品を提示し転換を向上。" },
      { name: "SEO 構造化データ", desc: "商品の構造化データを自動生成し検索クロールを改善。" },
      { name: "非公開ストアフロント", desc: "非公開ページを作り、選んだオーディエンスにだけリンク共有。" },
      { name: "ブログ", desc: "管理画面からタイトル・内容・画像・SEO をカスタムして投稿。" },
      { name: "画像ライブラリ", desc: "ストア別ライブラリで最大 30,000 枚アップロード、マーチャンダイジングを加速。" },
      ],
    },
    {
      label: "商品と在庫",
      features: [
      { name: "商品作成", desc: "写真・バリエーション・在庫・カテゴリ付きで商品を作成し追跡しやすく。" },
      { name: "在庫切れアラート", desc: "在庫が少なくなると通知し販売中断を防止。" },
      { name: "多階層カテゴリ", desc: "入れ子カテゴリとカスタム並びで素早く発見。" },
      { name: "在庫管理", desc: "入荷から販売まで明確な可視性で追跡。" },
      { name: "公開・販売スケジュール", desc: "キャンペーンが計画どおり始まるよう公開時刻を予約。" },
      { name: "AI 商品レコメンド PLUS", desc: "AI が適切な商品を推薦し AOV と転換を向上。" },
      { name: "アップセル", desc: "チェックアウトで関連商品を提案し注文額を拡大。" },
      { name: "ギフト", desc: "しきい値ギフトキャンペーンで支出と満足度を向上。" },
      { name: "非表示商品", desc: "選んだオーディエンスにのみ公開 — クリエイターや会員向け。" },
      { name: "バリエーションと予約販売", desc: "柔軟なバリエーションと予約販売に対応。" },
      { name: "レビュー特典", desc: "特典でレビューを促し信頼とエンゲージメントを構築。" },
      ],
    },
    {
      label: "決済と物流",
      features: [
      { name: "ARVIX Payments", desc: "安全なストア決済のためのカード決済。" },
      { name: "宅配", desc: "宅配で発送；送料とフローは加盟店が設定。" },
      { name: "安全なチェックアウト", desc: "不正リスクを抑える決済フロー。" },
      { name: "注文管理", desc: "注文と出荷ステータスを一か所で管理。" },
      ],
    },
    {
      label: "ストアデザイン",
      features: [
      { name: "SHOP Builder エディタ", desc: "ドラッグ＆ドロップでテキストと商品を配置 — コード不要。" },
      { name: "業種テーマ", desc: "業種別ですぐ使えるデザイナーテーマ 53 種。" },
      { name: "Layout Engine", desc: "必要なとき HTML/CSS/JS カスタマイズを任意で利用。" },
      { name: "15+ インタラクティブモジュール", desc: "モジュールを並べて洗練されたレスポンシブページを構築。" },
      ],
    },
    {
      label: "注文",
      features: [
      { name: "色分け注文タイプ", desc: "色ブロックで注文ステータスを一目で把握。" },
      { name: "カゴ落ちリマインダー", desc: "未完了チェックアウトを自動督促して売上を回復。" },
      { name: "分割出荷", desc: "必要に応じて 1 注文を複数出荷に分割。" },
      { name: "柔軟な注文エクスポート", desc: "財務・実績レビュー用にレポートをエクスポート。" },
      { name: "代理注文", desc: "管理画面から顧客の代わりに注文を作成。" },
      { name: "返品管理", desc: "購入後の信頼を築く完全な返品フロー。" },
      ],
    },
    {
      label: "顧客",
      features: [
      { name: "CRM", desc: "全ショッパーの完全プロフィールと購入履歴。" },
      { name: "会員等級", desc: "ロイヤル顧客を育てる等級別特典。" },
      { name: "タグとメモ", desc: "精密でパーソナルなアウトリーチのためのタグ付け。" },
      { name: "RFIM セグメント", desc: "9 つのスマートセグメントを持つ独自 RFIM モデル。" },
      ],
    },
    {
      label: "プロモーション",
      features: [
      { name: "割引コード", desc: "新規購入者を獲得する複数コードキャンペーン。" },
      { name: "支出しきい値", desc: "AOV を上げるしきい値割引またはギフト。" },
      { name: "フラッシュセール", desc: "緊迫感を生む期間限定セール。" },
      { name: "オムニチャネルプロモ", desc: "一貫体験のためのオンライン／オフライン連動オファー。" },
      ],
    },
    {
      label: "マーケティング",
      features: [
      { name: "Meta 広告連携", desc: "広告費をより効かせる Meta Pixel トラッキング。" },
      { name: "Google 広告連携", desc: "ソースと転換を明確にする GA・広告トラッキング。" },
      { name: "LINE マーケティング", desc: "適切なオーディエンスに届く LINE OA ブロードキャスト。" },
      { name: "メールマーケティング", desc: "リピート購入を促すブロードキャストセンターのメール。" },
      ],
    },
    {
      label: "分析",
      features: [
      { name: "Shoplytics センター", desc: "売上・注文／在庫・会員・トラフィック・キャンペーンのチャート。" },
      { name: "AI 戦略インサイト", desc: "ファーストパーティデータ＋ AI で意思決定を支援。" },
      { name: "ライブオペダッシュボード", desc: "本日の閲覧・GMV・注文などを一目で。" },
      { name: "オムニチャネルデータ", desc: "オンラインからオフラインの売上をひとつのビューに。" },
      ],
    },
    {
      label: "オペレーション",
      features: [
      { name: "マルチアカウント管理", desc: "ロールベース権限のチームアカウント。" },
      { name: "多言語ストア", desc: "フロント／バックオフィスの言語と通貨切替。" },
      { name: "Open API", desc: "成長に合わせてストアを拡張する成熟した API。" },
      { name: "アプリマーケットプレイス", desc: "機能を広げるサードパーティアプリ。" },
      ],
    },
    {
      label: "有料トラフィック",
      features: [
      { name: "Meta 広告運用", desc: "認定スペシャリストが Meta キャンペーンを運用。" },
      { name: "Google 広告運用", desc: "検索からショッピング広告までブランドリーチを拡大。" },
      { name: "LINE 広告", desc: "台湾最大のソーシャルプラットフォームにリーチ。" },
      { name: "広告成果トラッキング", desc: "広告費ごとの明確な ROI。" },
      ],
    },
    {
      label: "オムニチャネル",
      features: [
      { name: "Smart OMO 会員ツール", desc: "オフライン会員を登録し購買をガイドして OMO 売上を伸ばす。" },
      { name: "POS 連携", desc: "ライブ在庫・注文・会員でオンラインストア＋ POS。" },
      { name: "Shopper App", desc: "ロイヤルティを深めるブランドアプリをローンチ。" },
      { name: "BOPIS", desc: "オンライン購入、店舗受取で柔軟な買い物。" },
      ],
    },
    {
      label: "越境",
      features: [
      { name: "複数言語", desc: "海外ショッパー向けにストアフロントと管理画面をローカライズ。" },
      { name: "通貨切替", desc: "慣れた通貨で支払えるように。" },
      { name: "越境決済", desc: "海外ショッパーはカードで支払い可能（可否はストア設定による）。" },
      { name: "税設定", desc: "コンプライアンスのための地域対応税ルール。" },
      ],
    },
  ],
}

const vi: OnlineStoreFeaturesCopy = {
  title: "Tính năng cửa hàng online đơn giản, mạnh mẽ",
  subtitle: "Tạo, quản lý và mở rộng storefront thương hiệu để tăng trưởng doanh thu mạnh hơn.",
  ctaTitle: "Được hơn 600.000 người bán trên thế giới tin dùng",
  cta: "Bắt đầu dùng thử miễn phí",
  sections: [
    {
      label: "Thiết lập cửa hàng",
      features: [
      { name: "Tên miền tùy chỉnh & SSL", desc: "Dùng tên miền riêng hoặc mua mới. SSL miễn phí toàn site (HTTPS) bảo vệ dữ liệu." },
      { name: "SEO tích hợp", desc: "Trường SEO từ trang chủ đến sản phẩm, kèm sitemap tự động để thu hút thêm traffic." },
      { name: "Tóm tắt sản phẩm", desc: "Hiển thị điểm bán chính dưới tên sản phẩm để khách hiểu ngay." },
      { name: "UI responsive", desc: "Mọi theme đều RWD và thích ứng gọn trên thiết bị." },
      { name: "Thuộc tính ALT ảnh", desc: "Chỉnh ALT trên ảnh sản phẩm và danh mục để tăng SEO." },
      { name: "Module cửa hàng một trang", desc: "Tạo tối đa 10 cửa hàng một trang để trình bày sản phẩm và tăng chuyển đổi." },
      { name: "Dữ liệu có cấu trúc SEO", desc: "Tự tạo structured data sản phẩm để crawl tìm kiếm tốt hơn." },
      { name: "Storefront ẩn", desc: "Tạo trang storefront riêng tư và chia sẻ link với đối tượng đã chọn." },
      { name: "Blog", desc: "Đăng bài với tiêu đề, nội dung, ảnh và SEO tùy chỉnh từ admin." },
      { name: "Thư viện ảnh", desc: "Thư viện theo cửa hàng tối đa 30.000 ảnh để merchandising nhanh hơn." },
      ],
    },
    {
      label: "Sản phẩm & tồn kho",
      features: [
      { name: "Tạo sản phẩm", desc: "Tạo sản phẩm với ảnh, biến thể, tồn và danh mục để theo dõi dễ dàng." },
      { name: "Cảnh báo tồn thấp", desc: "Nhận thông báo khi tồn thấp để không gián đoạn bán hàng." },
      { name: "Danh mục nhiều cấp", desc: "Danh mục lồng nhau và sắp xếp tùy chỉnh để khách tìm nhanh." },
      { name: "Quản lý tồn kho", desc: "Theo dõi hàng từ nhập đến bán với tầm nhìn cung ứng rõ ràng." },
      { name: "Lên lịch đăng & bán", desc: "Lên lịch giờ lên sóng để chiến dịch chạy đúng kế hoạch." },
      { name: "Gợi ý sản phẩm AI PLUS", desc: "AI gợi ý sản phẩm phù hợp để tăng AOV và chuyển đổi." },
      { name: "Mua thêm", desc: "Gợi ý sản phẩm liên quan khi checkout để tăng giá trị đơn." },
      { name: "Quà tặng", desc: "Chiến dịch quà theo ngưỡng chi tiêu tăng chi tiêu và hài lòng." },
      { name: "Sản phẩm ẩn", desc: "Giới hạn sản phẩm cho đối tượng chọn — lý tưởng cho creator hoặc hội viên." },
      { name: "Biến thể & đặt trước", desc: "Biến thể linh hoạt kèm hỗ trợ đặt trước." },
      { name: "Thưởng đánh giá", desc: "Khuyến khích đánh giá bằng thưởng để xây niềm tin và tương tác." },
      ],
    },
    {
      label: "Thanh toán & logistics",
      features: [
      { name: "ARVIX Payments", desc: "Thanh toán thẻ cho thanh toán cửa hàng an toàn." },
      { name: "Giao tận nhà", desc: "Giao bằng giao tận nhà; phí và luồng do người bán đặt." },
      { name: "Checkout an toàn", desc: "Luồng thanh toán thiết kế để giảm rủi ro gian lận." },
      { name: "Quản lý đơn hàng", desc: "Quản lý đơn và trạng thái fulfillment tại một nơi." },
      ],
    },
    {
      label: "Thiết kế cửa hàng",
      features: [
      { name: "Trình chỉnh sửa SHOP Builder", desc: "Kéo-thả chữ và sản phẩm — không cần code." },
      { name: "Theme theo ngành", desc: "53 theme do designer tạo sẵn theo ngành." },
      { name: "Layout Engine", desc: "Tùy chọn tùy biến HTML/CSS/JS khi cần." },
      { name: "Hơn 15 module tương tác", desc: "Dựng trang responsive tinh tế bằng cách xếp module." },
      ],
    },
    {
      label: "Đơn hàng",
      features: [
      { name: "Loại đơn mã màu", desc: "Nhìn trạng thái đơn trong nháy mắt với khối màu." },
      { name: "Nhắc giỏ bỏ dở", desc: "Tự nhắc checkout chưa hoàn tất để lấy lại doanh số." },
      { name: "Tách lô giao", desc: "Tách một đơn thành nhiều lô giao khi cần." },
      { name: "Xuất đơn linh hoạt", desc: "Xuất báo cáo cho tài chính và đánh giá hiệu suất." },
      { name: "Đặt hộ", desc: "Tạo đơn cho khách từ admin." },
      { name: "Quản lý đổi trả", desc: "Luồng đổi trả đầy đủ xây dựng tin cậy sau mua." },
      ],
    },
    {
      label: "Khách hàng",
      features: [
      { name: "CRM", desc: "Hồ sơ đầy đủ và lịch sử mua của mọi khách." },
      { name: "Hạng hội viên", desc: "Ưu đãi theo hạng nuôi khách trung thành." },
      { name: "Thẻ & ghi chú", desc: "Gắn thẻ và chú thích cho tiếp cận chính xác, cá nhân." },
      { name: "Phân khúc RFIM", desc: "Mô hình RFIM độc quyền với 9 phân khúc thông minh." },
      ],
    },
    {
      label: "Khuyến mãi",
      features: [
      { name: "Mã giảm giá", desc: "Nhiều chiến dịch mã để thu hút người mua mới." },
      { name: "Ngưỡng chi tiêu", desc: "Giảm giá hoặc quà theo ngưỡng giúp tăng AOV." },
      { name: "Flash sale", desc: "Sale giới hạn thời gian tạo cảm giác gấp." },
      { name: "Promo omnichannel", desc: "Ưu đãi online/offline đồng bộ cho trải nghiệm nhất quán." },
      ],
    },
    {
      label: "Marketing",
      features: [
      { name: "Tích hợp quảng cáo Meta", desc: "Theo dõi Meta Pixel để ngân sách quảng cáo hiệu quả hơn." },
      { name: "Tích hợp quảng cáo Google", desc: "Theo dõi GA và quảng cáo cho nguồn và chuyển đổi rõ ràng." },
      { name: "Marketing LINE", desc: "Broadcast LINE OA đến đúng đối tượng." },
      { name: "Email marketing", desc: "Email từ trung tâm phát sóng thúc đẩy mua lại." },
      ],
    },
    {
      label: "Phân tích",
      features: [
      { name: "Trung tâm Shoplytics", desc: "Biểu đồ doanh số, đơn/tồn, hội viên, traffic và chiến dịch." },
      { name: "Insight chiến lược AI", desc: "Dữ liệu first-party + AI để ra quyết định." },
      { name: "Dashboard vận hành trực tiếp", desc: "Lượt xem, GMV, đơn hôm nay và hơn thế trong một cái nhìn." },
      { name: "Dữ liệu omnichannel", desc: "Doanh số online đến offline trong một khung nhìn." },
      ],
    },
    {
      label: "Vận hành",
      features: [
      { name: "Admin đa tài khoản", desc: "Tài khoản nhóm với quyền theo vai trò." },
      { name: "Cửa hàng đa ngôn ngữ", desc: "Ngôn ngữ front/back-office và đổi tiền tệ." },
      { name: "Open API", desc: "API trưởng thành để mở rộng cửa hàng khi bạn tăng trưởng." },
      { name: "Chợ ứng dụng", desc: "App bên thứ ba mở rộng năng lực." },
      ],
    },
    {
      label: "Traffic trả phí",
      features: [
      { name: "Dịch vụ quản lý quảng cáo Meta", desc: "Chuyên gia được chứng nhận chạy chiến dịch Meta." },
      { name: "Dịch vụ quản lý quảng cáo Google", desc: "Từ search đến shopping ads để tăng reach thương hiệu." },
      { name: "Quảng cáo LINE", desc: "Tiếp cận nền tảng xã hội lớn nhất Đài Loan." },
      { name: "Theo dõi hiệu suất quảng cáo", desc: "ROI rõ trên từng đồng quảng cáo." },
      ],
    },
    {
      label: "Omnichannel",
      features: [
      { name: "Công cụ hội viên Smart OMO", desc: "Đăng ký hội viên offline và hướng dẫn mua để tăng doanh số OMO." },
      { name: "Tích hợp POS", desc: "Cửa hàng online + POS với tồn, đơn và hội viên trực tiếp." },
      { name: "Shopper App", desc: "Ra mắt app thương hiệu làm sâu trung thành." },
      { name: "BOPIS", desc: "Mua online, nhận tại cửa hàng cho mua sắm linh hoạt." },
      ],
    },
    {
      label: "Xuyên biên giới",
      features: [
      { name: "Nhiều ngôn ngữ", desc: "Địa phương hóa storefront và admin cho khách nước ngoài." },
      { name: "Đổi tiền tệ", desc: "Cho khách thanh toán bằng tiền tệ quen thuộc." },
      { name: "Thanh toán xuyên biên giới", desc: "Khách quốc tế có thể trả bằng thẻ (khả dụng tùy cấu hình cửa hàng)." },
      { name: "Cài đặt thuế", desc: "Quy tắc thuế theo vùng để tuân thủ." },
      ],
    },
  ],
}

const es: OnlineStoreFeaturesCopy = {
  title: "Funciones de tienda online simples y potentes",
  subtitle: "Crea, gestiona y escala el storefront de tu marca para un crecimiento de ingresos más fuerte.",
  ctaTitle: "Más de 600.000 comercios confían en ARVIX",
  cta: "Empieza la prueba gratis",
  sections: [
    {
      label: "Configuración de tienda",
      features: [
      { name: "Dominio personalizado y SSL", desc: "Usa tu propio dominio o compra uno nuevo. SSL gratuito en todo el sitio (HTTPS) mantiene los datos seguros." },
      { name: "SEO integrado", desc: "Campos SEO desde inicio hasta fichas de producto, más sitemaps automáticos para ganar tráfico." },
      { name: "Resumen de producto", desc: "Muestra puntos de venta clave bajo el nombre para que el comprador lo entienda al instante." },
      { name: "UI responsive", desc: "Cada tema es RWD y se adapta con claridad a todos los dispositivos." },
      { name: "Atributos ALT de imagen", desc: "Edita ALT en imágenes de producto y categoría para reforzar el SEO." },
      { name: "Módulos de tienda de una página", desc: "Crea hasta 10 tiendas de una página para presentar productos y subir la conversión." },
      { name: "Datos estructurados SEO", desc: "Genera automáticamente datos estructurados de producto para un mejor rastreo." },
      { name: "Storefronts ocultos", desc: "Crea páginas privadas y comparte enlaces con audiencias seleccionadas." },
      { name: "Blog", desc: "Publica posts con títulos, contenido, imágenes y SEO personalizados desde el admin." },
      { name: "Biblioteca de imágenes", desc: "Biblioteca por tienda con hasta 30.000 subidas para merchandising más rápido." },
      ],
    },
    {
      label: "Productos e inventario",
      features: [
      { name: "Creación de productos", desc: "Crea productos con fotos, variantes, stock y categorías para un seguimiento fácil." },
      { name: "Alertas de stock bajo", desc: "Recibe avisos cuando el stock baje para no interrumpir ventas." },
      { name: "Categorías multinivel", desc: "Categorías anidadas y orden personalizado para que encuentren productos rápido." },
      { name: "Gestión de inventario", desc: "Sigue la mercancía desde la recepción hasta la venta con visibilidad clara." },
      { name: "Publicación y venta programadas", desc: "Programa horarios de salida para que las campañas arranquen según el plan." },
      { name: "Recomendaciones de producto con IA PLUS", desc: "La IA recomienda los productos adecuados para subir AOV y conversión." },
      { name: "Complementos", desc: "Sugiere artículos relacionados en el checkout para aumentar el valor del pedido." },
      { name: "Regalos", desc: "Campañas de regalo por umbral que elevan el gasto y la satisfacción." },
      { name: "Productos ocultos", desc: "Restringe productos a audiencias seleccionadas — ideal para creators o miembros." },
      { name: "Variantes y preventas", desc: "Variantes flexibles más soporte de preventa." },
      { name: "Recompensas por reseñas", desc: "Impulsa reseñas con recompensas para generar confianza y engagement." },
      ],
    },
    {
      label: "Pagos y logística",
      features: [
      { name: "ARVIX Payments", desc: "Pago con tarjeta para pagos seguros de la tienda." },
      { name: "Entrega a domicilio", desc: "Envía con entrega a domicilio; tarifas y flujo los define el comercio." },
      { name: "Checkout seguro", desc: "Flujo de pago diseñado para reducir el riesgo de fraude." },
      { name: "Gestión de pedidos", desc: "Gestiona pedidos y estado de fulfillment en un solo lugar." },
      ],
    },
    {
      label: "Diseño de tienda",
      features: [
      { name: "Editor SHOP Builder", desc: "Arrastra y suelta texto y productos — sin código." },
      { name: "Temas por industria", desc: "53 temas de diseñadores listos por industria." },
      { name: "Layout Engine", desc: "Personalización HTML/CSS/JS opcional cuando la necesites." },
      { name: "Más de 15 módulos interactivos", desc: "Construye páginas responsive pulidas disponiendo módulos." },
      ],
    },
    {
      label: "Pedidos",
      features: [
      { name: "Tipos de pedido por color", desc: "Ve el estado del pedido de un vistazo con bloques de color." },
      { name: "Recordatorios de carrito abandonado", desc: "Empuja automáticamente checkouts incompletos para recuperar ventas." },
      { name: "Envíos divididos", desc: "Divide un pedido en varios envíos según necesites." },
      { name: "Exportaciones flexibles de pedidos", desc: "Exporta informes para finanzas y revisión de rendimiento." },
      { name: "Pedidos en nombre del cliente", desc: "Crea pedidos para clientes desde el admin." },
      { name: "Gestión de devoluciones", desc: "Flujo completo de devoluciones que genera confianza postcompra." },
      ],
    },
    {
      label: "Clientes",
      features: [
      { name: "CRM", desc: "Perfiles completos e historial de compra de cada comprador." },
      { name: "Niveles de membresía", desc: "Beneficios por nivel que cultivan clientes leales." },
      { name: "Etiquetas y notas", desc: "Etiqueta y anota para un outreach preciso y personal." },
      { name: "Segmentos RFIM", desc: "Modelo RFIM exclusivo con 9 segmentos inteligentes." },
      ],
    },
    {
      label: "Promociones",
      features: [
      { name: "Códigos de descuento", desc: "Varias campañas de códigos para ganar nuevos compradores." },
      { name: "Umbrales de gasto", desc: "Descuentos o regalos por umbral que suben el AOV." },
      { name: "Flash sales", desc: "Ventas con tiempo limitado que crean urgencia." },
      { name: "Promos omnicanal", desc: "Ofertas online/offline alineadas para una experiencia consistente." },
      ],
    },
    {
      label: "Marketing",
      features: [
      { name: "Integración de anuncios Meta", desc: "Tracking de Meta Pixel para que el gasto publicitario rinda más." },
      { name: "Integración de anuncios Google", desc: "Tracking de GA y anuncios para claridad de fuente y conversión." },
      { name: "Marketing LINE", desc: "Broadcasts de LINE OA que llegan a la audiencia correcta." },
      { name: "Email marketing", desc: "Emails del centro de difusión que impulsan la recompra." },
      ],
    },
    {
      label: "Analítica",
      features: [
      { name: "Centro Shoplytics", desc: "Gráficos de ventas, pedidos/stock, miembros, tráfico y campañas." },
      { name: "Insights de estrategia con IA", desc: "Datos first-party + IA para impulsar decisiones." },
      { name: "Dashboard de ops en vivo", desc: "Vistas, GMV, pedidos de hoy y más de un vistazo." },
      { name: "Datos omnicanal", desc: "Ventas online a offline en una sola vista." },
      ],
    },
    {
      label: "Operaciones",
      features: [
      { name: "Admin multicuenta", desc: "Cuentas de equipo con permisos por rol." },
      { name: "Tienda multiidioma", desc: "Idiomas de front/back-office y cambio de moneda." },
      { name: "Open API", desc: "APIs maduras para extender la tienda a medida que creces." },
      { name: "Marketplace de apps", desc: "Apps de terceros que amplían capacidades." },
      ],
    },
    {
      label: "Tráfico de pago",
      features: [
      { name: "Servicio gestionado de anuncios Meta", desc: "Especialistas certificados gestionan campañas Meta." },
      { name: "Servicio gestionado de anuncios Google", desc: "De search a shopping ads para más alcance de marca." },
      { name: "Anuncios LINE", desc: "Llega a la mayor plataforma social de Taiwán." },
      { name: "Seguimiento de rendimiento de anuncios", desc: "ROI claro en cada dólar publicitario." },
      ],
    },
    {
      label: "Omnicanal",
      features: [
      { name: "Herramientas de miembro Smart OMO", desc: "Inscribe miembros offline y guía compras para crecer en ventas OMO." },
      { name: "Integración POS", desc: "Tienda online + POS con stock, pedidos y miembros en vivo." },
      { name: "Shopper App", desc: "Lanza una app de marca que profundiza la lealtad." },
      { name: "BOPIS", desc: "Compra online, recoge en tienda para una compra flexible." },
      ],
    },
    {
      label: "Cross-border",
      features: [
      { name: "Varios idiomas", desc: "Localiza storefront y admin para compradores internacionales." },
      { name: "Cambio de moneda", desc: "Permite pagar en monedas familiares." },
      { name: "Pagos cross-border", desc: "Los compradores internacionales pueden pagar con tarjeta (disponibilidad según la configuración de la tienda)." },
      { name: "Ajustes fiscales", desc: "Reglas fiscales por región para el cumplimiento." },
      ],
    },
  ],
}

const pt: OnlineStoreFeaturesCopy = {
  title: "Recursos de loja online simples e poderosos",
  subtitle: "Crie, gerencie e escale o storefront da sua marca para um crescimento de receita mais forte.",
  ctaTitle: "Mais de 600.000 lojistas confiam na ARVIX",
  cta: "Começar teste grátis",
  sections: [
    {
      label: "Configuração da loja",
      features: [
      { name: "Domínio personalizado e SSL", desc: "Use seu próprio domínio ou compre um novo. SSL gratuito em todo o site (HTTPS) mantém os dados seguros." },
      { name: "SEO integrado", desc: "Campos de SEO da home às páginas de produto, mais sitemaps automáticos para ganhar tráfego." },
      { name: "Resumo do produto", desc: "Mostre pontos de venda principais sob o nome do produto para o cliente entender na hora." },
      { name: "UI responsiva", desc: "Todo tema é RWD e se adapta bem em qualquer dispositivo." },
      { name: "Atributos ALT de imagem", desc: "Edite ALT em imagens de produto e categoria para reforçar o SEO." },
      { name: "Módulos de loja de uma página", desc: "Crie até 10 lojas de uma página para apresentar produtos e aumentar a conversão." },
      { name: "Dados estruturados de SEO", desc: "Gere automaticamente dados estruturados de produto para melhor rastreamento." },
      { name: "Storefronts ocultos", desc: "Crie páginas privadas e compartilhe links com públicos selecionados." },
      { name: "Blog", desc: "Publique posts com títulos, conteúdo, imagens e SEO personalizados no admin." },
      { name: "Biblioteca de imagens", desc: "Biblioteca por loja com até 30.000 uploads para merchandising mais rápido." },
      ],
    },
    {
      label: "Produtos e estoque",
      features: [
      { name: "Criação de produtos", desc: "Crie produtos com fotos, variantes, estoque e categorias para acompanhamento fácil." },
      { name: "Alertas de estoque baixo", desc: "Receba avisos quando o estoque baixar para não interromper as vendas." },
      { name: "Categorias multinível", desc: "Categorias aninhadas e ordenação personalizada para encontrar produtos rápido." },
      { name: "Gestão de estoque", desc: "Acompanhe mercadorias da entrada à venda com visibilidade clara." },
      { name: "Publicação e venda agendadas", desc: "Agende horários de lançamento para campanhas saírem no plano." },
      { name: "Recomendações de produto com IA PLUS", desc: "A IA recomenda os produtos certos para elevar AOV e conversão." },
      { name: "Add-ons", desc: "Sugira itens relacionados no checkout para aumentar o valor do pedido." },
      { name: "Brindes", desc: "Campanhas de brinde por limiar que elevam gasto e satisfação." },
      { name: "Produtos ocultos", desc: "Restrinja produtos a públicos selecionados — ideal para creators ou membros." },
      { name: "Variantes e pré-vendas", desc: "Variantes flexíveis com suporte a pré-venda." },
      { name: "Recompensas por avaliações", desc: "Incentive avaliações com recompensas para gerar confiança e engajamento." },
      ],
    },
    {
      label: "Pagamentos e logística",
      features: [
      { name: "ARVIX Payments", desc: "Checkout com cartão para pagamentos seguros da loja." },
      { name: "Entrega em domicílio", desc: "Envie com entrega em domicílio; taxas e fluxo definidos pelo lojista." },
      { name: "Checkout seguro", desc: "Fluxo de pagamento desenhado para reduzir risco de fraude." },
      { name: "Gestão de pedidos", desc: "Gerencie pedidos e status de fulfillment em um só lugar." },
      ],
    },
    {
      label: "Design da loja",
      features: [
      { name: "Editor SHOP Builder", desc: "Arraste e solte texto e produtos — sem código." },
      { name: "Temas por setor", desc: "53 temas de designers prontos por setor." },
      { name: "Layout Engine", desc: "Personalização HTML/CSS/JS opcional quando precisar." },
      { name: "Mais de 15 módulos interativos", desc: "Monte páginas responsivas polidas organizando módulos." },
      ],
    },
    {
      label: "Pedidos",
      features: [
      { name: "Tipos de pedido por cor", desc: "Veja o status do pedido de relance com blocos de cor." },
      { name: "Lembretes de carrinho abandonado", desc: "Incentive automaticamente checkouts incompletos para recuperar vendas." },
      { name: "Envios divididos", desc: "Divida um pedido em vários envios conforme necessário." },
      { name: "Exportações flexíveis de pedidos", desc: "Exporte relatórios para finanças e revisão de desempenho." },
      { name: "Pedido em nome do cliente", desc: "Crie pedidos para clientes no admin." },
      { name: "Gestão de devoluções", desc: "Fluxo completo de devoluções que gera confiança pós-compra." },
      ],
    },
    {
      label: "Clientes",
      features: [
      { name: "CRM", desc: "Perfis completos e histórico de compra de cada comprador." },
      { name: "Níveis de associação", desc: "Benefícios por nível que cultivam clientes fiéis." },
      { name: "Tags e notas", desc: "Marque e anote para outreach preciso e pessoal." },
      { name: "Segmentos RFIM", desc: "Modelo RFIM exclusivo com 9 segmentos inteligentes." },
      ],
    },
    {
      label: "Promoções",
      features: [
      { name: "Códigos de desconto", desc: "Várias campanhas de códigos para conquistar novos compradores." },
      { name: "Limiares de gasto", desc: "Descontos ou brindes por limiar que elevam o AOV." },
      { name: "Flash sales", desc: "Vendas com tempo limitado que criam urgência." },
      { name: "Promos omnichannel", desc: "Ofertas online/offline alinhadas para uma experiência consistente." },
      ],
    },
    {
      label: "Marketing",
      features: [
      { name: "Integração de anúncios Meta", desc: "Tracking do Meta Pixel para o gasto em anúncios render mais." },
      { name: "Integração de anúncios Google", desc: "Tracking de GA e anúncios para clareza de fonte e conversão." },
      { name: "Marketing LINE", desc: "Broadcasts do LINE OA que alcançam o público certo." },
      { name: "Email marketing", desc: "Emails da central de broadcast que impulsionam a recompra." },
      ],
    },
    {
      label: "Analytics",
      features: [
      { name: "Centro Shoplytics", desc: "Gráficos de vendas, pedidos/estoque, membros, tráfego e campanhas." },
      { name: "Insights de estratégia com IA", desc: "Dados first-party + IA para impulsionar decisões." },
      { name: "Dashboard de ops ao vivo", desc: "Views, GMV, pedidos de hoje e mais de um olhar." },
      { name: "Dados omnichannel", desc: "Vendas online a offline em uma só visão." },
      ],
    },
    {
      label: "Operações",
      features: [
      { name: "Admin multi-conta", desc: "Contas de equipe com permissões por função." },
      { name: "Loja multilíngue", desc: "Idiomas de front/back-office e troca de moeda." },
      { name: "Open API", desc: "APIs maduras para estender a loja conforme você cresce." },
      { name: "Marketplace de apps", desc: "Apps de terceiros que ampliam capacidades." },
      ],
    },
    {
      label: "Tráfego pago",
      features: [
      { name: "Serviço gerenciado de anúncios Meta", desc: "Especialistas certificados gerenciam campanhas Meta." },
      { name: "Serviço gerenciado de anúncios Google", desc: "De search a shopping ads para mais alcance de marca." },
      { name: "Anúncios LINE", desc: "Alcance a maior plataforma social de Taiwan." },
      { name: "Acompanhamento de desempenho de anúncios", desc: "ROI claro em cada dólar de anúncio." },
      ],
    },
    {
      label: "Omnichannel",
      features: [
      { name: "Ferramentas de membro Smart OMO", desc: "Cadastre membros offline e guie compras para crescer vendas OMO." },
      { name: "Integração POS", desc: "Loja online + POS com estoque, pedidos e membros ao vivo." },
      { name: "Shopper App", desc: "Lance um app da marca que aprofunda a fidelidade." },
      { name: "BOPIS", desc: "Compre online, retire na loja para compra flexível." },
      ],
    },
    {
      label: "Cross-border",
      features: [
      { name: "Vários idiomas", desc: "Localize storefront e admin para compradores internacionais." },
      { name: "Troca de moeda", desc: "Permita pagar em moedas familiares." },
      { name: "Pagamentos cross-border", desc: "Compradores internacionais podem pagar com cartão (disponibilidade depende da configuração da loja)." },
      { name: "Configurações fiscais", desc: "Regras fiscais por região para conformidade." },
      ],
    },
  ],
}

const de: OnlineStoreFeaturesCopy = {
  title: "Einfache, leistungsstarke Online-Shop-Funktionen",
  subtitle: "Erstellen, verwalten und skalieren Sie Ihren Marken-Storefront für stärkeres Umsatzwachstum.",
  ctaTitle: "Über 600.000 Händler weltweit vertrauen ARVIX",
  cta: "Kostenlos testen",
  sections: [
    {
      label: "Shop-Einrichtung",
      features: [
      { name: "Eigene Domain & SSL", desc: "Nutzen Sie Ihre eigene Domain oder kaufen Sie eine neue. Kostenloses siteweites SSL (HTTPS) schützt Daten." },
      { name: "Integriertes SEO", desc: "SEO-Felder von Start- bis Produktseiten plus Auto-Sitemaps für mehr Traffic." },
      { name: "Produktzusammenfassung", desc: "Zeigen Sie Kernverkaufspunkte unter dem Produktnamen, damit Käufer es sofort verstehen." },
      { name: "Responsives UI", desc: "Jedes Theme ist RWD-fähig und passt sich sauber an Geräte an." },
      { name: "Bild-ALT-Attribute", desc: "Bearbeiten Sie ALT bei Produkt- und Kategoriebildern zur SEO-Stärkung." },
      { name: "One-Page-Shop-Module", desc: "Erstellen Sie bis zu 10 One-Page-Shops, um Produkte zu präsentieren und Conversion zu steigern." },
      { name: "SEO-Strukturdaten", desc: "Generieren Sie automatisch Produkt-Strukturdaten für besseres Crawling." },
      { name: "Versteckte Storefronts", desc: "Bauen Sie private Storefront-Seiten und teilen Sie Links mit ausgewählten Zielgruppen." },
      { name: "Blog", desc: "Veröffentlichen Sie Beiträge mit eigenen Titeln, Inhalten, Bildern und SEO im Admin." },
      { name: "Bildbibliothek", desc: "Shop-eigene Bibliothek mit bis zu 30.000 Uploads für schnelleres Merchandising." },
      ],
    },
    {
      label: "Produkte & Bestand",
      features: [
      { name: "Produktanlage", desc: "Legen Sie Produkte mit Fotos, Varianten, Bestand und Kategorien an — leicht nachverfolgbar." },
      { name: "Niedrigbestands-Alerts", desc: "Werden Sie benachrichtigt, wenn der Bestand knapp wird, damit Verkäufe nicht unterbrochen werden." },
      { name: "Mehrstufige Kategorien", desc: "Verschachtelte Kategorien und eigene Sortierung, damit Käufer Produkte schnell finden." },
      { name: "Bestandsverwaltung", desc: "Verfolgen Sie Ware vom Wareneingang bis zum Verkauf mit klarer Sichtbarkeit." },
      { name: "Geplante Veröffentlichung & Verkauf", desc: "Planen Sie Go-live-Zeiten, damit Kampagnen planmäßig starten." },
      { name: "KI-Produktempfehlungen PLUS", desc: "KI empfiehlt die richtigen Produkte, um AOV und Conversion zu steigern." },
      { name: "Add-ons", desc: "Schlagen Sie verwandte Artikel im Checkout vor, um den Bestellwert zu erhöhen." },
      { name: "Geschenke", desc: "Schwellen-Geschenkaktionen, die Ausgaben und Zufriedenheit steigern." },
      { name: "Versteckte Produkte", desc: "Beschränken Sie Produkte auf ausgewählte Zielgruppen — ideal für Creator oder Mitglieder." },
      { name: "Varianten & Vorbestellungen", desc: "Flexible Varianten plus Vorbestellungs-Support." },
      { name: "Bewertungsbelohnungen", desc: "Fördern Sie Bewertungen mit Belohnungen für Vertrauen und Engagement." },
      ],
    },
    {
      label: "Zahlungen & Logistik",
      features: [
      { name: "ARVIX Payments", desc: "Kartencheckout für sichere Shop-Zahlungen." },
      { name: "Lieferung nach Hause", desc: "Versand per Hauslieferung; Gebühren und Ablauf legt der Händler fest." },
      { name: "Sicherer Checkout", desc: "Zahlungsablauf zur Reduktion von Betrugsrisiko." },
      { name: "Auftragsverwaltung", desc: "Verwalten Sie Aufträge und Fulfillment-Status an einem Ort." },
      ],
    },
    {
      label: "Shop-Design",
      features: [
      { name: "SHOP-Builder-Editor", desc: "Text und Produkte per Drag-and-drop — kein Code nötig." },
      { name: "Branchen-Themes", desc: "53 Designer-Themes sofort nutzbar nach Branche." },
      { name: "Layout Engine", desc: "Optionale HTML/CSS/JS-Anpassung bei Bedarf." },
      { name: "15+ interaktive Module", desc: "Bauen Sie polierte responsive Seiten durch Anordnen von Modulen." },
      ],
    },
    {
      label: "Bestellungen",
      features: [
      { name: "Farbcodierte Auftragstypen", desc: "Sehen Sie den Auftragsstatus auf einen Blick mit Farbblöcken." },
      { name: "Erinnerungen bei abgebrochenem Warenkorb", desc: "Erinnern Sie unvollständige Checkouts automatisch, um Umsatz zurückzuholen." },
      { name: "Geteilte Sendungen", desc: "Teilen Sie eine Bestellung bei Bedarf in mehrere Sendungen." },
      { name: "Flexible Auftragsexporte", desc: "Exportieren Sie Berichte für Finance und Performance-Review." },
      { name: "Stellvertretende Bestellung", desc: "Erstellen Sie Bestellungen für Kunden im Admin." },
      { name: "Retourenverwaltung", desc: "Vollständiger Retourenablauf, der Vertrauen nach dem Kauf aufbaut." },
      ],
    },
    {
      label: "Kunden",
      features: [
      { name: "CRM", desc: "Vollständige Profile und Kaufhistorie für jeden Shopper." },
      { name: "Mitgliedsstufen", desc: "Stufenbasierte Vorteile, die treue Kunden aufbauen." },
      { name: "Tags & Notizen", desc: "Taggen und annotieren für präzise, persönliche Ansprache." },
      { name: "RFIM-Segmente", desc: "Exklusives RFIM-Modell mit 9 smarten Segmenten." },
      ],
    },
    {
      label: "Aktionen",
      features: [
      { name: "Rabattcodes", desc: "Mehrere Code-Kampagnen, um neue Käufer zu gewinnen." },
      { name: "Ausgabenschwellen", desc: "Schwellen-Rabatte oder Geschenke, die den AOV heben." },
      { name: "Flash Sales", desc: "Zeitlich begrenzte Sales, die Dringlichkeit erzeugen." },
      { name: "Omnichannel-Promos", desc: "Abgestimmte Online-/Offline-Angebote für ein konsistentes Erlebnis." },
      ],
    },
    {
      label: "Marketing",
      features: [
      { name: "Meta-Ads-Integration", desc: "Meta-Pixel-Tracking, damit Werbeausgaben stärker wirken." },
      { name: "Google-Ads-Integration", desc: "GA- und Ad-Tracking für Klarheit bei Quelle und Conversion." },
      { name: "LINE-Marketing", desc: "LINE-OA-Broadcasts, die die richtige Zielgruppe erreichen." },
      { name: "E-Mail-Marketing", desc: "Broadcast-Center-E-Mails, die Wiederkäufe fördern." },
      ],
    },
    {
      label: "Analytics",
      features: [
      { name: "Shoplytics-Center", desc: "Charts zu Verkauf, Aufträgen/Bestand, Mitgliedern, Traffic und Kampagnen." },
      { name: "KI-Strategie-Insights", desc: "First-Party-Daten + KI für bessere Entscheidungen." },
      { name: "Live-Ops-Dashboard", desc: "Heutige Views, GMV, Aufträge und mehr auf einen Blick." },
      { name: "Omnichannel-Daten", desc: "Online-zu-Offline-Verkauf in einer Ansicht." },
      ],
    },
    {
      label: "Betrieb",
      features: [
      { name: "Multi-Account-Admin", desc: "Team-Konten mit rollenbasierten Berechtigungen." },
      { name: "Mehrsprachiger Shop", desc: "Front-/Backoffice-Sprachen und Währungswechsel." },
      { name: "Open API", desc: "Reife APIs, um den Shop mit dem Wachstum zu erweitern." },
      { name: "App-Marktplatz", desc: "Drittanbieter-Apps, die Fähigkeiten erweitern." },
      ],
    },
    {
      label: "Bezahlter Traffic",
      features: [
      { name: "Meta-Ads Managed Service", desc: "Zertifizierte Spezialisten steuern Meta-Kampagnen." },
      { name: "Google-Ads Managed Service", desc: "Von Search- bis Shopping-Ads für mehr Markenreichweite." },
      { name: "LINE Ads", desc: "Erreichen Sie Taiwans größte Social-Plattform." },
      { name: "Ad-Performance-Tracking", desc: "Klarer ROI auf jedem Werbedollar." },
      ],
    },
    {
      label: "Omnichannel",
      features: [
      { name: "Smart-OMO-Mitgliedertools", desc: "Offline-Mitglieder anmelden und Käufe leiten, um OMO-Umsatz zu steigern." },
      { name: "POS-Integration", desc: "Online-Shop + POS mit Live-Bestand, Aufträgen und Mitgliedern." },
      { name: "Shopper App", desc: "Starten Sie eine Marken-App, die Loyalität vertieft." },
      { name: "BOPIS", desc: "Online kaufen, in der Filiale abholen — flexibles Shopping." },
      ],
    },
    {
      label: "Cross-Border",
      features: [
      { name: "Mehrere Sprachen", desc: "Lokalisieren Sie Storefront und Admin für internationale Shopper." },
      { name: "Währungswechsel", desc: "Lassen Sie Shopper in vertrauten Währungen zahlen." },
      { name: "Cross-Border-Zahlungen", desc: "Internationale Shopper können per Karte zahlen (Verfügbarkeit abhängig von der Shop-Einrichtung)." },
      { name: "Steuereinstellungen", desc: "Regionsbezogene Steuerregeln für Compliance." },
      ],
    },
  ],
}

const fr: OnlineStoreFeaturesCopy = {
  title: "Fonctions de boutique en ligne simples et puissantes",
  subtitle: "Créez, gérez et développez le storefront de votre marque pour une croissance du chiffre d’affaires plus forte.",
  ctaTitle: "Plus de 600 000 marchands font confiance à ARVIX",
  cta: "Démarrer l’essai gratuit",
  sections: [
    {
      label: "Configuration de boutique",
      features: [
      { name: "Domaine personnalisé & SSL", desc: "Utilisez votre propre domaine ou achetez-en un nouveau. SSL gratuit sur tout le site (HTTPS) sécurise les données." },
      { name: "SEO intégré", desc: "Champs SEO de l’accueil aux pages produit, plus sitemaps auto pour gagner du trafic." },
      { name: "Résumé produit", desc: "Affichez les points de vente clés sous le nom du produit pour une compréhension immédiate." },
      { name: "UI responsive", desc: "Chaque thème est RWD et s’adapte proprement à tous les appareils." },
      { name: "Attributs ALT d’image", desc: "Modifiez l’ALT sur les images produit et catégorie pour renforcer le SEO." },
      { name: "Modules boutique une page", desc: "Créez jusqu’à 10 boutiques une page pour présenter les produits et booster la conversion." },
      { name: "Données structurées SEO", desc: "Générez automatiquement des données structurées produit pour un meilleur crawl." },
      { name: "Storefronts masqués", desc: "Créez des pages privées et partagez les liens avec des audiences sélectionnées." },
      { name: "Blog", desc: "Publiez des articles avec titres, contenus, images et SEO personnalisés depuis l’admin." },
      { name: "Bibliothèque d’images", desc: "Bibliothèque par boutique jusqu’à 30 000 envois pour un merchandising plus rapide." },
      ],
    },
    {
      label: "Produits & stock",
      features: [
      { name: "Création de produits", desc: "Créez des produits avec photos, variantes, stock et catégories pour un suivi facile." },
      { name: "Alertes stock bas", desc: "Soyez notifié quand le stock baisse pour ne pas interrompre les ventes." },
      { name: "Catégories multi-niveaux", desc: "Catégories imbriquées et tri personnalisé pour trouver les produits vite." },
      { name: "Gestion des stocks", desc: "Suivez les marchandises de la réception à la vente avec une visibilité claire." },
      { name: "Publication & vente planifiées", desc: "Planifiez les horaires de mise en ligne pour des campagnes au rythme prévu." },
      { name: "Recommandations produit IA PLUS", desc: "L’IA recommande les bons produits pour augmenter AOV et conversion." },
      { name: "Add-ons", desc: "Suggérez des articles liés au checkout pour augmenter la valeur de commande." },
      { name: "Cadeaux", desc: "Campagnes cadeaux par seuil qui augmentent dépense et satisfaction." },
      { name: "Produits masqués", desc: "Restreignez les produits à des audiences sélectionnées — idéal pour créateurs ou membres." },
      { name: "Variantes & précommandes", desc: "Variantes flexibles plus support de précommande." },
      { name: "Récompenses d’avis", desc: "Encouragez les avis avec des récompenses pour bâtir confiance et engagement." },
      ],
    },
    {
      label: "Paiements & logistique",
      features: [
      { name: "ARVIX Payments", desc: "Paiement par carte pour des paiements boutique sécurisés." },
      { name: "Livraison à domicile", desc: "Expédiez en livraison à domicile ; frais et flux définis par le marchand." },
      { name: "Checkout sécurisé", desc: "Parcours de paiement conçu pour réduire le risque de fraude." },
      { name: "Gestion des commandes", desc: "Gérez commandes et statut de fulfillment au même endroit." },
      ],
    },
    {
      label: "Design de boutique",
      features: [
      { name: "Éditeur SHOP Builder", desc: "Glissez-déposez texte et produits — sans code." },
      { name: "Thèmes par secteur", desc: "53 thèmes designers prêts à l’emploi par secteur." },
      { name: "Layout Engine", desc: "Personnalisation HTML/CSS/JS optionnelle quand vous en avez besoin." },
      { name: "15+ modules interactifs", desc: "Construisez des pages responsive soignées en arrangant des modules." },
      ],
    },
    {
      label: "Commandes",
      features: [
      { name: "Types de commande colorés", desc: "Voyez le statut de commande d’un coup d’œil avec des blocs de couleur." },
      { name: "Rappels de panier abandonné", desc: "Relancez automatiquement les checkouts incomplets pour récupérer des ventes." },
      { name: "Expéditions fractionnées", desc: "Divisez une commande en plusieurs envois selon le besoin." },
      { name: "Exports de commandes flexibles", desc: "Exportez des rapports pour la finance et la revue de performance." },
      { name: "Commande pour le client", desc: "Créez des commandes pour les clients depuis l’admin." },
      { name: "Gestion des retours", desc: "Parcours de retours complet qui renforce la confiance après achat." },
      ],
    },
    {
      label: "Clients",
      features: [
      { name: "CRM", desc: "Profils complets et historique d’achat pour chaque acheteur." },
      { name: "Niveaux d’adhésion", desc: "Avantages par niveau qui cultivent des clients fidèles." },
      { name: "Tags & notes", desc: "Taguez et annotez pour une approche précise et personnelle." },
      { name: "Segments RFIM", desc: "Modèle RFIM exclusif avec 9 segments intelligents." },
      ],
    },
    {
      label: "Promotions",
      features: [
      { name: "Codes promo", desc: "Plusieurs campagnes de codes pour gagner de nouveaux acheteurs." },
      { name: "Seuils de dépense", desc: "Remises ou cadeaux par seuil qui augmentent l’AOV." },
      { name: "Flash sales", desc: "Ventes limitées dans le temps qui créent l’urgence." },
      { name: "Promos omnicanales", desc: "Offres online/offline alignées pour une expérience cohérente." },
      ],
    },
    {
      label: "Marketing",
      features: [
      { name: "Intégration pubs Meta", desc: "Tracking Meta Pixel pour que le budget pub travaille plus fort." },
      { name: "Intégration pubs Google", desc: "Tracking GA et pubs pour une clarté source et conversion." },
      { name: "Marketing LINE", desc: "Broadcasts LINE OA qui atteignent la bonne audience." },
      { name: "Email marketing", desc: "Emails du centre de diffusion qui stimulent le rachat." },
      ],
    },
    {
      label: "Analytics",
      features: [
      { name: "Centre Shoplytics", desc: "Graphiques sur ventes, commandes/stock, membres, trafic et campagnes." },
      { name: "Insights stratégie IA", desc: "Données first-party + IA pour guider les décisions." },
      { name: "Tableau de bord ops en direct", desc: "Vues, GMV, commandes du jour et plus d’un coup d’œil." },
      { name: "Données omnicanales", desc: "Ventes online à offline dans une seule vue." },
      ],
    },
    {
      label: "Opérations",
      features: [
      { name: "Admin multi-comptes", desc: "Comptes d’équipe avec permissions par rôle." },
      { name: "Boutique multilingue", desc: "Langues front/back-office et changement de devise." },
      { name: "Open API", desc: "APIs matures pour étendre la boutique à mesure que vous grandissez." },
      { name: "Marketplace d’apps", desc: "Apps tierces qui élargissent les capacités." },
      ],
    },
    {
      label: "Trafic payant",
      features: [
      { name: "Service géré pubs Meta", desc: "Des spécialistes certifiés pilotent les campagnes Meta." },
      { name: "Service géré pubs Google", desc: "Du search aux shopping ads pour plus de portée de marque." },
      { name: "Pubs LINE", desc: "Touchez la plus grande plateforme sociale de Taïwan." },
      { name: "Suivi de performance pub", desc: "ROI clair sur chaque dollar publicitaire." },
      ],
    },
    {
      label: "Omnicanal",
      features: [
      { name: "Outils membres Smart OMO", desc: "Inscrivez des membres offline et guidez les achats pour faire croître les ventes OMO." },
      { name: "Intégration POS", desc: "Boutique en ligne + POS avec stock, commandes et membres en direct." },
      { name: "Shopper App", desc: "Lancez une app de marque qui approfondit la fidélité." },
      { name: "BOPIS", desc: "Achetez en ligne, retirez en magasin pour un shopping flexible." },
      ],
    },
    {
      label: "Cross-border",
      features: [
      { name: "Plusieurs langues", desc: "Localisez storefront et admin pour les acheteurs internationaux." },
      { name: "Changement de devise", desc: "Laissez les acheteurs payer dans des devises familières." },
      { name: "Paiements cross-border", desc: "Les acheteurs internationaux peuvent payer par carte (disponibilité selon la configuration de la boutique)." },
      { name: "Paramètres fiscaux", desc: "Règles fiscales par région pour la conformité." },
      ],
    },
  ],
}

const copy: Partial<Record<Locale, OnlineStoreFeaturesCopy>> & { 'zh-TW': OnlineStoreFeaturesCopy; en: OnlineStoreFeaturesCopy } = {
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
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
