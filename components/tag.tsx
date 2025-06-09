import { cn } from "@/lib/utils"

interface TagProps {
  name: string
  className?: string
}

const tagColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  TypeScript: "bg-blue-100 text-blue-800",
  Frontend: "bg-purple-100 text-purple-800",
  "Web Development": "bg-green-100 text-green-800",
  Programming: "bg-indigo-100 text-indigo-800",
  여행: "bg-emerald-100 text-emerald-800",
  제주도: "bg-teal-100 text-teal-800",
  일상: "bg-gray-100 text-gray-800",
  커피: "bg-amber-100 text-amber-800",
  홈카페: "bg-orange-100 text-orange-800",
  취미: "bg-rose-100 text-rose-800",
  "Next.js": "bg-black text-white",
}

export function Tag({ name, className }: TagProps) {
  const colorClass = tagColors[name] || "bg-gray-100 text-gray-800"

  return (
    <span className={cn("inline-block px-2 py-1 text-xs font-medium rounded-full", colorClass, className)}>{name}</span>
  )
}
