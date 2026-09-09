'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

type SmartOmoCopy = {
  title: string
  subtitle: string
  cta: string
  joinTitle: string
  joinDesc: string
  joinItems: string[]
  profileTitle: string
  profileDesc: string
  profileItems: string[]
  kolTitle: string
  kolDesc: string
  kolItems: string[]
  ctaTitle: string
}

const zhTW: SmartOmoCopy = {
  title: '解鎖全通路新零售',
  subtitle: '你知道嗎？同時在網店和門市消費的會員能多帶來 3 倍業績。Smart OMO 會員導購工具助你輕鬆轉型全通路新零售模式。',
  cta: '立即免費試用',
  joinTitle: '快速註冊、綁定 LINE 帳號\n會員，輕鬆 Get!',
  joinDesc: '進店註冊會員，會員數、LINE 好友同步成長，讓你的顧客資產快速累積。',
  joinItems: ['快速加入會員', '同步加 LINE 好友'],
  profileTitle: '全通路消費輪廓整合\n店員銷售強力推手',
  profileDesc: '掌握會員全通路資訊，提袋率大幅增加。店員 = 你的最佳 KOL，銷售更多可能。',
  profileItems: ['全通路資料整合', '線下消費金額同步累積'],
  kolTitle: '店員 = 你的最佳 KOL\n銷售，更多可能',
  kolDesc: '客製化購物車連結，導購不分時、地、域。關鍵 3 步驟跨入全通路時代趁現在。',
  kolItems: ['商品導購連結', '業績歸屬管理'],
  ctaTitle: '全球超過 600,000 商家已使用 ARVIX',
}

const zhCN: SmartOmoCopy = {
  title: '解锁全渠道新零售',
  subtitle: '你知道吗？同时在网店和门店消费的会员能多带来 3 倍业绩。Smart OMO 会员导购工具助你轻松转型全渠道新零售模式。',
  cta: '立即免费试用',
  joinTitle: '快速注册、绑定 LINE 账号\n会员，轻松 Get!',
  joinDesc: '进店注册会员，会员数、LINE 好友同步成长，让你的顾客资产快速累积。',
  joinItems: ['快速加入会员', '同步加 LINE 好友'],
  profileTitle: '全渠道消费轮廓整合\n店员销售强力推手',
  profileDesc: '掌握会员全渠道信息，提袋率大幅增加。店员 = 你的最佳 KOL，销售更多可能。',
  profileItems: ['全渠道资料整合', '线下消费金额同步累积'],
  kolTitle: '店员 = 你的最佳 KOL\n销售，更多可能',
  kolDesc: '定制化购物车链接，导购不分时、地、域。关键 3 步骤跨入全渠道时代趁现在。',
  kolItems: ['商品导购链接', '业绩归属管理'],
  ctaTitle: '全球超过 600,000 商家已使用 ARVIX',
}

const en: SmartOmoCopy = {
  title: 'Unlock omnichannel retail',
  subtitle: 'Members who shop both online and in-store drive 3x more revenue. Smart OMO member tools help you go omnichannel with ease.',
  cta: 'Start free trial',
  joinTitle: 'Quick signup + LINE binding\nMembers, easy.',
  joinDesc: 'Enroll in-store so membership and LINE friends grow together — build customer assets faster.',
  joinItems: ['Fast member enrollment', 'Add LINE friends in sync'],
  profileTitle: 'Unified omnichannel profiles\nStaff as your sales engine',
  profileDesc: 'Know the full member picture and lift basket rate. Your staff become your best KOLs.',
  profileItems: ['Omnichannel data unified', 'Offline spend syncs to loyalty'],
  kolTitle: 'Staff = your best KOLs\nMore ways to sell',
  kolDesc: 'Custom cart links for anytime, anywhere shopping. Three steps into the omnichannel era.',
  kolItems: ['Product shopping links', 'Sales attribution'],
  ctaTitle: 'Trusted by 600,000+ merchants worldwide',
}

const ko: SmartOmoCopy = {
  title: '옴니채널 리테일을 여세요',
  subtitle: '온·오프라인 모두에서 쇼핑하는 회원이 매출을 3배 더 만듭니다. Smart OMO 멤버 도구로 쉽게 옴니채널로 전환하세요.',
  cta: '무료 체험 시작',
  joinTitle: '빠른 가입 + LINE 연동\n멤버십, 쉽게.',
  joinDesc: '매장에서 등록해 멤버십과 LINE 친구가 함께 성장 — 고객 자산을 더 빨리 쌓으세요.',
  joinItems: ['빠른 회원 등록', 'LINE 친구 동기 추가'],
  profileTitle: '통합 옴니채널 프로필\n직원이 판매 엔진',
  profileDesc: '전체 회원 그림을 알고 장바구니율을 높이세요. 직원이 최고의 KOL이 됩니다.',
  profileItems: ['옴니채널 데이터 통합', '오프라인 지출이 로열티에 동기화'],
  kolTitle: '직원 = 최고의 KOL\n더 많은 판매 방식',
  kolDesc: '언제 어디서나 쇼핑하는 맞춤 카트 링크. 옴니채널 시대로 가는 세 단계.',
  kolItems: ['상품 쇼핑 링크', '매출 귀속'],
  ctaTitle: '전 세계 60만+ 판매자가 신뢰합니다',
}

