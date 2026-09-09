export type SectionType = 'hero' | 'products' | 'richtext' | 'cta' | 'features' | 'categories'

export type StoreTheme = {
  primary: string
  background: string
  text: string
  muted: string
  font: string
  accent?: string
}

/** Makes templates look structurally different (not just recolored). */
export type LayoutStyle = {
  heroStyle: 'full' | 'split' | 'center' | 'minimal' | 'banner'
  productCols: 2 | 3 | 4
  productStyle: 'grid' | 'card' | 'lift' | 'lined'
  radius: 'none' | 'sm' | 'lg'
  density: 'tight' | 'normal' | 'airy'
  header: 'solid' | 'transparent' | 'underline'
}

export type StoreSection = {
  id: string
  type: SectionType
  props: Record<string, string>
}

export type StoreLayout = {
  templateId: string
  theme: StoreTheme
  style: LayoutStyle
  sections: StoreSection[]
}

export type TemplateTag = 'themeColor' | 'footerColor' | 'fontColor' | 'font' | 'bgColor'

export type TemplateMeta = {
  id: string
  name: string
  desc: string
  preview: string
  theme: StoreTheme
  style: LayoutStyle
  sectionTypes: SectionType[]
  tags: TemplateTag[]
}

export const TEMPLATE_TAG_LABELS: Record<TemplateTag, string> = {
  themeColor: '自訂主題顏色',
  footerColor: '自訂頁尾顏色',
  fontColor: '自訂主題字型顏色',
  font: '自訂主題字型',
  bgColor: '自訂背景顏色',
}

export const SECTION_LABELS: Record<SectionType, string> = {
  hero: '主視覺 Hero',
  products: '商品列表',
  richtext: '品牌介紹',
  cta: '行動呼籲',
  features: '特色區塊',
  categories: '分類入口',
}

const PREVIEWS = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80',
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&q=80',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80',
]

function P(i: number) {
  return PREVIEWS[i % PREVIEWS.length]
}

