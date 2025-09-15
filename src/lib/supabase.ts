import { createClient } from '@supabase/supabase-js'

// 환경 변수 검증
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

// 클라이언트 사이드용
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 서버 사이드용 (서비스 키 사용)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey || supabaseAnonKey // 서비스 키가 없으면 anon 키 사용
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