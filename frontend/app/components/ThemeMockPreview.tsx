'use client'

import { useMemo } from 'react'
import type { TemplateMeta } from '../../lib/storeLayout'
import { buildLayoutFromTemplate } from '../../lib/storeLayout'
import StoreLayoutView from './StoreLayoutView'

type DemoProduct = {
  id: number
  name: string
  price: number
  category?: string
  imageUrl?: string
  description?: string
}

type Props = {
  template: TemplateMeta
  storeName?: string
  /** Pass the same products the editor will show — otherwise thumb ≠ applied */
  products?: DemoProduct[]
  className?: string
}

const DEMO_NAMES = ['經典商品', '熱銷款', '新品上市', '限量系列', '店長推薦', '人氣精選', '日常必備', '質感選物']

/** Same StoreLayoutView as after apply — scaled into the card. */
export default function ThemeMockPreview({ template, storeName = '示範商店', products: incoming, className }: Props) {
  const layout = useMemo(
    () => buildLayoutFromTemplate(template.id, storeName, template.desc),
    [template.id, template.desc, storeName],
  )

  const products = useMemo(() => {
    if (incoming && incoming.length > 0) {
      return incoming.slice(0, Math.max(6, template.style.productCols * 2))
    }
    const n = Math.max(6, template.style.productCols * 2)
    return Array.from({ length: n }).map((_, i) => ({
      id: i + 1,
      name: DEMO_NAMES[i % DEMO_NAMES.length],
      price: 890 + i * 120,
      category: i % 2 === 0 ? '熱銷' : '新品',
      imageUrl: template.preview,
      description: '',
    }))
  }, [incoming, template.preview, template.style.productCols])

  const frame = template.theme.accent || template.theme.primary

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(160deg, ${frame}55 0%, ${template.theme.background} 55%, ${template.theme.primary}22 100%)`,
        padding: '8% 7% 6%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        className="h-full w-full overflow-hidden relative"
        style={{
          borderRadius: 12,
          boxShadow: '0 18px 40px rgba(15,23,42,0.22)',
          background: template.theme.background,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-2.5 py-1.5"
          style={{ background: `${template.theme.text}0d`, borderBottom: `1px solid ${template.theme.text}12` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34D399' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 22,
            left: 0,
            width: 920,
            transform: 'scale(0.34)',
            transformOrigin: 'top left',
          }}
        >
          <StoreLayoutView
            layout={layout}
            storeName={storeName}
            products={products}
            category="全部"
            onCategory={() => {}}
            onSelectProduct={() => {}}
            cartCount={0}
            onOpenCart={() => {}}
            staticPreview
          />
        </div>
      </div>
    </div>
  )
}
