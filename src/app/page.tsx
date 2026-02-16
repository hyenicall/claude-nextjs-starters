import {
  Layers,
  Palette,
  Shield,
  Zap,
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToastDemo } from "@/components/toast-demo"

const features = [
  {
    icon: Zap,
    title: "Next.js 15 + React 19",
    description: "최신 App Router, Server Components, 스트리밍 SSR 지원",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4 + shadcn/ui",
    description: "유틸리티 기반 스타일링과 접근성 준수 UI 컴포넌트",
  },
  {
    icon: Shield,
    title: "TypeScript + Zod",
    description: "엔드투엔드 타입 안전성과 런타임 검증",
  },
  {
    icon: Layers,
    title: "Zustand + React Hook Form",
    description: "최소 보일러플레이트 상태관리와 폼 처리",
  },
] as const

export default function Home() {
  return (
    <Container className="py-16">
      <section className="flex flex-col items-center gap-8 text-center">
        <Badge variant="secondary" className="text-sm">
          모던 웹 스타터킷
        </Badge>
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            빠르게 시작하는
            <br />
            <span className="text-muted-foreground">프로덕션 레디 템플릿</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Next.js, Tailwind CSS, shadcn/ui를 기반으로 한 모던 웹 스타터킷.
            다크모드, 반응형 레이아웃, 폼 검증 등 모든 필수 기능이 포함되어
            있습니다.
          </p>
        </div>
        <ToastDemo />
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="size-5 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </Container>
  )
}
