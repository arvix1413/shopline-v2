import zhTW from './zh-TW'
import zhCN from './zh-CN'
import en from './en'
import ko from './ko'
import ja from './ja'
import vi from './vi'
import es from './es'
import pt from './pt'
import de from './de'
import fr from './fr'

export type Locale = 'zh-TW' | 'zh-CN' | 'en' | 'ko' | 'ja' | 'vi' | 'es' | 'pt' | 'de' | 'fr'

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

export const translations = { 'zh-TW': zhTW, 'zh-CN': zhCN, en, ko, ja, vi, es, pt, de, fr }

export { zhTW, zhCN, en, ko, ja, vi, es, pt, de, fr }
export type { Translations } from './zh-TW'
