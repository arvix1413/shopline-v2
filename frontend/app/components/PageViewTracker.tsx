'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageview } from '../../lib/tracker'

/** Fires a geo pageview on every client route change. */
export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    trackPageview(pathname)
  }, [pathname])

  return null
}
