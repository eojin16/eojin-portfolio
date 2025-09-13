import { Metadata } from 'next'
import Navigation from './components/Navigation'
import Analytics from './components/Analytics'
import './globals.css'

export const metadata: Metadata = {
  title: '이어진 | 백엔드 개발자 포트폴리오',
  description: '확장 가능한 시스템을 구축하는 백엔드 엔지니어 이어진의 포트폴리오입니다. Node.js, PostgreSQL, API 설계 전문가.',
  keywords: ['백엔드 개발자', '이어진', 'Node.js', 'PostgreSQL', 'API 개발', '포트폴리오'],
  authors: [{ name: '이어진' }],
  creator: '이어진',
  publisher: '이어진',
  
  // Open Graph (소셜 미디어 미리보기)
  openGraph: {
    title: '이어진 | 백엔드 개발자 포트폴리오',
    description: '확장 가능한 시스템을 구축하는 백엔드 엔지니어 이어진의 포트폴리오',
    url: 'https://eojin.me',
    siteName: '이어진 포트폴리오',
    images: [
      {
        url: 'https://eojin.me/og-image.jpg', // 이미지는 아래에서 만들 예정
        width: 1200,
        height: 630,
        alt: '이어진 백엔드 개발자 포트폴리오',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  
  // 트위터 카드
  twitter: {
    card: 'summary_large_image',
    title: '이어진 | 백엔드 개발자 포트폴리오',
    description: '확장 가능한 시스템을 구축하는 백엔드 엔지니어',
    images: ['https://eojin.me/og-image.jpg'],
    creator: '@eojin16', // 트위터 계정이 있다면
  },

  // 기타 메타데이터
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code', // Google Search Console 인증 시
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}