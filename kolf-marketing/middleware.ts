import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { detectLanguage, getLocaleFromPath, getPathWithoutLocale } from '@/lib/i18n/detectLanguage'

const locales = ['en', 'th', 'ko', 'ja', 'zh']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Check if locale is in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameLocale) return pathnameLocale
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  if (acceptLanguage) {
    const detectedLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split('-')[0].trim())
      .find(lang => locales.includes(lang))
    
    if (detectedLocale) return detectedLocale
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathLocale = getLocaleFromPath(pathname)
  const acceptLanguage = request.headers.get('accept-language') || undefined
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // If the path already has a locale, continue
  if (pathLocale) {
    return NextResponse.next()
  }

  // Detect the user's preferred language
  const detectedLocale = detectLanguage(pathLocale, acceptLanguage)
  
  // Create the new URL with the detected locale
  const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url)
  
  // Redirect to the localized path
  return NextResponse.redirect(newUrl)
}

function addSecurityHeaders(response: NextResponse) {
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // Content Security Policy - adjust as needed
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com https://formspree.io https://vitals.vercel-insights.com;
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://formspree.io;
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\n/g, '').replace(/\s+/g, ' ').trim()
  
  response.headers.set('Content-Security-Policy', cspHeader)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|static|.*\\..*).*)',
  ],
}