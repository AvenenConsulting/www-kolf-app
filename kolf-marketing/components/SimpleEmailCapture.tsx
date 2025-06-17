'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { trackFormSubmission, trackDemoRequest } from '@/lib/analytics'

interface SimpleEmailCaptureProps {
  locale: string
  translations: any
  source?: string
}

export default function SimpleEmailCapture({ locale, translations: t, source = 'website' }: SimpleEmailCaptureProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    // Track the form submission
    trackFormSubmission(`email_capture_${source}`)
    trackDemoRequest(source)
    // Let the form submit naturally to Formspree
  }

  return (
    <div className="bg-primary-50 rounded-lg p-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">
        {t.emailCapture?.title || 'Get Early Access'}
      </h3>
      
      <form 
        action="https://formspree.io/f/xnnvzagd" 
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Hidden fields for metadata */}
        <input type="hidden" name="_subject" value={`New KOLF Demo Request from ${source}`} />
        <input type="hidden" name="_next" value="https://kolf.app/thanks.html" />
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="locale" value={locale} />
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailCapture?.placeholder || 'Enter your email'}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        
        <button
          type="submit"
          className="w-full btn-primary"
        >
          {t.emailCapture?.submit || 'Get Demo Access'}
        </button>
      </form>
    </div>
  )
}