import { Locale } from '@/lib/translations'

interface FeaturesProps {
  locale: Locale
  translations: any
}

export default function Features({ locale, translations: t }: FeaturesProps) {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
          {t.features.badge}
        </span>
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          {t.features.title}
        </h2>
        <p className="text-gray-600">
          {t.features.subtitle}
        </p>
      </div>
    </section>
  )
}