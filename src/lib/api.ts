// lib/api.ts
const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'http://localhost:8000'

export async function trackVisit(pageData: { page: string; sessionId: string }) {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/v1/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageData)
    })
    return await response.json()
  } catch (error) {
    console.error('FastAPI tracking error:', error)
  }
}

export async function getStats() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/v1/analytics/stats`)
    return await response.json()
  } catch (error) {
    console.error('FastAPI stats error:', error)
  }
}