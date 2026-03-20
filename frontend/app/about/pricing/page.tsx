'use client'
import { useState } from 'react'

const plans = [
  {
    name: '網店探索者',
    price: 'NT$990',
    period: '/月',
    desc: '適合剛起步的品牌，快速建立網路商店',
    features: ['網路商店', '無限商品上架', '基本版型主題', '訂單管理', '基本客服支援', 'SSL 安全憑證'],
    cta: '免費試用',
    popular: false,
    color: '#356DFF',
  },
  {
    name: '電商戰略家',
    price: 'NT$1,990',
    period: '/月',
    desc: '適合成長中的品牌，強化行銷與數據能力',
    features: ['網店探索者全部功能', '社群購物', '分眾行銷 RFIM', 'Shoplytics 數據分析', '優先客服支援', '多語言商店'],
    cta: '免費試用',
    popular: true,
    color: '#356DFF',
  },
  {
    name: 'OMO 大師',
    price: 'NT$3,990',
    period: '/月',
    desc: '適合線上線下整合的品牌，實現全通路零售',
    features: ['電商戰略家全部功能', 'POS 零售系統', 'Smart OMO', '全通路庫存管理', '專屬顧問服務', 'API 串接'],
    cta: '免費試用',
    popular: false,
    color: '#356DFF',
  },
  {
    name: '全通路領航員',
    price: '聯繫我們',
    period: '',
    desc: '適合大型品牌，量身打造全通路解決方案',
    features: ['OMO 大師全部功能', 'Shopper App', '企業級 API', '專屬技術支援', '客製化開發', '多店管理'],
    cta: '預約諮詢',
    popular: false,
    color: '#00142D',
  },
]

const commonFeatures = [
  'SSL 安全憑證', '無限頻寬', '行動裝置優化', '多種金流選項',
  '物流整合', 'SEO 工具', '折扣碼管理', '24/7 系統監控',
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>
            選擇最適合你的方案
          </h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>立即開始免費試用，無需信用卡，14 天免費體驗所有功能</p>
          <div className="inline-flex rounded-full p-1 mb-8" style={{ backgroundColor: '#E5EAF0' }}>
            <button onClick={() => setBilling('monthly')} className="px-6 py-2 rounded-full text-sm font-bold transition-all"
              style={billing === 'monthly' ? { backgroundColor: '#356DFF', color: 'white' } : { color: '#687280' }}>
              月繳
            </button>
            <button onClick={() => setBilling('yearly')} className="px-6 py-2 rounded-full text-sm font-bold transition-all"
              style={billing === 'yearly' ? { backgroundColor: '#356DFF', color: 'white' } : { color: '#687280' }}>
              年繳 <span className="text-xs ml-1" style={{ color: billing === 'yearly' ? 'rgba(255,255,255,0.8)' : '#356DFF' }}>省 20%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl overflow-hidden flex flex-col ${plan.popular ? 'shadow-2xl ring-2 ring-blue-500' : 'border border-gray-100'}`}>
                {plan.popular && (
                  <div className="py-2 text-center text-sm font-bold text-white" style={{ backgroundColor: '#356DFF' }}>
                    最受歡迎
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-2" style={{ color: '#00142D' }}>{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#687280' }}>{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black" style={{ color: '#356DFF' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: '#687280' }}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: '#354253' }}>
                        <span className="text-green-500 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/trial-redirect" className="block text-center py-3 rounded-full font-bold transition-opacity hover:opacity-90"
                    style={plan.popular ? { backgroundColor: '#356DFF', color: 'white' } : { border: '2px solid #356DFF', color: '#356DFF' }}>
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-4 text-center" style={{ color: '#00142D' }}>ARVIX 限定方案</h2>
          <p className="text-center mb-8" style={{ color: '#687280' }}>所有方案均包含以下核心功能</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {commonFeatures.map((f) => (
              <div key={f} className="p-4 bg-white rounded-xl text-sm font-semibold text-center" style={{ color: '#354253' }}>
                ✓ {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 ARVIX</h2>
          <p className="text-white opacity-70 mb-8">立即開始，14 天免費試用</p>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            立即免費試用
          </a>
        </div>
      </section>
    </main>
  )
}
