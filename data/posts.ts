import type { Post } from "@/types/post"

export const posts: Post[] = [
  {
    id: "1",
    title: "리액트 18의 새로운 기능들",
    content:
      "리액트 18에서는 많은 새로운 기능들이 추가되었습니다. 그 중에서도 Concurrent Mode와 Suspense for Data Fetching은 특히 주목할 만한 기능입니다. 이번 포스트에서는 이러한 기능들이 어떻게 작동하는지, 그리고 어떻게 활용할 수 있는지 알아보겠습니다.\n\n## Concurrent Mode\n\nConcurrent Mode는 UI 렌더링을 중단하고 재개할 수 있게 해주는 기능입니다. 이를 통해 사용자 경험을 크게 향상시킬 수 있습니다.\n\n## Suspense for Data Fetching\n\nSuspense for Data Fetching은 데이터를 불러오는 동안 로딩 상태를 선언적으로 처리할 수 있게 해줍니다. 이를 통해 코드의 가독성을 높이고 사용자 경험을 개선할 수 있습니다.",
    author: "김개발",
    tags: ["React", "JavaScript", "Frontend"],
    createdAt: "2023-05-15",
    excerpt: "리액트 18에서 추가된 Concurrent Mode와 Suspense for Data Fetching에 대해 알아봅니다.",
    coverImage: "/abstract-tech-blue-purple.png",
  },
  {
    id: "2",
    title: "제주도 여행 후기",
    content:
      "지난 주말, 오랜만에 제주도로 여행을 다녀왔습니다. 코로나 이후 처음으로 떠난 여행이라 더욱 특별했던 것 같습니다.\n\n## 첫째 날\n\n첫째 날에는 제주 동부 지역을 돌아다녔습니다. 성산일출봉에서 시작해서 우도, 그리고 함덕 해수욕장까지 다녀왔습니다. 특히 우도에서 먹은 땅콩 아이스크림은 정말 맛있었습니다.\n\n## 둘째 날\n\n둘째 날에는 제주 서부 지역을 탐험했습니다. 협재 해수욕장의 에메랄드빛 바다는 정말 아름다웠습니다. 오설록 티 뮤지엄에서 녹차 아이스크림도 먹고, 카페에서 차도 마셨습니다.\n\n## 셋째 날\n\n마지막 날에는 한라산을 등반했습니다. 날씨가 좋아서 정상에서 바라본 경치는 정말 장관이었습니다. 다음에 제주도에 가게 된다면 또 한라산을 등반하고 싶습니다.",
    author: "이여행",
    tags: ["여행", "제주도", "일상"],
    createdAt: "2023-06-20",
    excerpt: "지난 주말 제주도로 떠난 3박 4일 여행 후기를 공유합니다.",
    coverImage:
      "/placeholder.svg?height=400&width=600&query=jeju%20island%20scenic%20view%20with%20ocean%20and%20mountain",
  },
  {
    id: "3",
    title: "타입스크립트 시작하기",
    content:
      "타입스크립트는 자바스크립트의 슈퍼셋 언어로, 정적 타입을 지원합니다. 이를 통해 개발 과정에서 많은 오류를 미리 잡아낼 수 있어 생산성을 높일 수 있습니다.\n\n## 타입스크립트 설치하기\n\n```bash\nnpm install -g typescript\n```\n\n## 간단한 타입스크립트 예제\n\n```typescript\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('TypeScript'));\n```\n\n## 인터페이스 사용하기\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email?: string; // 선택적 속성\n}\n\nfunction createUser(user: User): User {\n  return user;\n}\n```\n\n타입스크립트를 사용하면 코드의 안정성을 높이고, 개발 경험을 향상시킬 수 있습니다. 특히 대규모 프로젝트에서 그 효과가 더욱 두드러집니다.",
    author: "박코딩",
    tags: ["TypeScript", "Programming", "Frontend"],
    createdAt: "2023-07-10",
    excerpt: "타입스크립트의 기본 개념과 시작하는 방법에 대해 알아봅니다.",
    coverImage:
      "/placeholder.svg?height=400&width=600&query=typescript%20code%20on%20screen%20with%20blue%20background",
  },
  {
    id: "4",
    title: "홈 카페 만들기",
    content:
      "요즘 집에서 커피를 직접 내려 마시는 홈 카페가 유행입니다. 저도 최근에 홈 카페 장비를 갖추고 직접 커피를 내려 마시고 있는데, 생각보다 재미있고 만족스러운 경험입니다.\n\n## 필요한 장비\n\n- 커피 그라인더\n- 드립 세트 또는 에스프레소 머신\n- 전자저울\n- 신선한 원두\n\n## 추천 원두\n\n1. 에티오피아 예가체프 - 과일향이 풍부하고 산미가 좋습니다.\n2. 과테말라 안티구아 - 초콜릿 향과 부드러운 바디감이 특징입니다.\n3. 브라질 세하도 - 고소한 맛과 낮은 산미로 초보자에게 좋습니다.\n\n집에서 커피를 내려 마시면 카페에 가는 비용을 절약할 수 있고, 자신의 취향에 맞게 커피를 추출할 수 있다는 장점이 있습니다. 또한, 커피를 내리는 과정 자체가 하나의 취미가 될 수 있어 일상에 소소한 즐거움을 더해줍니다.",
    author: "최커피",
    tags: ["커피", "홈카페", "취미", "일상"],
    createdAt: "2023-08-05",
    excerpt: "집에서 나만의 홈 카페를 만드는 방법과 필요한 장비들을 소개합니다.",
    coverImage:
      "/placeholder.svg?height=400&width=600&query=coffee%20beans%20and%20brewing%20equipment%20on%20wooden%20table",
  },
  {
    id: "5",
    title: "Next.js 13으로 블로그 만들기",
    content:
      "Next.js 13에서는 App Router가 도입되어 더욱 직관적인 라우팅 시스템을 제공합니다. 이번 포스트에서는 Next.js 13을 사용하여 블로그를 만드는 방법을 단계별로 알아보겠습니다.\n\n## 프로젝트 설정\n\n```bash\nnpx create-next-app@latest my-blog --typescript\ncd my-blog\n```\n\n## 페이지 구성하기\n\nApp Router를 사용하면 폴더 구조가 곧 URL 경로가 됩니다. 예를 들어, `app/blog/page.tsx` 파일은 `/blog` 경로에 해당합니다.\n\n```typescript\n// app/blog/page.tsx\nexport default function BlogPage() {\n  return (\n    <div>\n      <h1>블로그</h1>\n      <p>블로그 글 목록이 여기에 표시됩니다.</p>\n    </div>\n  );\n}\n```\n\n## 데이터 가져오기\n\nNext.js 13에서는 서버 컴포넌트를 기본으로 사용하므로, 컴포넌트 내에서 직접 데이터를 가져올 수 있습니다.\n\n```typescript\n// app/blog/[slug]/page.tsx\nasync function getBlogPost(slug: string) {\n  // 데이터를 가져오는 로직\n  return { title: '블로그 제목', content: '블로그 내용' };\n}\n\nexport default async function BlogPostPage({ params }: { params: { slug: string } }) {\n  const post = await getBlogPost(params.slug);\n  \n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <div>{post.content}</div>\n    </div>\n  );\n}\n```\n\nNext.js 13의 App Router와 서버 컴포넌트를 활용하면 더욱 효율적이고 직관적인 블로그를 만들 수 있습니다.",
    author: "정프론트",
    tags: ["Next.js", "React", "Web Development"],
    createdAt: "2023-09-01",
    excerpt: "Next.js 13의 App Router를 사용하여 블로그를 만드는 방법을 알아봅니다.",
    coverImage: "/placeholder.svg?height=400&width=600&query=next.js%20code%20with%20modern%20UI%20design",
  },
]
