import { notFound } from 'next/navigation'
import { getTranslations, Locale } from '@/lib/translations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import PilotProgram from '@/components/PilotProgram'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
      <Features />
      <Benefits />
      <Pricing />
      <PilotProgram />
      <Contact />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'th' },
    { locale: 'ko' },
    { locale: 'ja' },
    { locale: 'zh' }
  ];
}