'use client'

import { useState, useEffect, type ReactNode } from 'react'
import type { LayoutStyle, StoreLayout, StoreSection, StoreTheme } from '../../lib/storeLayout'
import { SECTION_LABELS, parseHeroImages, DEFAULT_STYLE } from '../../lib/storeLayout'
import { storeHomeUrl, storePageUrl, storeProductsUrl } from '../../lib/storefrontUrl'
import type { StorePage } from '../../lib/storePages'
import { useI18n } from '../../contexts/I18nContext'
import { locales, type Locale } from '../../lib/i18n'
import { getCheckoutCopy } from '../../lib/checkoutCopy'

const ALL_CATEGORY = '__all__'

type Product = {
  id: number
  name: string
  description?: string
  price: number
  imageUrl?: string
  category?: string
  stock?: number
}

function formatPrice(n: number) {
  return `NT$ ${Math.round(n).toLocaleString('zh-TW')}`
}

function parseListPrice(description?: string): number | null {
  if (!description) return null
  const m = description.match(/原價\s*NT\$?\s*([0-9,]+)/i)
  if (!m) return null
  const n = Number(m[1].replace(/,/g, ''))
  return Number.isFinite(n) ? n : null
}

function radiusPx(r: LayoutStyle['radius']) {
  if (r === 'lg') return 20
  if (r === 'sm') return 10
  return 0
}

function padY(d: LayoutStyle['density']) {
  if (d === 'tight') return '2.5rem'
  if (d === 'airy') return '5rem'
  return '3.5rem'
}

function contrastOn(primary: string, background: string) {
  // dark backgrounds → use dark text on primary buttons when primary is light
  const darkBg = ['#0', '#1', '#2'].some((c) => background.toLowerCase().startsWith(c) || background === '#020617' || background === '#052E16' || background === '#111111' || background === '#0A0A0A' || background === '#0B0F19')
  if (darkBg && (primary.startsWith('#F') || primary.startsWith('#f') || primary.startsWith('#E') || primary === '#FACC15' || primary === '#22C55E' || primary === '#F8FAFC')) {
    return background
  }
  return background
}

type Props = {
  layout: StoreLayout
  storeName: string
  /** When set, header nav uses real multi-page links. */
  storeSlug?: string
  pages?: StorePage[]
  products: Product[]
  category: string
  onCategory: (c: string) => void
  onSelectProduct: (p: Product) => void
  cartCount: number
  onOpenCart: () => void
  editorMode?: boolean
  selectedSectionId?: string | null
  onSelectSection?: (id: string) => void
  onReorderSection?: (from: number, to: number) => void
  /** Freeze interactions / carousel for gallery thumbnails */
  staticPreview?: boolean
  /** Hide homepage sections; chrome only (used on content pages). */
  chromeOnly?: boolean
  children?: ReactNode
}

