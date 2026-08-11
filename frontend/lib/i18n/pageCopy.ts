import { type Locale } from './index'

export function pickCopy<T>(locale: Locale, dict: Record<string, T> & { 'zh-TW': T; en: T }): T {
  return dict[locale] ?? dict.en ?? dict['zh-TW']
}
