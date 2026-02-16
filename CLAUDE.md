# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 15 + React 19 + Tailwind CSS v4 + shadcn/ui 기반의 모던 웹 스타터킷입니다.

**주요 기술 스택:**
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- shadcn/ui 컴포넌트
- Zustand (상태 관리)
- React Hook Form + Zod (폼 검증)
- next-themes (다크모드)

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# ESLint 실행
pnpm lint
```

## 코드 아키텍처

### 디렉토리 구조

```
프로젝트 루트/
├── src/app/                # Next.js App Router 페이지
│   ├── layout.tsx         # 루트 레이아웃 (ThemeProvider, Header/Footer)
│   ├── page.tsx           # 홈 페이지
│   ├── not-found.tsx      # 커스텀 404 페이지
│   ├── about/             # About 페이지
│   └── blog/              # Blog 페이지
├── components/            # React 컴포넌트
│   ├── ui/                # shadcn/ui 기반 재사용 컴포넌트
│   ├── layout/            # 레이아웃 컴포넌트 (Header, Footer, Container)
│   ├── providers.tsx      # Context Providers
│   └── theme-toggle.tsx   # 테마 토글 버튼
├── config/                # 애플리케이션 설정
│   └── site.ts            # 사이트 메타데이터 및 네비게이션 설정
├── lib/                   # 유틸리티 라이브러리
│   └── validations/       # Zod 검증 스키마
├── stores/                # Zustand 상태 관리 스토어
├── hooks/                 # 커스텀 React 훅
├── types/                 # TypeScript 타입 정의
└── public/                # 정적 파일
```

### 경로 별칭

TypeScript 경로 별칭 `@/*`는 프로젝트 루트를 가리킵니다.

```typescript
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
```

### 레이아웃 시스템

**전역 레이아웃 구조:**
- `src/app/layout.tsx`: RootLayout에서 ThemeProvider, SiteHeader, SiteFooter를 제공
- 모든 페이지는 자동으로 헤더/푸터를 포함
- Container 컴포넌트로 반응형 래퍼 제공 (`max-w-screen-xl` 기본값)

**레이아웃 컴포넌트:**
- `SiteHeader`: 로고, 네비게이션 메뉴, 테마 토글
- `SiteFooter`: 저작권, 링크
- `Container`: 반응형 컨테이너 (px-4 sm:px-6 lg:px-8)

### UI 컴포넌트 패턴

**EmptyState 패턴 (중요):**
빈 상태나 에러 페이지에는 `EmptyState` 컴포넌트를 재사용합니다.

```typescript
<EmptyState
  icon={FileQuestion}           // lucide-react 아이콘
  title="페이지를 찾을 수 없습니다"
  description="설명 텍스트"
  action={<Button>...</Button>} // 선택적 액션 버튼
/>
```

**사용 예시:**
- `src/app/not-found.tsx`: 404 페이지
- `src/app/blog/page.tsx`: 블로그 준비 중

**컴포넌트 재사용 원칙:**
- 새로운 페이지 생성 시 기존 컴포넌트를 최대한 재사용
- Container + EmptyState 조합 패턴 따르기
- 다크모드 자동 지원 (theme-aware 컴포넌트 사용)

### 상태 관리

Zustand를 사용하여 전역 상태를 관리합니다.

```typescript
// stores/use-sidebar-store.ts 예시
import { create } from "zustand"

export const useSidebarStore = create<SidebarStore>((set) => ({
  // 상태 및 액션 정의
}))
```

### 폼 검증

React Hook Form + Zod를 사용합니다.

```typescript
// lib/validations/ 에 스키마 정의
import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
```

### 사이트 설정

`config/site.ts`에서 사이트 메타데이터와 네비게이션을 중앙 관리합니다.

```typescript
export const siteConfig: SiteConfig = {
  name: "Next.js Starter",
  description: "...",
  mainNav: [...],  // 헤더 네비게이션 메뉴
  links: {...},    // 외부 링크 (GitHub 등)
}
```

새로운 네비게이션 항목 추가 시 이 파일만 수정하면 됩니다.

### 테마 시스템

next-themes를 사용하여 다크모드를 지원합니다.

- `components/providers.tsx`: ThemeProvider 설정
- `components/theme-toggle.tsx`: 테마 전환 UI
- 모든 Tailwind 클래스는 `dark:` prefix로 다크모드 스타일 정의

### TypeScript 설정

- `strict` 모드 활성화
- `any` 타입 사용 금지
- 모든 타입은 `types/index.ts`에 정의

## 코딩 규칙

### 컴포넌트 작성

1. **Server Component 우선:** 클라이언트 상태가 필요한 경우에만 `"use client"` 사용
2. **컴포넌트 분리:** 재사용 가능한 단위로 컴포넌트 분리
3. **Props 타입 정의:** 모든 컴포넌트에 명시적 타입 정의

### 네이밍 규칙

- 컴포넌트: PascalCase (`Button`, `EmptyState`)
- 함수/변수: camelCase (`siteConfig`, `useSidebarStore`)
- 파일명: kebab-case 또는 PascalCase

### 스타일링

- Tailwind CSS 클래스 사용
- `cn()` 유틸리티로 조건부 클래스 병합
- 반응형 디자인 필수 (mobile-first)

### 페이지 생성

새 페이지 추가 시:

1. `src/app/[route]/page.tsx` 생성
2. `config/site.ts`에 네비게이션 추가
3. 기존 패턴 따르기 (Container + 내용 컴포넌트)
4. metadata export로 SEO 설정

```typescript
export const metadata = {
  title: "페이지 제목",
  description: "페이지 설명",
}
```

## 주의사항

- **포트 충돌:** 개발 서버 실행 시 3000번 포트가 사용 중이면 자동으로 3001번 포트 사용
- **Fast Refresh:** 파일 저장 시 자동으로 브라우저 업데이트
- **TypeScript 에러:** `pnpm build` 전에 타입 에러 해결 필수
- **404 페이지:** `src/app/not-found.tsx`가 모든 정의되지 않은 경로에서 표시됨
