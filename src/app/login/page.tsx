import type { Metadata } from "next"
import { KeyRound, ShieldCheck, Zap, Users } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인하세요",
}

const features = [
  { icon: ShieldCheck, text: "안전한 보안 인증" },
  { icon: Zap, text: "빠르고 간편한 로그인" },
  { icon: Users, text: "손쉬운 계정 관리" },
]

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* 왼쪽 브랜드 영역 — 데스크탑에서만 표시, 테마 무관하게 항상 어두운 배경 */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center gap-10 bg-zinc-900 px-12 py-16 text-zinc-50">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10">
            <KeyRound className="size-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Next.js Starter</h1>
          <p className="max-w-xs text-base text-zinc-400">
            모던하고 빠른 Next.js 스타터킷으로 프로젝트를 빠르게 시작하세요.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon className="size-4" />
              </div>
              <span className="text-sm font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 오른쪽 폼 영역 */}
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 lg:w-1/2">
        <Card className="w-full max-w-sm sm:max-w-md">
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 lg:hidden">
              <KeyRound className="size-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">로그인</CardTitle>
            <CardDescription>계정에 로그인하세요</CardDescription>
          </CardHeader>
          <LoginForm />
        </Card>
      </div>
    </div>
  )
}
