import zhTW from './zh-TW'
import zhCN from './zh-CN'
import en from './en'

export type Locale = 'zh-TW' | 'zh-CN' | 'en'

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'en',    label: 'English',  flag: '🌐' },
]

export const translations = { 'zh-TW': zhTW, 'zh-CN': zhCN, en }

export { zhTW, zhCN, en }
export type { Translations } from './zh-TW'
