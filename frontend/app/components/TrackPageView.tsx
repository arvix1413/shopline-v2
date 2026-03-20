'use client'
import { useEffect } from 'react'
import { track } from '../../lib/tracker'

export default function TrackPageView({ event }: { event: string }) {
  useEffect(() => { track(event) }, [event])
  return null
}
