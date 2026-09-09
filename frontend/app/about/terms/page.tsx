'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'

const copy = {
  'zh-TW': { title: '會員條款', body: 'ARVIX 會員服務條款。' },
  'zh-CN': { title: '会员条款', body: 'ARVIX 会员服务条款。' },
  en: { title: 'Terms of Service', body: 'ARVIX membership terms of service.' },
  ko: { title: '이용약관', body: 'ARVIX 회원 서비스 이용약관.' },
  ja: { title: '利用規約', body: 'ARVIX 会員サービスの利用規約。' },
  vi: { title: 'Điều khoản dịch vụ', body: 'Điều khoản dịch vụ thành viên ARVIX.' },
  es: { title: 'Términos del servicio', body: 'Términos del servicio de membresía de ARVIX.' },
  pt: { title: 'Termos de serviço', body: 'Termos de serviço de associação da ARVIX.' },
  de: { title: 'Nutzungsbedingungen', body: 'ARVIX-Mitgliedschaftsbedingungen.' },
  fr: { title: 'Conditions d’utilisation', body: 'Conditions d’utilisation de l’adhésion ARVIX.' },
}

export default function TermsPage() {
  const { locale } = useI18n()
  const t = pickCopy(locale, copy)
  return (
    <main className="min-h-screen pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: '#00142D' }}>{t.title}</h1>
      <p style={{ color: '#354253' }}>{t.body}</p>
    </main>
  )
}
