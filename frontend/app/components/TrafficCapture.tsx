'use client'
import { useEffect } from 'react'
import { captureTrafficSource } from '../../lib/tracker'

export default function TrafficCapture() {
  useEffect(() => { captureTrafficSource() }, [])
  return null
}
