import { Tag } from "@/components/tag";
import type { Post } from "@/types/post";
import { ArrowLeft, Calendar, TagIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={
            post.coverImage ||
            "/placeholder.svg?height=400&width=800&query=abstract%20pattern"
          }
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{post.createdAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>모든 글 보기</span>
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-6">
            <TagIcon size={18} className="text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.substring(3)}
                  </h2>
                );
              } else if (
                paragraph.startsWith("```") &&
                paragraph.endsWith("```")
              ) {
                const code = paragraph.substring(
                  paragraph.indexOf("\n") + 1,
                  paragraph.lastIndexOf("\n")
                );
                const language = paragraph.substring(
                  3,
                  paragraph.indexOf("\n")
                );

                return (
                  <pre
                    key={index}
                    className="bg-gray-100 p-4 rounded-md overflow-x-auto"
                  >
                    <code>{code}</code>
                  </pre>
                );
              } else {
                return <p key={index}>{paragraph}</p>;
              }
            }),
          }}
        ></div>
      </div>
    </article>
  );
}
