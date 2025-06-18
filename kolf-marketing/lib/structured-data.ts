export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KOLF',
    alternateName: 'KOLF Golf Management Platform',
    url: 'https://kolf.app',
    logo: 'https://kolf.app/logo.png',
    description: 'AI-powered golf management platform built exclusively for Asian markets',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Organization',
        name: 'Avenen Co., Ltd.',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
    },
    sameAs: [
      'https://twitter.com/kolfgolf',
      'https://linkedin.com/company/kolf',
      'https://facebook.com/kolfgolf',
      'https://instagram.com/kolfgolf',
    ],
    knowsAbout: [
      'Golf Course Management',
      'Tee Time Booking',
      'Caddie Management',
      'Golf Technology',
      'Asian Golf Markets',
    ],
  }
}

export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'KOLF Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      priceSpecification: [
        {
          '@type': 'PriceSpecification',
          price: '0',
          priceCurrency: 'USD',
          name: 'VIP Waitlist',
          description: 'Exclusive early access to the beta platform',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '500',
    },
    featureList: [
      'AI-powered tee time optimization',
      'Caddie management system',
      'Multi-language support (5 languages)',
      'Dynamic pricing',
      'Member management',
      'Tournament platform',
    ],
  }
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When will KOLF launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KOLF is scheduled to launch in Q2 2025. Join our VIP waitlist for early access to the beta platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which countries does KOLF support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KOLF is built exclusively for Asian markets, with support for Thailand, Korea, Japan, China, and English-speaking regions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does KOLF support mandatory caddie systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, KOLF includes a comprehensive caddie management system designed specifically for Asian golf culture where caddies are mandatory.',
        },
      },
    ],
  }
}