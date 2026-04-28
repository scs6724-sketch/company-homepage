'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white text-black">

      {/* 메인 슬라이드 */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={images[index]}
          className="absolute w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-bold">
            케이라이트
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            고보라이트 · 이미지글래스 · 특수조명 전문 제작
          </p>

          <Link href="/contact">
            <button className="mt-10 px-8 py-4 bg-white text-black rounded-2xl font-semibold">
              제작 문의
            </button>
          </Link>
        </div>
      </section>

      {/* 큰 사진 공간 5개 */}
      <section className="py-28 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-12 text-center">
            주요 제작 이미지
          </h2>

          <div className="space-y-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="h-[520px] bg-gray-200 rounded-[32px] flex items-center justify-center text-gray-500 text-2xl"
              >
                사진 공간 {num}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 문의 유도 */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-5xl font-bold">
          제작 상담이 필요하신가요?
        </h2>

        <p className="mt-4 text-zinc-400">
          맞춤 제작 문의를 남겨주시면 확인 후 연락드리겠습니다.
        </p>

        <Link href="/contact">
          <button className="mt-10 px-10 py-4 bg-white text-black rounded-2xl font-semibold">
            문의하기
          </button>
        </Link>
      </section>

      {/* 위치 / 회사정보 */}
      <section className="py-28 bg-neutral-950 text-white px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-10 text-center">
            <div className="text-6xl mb-6">📍</div>

            <h3 className="text-3xl font-bold mb-4">
              오시는 길
            </h3>

            <p className="text-zinc-400 mb-8">
              대전광역시 동구 동부로99, 1층 케이라이트
            </p>

            <a
              href="https://kko.to/UfFg41qVMo"
              target="_blank"
              className="px-8 py-4 bg-white text-black rounded-2xl font-semibold inline-block"
            >
              카카오맵으로 위치 보기
            </a>
          </div>

          <div className="rounded-3xl bg-white text-black p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-8">
              Company Information
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">상호명</p>
                <p className="font-semibold">케이라이트</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">대표</p>
                <p className="font-semibold">서찬석</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">사업자등록번호</p>
                <p className="font-semibold">739-02-02662</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">주소</p>
                <p className="font-semibold">
                  대전광역시 동구 동부로99, 1층 케이라이트
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}