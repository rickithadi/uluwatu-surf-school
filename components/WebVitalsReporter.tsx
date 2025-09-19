'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/web-vitals'

export default function WebVitalsReporter() {
  useEffect(() => {
    // Only report web vitals in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS === 'true') {
      reportWebVitals()
    }
  }, [])

  return null
}