import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export function usePerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Create performance observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Track performance metrics
        trackEvent('performance_metric', 'measurement', entry.name, Math.round(entry.duration))
      }
    })

    // Start observing
    observer.observe({ entryTypes: ['measure', 'resource', 'paint', 'largest-contentful-paint'] })

    // Measure initial load time
    if (performance.mark) {
      performance.mark('app_loaded')
      performance.measure('initial_load', 'navigationStart', 'app_loaded')
    }

    // Track page load metrics
    window.addEventListener('load', () => {
      const timing = performance.timing
      if (timing) {
        const metrics = {
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          tcp: timing.connectEnd - timing.connectStart,
          request: timing.responseEnd - timing.requestStart,
          dom: timing.domComplete - timing.domLoading,
          load: timing.loadEventEnd - timing.navigationStart
        }

        // Track each metric
        Object.entries(metrics).forEach(([name, value]) => {
          trackEvent('page_load', 'timing', name, Math.round(value))
        })
      }
    })

    // Track resource timing
    const resources = performance.getEntriesByType('resource')
    resources.forEach(resource => {
      trackEvent('resource_load', 'timing', resource.name, Math.round(resource.duration))
    })

    // Track paint timing
    const paints = performance.getEntriesByType('paint')
    paints.forEach(paint => {
      trackEvent('paint', 'timing', paint.name, Math.round(paint.startTime))
    })

    // Track largest contentful paint
    const lcp = performance.getEntriesByType('largest-contentful-paint')
    if (lcp.length > 0) {
      trackEvent('lcp', 'timing', 'largest_contentful_paint', Math.round(lcp[0].startTime))
    }

    // Cleanup
    return () => {
      observer.disconnect()
    }
  }, [])
} 