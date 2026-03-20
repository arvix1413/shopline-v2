'use client'
import { useState } from 'react'

const templates = [
  { name: 'Dusk',            src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: ['自訂主題顏色', '自訂頁尾顏色', '自訂主題字型顏色'] },
  { name: 'Philia',          src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: ['自訂主題顏色', '自訂主題字型'] },
  { name: 'Varm',            src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: ['自訂主題顏色', '自訂頁尾顏色'] },
  { name: 'Skya',            src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: ['自訂主題顏色', '自訂背景顏色', '自訂主題字型顏色'] },
  { name: 'Sangria',         src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: ['自訂主題顏色', '自訂主題字型'] },
  { name: 'Bianco',          src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: ['自訂主題顏色', '自訂主題字型'] },
  { name: 'Doris Bien',      src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: ['自訂主題顏色'] },
  { name: 'Kingsman',        src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: ['自訂主題顏色', '自訂主題字型'] },
  { name: 'Ultra Chic',      src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: ['自訂主題顏色', '自訂背景顏色'] },
  { name: 'Basic',           src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: [] },
  { name: 'Nightfall',       src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: [] },
  { name: 'Paola',           src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: [] },
  { name: 'Ell',             src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: [] },
  { name: 'Fresh Urban',     src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: [] },
  { name: 'Hype',            src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: [] },
  { name: 'Studio',          src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: [] },
  { name: 'Gentleman',       src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: [] },
  { name: 'Lace',            src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: [] },
  { name: 'Mint',            src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: [] },
  { name: 'Lux Moss',        src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: [] },
  { name: 'Simple',          src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: [] },
  { name: 'Simple Patterns', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: [] },
  { name: 'Boxed Patterns',  src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: [] },
  { name: 'Rebel',           src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: [] },
  { name: 'Swanky',          src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: [] },
  { name: 'Slate',           src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',  tags: [] },
  { name: 'Chic',            src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',  tags: [] },
  { name: 'King',            src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80',  tags: [] },
  { name: 'Streetify',       src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',  tags: [] },
]

export default function TemplatesPage() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <main>
      {/* Hero */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#00142D' }}>多款風格版型主題設計</h1>
          <p className="text-lg mb-8" style={{ color: '#687280' }}>
            多樣化的設計樣式供你隨時套用，為你的品牌打造最合適的風格店面
          </p>
          <a href="/trial-redirect" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#356DFF' }}>
            免費試用版型
          </a>
        </div>
      </section>

      {/* Template Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {templates.map((t) => (
              <div key={t.name}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                onMouseEnter={() => setHovered(t.name)}
                onMouseLeave={() => setHovered(null)}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={t.src}
                    alt={`ARVIX 商店版型主題 ${t.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {hovered === t.name && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                      <a href="/trial-redirect" className="text-white font-bold px-6 py-2 rounded-full text-sm" style={{ backgroundColor: '#356DFF' }}>
                        預覽版型
                      </a>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#00142D' }}>{t.name}</h3>
                  {t.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {t.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#EBF1F8', color: '#356DFF' }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(270.52deg, rgb(0, 79, 209) 0%, rgb(37, 124, 255) 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-8">全球超過 600,000 商家已使用 ARVIX</h2>
          <a href="/trial-redirect" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#356DFF' }}>
            免費試用 14 天
          </a>
        </div>
      </section>
    </main>
  )
}
