import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kolf.app'
  const locales = ['en', 'th', 'ko', 'ja', 'zh']
  const lastModified = new Date()

  // Generate URLs for each locale
  const urls = locales.flatMap(locale => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    }
  ])

  // Add root URL that redirects to /en
  urls.unshift({
    url: baseUrl,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  })

  return urls
}