export default function StoreLayoutView({
  layout,
  storeName,
  storeSlug,
  pages = [],
  products,
  category,
  onCategory,
  onSelectProduct,
  cartCount,
  onOpenCart,
  editorMode = false,
  selectedSectionId = null,
  onSelectSection,
  onReorderSection,
  staticPreview = false,
  chromeOnly = false,
  children,
}: Props) {
  const { locale, setLocale } = useI18n()
  const cx = getCheckoutCopy(locale)
  const { theme, sections } = layout
  const style = layout.style || DEFAULT_STYLE
  const categories = [ALL_CATEGORY, ...Array.from(new Set(products.map((p) => p.category).filter(Boolean) as string[]))]
  const visible = category === ALL_CATEGORY || category === '全部' || category === cx.allCategory
    ? products
    : products.filter((p) => p.category === category)
  const [dragFrom, setDragFrom] = useState<number | null>(null)
  const r = radiusPx(style.radius)
  const editing = editorMode && !staticPreview

  // Normalize legacy localized "all" values into sentinel
  useEffect(() => {
    if (category === '全部' || category === cx.allCategory) onCategory(ALL_CATEGORY)
  }, [category, cx.allCategory, onCategory])

  const headerBg =
    style.header === 'transparent' ? `${theme.background}cc` :
    style.header === 'underline' ? theme.background :
    theme.background

  return (
    <div style={{ background: theme.background, color: theme.text, fontFamily: `'${theme.font}', system-ui, sans-serif` }}>
      <header
        className="sticky top-0 z-30 backdrop-blur-md"
        style={{
          background: headerBg,
          borderBottom: style.header === 'underline' ? `2px solid ${theme.primary}` : `1px solid ${theme.text}14`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <div className="min-w-0">
            {storeSlug && !editing && !staticPreview ? (
              <a href={storeHomeUrl(storeSlug)} className="text-xl font-bold tracking-tight truncate block hover:opacity-80">
                {storeName}
              </a>
            ) : (
              <div className="text-xl font-bold tracking-tight truncate">{storeName}</div>
            )}
            <div className="text-[11px] tracking-wide" style={{ color: theme.muted }}>Powered by ARVIX</div>
          </div>
          <nav className="flex items-center gap-3 sm:gap-5 text-sm font-medium overflow-x-auto max-w-[55%] sm:max-w-none" style={{ color: theme.muted }}>
            {storeSlug && !editing && !staticPreview ? (
              <>
                <a href={storeHomeUrl(storeSlug)} className="hover:opacity-70 transition whitespace-nowrap">{cx.homeNav}</a>
                <a href={storeProductsUrl(storeSlug)} className="hover:opacity-70 transition whitespace-nowrap">{cx.productsNav}</a>
                {(pages.length
                  ? pages
                  : [{ key: 'about', title: cx.aboutNav, body: '', published: true }]
                )
                  .filter((p) => p.published)
                  .slice(0, 5)
                  .map((p) => (
                    <a key={p.key} href={storePageUrl(storeSlug, p.key)} className="hover:opacity-70 transition whitespace-nowrap">
                      {p.title}
                    </a>
                  ))}
              </>
            ) : (
              <>
                <a href="#products" className="hover:opacity-70 transition whitespace-nowrap" onClick={(e) => (editing || staticPreview) && e.preventDefault()}>{cx.productFallback}</a>
                <a href="#about" className="hover:opacity-70 transition whitespace-nowrap" onClick={(e) => (editing || staticPreview) && e.preventDefault()}>{cx.aboutNav}</a>
              </>
            )}
            {!editing && !staticPreview && (
              <select
                aria-label="Language"
                className="text-xs bg-transparent outline-none cursor-pointer max-w-[5.5rem]"
                style={{ color: theme.muted }}
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
              >
                {locales.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            )}
          </nav>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative text-sm font-semibold px-4 py-2 transition hover:opacity-90"
            style={{ background: theme.primary, color: contrastOn(theme.primary, theme.background), borderRadius: r }}
          >
            {cx.cart}{cartCount > 0 ? ` (${cartCount})` : ''}
          </button>
        </div>
      </header>

      {!chromeOnly && sections.map((section, index) => {
        const selected = editing && selectedSectionId === section.id
        return (
          <div
            key={section.id}
            draggable={editing}
            onDragStart={() => editing && setDragFrom(index)}
            onDragOver={(e) => editing && e.preventDefault()}
            onDrop={() => {
              if (!editing || dragFrom == null || !onReorderSection) return
              onReorderSection(dragFrom, index)
              setDragFrom(null)
            }}
            onClick={() => editing && onSelectSection?.(section.id)}
            className={editing ? 'relative cursor-pointer group' : undefined}
            style={
              selected
                ? { outline: '2px solid #5B5FF0', outlineOffset: -2, boxShadow: 'inset 0 0 0 9999px rgba(91,95,240,0.06)' }
                : undefined
            }
          >
            {editing && selected && (
              <div
                className="absolute left-3 top-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                style={{ background: '#5B5FF0' }}
              >
                編輯中 · {SECTION_LABELS[section.type] || section.type}
              </div>
            )}
            <SectionBlock
              section={section}
              theme={theme}
              style={style}
              products={visible}
              allCategories={categories}
              category={category}
              onCategory={staticPreview ? () => {} : onCategory}
              onSelectProduct={editing || staticPreview ? () => {} : onSelectProduct}
              staticPreview={staticPreview}
            />
          </div>
        )
      })}

      {children}

      <footer className="py-10 text-center text-xs" style={{ color: theme.muted, borderTop: `1px solid ${theme.text}12` }}>
        {storeSlug && !editing && !staticPreview && pages.filter((p) => p.published).length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4 text-sm">
            {pages.filter((p) => p.published).map((p) => (
              <a key={p.key} href={storePageUrl(storeSlug, p.key)} className="hover:opacity-70 transition">
                {p.title}
              </a>
            ))}
          </div>
        )}
        © {storeName} · Powered by ARVIX
      </footer>
    </div>
  )
}

function HeroCarousel({
  props,
  theme,
  style,
  staticPreview = false,
}: {
  props: Record<string, string>
  theme: StoreTheme
  style: LayoutStyle
  staticPreview?: boolean
}) {
  const images = parseHeroImages(props)
  const hasImage = images.length > 0
  const [idx, setIdx] = useState(0)
  const sec = Math.max(2, Number(props.carouselSec) || 4)
  const r = radiusPx(style.radius)

  useEffect(() => { setIdx(0) }, [props.images, props.image])
  useEffect(() => {
    if (staticPreview || images.length <= 1) return
    const t = window.setInterval(() => setIdx((i) => (i + 1) % images.length), sec * 1000)
    return () => window.clearInterval(t)
  }, [images.length, sec, props.images, props.image, staticPreview])

  const minH =
    style.heroStyle === 'banner' ? 'min(42vh, 380px)' :
    style.heroStyle === 'minimal' ? 'min(48vh, 420px)' :
    'min(72vh, 640px)'

  const textBlock = (
    <>
      <h1
        className="font-extrabold tracking-tight mb-4"
        style={{
          fontSize: style.heroStyle === 'minimal' ? 'clamp(2rem, 5vw, 3rem)' : 'clamp(2.4rem, 7vw, 4.2rem)',
          lineHeight: 1.05,
          maxWidth: style.heroStyle === 'split' ? '16ch' : '12ch',
          color: hasImage && style.heroStyle !== 'split' ? '#FAFBFA' : theme.text,
        }}
      >
        {props.title || '我的商店'}
      </h1>
      <p
        className="text-base md:text-lg mb-8"
        style={{
          color: hasImage && style.heroStyle !== 'split' ? 'rgba(250,251,250,0.88)' : theme.muted,
          maxWidth: 420,
          lineHeight: 1.65,
          textAlign: style.heroStyle === 'center' ? 'center' : 'left',
        }}
      >
        {props.subtitle}
      </p>
      <a
        href="#products"
        className="inline-block px-7 py-3 text-sm font-semibold w-fit"
        style={{
          background: hasImage && style.heroStyle !== 'split' ? '#FAFBFA' : theme.primary,
          color: hasImage && style.heroStyle !== 'split' ? '#111827' : contrastOn(theme.primary, theme.background),
          borderRadius: r,
          margin: style.heroStyle === 'center' ? '0 auto' : undefined,
        }}
      >
        {props.cta || '瀏覽商品'}
      </a>
      {images.length > 1 && (
        <div className={`flex items-center gap-2 mt-8 ${style.heroStyle === 'center' ? 'justify-center' : ''}`}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`第 ${i + 1} 張`}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 22 : 8,
                height: 8,
                background: i === idx ? (hasImage && style.heroStyle !== 'split' ? '#FAFBFA' : theme.primary) : 'rgba(150,150,150,0.45)',
              }}
            />
          ))}
        </div>
      )}
    </>
  )

  const slides = hasImage ? (
    <>
      {images.map((url, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${url}-${i}`}
          src={url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0" style={{ background: style.heroStyle === 'split' ? 'transparent' : 'linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.15))' }} />
    </>
  ) : (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(ellipse 70% 55% at 78% 18%, ${theme.primary}33, transparent 58%), linear-gradient(165deg, ${theme.background} 0%, ${theme.primary}18 100%)`,
      }}
    />
  )

  if (style.heroStyle === 'split') {
    return (
      <section className="grid md:grid-cols-2" style={{ minHeight: minH }}>
        <div className="relative order-2 md:order-1 overflow-hidden" style={{ minHeight: minH }}>{slides}</div>
        <div className="flex flex-col justify-center px-8 py-12 order-1 md:order-2" style={{ background: theme.background }}>
          {textBlock}
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden" style={{ minHeight: minH }}>
      {slides}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-5 flex flex-col ${style.heroStyle === 'center' ? 'items-center text-center justify-center' : 'justify-end'}`}
        style={{ minHeight: minH, paddingTop: '4rem', paddingBottom: '3rem' }}
      >
        {textBlock}
      </div>
    </section>
  )
}

function SectionBlock({
  section,
  theme,
  style,
  products,
  allCategories,
  category,
  onCategory,
  onSelectProduct,
  staticPreview = false,
}: {
  section: StoreSection
  theme: StoreTheme
  style: LayoutStyle
  products: Product[]
  allCategories: string[]
  category: string
  onCategory: (c: string) => void
  onSelectProduct: (p: Product) => void
  staticPreview?: boolean
}) {
  const { locale } = useI18n()
  const cx = getCheckoutCopy(locale)
  const p = section.props
  const r = radiusPx(style.radius)
  const py = padY(style.density)
  const cols =
    style.productCols === 2 ? 'grid-cols-2' :
    style.productCols === 4 ? 'grid-cols-2 lg:grid-cols-4' :
    'grid-cols-2 lg:grid-cols-3'

  if (section.type === 'hero') {
    return <HeroCarousel props={p} theme={theme} style={style} staticPreview={staticPreview} />
  }

  if (section.type === 'categories') {
    const items = [p.item1, p.item2, p.item3, p.item4].filter(Boolean)
    return (
      <section style={{ padding: `${py} 0`, background: `${theme.primary}10` }}>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-xl font-bold mb-6 text-center">{p.title || '熱門分類'}</h2>
          <div className={`grid gap-3 ${items.length >= 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'}`}>
            {items.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onCategory(item === '熱銷' || item === '新品' || item === '經典' || item === '限定' ? (allCategories.includes(item) ? item : ALL_CATEGORY) : item)}
                className="py-6 text-sm font-bold"
                style={{ background: theme.background, color: theme.text, borderRadius: r, border: `1px solid ${theme.text}14` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section.type === 'products') {
    return (
      <section id="products" style={{ padding: `${py} 0 4rem` }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">{p.title || cx.productFallback}</h2>
              <p className="text-sm" style={{ color: theme.muted }}>{p.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onCategory(c)}
                  className="px-3.5 py-1.5 text-xs font-semibold transition"
                  style={
                    category === c
                      ? { background: theme.primary, color: contrastOn(theme.primary, theme.background), borderRadius: r }
                      : { background: `${theme.text}0d`, color: theme.muted, borderRadius: r }
                  }
                >
                  {c === ALL_CATEGORY ? cx.allCategory : c}
                </button>
              ))}
            </div>
          </div>
          {products.length === 0 ? (
            <div className="py-16 text-center text-sm" style={{ color: theme.muted }}>{cx.noProducts}</div>
          ) : (
            <div className={`grid ${cols} gap-4 md:gap-6`}>
              {products.map((product) => {
                const list = parseListPrice(product.description)
                const cardStyle =
                  style.productStyle === 'card' ? { background: `${theme.text}08`, padding: 12, borderRadius: r } :
                  style.productStyle === 'lift' ? { boxShadow: `0 12px 30px ${theme.text}18`, borderRadius: r, overflow: 'hidden' as const, background: theme.background } :
                  style.productStyle === 'lined' ? { borderBottom: `1px solid ${theme.text}18`, paddingBottom: 16 } :
                  {}
                return (
                  <button key={product.id} type="button" onClick={() => onSelectProduct(product)} className="text-left group" style={cardStyle}>
                    <div className="overflow-hidden mb-3 aspect-[4/5]" style={{ background: `${theme.text}12`, borderRadius: style.productStyle === 'lift' ? 0 : r }}>
                      {product.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs" style={{ color: theme.muted }}>—</div>
                      )}
                    </div>
                    <div className="text-[11px] font-semibold tracking-wide mb-1" style={{ color: theme.primary }}>{product.category || cx.productFallback}</div>
                    <h3 className="text-sm font-semibold leading-snug mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-bold">{formatPrice(product.price)}</span>
                      {list && list > product.price && (
                        <span className="text-xs line-through" style={{ color: theme.muted }}>{formatPrice(list)}</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>
    )
  }

  if (section.type === 'richtext') {
    return (
      <section id="about" style={{ padding: `${py} 0` }}>
        <div className={`max-w-3xl mx-auto px-5 ${style.heroStyle === 'center' ? 'text-center' : 'text-center'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h2>
          <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: theme.muted }}>{p.body}</p>
        </div>
      </section>
    )
  }

  if (section.type === 'features') {
    const items = [p.item1, p.item2, p.item3].filter(Boolean)
    return (
      <section style={{ padding: `${py} 0`, background: `${theme.primary}10` }}>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-center mb-10">{p.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item} className="text-center p-6" style={{ background: theme.background, borderRadius: r }}>
                <div className="text-lg font-bold mb-1">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section.type === 'cta') {
    return (
      <section style={{ padding: `${py} 0` }}>
        <div
          className="max-w-4xl mx-auto px-5 text-center py-12"
          style={{
            background: theme.primary,
            color: contrastOn(theme.primary, theme.background),
            borderRadius: r || 24,
          }}
        >
          <h2 className="text-2xl md:text-3xl font-black mb-3">{p.title}</h2>
          <p className="mb-8 opacity-90">{p.subtitle}</p>
          <a
            href="#products"
            className="inline-block px-8 py-3 text-sm font-bold"
            style={{ background: theme.background, color: theme.text, borderRadius: r || 999 }}
          >
            {p.button || '查看商品'}
          </a>
        </div>
      </section>
    )
  }

  return null
}
