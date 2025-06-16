/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig