import { Locale } from '@/lib/translations'

interface BenefitsProps {
  locale: Locale
  translations: any
}

export default function Benefits({ locale, translations: t }: BenefitsProps) {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
          Why Choose KOLF
        </span>
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Built by Golf Insiders for Asian Excellence
        </h2>
        <p className="text-gray-600">
          Our founding team combines 40+ years of Golf Software experience – creating the platform golf courses have been waiting for.
        </p>
      </div>
    </section>
  )
}