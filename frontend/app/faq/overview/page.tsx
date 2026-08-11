'use client'
import { useState } from 'react'

const faqCategories = [
  {
    title: '關於 ARVIX',
    desc: '對於 ARVIX 的公司簡介、服務簡介、如何使用 ARVIX 系統等說明',
    faqs: [
      { q: 'ARVIX 提供什麼服務？', a: 'ARVIX 提供全方位零售解決方案，包含網路商店、社群購物、POS 系統、行銷工具、數據分析等，協助品牌實現 OMO 全通路整合。' },
      { q: 'ARVIX 在哪些地區提供服務？', a: 'ARVIX 目前在台灣、香港、馬來西亞、新加坡等地提供服務，全球超過 600,000 個商家使用。' },
    ],
  },
  {
    title: '如何開始建立商店',
    desc: '如何透過 ARVIX 建立網路商店？網站該怎麼架設？如何賣給消費者？有任何使用限制嗎？',
    faqs: [
      { q: '如何開始建立商店？', a: '只需點擊「免費試用」，填寫基本資料後即可立即開始建立你的網路商店，無需信用卡，14 天免費試用。' },
      { q: '建立商店需要具備技術知識嗎？', a: '不需要！ARVIX 提供直覺化的後台介面，即使沒有技術背景也能輕鬆建立專業的品牌網店。' },
    ],
  },
  {
    title: '金、物流服務',
    desc: 'ARVIX 提供哪些金流、物流服務？我可以提供哪些付款、送貨方式給顧客呢？',
    faqs: [
      { q: '支援哪些金流方式？', a: 'ARVIX Payments 支援信用卡、ATM 轉帳、Apple Pay、Google Pay、LINE Pay、街口支付等多種支付方式。' },
      { q: '支援哪些物流方式？', a: '整合黑貓宅急便、7-11 超商取貨、全家便利商店、郵局等主流物流商，也支援自訂物流方式。' },
    ],
  },
  {
    title: '方案及付款說明',
    desc: 'ARVIX 如何收費？有哪些方案？申請使用及簽約流程為何？',
    faqs: [
      { q: '有哪些方案可以選擇？', a: 'ARVIX 提供網店探索者、電商戰略家、OMO 大師、全通路領航員四種方案，依據商家需求提供不同功能組合，詳情請參考方案費用頁面。' },
      { q: '可以隨時升級或降級方案嗎？', a: '可以！你可以隨時在後台調整方案，升級立即生效，降級則於下個計費週期生效。' },
    ],
  },
  {
    title: '功能特色說明',
    desc: 'ARVIX 的架站系統提供哪些功能？有客製化的服務嗎？可以設定哪些優惠活動？',
    faqs: [
      { q: '什麼是 OMO 全通路整合？', a: 'OMO（Online Merge Offline）是將線上與線下通路整合的零售模式，讓消費者享有無縫的購物體驗，同時讓商家統一管理所有通路的訂單、庫存與會員資料。' },
      { q: 'Shoplytics 數據分析有什麼功能？', a: 'Shoplytics 提供人、貨、場三大維度的數據分析，包含消費者行為分析、商品銷售分析、通路效益分析，並搭載 AI 洞察功能提供可執行的行銷建議。' },
    ],
  },
  {
    title: '社群購物系統服務',
    desc: '社群購物系統提供哪些功能？適合哪種賣家使用？可以串接社群直播嗎？',
    faqs: [
      { q: '社群購物支援哪些平台？', a: '支援 Facebook、Instagram、LINE 等主流社群平台，可直接在直播或貼文中完成購物流程。' },
      { q: '什麼是 Instagram Live 購物？', a: '透過 ARVIX 社群購物系統，商家可在 Instagram 直播時即時接收訂單，消費者只需留言即可完成購買。' },
    ],
  },
  {
    title: 'POS 系統服務',
    desc: 'ARVIX POS 有提供結帳及進銷存的管理功能嗎？適合哪種商店使用？需要哪些設備？',
    faqs: [
      { q: 'ARVIX POS 支援哪些硬體？', a: '支援收銀機、條碼掃描器、收據印表機、客戶顯示器等多種週邊硬體，也可搭配 iPad 使用。' },
      { q: 'POS 系統可以與網路商店同步嗎？', a: '可以！ARVIX POS 與網路商店完全整合，庫存、訂單、會員資料即時同步，實現真正的 OMO 全通路管理。' },
    ],
  },
  {
    title: '數位廣告服務',
    desc: 'ARVIX 提供哪些廣告代操服務？如何購買廣告計畫方案？有額外的廣告相關服務？',
    faqs: [
      { q: 'ARVIX 提供廣告投放服務嗎？', a: '是的，ARVIX 提供 Facebook、Google、LINE 等平台的廣告投放服務，搭配 RFIM 分眾行銷工具，精準觸達目標客群。' },
    ],
  },
  {
    title: '附加服務',
    desc: '了解更多專業顧問支援、線上線下聚會、實戰課程、節慶行銷講座等資源介紹',
    faqs: [
      { q: 'ARVIX 有提供顧問服務嗎？', a: '有！ARVIX 提供一對一專業顧問諮詢服務，協助商家制定最適合的開店策略與行銷計劃。' },
      { q: '有哪些學習資源可以使用？', a: 'ARVIX 提供豐富的開店教學資源，包含知識庫文章、影片教學、線上講座及實體研討會等，幫助商家快速上手。' },
    ],
  },
  {
    title: '異業合作',
    desc: '我們歡迎各種合作提案，透過異業結盟，為雙方顧客甚至是企業本身，共創品牌雙贏！',
    faqs: [
      { q: '如何與 ARVIX 進行異業合作？', a: '歡迎透過官網聯絡我們，提交合作提案。ARVIX 歡迎各種形式的異業合作，包含技術整合、行銷合作、活動聯辦等。' },
    ],
  },
]

