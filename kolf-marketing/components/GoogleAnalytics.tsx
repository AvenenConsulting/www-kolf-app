'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import ReactGA from 'react-ga4'

function GoogleAnalyticsTracker({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize ReactGA once (it will use the existing gtag)
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      // Only initialize once
      if (!(window as any).GA_INITIALIZED) {
        ReactGA.initialize(GA_MEASUREMENT_ID)
        ;(window as any).GA_INITIALIZED = true
      }
      
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      ReactGA.send({ hitType: 'pageview', page: url })
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return null
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsTracker GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
    </Suspense>
  )
}