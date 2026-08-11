'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'

export default function TrialRedirectPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return
    router.replace(user ? '/trial' : '/register')
  }, [user, isLoading, router])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#07071A' }}>
      <div className="text-white/40 text-sm">載入中...</div>
    </div>
  )
}
