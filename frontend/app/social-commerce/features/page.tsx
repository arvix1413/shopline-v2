'use client';
import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  { label: '社群商店', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '直播購物', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80' },
  { label: '聊天購物', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '訊息整合中心', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80' },
  { label: '商品庫存管理', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '金物流串接', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '訂單管理', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '顧客管理', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '優惠活動', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '行銷推廣', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '數據分析', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '營運管理', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
  { label: '廣告導流', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80' },
];

export default function SocialCommerceFeaturesPage() {
  const [active, setActive] = useState(0);
  return (
    <main>
      <section className="py-20" style={{ background: 'linear-gradient(rgb(0, 87, 230) 0%, rgb(0, 65, 177) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
            高互動、快速導購！智慧社群購物系統
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>完整社群電商功能，從直播到聊天購物，全面提升社群轉換率。</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-56 flex-shrink-0">
            <div className="flex flex-col gap-1">
              {tabs.map((t, i) => (
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
            <Image src={tabs[active].img} alt={tabs[active].label} width={800} height={500} className="w-full h-auto rounded-2xl" unoptimized />
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
