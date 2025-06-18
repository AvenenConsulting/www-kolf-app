'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/lib/translations'
import { getPathWithoutLocale } from '@/lib/i18n/detectLanguage'
import { trackEvent } from '@/lib/analytics'

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] as Locale

  const handleLanguageChange = (locale: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)
    const newPath = `/${locale}${pathWithoutLocale}`
    
    // Track language change
    trackEvent('language_change', 'navigation', locale)
    
    // Navigate to new path
    router.push(newPath)
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md bg-white"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
} 