export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">이어진 포트폴리오 발표</h1>
          <p className="text-xl text-gray-300">10분 발표용 슬라이드</p>
        </header>

        <div className="space-y-16">
          {/* 슬라이드 1: 개인 웹사이트 */}
          <section className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
              1. 개인 웹사이트 개발 과정
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
                <ul className="space-y-2">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• React 18</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vercel 배포</li>
                  <li>• 도메인: eojin.me</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">아키텍처</h3>
                <div className="bg-gray-800 p-4 rounded text-sm">
                  <p>사용자 → Vercel CDN → Next.js App → Static Generation</p>
                  <p className="mt-2">GitHub → Vercel CI/CD → 자동 배포</p>
                </div>
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
            감사합니다 | eojin.me | 연락처: your-email@example.com
          </p>
        </footer>
      </div>
    </main>
  )
}