import type { Locale } from './i18n'
import { pickCopy } from './i18n/pageCopy'
import type { SectionType, TemplateTag } from './storeLayout'

export type MerchantStudioCopy = {
  storeFallback: string
  allCategory: string
  needStore: string
  loadFail: string
  saveFail: string
  published: string
  keepOneSection: string
  applied: string
  appliedHint: string
  loading: string
  backStore: string
  pickTemplate: string
  editingLive: string
  swapTemplate: string
  openLive: string
  publishing: string
  publish: string
  trialBanner: string
  activate: string
  galleryTitle: string
  gallerySubtitle: string
  continueEdit: string
  useTheme: string
  sortTitle: string
  sortHint: string
  frameN: string
  addFrame: string
  colors: string
  colorPrimary: string
  colorBg: string
  colorText: string
  previewHint: string
  collapse: string
  editText: string
  editSection: string
  deleteSection: string
  clickToEdit: string
  heroSlides: string
  heroSlidesHint: string
  noSlides: string
  slideN: string
  del: string
  carouselSec: string
  secUnit: string
  pickSlide: string
  pasteUrl: string
  pasteEnter: string
  addSection: string
  sections: Record<SectionType, string>
  tags: Record<TemplateTag, string>
  props: Record<string, string>
  heroPresets: Record<string, string>
  templateDescs: Record<string, string>
  pagesKicker: string
  pagesTitle: string
  pagesSubtitle: string
  pageList: string
  backDash: string
  previewPage: string
  saving: string
  save: string
  savedPages: string
  hidden: string
  newPagePh: string
  addPage: string
  pageTitle: string
  pageSlug: string
  pageBody: string
  pagePublic: string
  deletePage: string
  keepOnePage: string
  confirmDeletePage: string
  newPage: string
  loadingPages: string
  errTrial: string
  errGeneric: string
}

