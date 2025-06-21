'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Shield, Crown } from 'lucide-react'
import { getFormspreeUrl } from '@/lib/config'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for 9-hole courses',
    icon: Zap,
    monthly: { price: '฿9,999', originalPrice: null },
    yearly: { price: '฿7,999', originalPrice: '฿9,999' },
    features: [
      'Up to 100 bookings/month',
      'Basic tee time management',
      'Member management',
      'Email support',
      'Mobile responsive',
      'Basic reporting',
      'Payment processing',
      '1 user account'
    ],
    limitations: [
      'No caddie management',
      'No dynamic pricing',
      'No API access'
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'gray'
  },
  {
    name: 'Professional',
    description: 'Most popular for 18-hole courses',
    icon: Star,
    monthly: { price: '฿19,999', originalPrice: null },
    yearly: { price: '฿15,999', originalPrice: '฿19,999' },
    features: [
      'Unlimited bookings',
      'Dynamic pricing engine',
      'Caddie management system',
      'Tournament platform',
      'Tour operator portal',
      'Advanced analytics',
      '24/7 phone support',
      'API access',
      'Multi-language support',
      'Custom reporting',
      'Up to 5 user accounts',
      'Mobile app access'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    popular: true,
    color: 'primary'
  },
  {
    name: 'Enterprise',
    description: 'For resort courses & chains',
    icon: Crown,
    monthly: { price: 'Custom', originalPrice: null },
    yearly: { price: 'Custom', originalPrice: null },
    features: [
      'Multi-course management',
      'Custom integrations',
      'Dedicated account manager',
      'On-site training',
      'Custom reporting',
      'SLA guarantee (99.9%)',
      'White-label options',
      'Priority support',
      'Custom feature development',
      'Advanced security features',
      'Unlimited user accounts',
      'Custom mobile app'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    color: 'purple'
  }
]

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any of our plans. We include onboarding and basic training at no extra cost.'
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and local payment methods including PromptPay for Thai customers.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide 24/7 support in multiple languages including Thai, English, Korean, Japanese, and Chinese. Professional and Enterprise plans include phone support.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSubmittingCTA, setIsSubmittingCTA] = useState<string | null>(null)

  const handleCTAClick = async (ctaType: string, planName?: string) => {
    const userEmail = prompt('Please enter your email address to proceed:')
    if (!userEmail || !userEmail.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }

    setIsSubmittingCTA(ctaType)

    try {
      const response = await fetch(getFormspreeUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          source: `pricing_${ctaType.toLowerCase().replace(/\s+/g, '_')}`,
          planName: planName || 'Not specified',
          timestamp: new Date().toISOString(),
          _subject: `New ${ctaType} Request${planName ? ` for ${planName} Plan` : ''}`,
        }),
      })

      if (response.ok) {
        alert(`Thank you! We'll contact you shortly regarding your ${ctaType.toLowerCase()} request.`)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error submitting CTA:', error)
      alert('Sorry, there was an error. Please try again or use the contact form below.')
    } finally {
      setIsSubmittingCTA(null)
    }
  }

  return (
    <section id="pricing" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-20 h-20 bg-emerald-200/12 rounded-full blur-xl"></div>
        <div className="absolute bottom-12 right-12 w-28 h-28 bg-yellow-200/12 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for{' '}
            <span className="gradient-text">Your Golf Course</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No setup fees. No hidden costs. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                isYearly
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${
                plan.popular
                  ? 'border-primary-500 ring-4 ring-primary-100'
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-2 font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                    plan.color === 'primary' ? 'bg-primary-100' :
                    plan.color === 'purple' ? 'bg-purple-100' : 'bg-gray-100'
                  } mb-4`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.color === 'primary' ? 'text-primary-600' :
                      plan.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    {plan.name === 'Enterprise' ? (
                      <div className="text-3xl font-bold text-gray-900">
                        Custom Pricing
                      </div>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          {isYearly ? plan.yearly.price : plan.monthly.price}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                    )}
                    {isYearly && plan.yearly.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {plan.yearly.originalPrice}/month
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start space-x-3 opacity-50">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-500 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleCTAClick(plan.cta, plan.name)}
                  disabled={isSubmittingCTA === `${plan.cta}_${plan.name}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } ${isSubmittingCTA === `${plan.cta}_${plan.name}` ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmittingCTA === `${plan.cta}_${plan.name}` ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    plan.cta
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Compare All Features
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Tee Time Management', starter: true, professional: true, enterprise: true },
                    { feature: 'Member Management', starter: true, professional: true, enterprise: true },
                    { feature: 'Mobile App', starter: true, professional: true, enterprise: true },
                    { feature: 'Payment Processing', starter: true, professional: true, enterprise: true },
                    { feature: 'Basic Reporting', starter: true, professional: true, enterprise: true },
                    { feature: 'Caddie Management', starter: false, professional: true, enterprise: true },
                    { feature: 'Dynamic Pricing', starter: false, professional: true, enterprise: true },
                    { feature: 'Tournament Platform', starter: false, professional: true, enterprise: true },
                    { feature: 'API Access', starter: false, professional: true, enterprise: true },
                    { feature: 'Multi-language Support', starter: false, professional: true, enterprise: true },
                    { feature: 'Custom Integrations', starter: false, professional: false, enterprise: true },
                    { feature: 'White-label Options', starter: false, professional: false, enterprise: true },
                    { feature: 'Dedicated Support', starter: false, professional: false, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.professional ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.enterprise ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md border border-gray-200"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left py-4 px-6 font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className={`transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}>
                      ↓
                    </span>
                  </div>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Golf Course?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => handleCTAClick('Start Free Trial')}
              disabled={isSubmittingCTA === 'Start Free Trial'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg ${
                isSubmittingCTA === 'Start Free Trial' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmittingCTA === 'Start Free Trial' ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                'Start Free Trial'
              )}
            </motion.button>
            <motion.button
              onClick={() => handleCTAClick('Schedule Demo')}
              disabled={isSubmittingCTA === 'Schedule Demo'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 ${
                isSubmittingCTA === 'Schedule Demo' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmittingCTA === 'Schedule Demo' ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                'Schedule Demo'
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}