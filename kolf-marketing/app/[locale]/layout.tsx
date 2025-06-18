import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor'
import { Locale, getTranslations } from '@/lib/translations'
import '@/app/globals.css'
import '@/app/styles.css'
import { notFound } from 'next/navigation'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'
import { generateOrganizationSchema, generateSoftwareApplicationSchema, generateFAQSchema } from '@/lib/structured-data'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params: { locale } }: RootLayoutProps): Promise<Metadata> {
  const t = getTranslations(locale)
  
  return {
    title: `KOLF - ${t.hero.title.part1} ${t.hero.title.part2} ${t.hero.title.part3} ${t.hero.title.part4}`,
    description: t.hero.subtitle,
    keywords: 'golf course management, golf booking system, caddie management, golf course software, Thailand golf, Asia golf management',
    authors: [{ name: 'KOLF' }],
    openGraph: {
      title: `KOLF - ${t.hero.title.part1} ${t.hero.title.part2} ${t.hero.title.part3} ${t.hero.title.part4}`,
      description: t.hero.subtitle,
      url: 'https://kolf.app',
      siteName: 'KOLF',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `KOLF - ${t.hero.title.part1} ${t.hero.title.part2} ${t.hero.title.part3} ${t.hero.title.part4}`,
      description: t.hero.subtitle,
    },
    alternates: {
      languages: {
        'en': '/en',
        'th': '/th',
        'ja': '/ja',
        'ko': '/ko',
        'zh': '/zh',
      },
    },
  }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  usePerformanceMonitor()

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for SEO */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSoftwareApplicationSchema()),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <AnalyticsProvider locale={locale}>
            {children}
          </AnalyticsProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}