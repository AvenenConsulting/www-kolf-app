import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import LeadCaptureModal from '../LeadCaptureModal'
import { trackEvent } from '@/lib/analytics'

// Mock translations
const mockTranslations = {
  leadCapture: {
    title: 'Request Demo',
    subtitle: 'Fill out the form below to request a demo',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      courseName: 'Golf Course',
      country: 'Country',
      message: 'Message'
    },
    placeholders: {
      name: 'Enter your name',
      email: 'Enter your email',
      phone: 'Enter your phone number',
      courseName: 'Enter your golf course name',
      country: 'Enter your country',
      message: 'Enter your message'
    },
    errors: {
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email format',
      courseRequired: 'Golf course is required',
      countryRequired: 'Country is required'
    },
    submit: 'Submit',
    submitting: 'Submitting...',
    successTitle: 'Thank you!',
    successMessage: 'We will contact you shortly.',
    errorTitle: 'Error',
    errorMessage: 'Something went wrong. Please try again.',
    tryAgain: 'Try Again'
  }
}

describe('LeadCaptureModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    locale: 'en',
    translations: mockTranslations,
    source: 'test'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly when open', () => {
    render(<LeadCaptureModal {...defaultProps} />)
    
    expect(screen.getByText(mockTranslations.leadCapture.title)).toBeInTheDocument()
    expect(screen.getByText(mockTranslations.leadCapture.subtitle)).toBeInTheDocument()
    expect(screen.getByLabelText(mockTranslations.leadCapture.fields.name)).toBeInTheDocument()
    expect(screen.getByLabelText(mockTranslations.leadCapture.fields.email)).toBeInTheDocument()
    expect(screen.getByLabelText(mockTranslations.leadCapture.fields.phone)).toBeInTheDocument()
    expect(screen.getByLabelText(mockTranslations.leadCapture.fields.courseName)).toBeInTheDocument()
    expect(screen.getByLabelText(mockTranslations.leadCapture.fields.country)).toBeInTheDocument()
    expect(screen.getByLabelText(mockTranslations.leadCapture.fields.message)).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(<LeadCaptureModal {...defaultProps} isOpen={false} />)
    
    expect(screen.queryByText(mockTranslations.leadCapture.title)).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    render(<LeadCaptureModal {...defaultProps} />)
    
    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('validates required fields', async () => {
    render(<LeadCaptureModal {...defaultProps} />)
    
    fireEvent.click(screen.getByText(mockTranslations.leadCapture.submit))
    
    await waitFor(() => {
      expect(screen.getByText(mockTranslations.leadCapture.errors.nameRequired)).toBeInTheDocument()
      expect(screen.getByText(mockTranslations.leadCapture.errors.emailRequired)).toBeInTheDocument()
      expect(screen.getByText(mockTranslations.leadCapture.errors.courseRequired)).toBeInTheDocument()
      expect(screen.getByText(mockTranslations.leadCapture.errors.countryRequired)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    render(<LeadCaptureModal {...defaultProps} />)
    
    const emailInput = screen.getByLabelText(mockTranslations.leadCapture.fields.email)
    await userEvent.type(emailInput, 'invalid-email')
    
    fireEvent.click(screen.getByText(mockTranslations.leadCapture.submit))
    
    await waitFor(() => {
      expect(screen.getByText(mockTranslations.leadCapture.errors.emailInvalid)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Success' })
      })
    )

    render(<LeadCaptureModal {...defaultProps} />)
    
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.name), 'John Doe')
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.email), 'john@example.com')
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.courseName), 'Test Golf Course')
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.country), 'Thailand')
    
    fireEvent.click(screen.getByText(mockTranslations.leadCapture.submit))
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          phone: '',
          courseName: 'Test Golf Course',
          country: 'Thailand',
          message: '',
          source: 'test',
          locale: 'en',
          timestamp: expect.any(String)
        })
      })
    })

    await waitFor(() => {
      expect(screen.getByText(mockTranslations.leadCapture.successTitle)).toBeInTheDocument()
      expect(trackEvent).toHaveBeenCalledWith('lead_capture', 'conversion', 'test')
    })
  })

  it('handles submission error', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Submission failed' })
      })
    )

    render(<LeadCaptureModal {...defaultProps} />)
    
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.name), 'John Doe')
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.email), 'john@example.com')
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.courseName), 'Test Golf Course')
    await userEvent.type(screen.getByLabelText(mockTranslations.leadCapture.fields.country), 'Thailand')
    
    fireEvent.click(screen.getByText(mockTranslations.leadCapture.submit))
    
    await waitFor(() => {
      expect(screen.getByText(mockTranslations.leadCapture.errorTitle)).toBeInTheDocument()
      expect(trackEvent).toHaveBeenCalledWith('lead_capture_error', 'error', 'test')
    })
  })
}) 