const resources = [
  { title: '網店設計攻略', desc: '學習如何打造吸睛的品牌網店' },
  { title: '品牌官網 SEO 全攻略', desc: '提升搜尋排名，帶來更多自然流量' },
  { title: '廣告新手投放攻略', desc: '從零開始學習數位廣告投放' },
  { title: '會員經營指南', desc: '建立忠實顧客群，提升回購率' },
]

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EEF0FF 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>ARVIX 新手問答</h1>
          <p className="text-lg" style={{ color: '#687280' }}>有更多疑問嗎？聯繫 ARVIX 團隊吧！讓我們知道你需要幫助，我們的團隊將盡力為你找到最佳的解決方案。</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-10" style={{ color: '#00142D' }}>常見問題</h2>
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xl font-black mb-1" style={{ color: '#00142D' }}>{cat.title}</h3>
                <p className="text-sm mb-5" style={{ color: '#687280' }}>{cat.desc}</p>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => {
                    const key = `${cat.title}-${faq.q}`
                    const isOpen = openItem === key
                    return (
                      <div key={faq.q} className="rounded-xl border border-gray-100 overflow-hidden">
                        <button className="w-full text-left p-5 flex items-center justify-between font-semibold hover:bg-gray-50 transition-colors"
                          style={{ color: '#00142D' }}
                          onClick={() => setOpenItem(isOpen ? null : key)}>
                          {faq.q}
                          <span className="ml-4 flex-shrink-0 text-lg" style={{ color: '#5B5FF0' }}>{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#687280' }}>
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-8" style={{ color: '#00142D' }}>新手資源</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <div key={r.title} className="p-6 bg-white rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF0FF' }}>
                  <span style={{ color: '#5B5FF0' }}>📄</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#00142D' }}>{r.title}</h3>
                  <p className="text-sm" style={{ color: '#687280' }}>{r.desc}</p>
                </div>
                <span className="ml-auto text-sm font-bold" style={{ color: '#5B5FF0' }}>立即下載</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">使用有疑問？ 歡迎與我們聯繫！</h2>
          <p className="text-white opacity-70 mb-8">服務時間 星期一至五 上午 10 點至晚上 7 點</p>
          <a href="/consultation" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            聯繫我們
          </a>
        </div>
      </section>
    </main>
  )
}
