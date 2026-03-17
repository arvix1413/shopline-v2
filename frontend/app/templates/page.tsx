'use client'

import { useState } from 'react'

const templates = [
  { name: '時尚極簡', category: '服飾', tag: '熱門' },
  { name: '美妝精品', category: '美妝保養', tag: '新上線' },
  { name: '美食饗宴', category: '食品飲料', tag: '' },
  { name: '科技前沿', category: '3C 電子', tag: '' },
  { name: '居家溫暖', category: '居家生活', tag: '熱門' },
  { name: '運動活力', category: '運動戶外', tag: '' },
  { name: '文創藝術', category: '文創禮品', tag: '新上線' },
  { name: '寵物樂園', category: '寵物用品', tag: '' },
]

function TemplateCard({ t }: { t: typeof templates[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="text-4xl">🖼️</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-sm" style={{ color: '#00142D' }}>{t.name}</h3>
          {t.tag && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#EBF1F8', color: '#356DFF' }}>{t.tag}</span>
          )}
        </div>
        <p className="text-xs" style={{ color: '#687280' }}>{t.category}</p>
        <button
          className="mt-3 w-full py-2 rounded-lg text-sm font-semibold transition-colors"
          style={{ border: '1px solid #356DFF', backgroundColor: hovered ? '#356DFF' : 'transparent', color: hovered ? 'white' : '#356DFF' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          預覽版型
        </button>
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <main>
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, #F2F7FC 0%, #EBF1F8 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>多款風格版型主題設計</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            多樣化的設計樣式供你隨時套用，為你的品牌打造最合適的風格店面
          </p>
          <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            免費試用版型
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((t) => <TemplateCard key={t.name} t={t} />)}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">全球超過 600,000 商家已使用 SHOPLINE</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            免費試用版型
          </a>
        </div>
      </section>
    </main>
  )
}
