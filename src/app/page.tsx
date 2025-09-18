import { Metadata } from 'next'
import StatsDashboard from '@/components/StatsDashboard'

export const metadata: Metadata = {
  title: '김어진 | 백엔드 개발자 포트폴리오 - 홈',
  description: 'Node.js, PostgreSQL, API 설계 전문 백엔드 개발자 김어진의 포트폴리오. 실시간 분석 시스템과 확장 가능한 아키텍처 경험.',
}

async function getInitialStats() {
  // 빌드 시점에는 API를 호출하지 않고 null 반환
  if (process.env.NODE_ENV === 'development') {
    try {
      const response = await fetch('http://localhost:3000/api/analytics', {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        return await response.json()
      }
    } catch (error) {
      console.error('Failed to fetch initial stats:', error)
    }
  }

  return null
}

export default async function Home() {
  const initialStats = await getInitialStats()
  return (
    <main className="min-h-screen p-8">
      {/* <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          안녕하세요, 어진입니다 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          프론트엔드 개발자를 꿈꾸는 신입 개발자입니다.ff
        </p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">기술 스택</h2>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">React</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded">Next.js</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">TypeScript</span>
          </div>
        </div>
      </div>

            {/* About 섹션 *//*}
      <section id="about" className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 좌측: 경력 타임라인 *//*}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">이력</h3>
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="text-sm text-gray-500">2025 - Present</div>
                <h3 className="text-xl font-semibold">프론트엔드 개발자 지원</h3>
                <p className="text-gray-600">포트폴리오 개발 및 기술 스택 학습</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">React</span>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="text-sm text-gray-500">2025 - Present</div>
                <h3 className="text-xl font-semibold">프론트엔드 개발자 지원2</h3>
                <p className="text-gray-600">포트폴리오 개발 및 기술 스택 학습</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">React</span>
                </div>
              </div>
            </div>

            {/* 우측: 소개 및 관심 분야 *//*}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">소개</h3>
                <p className="text-gray-600 leading-relaxed">
                  웹 프론트엔드 개발에 관심이 많은 신입 개발자입니다.
                  사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하려고 노력합니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">관심 분야</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• React/Next.js 개발</li>
                  <li>• UI/UX 디자인</li>
                  <li>• 웹 성능 최적화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 개인 브랜딩 강화 */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Eojin Kim</h1>
          <p className="text-2xl text-gray-600 mb-8">Natural Born Backend Engineer</p>
          <div className="flex gap-4 justify-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Node.js 전문가</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">API 설계 열정가</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">🔥 실시간 웹사이트 분석</h2>
          <p className="text-center text-gray-600 mb-12">
            백엔드 API로 구축한 실시간 방문자 통계 시스템
          </p>
          <StatsDashboard initialData={initialStats} />
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              실시간 업데이트 중
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/api/analytics" 
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              📊 API 엔드포인트 확인하기 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>


      {/* 연도별 타임라인 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12">Experience & Education</h2>
          <div className="space-y-8">

            {/* 현재 - 백엔드 개발자 전환 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-sm text-gray-500">2025 - Present</div>
              <h3 className="text-xl font-semibold">백엔드 개발자 전환</h3>
              <p className="text-gray-600">모던 백엔드 기술 스택 학습 및 포트폴리오 개발</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">PostgreSQL</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Supabase</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">REST API</span>
              </div>
            </div>

            {/* Kolon Benit 경력 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="text-sm text-gray-500">2024.03 - 2025.09</div>
              <h3 className="text-xl font-semibold">Kolon Benit · 솔루션 사업팀 주임</h3>
              <p className="text-gray-600">IFRS 솔루션 개발 및 유지보수, 클라이언트 요구사항 분석 및 시스템 개선</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">VB.NET</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">C#</span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">FPSpread</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">REST API</span>
              </div>
            </div>

            {/* 고려대학교 학력 */}
            <div className="border-l-4 border-red-500 pl-6">
              <div className="text-sm text-gray-500">2019.03 - 2023.08</div>
              <h3 className="text-xl font-semibold">고려대학교 컴퓨터학과</h3>
              <p className="text-gray-600">학사 졸업 · 평점 3.60/4.5</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">컴퓨터공학</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">자료구조</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">알고리즘</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">데이터베이스</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 백엔드 기술 스택 태그 방식 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-2xl font-bold mb-8 text-center">기술 스택</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* 실무 경험 기술 */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">실무 경험</h4>
              <div className="space-y-2">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">VB.NET</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm ml-2">C#</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">FPSpread</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">IFRS</span>
              </div>
            </div>

            {/* 현재 학습 중 */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">현재 학습 중</h4>
              <div className="space-y-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm ml-2">PostgreSQL</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Supabase</span>
              </div>
            </div>

            {/* 클라우드 & 인프라 */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">클라우드 & 배포</h4>
              <div className="space-y-2">
                <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm">Vercel</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm ml-2">Git</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">GitHub</span>
              </div>
            </div>

            {/* 개발 언어 & 도구 */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">개발 언어 & 도구</h4>
              <div className="space-y-2">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm ml-2">JavaScript</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">REST API</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 수치로 보여주는 성과 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">프로젝트 성과</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">완성된 웹 프로젝트</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">사용자 만족도</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">서비스 가용성</div>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact & Links</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a href="mailto:eojin16@gmail.com" className="text-blue-400 hover:text-blue-300">
                eojin16@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">GitHub</h3>
              <a href="https://github.com/eojin16" className="text-blue-400 hover:text-blue-300">
                github.com/eojin16
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/eojin-kim-432738253/" className="text-blue-400 hover:text-blue-300">
                linkedin.com/in/eojin
              </a>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}