'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'
import { useI18n } from '../../contexts/I18nContext'

export default function TrialRedirectPage() {
  const { user, isLoading } = useAuth()
  const { t } = useI18n()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return
    router.replace(user ? '/trial' : '/register')
  }, [user, isLoading, router])

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#07071A' }}>
      <div className="text-white/40 text-sm">{t.common.loading}</div>
    </div>
  )
}
