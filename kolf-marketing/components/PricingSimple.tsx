import { Locale } from '@/lib/translations'

interface PricingProps {
  locale: Locale
  translations: any
}

export default function Pricing({ locale, translations: t }: PricingProps) {
  return (
    <section id="pricing" className="section-padding bg-green-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            {t.pricing.badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}