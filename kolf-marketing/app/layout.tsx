import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles.css'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KOLF - Golf Management Platform for Asia',
  description: 'The world\'s first AI-powered golf management platform built exclusively for Asian markets.',
  keywords: 'golf management, golf software, golf technology, golf operations, golf booking, golf tee time, golf caddie management, golf course management, golf industry, golf technology, golf innovation, golf digital transformation, golf automation, golf optimization, golf revenue, golf operations, golf efficiency, golf customer experience, golf member management, golf tournament management, golf analytics, golf reporting, golf insights, golf data, golf intelligence, golf artificial intelligence, golf machine learning, golf predictive analytics, golf dynamic pricing, golf yield management, golf revenue management, golf customer relationship management, golf CRM, golf enterprise resource planning, golf ERP, golf point of sale, golf POS, golf inventory management, golf staff management, golf scheduling, golf maintenance, golf course conditions, golf weather integration, golf mobile app, golf web app, golf cloud, golf SaaS, golf software as a service, golf platform, golf solution, golf system, golf application, golf product, golf service, golf company, golf startup, golf business, golf industry, golf market, golf sector, golf vertical, golf niche, golf segment, golf audience, golf target market, golf customer, golf client, golf user, golf end user, golf stakeholder, golf partner, golf vendor, golf supplier, golf provider, golf developer, golf manufacturer, golf producer, golf creator, golf innovator, golf pioneer, golf leader, golf expert, golf specialist, golf professional, golf consultant, golf advisor, golf strategist, golf planner, golf designer, golf architect, golf engineer, golf developer, golf programmer, golf coder, golf technician, golf operator, golf manager, golf administrator, golf director, golf executive, golf officer, golf owner, golf founder, golf co-founder, golf CEO, golf CTO, golf COO, golf CFO, golf CMO, golf CIO, golf CISO, golf CRO, golf CPO, golf CCO, golf CHRO, golf CLO, golf CCO, golf CTO, golf CMO, golf CFO, golf COO, golf CEO, golf founder, golf co-founder, golf owner, golf executive, golf director, golf administrator, golf manager, golf operator, golf technician, golf coder, golf programmer, golf developer, golf engineer, golf architect, golf designer, golf planner, golf strategist, golf advisor, golf consultant, golf professional, golf specialist, golf expert, golf leader, golf pioneer, golf innovator, golf creator, golf producer, golf manufacturer, golf developer, golf provider, golf supplier, golf vendor, golf partner, golf stakeholder, golf end user, golf user, golf client, golf customer, golf target market, golf audience, golf segment, golf niche, golf vertical, golf sector, golf market, golf industry, golf business, golf startup, golf company, golf service, golf product, golf application, golf system, golf solution, golf platform, golf SaaS, golf cloud, golf web app, golf mobile app, golf weather integration, golf course conditions, golf maintenance, golf scheduling, golf staff management, golf inventory management, golf POS, golf point of sale, golf ERP, golf enterprise resource planning, golf CRM, golf customer relationship management, golf revenue management, golf yield management, golf dynamic pricing, golf predictive analytics, golf machine learning, golf artificial intelligence, golf intelligence, golf data, golf insights, golf reporting, golf analytics, golf tournament management, golf member management, golf customer experience, golf efficiency, golf operations, golf revenue, golf optimization, golf automation, golf digital transformation, golf innovation, golf technology, golf industry, golf operations, golf booking, golf tee time, golf caddie management, golf course management, golf software, golf management',
  authors: [{ name: 'Avenen Consulting' }],
  creator: 'Avenen Consulting',
  publisher: 'Avenen Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kolf.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'th': '/th',
      'ko': '/ko',
      'ja': '/ja',
      'zh': '/zh',
    },
  },
  openGraph: {
    title: 'KOLF - Golf Management Platform for Asia',
    description: 'The world\'s first AI-powered golf management platform built exclusively for Asian markets.',
    url: 'https://kolf.app',
    siteName: 'KOLF',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOLF - Golf Management Platform for Asia',
    description: 'The world\'s first AI-powered golf management platform built exclusively for Asian markets.',
    creator: '@kolfapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  // Initialize performance monitoring
  usePerformanceMonitor()

  return (
    <html lang="en">
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
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <AnalyticsProvider locale="en">
            {children}
          </AnalyticsProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}