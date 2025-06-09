import { Header } from "@/components/header"
import { PostCard } from "@/components/post-card"
import { posts } from "@/data/posts"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 개발과 일상의 기록. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
