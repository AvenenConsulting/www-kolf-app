/**
 * ErrorBoundary Component
 * 
 * A React error boundary component that catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 * 
 * Features:
 * - Catches runtime errors in child components
 * - Logs errors to analytics for monitoring
 * - Provides a user-friendly error message
 * - Includes a retry mechanism
 * 
 * @component
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */

'use client'

import React from 'react'
import { AlertCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  /**
   * Static method to update state when an error occurs
   * @param error - The error that was thrown
   * @returns New state object
   */
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  /**
   * Lifecycle method called after an error has been thrown
   * @param error - The error that was thrown
   * @param errorInfo - Additional error information
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to analytics
    trackEvent('error_boundary', 'error', `${error.message} - ${errorInfo.componentStack}`)
  }

  /**
   * Renders the fallback UI when an error occurs
   * @returns JSX.Element
   */
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 