import React from 'react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Eojin Kim</h1>
          <p className="text-xl text-gray-600 mb-4">Backend Engineer</p>
          <div className="flex gap-4 text-sm">
            <a href="mailto:eojin16@gmail.com" className="text-blue-600 hover:underline">eojin16@gmail.com</a>
            <a href="https://github.com/eojin16" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            <a href="/dashboard" className="text-blue-600 hover:underline">Dashboard</a>
          </div>
        </header>

        {/* Curriculum vitae */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Curriculum vitae</h2>
          
          <ul className="space-y-6">
            <li>
              <div className="flex gap-2">
                <span className="text-gray-500 whitespace-nowrap">2024 Mar - 2024 Sep</span>
                <div>
                  <a href="https://www.kolonbenit.com/" className="font-semibold hover:text-blue-600">코오롱베니트</a>
                  <p className="text-gray-600 mt-1">솔루션사업팀 - 주임</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• IFRS 연결결산 솔루션 'BENITSIGMA' 개발 및 운영</li>
                    <li>• VB.NET 기반 UI/UX 개선 및 업무 프로세스 최적화</li>
                    <li>• Excel VBA 기반 '개별주석패키지', '연결주석패키지' 솔루션 개발</li>
                    <li>• MSSQL 프로시저 개발로 연결재무제표 데이터 처리 자동화</li>
                    <li>• Git/Github, Jira, Confluence를 활용한 형상관리 및 협업</li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="flex gap-2">
                <span className="text-gray-500 whitespace-nowrap">2023 Dec - 2024 Feb</span>
                <div>
                  <span className="font-semibold">코오롱베니트</span>
                  <p className="text-gray-600 mt-1">IFRS사업팀 - 인턴</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• 대내외 회계솔루션 BENITSIGMA 운영 보조</li>
                    <li>• 프로젝트 자료 정리, 사용자 가이드 작성, 회의록 관리</li>
                    <li>• PMO(프로젝트 관리 지원) 업무 수행으로 정규직 전환</li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="flex gap-2">
                <span className="text-gray-500 whitespace-nowrap">2023 Sep - 2023 Nov</span>
                <div>
                  <span className="font-semibold">고려대학교 산학협력단</span>
                  <p className="text-gray-600 mt-1">기술사업화센터 - 연구원</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• 기업연계 청년기술전문인력 육성사업 참여</li>
                    <li>• 기술사업화 대상 기업 발굴 및 기술 수요 조사</li>
                    <li>• 유망 기술 이전 및 사업화 연계 자료 작성</li>
                    <li>• 정부지원사업 분석 및 기술사업화 전략 수립 지원</li>
                    <li>• 지식재산능력시험(IPAT) 민간자격 5급 취득</li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="flex gap-2">
                <span className="text-gray-500 whitespace-nowrap">2020 Mar - 2024 Aug</span>
                <div>
                  <span className="font-semibold">Korea University, Seoul, Korea</span>
                  <p className="text-gray-600 mt-1">Bachelor of Science in Computer Science</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• GPA: 3.6/4.5</li>
                    <li>• Relevant Coursework: Data Structures, Algorithms, Database Systems</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Technical Skills</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-blue-600">Backend Development</span>
                <span className="text-xs text-gray-500">Python, VB.NET, SQL</span>
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• FastAPI, Python - RESTful API design and implementation</li>
                <li>• VB.NET, .NET Framework - Enterprise solution development</li>
                <li>• AWS EC2, RDS MySQL - Cloud infrastructure setup and management</li>
                <li>• MSSQL - Stored procedures and database optimization</li>
                <li>• Redis - In-memory caching and real-time data processing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-blue-600">Frontend Development</span>
                <span className="text-xs text-gray-500">React, Next.js</span>
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Next.js 15, React 18 - Modern frontend development</li>
                <li>• TypeScript, Tailwind CSS - Type-safe and responsive UI</li>
                <li>• Vercel deployment - CI/CD pipeline setup</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-blue-600">DevOps & Tools</span>
                <span className="text-xs text-gray-500">AWS, Git, Jira</span>
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• AWS EC2, RDS - Infrastructure provisioning and management</li>
                <li>• Git/Github - Version control and collaboration</li>
                <li>• Jira, Confluence - Project management and documentation</li>
                <li>• Linux system administration - Ubuntu 22.04 LTS</li>
                <li>• SSL/TLS configuration - Let's Encrypt certificate setup</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Activities & Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Activities & Projects</h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-500 whitespace-nowrap text-sm">2024 Sep - 2025 Feb</span>
                <div>
                  <h3 className="font-semibold">대웅제약 IFRS 구축 프로젝트</h3>
                  <p className="text-sm text-gray-600">코오롱베니트 - 솔루션개발</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• Excel VBA 기반 '개별주석패키지' 개발 및 성능 최적화</li>
                    <li>• 주석 업로드 및 조회 속도 개선, 연결주석 취합 자동화</li>
                    <li>• DB 업로드 프로세스 고도화로 정확성 및 사용자 편의성 향상</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-500 whitespace-nowrap text-sm">2024 Mar - 2024 May</span>
                <div>
                  <h3 className="font-semibold">BY4M스튜디오 연결회계 구축 프로젝트</h3>
                  <p className="text-sm text-gray-600">코오롱베니트 - 솔루션개발</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• '월별 증감분 조회', '내부거래 자동생성 등록' 화면 신규 구축</li>
                    <li>• MSSQL 프로시저 작성 및 VB 화면 연동으로 실시간 데이터 처리</li>
                    <li>• 개별사 교육 진행 및 사용자 가이드 제공</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-500 whitespace-nowrap text-sm">2023 Jan - 2023 Jan</span>
                <div>
                  <h3 className="font-semibold">데이터베이스 연구실 인턴</h3>
                  <p className="text-sm text-gray-600">고려대학교 - 학부생 인턴</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• 학부생 인턴 과제 수행</li>
                    <li>• Node.js 기반 웹 데이터베이스 프론트엔드 개발</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-500 whitespace-nowrap text-sm">2022 Jun - 2022 Aug</span>
                <div>
                  <h3 className="font-semibold">데이터청년캠퍼스</h3>
                  <p className="text-sm text-gray-600">한국데이터산업진흥원 - 팀원</p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li>• Python 데이터 분석 (NumPy, Pandas, Matplotlib)</li>
                    <li>• 머신러닝 모델 학습 (Regression, Decision Tree, SVM, Clustering)</li>
                    <li>• AI 인식 수어교육 프로그램 개발 프로젝트 수행</li>
                    <li>• <a href="https://github.com/eojin16/Data-campus-2022-team_7" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Featured Works</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://eojin.me" className="hover:text-blue-600">Portfolio Website with Real-time Analytics</a>
              </h3>
              <p className="text-sm text-gray-500 mb-3">FastAPI, Next.js, AWS, Redis, MySQL</p>
              <p className="text-gray-700 mb-3">
                Full-stack portfolio website featuring real-time visitor analytics and caching optimization
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Architected microservices with AWS EC2 + RDS MySQL backend</li>
                <li>• Implemented Redis caching layer reducing API response time from 300ms to 50ms</li>
                <li>• Built real-time dashboard with automatic visitor tracking</li>
                <li>• Configured HTTPS with custom domain and SSL certificates</li>
              </ul>
              <div className="mt-3 flex gap-2">
                <a href="https://github.com/eojin16/eojin-portfolio" className="text-sm text-blue-600 hover:underline">Frontend</a>
                <span className="text-gray-400">•</span>
                <a href="https://github.com/eojin16/eojin-portfolio-backend" className="text-sm text-blue-600 hover:underline">Backend</a>
                <span className="text-gray-400">•</span>
                <a href="https://eojin.me/dashboard" className="text-sm text-blue-600 hover:underline">Live Dashboard</a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/eojin16/Data-campus-2022-team_7" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">AI 인식 수어교육 프로그램</a>
              </h3>
              <p className="text-sm text-gray-500 mb-3">Python, Machine Learning, Computer Vision</p>
              <p className="text-gray-700 mb-3">
                AI 기반 수화 인식 시스템 개발 및 머신러닝 모델 학습
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• 데이터 분석 및 전처리 (NumPy, Pandas)</li>
                <li>• 지도학습 모델 구현 (Regression, Decision Tree, SVM)</li>
                <li>• 비지도학습 클러스터링 및 차원 축소 (K-Means, PCA)</li>
                <li>• 하이퍼파라미터 튜닝 및 교차검증으로 모델 최적화</li>
              </ul>
              <div className="mt-3">
                <a href="https://github.com/eojin16/Data-campus-2022-team_7" className="text-sm text-blue-600 hover:underline">GitHub Repository</a>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">System Architecture</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700 min-w-24">Frontend:</span>
                <span className="text-gray-600">Next.js 15 + Vercel CDN (eojin.me)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700 min-w-24">Backend:</span>
                <span className="text-gray-600">FastAPI + AWS EC2 + Nginx</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700 min-w-24">Database:</span>
                <span className="text-gray-600">AWS RDS MySQL (persistent storage)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700 min-w-24">Cache:</span>
                <span className="text-gray-600">Redis (30s TTL, 6x faster response)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700 min-w-24">Security:</span>
                <span className="text-gray-600">HTTPS + Let's Encrypt SSL + Duck DNS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
          <p>© 2024 Eojin. Backend Engineer Portfolio</p>
          <p className="mt-2">
            <a href="https://github.com/eojin16" className="hover:text-blue-600">GitHub</a>
            {' • '}
            <a href="/dashboard" className="hover:text-blue-600">Analytics Dashboard</a>
          </p>
        </footer>
      </div>
    </div>
  );
}