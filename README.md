# 🎨 Eojin Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat&logo=supabase)](https://supabase.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com)

eojin16의 개인 포트폴리오 웹사이트입니다. (실시간 분석 대시보드와 프레젠테이션을 포함)

🔗 **Live Demo**: [eojin-portfolio.vercel.app](https://eojin-portfolio.vercel.app)

---

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [환경 변수 설정](#-환경-변수-설정)
- [주요 컴포넌트](#-주요-컴포넌트)
- [API 라우트](#-api-라우트)
- [개발 히스토리](#-개발-히스토리)
- [배포](#-배포)
- [라이선스](#-라이선스)

---

## 🎯 프로젝트 개요

이 프로젝트는 **Next.js 15**와 **React 19**를 기반으로 구축된 개인 포트폴리오 웹사이트입니다. 단순한 이력서 사이트를 넘어서, 실시간 방문자 추적, 분석 대시보드, 인터랙티브 프레젠테이션을 구현했습니다.

### 프로젝트의 특징

- ✨ **모던 기술 스택**: Next.js 15 App Router, React 19, TypeScript
- 📊 **실시간 분석**: Supabase PostgreSQL 기반 방문자 추적 및 통계
- 🎨 **반응형 디자인**: Tailwind CSS 4.0을 활용한 모바일 친화적 UI
- 🚀 **최적화된 성능**: Turbopack을 활용한 빠른 빌드 및 개발 경험
- 📈 **관리자 대시보드**: 실시간 방문자 통계 및 인사이트 제공
- 🎬 **프레젠테이션 모드**: 시스템 아키텍처를 시각적으로 표현하는 별도 페이지

---

## ✨ 주요 기능

### 1. 실시간 방문자 분석 시스템

- **VisitorTracker 컴포넌트**: 페이지 방문 시 자동으로 방문 기록 추적
- **실시간 통계 대시보드**: 5초마다 업데이트되는 방문자 통계
- **데이터 인사이트**: 총 방문 수, 일별 통계, 세션 추적

### 2. 관리자 대시보드 (`/dashboard`)

- 실시간 방문자 통계 조회
- Analytics API와 통합된 데이터 시각화
- StatsDashboard 컴포넌트를 통한 인터랙티브 차트

### 3. 프레젠테이션 페이지 (`/pt`)

- 시스템 아키텍처 프레젠테이션
- 프로젝트 소개 및 기술 스택 설명
- 깔끔한 슬라이드 형식의 레이아웃

### 4. 반응형 네비게이션

- 직관적인 페이지 이동
- 모바일 최적화된 메뉴 시스템

---

## 🛠 기술 스택

### Frontend

| 기술 | 버전 | 용도 |
|------|------|------|
| **Next.js** | 15.5.3 | React 프레임워크, App Router |
| **React** | 19.1.0 | UI 라이브러리 |
| **TypeScript** | 5.x | 타입 안정성 |
| **Tailwind CSS** | 4.0 | 스타일링 |

### Backend & Database

| 기술 | 버전 | 용도 |
|------|------|------|
| **Supabase** | 2.57.4 | PostgreSQL 데이터베이스, 실시간 구독 |
| **Next.js API Routes** | - | 서버리스 API 엔드포인트 |

### 개발 도구

- **ESLint**: 코드 품질 관리
- **PostCSS**: CSS 처리
- **Turbopack**: 고속 번들러 (Next.js 15)
- **Vercel**: 배포 플랫폼

---

## 📁 프로젝트 구조

```
eojin-portfolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API 라우트
│   │   │   ├── analytics/        # 분석 API
│   │   │   └── insights/         # 인사이트 API
│   │   ├── dashboard/            # 관리자 대시보드 페이지
│   │   │   └── page.tsx
│   │   ├── pt/                   # 프레젠테이션 페이지
│   │   │   └── page.tsx
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── page.tsx              # 메인 페이지
│   │   └── globals.css           # 글로벌 스타일
│   ├── components/               # React 컴포넌트
│   │   ├── AdminDashboard.tsx    # 관리자 대시보드
│   │   ├── Analytics.tsx         # 분석 컴포넌트
│   │   ├── Navigation.tsx        # 네비게이션 바
│   │   ├── StatsDashboard.tsx    # 통계 대시보드
│   │   └── VisitorTracker.tsx    # 방문자 추적기
│   └── lib/                      # 유틸리티 라이브러리
│       └── supabase.ts           # Supabase 클라이언트
├── public/                       # 정적 파일
├── package.json                  # 프로젝트 의존성
├── tsconfig.json                 # TypeScript 설정
├── tailwind.config.js            # Tailwind CSS 설정
├── next.config.ts                # Next.js 설정
└── README.md                     # 프로젝트 문서
```

---

## 🚀 시작하기

### 필요 조건

- **Node.js**: 20.x 이상
- **npm**, **yarn**, **pnpm**, 또는 **bun**
- **Supabase 계정** (분석 기능 사용 시)

### 설치 및 실행

1. **저장소 클론**

```bash
git clone https://github.com/eojin16/eojin-portfolio.git
cd eojin-portfolio
```

2. **의존성 설치**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **개발 서버 실행**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **브라우저에서 확인**

[http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드 및 프로덕션

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

---

## 🔐 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase 데이터베이스 스키마

```sql
-- 방문자 추적 테이블
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  session_id TEXT,
  user_agent TEXT
);

-- 일별 통계 테이블
CREATE TABLE daily_stats (
  date DATE PRIMARY KEY,
  total_visits INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0
);
```

---

## 🧩 주요 컴포넌트

### VisitorTracker

페이지 방문을 자동으로 추적하는 클라이언트 컴포넌트입니다.

**특징:**
- 페이지 로드 시 자동 방문 기록
- 세션 ID 생성 및 관리
- Analytics API와 통합

### StatsDashboard

실시간 방문자 통계를 시각화하는 대시보드 컴포넌트입니다.

**특징:**
- 5초마다 자동 업데이트
- 총 방문 수, 일별 통계 표시
- 반응형 디자인

### AdminDashboard

관리자를 위한 종합 분석 대시보드입니다.

**특징:**
- 실시간 방문자 데이터 조회
- 인사이트 API 통합
- 시각적 데이터 표현

---

## 🌐 API 라우트

### `/api/analytics`

**GET**: 전체 방문 통계 조회
```typescript
// Response
{
  totalVisits: number,
  dailyStats: Array<{
    date: string,
    visits: number
  }>
}
```

**POST**: 새로운 방문 기록 추가
```typescript
// Request Body
{
  page: string,
  sessionId: string
}
```

### `/api/insights`

**GET**: 방문자 인사이트 데이터 조회

---

## 📈 개발 히스토리

### 주요 마일스톤

#### v0.1.0 (2025년 9월 11일)
- ✅ Next.js 15 프로젝트 초기 설정
- ✅ 기본 포트폴리오 레이아웃 구현
- ✅ 프레젠테이션 페이지 (`/pt`) 추가

#### v0.2.0 (2025년 9월 13-16일)
- ✅ Supabase PostgreSQL 통합
- ✅ 실시간 분석 시스템 구현
- ✅ Analytics API 개발
- ✅ 관리자 대시보드 추가

#### v0.3.0 (2025년 9월 18일)
- ✅ VisitorTracker 컴포넌트 개발
- ✅ StatsDashboard 리팩토링
- ✅ 실시간 통계 업데이트 (5초 간격)

#### v0.4.0 (2025년 9월 20일)
- ✅ 시스템 아키텍처 프레젠테이션 강화
- ✅ 메타데이터 최적화

#### v0.5.0 (2025년 10월 1일)
- ✅ 이력서 페이지 개편
- ✅ 코드 품질 개선 (ESLint, TypeScript)
- ✅ 네비게이션 컴포넌트 최적화

### 커밋 컨벤션

프로젝트는 다음과 같은 커밋 컨벤션을 따릅니다:

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `refactor`: 코드 리팩토링
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등

---

## 🚢 배포

이 프로젝트는 **Vercel**에 배포되어 있습니다.

### Vercel 배포 방법

1. GitHub 저장소를 Vercel에 연결
2. 환경 변수 설정 (Supabase URL, Key)
3. 자동 배포 트리거 설정
4. 배포 완료!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eojin16/eojin-portfolio)

---


## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

## 📞 연락처

프로젝트 관련 문의사항이 있으시면 GitHub Issues를 통해 연락주세요.

**GitHub**: [@eojin16](https://github.com/eojin16)

---

## 🙏 감사의 글

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Vercel](https://vercel.com/) - 배포 플랫폼
- [Supabase](https://supabase.com/) - 백엔드 서비스
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
- Claude AI - 개발 지원

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/eojin16">eojin16</a>
</p>

<p align="center">
  <sub>Last Updated: October 2025</sub>
</p>
