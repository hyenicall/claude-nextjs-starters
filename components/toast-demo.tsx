"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <Button
      onClick={() =>
        toast.success("스타터킷에 오신 것을 환영합니다!", {
          description: "Toast 알림이 정상적으로 동작합니다.",
        })
      }
    >
      Toast 테스트
    </Button>
  )
}
