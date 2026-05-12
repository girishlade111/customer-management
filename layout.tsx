import Link from "next/link"
import { Phone, Home, MessageSquare, Settings, Bell, UserCircle } from "lucide-react"
import type React from "react" // Added import for React

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-[#A31D1D] h-12">
        <div className="container flex items-center h-full">
          <div className="text-white">System Status Check - Development</div>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="#" className="text-white text-sm">
              Manual/FAQ
            </Link>
            <Link href="#" className="text-white text-sm">
              Notifications
            </Link>
            <Link href="#" className="text-white text-sm">
              Logout
            </Link>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="w-[200px] min-h-[calc(100vh-48px)] border-r bg-gray-50">
          <nav className="p-4 space-y-2">
            <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                1
              </div>
              <Phone className="w-5 h-5" />
              <span className="text-sm">ホーム</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                2
              </div>
              <Home className="w-5 h-5" />
              <span className="text-sm">お客様情報</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                3
              </div>
              <UserCircle className="w-5 h-5" />
              <span className="text-sm">身分証明書</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                4
              </div>
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">顧客ランク</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                5
              </div>
              <Settings className="w-5 h-5" />
              <span className="text-sm">管理</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                6
              </div>
              <Bell className="w-5 h-5" />
              <span className="text-sm">アラート</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 min-h-[calc(100vh-48px)] p-6">{children}</main>
      </div>
    </div>
  )
}
