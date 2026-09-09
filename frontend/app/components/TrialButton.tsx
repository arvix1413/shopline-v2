'use client'

import { useAuth } from '../../contexts/AuthContext'
import { useI18n } from '../../contexts/I18nContext'

interface TrialButtonProps {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function TrialButton({ label, className = '', style }: TrialButtonProps) {
  const { user, isLoading } = useAuth()
  const { t } = useI18n()
  const href = !isLoading && user ? '/my-store' : '/register'
  const text = label || t.common.startTrial

  return (
    <a href={href} className={className} style={style}>
      {text}
    </a>
  )
}
