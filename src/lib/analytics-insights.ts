import { supabaseAdmin } from '@/lib/supabase'

export async function get_realtime_visitors() {
  try {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString()

    const { data, error } = await supabaseAdmin
      .from('analytics')
      .select('session_id')
      .gte('created_at', fifteenMinutesAgo)
      .not('session_id', 'is', null)

    if (error) throw error

    const uniqueSessions = new Set(data?.map(item => item.session_id) || [])
    return uniqueSessions.size
  } catch (error) {
    console.error('Error getting realtime visitors:', error)
    return 0
  }
}

export async function analyze_content_engagement() {
  try {
    const { data, error } = await supabaseAdmin
      .from('analytics')
      .select('page_path, created_at, session_id')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) throw error

    const pageStats = (data || []).reduce((acc: Record<string, { visits: number; uniqueVisitors: Set<string>; lastVisit: string }>, item) => {
      const page = item.page_path || '/'
      if (!acc[page]) {
        acc[page] = {
          visits: 0,
          uniqueVisitors: new Set(),
          lastVisit: item.created_at
        }
      }
      acc[page].visits += 1
      acc[page].uniqueVisitors.add(item.session_id)
      return acc
    }, {})

    return Object.entries(pageStats)
      .map(([page, stats]) => ({
        page,
        visits: stats.visits,
        uniqueVisitors: stats.uniqueVisitors.size,
        engagementScore: stats.visits * 0.6 + stats.uniqueVisitors.size * 0.4,
        lastVisit: stats.lastVisit
      }))
      .sort((a, b) => b.engagementScore - a.engagementScore)
      .slice(0, 10)
  } catch (error) {
    console.error('Error analyzing content engagement:', error)
    return []
  }
}

export async function track_user_journey() {
  try {
    const { data, error } = await supabaseAdmin
      .from('analytics')
      .select('session_id, page_path, created_at')
      .order('created_at', { ascending: true })
      .limit(500)

    if (error) throw error

    const journeys: Record<string, Array<{ page: string; timestamp: string }>> = {}

    ;(data || []).forEach(item => {
      if (!journeys[item.session_id]) {
        journeys[item.session_id] = []
      }
      journeys[item.session_id].push({
        page: item.page_path,
        timestamp: item.created_at
      })
    })

    const commonPaths = Object.values(journeys)
      .filter(journey => journey.length > 1)
      .map(journey => journey.map(step => step.page).join(' → '))

    const pathCounts = commonPaths.reduce((acc: Record<string, number>, path) => {
      acc[path] = (acc[path] || 0) + 1
      return acc
    }, {})

    return Object.entries(pathCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([path, count]) => ({ path, count }))
  } catch (error) {
    console.error('Error tracking user journey:', error)
    return []
  }
}

export async function calculate_conversion_rate() {
  try {
    const { data: allVisits, error: allError } = await supabaseAdmin
      .from('analytics')
      .select('session_id, page_path')

    if (allError) throw allError

    const totalSessions = new Set((allVisits || []).map(item => item.session_id)).size

    const { data: contactVisits, error: contactError } = await supabaseAdmin
      .from('analytics')
      .select('session_id')
      .or('page_path.ilike.%contact%,page_path.ilike.%연락%')

    if (contactError) throw contactError

    const contactSessions = new Set((contactVisits || []).map(item => item.session_id)).size

    const conversionRate = totalSessions > 0 ? (contactSessions / totalSessions) * 100 : 0

    return {
      totalSessions,
      contactSessions,
      conversionRate: Math.round(conversionRate * 100) / 100
    }
  } catch (error) {
    console.error('Error calculating conversion rate:', error)
    return { totalSessions: 0, contactSessions: 0, conversionRate: 0 }
  }
}

export async function predict_next_week_traffic() {
  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

    const { data, error } = await supabaseAdmin
      .from('analytics')
      .select('created_at')
      .gte('created_at', sevenDaysAgo)

    if (error) throw error

    const dailyVisits = (data || []).reduce((acc: Record<string, number>, item) => {
      const day = item.created_at.split('T')[0]
      acc[day] = (acc[day] || 0) + 1
      return acc
    }, {})

    const visits = Object.values(dailyVisits)
    const avgDaily = visits.length > 0 ? visits.reduce((a, b) => a + b, 0) / visits.length : 0
    const predictedWeekly = Math.round(avgDaily * 7)

    return {
      averageDailyVisits: Math.round(avgDaily),
      predictedWeeklyVisits: predictedWeekly,
      trend: visits.length >= 2 ? (visits[visits.length - 1] > visits[0] ? 'increasing' : 'decreasing') : 'stable'
    }
  } catch (error) {
    console.error('Error predicting traffic:', error)
    return { averageDailyVisits: 0, predictedWeeklyVisits: 0, trend: 'stable' }
  }
}

export async function get_ab_test_results() {
  try {
    const { data, error } = await supabaseAdmin
      .from('analytics')
      .select('page_path, user_agent')
      .limit(100)

    if (error) throw error

    const deviceTypes = (data || []).reduce((acc: Record<string, number>, item) => {
      const userAgent = item.user_agent?.toLowerCase() || ''
      let device = 'desktop'

      if (userAgent.includes('mobile') || userAgent.includes('android') || userAgent.includes('iphone')) {
        device = 'mobile'
      } else if (userAgent.includes('tablet') || userAgent.includes('ipad')) {
        device = 'tablet'
      }

      acc[device] = (acc[device] || 0) + 1
      return acc
    }, {})

    const total = Object.values(deviceTypes).reduce((a: number, b: number) => a + b, 0)

    return {
      deviceBreakdown: Object.entries(deviceTypes).map(([device, count]) => ({
        device,
        count,
        percentage: total > 0 ? Math.round((count as number / total) * 100) : 0
      })),
      sampleSize: total
    }
  } catch (error) {
    console.error('Error getting AB test results:', error)
    return { deviceBreakdown: [], sampleSize: 0 }
  }
}