import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Next.js Starter",
  description: "Next.js 15 + Tailwind CSS v4 + shadcn/ui 모던 웹 스타터킷",
  mainNav: [
    {
      title: "홈",
      href: "/",
    },
    {
      title: "소개",
      href: "/about",
    },
    {
      title: "블로그",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com",
  },
}
