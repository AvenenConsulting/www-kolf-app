'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Facebook,
  ChevronUp
} from 'lucide-react'

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Avenen Consulting', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/press' },
      { name: 'Partners', href: '/partners' },
      { name: 'Investors', href: '/investors' }
    ]
  },
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'What\'s New', href: '/updates' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'System Status', href: '/status' },
      { name: 'Community', href: '/community' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  }
]

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/avenenglobal', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/avenen-global', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/avenenglobal', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/avenenglobal', label: 'YouTube' }
]

const officeLocations = [
  {
    city: 'Bangkok',
    country: 'Thailand',
    address: '999 Rama IV Road, Silom, Bangkok 10500',
    phone: '+66 2 123 4567',
    email: 'thailand@avenen.com'
  },
  {
    city: 'Seoul',
    country: 'South Korea',
    address: '123 Gangnam-daero, Gangnam-gu, Seoul',
    phone: '+82 2 123 4567',
    email: 'korea@avenen.com'
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: '1-1-1 Shibuya, Shibuya-ku, Tokyo',
    phone: '+81 3 1234 5678',
    email: 'japan@avenen.com'
  }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <img 
                  src={`/logo.svg?v=${Date.now()}`}
                  alt="KOLF Logo" 
                  className="h-16 w-16"
                  style={{ height: '64px', width: '64px' }}
                />
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                The complete golf course management solution for Asia. Purpose-built for Thai golf courses 
                with mandatory caddie systems, dynamic pricing, and complete operational management.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-primary-400">500+</div>
                  <div className="text-sm text-gray-400">Golf Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">1M+</div>
                  <div className="text-sm text-gray-400">Monthly Bookings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-12 mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-8 text-center">
            Our Offices Across Asia
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6 text-center"
              >
                <h4 className="text-white font-semibold mb-3">
                  {office.city}, {office.country}
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated with KOLF
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new features, golf industry insights, and success stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Avenen. All rights reserved.
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Available in:</span>
              <div className="flex items-center space-x-2">
                <span>🇺🇸 EN</span>
                <span>🇹🇭 TH</span>
                <span>🇰🇷 KO</span>
                <span>🇯🇵 JA</span>
                <span>🇨🇳 ZH</span>
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">Back to top</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span>PCI DSS Level 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}