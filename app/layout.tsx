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
  title: "케이라이트",
  description: "이미지글래스 제작 전문기업",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white">
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              케이라이트
            </Link>

            <nav className="hidden md:flex gap-4 text-sm items-center">
              <Link href="/about">기업소개</Link>
              <Link href="/products">제품소개</Link>
              <Link href="/glass">이미지글래스</Link>
              <Link href="/portfolio">포트폴리오</Link>
              <Link href="/contact" className="px-4 py-2 bg-black text-white rounded-xl">
                견적문의
              </Link>
            </nav>
          </div>
        </header>

        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}