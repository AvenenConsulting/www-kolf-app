// Configuration for external services
export const config = {
  // Replace with your actual Formspree form ID
  // Get this from your Formspree dashboard: https://formspree.io/forms
  formspree: {
    endpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'xnnvzagd'
  },
  
  // Other service configurations can go here
  analytics: {
    // Add analytics config if needed
  }
}

// Helper function to get the full Formspree URL
export const getFormspreeUrl = () => {
  return `https://formspree.io/f/${config.formspree.endpoint}`
} 