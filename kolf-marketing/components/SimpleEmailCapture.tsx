'use client'

import { useState } from 'react'
import { Mail, CheckCircle, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SimpleEmailCaptureProps {
  locale: string
  translations: any
  source?: string
}

export default function SimpleEmailCapture({ locale, translations: t, source = 'website' }: SimpleEmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isAdmin, setIsAdmin] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error')
      return
    }

    // Get existing emails from localStorage
    const existingEmails = JSON.parse(localStorage.getItem('kolf_demo_emails') || '[]')
    
    // Add new email with metadata
    const newEntry = {
      email,
      source,
      locale,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    }
    
    existingEmails.push(newEntry)
    
    // Save back to localStorage
    localStorage.setItem('kolf_demo_emails', JSON.stringify(existingEmails))
    
    // Show success
    setStatus('success')
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => {
      setStatus('idle')
    }, 3000)
  }

  const downloadEmails = () => {
    const emails = JSON.parse(localStorage.getItem('kolf_demo_emails') || '[]')
    
    // Create CSV content
    const csvContent = 'Email,Source,Language,Timestamp\n' + 
      emails.map((entry: any) => 
        `${entry.email},${entry.source},${entry.locale},${entry.timestamp}`
      ).join('\n')
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `kolf_leads_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const clearEmails = () => {
    if (confirm('Are you sure you want to clear all saved emails?')) {
      localStorage.removeItem('kolf_demo_emails')
      alert('All emails cleared!')
    }
  }

  return (
    <>
      <div className="bg-primary-50 rounded-lg p-6 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          {t.emailCapture?.title || 'Get Early Access'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailCapture?.placeholder || 'Enter your email'}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                status === 'error' ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.button
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full btn-primary"
              >
                {t.emailCapture?.submit || 'Get Demo Access'}
              </motion.button>
            )}
            
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2 text-green-600 py-3"
              >
                <CheckCircle className="w-5 h-5" />
                <span>{t.emailCapture?.success || 'Thanks! We\'ll be in touch soon.'}</span>
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-600 text-sm text-center py-3"
              >
                {t.emailCapture?.error || 'Please enter a valid email'}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Hidden admin panel - type "admin" in email field to toggle */}
      {email === 'admin' && (
        <button
          type="button"
          onClick={() => {
            setIsAdmin(!isAdmin)
            setEmail('')
          }}
          className="hidden"
        />
      )}

      {isAdmin && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50">
          <h4 className="font-semibold mb-2">Email Admin</h4>
          <div className="space-y-2">
            <button
              onClick={downloadEmails}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
            >
              <Download className="w-4 h-4" />
              Download Emails CSV
            </button>
            <button
              onClick={clearEmails}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Clear All Emails
            </button>
            <div className="text-xs text-gray-500">
              {JSON.parse(localStorage.getItem('kolf_demo_emails') || '[]').length} emails saved
            </div>
          </div>
        </div>
      )}
    </>
  )
}