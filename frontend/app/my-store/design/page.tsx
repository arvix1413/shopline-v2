'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../contexts/AuthContext'
import StoreLayoutView from '../../components/StoreLayoutView'
import ThemeMockPreview from '../../components/ThemeMockPreview'
import {
  TEMPLATES,
  TEMPLATE_TAG_LABELS,
  SECTION_LABELS,
  HERO_PRESETS,
  parseHeroImages,
  serializeHeroImages,
  buildLayoutFromTemplate,
  parseStoreLayout,
  moveSection,
  defaultProps,
  type StoreLayout,
  type StoreSection,
  type SectionType,
} from '../../../lib/storeLayout'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'
/** 設計預覽一律打線上商品庫，避免本機空庫／假資料害你以為商品被洗掉 */
const PRODUCT_API = 'https://shopline-backend.arvix1413.workers.dev'

const ADDABLE: SectionType[] = ['hero', 'products', 'richtext', 'features', 'cta']

type PreviewProduct = {
  id: number
  name: string
  price: number
  category?: string
  imageUrl?: string
  description?: string
}

type Mode = 'gallery' | 'editor'

export default function StoreDesignPage() {
  const { user, token, isLoading } = useAuth()
  const router = useRouter()
  const [storeName, setStoreName] = useState('我的商店')
  const [tagline, setTagline] = useState('')
  const [slug, setSlug] = useState('')
  const [products, setProducts] = useState<PreviewProduct[]>([])
  const [layout, setLayout] = useState<StoreLayout | null>(null)
  const [hadSavedLayout, setHadSavedLayout] = useState(false)
  const [mode, setMode] = useState<Mode>('gallery')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [canOperate, setCanOperate] = useState(true)
  const [category, setCategory] = useState('全部')
  const [panelOpen, setPanelOpen] = useState(true)
  const [dragFrom, setDragFrom] = useState<number | null>(null)

  useEffect(() => {
    if (isLoading) return
    if (!user || !token) {
      router.replace(`/login?next=${encodeURIComponent('/my-store/design' + (typeof window !== 'undefined' ? window.location.search : ''))}`)
      return
    }
    ;(async () => {
      setLoading(true)
      try {
        const storeRes = await fetch(`${API}/api/stores/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!storeRes.ok) throw new Error('請先完成註冊開店')
        const store = await storeRes.json()
        setStoreName(store.name || '我的商店')
        setTagline(store.tagline || '')
        setSlug(store.slug || '')
        setCanOperate(store.canOperate !== false)
        const saved = !!store.layout
        setHadSavedLayout(saved)
        const wantedTemplate =
          typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search).get('template') || ''
            : ''
        if (wantedTemplate && TEMPLATES.some((t) => t.id === wantedTemplate)) {
          const next = buildLayoutFromTemplate(wantedTemplate, store.name || '我的商店', store.tagline || '')
          setLayout(next)
          setSelectedId(next.sections[0]?.id || null)
          setMode('editor')
          setMsg(`已套用「${TEMPLATES.find((t) => t.id === wantedTemplate)?.name}」`)
        } else {
          const parsed = parseStoreLayout(store.layout, store.name, store.tagline || '')
          setLayout(parsed)
          setSelectedId(parsed.sections[0]?.id || null)
          setMode(saved ? 'editor' : 'gallery')
        }

        // 班尼斯帳號／店名一律抓線上 bennis 真實枕頭，避免本機假店害你以為資料沒了
        const email = String(user?.email || '')
        const isBennis =
          email.includes('bennis') ||
          String(store.slug || '').includes('bennis') ||
          String(store.name || '').includes('班尼斯')
        const productSlug = isBennis ? 'bennis' : store.slug
        if (productSlug) {
          const pub = await fetch(`${PRODUCT_API}/api/products?store=${encodeURIComponent(productSlug)}`)
          let list: any[] = pub.ok ? await pub.json() : []
          if (!Array.isArray(list)) list = []
          setProducts(list)
          if (isBennis) setSlug('bennis')
        }
      } catch (e: any) {
        setError(e.message || '載入失敗')
      } finally {
        setLoading(false)
      }
    })()
  }, [user, token, isLoading, router])

  const selected = layout?.sections.find((s) => s.id === selectedId) || null

  const pickTemplate = (templateId: string) => {
    const next = buildLayoutFromTemplate(templateId, storeName, tagline)
    setLayout(next)
    setSelectedId(next.sections[0]?.id || null)
    setMode('editor')
    setMsg(`已套用「${TEMPLATES.find((t) => t.id === templateId)?.name}」· 可直接在預覽上點區塊編輯`)
    setError('')
  }

  const updateProps = (key: string, value: string) => {
    if (!layout || !selected) return
    setLayout({
      ...layout,
      sections: layout.sections.map((s) =>
        s.id === selected.id ? { ...s, props: { ...s.props, [key]: value } } : s
      ),
    })
  }

  const updatePropsMany = (patch: Record<string, string>) => {
    if (!layout || !selected) return
    setLayout({
      ...layout,
      sections: layout.sections.map((s) =>
        s.id === selected.id ? { ...s, props: { ...s.props, ...patch } } : s
      ),
    })
  }

  const updateTheme = (key: keyof StoreLayout['theme'], value: string) => {
    if (!layout) return
    setLayout({ ...layout, theme: { ...layout.theme, [key]: value } })
  }

  const addSection = (type: SectionType) => {
    if (!layout) return
    const section: StoreSection = {
      id: `s_${Math.random().toString(36).slice(2, 10)}`,
      type,
      props: defaultProps(type, storeName, tagline),
    }
    setLayout({ ...layout, sections: [...layout.sections, section] })
    setSelectedId(section.id)
    setPanelOpen(true)
  }

  const removeSection = (id: string) => {
    if (!layout) return
    if (layout.sections.length <= 1) {
      setError('至少保留一個區塊')
      return
    }
    const sections = layout.sections.filter((s) => s.id !== id)
    setLayout({ ...layout, sections })
    setSelectedId(sections[0]?.id || null)
  }

  const save = async () => {
    if (!token || !layout) return
    setSaving(true)
    setMsg('')
    setError('')
    try {
      const res = await fetch(`${API}/api/stores/me/layout`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ layout }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '儲存失敗')
      setHadSavedLayout(true)
      setMsg('已發布到你的商店')
    } catch (e: any) {
      setError(e.message || '儲存失敗')
    } finally {
      setSaving(false)
    }
  }

  const previewScale = useMemo(() => 0.72, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0E0F16', color: '#fff' }}>
        <div className="text-sm text-white/50">載入設計器…</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0E0F16', color: '#F5F5F7' }}>
      {/* Top bar — like theme editor */}
      <header className="h-14 flex items-center justify-between gap-3 px-4 border-b shrink-0" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#151621' }}>
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/my-store" className="text-sm text-white/60 hover:text-white shrink-0">← 商店</Link>
          <div className="w-px h-4 bg-white/15" />
          <div className="min-w-0">
            <div className="text-sm font-bold truncate">{storeName}</div>
            <div className="text-[11px] text-white/40 truncate">
              {mode === 'gallery' ? '選擇主題模板' : '所見即所得編輯中'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {mode === 'editor' && (
            <button
              type="button"
              onClick={() => setMode('gallery')}
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              換模板
            </button>
          )}
          {slug && (
            <Link
              href={`/s/shop?slug=${encodeURIComponent(slug)}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              開真實店面
            </Link>
          )}
          <button
            type="button"
            disabled={saving || !canOperate || !layout || mode !== 'editor'}
            onClick={save}
            className="px-4 py-1.5 rounded-lg text-xs font-bold text-white disabled:opacity-40"
            style={{ background: '#5B5FF0' }}
          >
            {saving ? '發布中…' : '發布'}
          </button>
        </div>
      </header>

      {!canOperate && (
        <div className="px-4 py-2 text-sm text-center" style={{ background: '#3F1D1D', color: '#FECACA' }}>
          試用已結束，無法改版型。<Link href="/billing" className="underline font-bold ml-1">去開通</Link>
        </div>
      )}
      {(msg || error) && (
        <div className="px-4 py-2 text-sm text-center" style={{ background: error ? '#3F1D1D' : '#14352A', color: error ? '#FECACA' : '#A7F3D0' }}>
          {error || msg}
        </div>
      )}

      {mode === 'gallery' || !layout ? (
        <div className="flex-1 overflow-auto" style={{ background: '#FFFFFF', color: '#00142D' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="text-center mb-12 sm:mb-14">
              <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight" style={{ color: '#00142D' }}>
                多款風格版型主題設計
              </h1>
              <p className="text-sm sm:text-lg max-w-2xl mx-auto" style={{ color: '#687280' }}>
                共 {TEMPLATES.length} 款 ARVIX 主題，一鍵套用後可改文字、換主視覺、拖拉區塊排序。
              </p>
              {hadSavedLayout && (
                <button
                  type="button"
                  onClick={() => setMode('editor')}
                  className="mt-5 text-sm font-semibold underline"
                  style={{ color: '#5B5FF0' }}
                >
                  繼續編輯目前主題 →
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => pickTemplate(t.id)}
                  className="group text-left"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      aspectRatio: '4 / 5',
                      boxShadow: '0 12px 40px rgba(15, 23, 42, 0.12)',
                    }}
                  >
                    <ThemeMockPreview
                      template={t}
                      storeName={storeName || '我的商店'}
                      products={products}
                      className="absolute inset-0"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(0,20,45,0.42)' }}
                    >
                      <span
                        className="px-5 py-2.5 rounded-full text-sm font-bold text-white"
                        style={{ background: '#5B5FF0' }}
                      >
                        使用此主題
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 px-0.5">
                    <div className="font-bold text-base mb-2" style={{ color: '#00142D' }}>{t.name}</div>
                    {t.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {t.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded-full"
                            style={{ background: '#F1F5F9', color: '#64748B' }}
                          >
                            {TEMPLATE_TAG_LABELS[tag]}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 min-h-0 grid lg:grid-cols-[300px_1fr_280px]">
          {/* Left: vertical boxes to swap order — THIS is the drag */}
          <aside className="border-r overflow-auto" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#151621' }}>
            <div className="p-4">
              <div className="mb-3">
                <div className="text-sm font-black text-white">上下區塊排序</div>
                <div className="text-[12px] text-white/45 mt-1 leading-relaxed">
                  抓 ⠿ 拖上下＝對調框的位置。主視覺也可以拖到中間或下面，不是只能在最上面。
                </div>
              </div>

              <div className="space-y-2 mb-5">
                {layout.sections.map((section, index) => {
                  const active = selectedId === section.id
                  return (
                    <div
                      key={section.id}
                      draggable={canOperate}
                      onDragStart={(e) => {
                        e.dataTransfer.effectAllowed = 'move'
                        e.dataTransfer.setData('text/plain', String(index))
                        setDragFrom(index)
                      }}
                      onDragEnd={() => setDragFrom(null)}
                      onDragOver={(e) => {
                        e.preventDefault()
                        e.dataTransfer.dropEffect = 'move'
                      }}
                      onDrop={(e) => {
                        e.preventDefault()
                        const from = Number(e.dataTransfer.getData('text/plain'))
                        if (Number.isFinite(from)) {
                          setLayout({ ...layout, sections: moveSection(layout.sections, from, index) })
                        }
                        setDragFrom(null)
                      }}
                      onClick={() => {
                        setSelectedId(section.id)
                        setPanelOpen(true)
                      }}
                      className="rounded-xl px-2 py-2.5 flex items-center gap-2 cursor-grab active:cursor-grabbing select-none"
                      style={{
                        background: active ? 'rgba(91,95,240,0.22)' : dragFrom === index ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
                        border: active ? '2px solid #5B5FF0' : '1px solid rgba(255,255,255,0.12)',
                        opacity: dragFrom === index ? 0.55 : 1,
                      }}
                    >
                      <span className="text-white/50 text-lg px-1" title="按住拖曳上下換位">⠿</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-white/40">第 {index + 1} 框</div>
                        <div className="text-sm font-bold truncate">{SECTION_LABELS[section.type]}</div>
                        <div className="text-[11px] text-white/40 truncate">{section.props.title || '—'}</div>
                      </div>
                      <div className="flex flex-col gap-0.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          disabled={!canOperate || index === 0}
                          className="w-7 h-7 rounded text-sm font-bold disabled:opacity-25"
                          style={{ background: 'rgba(255,255,255,0.1)' }}
                          title="上移"
                          onClick={() => setLayout({ ...layout, sections: moveSection(layout.sections, index, index - 1) })}
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          disabled={!canOperate || index === layout.sections.length - 1}
                          className="w-7 h-7 rounded text-sm font-bold disabled:opacity-25"
                          style={{ background: 'rgba(255,255,255,0.1)' }}
                          title="下移"
                          onClick={() => setLayout({ ...layout, sections: moveSection(layout.sections, index, index + 1) })}
                        >
                          ↓
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="text-[11px] font-bold tracking-widest text-white/40 mb-2">加一個框</div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {ADDABLE.map((type) => (
                  <button
                    key={type}
                    type="button"
                    disabled={!canOperate}
                    onClick={() => addSection(type)}
                    className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg disabled:opacity-40"
                    style={{ background: 'rgba(91,95,240,0.2)', color: '#C7D2FE' }}
                  >
                    + {SECTION_LABELS[type]}
                  </button>
                ))}
              </div>

              <div className="text-[11px] font-bold tracking-widest text-white/40 mb-2">顏色</div>
              <label className="flex items-center justify-between text-xs mb-2 text-white/70">
                主色
                <input type="color" value={layout.theme.primary} onChange={(e) => updateTheme('primary', e.target.value)} />
              </label>
              <label className="flex items-center justify-between text-xs mb-2 text-white/70">
                背景
                <input type="color" value={layout.theme.background} onChange={(e) => updateTheme('background', e.target.value)} />
              </label>
              <label className="flex items-center justify-between text-xs text-white/70">
                文字
                <input type="color" value={layout.theme.text} onChange={(e) => updateTheme('text', e.target.value)} />
              </label>
            </div>
          </aside>

          {/* Center: live preview */}
          <div className="overflow-auto p-4 sm:p-6" style={{ background: '#0A0B10' }}>
            <div className="mx-auto" style={{ maxWidth: 980 }}>
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="text-xs text-white/40">
                  預覽用你店裡真實商品（目前 {products.length} 件）
                  {slug ? ` · ${slug}` : ''}
                </div>
                <button
                  type="button"
                  className="lg:hidden text-xs font-semibold px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  onClick={() => setPanelOpen((v) => !v)}
                >
                  {panelOpen ? '收合編輯' : '編輯文字'}
                </button>
              </div>
              <div
                className="rounded-xl overflow-hidden shadow-2xl origin-top"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  transform: `scale(${previewScale})`,
                  transformOrigin: 'top center',
                  width: `${100 / previewScale}%`,
                  marginLeft: `${-((100 / previewScale - 100) / 2)}%`,
                }}
              >
                <StoreLayoutView
                  layout={layout}
                  storeName={storeName}
                  products={products}
                  category={category}
                  onCategory={setCategory}
                  onSelectProduct={() => {}}
                  cartCount={0}
                  onOpenCart={() => {}}
                  editorMode
                  selectedSectionId={selectedId}
                  onSelectSection={(id) => {
                    setSelectedId(id)
                    setPanelOpen(true)
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: inspector */}
          <aside
            className={`border-l overflow-auto ${panelOpen ? 'block' : 'hidden'} lg:block`}
            style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#151621' }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] font-bold tracking-widest text-white/40">編輯區塊</div>
                {selected && (
                  <button type="button" className="text-[11px] text-red-300" onClick={() => removeSection(selected.id)}>
                    刪除此區塊
                  </button>
                )}
              </div>
              {!selected ? (
                <p className="text-sm text-white/40">點左邊的框，或點預覽裡的區塊開始改</p>
              ) : (
                <div className="space-y-3">
                  <div className="text-sm font-bold" style={{ color: '#A5B4FC' }}>
                    {SECTION_LABELS[selected.type]}
                  </div>
                  {selected.type === 'hero' && (
                    <div className="space-y-3 pb-2">
                      <div>
                        <div className="text-xs font-bold text-white/80">主視覺輪播圖</div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-1">
                          可放多張，店面会自動輪播。下面點圖＝加入輪播；已加入的可刪除、上下調順序。
                        </div>
                      </div>

                      {(() => {
                        const slides = parseHeroImages(selected.props)
                        const setSlides = (urls: string[]) => {
                          const next = urls.filter(Boolean)
                          updatePropsMany({
                            images: serializeHeroImages(next),
                            image: next[0] || '',
                          })
                        }
                        return (
                          <>
                            <div className="space-y-2">
                              {slides.length === 0 && (
                                <div className="text-[11px] text-white/35 py-2">還沒有圖，從下方選一张加入</div>
                              )}
                              {slides.map((url, i) => (
                                <div
                                  key={`${url}-${i}`}
                                  className="flex items-center gap-2 rounded-lg p-1.5"
                                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={url} alt="" className="w-14 h-10 rounded object-cover" />
                                  <div className="flex-1 text-[11px] text-white/50">第 {i + 1} 張</div>
                                  <button
                                    type="button"
                                    className="w-6 h-6 rounded text-xs disabled:opacity-30"
                                    style={{ background: 'rgba(255,255,255,0.1)' }}
                                    disabled={i === 0}
                                    onClick={() => {
                                      const next = [...slides]
                                      ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
                                      setSlides(next)
                                    }}
                                  >
                                    ↑
                                  </button>
                                  <button
                                    type="button"
                                    className="w-6 h-6 rounded text-xs disabled:opacity-30"
                                    style={{ background: 'rgba(255,255,255,0.1)' }}
                                    disabled={i === slides.length - 1}
                                    onClick={() => {
                                      const next = [...slides]
                                      ;[next[i + 1], next[i]] = [next[i], next[i + 1]]
                                      setSlides(next)
                                    }}
                                  >
                                    ↓
                                  </button>
                                  <button
                                    type="button"
                                    className="text-[11px] text-red-300 px-1"
                                    onClick={() => setSlides(slides.filter((_, j) => j !== i))}
                                  >
                                    刪
                                  </button>
                                </div>
                              ))}
                            </div>

                            <label className="flex items-center justify-between text-xs text-white/70">
                              幾秒換一张
                              <select
                                value={selected.props.carouselSec || '4'}
                                onChange={(e) => updateProps('carouselSec', e.target.value)}
                                className="ml-2 rounded px-2 py-1 text-white text-xs"
                                style={{ background: '#0E0F16', border: '1px solid rgba(255,255,255,0.15)' }}
                              >
                                <option value="3">3 秒</option>
                                <option value="4">4 秒</option>
                                <option value="5">5 秒</option>
                                <option value="6">6 秒</option>
                                <option value="8">8 秒</option>
                              </select>
                            </label>

                            <div className="text-[11px] font-bold text-white/50 pt-1">點圖加入輪播</div>
                            <div className="grid grid-cols-2 gap-2">
                              {HERO_PRESETS.filter((p) => p.url).map((preset) => (
                                <button
                                  key={preset.id}
                                  type="button"
                                  disabled={!canOperate}
                                  onClick={() => {
                                    if (slides.includes(preset.url)) return
                                    setSlides([...slides, preset.url])
                                  }}
                                  className="rounded-lg overflow-hidden text-left disabled:opacity-40"
                                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={preset.url} alt={preset.label} className="w-full h-14 object-cover" />
                                  <div className="px-1.5 py-1 text-[10px] text-white/70">+ {preset.label}</div>
                                </button>
                              ))}
                            </div>

                            <label className="block text-xs text-white/70">
                              <span className="mb-1.5 block">或貼圖片網址加入</span>
                              <input
                                defaultValue=""
                                key={slides.length}
                                placeholder="https://..."
                                disabled={!canOperate}
                                className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                                style={{ background: '#0E0F16', border: '1px solid rgba(255,255,255,0.1)' }}
                                onKeyDown={(e) => {
                                  if (e.key !== 'Enter') return
                                  const v = (e.target as HTMLInputElement).value.trim()
                                  if (!v) return
                                  setSlides([...slides, v])
                                  ;(e.target as HTMLInputElement).value = ''
                                }}
                              />
                              <span className="text-[10px] text-white/35 mt-1 block">貼完按 Enter 加入</span>
                            </label>
                          </>
                        )
                      })()}
                    </div>
                  )}
                  {Object.keys(selected.props)
                    .filter((key) => !(selected.type === 'hero' && (key === 'image' || key === 'images' || key === 'carouselSec')))
                    .map((key) => (
                      <label key={key} className="block text-xs text-white/70">
                        <span className="mb-1.5 block">{propLabel(key)}</span>
                        {key === 'body' || key === 'subtitle' ? (
                          <textarea
                            rows={key === 'body' ? 5 : 3}
                            value={selected.props[key] || ''}
                            onChange={(e) => updateProps(key, e.target.value)}
                            disabled={!canOperate}
                            className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                            style={{ background: '#0E0F16', border: '1px solid rgba(255,255,255,0.1)' }}
                          />
                        ) : (
                          <input
                            value={selected.props[key] || ''}
                            onChange={(e) => updateProps(key, e.target.value)}
                            disabled={!canOperate}
                            className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none"
                            style={{ background: '#0E0F16', border: '1px solid rgba(255,255,255,0.1)' }}
                          />
                        )}
                      </label>
                    ))}
                </div>
              )}

              <div className="mt-6 lg:hidden space-y-2">
                <div className="text-[11px] font-bold tracking-widest text-white/40 mb-2">新增區塊</div>
                {ADDABLE.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => addSection(type)}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    + {SECTION_LABELS[type]}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

function propLabel(key: string) {
  const map: Record<string, string> = {
    title: '標題',
    subtitle: '副標',
    cta: '按鈕文字',
    image: '主圖網址',
    body: '內文',
    button: '按鈕文字',
    item1: '特色 1',
    item2: '特色 2',
    item3: '特色 3',
  }
  return map[key] || key
}
