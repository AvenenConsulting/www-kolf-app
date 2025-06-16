import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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
  const pathname = request.nextUrl.pathname
  
  // Check if pathname is missing locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  
  // Redirect if locale is missing
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
  ],
}