'use client'

import { useState, useEffect } from 'react'

interface AnalyticsData {
  totalVisitors: number
  todayVisitors: number
  pageViews: number
  topPages: { page: string; count: number }[]
}

export default function StatsDashboard() {
  const [stats, setStats] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/analytics')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    
    // 30초마다 통계 업데이트
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">총 방문자</h3>
        <div className="text-3xl font-bold text-blue-600">{stats.totalVisitors.toLocaleString()}</div>
        <div className="text-sm text-gray-500">누적 방문자 수</div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">오늘 방문자</h3>
        <div className="text-3xl font-bold text-green-600">{stats.todayVisitors.toLocaleString()}</div>
        <div className="text-sm text-gray-500">오늘의 방문자</div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">페이지 뷰</h3>
        <div className="text-3xl font-bold text-purple-600">{stats.pageViews.toLocaleString()}</div>
        <div className="text-sm text-gray-500">총 페이지 조회수</div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">인기 페이지</h3>
        <div className="space-y-2">
          {stats.topPages.slice(0, 3).map((page) => (
            <div key={page.page} className="flex justify-between text-sm">
              <span className="text-gray-600 truncate">{page.page}</span>
              <span className="text-blue-600 font-semibold">{page.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}