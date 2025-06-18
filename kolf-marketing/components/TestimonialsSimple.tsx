import { Locale } from '@/lib/translations'

interface TestimonialsProps {
  locale: Locale
  translations: any
}

export default function Testimonials({ locale, translations: t }: TestimonialsProps) {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
          What Leaders Say
        </span>
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Golf Industry Leaders Are Excited
        </h2>
        <p className="text-gray-600">
          Golf professionals across Asia are already talking about KOLF's revolutionary approach to golf management.
        </p>
      </div>
    </section>
  )
}