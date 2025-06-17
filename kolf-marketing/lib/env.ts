// Environment variable validation
const requiredEnvVars = {
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_FORMSPREE_FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
} as const

// Validate on server-side only
if (typeof window === 'undefined') {
  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      console.warn(`Warning: Missing required environment variable: ${key}`)
    }
  }
}

// Export validated environment variables with defaults
export const env = {
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-8SFBM8QD9M',
  FORMSPREE_FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'mwppzjrw',
} as const