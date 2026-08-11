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
      className="fixed z-[9999] block transition-transform hover:scale-105 active:scale-95"
      style={{
        right: '16px',
        bottom: '20px',
        width: '68px',
        height: '68px',
        filter: 'drop-shadow(0 8px 18px rgba(6, 199, 85, 0.4))',
      }}
    >
      <Image
        src="/line-chat.png"
        alt="LINE 客服"
        width={68}
        height={68}
        className="w-full h-full object-contain"
        priority
        unoptimized
      />
    </a>
  )
}
