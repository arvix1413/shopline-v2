'use client'

import Image from 'next/image'

const LINE_URL = 'https://line.me/R/ti/p/@kxh0647n'

export default function LineChatBubble() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="透過 LINE 聯繫客服"
      title="LINE 客服"
      className="fixed z-[60] block w-12 h-12 sm:w-[60px] sm:h-[60px] transition-all hover:scale-105 active:scale-95 opacity-90 hover:opacity-100"
      style={{
        right: 'max(10px, env(safe-area-inset-right))',
        bottom: 'max(12px, env(safe-area-inset-bottom))',
        filter: 'drop-shadow(0 8px 18px rgba(6, 199, 85, 0.4))',
      }}
    >
      <Image
        src="/line-chat.png"
        alt="LINE 客服"
        width={60}
        height={60}
        className="w-full h-full object-contain"
        priority
        unoptimized
      />
    </a>
  )
}