/** ARVIX original store themes (layout presets). */
export const TEMPLATES: TemplateMeta[] = [
  { id: 'ember', name: 'Ember', desc: '暮色大圖・服飾精品', preview: P(0), theme: { primary: '#1F2937', background: '#F3F4F6', text: '#111827', muted: '#6B7280', font: 'Outfit', accent: '#9CA3AF' }, style: { heroStyle: 'full', productCols: 4, productStyle: 'grid', radius: 'none', density: 'airy', header: 'transparent' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'categories', 'products', 'richtext', 'cta'] },
  { id: 'bloom', name: 'Bloom', desc: '柔和字型・生活選物', preview: P(1), theme: { primary: '#BE185D', background: '#FFF1F2', text: '#881337', muted: '#9F1239', font: 'Georgia', accent: '#FB7185' }, style: { heroStyle: 'center', productCols: 3, productStyle: 'card', radius: 'lg', density: 'normal', header: 'solid' }, tags: ['themeColor', 'footerColor'], sectionTypes: ['hero', 'products', 'features', 'cta'] },
  { id: 'hearth', name: 'Hearth', desc: '暖色基調・家居溫暖', preview: P(2), theme: { primary: '#C2410C', background: '#FFF7ED', text: '#7C2D12', muted: '#9A3412', font: 'Outfit', accent: '#FB923C' }, style: { heroStyle: 'split', productCols: 3, productStyle: 'lift', radius: 'sm', density: 'normal', header: 'solid' }, tags: ['themeColor', 'bgColor', 'fontColor'], sectionTypes: ['hero', 'products', 'richtext', 'features', 'cta'] },
  { id: 'clearair', name: 'Clear Air', desc: '天空感留白・清新品牌', preview: P(3), theme: { primary: '#0284C7', background: '#F0F9FF', text: '#0C4A6E', muted: '#0369A1', font: 'Outfit', accent: '#38BDF8' }, style: { heroStyle: 'minimal', productCols: 4, productStyle: 'grid', radius: 'none', density: 'airy', header: 'underline' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'cta'] },
  { id: 'rouge', name: 'Rouge', desc: '酒紅氣質・美妝精品', preview: P(4), theme: { primary: '#9F1239', background: '#FFF1F2', text: '#4C0519', muted: '#9F1239', font: 'Georgia', accent: '#E11D48' }, style: { heroStyle: 'full', productCols: 3, productStyle: 'card', radius: 'lg', density: 'tight', header: 'transparent' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'features', 'products', 'richtext', 'cta'] },
  { id: 'paper', name: 'Paper', desc: '純白極簡・服飾選品', preview: P(5), theme: { primary: '#171717', background: '#FFFFFF', text: '#0A0A0A', muted: '#737373', font: 'Outfit', accent: '#A3A3A3' }, style: { heroStyle: 'minimal', productCols: 4, productStyle: 'lined', radius: 'none', density: 'airy', header: 'underline' }, tags: ['themeColor'], sectionTypes: ['hero', 'products', 'richtext', 'cta'] },
  { id: 'atelier', name: 'Atelier', desc: '法式優雅・精品飾品', preview: P(6), theme: { primary: '#854D0E', background: '#FEFCE8', text: '#422006', muted: '#A16207', font: 'Georgia', accent: '#CA8A04' }, style: { heroStyle: 'center', productCols: 3, productStyle: 'card', radius: 'sm', density: 'normal', header: 'solid' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'categories', 'products', 'cta'] },
  { id: 'savile', name: 'Savile', desc: '紳士沉穩・男裝精品', preview: P(7), theme: { primary: '#1E3A5F', background: '#F8FAFC', text: '#0F172A', muted: '#475569', font: 'Georgia', accent: '#334155' }, style: { heroStyle: 'split', productCols: 3, productStyle: 'lift', radius: 'none', density: 'normal', header: 'solid' }, tags: ['themeColor', 'bgColor'], sectionTypes: ['hero', 'products', 'features', 'richtext', 'cta'] },
  { id: 'runway', name: 'Runway', desc: '時尚大片・潮流女裝', preview: P(8), theme: { primary: '#000000', background: '#FAFAFA', text: '#000000', muted: '#525252', font: 'Outfit', accent: '#E5E5E5' }, style: { heroStyle: 'full', productCols: 2, productStyle: 'lift', radius: 'none', density: 'tight', header: 'transparent' }, tags: [], sectionTypes: ['hero', 'products', 'categories', 'cta'] },
  { id: 'starter', name: 'Starter', desc: '基礎清楚・新手開店', preview: P(0), theme: { primary: '#2563EB', background: '#F8FAFC', text: '#0F172A', muted: '#64748B', font: 'Outfit', accent: '#93C5FD' }, style: { heroStyle: 'banner', productCols: 3, productStyle: 'grid', radius: 'sm', density: 'normal', header: 'solid' }, tags: ['themeColor', 'footerColor', 'fontColor'], sectionTypes: ['hero', 'products', 'cta'] },
  { id: 'afterdark', name: 'After Dark', desc: '深夜黑・潮牌 3C', preview: P(1), theme: { primary: '#F8FAFC', background: '#020617', text: '#F8FAFC', muted: '#94A3B8', font: 'Outfit', accent: '#22D3EE' }, style: { heroStyle: 'full', productCols: 4, productStyle: 'card', radius: 'sm', density: 'tight', header: 'transparent' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'features', 'cta'] },
  { id: 'blush', name: 'Blush', desc: '柔美曲線・女裝美妝', preview: P(2), theme: { primary: '#DB2777', background: '#FDF2F8', text: '#831843', muted: '#9D174D', font: 'Georgia', accent: '#F472B6' }, style: { heroStyle: 'center', productCols: 3, productStyle: 'card', radius: 'lg', density: 'airy', header: 'solid' }, tags: ['themeColor', 'footerColor'], sectionTypes: ['hero', 'richtext', 'products', 'cta'] },
  { id: 'linework', name: 'Linework', desc: '俐落線條・現代選物', preview: P(3), theme: { primary: '#0F766E', background: '#F0FDFA', text: '#134E4A', muted: '#0F766E', font: 'Outfit', accent: '#2DD4BF' }, style: { heroStyle: 'split', productCols: 4, productStyle: 'lined', radius: 'none', density: 'normal', header: 'underline' }, tags: ['themeColor', 'bgColor', 'fontColor'], sectionTypes: ['hero', 'categories', 'products', 'features', 'cta'] },
  { id: 'grove', name: 'Grove', desc: '都會清新・生活家居', preview: P(4), theme: { primary: '#15803D', background: '#F7FEE7', text: '#14532D', muted: '#3F6212', font: 'Outfit', accent: '#84CC16' }, style: { heroStyle: 'banner', productCols: 3, productStyle: 'grid', radius: 'sm', density: 'airy', header: 'solid' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'richtext', 'cta'] },
  { id: 'volt', name: 'Volt', desc: '高反差潮流・街頭潮牌', preview: P(5), theme: { primary: '#FACC15', background: '#0A0A0A', text: '#FAFAFA', muted: '#A3A3A3', font: 'Outfit', accent: '#FACC15' }, style: { heroStyle: 'full', productCols: 2, productStyle: 'lift', radius: 'none', density: 'tight', header: 'transparent' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'cta'] },
  { id: 'clay', name: 'Clay', desc: '工作室留白・器皿選物', preview: P(6), theme: { primary: '#57534E', background: '#FAFAF9', text: '#1C1917', muted: '#78716C', font: 'Outfit', accent: '#A8A29E' }, style: { heroStyle: 'minimal', productCols: 3, productStyle: 'lined', radius: 'none', density: 'airy', header: 'underline' }, tags: ['themeColor'], sectionTypes: ['hero', 'products', 'richtext', 'features', 'cta'] },
  { id: 'oxford', name: 'Oxford', desc: '經典紳士・男裝皮件', preview: P(7), theme: { primary: '#44403C', background: '#F5F5F4', text: '#1C1917', muted: '#57534E', font: 'Georgia', accent: '#A8A29E' }, style: { heroStyle: 'split', productCols: 3, productStyle: 'card', radius: 'sm', density: 'normal', header: 'solid' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'features', 'cta'] },
  { id: 'silk', name: 'Silk', desc: '蕾絲柔感・內衣女裝', preview: P(8), theme: { primary: '#9D174D', background: '#FFF7FB', text: '#500724', muted: '#9D174D', font: 'Georgia', accent: '#F9A8D4' }, style: { heroStyle: 'center', productCols: 3, productStyle: 'card', radius: 'lg', density: 'airy', header: 'solid' }, tags: ['themeColor', 'bgColor'], sectionTypes: ['hero', 'products', 'richtext', 'cta'] },
  { id: 'aqua', name: 'Aqua', desc: '薄荷清爽・洗沐保養', preview: P(0), theme: { primary: '#0D9488', background: '#ECFDF5', text: '#064E3B', muted: '#047857', font: 'Outfit', accent: '#6EE7B7' }, style: { heroStyle: 'banner', productCols: 4, productStyle: 'grid', radius: 'lg', density: 'normal', header: 'solid' }, tags: [], sectionTypes: ['hero', 'features', 'products', 'cta'] },
  { id: 'verdant', name: 'Verdant', desc: '苔蘚質感・家居選物', preview: P(1), theme: { primary: '#3F6212', background: '#F7FEE7', text: '#1A2E05', muted: '#3F6212', font: 'Georgia', accent: '#A3E635' }, style: { heroStyle: 'full', productCols: 3, productStyle: 'lift', radius: 'sm', density: 'normal', header: 'transparent' }, tags: ['themeColor', 'footerColor', 'fontColor'], sectionTypes: ['hero', 'categories', 'products', 'richtext', 'cta'] },
  { id: 'plain', name: 'Plain', desc: '單純直接・萬用開店', preview: P(2), theme: { primary: '#334155', background: '#FFFFFF', text: '#0F172A', muted: '#64748B', font: 'Outfit', accent: '#CBD5E1' }, style: { heroStyle: 'minimal', productCols: 3, productStyle: 'grid', radius: 'none', density: 'normal', header: 'underline' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'cta'] },
  { id: 'softgrid', name: 'Soft Grid', desc: '輕圖樣・生活雜貨', preview: P(3), theme: { primary: '#7C3AED', background: '#F5F3FF', text: '#4C1D95', muted: '#6D28D9', font: 'Outfit', accent: '#C4B5FD' }, style: { heroStyle: 'center', productCols: 4, productStyle: 'card', radius: 'sm', density: 'tight', header: 'solid' }, tags: ['themeColor', 'footerColor'], sectionTypes: ['hero', 'categories', 'products', 'cta'] },
  { id: 'crate', name: 'Crate', desc: '框格編排・分類清楚', preview: P(4), theme: { primary: '#0E7490', background: '#ECFEFF', text: '#164E63', muted: '#0E7490', font: 'Outfit', accent: '#22D3EE' }, style: { heroStyle: 'banner', productCols: 2, productStyle: 'card', radius: 'sm', density: 'tight', header: 'solid' }, tags: ['themeColor', 'bgColor', 'fontColor'], sectionTypes: ['categories', 'hero', 'products', 'features', 'cta'] },
  { id: 'riot', name: 'Riot', desc: '反叛對比・街頭文化', preview: P(5), theme: { primary: '#EF4444', background: '#111111', text: '#F5F5F5', muted: '#A3A3A3', font: 'Outfit', accent: '#EF4444' }, style: { heroStyle: 'full', productCols: 2, productStyle: 'lift', radius: 'none', density: 'tight', header: 'transparent' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'cta'] },
  { id: 'gilt', name: 'Gilt', desc: '華麗時髦・精品配件', preview: P(6), theme: { primary: '#A16207', background: '#1C1917', text: '#FEF3C7', muted: '#D6D3D1', font: 'Georgia', accent: '#EAB308' }, style: { heroStyle: 'split', productCols: 3, productStyle: 'card', radius: 'lg', density: 'normal', header: 'solid' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'richtext', 'cta'] },
  { id: 'concrete', name: 'Concrete', desc: '石板灰・現代工業', preview: P(7), theme: { primary: '#475569', background: '#F1F5F9', text: '#0F172A', muted: '#64748B', font: 'Outfit', accent: '#94A3B8' }, style: { heroStyle: 'split', productCols: 4, productStyle: 'lined', radius: 'none', density: 'normal', header: 'underline' }, tags: ['themeColor'], sectionTypes: ['hero', 'products', 'features', 'cta'] },
  { id: 'metro', name: 'Metro', desc: '都會摩登・女裝鞋包', preview: P(8), theme: { primary: '#312E81', background: '#EEF2FF', text: '#1E1B4B', muted: '#4338CA', font: 'Georgia', accent: '#818CF8' }, style: { heroStyle: 'center', productCols: 3, productStyle: 'lift', radius: 'sm', density: 'airy', header: 'solid' }, tags: ['themeColor', 'font'], sectionTypes: ['hero', 'products', 'categories', 'richtext', 'cta'] },
  { id: 'crown', name: 'Crown', desc: '氣場大器・旗艦品牌', preview: P(0), theme: { primary: '#B45309', background: '#1C1917', text: '#FFFBEB', muted: '#D6D3D1', font: 'Georgia', accent: '#F59E0B' }, style: { heroStyle: 'full', productCols: 3, productStyle: 'card', radius: 'none', density: 'normal', header: 'transparent' }, tags: ['themeColor', 'bgColor'], sectionTypes: ['hero', 'features', 'products', 'cta'] },
  { id: 'alley', name: 'Alley', desc: '街頭節奏・滑板潮牌', preview: P(1), theme: { primary: '#22C55E', background: '#052E16', text: '#F0FDF4', muted: '#86EFAC', font: 'Outfit', accent: '#4ADE80' }, style: { heroStyle: 'banner', productCols: 2, productStyle: 'lift', radius: 'sm', density: 'tight', header: 'solid' }, tags: [], sectionTypes: ['hero', 'categories', 'products', 'cta'] },
]

