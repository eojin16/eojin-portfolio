const FASTAPI_URL = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_FASTAPI_URL_PROD 
  : 'http://localhost:8001'

export async function getStatsFromFastAPI() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/v1/analytics/stats`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('FastAPI stats error:', error)
    return null
  }
}

export async function getRealtimeStats() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/v1/analytics/realtime`)
    return await response.json()
  } catch (error) {
    console.error('Realtime stats error:', error)
    return null
  }
}

export async function trackPageVisit(page: string) {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/v1/analytics/track?page=${encodeURIComponent(page)}`, {
      method: 'POST'
    })
    return await response.json()
  } catch (error) {
    console.error('Track visit error:', error)
    return null
  }
}

export async function getHealthStatus() {
  try {
    const response = await fetch(`${FASTAPI_URL}/health`)
    return await response.json()
  } catch (error) {
    console.error('Health check error:', error)
    return null
  }
}