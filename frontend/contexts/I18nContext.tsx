'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { type Locale, type Translations, translations } from '../lib/i18n'

type I18nContextType = {
  locale: Locale
  t: Translations
  setLocale: (l: Locale) => void
}

const I18nContext = createContext<I18nContextType>({
  locale: 'zh-TW',
  t: translations['zh-TW'],
  setLocale: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh-TW')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('arvix-locale') as Locale | null
    if (saved && translations[saved]) setLocaleState(saved)
    setMounted(true)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('arvix-locale', l)
    document.documentElement.lang = l
  }

  // Use saved locale only after mount to avoid hydration mismatch
  const activeLocale = mounted ? locale : 'zh-TW'

  return (
    <I18nContext.Provider value={{ locale: activeLocale, t: translations[activeLocale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)

