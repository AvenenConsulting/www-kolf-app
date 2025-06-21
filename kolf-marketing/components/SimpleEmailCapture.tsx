'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Users } from 'lucide-react'
import { trackEmailCapture } from '@/lib/analytics'
import { getFormspreeUrl } from '@/lib/config'

interface SimpleEmailCaptureProps {
  locale: string
  translations: any
  source: string
}

export default function SimpleEmailCapture({ locale, translations: t, source }: SimpleEmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      // Track the email capture
      trackEmailCapture(email, source, locale)
      
      // Submit to Formspree
      const response = await fetch(getFormspreeUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: source,
          locale: locale,
          timestamp: new Date().toISOString(),
          _subject: `New Pilot Program Application from ${source}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 text-center max-w-md mx-auto"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Pilot Application Submitted! 🎉
        </h3>
        <p className="text-gray-300 mb-6">
          We'll review your application and contact you within 48 hours. Thank you for your interest in pioneering the future of golf management!
        </p>
        <div className="flex items-center justify-center space-x-2 text-emerald-400 text-sm">
          <Users className="w-4 h-4" />
          <span>Only 10 pilot spots available</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto lg:mx-0"
    >
      {/* Compelling Pre-form Copy */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          Apply for Pilot Program
        </h3>
        <p className="text-gray-300 mb-4">
          Join our exclusive pre-launch pilot program. Help shape KOLF while getting 50% off our launch pricing forever.
        </p>
        
        {/* Value Props */}
        <div className="space-y-2 mb-6">
          {[
            "🎯 Shape the product with your feedback",
            "💰 Lock in 50% discount forever",
            "🏆 Founding partner recognition"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting || !email}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[160px]"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Apply for Pilot</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
        
        {/* Trust Elements */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-400 pt-2">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Instant access • No spam • Unsubscribe anytime</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🔒 GDPR Compliant</span>
          </div>
        </div>
      </form>
    </motion.div>
  )
}