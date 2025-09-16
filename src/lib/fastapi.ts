const FASTAPI_URL = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_FASTAPI_URL_PROD 
  : 'http://localhost:8001'

export async function getStatsFromFastAPI() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/v1/analytics/stats`)
    return await response.json()
  } catch (error) {
    console.error('FastAPI error:', error)
    return null
  }
}