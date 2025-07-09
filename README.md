Ahn Payment Web App

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

### 3. 개발 서버 실행

`pnpm run dev` # http://localhost:5173

### 4. 프로덕션 빌드

pnpm build

Node ≥ 20 및 pnpm 가 필요합니다. pnpm 설치 가이드를 참고하세요.

⸻

## 3. 폴더 구조

```
Ahn-Payment-Web/
├── src/
│ ├── assets/ # 이미지 · 폰트 등 정적 리소스
│ ├── components/ # 재사용 가능한 UI 컴포넌트
│ │ └─ Button/
│ │ ├─ index.tsx
│ │ └─ style.module.scss
│ ├── features/ # 도메인/기능별 폴더 (비즈니스 로직)
│ │ └─ checkout/
│ │ ├─ ProcessCheckout.tsx
│ │ └─ Components/
│ │ ├─ index.tsx
│ │ └─ style.module.scss
│ ├── hooks/ # 커스텀 훅
│ ├── layouts/ # 레이아웃 컴포넌트 (Header, Footer 등)
│ ├── pages/ # 페이지(라우트) 컴포넌트
│ ├── api/ # 외부 API 연동 모듈 (Toss Payments SDK 등)
│ ├── store/ # 전역 상태 관리 (Zustand)
│ ├── types/ # 전역 타입 정의
│ ├── utils/ # 유틸 함수 · 상수
│ ├── App.tsx # 앱 엔트리 컴포넌트
│ ├── main.tsx # 진입점 (createRoot)
│ ├── router.tsx # 라우터 설정
│ └── vite-env.d.ts # Vite 환경 타입
│
├── .github/workflows/ # CI 파이프라인 정의
├── .eslintrc.json # ESLint 설정
├── .gitignore
├── package.json
├── pnpm-workspace.yaml # PNPM Monorepo 설정(선택)
├── tsconfig.json
├── vite.config.ts
└── README.md
```
폴더 이름은 소문자 카멜 케이스를 기본으로, 컴포넌트 폴더는 파스칼 케이스를 사용합니다.

⸻

## 4. Git Convention

태그 용도
```
feat 새로운 기능 추가
fix 버그 수정
docs 문서 수정
style 코드 포맷 변경 (세미콜론 누락 등), 논리 변경 없음
refactor 프로덕션 코드 리팩터링
test 테스트 코드 추가·수정, 프로덕션 코드 변경 없음
chore 빌드 태스크 · 패키지 매니저 설정 등, 프로덕션 코드 변경 없음

브랜치 전략 : main ← dev ← feat/✱, bugfix/✱
커밋 메시지 서식 : <type>: <subject> (예: feat: 결제 내역 조회 API 연동)
```
⸻

## 5. Coding Convention

네이밍 규칙
```
구분 규칙 예시
상수 대문자 + 스네이크 케이스 const MAX_RETRY = 3;
변수·함수 카멜 케이스 const paymentList = [];
배열 복수형 const orders = [];
정규식 r 접두어 const rPhone = /^\d{3}-\d{4}-\d{4}$/;
이벤트 핸들러 on 접두어 const onSubmit = () => {};
불린 반환 is 접두어 const isLoading = true;
Fetch 함수 get·post·put·del 접두어 const getPaymentList = () => {...}

블록 구문

한 줄이어도 중괄호 {} 를 생략하지 않고 줄바꿈합니다.

// bad
if (isPaid) return "success";

// good
if (isPaid) {
return "success";
}

함수 정의
• 함수 표현식 + 화살표 함수를 사용합니다.

// bad
function handlePay() {}

// good
const handlePay = () => {
// ...
};

바로 반환하는 경우 중괄호와 return 생략

const getTotal = (a: number, b: number) => a + b;
```

폴더 네이밍
• 기본 카멜 케이스
• 컴포넌트 폴더만 파스칼 케이스 (예: Button/)

스타일 가이드
• CSS 모듈(.module.scss)
• 클래스명은 스네이크 케이스 (payment_container)

⸻

## 6. React Convention
```
• Props 개수 3개 초과 시 ...spread 활용
• 함수형 컴포넌트 예시

import styles from "./home.module.scss";

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
