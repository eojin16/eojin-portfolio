import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 't�� - Frontend Developer'
    
    // Return a simple response for now
    // You can integrate with @vercel/og or similar library for actual image generation
    return new NextResponse(
      `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="600" y="300" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${title}
        </text>
        <text x="600" y="380" font-family="Arial, sans-serif" font-size="24" fill="#E5E7EB" text-anchor="middle" dominant-baseline="middle">
          Natural Born Frontend Developer
        </text>
      </svg>`,
      {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=3600',
        },
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return NextResponse.json({ error: 'Failed to generate OG image' }, { status: 500 })
  }
}