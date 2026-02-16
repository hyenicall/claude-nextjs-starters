import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, Palette, Database, Shield } from "lucide-react"

const techStack = [
  {
    icon: Code2,
    title: "프레임워크",
    description: "Next.js 15 + React 19 - App Router, Server Components",
  },
  {
    icon: Palette,
    title: "스타일링",
    description: "Tailwind CSS v4 + shadcn/ui - 유틸리티 기반 디자인",
  },
  {
    icon: Database,
    title: "상태관리",
    description: "Zustand + React Hook Form - 최소 보일러플레이트",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript + Zod - 엔드투엔드 타입 체크",
  },
] as const

export default function AboutPage() {
  return (
    <Container className="py-16">
      <section className="flex flex-col items-center gap-8 text-center">
        <Badge variant="secondary">About</Badge>
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            모던 웹 개발을 위한 스타터킷
          </h1>
          <p className="text-lg text-muted-foreground">
            프로덕션 레디 환경에서 빠르게 개발을 시작하세요.
            최신 기술 스택과 모범 사례가 적용된 템플릿입니다.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => (
          <Card key={tech.title}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <tech.icon className="size-5 text-primary" />
              </div>
              <CardTitle>{tech.title}</CardTitle>
              <CardDescription>{tech.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </Container>
  )
}
