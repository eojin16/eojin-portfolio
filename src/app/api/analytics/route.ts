import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    // 오늘 날짜
    const today = new Date().toISOString().split('T')[0]

    // 총 방문자 수 (고유 세션)
    const { data: totalVisitorsData, error: totalError } = await supabaseAdmin
      .from('analytics')
      .select('session_id')
      .not('session_id', 'is', null)

    if (totalError) throw totalError

    // 세션 ID로 중복 제거
    const uniqueSessions = new Set(
      totalVisitorsData?.map((item: { session_id: string }) => item.session_id) || []
    )
    const totalVisitors = uniqueSessions.size

    // 오늘 방문자 수
    const { data: todayVisitorsData, error: todayError } = await supabaseAdmin
      .from('analytics')
      .select('session_id')
      .gte('created_at', `${today}T00:00:00.000Z`)
      .lt('created_at', `${today}T23:59:59.999Z`)
      .not('session_id', 'is', null)

    if (todayError) throw todayError

    const todayUniqueSessions = new Set(
      todayVisitorsData?.map((item: { session_id: string }) => item.session_id) || []
    )
    const todayVisitors = todayUniqueSessions.size

    // 총 페이지 뷰
    const { count: pageViews, error: pageViewsError } = await supabaseAdmin
      .from('analytics')
      .select('*', { count: 'exact' })

    if (pageViewsError) throw pageViewsError

    // 인기 페이지
    const { data: pagesData, error: pagesError } = await supabaseAdmin
      .from('analytics')
      .select('page_path')

    if (pagesError) throw pagesError

    // 페이지별 방문 횟수 계산
    const pageCount = (pagesData || []).reduce((acc: Record<string, number>, item: { page_path: string }) => {
      const page = item.page_path || '/'
      acc[page] = (acc[page] || 0) + 1
      return acc
    }, {})

    // 상위 5개 페이지
    const topPages = Object.entries(pageCount)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([page, count]) => ({ page, count }))

    return NextResponse.json({
      totalVisitors,
      todayVisitors,
      pageViews: pageViews || 0,
      topPages
    })
  } catch (error) {
    console.error('Analytics GET error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { page, sessionId } = body

    // IP 주소 가져오기
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               request.headers.get('cf-connecting-ip') ||
               'unknown'

    // User Agent 가져오기
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Referer 가져오기
    const referer = request.headers.get('referer') || null

    // 분석 데이터 저장
    const { error } = await supabaseAdmin
      .from('analytics')
      .insert([
        {
          page_path: page || '/',
          ip_address: ip,
          user_agent: userAgent,
          referrer: referer,
          session_id: sessionId,
          created_at: new Date().toISOString()
        }
      ])

    if (error) throw error

    return NextResponse.json({
      success: true,
      message: 'Analytics updated successfully'
    })
  } catch (error) {
    console.error('Analytics POST error:', error)
    return NextResponse.json(
      { error: 'Failed to update analytics' },
      { status: 500 }
    )
  }
}