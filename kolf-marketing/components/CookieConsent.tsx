'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface CookieConsentProps {
  locale: string
  onAccept: () => void
  onDecline: () => void
  translations: any
}

export function CookieConsent({ locale, onAccept, onDecline, translations }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)
  const t = translations

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      onAccept()
    }
  }, [onAccept])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
    onDecline()
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="text-lg font-semibold mb-2">
              {t?.cookieConsent?.title || 'We use cookies'}
            </h3>
            <p className="text-sm text-gray-600">
              {t?.cookieConsent?.description || 'We use cookies to analyze our website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.'}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {t?.cookieConsent?.decline || 'Decline'}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              {t?.cookieConsent?.accept || 'Accept'}
            </button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}