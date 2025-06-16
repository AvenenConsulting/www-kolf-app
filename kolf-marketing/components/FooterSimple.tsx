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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-bold text-2xl">KOLF</span>
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