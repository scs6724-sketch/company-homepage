import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Header from "./header"
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
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}