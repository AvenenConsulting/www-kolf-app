import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

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

    // Get request body
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'courseName', 'country']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: Add your actual lead storage logic here
    // For now, we'll just log it
    console.log('New lead:', body)

    // Return success response
    return NextResponse.json(
      { message: 'Lead captured successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 