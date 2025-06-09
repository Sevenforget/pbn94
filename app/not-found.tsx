import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        찾으시는 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        홈으로 돌아가기
      </Link>
    </div>
  )
}
