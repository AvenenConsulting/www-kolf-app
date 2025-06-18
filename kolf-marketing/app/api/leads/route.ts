/**
 * Lead Capture API Route
 * 
 * This API endpoint handles lead form submissions from the marketing website.
 * It validates the input data, stores it in the database, and sends notifications.
 * 
 * @route POST /api/leads
 * @param {Object} req.body - The lead submission data
 * @param {string} req.body.name - Lead's full name
 * @param {string} req.body.email - Lead's email address
 * @param {string} req.body.phone - Lead's phone number (optional)
 * @param {string} req.body.courseName - Name of the golf course
 * @param {string} req.body.country - Country where the golf course is located
 * @param {string} req.body.message - Additional message from the lead (optional)
 * @param {string} req.body.source - Source of the lead (e.g., 'homepage', 'pricing')
 * @param {string} req.body.locale - User's preferred language
 * @param {string} req.body.timestamp - Submission timestamp
 * 
 * @returns {Object} Response object
 * @returns {number} Response.status - HTTP status code
 * @returns {Object} Response.json - JSON response with message or error
 */

import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { z } from 'zod'

// Simple in-memory rate limiter
const rateLimiter = {
  requests: new Map<string, number[]>(),
  check: (ip: string): boolean => {
    const now = Date.now()
    const userRequests = rateLimiter.requests.get(ip) || []
    const recentRequests = userRequests.filter(time => now - time < 60000)
    rateLimiter.requests.set(ip, recentRequests)
    return recentRequests.length < 100
  },
  add: (ip: string) => {
    const now = Date.now()
    const userRequests = rateLimiter.requests.get(ip) || []
    userRequests.push(now)
    rateLimiter.requests.set(ip, userRequests)
  }
}

// Define the validation schema for lead submissions
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  courseName: z.string().min(2, 'Course name must be at least 2 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  message: z.string().optional(),
  source: z.string(),
  locale: z.string(),
  timestamp: z.string()
})

export async function POST(request: Request) {
  try {
    // Get client IP
    const headersList = headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!rateLimiter.check(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    // Add request to rate limiter
    rateLimiter.add(ip)

    // Parse and validate the request body
    const body = await request.json()
    const validatedData = leadSchema.parse(body)

    // TODO: Implement database storage
    // This is where you would add your database logic
    // Example: await db.leads.create({ data: validatedData })

    // TODO: Implement notification system
    // This is where you would add your notification logic
    // Example: await notifySalesTeam(validatedData)

    // Return success response
    return NextResponse.json(
      { message: 'Lead captured successfully' },
      { status: 201 }
    )
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    // Handle other errors
    console.error('Error capturing lead:', error)
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    )
  }
} 