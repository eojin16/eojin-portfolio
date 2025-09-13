import { Metadata } from 'next'
import StatsDashboard from './components/StatsDashboard'

export const metadata: Metadata = {
  title: '이어진 | 백엔드 개발자 포트폴리오 - 홈',
  description: 'Node.js, PostgreSQL, API 설계 전문 백엔드 개발자 이어진의 포트폴리오. 실시간 분석 시스템과 확장 가능한 아키텍처 경험.',
}

export default function Home() {
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
          <h1 className="text-6xl font-bold mb-4">이어진</h1>
          <p className="text-2xl text-gray-600 mb-8">Natural Born Frontend Developer</p>
          <div className="flex gap-4 justify-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">React 전문가</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">UI/UX 열정가</span>
          </div>
          <div className="mt-12">
            <a 
              href="/pt" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold"
            >
              📊 발표 슬라이드 보기 (eojin.me/pt)
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">🔥 실시간 웹사이트 분석</h2>
          <p className="text-center text-gray-600 mb-12">
            백엔드 API로 구축한 실시간 방문자 통계 시스템
          </p>
          <StatsDashboard />
          
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
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-sm text-gray-500">2025 - Present</div>
              <h3 className="text-xl font-semibold">프론트엔드 개발자 지원</h3>
              <p className="text-gray-600">포트폴리오 개발 및 기술 스택 학습</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그레스 바로 숙련도 표시 */}
      <section className="py-16">
        <h3 className="text-2xl font-bold mb-8">기술 스택</h3>
        <div className="space-y-6">
          {[
            { name: 'React', level: 85, color: 'blue' },
            { name: 'Next.js', level: 80, color: 'green' },
            { name: 'TypeScript', level: 75, color: 'purple' },
            { name: 'Tailwind CSS', level: 90, color: 'cyan' }
          ].map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${skill.color}-500 h-2 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
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
              <p>eojin16@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">GitHub</h3>
              <a href="https://github.com/eojin16" className="text-blue-400 hover:text-blue-300">
                github.com/eojin16
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:text-blue-300">
                linkedin.com/in/eojin
              </a>
            </div>
          </div>
          <div className="mt-12">
            <a 
              href="/pt" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold"
            >
              📊 발표 슬라이드 보기 (eojin.me/pt)
            </a>
          </div>
        </div>
      </section>


    </main>
  )
}