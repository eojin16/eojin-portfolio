import { NextRequest, NextResponse } from 'next/server'

// 임시 메모리 저장소 (실제로는 데이터베이스 사용)
let analytics = {
  totalVisitors: 0,
  todayVisitors: 0,
  pageViews: 0,
  lastVisit: new Date().toISOString().split('T')[0], // YYYY-MM-DD 형식
  topPages: {} as Record<string, number>
}

export async function GET() {
  return NextResponse.json({
    totalVisitors: analytics.totalVisitors,
    todayVisitors: analytics.todayVisitors,
    pageViews: analytics.pageViews,
    topPages: Object.entries(analytics.topPages)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([page, count]) => ({ page, count }))
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { page } = body
  const today = new Date().toISOString().split('T')[0]
  
  // 새로운 날이면 오늘 방문자 수 리셋
  if (analytics.lastVisit !== today) {
    analytics.todayVisitors = 0
    analytics.lastVisit = today
  }
  
  // 통계 업데이트
  analytics.totalVisitors += 1
  analytics.todayVisitors += 1
  analytics.pageViews += 1
  
  // 페이지별 방문 수 기록
  if (analytics.topPages[page]) {
    analytics.topPages[page] += 1
  } else {
    analytics.topPages[page] = 1
  }
  
  return NextResponse.json({ 
    success: true, 
    message: 'Analytics updated' 
  })
}