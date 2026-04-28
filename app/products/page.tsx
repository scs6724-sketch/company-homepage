'use client'

import { useState } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const [active, setActive] = useState("gobo")

  const products = {
    gobo: {
      title: "고보라이트",
      desc: "로고, 패턴, 안내 문구 등을 선명하게 투사하는 맞춤형 고보조명입니다.",
      detail: "매장, 전시장, 건축물, 실내외 공간 등 다양한 현장에서 브랜드 이미지를 빛으로 표현할 수 있습니다.",
    },
    moving: {
      title: "무빙젝터",
      desc: "움직이는 이미지 연출과 공간 연출에 적합한 장비입니다.",
      detail: "동적인 연출이 필요한 이벤트, 경관조명, 홍보 공간에 적합한 솔루션을 제공합니다.",
    },
    dmx: {
      title: "DMX",
      desc: "조명 제어 시스템과 연동 가능한 전문 조명 솔루션입니다.",
      detail: "다양한 조명 장비를 제어하고 연출 패턴을 구성할 수 있어 전문적인 공간 연출에 활용됩니다.",
    },
    flood: {
      title: "투광등",
      desc: "외부 및 건축 조명에 사용되는 고출력 조명입니다.",
      detail: "건축물 외벽, 간판, 조형물, 야외 공간을 밝고 안정적으로 비추는 조명 솔루션입니다.",
    },
  }

  const current = products[active as keyof typeof products]

  return (
    <main className="bg-white text-black">

      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.3em] text-sm text-zinc-400 mb-6">
            PRODUCTS
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            제품소개
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-8">
            케이라이트는 고보라이트, 무빙젝터, DMX 제어 시스템, 투광등까지
            현장 목적에 맞춘 조명 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-wrap gap-3 mb-14">
            {[
              ["gobo", "고보라이트"],
              ["moving", "무빙젝터"],
              ["dmx", "DMX"],
              ["flood", "투광등"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-6 py-3 rounded-2xl border font-semibold transition ${
                  active === key
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="h-[500px] bg-gray-200 rounded-[32px] flex items-center justify-center text-gray-500 text-2xl">
              {current.title} 이미지 영역
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-6">
                {current.title}
              </h2>

              <p className="text-xl text-gray-700 leading-9 mb-6">
                {current.desc}
              </p>

              <p className="text-gray-500 leading-8 mb-10">
                {current.detail}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 rounded-3xl border">
                  <p className="font-bold mb-2">맞춤 제작</p>
                  <p className="text-sm text-gray-500">현장 환경에 맞춘 제품 제안</p>
                </div>

                <div className="p-6 rounded-3xl border">
                  <p className="font-bold mb-2">전문 상담</p>
                  <p className="text-sm text-gray-500">용도별 조명 연출 상담</p>
                </div>

                <div className="p-6 rounded-3xl border">
                  <p className="font-bold mb-2">품질 관리</p>
                  <p className="text-sm text-gray-500">제작부터 검수까지 관리</p>
                </div>

                <div className="p-6 rounded-3xl border">
                  <p className="font-bold mb-2">현장 대응</p>
                  <p className="text-sm text-gray-500">설치 환경을 고려한 솔루션</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-semibold"
              >
                제품 상담하기
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}