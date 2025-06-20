'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/translations'
import { trackLanguageSwitch } from '@/lib/analytics'
import { getPathWithoutLocale } from '@/lib/i18n/detectLanguage'
import Image from 'next/image'

const languages = [
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  { code: 'th' as const, name: 'ไทย', flag: '🇹🇭' },
  { code: 'ko' as const, name: '한국어', flag: '🇰🇷' },
  { code: 'ja' as const, name: '日本語', flag: '🇯🇵' },
  { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
]

interface HeaderProps {
  locale: Locale
  translations: any
}

export default function Header({ locale, translations: t }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleLanguage = () => setIsLangOpen(!isLangOpen)

  const handleLanguageChange = (newLocale: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    // Track language change
    trackLanguageSwitch(locale, newLocale)
    
    // Navigate to new path
    router.push(newPath)
    setIsLangOpen(false)
  }

  const navItems = [
    { href: '#features', label: t.nav.features },
    { href: '#benefits', label: t.nav.benefits },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={`/logo.svg?v=${Date.now()}`}
                alt="KOLF Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === locale)?.flag}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.name}</span>
                          {lang.code === locale && (
                            <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href={`/${locale}/login`} className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              {t.nav.login}
            </Link>
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {t.nav.demo}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-all duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="px-4 space-y-2">
                    {/* Mobile Language Selector */}
                    <div className="py-2">
                      <div className="text-sm font-medium text-gray-500 mb-2">Language</div>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              handleLanguageChange(lang.code)
                              setIsOpen(false)
                            }}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                              lang.code === locale
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/${locale}/login`}
                      className="block text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      {t.nav.login}
                    </Link>
                    <a
                      href="#hero"
                      className="block btn-primary text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.nav.demo}
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}