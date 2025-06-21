'use client'

import { useState } from 'react'
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
  ChevronUp,
  ArrowRight
} from 'lucide-react'
import { getFormspreeUrl } from '@/lib/config'

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

// Contact information removed

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false)
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingNewsletter(true)

    try {
      const response = await fetch(getFormspreeUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          source: 'newsletter_signup',
          timestamp: new Date().toISOString(),
          _subject: 'New Newsletter Subscription',
        }),
      })

      if (response.ok) {
        setNewsletterSubmitted(true)
        setNewsletterEmail('')
      }
    } catch (error) {
      console.error('Error submitting newsletter:', error)
    } finally {
      setIsSubmittingNewsletter(false)
    }
  }

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
                  src="/logo-horizontal-light.svg" 
                  alt="KOLF Logo" 
                  className="h-16 w-auto"
                  style={{ height: '64px', width: 'auto' }}
                />
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionary golf course management platform launching in 2025. Join our exclusive pilot program 
                to help shape the future of golf management in Asia while securing lifetime benefits.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-primary-400">10</div>
                  <div className="text-sm text-gray-400">Pilot Spots</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">2025</div>
                  <div className="text-sm text-gray-400">Launch Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">50%</div>
                  <div className="text-sm text-gray-400">Pilot Discount</div>
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
            {newsletterSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Thanks for subscribing!</h3>
                <p className="text-gray-300">You'll receive updates about KOLF features and golf industry insights.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmittingNewsletter ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
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


    </footer>
  )
}