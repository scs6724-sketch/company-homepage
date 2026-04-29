"use client";

import Link from "next/link";
import { useState } from "react";

export default function header() {
  const [open, setopen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white/90 text-black backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-8 w-auto" />
          <span className="text-2xl font-bold">케이라이트</span>
        </Link>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setopen(!open)}
        >
          ☰
        </button>

        <nav className="hidden items-center gap-8 text-base font-semibold lg:flex">
          <Link href="/about">기업소개</Link>
          <Link href="/products">제품소개</Link>
          <Link href="/glass">이미지글래스</Link>
          <Link href="/portfolio">포트폴리오</Link>
          <Link
            href="/contact"
            className="rounded-xl bg-black px-5 py-2 text-white"
          >
            견적문의
          </Link>
        </nav>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-4 border-t bg-white pb-6 lg:hidden">
          <Link href="/about" onClick={() => setopen(false)}>
            기업소개
          </Link>
          <Link href="/products" onClick={() => setopen(false)}>
            제품소개
          </Link>
          <Link href="/glass" onClick={() => setopen(false)}>
            이미지글래스
          </Link>
          <Link href="/portfolio" onClick={() => setopen(false)}>
            포트폴리오
          </Link>
          <Link
            href="/contact"
            onClick={() => setopen(false)}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            견적문의
          </Link>
        </div>
      )}
    </header>
  );
}