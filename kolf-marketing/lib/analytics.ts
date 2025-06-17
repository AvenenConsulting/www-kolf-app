import ReactGA from 'react-ga4'

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-8SFBM8QD9M'

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'engagement',
    formName
  )
}

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${ctaName}_${location}`)
}

// Track demo requests
export const trackDemoRequest = (courseName?: string) => {
  trackEvent('demo_request', 'conversion', courseName)
}

// Track language switches
export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent('language_switch', 'engagement', `${fromLang}_to_${toLang}`)
}

// Track page scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`)
}

// Track pricing plan views
export const trackPricingPlanView = (planName: string) => {
  trackEvent('pricing_plan_view', 'engagement', planName)
}

// Track newsletter signup
export const trackNewsletterSignup = (success: boolean = true) => {
  trackEvent(
    success ? 'newsletter_signup_success' : 'newsletter_signup_error',
    'conversion'
  )
}