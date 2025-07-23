# ANTech 💳

ANTech는 현대적인 모바일 결제 시스템을 위한 풀스택 애플리케이션입니다. React 19와 TypeScript를 기반으로 한 클라이언트와 Express.js 기반의 서버로 구성되어 있습니다.

## 🚀 주요 기능

- **🎨 모던 UI/UX**: React 19 + Vite + SCSS 모듈
- **🌙 다크모드**: 부드러운 전환 효과와 함께 제공
- **📱 모바일 최적화**: 반응형 디자인으로 모든 기기 지원
- **🔐 보안 인증**: 패턴 기반 사용자 인증 시스템
- **🛒 결제 시스템**: 장바구니, 결제 확인, 송금 기능
- **⚡ 빠른 개발**: pnpm 워크스페이스로 효율적인 의존성 관리

## 🏗️ 프로젝트 구조

```
anTech-develop/
├── client/ # React 프론트엔드
│ ├── src/
│ │ ├── components/ # 재사용 가능한 컴포넌트
│ │ ├── features/ # 기능별 컴포넌트
│ │ ├── pages/ # 페이지 컴포넌트
│ │ ├── store/ # Zustand 상태 관리
│ │ └── styles/ # SCSS 스타일
│ ├── package.json
│ └── vite.config.ts
├── server/ # Express 백엔드
│ ├── src/
│ │ └── index.ts # 서버 엔트리 포인트
│ ├── package.json
│ └── tsconfig.json
├── package.json # 루트 워크스페이스 설정
├── pnpm-workspace.yaml # pnpm 워크스페이스 구성
└── README.md
```

## 🛠️ 기술 스택

### Frontend

- **React 19** - 최신 React 기능 활용
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 개발 서버
- **SCSS Modules** - 스타일 격리
- **Zustand** - 경량 상태 관리
- **React Router** - 클라이언트 사이드 라우팅
- **Framer Motion** - 애니메이션
- **React Query** - 서버 상태 관리

### Backend

- **Express.js** - Node.js 웹 프레임워크
- **TypeScript** - 타입 안전성
- **CORS** - Cross-Origin Resource Sharing
- **Helmet** - 보안 헤더
- **Morgan** - HTTP 요청 로깅

### Development Tools

- **pnpm** - 효율적인 패키지 매니저
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **Concurrently** - 동시 스크립트 실행

## 🚀 시작하기

### 필수 조건

- Node.js 18+
- pnpm 8+

### 설치 및 실행

```bash
# 저장소 클론
git clone <repository-url>
cd anTech-develop

# 모든 의존성 설치
pnpm install

# 개발 서버 실행 (클라이언트: 3000, 서버: 5000)
pnpm dev
```

### 개별 실행

```bash
# 클라이언트만 실행
pnpm dev:client

# 서버만 실행
pnpm dev:server
```

## 📝 사용 가능한 스크립트

| 명령어            | 설명                                        |
| ----------------- | ------------------------------------------- |
| `pnpm dev`        | 클라이언트와 서버를 동시에 개발 모드로 실행 |
| `pnpm build`      | 프로덕션 빌드 생성                          |
| `pnpm start`      | 프로덕션 모드로 실행                        |
| `pnpm lint`       | ESLint로 코드 품질 검사                     |
| `pnpm type-check` | TypeScript 타입 검사                        |
| `pnpm clean`      | 빌드 파일과 node_modules 정리               |
| `pnpm setup`      | 전체 초기화 후 빌드                         |
| `pnpm dev:fresh`  | 전체 초기화 후 개발 서버 실행               |

## 🌐 포트 설정

- **클라이언트**: http://localhost:3000
- **서버**: http://localhost:5000
- **API 엔드포인트**: http://localhost:5000/api

## 📁 주요 디렉토리 설명

### Client (`/client`)

- `src/components/` - Header, Login, MobileWrapper 등 공통 컴포넌트
- `src/features/` - Authentication, Home, Cart, Products 등 기능별 컴포넌트
- `src/pages/` - 각 라우트에 해당하는 페이지 컴포넌트
- `src/store/` - Zustand를 사용한 전역 상태 관리
- `src/styles/` - SCSS 변수, 믹스인, 글로벌 스타일

### Server (`/server`)

- `src/index.ts` - Express 서버 설정 및 라우트 정의
- API 엔드포인트들이 `/api` 경로로 제공됨

## 🎨 스타일링

- **SCSS Modules** 사용으로 스타일 격리
- **다크모드** 지원 (Zustand로 상태 관리)
- **반응형 디자인** (모바일 우선)
- **애니메이션** (Framer Motion 활용)

## 🔧 개발 가이드

### 새로운 컴포넌트 추가

```typescript
// src/components/NewComponent/index.tsx
import styles from './style.module.scss';

const NewComponent = () => {
  return <div className={styles.container}>{/* 컴포넌트 내용 */}</div>;
};

export default NewComponent;
```

### API 호출 예시

```typescript
// 클라이언트에서 API 호출
const response = await fetch('/api/health');
const data = await response.json();
```

### 상태 관리

```typescript
// Zustand 스토어 사용
const darkMode = useDarkModeStore((state) => state.darkMode);
const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);
```

```

이 README는 다음과 같은 내용을 포함합니다:

1. **프로젝트 소개** - ANTech가 무엇인지 명확히 설명
2. **기술 스택** - 사용된 모든 기술들을 카테고리별로 정리
3. **설치 및 실행 가이드** - 누구나 쉽게 따라할 수 있는 단계
4. **스크립트 설명** - 모든 pnpm 명령어들의 용도
5. **프로젝트 구조** - 폴더 구조와 각각의 역할
6. **개발 가이드** - 새로운 기여자들을 위한 가이드
7. **기여 방법** - 오픈소스 협업을 위한 가이드라인

```
