'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// 세션 ID 생성 함수
function generateSessionId(): string {
  const now = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  return `${now}-${random}`
}

// 세션 ID 가져오기 또는 생성
function getSessionId(): string {
  if (typeof window === 'undefined') return generateSessionId()

  let sessionId = sessionStorage.getItem('analytics-session-id')
  if (!sessionId) {
    sessionId = generateSessionId()
    sessionStorage.setItem('analytics-session-id', sessionId)
  }
  return sessionId
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // 페이지 방문 기록
    const recordVisit = async () => {
      try {
        const sessionId = getSessionId()

        await fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: pathname,
            sessionId,
            timestamp: new Date().toISOString()
          })
        })
      } catch (error) {
        console.error('Analytics error:', error)
      }
    }

    recordVisit()
  }, [pathname])

  return null // 화면에는 아무것도 렌더링하지 않음
}