const zhTW: MerchantStudioCopy = {
  storeFallback: '我的商店',
  allCategory: '全部',
  needStore: '請先完成註冊開店',
  loadFail: '載入失敗',
  saveFail: '儲存失敗',
  published: '已發布到你的商店',
  keepOneSection: '至少保留一個區塊',
  applied: '已套用「{name}」',
  appliedHint: '已套用「{name}」· 可直接在預覽上點區塊編輯',
  loading: '載入設計器…',
  backStore: '← 商店',
  pickTemplate: '選擇主題模板',
  editingLive: '所見即所得編輯中',
  swapTemplate: '換模板',
  openLive: '開真實店面',
  publishing: '發布中…',
  publish: '發布',
  trialBanner: '試用已結束，無法改版型。',
  activate: '去開通',
  galleryTitle: '多款風格版型主題設計',
  gallerySubtitle: '共 {n} 款 ARVIX 主題，一鍵套用後可改文字、換主視覺、拖拉區塊排序。',
  continueEdit: '繼續編輯目前主題 →',
  useTheme: '使用此主題',
  sortTitle: '上下區塊排序',
  sortHint: '抓 ⠿ 拖上下＝對調框的位置。主視覺也可以拖到中間或下面，不是只能在最上面。',
  frameN: '第 {n} 框',
  addFrame: '加一個框',
  colors: '顏色',
  colorPrimary: '主色',
  colorBg: '背景',
  colorText: '文字',
  previewHint: '預覽用你店裡真實商品（目前 {n} 件）',
  collapse: '收合編輯',
  editText: '編輯文字',
  editSection: '編輯區塊',
  deleteSection: '刪除此區塊',
  clickToEdit: '點左邊的框，或點預覽裡的區塊開始改',
  heroSlides: '主視覺輪播圖',
  heroSlidesHint: '可放多張，店面会自動輪播。下面點圖＝加入輪播；已加入的可刪除、上下調順序。',
  noSlides: '還沒有圖，從下方選一张加入',
  slideN: '第 {n} 張',
  del: '刪',
  carouselSec: '幾秒換一张',
  secUnit: '{n} 秒',
  pickSlide: '點圖加入輪播',
  pasteUrl: '或貼圖片網址加入',
  pasteEnter: '貼完按 Enter 加入',
  addSection: '新增區塊',
  sections: {
    hero: '主視覺 Hero',
    products: '商品列表',
    richtext: '品牌介紹',
    cta: '行動呼籲',
    features: '特色區塊',
    categories: '分類入口',
  },
  tags: {
    themeColor: '自訂主題顏色',
    footerColor: '自訂頁尾顏色',
    fontColor: '自訂主題字型顏色',
    font: '自訂主題字型',
    bgColor: '自訂背景顏色',
  },
  props: {
    title: '標題',
    subtitle: '副標',
    cta: '按鈕文字',
    image: '主圖網址',
    body: '內文',
    button: '按鈕文字',
    item1: '特色 1',
    item2: '特色 2',
    item3: '特色 3',
  },
  heroPresets: {
    shop: '店鋪氛圍',
    product: '商品特寫',
    lifestyle: '生活場景',
    fashion: '時尚大圖',
    food: '餐飲美食',
    nature: '自然質感',
    none: '無圖片（純色）',
  },
  templateDescs: {
    ember: '暮色大圖・服飾精品',
    bloom: '柔和字型・生活選物',
    hearth: '暖色基調・家居溫暖',
    clearair: '天空感留白・清新品牌',
    rouge: '酒紅氣質・美妝精品',
    paper: '純白極簡・服飾選品',
    atelier: '法式優雅・精品飾品',
    savile: '紳士沉穩・男裝精品',
    runway: '時尚大片・潮流女裝',
    starter: '基礎清楚・新手開店',
    afterdark: '深夜黑・潮牌 3C',
    blush: '柔美曲線・女裝美妝',
    linework: '俐落線條・現代選物',
    grove: '都會清新・生活家居',
    volt: '高反差潮流・街頭潮牌',
    clay: '工作室留白・器皿選物',
    oxford: '經典紳士・男裝皮件',
    silk: '蕾絲柔感・內衣女裝',
    aqua: '薄荷清爽・洗沐保養',
    verdant: '苔蘚質感・家居選物',
    plain: '單純直接・萬用開店',
    softgrid: '輕圖樣・生活雜貨',
    crate: '框格編排・分類清楚',
    riot: '反叛對比・街頭文化',
    gilt: '華麗時髦・精品配件',
    concrete: '石板灰・現代工業',
    metro: '都會摩登・女裝鞋包',
    crown: '氣場大器・旗艦品牌',
    alley: '街頭節奏・滑板潮牌',
  },
  pagesKicker: 'STORE PAGES',
  pagesTitle: '商店頁面',
  pagesSubtitle: '編輯「關於我們」、聯絡、政策等獨立頁面。導覽會連到真實網址，不是首頁錨點。',
  pageList: '頁面列表',
  backDash: '回我的商店',
  previewPage: '預覽此頁',
  saving: '儲存中...',
  save: '儲存',
  savedPages: '已儲存頁面',
  hidden: '（隱藏）',
  newPagePh: '新頁面標題',
  addPage: '新增頁面',
  pageTitle: '標題',
  pageSlug: '網址代碼',
  pageBody: '內容',
  pagePublic: '公開此頁（導覽／頁尾會顯示）',
  deletePage: '刪除此頁',
  keepOnePage: '至少保留一頁',
  confirmDeletePage: '確定刪除「{title}」？',
  newPage: '新頁面',
  loadingPages: '載入中...',
  errTrial: '試用已結束，請先開通方案',
  errGeneric: '操作失敗，請重試',
}

