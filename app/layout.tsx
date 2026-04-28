import type { Metadata } from "next"
import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "K-LIGHT",
  description: "Industrial Gobo Light System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">

        {/* 상단 고정 네비게이션 */}
        <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

            <div className="font-bold text-xl tracking-wide">
              K-LIGHT
            </div>

            <nav className="flex gap-3">

              <Link href="/">
                <button className="px-4 py-2 rounded-xl border hover:bg-black hover:text-white transition">
                  홈
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-4 py-2 rounded-xl border hover:bg-black hover:text-white transition">
                  문의
                </button>
              </Link>

            </nav>

          </div>
        </header>

        {/* 페이지 본문 (헤더 공간 확보) */}
        <main className="pt-24 flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}
