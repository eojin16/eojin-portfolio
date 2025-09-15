import { NextResponse } from 'next/server'
import {
  get_realtime_visitors,
  analyze_content_engagement,
  track_user_journey,
  calculate_conversion_rate,
  predict_next_week_traffic,
  get_ab_test_results
} from '@/lib/analytics-insights'

export async function GET() {
  try {
    const [
      실시간_방문자,
      인기_콘텐츠,
      사용자_여정,
      변환율,
      예측_분석,
      A_B_테스트_결과
    ] = await Promise.all([
      get_realtime_visitors(),
      analyze_content_engagement(),
      track_user_journey(),
      calculate_conversion_rate(),
      predict_next_week_traffic(),
      get_ab_test_results()
    ])

    return NextResponse.json({
      실시간_방문자,
      인기_콘텐츠,
      사용자_여정,
      변환율,
      예측_분석,
      A_B_테스트_결과
    })
  } catch (error) {
    console.error('Analytics insights error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics insights' },
      { status: 500 }
    )
  }
}