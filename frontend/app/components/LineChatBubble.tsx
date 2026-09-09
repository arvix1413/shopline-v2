'use client'

import Image from 'next/image'
import { useI18n } from '../../contexts/I18nContext'

const LINE_URL = 'https://line.me/R/ti/p/@kxh0647n'

export default function LineChatBubble() {
  const { t } = useI18n()
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.lineSupport}
      title={t.common.lineSupport}
      className="fixed z-[60] block w-12 h-12 sm:w-[60px] sm:h-[60px] transition-all hover:scale-105 active:scale-95 opacity-90 hover:opacity-100"
      style={{
        right: 'max(10px, env(safe-area-inset-right))',
        bottom: 'max(12px, env(safe-area-inset-bottom))',
        filter: 'drop-shadow(0 8px 18px rgba(6, 199, 85, 0.4))',
      }}
    >
      <Image
        src="/line-chat.png"
        alt={t.common.lineSupport}
        width={60}
        height={60}
        className="w-full h-full object-contain"
        priority
        unoptimized
      />
    </a>
  )
}
