'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { type Locale, type Translations, translations } from '../lib/i18n'

export const LOCALE_STORAGE_KEY = 'arvix-locale'

type I18nContextType = {
  locale: Locale
  t: Translations
  setLocale: (l: Locale) => void
}

export function isLocale(v: string | null | undefined): v is Locale {
  return !!v && Object.prototype.hasOwnProperty.call(translations, v)
}

export function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'zh-TW'
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    /* ignore */
  }
  return 'zh-TW'
}

function applyLocaleToDocument(l: Locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = l
  document.documentElement.classList.remove('arvix-i18n-pending')
  const title = translations[l]?.common?.seoTitle
  if (title) document.title = title
}

const I18nContext = createContext<I18nContextType>({
  locale: 'zh-TW',
  t: translations['zh-TW'],
  setLocale: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  useEffect(() => {
    const saved = readStoredLocale()
    setLocaleState(saved)
    applyLocaleToDocument(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
    applyLocaleToDocument(l)
  }

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)

