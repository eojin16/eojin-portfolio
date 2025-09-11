export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
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

            {/* About 섹션 */}
      <section id="about" className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
      </section>

    </main>
  )
}