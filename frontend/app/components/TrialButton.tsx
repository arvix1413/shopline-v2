'use client'

import { useAuth } from '../../contexts/AuthContext'

interface TrialButtonProps {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function TrialButton({ label = '立即免費試用', className = '', style }: TrialButtonProps) {
  const { user, isLoading } = useAuth()
  const href = !isLoading && user ? '/trial' : '/register'

  return (
    <a href={href} className={className} style={style}>
      {label}
    </a>
  )
}