const zhCN: MerchantStudioCopy = {
  ...zhTW,
  needStore: '请先完成注册开店',
  loadFail: '加载失败',
  saveFail: '保存失败',
  published: '已发布到你的商店',
  keepOneSection: '至少保留一个区块',
  applied: '已套用「{name}」',
  appliedHint: '已套用「{name}」· 可直接在预览上点区块编辑',
  loading: '加载设计器…',
  pickTemplate: '选择主题模板',
  editingLive: '所见即所得编辑中',
  swapTemplate: '换模板',
  openLive: '打开真实店面',
  publishing: '发布中…',
  publish: '发布',
  trialBanner: '试用已结束，无法改版型。',
  activate: '去开通',
  galleryTitle: '多款风格版型主题设计',
  gallerySubtitle: '共 {n} 款 ARVIX 主题，一键套用后可改文字、换主视觉、拖拉区块排序。',
  continueEdit: '继续编辑目前主题 →',
  useTheme: '使用此主题',
  sortTitle: '上下区块排序',
  sortHint: '抓 ⠿ 拖上下＝对调框的位置。主视觉也可以拖到中间或下面。',
  frameN: '第 {n} 框',
  addFrame: '加一个框',
  colors: '颜色',
  colorPrimary: '主色',
  colorBg: '背景',
  colorText: '文字',
  previewHint: '预览用你店里真实商品（目前 {n} 件）',
  collapse: '收合编辑',
  editText: '编辑文字',
  editSection: '编辑区块',
  deleteSection: '删除此区块',
  clickToEdit: '点左边的框，或点预览里的区块开始改',
  heroSlides: '主视觉轮播图',
  heroSlidesHint: '可放多张，店面会自动轮播。',
  noSlides: '还没有图，从下方选一张加入',
  slideN: '第 {n} 张',
  del: '删',
  carouselSec: '几秒换一张',
  secUnit: '{n} 秒',
  pickSlide: '点图加入轮播',
  pasteUrl: '或贴图片网址加入',
  pasteEnter: '贴完按 Enter 加入',
  addSection: '新增区块',
  pagesTitle: '商店页面',
  pagesSubtitle: '编辑「关于我们」、联络、政策等独立页面。导航会连到真实网址。',
  pageList: '页面列表',
  backDash: '回我的商店',
  previewPage: '预览此页',
  saving: '保存中...',
  save: '保存',
  savedPages: '已保存页面',
  hidden: '（隐藏）',
  newPagePh: '新页面标题',
  addPage: '新增页面',
  pageTitle: '标题',
  pageSlug: '网址代码',
  pageBody: '内容',
  pagePublic: '公开此页（导航／页尾会显示）',
  deletePage: '删除此页',
  keepOnePage: '至少保留一页',
  confirmDeletePage: '确定删除「{title}」？',
  newPage: '新页面',
  loadingPages: '加载中...',
  errTrial: '试用已结束，请先开通方案',
  errGeneric: '操作失败，请重试',
}