const ja: SmartOmoCopy = {
  title: 'オムニチャネル小売を解き放つ',
  subtitle: 'オンラインと店舗の両方で買う会員は売上が 3 倍。Smart OMO 会員ツールでかんたんにオムニチャネルへ。',
  cta: '無料トライアルを開始',
  joinTitle: 'かんたん登録＋LINE 連携\n会員を、簡単に。',
  joinDesc: '店頭で登録し、会員数と LINE 友だちが同時に成長 — 顧客資産をより速く積み上げ。',
  joinItems: ['すばやい会員登録', 'LINE 友だちを同期追加'],
  profileTitle: '統合オムニチャネルプロフィール\nスタッフが販売エンジン',
  profileDesc: '会員の全体像を把握しバスケット率を向上。スタッフが最高の KOL に。',
  profileItems: ['オムニチャネルデータ統合', 'オフライン支出がロイヤリティに同期'],
  kolTitle: 'スタッフ＝最高の KOL\nもっと売れる方法',
  kolDesc: 'いつでもどこでも買い物できるカスタムカートリンク。オムニチャネル時代への 3 ステップ。',
  kolItems: ['商品ショッピングリンク', '売上帰属'],
  ctaTitle: '世界中 60 万以上の加盟店が信頼',
}

const vi: SmartOmoCopy = {
  title: 'Mở khóa bán lẻ omnichannel',
  subtitle: 'Thành viên mua cả online và tại cửa hàng mang lại doanh thu gấp 3. Công cụ thành viên Smart OMO giúp bạn chuyển omnichannel dễ dàng.',
  cta: 'Bắt đầu dùng thử miễn phí',
  joinTitle: 'Đăng ký nhanh + gắn LINE\nThành viên, dễ dàng.',
  joinDesc: 'Đăng ký tại cửa hàng để membership và bạn LINE cùng tăng — xây tài sản khách nhanh hơn.',
  joinItems: ['Đăng ký thành viên nhanh', 'Thêm bạn LINE đồng bộ'],
  profileTitle: 'Hồ sơ omnichannel thống nhất\nNhân viên là động cơ bán hàng',
  profileDesc: 'Nắm toàn bộ bức tranh thành viên và tăng tỷ lệ mua. Nhân viên trở thành KOL tốt nhất.',
  profileItems: ['Dữ liệu omnichannel hợp nhất', 'Chi tiêu offline đồng bộ loyalty'],
  kolTitle: 'Nhân viên = KOL tốt nhất\nNhiều cách bán hơn',
  kolDesc: 'Link giỏ tùy chỉnh để mua bất cứ lúc nào, bất cứ đâu. Ba bước vào kỷ nguyên omnichannel.',
  kolItems: ['Link mua sản phẩm', 'Gán doanh số'],
  ctaTitle: 'Được hơn 600.000 người bán trên thế giới tin dùng',
}

const es: SmartOmoCopy = {
  title: 'Desbloquea el retail omnicanal',
  subtitle: 'Los miembros que compran online y en tienda generan 3x más ingresos. Las herramientas Smart OMO te ayudan a ir omnicanal con facilidad.',
  cta: 'Empezar prueba gratis',
  joinTitle: 'Alta rápida + vínculo LINE\nMiembros, fácil.',
  joinDesc: 'Inscribe en tienda para que crezcan membresía y amigos LINE juntos — construye activos de clientes más rápido.',
  joinItems: ['Alta de miembros rápida', 'Añadir amigos LINE al unísono'],
  profileTitle: 'Perfiles omnicanal unificados\nEl personal como motor de ventas',
  profileDesc: 'Conoce el panorama completo del miembro y sube la tasa de cesta. Tu personal se convierte en tus mejores KOLs.',
  profileItems: ['Datos omnicanal unificados', 'El gasto offline se sincroniza con la lealtad'],
  kolTitle: 'Personal = tus mejores KOLs\nMás formas de vender',
  kolDesc: 'Enlaces de carrito personalizados para comprar en cualquier momento y lugar. Tres pasos a la era omnicanal.',
  kolItems: ['Enlaces de compra de producto', 'Atribución de ventas'],
  ctaTitle: 'Más de 600.000 comercios confían en ARVIX',
}

const pt: SmartOmoCopy = {
  title: 'Desbloqueie o varejo omnichannel',
  subtitle: 'Membros que compram online e na loja geram 3x mais receita. As ferramentas Smart OMO ajudam você a ir omnichannel com facilidade.',
  cta: 'Começar teste grátis',
  joinTitle: 'Cadastro rápido + vínculo LINE\nMembros, fácil.',
  joinDesc: 'Cadastre na loja para membership e amigos LINE crescerem juntos — construa ativos de clientes mais rápido.',
  joinItems: ['Cadastro rápido de membros', 'Adicionar amigos LINE em sincronia'],
  profileTitle: 'Perfis omnichannel unificados\nEquipe como motor de vendas',
  profileDesc: 'Conheça o panorama completo do membro e eleve a taxa de cesta. Sua equipe vira seus melhores KOLs.',
  profileItems: ['Dados omnichannel unificados', 'Gasto offline sincroniza com loyalty'],
  kolTitle: 'Equipe = seus melhores KOLs\nMais formas de vender',
  kolDesc: 'Links de carrinho personalizados para comprar a qualquer hora e lugar. Três passos para a era omnichannel.',
  kolItems: ['Links de compra de produto', 'Atribuição de vendas'],
  ctaTitle: 'Mais de 600.000 comerciantes confiam na ARVIX',
}

