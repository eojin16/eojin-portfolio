import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '포트폴리오 발표 슬라이드 | 10분 프레젠테이션',
  description: '백엔드 개발자 김어진의 10분 발표용 슬라이드. 시스템 아키텍처, 프로젝트 경험, 기술 역량을 소개합니다.',
  openGraph: {
    title: '김어진 포트폴리오 발표 슬라이드',
    description: '백엔드 개발자의 10분 프레젠테이션',
    url: 'https://eojin.me/pt',
  },
}

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">김어진 포트폴리오 발표</h1>
          <p className="text-xl text-gray-300">10분 발표용 슬라이드</p>
        </header>

        <div className="space-y-16">
          {/* 슬라이드 1: 개인 웹사이트 */}
          <section className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              1. 개인 웹사이트 - 백엔드 아키텍처
            </h2>

            {/* 아키텍처 다이어그램 */}
            <div className="mb-8 bg-white rounded-lg p-6 relative overflow-hidden">
              <div className="text-center text-black font-bold text-lg mb-6">김어진 포트폴리오 - Full-Stack 아키텍처</div>

              <div className="flex items-center gap-2 text-green-600 text-sm font-bold mb-4">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                실시간 운영 중
              </div>

              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-teal-400 text-white px-3 py-1 rounded text-sm font-bold">
                eojin.me
              </div>

              <div className="relative h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                {/* Layer 1: User & Client */}
                <div className="absolute top-4 left-8 flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-2xl transition-transform group-hover:scale-110">👤</div>
                  <div className="text-xs font-bold text-gray-700 mt-2 text-center">User<br/>Client</div>
                </div>

                {/* Layer 2: DNS/CDN */}
                <div className="absolute top-4 left-32 flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl transition-transform group-hover:scale-110">🌐</div>
                  <div className="text-xs font-bold text-gray-700 mt-2 text-center">DNS/CDN<br/>Vercel Edge</div>
                </div>

                {/* Layer 3: Frontend (Vercel) */}
                <div className="absolute top-4 left-56 flex flex-col items-center group">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-white text-lg font-bold transition-transform group-hover:scale-110">▲</div>
                  <div className="text-xs font-bold text-gray-700 mt-2 text-center">Vercel<br/>Frontend</div>
                </div>

                {/* Frontend Stack */}
                <div className="absolute top-24 left-40 flex gap-3">
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110">Next</div>
                    <div className="text-xs font-bold text-gray-700 mt-1">Next.js</div>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-lg transition-transform group-hover:scale-110">⚛️</div>
                    <div className="text-xs font-bold text-gray-700 mt-1">React</div>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg transition-transform group-hover:scale-110">🎨</div>
                    <div className="text-xs font-bold text-gray-700 mt-1">Tailwind</div>
                  </div>
                </div>

                {/* Layer 4: Backend API (FastAPI) */}
                <div className="absolute top-4 right-32 flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-110">API</div>
                  <div className="text-xs font-bold text-gray-700 mt-2 text-center">FastAPI<br/>Backend</div>
                </div>

                {/* Layer 5: Database */}
                <div className="absolute top-4 right-8 flex flex-col items-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-white text-2xl transition-transform group-hover:scale-110">🗄️</div>
                  <div className="text-xs font-bold text-gray-700 mt-2 text-center">Supabase<br/>PostgreSQL</div>
                </div>

                {/* Analytics & Monitoring */}
                <div className="absolute bottom-8 right-16 flex flex-col items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-lg transition-transform group-hover:scale-110">📊</div>
                  <div className="text-xs font-bold text-gray-700 mt-1 text-center">Real-time<br/>Analytics</div>
                </div>

                {/* Connection Lines - Properly Connected */}
                {/* User to CDN */}
                <div className="absolute top-12 left-24 w-8 h-0.5 bg-blue-500 animate-pulse"></div>

                {/* CDN to Vercel */}
                <div className="absolute top-12 left-48 w-8 h-0.5 bg-blue-500 animate-pulse"></div>

                {/* Vercel to Frontend Stack */}
                <div className="absolute top-20 left-64 w-0.5 h-8 bg-blue-500 animate-pulse"></div>

                {/* Frontend to Backend */}
                <div className="absolute top-12 left-72 w-24 h-0.5 bg-green-500 animate-pulse"></div>

                {/* Backend to Database */}
                <div className="absolute top-12 right-24 w-8 h-0.5 bg-green-500 animate-pulse"></div>

                {/* Backend to Analytics */}
                <div className="absolute top-20 right-40 w-0.5 h-16 bg-purple-500 animate-pulse"></div>
                <div className="absolute bottom-16 right-32 w-16 h-0.5 bg-purple-500 animate-pulse"></div>

                {/* Data Flow Labels */}
                <div className="absolute top-8 left-40 text-xs font-semibold text-blue-600">HTTP</div>
                <div className="absolute top-8 right-52 text-xs font-semibold text-green-600">REST API</div>
                <div className="absolute bottom-12 right-40 text-xs font-semibold text-purple-600">Real-time</div>
              </div>

              {/* Tech Stack Info */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 rounded-lg text-xs">
                <div className="font-bold mb-1">🔧 기술 스택</div>
                <div><strong>Frontend:</strong> Next.js + React + Tailwind</div>
                <div><strong>Backend:</strong> FastAPI + Python</div>
                <div><strong>Database:</strong> Supabase PostgreSQL</div>
                <div><strong>Deploy:</strong> Vercel + api.eojin.me</div>
                <div><strong>Domain:</strong> eojin.me</div>
              </div>
            </div>

            {/* 기술 설명 */}
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-blue-400 font-semibold mb-2">🎯 Frontend Stack</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Next.js 15 (App Router)</li>
                  <li>• React 19 with TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vercel 호스팅</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-green-400 font-semibold mb-2">⚡ Backend Stack</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• FastAPI (Python)</li>
                  <li>• RESTful API 설계</li>
                  <li>• Supabase PostgreSQL</li>
                  <li>• api.eojin.me 도메인</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">📊 Features & Deploy</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• 실시간 Analytics</li>
                  <li>• 자동 CI/CD 배포</li>
                  <li>• 커스텀 도메인 설정</li>
                  <li>• CDN 글로벌 최적화</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 슬라이드 2: 클론 프로젝트 */}
          <section className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              2. 대규모 시스템 프로젝트
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">슬랙 클론코딩</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 실시간 채팅 시스템</li>
                  <li>• 메시지 큐 (Kafka/RabbitMQ)</li>
                  <li>• Redis 캐싱</li>
                  <li>• MySQL 데이터베이스</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">콘서트 예매 시스템</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 동시 접속 처리</li>
                  <li>• 부하 테스트 (Locust)</li>
                  <li>• 대기열 시스템</li>
                  <li>• 성능 최적화</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 슬라이드 3: 문제 해결 사례 */}
          <section className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">
              3. 문제 해결 사례
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-4">준비 중인 프로젝트</h3>
              <p className="text-gray-300">
                실무 경험을 쌓으면서 발생한 기술적 문제와 해결 과정을 
                정리하여 발표할 예정입니다.
              </p>
            </div>
          </section>
        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            감사합니다 | eojin.me | 연락처: eojin16@gmail.com
          </p>
        </footer>
      </div>
    </main>
  )
}