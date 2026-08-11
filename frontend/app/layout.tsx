import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '../contexts/I18nContext'
import { AuthProvider } from '../contexts/AuthContext'
import TrafficCapture from './components/TrafficCapture'
import LineChatBubble from './components/LineChatBubble'
import TrialBanner from './components/TrialBanner'

export const metadata: Metadata = {
  title: 'ARVIX 全方位零售整合專家 | 電商平台 SaaS 開店系統',
  description: 'ARVIX 提供全方位的零售解決方案，一站實現全通路整合。超過 60 萬商家信賴，免費試用 14 天，立即體驗電商平台、POS 系統、社群購物整合。',
  keywords: '電商平台,網路開店,SaaS電商,ARVIX,零售整合,開店系統,POS系統,社群購物,全通路',
  openGraph: {
    title: 'ARVIX 全方位零售整合專家',
    description: '超過 60 萬商家信賴的電商解決方案，免費試用 14 天',
    siteName: 'ARVIX',
    locale: 'zh_TW',
    type: 'website',
    url: 'https://arvixai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARVIX 全方位零售整合專家',
    description: '超過 60 萬商家信賴的電商解決方案，免費試用 14 天',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://arvixai.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>
          <AuthProvider>
            <TrafficCapture />
            <TrialBanner />
            {children}
            <LineChatBubble />
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
