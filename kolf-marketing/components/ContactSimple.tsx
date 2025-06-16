import { Locale } from '@/lib/translations'

interface ContactProps {
  locale: Locale
  translations: any
}

export default function Contact({ locale, translations: t }: ContactProps) {
  return (
    <section id="contact" className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            {t.contact.badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}