'use client'

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          케이라이트
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

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

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white border-t">
          <Link href="/about" onClick={() => setOpen(false)}>기업소개</Link>
          <Link href="/products" onClick={() => setOpen(false)}>제품소개</Link>
          <Link href="/glass" onClick={() => setOpen(false)}>이미지글래스</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>포트폴리오</Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-black text-white rounded-xl"
          >
            견적문의
          </Link>
        </div>
      )}
    </header>
  )
}