import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 클라이언트 사이드용
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 서버 사이드용 (서비스 키 사용)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// 데이터베이스 타입 정의
export interface Analytics {
  id?: number
  page_path: string
  ip_address?: string
  user_agent?: string
  referrer?: string
  session_id?: string
  created_at?: string
}

export interface DailyStats {
  id?: number
  date: string
  total_visitors: number
  unique_visitors: number
  page_views: number
  created_at?: string
}