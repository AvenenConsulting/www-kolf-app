import { getTranslations } from '@/lib/translations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import PilotProgram from '@/components/PilotProgram'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function RootPage() {
  const locale = 'en'
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