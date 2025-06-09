import Link from "next/link"
import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/modern-coding-desk.png')",
          filter: "brightness(0.7) saturate(0.8)",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight hover:text-gray-100 transition-colors"
          >
            개발과 일상의 기록
          </Link>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            기술적인 발견과 일상의 소소한 이야기를 공유하는 공간
          </p>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="검색어를 입력하세요..."
              className="w-full px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
