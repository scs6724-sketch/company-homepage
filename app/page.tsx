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
    <main className="min-h-screen bg-white text-black">

      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">

        <img
          src={images[index]}
          className="absolute w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

          <h1 className="text-6xl md:text-7xl font-bold">
            K-LIGHT
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            고보조명 이미지 시스템 전문 기업
          </p>

          <Link href="/contact">
            <button className="mt-10 px-8 py-4 bg-white text-black rounded-2xl font-semibold">
              제작 문의
            </button>
          </Link>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-24 px-8 max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-12">
          Why K-LIGHT
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 border rounded-3xl">
            <h3 className="text-2xl mb-3">Precision</h3>
            <p>정밀 설계 기반 제작</p>
          </div>

          <div className="p-8 border rounded-3xl">
            <h3 className="text-2xl mb-3">Power</h3>
            <p>고광량 투사 기술</p>
          </div>

          <div className="p-8 border rounded-3xl">
            <h3 className="text-2xl mb-3">Trust</h3>
            <p>검증된 품질 시스템</p>
          </div>

        </div>

      </section>

      {/* PRODUCT */}
      <section className="py-24 px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-12">
            제품 소개
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow p-6">
              <div className="h-64 bg-gray-200 rounded-2xl mb-4"></div>
              <h3 className="text-xl">고보 프로젝터</h3>
            </div>

            <div className="bg-white rounded-3xl shadow p-6">
              <div className="h-64 bg-gray-200 rounded-2xl mb-4"></div>
              <h3 className="text-xl">광학 글래스</h3>
            </div>

            <div className="bg-white rounded-3xl shadow p-6">
              <div className="h-64 bg-gray-200 rounded-2xl mb-4"></div>
              <h3 className="text-xl">커스텀 시스템</h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">

        <h2 className="text-5xl font-bold">
          프로젝트 상담
        </h2>

        <Link href="/contact">
          <button className="mt-8 px-10 py-4 bg-white text-black rounded-2xl font-semibold">
            문의하기
          </button>
        </Link>

      </section>

      {/* MAP (진짜 지도 표시 버전) */}
      <section className="py-24 bg-black text-white px-8">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            오시는 길
          </h2>

          <p className="text-zinc-400 mb-10">
            K-LIGHT 위치 안내
          </p>

          {/* 지도 실제 표시 */}
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-lg mb-8">

            <iframe
              src="https://map.kakao.com/link/map/케이라이트"
              className="w-full h-full"
              loading="lazy"
            />

          </div>

          {/* 보조 버튼 */}
          <a
            href="https://kko.to/UfFg41qVMo"
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:opacity-80 transition"
          >
            카카오맵으로 길찾기
          </a>

        </div>

      </section>

    </main>
  )
}