const en: MerchantStudioCopy = {
  storeFallback: 'My store',
  allCategory: 'All',
  needStore: 'Finish creating your store first',
  loadFail: 'Failed to load',
  saveFail: 'Could not save',
  published: 'Published to your store',
  keepOneSection: 'Keep at least one section',
  applied: 'Applied “{name}”',
  appliedHint: 'Applied “{name}”. Click a section in the preview to edit.',
  loading: 'Loading designer…',
  backStore: '← Store',
  pickTemplate: 'Choose a theme',
  editingLive: 'Live editing',
  swapTemplate: 'Change theme',
  openLive: 'Open live store',
  publishing: 'Publishing…',
  publish: 'Publish',
  trialBanner: 'Trial ended. Theme edits are paused.',
  activate: 'Activate plan',
  galleryTitle: 'Store themes',
  gallerySubtitle: '{n} ARVIX themes. Apply one, then edit copy, hero images, and section order.',
  continueEdit: 'Continue current theme →',
  useTheme: 'Use this theme',
  sortTitle: 'Section order',
  sortHint: 'Drag ⠿ to reorder. The hero can sit in the middle or at the bottom.',
  frameN: 'Block {n}',
  addFrame: 'Add a block',
  colors: 'Colors',
  colorPrimary: 'Primary',
  colorBg: 'Background',
  colorText: 'Text',
  previewHint: 'Preview uses your real products ({n})',
  collapse: 'Hide editor',
  editText: 'Edit copy',
  editSection: 'Edit section',
  deleteSection: 'Delete section',
  clickToEdit: 'Select a block on the left or in the preview',
  heroSlides: 'Hero slideshow',
  heroSlidesHint: 'Add multiple images. The storefront rotates them automatically.',
  noSlides: 'No images yet. Pick one below.',
  slideN: 'Slide {n}',
  del: 'Del',
  carouselSec: 'Seconds per slide',
  secUnit: '{n}s',
  pickSlide: 'Tap to add',
  pasteUrl: 'Or paste an image URL',
  pasteEnter: 'Press Enter to add',
  addSection: 'Add section',
  sections: {
    hero: 'Hero',
    products: 'Products',
    richtext: 'About',
    cta: 'Call to action',
    features: 'Features',
    categories: 'Categories',
  },
  tags: {
    themeColor: 'Theme color',
    footerColor: 'Footer color',
    fontColor: 'Font color',
    font: 'Font',
    bgColor: 'Background color',
  },
  props: {
    title: 'Title',
    subtitle: 'Subtitle',
    cta: 'Button text',
    image: 'Image URL',
    body: 'Body',
    button: 'Button text',
    item1: 'Feature 1',
    item2: 'Feature 2',
    item3: 'Feature 3',
  },
  heroPresets: {
    shop: 'Shop mood',
    product: 'Product close-up',
    lifestyle: 'Lifestyle',
    fashion: 'Fashion',
    food: 'Food',
    nature: 'Nature',
    none: 'No image (solid)',
  },
  templateDescs: {
    ember: 'Dark full-bleed fashion',
    bloom: 'Soft type · lifestyle',
    hearth: 'Warm home goods',
    clearair: 'Airy sky · clean brand',
    rouge: 'Wine-red beauty',
    paper: 'White minimal apparel',
    atelier: 'French jewelry',
    savile: 'Tailored menswear',
    runway: 'Editorial womenswear',
    starter: 'Clear starter layout',
    afterdark: 'Night black · street / tech',
    blush: 'Soft curves · beauty',
    linework: 'Clean lines · modern',
    grove: 'Fresh urban home',
    volt: 'High-contrast streetwear',
    clay: 'Studio pottery',
    oxford: 'Classic mens leather',
    silk: 'Soft lingerie / womenswear',
    aqua: 'Mint bath & body',
    verdant: 'Mossy home goods',
    plain: 'Straightforward starter',
    softgrid: 'Light pattern · sundries',
    crate: 'Boxed categories',
    riot: 'High-contrast street',
    gilt: 'Luxe accessories',
    concrete: 'Slate industrial',
    metro: 'City womenswear',
    crown: 'Flagship presence',
    alley: 'Skate / street rhythm',
  },
  pagesKicker: 'STORE PAGES',
  pagesTitle: 'Store pages',
  pagesSubtitle: 'Edit About, contact, and policy pages. Nav links to real URLs, not homepage anchors.',
  pageList: 'Pages',
  backDash: 'Back to my store',
  previewPage: 'Preview page',
  saving: 'Saving...',
  save: 'Save',
  savedPages: 'Pages saved',
  hidden: '(hidden)',
  newPagePh: 'New page title',
  addPage: 'Add page',
  pageTitle: 'Title',
  pageSlug: 'URL key',
  pageBody: 'Content',
  pagePublic: 'Publish this page (shown in nav / footer)',
  deletePage: 'Delete this page',
  keepOnePage: 'Keep at least one page',
  confirmDeletePage: 'Delete “{title}”?',
  newPage: 'New page',
  loadingPages: 'Loading...',
  errTrial: 'Trial ended. Activate a plan first.',
  errGeneric: 'Something went wrong. Try again.',
}

