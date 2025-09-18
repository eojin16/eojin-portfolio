'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageVisit } from '@/lib/fastapi'

export default function VisitorTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // 페이지 방문 추적
    const trackVisit = async () => {
      try {
        await trackPageVisit(pathname)
        console.log(`✅ Page visit tracked: ${pathname}`)
      } catch (error) {
        console.error('❌ Failed to track visit:', error)
      }
    }

    // 페이지 로드 시 추적
    trackVisit()
  }, [pathname]) // 페이지가 변경될 때마다 실행

  return null // UI를 렌더링하지 않는 컴포넌트
}