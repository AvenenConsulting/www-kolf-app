'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Play,
  Users,
  Zap
} from 'lucide-react'
import { getFormspreeUrl } from '@/lib/config'

const contactOptions = [
  {
    icon: Calendar,
    title: 'Schedule a Demo',
    description: 'Get a personalized demo tailored to your golf course',
    cta: 'Book Demo Call',
    color: 'primary',
    features: [
      'Live product walkthrough',
      'Customized to your needs',
      'Q&A with golf experts',
      '30-45 minute session'
    ]
  },
  {
    icon: Play,
    title: 'Free Trial',
    description: '14-day full access trial with all features',
    cta: 'Start Free Trial',
    color: 'green',
    features: [
      'Full feature access',
      'No credit card required',
      'Setup assistance included',
      'Cancel anytime'
    ]
  },
  {
    icon: Phone,
    title: 'Talk to Sales',
    description: 'Speak with our golf industry specialists',
    cta: 'Call Sales Team',
    color: 'blue',
    features: [
      'Custom pricing quotes',
      'Enterprise solutions',
      'Implementation planning',
      'ROI analysis'
    ]
  }
]

// Office locations removed - contact via form only

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    courseType: '',
    message: '',
    interests: [] as string[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmittingCTA, setIsSubmittingCTA] = useState<string | null>(null)

  const courseTypes = [
    '9-hole course',
    '18-hole course',
    'Resort course',
    'Multi-course facility',
    'Driving range',
    'Other'
  ]

  const interests = [
    'Tee time management',
    'Caddie management',
    'Dynamic pricing',
    'Tournament platform',
    'Member management',
    'Tour operator portal',
    'Analytics & reporting',
    'Mobile app',
    'API integration'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to Formspree
      const response = await fetch(getFormspreeUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          company: formData.company,
          courseType: formData.courseType,
          interests: formData.interests.join(', '),
          message: formData.message,
          source: 'contact_form',
          timestamp: new Date().toISOString(),
          _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleInterestChange = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    })
  }

  const handleCTAClick = async (ctaType: string, email?: string) => {
    if (!email) {
      // If no email provided, prompt for one
      const userEmail = prompt('Please enter your email address to proceed:')
      if (!userEmail || !userEmail.includes('@')) {
        alert('Please enter a valid email address.')
        return
      }
      email = userEmail
    }

    setIsSubmittingCTA(ctaType)

    try {
      const response = await fetch(getFormspreeUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: ctaType.toLowerCase().replace(/\s+/g, '_'),
          timestamp: new Date().toISOString(),
          _subject: `New ${ctaType} Request`,
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

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and our golf specialists will contact you within 24 hours 
              to schedule your personalized demo.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Our team reviews your requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">We prepare a customized demo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Schedule a convenient time for your demo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">Discuss implementation and pricing</span>
                </div>
              </div>
            </div>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-200/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-200/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-40"></div>
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
            <Zap className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Modernize{' '}
            <span className="gradient-text">Your Golf Course?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 500+ golf courses already using KOLF to increase revenue and improve operations
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center card-hover"
            >
              <div className={`w-16 h-16 rounded-2xl ${
                option.color === 'primary' ? 'bg-primary-100' :
                option.color === 'green' ? 'bg-green-100' :
                option.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
              } flex items-center justify-center mx-auto mb-6`}>
                <option.icon className={`w-8 h-8 ${
                  option.color === 'primary' ? 'text-primary-600' :
                  option.color === 'green' ? 'text-green-600' :
                  option.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                }`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {option.description}
              </p>
              <div className="space-y-2 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                onClick={() => handleCTAClick(option.cta)}
                disabled={isSubmittingCTA === option.cta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full ${
                  option.color === 'primary' ? 'btn-primary' :
                  option.color === 'green' ? 'btn-green' :
                  option.color === 'blue' ? 'btn-blue' : 'btn-gray'
                } ${isSubmittingCTA === option.cta ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmittingCTA === option.cta ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  option.cta
                )}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Custom Demo
            </h3>
            <p className="text-gray-600 mb-8">
              Tell us about your golf course and we'll prepare a personalized demonstration
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@golfcourse.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="+66 12 345 6789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Golf Course Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Bangkok Golf Club"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Type *
                </label>
                <select
                  name="courseType"
                  required
                  value={formData.courseType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your course type</option>
                  {courseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What features interest you most? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your current challenges
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="What specific challenges are you facing with your current golf course management system?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Request Demo'}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help you transform your golf course operations. Submit the form and our team will contact you within 24 hours.
              </p>
            </div>

            {/* Benefits of Contacting Us */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                What You'll Get
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span>Personalized demo tailored to your golf course</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span>Custom pricing and implementation timeline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span>ROI analysis based on your current operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span>Support in your local language and timezone</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Trusted by Golf Professionals
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600">Golf Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">40%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}