const ko: MerchantStudioCopy = {
  ...en,
  storeFallback: '내 스토어',
  allCategory: '전체',
  needStore: '먼저 스토어를 만드세요',
  loadFail: '불러오지 못했습니다',
  saveFail: '저장하지 못했습니다',
  published: '스토어에 게시했습니다',
  keepOneSection: '섹션을 하나 이상 남겨 두세요',
  applied: '“{name}” 적용됨',
  appliedHint: '“{name}” 적용. 미리보기에서 섹션을 눌러 수정하세요.',
  loading: '디자이너 불러오는 중…',
  backStore: '← 스토어',
  pickTemplate: '테마 선택',
  editingLive: '실시간 편집 중',
  swapTemplate: '테마 변경',
  openLive: '실제 스토어 열기',
  publishing: '게시 중…',
  publish: '게시',
  trialBanner: '체험이 종료되어 테마를 수정할 수 없습니다.',
  activate: '요금제 활성화',
  galleryTitle: '스토어 테마',
  gallerySubtitle: 'ARVIX 테마 {n}개. 적용 후 문구·히어로·순서를 바꾸세요.',
  continueEdit: '현재 테마 계속 편집 →',
  useTheme: '이 테마 사용',
  sortTitle: '섹션 순서',
  sortHint: '⠿ 를 드래그해 순서를 바꿉니다. 히어도 중간이나 아래로 둘 수 있습니다.',
  frameN: '{n}번째 블록',
  addFrame: '블록 추가',
  colors: '색상',
  colorPrimary: '포인트',
  colorBg: '배경',
  colorText: '텍스트',
  previewHint: '미리보기는 실제 상품을 사용합니다 ({n}개)',
  collapse: '편집 닫기',
  editText: '문구 편집',
  editSection: '섹션 편집',
  deleteSection: '섹션 삭제',
  clickToEdit: '왼쪽 또는 미리보기에서 블록을 선택하세요',
  heroSlides: '히어로 슬라이드',
  heroSlidesHint: '이미지를 여러 장 넣으면 스토어가 자동으로 넘깁니다.',
  noSlides: '이미지가 없습니다. 아래에서 고르세요.',
  slideN: '{n}번째 슬라이드',
  del: '삭제',
  carouselSec: '슬라이드 간격',
  secUnit: '{n}초',
  pickSlide: '눌러서 추가',
  pasteUrl: '또는 이미지 URL 붙여넣기',
  pasteEnter: 'Enter로 추가',
  addSection: '섹션 추가',
  sections: { hero: '히어로', products: '상품', richtext: '소개', cta: '행동 유도', features: '특징', categories: '카테고리' },
  pagesTitle: '스토어 페이지',
  pagesSubtitle: '소개, 연락처, 정책 페이지를 편집합니다. 메뉴는 실제 URL로 연결됩니다.',
  pageList: '페이지 목록',
  backDash: '내 스토어로',
  previewPage: '이 페이지 미리보기',
  saving: '저장 중...',
  save: '저장',
  savedPages: '페이지를 저장했습니다',
  hidden: '(숨김)',
  newPagePh: '새 페이지 제목',
  addPage: '페이지 추가',
  pageTitle: '제목',
  pageSlug: 'URL 키',
  pageBody: '내용',
  pagePublic: '이 페이지 공개 (메뉴/푸터에 표시)',
  deletePage: '이 페이지 삭제',
  keepOnePage: '페이지를 하나 이상 남겨 두세요',
  confirmDeletePage: '“{title}”을(를) 삭제할까요?',
  newPage: '새 페이지',
  loadingPages: '불러오는 중...',
  errTrial: '체험이 종료되었습니다. 먼저 요금제를 활성화하세요.',
  errGeneric: '실패했습니다. 다시 시도해 주세요.',
}