export const HERO_PRESETS = [
  { id: 'shop', label: '店鋪氛圍', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80' },
  { id: 'product', label: '商品特寫', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80' },
  { id: 'lifestyle', label: '生活場景', url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80' },
  { id: 'fashion', label: '時尚大圖', url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80' },
  { id: 'food', label: '餐飲美食', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80' },
  { id: 'nature', label: '自然質感', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80' },
  { id: 'none', label: '無圖片（純色）', url: '' },
] as const

export function parseHeroImages(props: Record<string, string>): string[] {
  const fromList: string[] = []
  if (props.images) {
    try {
      const parsed = JSON.parse(props.images)
      if (Array.isArray(parsed)) {
        for (const item of parsed) {
          const url = String(item || '').trim()
          if (url) fromList.push(url)
        }
      }
    } catch { /* ignore */ }
  }
  if (fromList.length > 0) return fromList
  const single = String(props.image || '').trim()
  return single ? [single] : []
}

export function serializeHeroImages(urls: string[]): string {
  return JSON.stringify(urls.filter((u) => !!u.trim()))
}

function uid() {
  return `s_${Math.random().toString(36).slice(2, 10)}`
}

const DEFAULT_STYLE: LayoutStyle = {
  heroStyle: 'full',
  productCols: 3,
  productStyle: 'grid',
  radius: 'none',
  density: 'normal',
  header: 'solid',
}

export function defaultProps(type: SectionType, storeName = '我的商店', tagline = ''): Record<string, string> {
  switch (type) {
    case 'hero':
      return {
        title: storeName,
        subtitle: tagline || '精選好物，立即選購',
        cta: '瀏覽全部商品',
        image: PREVIEWS[0],
        images: JSON.stringify([PREVIEWS[0], PREVIEWS[1], PREVIEWS[3]]),
        carouselSec: '4',
      }
    case 'products':
      return { title: '熱銷商品', subtitle: '店長精選' }
    case 'richtext':
      return { title: '關於我們', body: '我們用心挑選每一件商品，希望帶給顧客更好的生活體驗。' }
    case 'cta':
      return { title: '現在就開始選購', subtitle: '快速出貨，安心結帳', button: '查看商品' }
    case 'features':
      return { title: '為什麼選擇我們', item1: '嚴選品質', item2: '快速出貨', item3: '安心售后' }
    case 'categories':
      return { title: '熱門分類', item1: '熱銷', item2: '新品', item3: '經典', item4: '限定' }
    default:
      return {}
  }
}

export function buildLayoutFromTemplate(
  templateId: string,
  storeName = '我的商店',
  tagline = '',
): StoreLayout {
  const tpl = TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0]
  return {
    templateId: tpl.id,
    theme: { ...tpl.theme },
    style: { ...tpl.style },
    sections: tpl.sectionTypes.map((type) => {
      const props = defaultProps(type, storeName, tagline)
      // Keep hero image tied to this theme's preview so card ≈ applied look
      if (type === 'hero') {
        props.image = tpl.preview
        props.images = JSON.stringify([tpl.preview])
        props.carouselSec = '99'
      }
      return { id: uid(), type, props }
    }),
  }
}

export function parseStoreLayout(raw: unknown, storeName = '我的商店', tagline = ''): StoreLayout {
  if (!raw || typeof raw !== 'object') {
    return buildLayoutFromTemplate('ember', storeName, tagline)
  }
  const data = raw as Partial<StoreLayout> & { templateId?: string }
  // map older internal ids → current ARVIX theme ids
  const legacy: Record<string, string> = {
    minimal: 'paper',
    bold: 'ember',
    warm: 'hearth',
    dark: 'afterdark',
    dusk: 'ember',
    philia: 'bloom',
    varm: 'hearth',
    skya: 'clearair',
    sangria: 'rouge',
    bianco: 'paper',
    'doris-bien': 'atelier',
    kingsman: 'savile',
    'ultra-chic': 'runway',
    basic: 'starter',
    nightfall: 'afterdark',
    paola: 'blush',
    ell: 'linework',
    'fresh-urban': 'grove',
    hype: 'volt',
    studio: 'clay',
    gentleman: 'oxford',
    lace: 'silk',
    mint: 'aqua',
    'lux-moss': 'verdant',
    simple: 'plain',
    'simple-patterns': 'softgrid',
    'boxed-patterns': 'crate',
    rebel: 'riot',
    swanky: 'gilt',
    slate: 'concrete',
    chic: 'metro',
    king: 'crown',
    streetify: 'alley',
  }
  const tid = legacy[data.templateId || ''] || data.templateId || 'ember'
  if (!Array.isArray(data.sections) || data.sections.length === 0) {
    return buildLayoutFromTemplate(tid, storeName, tagline)
  }
  const tpl = TEMPLATES.find((t) => t.id === tid) || TEMPLATES[0]
  return {
    templateId: tid,
    theme: { ...tpl.theme, ...(data.theme || {}) },
    style: { ...tpl.style, ...(data.style || {}) },
    sections: data.sections
      .filter((s) => s && s.type && SECTION_LABELS[s.type as SectionType])
      .map((s) => ({
        id: s.id || uid(),
        type: s.type as SectionType,
        props: { ...defaultProps(s.type as SectionType, storeName, tagline), ...(s.props || {}) },
      })),
  }
}

export function moveSection(sections: StoreSection[], from: number, to: number): StoreSection[] {
  if (from < 0 || to < 0 || from >= sections.length || to >= sections.length || from === to) {
    return sections
  }
  const next = [...sections]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

export { DEFAULT_STYLE }
