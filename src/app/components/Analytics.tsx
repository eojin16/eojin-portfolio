'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // 페이지 방문 기록
    const recordVisit = async () => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: pathname,
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