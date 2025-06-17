import type { Metadata } from 'next'
import '@/app/globals.css'
import '@/app/styles.css'
import { notFound } from 'next/navigation'
import { getTranslations } from '@/lib/translations'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'
import { generateOrganizationSchema, generateSoftwareApplicationSchema, generateFAQSchema } from '@/lib/structured-data'
import Script from 'next/script'

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'th' },
    { locale: 'ko' },
    { locale: 'ja' },
    { locale: 'zh' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const locales = ['en', 'th', 'ko', 'ja', 'zh']
  if (!locales.includes(locale)) {
    notFound()
  }

  const t = getTranslations(locale as any)
  
  return {
    title: `KOLF - ${t.hero.title.part1} ${t.hero.title.part2} ${t.hero.title.part3} | Avenen Consulting`,
    description: t.hero.subtitle,
    keywords: 'golf course management, golf booking system, caddie management, golf course software, Thailand golf, Asia golf management',
    authors: [{ name: 'Avenen Consulting' }],
    creator: 'Avenen Consulting',
    publisher: 'Avenen Consulting',
    robots: 'index, follow',
    metadataBase: new URL('https://kolf.app'),
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ko' ? 'ko_KR' : locale === 'ja' ? 'ja_JP' : locale === 'th' ? 'th_TH' : 'en_US',
      url: `https://kolf.app/${locale}`,
      title: 'KOLF - Golf Course Management System',
      description: t.hero.subtitle,
      siteName: 'KOLF by Avenen Consulting',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'KOLF Golf Course Management System',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'KOLF - Golf Course Management System',
      description: t.hero.subtitle,
      images: ['/twitter-image.jpg'],
      creator: '@avenenglobal',
    },
  }
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#22c55e',
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const locales = ['en', 'th', 'ko', 'ja', 'zh']
  if (!locales.includes(locale)) {
    notFound()
  }

  const t = getTranslations(locale as any)
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

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
        
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
        
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
      <body className="antialiased">
        <AnalyticsProvider locale={locale}>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}