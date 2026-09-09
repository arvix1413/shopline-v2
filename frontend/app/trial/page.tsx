'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ExternalLink } from 'lucide-react'
import { track } from '../../lib/tracker'
import { useI18n } from '../../contexts/I18nContext'
import { pickCopy } from '../../lib/i18n/pageCopy'
import type { Locale } from '../../lib/i18n'

const API = process.env.NEXT_PUBLIC_API_URL || 'https://shopline-backend.arvix1413.workers.dev'

interface TrialSystem {
  id: number; name: string; desc: string; url: string
  color: string; bg: string; border: string; emoji: string; tags: string[]
}

type TrialCopy = {
  loading: string
  badge: string
  title: string
  subtitle: string
  empty: string
  tryNow: string
}

const zhTW: TrialCopy = {
  loading: '載入中...',
  badge: '系統試用中心（管理員）',
  title: '選擇你想試用的系統',
  subtitle: '此頁僅管理員可用。一般商家請使用「我的商店」。',
  empty: '目前尚無可用的試用系統，請稍後再試',
  tryNow: '立即體驗',
}

const zhCN: TrialCopy = {
  loading: '加载中...',
  badge: '系统试用中心（管理员）',
  title: '选择你想试用的系统',
  subtitle: '此页仅管理员可用。一般商家请使用「我的商店」。',
  empty: '目前尚无可用的试用系统，请稍后再试',
  tryNow: '立即体验',
}

const en: TrialCopy = {
  loading: 'Loading...',
  badge: 'Trial systems hub (admin)',
  title: 'Choose a system to try',
  subtitle: 'Admin only. Merchants should use My Store.',
  empty: 'No trial systems available yet. Please check back later.',
  tryNow: 'Try now',
}

const ko: TrialCopy = {
  loading: '로딩 중...',
  badge: '체험 시스템 허브 (관리자)',
  title: '체험할 시스템을 선택하세요',
  subtitle: '관리자 전용입니다. 일반 판매자는 「내 스토어」를 이용해 주세요.',
  empty: '아직 사용 가능한 체험 시스템이 없습니다. 나중에 다시 확인해 주세요.',
  tryNow: '지금 체험',
}

const ja: TrialCopy = {
  loading: '読み込み中...',
  badge: 'トライアルシステムハブ（管理者）',
  title: '試したいシステムを選ぶ',
  subtitle: '管理者専用です。一般の店舗は「マイストア」をご利用ください。',
  empty: '現在利用可能なトライアルシステムはありません。後でもう一度ご確認ください。',
  tryNow: '今すぐ体験',
}

const vi: TrialCopy = {
  loading: 'Đang tải...',
  badge: 'Trung tâm hệ thống dùng thử (quản trị)',
  title: 'Chọn hệ thống muốn dùng thử',
  subtitle: 'Chỉ dành cho quản trị viên. Nhà bán hàng vui lòng dùng 「Cửa hàng của tôi」.',
  empty: 'Chưa có hệ thống dùng thử nào. Vui lòng quay lại sau.',
  tryNow: 'Dùng thử ngay',
}

const es: TrialCopy = {
  loading: 'Cargando...',
  badge: 'Centro de sistemas de prueba (admin)',
  title: 'Elige un sistema para probar',
  subtitle: 'Solo administradores. Los comerciantes deben usar Mi tienda.',
  empty: 'Aún no hay sistemas de prueba disponibles. Vuelve más tarde.',
  tryNow: 'Probar ahora',
}

const pt: TrialCopy = {
  loading: 'Carregando...',
  badge: 'Central de sistemas de teste (admin)',
  title: 'Escolha um sistema para testar',
  subtitle: 'Apenas administradores. Comerciantes devem usar Minha loja.',
  empty: 'Ainda não há sistemas de teste disponíveis. Volte mais tarde.',
  tryNow: 'Testar agora',
}

const de: TrialCopy = {
  loading: 'Wird geladen...',
  badge: 'Testsysteme-Hub (Admin)',
  title: 'System zum Testen auswählen',
  subtitle: 'Nur für Administratoren. Händler sollten Mein Shop nutzen.',
  empty: 'Noch keine Testsysteme verfügbar. Bitte später erneut prüfen.',
  tryNow: 'Jetzt testen',
}

const fr: TrialCopy = {
  loading: 'Chargement...',
  badge: 'Hub des systèmes d’essai (admin)',
  title: 'Choisissez un système à essayer',
  subtitle: 'Réservé aux administrateurs. Les marchands doivent utiliser Ma boutique.',
  empty: 'Aucun système d’essai disponible pour le moment. Réessayez plus tard.',
  tryNow: 'Essayer maintenant',
}

const copy: Partial<Record<Locale, TrialCopy>> & { 'zh-TW': TrialCopy; en: TrialCopy } = {
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

export default function TrialPage() {
  const { user, token, isLoading } = useAuth()
  const router = useRouter()
  const { locale } = useI18n()
  const c = pickCopy(locale, copy)
  const [systems, setSystems] = useState<TrialSystem[]>([])
  const [fetching, setFetching] = useState(true)
  const [ssoToken, setSsoToken] = useState<string | null>(null)

  // Merchants never stay on this old multi-system hub
  useEffect(() => {
    if (isLoading) return
    if (!user) {
      router.replace('/login?next=/my-store')
      return
    }
    if (user.isAdmin !== 1) {
      router.replace('/my-store')
    }
  }, [user, isLoading, router])

  useEffect(() => {
    if (!token || user?.isAdmin !== 1) return
    fetch(`${API}/api/auth/sso-token`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then(data => { if (data.ssoToken) setSsoToken(data.ssoToken) })
      .catch(() => {})
  }, [token, user])

  useEffect(() => {
    if (!user || user.isAdmin !== 1) return
    fetch(`${API}/api/trial-systems`)
      .then(r => r.json())
      .then(data => setSystems(Array.isArray(data) ? data.filter((s: any) => s.active) : []))
      .catch(() => setSystems([]))
      .finally(() => setFetching(false))
  }, [user])

  if (isLoading || !user || user.isAdmin !== 1) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#07071A' }}>
        <div className="text-white/40 text-sm">{c.loading}</div>
      </main>
    )
  }

  if (fetching || !ssoToken) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#07071A' }}>
        <div className="text-white/40 text-sm">{c.loading}</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#07071A', color: '#fff' }}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(91,95,240,0.15)', border: '1px solid rgba(91,95,240,0.3)', color: '#B4B7FF' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#5B5FF0', display: 'inline-block' }} />
            {c.badge}
          </div>
          <h1 className="text-4xl font-black mb-4">{c.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16 }}>
            {c.subtitle}
          </p>
        </div>

        {systems.length === 0 ? (
          <div className="text-center py-20" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {c.empty}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {systems.map(sys => (
              <a key={sys.id} href={`${sys.url}?token=${encodeURIComponent(ssoToken || token || '')}&email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(user.name || user.email)}`} target="_blank" rel="noopener noreferrer"
              onClick={() => track('enter_dashboard', { system: sys.name }, user.id)}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                style={{ background: sys.bg, border: `1px solid ${sys.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                <div className="text-4xl mb-4">{sys.emoji}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{sys.name}</h3>
                  <ExternalLink size={16} className="opacity-40 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0" style={{ color: sys.color }} />
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{sys.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sys.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: `${sys.color}18`, color: sys.color, border: `1px solid ${sys.color}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderTop: `1px solid ${sys.border}`, color: sys.color }}>
                  {c.tryNow} <ExternalLink size={13} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
