import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHOPLINE 全方位零售整合專家',
  description: 'SHOPLINE 提供全方位的零售解決方案，一站實現全通路整合，並透過知識賦能與生態圈服務拓展商機、驅動成長！',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
