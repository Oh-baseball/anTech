AN Payment Web App

간편하고 안전한 결제 경험을 제공하는 프론트엔드 프로젝트

Vite + React 19 + TypeScript 기반으로 구축되었으며, 모듈화된 폴더 구조·일관된 Git/코딩 컨벤션·AI 리뷰 프로세스를 통해 협업 효율과 코드 품질을 극대화합니다.

⸻

목차

1. 기술 스택

2. 시작하기

3. 폴더 구조

4. Git Convention

5. Coding Convention

6. React Convention

7. Type Convention

8. 커밋 & 코드 리뷰

⸻

## 1. 기술 스택

영역 사용 기술

```
Language TypeScript 5.x
Framework React 19, React Router v6
Build Tool Vite 5.x
State Mgmt Zustand | Context API
Styling SCSS (CSS Modules)
Testing Vitest, React Testing Library
Linter / Formatter ESLint + Prettier
CI/CD GitHub Actions (Deploy to Vercel)
```

⸻

## 2. 시작하기

### 1. 저장소 클론

git clone https://github.com/your-org/The-Movie.git
cd The-Moive

### 2. 패키지 설치

pnpm install

# 개발 서버 실행 (클라이언트: 3000, 서버: 5000)

pnpm dev

````

### 개별 실행

```bash
# 클라이언트만 실행
pnpm dev:client

# 서버만 실행
pnpm dev:server
````

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
//src/components/NewComponent/index.tsx
import styles from './style.module.scss';

const Home = () => {
return <div className={styles.home_container}>Home</div>;
};

export default Home;
```

⸻

## 7. Type Convention

규칙 설명

```
undefined 사용 null 대신 undefined 선호
any 금지 필요한 경우 unknown 사용
타입 선언 type 키워드 (type User = {...})
인터페이스 선언 메서드·필수 속성 포함 시 interface
전역 타입 src/types/ 폴더에 정의 & 재export
```

⸻

### 커밋 & 코드 리뷰

• 커밋 타임 : 매일 16:50 KST 이후 dev ← feat/\* 머지 권장
• 코드 리뷰 : GitHub Pull Request → AI 리뷰 툴(ex. GitHub Copilot CI) 검사 후 팀원 승인

⸻
