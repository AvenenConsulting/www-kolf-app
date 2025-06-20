import { Locale } from '@/lib/translations'

interface FooterProps {
  locale: Locale
  translations: any
}

export default function Footer({ locale, translations: t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={`/logo.svg?v=${Date.now()}`}
              alt="KOLF Logo" 
              className="h-14 w-14"
              style={{ height: '56px', width: '56px' }}
            />
          </div>
          <p className="text-gray-400 max-w-md mx-auto">{t.footer.tagline}</p>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-12">
          <p className="text-center text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}