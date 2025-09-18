'use client'

import { useState, useEffect, useCallback } from 'react'

// Supabase 조건부 import
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let supabase: any = null
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const supabaseModule = require('@/lib/supabase')
    supabase = supabaseModule.supabase
  } catch (error) {
    console.error('Failed to load Supabase:', error)
  }
}

interface AnalyticsData {
  totalVisitors: number
  todayVisitors: number
  pageViews: number
  totalSessions: number
  topPages: { page: string; count: number }[]
  dailyStats: { date: string; count: number }[]
}

interface StatsDashboardProps {
  initialData?: AnalyticsData // 서버에서 받을 초기 데이터
}

export default function StatsDashboard({ initialData }: StatsDashboardProps) {
  const [stats, setStats] = useState<AnalyticsData | null>(initialData || null)
  const [loading, setLoading] = useState(!initialData) // 초기 데이터가 있으면 로딩 상태 아님
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [isUpdating, setIsUpdating] = useState(false) // 백그라운드 업데이트 상태

  // 통계 가져오기 함수
  const fetchStats = useCallback(async (showLoader = true) => {
    if (showLoader && !initialData) setLoading(true)
    setIsUpdating(true)
    
    try {
      const response = await fetch('/api/analytics', {
        // 캐시 정책 추가
        next: { revalidate: 30 } // 30초 캐시
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      // 데이터 구조 검증
      if (typeof data === 'object' && data !== null) {
        setStats(data)
        setLastUpdate(new Date())
      } else {
        throw new Error('Invalid data format received')
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
      // 에러 발생해도 기존 데이터는 유지
    } finally {
      setLoading(false)
      setIsUpdating(false)
    }
  }, [initialData])

  // 실시간 업데이트 설정 (백그라운드)
  useEffect(() => {
    if (!initialData) {
      fetchStats() // 초기 데이터가 없을 때만 첫 로딩
    }

    // Supabase 실시간 구독 (에러 처리 추가)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let subscription: any = null
    if (supabase) {
      try {
        subscription = supabase
          .channel('analytics-changes')
          .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'analytics'
          }, () => {
            // 실시간 업데이트는 로딩 없이 백그라운드에서
            fetchStats(false)
          })
          .subscribe()
      } catch (error) {
        console.error('Failed to subscribe to real-time updates:', error)
      }
    } else {
      console.warn('Supabase not available, skipping real-time subscription')
    }

    // 주기적 업데이트 (1분마다로 줄임)
    const interval = setInterval(() => fetchStats(false), 60000) // 60초

    return () => {
      if (subscription) {
        try {
          subscription.unsubscribe()
        } catch (error) {
          console.error('Failed to unsubscribe:', error)
        }
      }
      clearInterval(interval)
    }
  }, [initialData, fetchStats])

  // 초기 로딩 중일 때만 로딩 스피너 표시
  if (loading && !stats) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-600">통계 로딩 중...</p>
      </div>
    )
  }

  if (!stats) {
    return <div className="text-center py-8 text-red-600">통계를 불러올 수 없습니다.</div>
  }

  return (
    <div className="space-y-8">
      {/* 실시간 상태 표시 */}
      <div className="text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
          isUpdating 
            ? 'bg-yellow-100 text-yellow-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            isUpdating 
              ? 'bg-yellow-600 animate-pulse' 
              : 'bg-green-600 animate-pulse'
          }`}></div>
          {isUpdating ? '업데이트 중...' : '실시간 연결됨'} | 마지막 업데이트: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>

      {/* 메인 통계 - 스켈레톤 로딩 효과 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`bg-white p-6 rounded-lg shadow border transition-opacity ${isUpdating ? 'opacity-75' : ''}`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">총 방문자</h3>
          <div className="text-3xl font-bold text-blue-600">{stats.totalVisitors.toLocaleString()}</div>
          <div className="text-sm text-gray-500">고유 방문자 수</div>
        </div>
        
        <div className={`bg-white p-6 rounded-lg shadow border transition-opacity ${isUpdating ? 'opacity-75' : ''}`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">오늘 방문</h3>
          <div className="text-3xl font-bold text-green-600">{stats.todayVisitors.toLocaleString()}</div>
          <div className="text-sm text-gray-500">오늘 페이지 뷰</div>
        </div>
        
        <div className={`bg-white p-6 rounded-lg shadow border transition-opacity ${isUpdating ? 'opacity-75' : ''}`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">총 페이지 뷰</h3>
          <div className="text-3xl font-bold text-purple-600">{stats.pageViews.toLocaleString()}</div>
          <div className="text-sm text-gray-500">누적 조회수</div>
        </div>
        
        <div className={`bg-white p-6 rounded-lg shadow border transition-opacity ${isUpdating ? 'opacity-75' : ''}`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">세션 수</h3>
          <div className="text-3xl font-bold text-orange-600">{(stats.totalSessions || 0).toLocaleString()}</div>
          <div className="text-sm text-gray-500">총 세션</div>
        </div>
      </div>

      {/* 나머지 컴포넌트들... */}
      {/* 인기 페이지 등은 이전과 동일 */}
    </div>
  )
}