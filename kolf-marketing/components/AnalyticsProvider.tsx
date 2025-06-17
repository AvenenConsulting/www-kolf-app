'use client'

import { GoogleAnalytics } from './GoogleAnalytics'
import { ScrollDepthTracker } from './ScrollDepthTracker'

interface AnalyticsProviderProps {
  children: React.ReactNode
  locale: string
}

export function AnalyticsProvider({ children, locale }: AnalyticsProviderProps) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <>
      {children}
      {GA_MEASUREMENT_ID && (
        <>
          <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
          <ScrollDepthTracker />
        </>
      )}
    </>
  )
}