const ja: MerchantStudioCopy = {
  ...en,
  storeFallback: 'マイストア',
  allCategory: 'すべて',
  needStore: '先にストアを作成してください',
  loadFail: '読み込みに失敗しました',
  saveFail: '保存できませんでした',
  published: 'ストアに公開しました',
  keepOneSection: 'セクションを1つ以上残してください',
  applied: '「{name}」を適用しました',
  appliedHint: '「{name}」を適用。プレビューのセクションをクリックして編集できます。',
  loading: 'デザイナーを読み込み中…',
  backStore: '← ストア',
  pickTemplate: 'テーマを選ぶ',
  editingLive: 'ライブ編集中',
  swapTemplate: 'テーマ変更',
  openLive: '公開ストアを開く',
  publishing: '公開中…',
  publish: '公開',
  trialBanner: 'トライアル終了のためテーマを編集できません。',
  activate: 'プランを有効化',
  galleryTitle: 'ストアテーマ',
  gallerySubtitle: 'ARVIXテーマ {n} 件。適用後に文言・ヒーロー・順序を編集できます。',
  continueEdit: '現在のテーマを編集 →',
  useTheme: 'このテーマを使う',
  sortTitle: 'セクション順',
  sortHint: '⠿ をドラッグして並べ替え。ヒーローは中央や下にも置けます。',
  frameN: '{n}番目のブロック',
  addFrame: 'ブロックを追加',
  colors: 'カラー',
  colorPrimary: 'メイン',
  colorBg: '背景',
  colorText: 'テキスト',
  previewHint: 'プレビューは実際の商品を使います（{n}点）',
  collapse: '編集を閉じる',
  editText: '文言を編集',
  editSection: 'セクション編集',
  deleteSection: 'このセクションを削除',
  clickToEdit: '左またはプレビューのブロックを選んでください',
  heroSlides: 'ヒーロースライド',
  heroSlidesHint: '複数画像を追加すると店頭で自動ローテーションします。',
  noSlides: '画像がありません。下から選んでください。',
  slideN: '{n}枚目',
  del: '削除',
  carouselSec: '切り替え秒数',
  secUnit: '{n}秒',
  pickSlide: 'タップして追加',
  pasteUrl: 'または画像URLを貼る',
  pasteEnter: 'Enterで追加',
  addSection: 'セクション追加',
  sections: { hero: 'ヒーロー', products: '商品', richtext: '紹介', cta: 'CTA', features: '特徴', categories: 'カテゴリ' },
  pagesTitle: 'ストアページ',
  pagesSubtitle: 'アバウト・連絡先・ポリシーを編集。ナビは実URLにリンクします。',
  pageList: 'ページ一覧',
  backDash: 'マイストアへ',
  previewPage: 'このページをプレビュー',
  saving: '保存中...',
  save: '保存',
  savedPages: 'ページを保存しました',
  hidden: '（非公開）',
  newPagePh: '新しいページ名',
  addPage: 'ページを追加',
  pageTitle: 'タイトル',
  pageSlug: 'URLキー',
  pageBody: '本文',
  pagePublic: 'このページを公開（ナビ／フッターに表示）',
  deletePage: 'このページを削除',
  keepOnePage: 'ページを1つ以上残してください',
  confirmDeletePage: '「{title}」を削除しますか？',
  newPage: '新しいページ',
  loadingPages: '読み込み中...',
  errTrial: 'トライアルが終了しました。先にプランを有効化してください。',
  errGeneric: '失敗しました。もう一度お試しください。',
}

const vi: MerchantStudioCopy = { ...en }
const es: MerchantStudioCopy = { ...en }
const pt: MerchantStudioCopy = { ...en }
const de: MerchantStudioCopy = { ...en }
const fr: MerchantStudioCopy = { ...en }

export function getMerchantStudioCopy(locale: Locale): MerchantStudioCopy {
  return pickCopy(locale, { 'zh-TW': zhTW, 'zh-CN': zhCN, en, ko, ja, vi, es, pt, de, fr })
}

export function mapStudioApiError(code: string | undefined, c: MerchantStudioCopy): string {
  if (code === 'TRIAL_EXPIRED') return c.errTrial
  return c.errGeneric
}
