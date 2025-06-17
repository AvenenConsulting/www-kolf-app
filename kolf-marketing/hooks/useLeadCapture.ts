'use client'

import { useState, useCallback } from 'react'

export function useLeadCapture() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSource, setModalSource] = useState<string>('website')

  const openModal = useCallback((source?: string) => {
    setModalSource(source || 'website')
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return {
    isModalOpen,
    modalSource,
    openModal,
    closeModal
  }
}