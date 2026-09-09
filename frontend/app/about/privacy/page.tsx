'use client'

import { useI18n } from '../../../contexts/I18nContext'
import { pickCopy } from '../../../lib/i18n/pageCopy'

const copy = {
  'zh-TW': { title: '隱私權政策', body: 'ARVIX 隱私權政策說明。' },
  'zh-CN': { title: '隐私权政策', body: 'ARVIX 隐私权政策说明。' },
  en: { title: 'Privacy Policy', body: 'ARVIX privacy policy overview.' },
  ko: { title: '개인정보 처리방침', body: 'ARVIX 개인정보 처리방침 안내.' },
  ja: { title: 'プライバシーポリシー', body: 'ARVIX プライバシーポリシーの概要。' },
  vi: { title: 'Chính sách bảo mật', body: 'Tóm tắt chính sách bảo mật của ARVIX.' },
  es: { title: 'Política de privacidad', body: 'Resumen de la política de privacidad de ARVIX.' },
  pt: { title: 'Política de privacidade', body: 'Visão geral da política de privacidade da ARVIX.' },
  de: { title: 'Datenschutzrichtlinie', body: 'Übersicht zur ARVIX-Datenschutzrichtlinie.' },
  fr: { title: 'Politique de confidentialité', body: 'Aperçu de la politique de confidentialité ARVIX.' },
}

export default function PrivacyPage() {
  const { locale } = useI18n()
  const t = pickCopy(locale, copy)
  return (
    <main className="min-h-screen pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: '#00142D' }}>{t.title}</h1>
      <p style={{ color: '#354253' }}>{t.body}</p>
    </main>
  )
}
