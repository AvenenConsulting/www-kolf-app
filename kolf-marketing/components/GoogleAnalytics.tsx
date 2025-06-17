'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import ReactGA from 'react-ga4'

function GoogleAnalyticsTracker({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Don't initialize ReactGA since gtag is already initialized in the head
    // Just use ReactGA for tracking page views and events
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
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