import { Header } from "@/components/header";
import { PostDetail } from "@/components/post-detail";
import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://easy-pressrelease.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="container mx-auto px-4 py-12">
          <PostDetail post={post} />
        </main>

        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2023 개발과 일상의 기록. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
