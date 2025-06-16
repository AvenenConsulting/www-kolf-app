import { notFound } from 'next/navigation'
import { getTranslations, Locale } from '@/lib/translations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/FeaturesSimple'
import Benefits from '@/components/BenefitsSimple'
import Pricing from '@/components/PricingSimple'
import Testimonials from '@/components/TestimonialsSimple'
import Contact from '@/components/ContactSimple'
import Footer from '@/components/FooterSimple'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locales: Locale[] = ['en', 'th', 'ko', 'ja', 'zh']
  if (!locales.includes(localeParam as Locale)) {
    notFound()
  }

  const locale = localeParam as Locale
  const t = getTranslations(locale)

  return (
    <main className="min-h-screen">
      <Header locale={locale} translations={t} />
      <Hero locale={locale} translations={t} />
      <Features locale={locale} translations={t} />
      <Benefits locale={locale} translations={t} />
      <Pricing locale={locale} translations={t} />
      <Testimonials locale={locale} translations={t} />
      <Contact locale={locale} translations={t} />
      <Footer locale={locale} translations={t} />
    </main>
  )
}