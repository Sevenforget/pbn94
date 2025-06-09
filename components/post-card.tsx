import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import type { Post } from "@/types/post"
import { Tag } from "@/components/tag"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/posts/${post.id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg?height=400&width=600&query=abstract%20pattern"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <Link href={`/posts/${post.id}`} className="block">
          <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{post.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