const de: SmartOmoCopy = {
  title: 'Omnichannel-Retail freischalten',
  subtitle: 'Mitglieder, die online und im Store kaufen, bringen 3x mehr Umsatz. Smart-OMO-Mitgliedstools helfen Ihnen, einfach omnichannel zu gehen.',
  cta: 'Kostenlose Testphase starten',
  joinTitle: 'Schnelle Anmeldung + LINE-Bindung\nMitglieder, einfach.',
  joinDesc: 'Im Store anmelden, damit Mitgliedschaft und LINE-Freunde gemeinsam wachsen — Kundenassets schneller aufbauen.',
  joinItems: ['Schnelle Mitgliederaufnahme', 'LINE-Freunde synchron hinzufügen'],
  profileTitle: 'Vereinheitlichte Omnichannel-Profile\nMitarbeiter als Verkaufsmotor',
  profileDesc: 'Kennen Sie das volle Mitgliederbild und steigern Sie die Basket-Rate. Ihre Mitarbeiter werden Ihre besten KOLs.',
  profileItems: ['Omnichannel-Daten vereint', 'Offline-Ausgaben synchronisieren mit Loyalty'],
  kolTitle: 'Mitarbeiter = Ihre besten KOLs\nMehr Wege zu verkaufen',
  kolDesc: 'Individuelle Warenkorb-Links für Einkaufen jederzeit und überall. Drei Schritte in die Omnichannel-Ära.',
  kolItems: ['Produkt-Shopping-Links', 'Umsatzattribution'],
  ctaTitle: 'Über 600.000 Händler weltweit vertrauen ARVIX',
}

const fr: SmartOmoCopy = {
  title: 'Débloquez le retail omnicanal',
  subtitle: 'Les membres qui achètent online et en magasin génèrent 3x plus de revenus. Les outils membres Smart OMO vous aident à passer omnicanal facilement.',
  cta: 'Démarrer l’essai gratuit',
  joinTitle: 'Inscription rapide + liaison LINE\nMembres, simple.',
  joinDesc: 'Inscrivez en magasin pour que membership et amis LINE croissent ensemble — construisez plus vite les actifs clients.',
  joinItems: ['Inscription membres rapide', 'Ajouter des amis LINE en sync'],
  profileTitle: 'Profils omnicanaux unifiés\nLe personnel comme moteur de ventes',
  profileDesc: 'Connaissez le tableau complet du membre et augmentez le taux de panier. Votre personnel devient vos meilleurs KOLs.',
  profileItems: ['Données omnicanales unifiées', 'Les dépenses offline se synchronisent à la fidélité'],
  kolTitle: 'Personnel = vos meilleurs KOLs\nPlus de façons de vendre',
  kolDesc: 'Liens panier personnalisés pour acheter n’importe quand, n’importe où. Trois étapes vers l’ère omnicanale.',
  kolItems: ['Liens d’achat produit', 'Attribution des ventes'],
  ctaTitle: 'Plus de 600 000 marchands font confiance à ARVIX',
}


const copy: Partial<Record<Locale, SmartOmoCopy>> & { 'zh-TW': SmartOmoCopy; en: SmartOmoCopy } = {
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

export default function SmartOmoPage() {
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)

  return (
    <main>
      <section className="py-24" style={{ background: 'linear-gradient(90deg, rgb(127, 193, 255) 0%, rgb(0, 159, 180) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#00142D' }}>{c.title}</h1>
            <p className="text-lg mb-8" style={{ color: '#00142D' }}>{c.subtitle}</p>
            <a href="/register" className="inline-block text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5B5FF0' }}>
              {c.cta}
            </a>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Smart OMO" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.joinTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.joinDesc}</p>
            <div className="space-y-4">
              {c.joinItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Smart OMO signup" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4F7FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.profileTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.profileDesc}</p>
            <div className="space-y-4">
              {c.profileItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Smart OMO profiles" width={600} height={450} className="w-full h-auto" unoptimized />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4 whitespace-pre-line" style={{ color: '#00142D' }}>{c.kolTitle}</h2>
            <p className="mb-6" style={{ color: '#687280' }}>{c.kolDesc}</p>
            <div className="space-y-4">
              {c.kolItems.map(h4 => (
                <div key={h4} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B5FF0' }}></span>
                  <span className="font-semibold" style={{ color: '#00142D' }}>{h4}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Smart OMO staff shopping" width={600} height={450} className="w-full h-auto" unoptimized />
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
