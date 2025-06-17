'use client'

import { useState, useEffect } from 'react'
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  locale: string
  translations: any
  source?: string
}

export default function LeadCaptureModal({ 
  isOpen, 
  onClose, 
  locale, 
  translations: t,
  source = 'website'
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseName: '',
    country: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t.leadCapture.errors.nameRequired
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.leadCapture.errors.emailRequired
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.leadCapture.errors.emailInvalid
    }
    
    if (!formData.courseName.trim()) {
      newErrors.courseName = t.leadCapture.errors.courseRequired
    }
    
    if (!formData.country.trim()) {
      newErrors.country = t.leadCapture.errors.countryRequired
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('loading')
    
    try {
      // Temporary solution: Send via email
      const subject = `KOLF Demo Request from ${formData.name}`
      const body = `
New Demo Request from KOLF Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Golf Course: ${formData.courseName}
Country: ${formData.country}
Message: ${formData.message || 'No additional message'}

Source: ${source}
Language: ${locale}
Timestamp: ${new Date().toISOString()}
      `.trim()
      
      // Create mailto link
      const mailtoLink = `mailto:info@avenen.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Simulate success (since we can't know if email was sent)
      setTimeout(() => {
        setStatus('success')
        
        // Track conversion in Google Analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: source,
            value: 1
          })
        }
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            courseName: '',
            country: '',
            message: ''
          })
          setStatus('idle')
          onClose()
        }, 3000)
      }, 500)
    } catch (error) {
      setStatus('error')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 m-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.leadCapture.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              {/* Form */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t.leadCapture.successTitle}</h3>
                  <p className="text-gray-600">{t.leadCapture.successMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-gray-600 mb-4">{t.leadCapture.subtitle}</p>
                  
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.leadCapture.fields.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t.leadCapture.placeholders.name}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.leadCapture.fields.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t.leadCapture.placeholders.email}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.leadCapture.fields.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t.leadCapture.placeholders.phone}
                    />
                  </div>
                  
                  {/* Course Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.leadCapture.fields.courseName} *
                    </label>
                    <input
                      type="text"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                        errors.courseName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t.leadCapture.placeholders.courseName}
                    />
                    {errors.courseName && (
                      <p className="text-red-500 text-sm mt-1">{errors.courseName}</p>
                    )}
                  </div>
                  
                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.leadCapture.fields.country} *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">{t.leadCapture.placeholders.country}</option>
                      <option value="TH">Thailand</option>
                      <option value="KR">South Korea</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="SG">Singapore</option>
                      <option value="MY">Malaysia</option>
                      <option value="ID">Indonesia</option>
                      <option value="VN">Vietnam</option>
                      <option value="PH">Philippines</option>
                      <option value="OTHER">Other</option>
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                    )}
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.leadCapture.fields.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder={t.leadCapture.placeholders.message}
                    />
                  </div>
                  
                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{t.leadCapture.errorMessage}</p>
                    </div>
                  )}
                  
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.leadCapture.submitting}
                      </>
                    ) : (
                      t.leadCapture.submit
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    {t.leadCapture.privacy}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}