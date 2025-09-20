import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '시스템 아키텍처 | 김어진 포트폴리오',
  description: '실시간 분석이 가능한 고성능 풀스택 포트폴리오 시스템 아키텍처 다이어그램',
  openGraph: {
    title: '김어진 포트폴리오 - 시스템 아키텍처',
    description: '실시간 분석이 가능한 고성능 풀스택 포트폴리오 시스템',
    url: 'https://eojin.me/pt',
  },
}

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            🚀 Eojin Portfolio System Architecture
          </h1>
          <p className="text-lg text-gray-600">
            실시간 분석이 가능한 고성능 풀스택 포트폴리오 시스템
          </p>
        </div>

        <div className="space-y-8">
          {/* Frontend Layer */}
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-center mb-5">
              <div className="bg-white rounded-xl p-3 shadow-md inline-block">
                <h2 className="text-xl font-semibold text-gray-700">🎨 Frontend Layer</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-green-500 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Next.js 15 App</h3>
                <p className="text-gray-600 text-sm text-center mb-3">React 18 기반 모던 프론트엔드</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">TypeScript</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-orange-500 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">🌐</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Vercel CDN</h3>
                <p className="text-gray-600 text-sm text-center mb-3">글로벌 배포 및 자동 HTTPS</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">eojin.me</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Auto Deploy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Arrow */}
          <div className="flex justify-center items-center my-5">
            <div className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium">
              사용자 방문 → API 호출
            </div>
            <div className="ml-5 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-blue-500"></div>
          </div>

          {/* Backend Layer */}
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-center mb-5">
              <div className="bg-white rounded-xl p-3 shadow-md inline-block">
                <h2 className="text-xl font-semibold text-gray-700">⚙️ Backend Layer</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-blue-500 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">🐍</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">FastAPI Server</h3>
                <p className="text-gray-600 text-sm text-center mb-3">고성능 비동기 Python API</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">AWS EC2</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Uvicorn</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">HTTPS + Domain</h3>
                <p className="text-gray-600 text-sm text-center mb-3">SSL 암호화 및 사용자 도메인</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Duck DNS</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Let&apos;s Encrypt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">1. 요청 수신</h4>
              <p className="text-gray-600 text-xs">Nginx 리버스 프록시</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">2. 캐시 확인</h4>
              <p className="text-gray-600 text-xs">Redis 30초 TTL</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">3. DB 조회</h4>
              <p className="text-gray-600 text-xs">MySQL 원본 데이터</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <h4 className="font-semibold text-gray-800 mb-2">4. 응답 캐싱</h4>
              <p className="text-gray-600 text-xs">Redis 고속 저장</p>
            </div>
          </div>

          {/* Storage Layer */}
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-center mb-5">
              <div className="bg-white rounded-xl p-3 shadow-md inline-block">
                <h2 className="text-xl font-semibold text-gray-700">💾 Storage Layer</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-purple-500 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">🗄️</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">AWS RDS MySQL</h3>
                <p className="text-gray-600 text-sm text-center mb-3">관계형 데이터베이스 (영구 저장)</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">방문자 추적</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">통계 분석</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-red-500 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Redis Cache</h3>
                <p className="text-gray-600 text-sm text-center mb-3">인메모리 캐시 (30초 TTL)</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">고속 응답</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">실시간 카운터</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Stats */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 mt-8">
          <h3 className="text-center text-xl font-semibold mb-5">📊 시스템 성능 지표</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">~50ms</div>
              <div className="text-sm">캐시 응답시간</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">~300ms</div>
              <div className="text-sm">DB 쿼리 시간</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">30초</div>
              <div className="text-sm">캐시 TTL</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">5초</div>
              <div className="text-sm">실시간 업데이트</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm">서비스 운영</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">HTTPS</div>
              <div className="text-sm">보안 연결</div>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mt-8">
          <div className="text-center mb-5">
            <div className="bg-white rounded-xl p-3 shadow-md inline-block">
              <h2 className="text-xl font-semibold text-gray-700">🔌 API Endpoints</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <code className="text-gray-800 font-bold text-sm">GET /health</code>
              <p className="text-gray-600 text-xs mt-2">시스템 상태 확인</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <code className="text-gray-800 font-bold text-sm">GET /api/v1/analytics/stats</code>
              <p className="text-gray-600 text-xs mt-2">방문자 통계 (캐시 적용)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <code className="text-gray-800 font-bold text-sm">POST /api/v1/analytics/track</code>
              <p className="text-gray-600 text-xs mt-2">방문자 추적 및 저장</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <code className="text-gray-800 font-bold text-sm">GET /api/v1/analytics/realtime</code>
              <p className="text-gray-600 text-xs mt-2">실시간 통계</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-600">
          <p className="text-lg font-medium mb-2">
            🏗️ <strong>아키텍처</strong>
          </p>
          <p className="text-sm">실시간 분석 • 캐싱 최적화 • AWS 클라우드 • 마이크로서비스 아키텍처</p>
        </div>
      </div>
    </div>
  )
}