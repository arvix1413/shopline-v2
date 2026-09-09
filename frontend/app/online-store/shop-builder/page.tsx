'use client'

import Image from 'next/image'
import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'
import type { Locale } from '../../../lib/i18n'

type ShopBuilderCopy = {
  title: string
  subtitle: string
  cta: string
  sec1Title: string
  sec1Desc: string
  sec1Items: string[]
  sec2Title: string
  sec2Desc: string
  sec2Items: string[]
  sec3Title: string
  sec3Desc: string
  sec3Items: string[]
  ctaTitle: string
}

const zhTW: ShopBuilderCopy = {
  title: '隨心所欲、盡情發揮\nSHOP Builder 頁面編輯器',
  subtitle: '免寫程式，自由拖曳完成頁面編排，打造一流品牌網站不再是夢。',
  cta: '立即免費試用',
  sec1Title: 'SHOP Builder + 產業推薦版型\n打造一流品牌網站不是夢',
  sec1Desc: '多種設計版型任選，搭配產業推薦版型，快速建立專業品牌形象。',
  sec1Items: ['免寫程式自由拖曳完成編排', '產業推薦版型多種設計版型任選', 'Layout Engine前端語言編輯權限'],
  sec2Title: '款款巧妙\n15+ 互動型元件',
  sec2Desc: '豐富的互動元件，讓你的網站更生動有趣，提升訪客停留時間。',
  sec2Items: ['SHOP Builder 促購元件 APP', '官網也能建立募資頁面'],
  sec3Title: '效能優化\n讓網站更上一層樓',
  sec3Desc: '優化頁面載入速度，提升 Google 網站評分，帶來更多長尾 SEO 效益。',
  sec3Items: ['有助提升頁面元素載入速度', '有助優化Google 網站評分', '絕佳 SEO帶來更多長尾效益'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: ShopBuilderCopy = {
  title: '随心所欲、尽情发挥\nSHOP Builder 页面编辑器',
  subtitle: '免写代码，自由拖曳完成页面编排，打造一流品牌网站不再是梦。',
  cta: '立即免费试用',
  sec1Title: 'SHOP Builder + 产业推荐版型\n打造一流品牌网站不是梦',
  sec1Desc: '多种设计版型任选，搭配产业推荐版型，快速建立专业品牌形象。',
  sec1Items: ['免写代码自由拖曳完成编排', '产业推荐版型多种设计版型任选', 'Layout Engine 前端语言编辑权限'],
  sec2Title: '款款巧妙\n15+ 互动型组件',
  sec2Desc: '丰富的互动组件，让你的网站更生动有趣，提升访客停留时间。',
  sec2Items: ['SHOP Builder 促购组件 APP', '官网也能建立募资页面'],
  sec3Title: '效能优化\n让网站更上一层楼',
  sec3Desc: '优化页面加载速度，提升 Google 网站评分，带来更多长尾 SEO 效益。',
  sec3Items: ['有助提升页面元素加载速度', '有助优化 Google 网站评分', '绝佳 SEO 带来更多长尾效益'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: ShopBuilderCopy = {
  title: 'Design freely\nSHOP Builder page editor',
  subtitle: 'No code required — drag and drop to build pages and create a world-class brand site.',
  cta: 'Start free trial',
  sec1Title: 'SHOP Builder + industry themes\nA premium brand site made easy',
  sec1Desc: 'Choose from curated layouts and industry-ready themes to launch a polished brand look fast.',
  sec1Items: ['Drag-and-drop editing, no coding', 'Industry-recommended theme options', 'Layout Engine for front-end customization'],
  sec2Title: 'Smart building blocks\n15+ interactive modules',
  sec2Desc: 'Rich interactive modules keep visitors engaged and increase time on site.',
  sec2Items: ['SHOP Builder conversion modules', 'Crowdfunding pages on your storefront'],
  sec3Title: 'Performance boost\nTake your site further',
  sec3Desc: 'Faster loads and stronger Google scores unlock more long-tail SEO value.',
  sec3Items: ['Faster page element loading', 'Better Google site scores', 'Strong SEO for long-tail traffic'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: ShopBuilderCopy = {
  title: '자유롭게 디자인하세요\nSHOP Builder 페이지 에디터',
  subtitle: '코딩 없이 드래그 앤 드롭으로 페이지를 만들고 세계적 수준의 브랜드 사이트를 완성하세요.',
  cta: '무료 체험 시작',
  sec1Title: 'SHOP Builder + 산업별 테마\n프리미엄 브랜드 사이트를 쉽게',
  sec1Desc: '엄선된 레이아웃과 산업별 테마로 세련된 브랜드 룩을 빠르게 런칭하세요.',
  sec1Items: ['코딩 없는 드래그 앤 드롭 편집', '산업 추천 테마 옵션', '프론트엔드 커스터마이즈용 Layout Engine'],
  sec2Title: '스마트한 빌딩 블록\n15+ 인터랙티브 모듈',
  sec2Desc: '풍부한 인터랙티브 모듈로 방문자의 참여와 체류 시간을 높입니다.',
  sec2Items: ['SHOP Builder 전환 모듈', '스토어프론트에서 크라우드펀딩 페이지'],
  sec3Title: '성능 향상\n사이트를 한 단계 더',
  sec3Desc: '더 빠른 로딩과 더 높은 Google 점수로 롱테일 SEO 가치를 확보하세요.',
  sec3Items: ['더 빠른 페이지 요소 로딩', '더 나은 Google 사이트 점수', '롱테일 트래픽을 위한 강력한 SEO'],
  ctaTitle: '전 세계 60만+ 판매자가 ARVIX를 신뢰합니다',
}

const ja: ShopBuilderCopy = {
  title: '自由にデザイン\nSHOP Builder ページエディター',
  subtitle: 'コード不要 — ドラッグ＆ドロップでページを作り、一流のブランドサイトを実現。',
  cta: '無料トライアルを開始',
  sec1Title: 'SHOP Builder + 業界テーマ\nプレミアムなブランドサイトを簡単に',
  sec1Desc: '厳選レイアウトと業界向けテーマで、洗練されたブランドルックをすばやく公開。',
  sec1Items: ['コーディング不要のドラッグ＆ドロップ編集', '業界おすすめテーマオプション', 'フロントエンドカスタマイズ用 Layout Engine'],
  sec2Title: 'スマートな構成パーツ\n15+ インタラクティブモジュール',
  sec2Desc: '豊富なインタラクティブモジュールで滞在時間とエンゲージメントを向上。',
  sec2Items: ['SHOP Builder コンバージョンモジュール', 'ストアフロントでクラウドファンディングページ'],
  sec3Title: 'パフォーマンス向上\nサイトをさらに先へ',
  sec3Desc: '高速読み込みと高い Google スコアでロングテール SEO の価値を解放。',
  sec3Items: ['ページ要素の読み込み高速化', 'より良い Google サイトスコア', 'ロングテール流入向けの強力な SEO'],
  ctaTitle: '世界中 60 万以上の加盟店が ARVIX を利用',
}

const vi: ShopBuilderCopy = {
  title: 'Thiết kế tự do\nTrình chỉnh sửa trang SHOP Builder',
  subtitle: 'Không cần code — kéo thả để dựng trang và tạo website thương hiệu đẳng cấp.',
  cta: 'Bắt đầu dùng thử miễn phí',
  sec1Title: 'SHOP Builder + theme ngành\nWebsite thương hiệu cao cấp thật dễ',
  sec1Desc: 'Chọn layout chọn lọc và theme sẵn cho ngành để ra mắt vẻ ngoài chuyên nghiệp nhanh chóng.',
  sec1Items: ['Chỉnh sửa kéo-thả, không cần code', 'Tùy chọn theme theo ngành', 'Layout Engine tùy biến front-end'],
  sec2Title: 'Khối dựng thông minh\n15+ module tương tác',
  sec2Desc: 'Module tương tác phong phú giữ khách tham gia và tăng thời gian trên trang.',
  sec2Items: ['Module chuyển đổi SHOP Builder', 'Trang crowdfunding trên storefront'],
  sec3Title: 'Tăng hiệu năng\nĐưa website lên tầm cao hơn',
  sec3Desc: 'Tải nhanh hơn và điểm Google cao hơn mở khóa giá trị SEO đuôi dài.',
  sec3Items: ['Tải phần tử trang nhanh hơn', 'Điểm Google tốt hơn', 'SEO mạnh cho traffic đuôi dài'],
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: ShopBuilderCopy = {
  title: 'Diseña con libertad\nEditor de páginas SHOP Builder',
  subtitle: 'Sin código — arrastra y suelta para crear páginas y un sitio de marca de primer nivel.',
  cta: 'Empieza la prueba gratis',
  sec1Title: 'SHOP Builder + temas de industria\nUn sitio de marca premium, fácil',
  sec1Desc: 'Elige layouts curados y temas listos para tu industria y lanza un look pulido rápido.',
  sec1Items: ['Edición arrastrar y soltar, sin código', 'Opciones de temas recomendadas por industria', 'Layout Engine para personalización front-end'],
  sec2Title: 'Bloques inteligentes\n15+ módulos interactivos',
  sec2Desc: 'Módulos interactivos ricos mantienen el engagement y aumentan el tiempo en sitio.',
  sec2Items: ['Módulos de conversión SHOP Builder', 'Páginas de crowdfunding en tu escaparate'],
  sec3Title: 'Impulso de rendimiento\nLleva tu sitio más lejos',
  sec3Desc: 'Cargas más rápidas y mejores puntuaciones de Google desbloquean más SEO de cola larga.',
  sec3Items: ['Carga más rápida de elementos', 'Mejores puntuaciones de Google', 'SEO fuerte para tráfico de cola larga'],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: ShopBuilderCopy = {
  title: 'Desenhe com liberdade\nEditor de páginas SHOP Builder',
  subtitle: 'Sem código — arraste e solte para montar páginas e criar um site de marca de alto nível.',
  cta: 'Começar teste grátis',
  sec1Title: 'SHOP Builder + temas do setor\nSite de marca premium, fácil',
  sec1Desc: 'Escolha layouts selecionados e temas prontos para o setor e lance um visual polido rápido.',
  sec1Items: ['Edição arrastar e soltar, sem código', 'Opções de tema recomendadas por setor', 'Layout Engine para customização front-end'],
  sec2Title: 'Blocos inteligentes\n15+ módulos interativos',
  sec2Desc: 'Módulos interativos ricos mantêm o engajamento e aumentam o tempo no site.',
  sec2Items: ['Módulos de conversão SHOP Builder', 'Páginas de crowdfunding na vitrine'],
  sec3Title: 'Impulso de desempenho\nLeve seu site mais longe',
  sec3Desc: 'Carregamentos mais rápidos e melhores notas do Google liberam mais SEO de cauda longa.',
  sec3Items: ['Carregamento mais rápido de elementos', 'Melhores notas do Google', 'SEO forte para tráfego de cauda longa'],
  ctaTitle: 'Mais de 600.000 lojistas confiam na ARVIX',
}

const de: ShopBuilderCopy = {
  title: 'Frei gestalten\nSHOP Builder Seiten-Editor',
  subtitle: 'Kein Code nötig — per Drag-and-Drop Seiten bauen und eine erstklassige Markenseite erstellen.',
  cta: 'Kostenlos testen',
  sec1Title: 'SHOP Builder + Branchenthemes\nPremium-Markenseite leicht gemacht',
  sec1Desc: 'Wählen Sie kuratierte Layouts und branchenfertige Themes für einen polierten Markenauftritt.',
  sec1Items: ['Drag-and-Drop ohne Coding', 'Branchenseitige Theme-Optionen', 'Layout Engine für Front-End-Anpassung'],
  sec2Title: 'Smarte Bausteine\n15+ interaktive Module',
  sec2Desc: 'Reichhaltige interaktive Module halten Besucher engagiert und verlängern die Verweildauer.',
  sec2Items: ['SHOP Builder Conversion-Module', 'Crowdfunding-Seiten im Storefront'],
  sec3Title: 'Performance-Boost\nBringen Sie Ihre Seite weiter',
  sec3Desc: 'Schnellere Ladezeiten und bessere Google-Scores erschließen mehr Long-Tail-SEO.',
  sec3Items: ['Schnellere Seiten-Element-Ladung', 'Bessere Google-Site-Scores', 'Starkes SEO für Long-Tail-Traffic'],
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: ShopBuilderCopy = {
  title: 'Concevez librement\nÉditeur de pages SHOP Builder',
  subtitle: 'Sans code — glissez-déposez pour construire des pages et créer un site de marque de premier plan.',
  cta: 'Démarrer l’essai gratuit',
  sec1Title: 'SHOP Builder + thèmes sectoriels\nUn site de marque premium, en toute simplicité',
  sec1Desc: 'Choisissez des mises en page soignées et des thèmes prêts pour votre secteur pour un look poli rapidement.',
  sec1Items: ['Édition glisser-déposer, sans code', 'Options de thèmes recommandées par secteur', 'Layout Engine pour personnalisation front-end'],
  sec2Title: 'Blocs intelligents\n15+ modules interactifs',
  sec2Desc: 'Des modules interactifs riches maintiennent l’engagement et augmentent le temps passé sur le site.',
  sec2Items: ['Modules de conversion SHOP Builder', 'Pages de crowdfunding sur votre vitrine'],
  sec3Title: 'Boost de performance\nFaites aller plus loin votre site',
  sec3Desc: 'Chargements plus rapides et meilleurs scores Google débloquent plus de SEO de longue traîne.',
  sec3Items: ['Chargement plus rapide des éléments', 'Meilleurs scores Google', 'SEO fort pour le trafic de longue traîne'],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}

const copy: Partial<Record<Locale, ShopBuilderCopy>> & { 'zh-TW': ShopBuilderCopy; en: ShopBuilderCopy } = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  en,
  ko,
  ja,
  vi,
  es,
  pt,
  de,
  fr,
}

export default function ShopBuilderPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(101.4deg, rgb(244, 247, 252) 0%, rgb(122, 210, 254) 50%, rgb(0, 97, 255) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line" style={{ color: '#00142D' }}>
              {c.title}
            </h1>
            <p className="text-lg mb-8" style={{ color: '#687280' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80" alt="SHOP Builder" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec1Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec1Desc}</p>
            <div className="space-y-4">
              {c.sec1Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="SHOP Builder themes" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec2Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec2Desc}</p>
            <div className="space-y-4">
              {c.sec2Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80" alt="SHOP Builder modules" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.sec3Title}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.sec3Desc}</p>
            <div className="space-y-4">
              {c.sec3Items.map(h3 => (
                <div key={h3} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h3}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80" alt="SHOP Builder SEO" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#00142D' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-white mb-4">{c.ctaTitle}</h2>
          <a href="/register" className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ color: '#5B5FF0' }}>
            {c.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
