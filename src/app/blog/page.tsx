import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { EmptyState } from "@/components/ui/empty-state"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "블로그 | Next.js Starter",
  description: "개발 관련 유익한 콘텐츠를 제공합니다.",
}

export default function BlogPage() {
  return (
    <Container className="py-16">
      <EmptyState
        icon={BookOpen}
        title="블로그 준비 중입니다"
        description="곧 유익한 개발 콘텐츠로 찾아뵙겠습니다"
        action={
          <Button asChild variant="outline">
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        }
      />
    </Container>
  )
}
