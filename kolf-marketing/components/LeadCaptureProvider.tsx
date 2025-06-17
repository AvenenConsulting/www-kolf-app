'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useLeadCapture } from '@/hooks/useLeadCapture'
import LeadCaptureModal from './LeadCaptureModal'
import { Locale } from '@/lib/translations'

interface LeadCaptureContextType {
  openModal: (source?: string) => void
  closeModal: () => void
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined)

export function useLeadCaptureModal() {
  const context = useContext(LeadCaptureContext)
  if (!context) {
    // Return no-op functions during SSR/static generation
    return {
      openModal: () => {},
      closeModal: () => {}
    }
  }
  return context
}

interface LeadCaptureProviderProps {
  children: ReactNode
  locale: Locale
  translations: any
}

export function LeadCaptureProvider({ children, locale, translations }: LeadCaptureProviderProps) {
  const { isModalOpen, modalSource, openModal, closeModal } = useLeadCapture()

  return (
    <LeadCaptureContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={closeModal}
        locale={locale}
        translations={translations}
        source={modalSource}
      />
    </LeadCaptureContext.Provider>
  )
}