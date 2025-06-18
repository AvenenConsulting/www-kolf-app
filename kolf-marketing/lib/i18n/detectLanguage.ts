import { Locale } from '@/lib/translations'

const SUPPORTED_LOCALES: Locale[] = ['en', 'th', 'ja', 'ko', 'zh']
const DEFAULT_LOCALE: Locale = 'en'

/**
 * Detects the user's preferred language based on:
 * 1. URL path parameter
 * 2. Accept-Language header
 * 3. Browser's navigator.language
 * 4. Default locale (en)
 */
export function detectLanguage(
  pathLocale?: string,
  acceptLanguage?: string
): Locale {
  // Check if path locale is supported
  if (pathLocale && SUPPORTED_LOCALES.includes(pathLocale as Locale)) {
    return pathLocale as Locale
  }

  // Parse Accept-Language header
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',')
    for (const lang of languages) {
      const [language] = lang.split(';')
      const locale = language.trim().split('-')[0] as Locale
      if (SUPPORTED_LOCALES.includes(locale)) {
        return locale
      }
    }
  }

  // Check browser's language
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language.split('-')[0] as Locale
    if (SUPPORTED_LOCALES.includes(browserLang)) {
      return browserLang
    }
  }

  return DEFAULT_LOCALE
}

/**
 * Gets the locale from the URL path
 * @param pathname The current URL path
 * @returns The locale from the path or undefined
 */
export function getLocaleFromPath(pathname: string): Locale | undefined {
  const pathParts = pathname.split('/')
  const pathLocale = pathParts[1]
  return SUPPORTED_LOCALES.includes(pathLocale as Locale) ? (pathLocale as Locale) : undefined
}

/**
 * Gets the path without the locale prefix
 * @param pathname The current URL path
 * @returns The path without the locale prefix
 */
export function getPathWithoutLocale(pathname: string): string {
  const pathParts = pathname.split('/')
  const pathLocale = pathParts[1]
  return SUPPORTED_LOCALES.includes(pathLocale as Locale)
    ? '/' + pathParts.slice(2).join('/')
    : pathname
} 