"use client";

import { useState } from "react";
import Link from "next/link";

export default function products() {
  const [active, setactive] = useState("gobo");

  const products = {
    gobo: {
      title: "고보라이트",
      image: "/images/1.jpg",
      desc: "로고, 패턴, 문구를 선명하게 투사하는 조명",
      detail: "매장, 전시장, 브랜드 공간에서 시선을 끄는 핵심 연출 장비입니다.",
      specs: [
        ["광원", "LED"],
        ["사용환경", "실내 / 실외"],
        ["투사거리", "3m ~ 20m"],
        ["제작방식", "맞춤 제작"],
      ],
    },
    moving: {
      title: "무빙젝터",
      image: "/images/2.jpg",
      desc: "움직이는 이미지 연출 장비",
      detail: "이벤트, 홍보 공간에서 동적인 연출 가능",
      specs: [
        ["광원", "LED"],
        ["연출", "회전 / 이동"],
        ["사용환경", "실내 / 실외"],
        ["제어", "리모컨 / DMX"],
      ],
    },
    dmx: {
      title: "DMX",
      image: "/images/3.jpg",
      desc: "조명 제어 시스템",
      detail: "다양한 조명 장비를 통합 제어",
      specs: [
        ["제어방식", "DMX512"],
        ["연결", "유선"],
        ["적용", "조명 전체 제어"],
        ["사용", "전문 연출"],
      ],
    },
    flood: {
      title: "투광등",
      image: "/images/4.jpg",
      desc: "고출력 외부 조명",
      detail: "건물, 간판, 야외 공간 조명",
      specs: [
        ["광원", "LED"],
        ["방수", "IP65"],
        ["용도", "외부 조명"],
        ["출력", "고출력"],
      ],
    },
  };

  const current = products[active as keyof typeof products];

  return (
    <main className="bg-white text-black">

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold text-gray-400">
            PRODUCTS
          </p>

          <h1 className="text-5xl font-bold md:text-6xl mb-6">
            제품 선택
          </h1>

          <p className="text-lg text-gray-500">
            원하는 제품을 선택하면 상세 정보를 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

            {Object.entries(products).map(([key, item]) => (
              <div
                key={key}
                onClick={() => setactive(key)}
                className={`cursor-pointer rounded-3xl border p-6 text-center transition ${
                  active === key
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <p className="font-bold text-lg">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            <div className="rounded-3xl overflow-hidden">
              <img
                src={current.image}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold mb-6">
                {current.title}
              </h2>

              <p className="text-xl text-gray-700 mb-4">
                {current.desc}
              </p>

              <p className="text-gray-500 mb-8">
                {current.detail}
              </p>

              {/* 🔥 사양표 */}
              <div className="border rounded-2xl overflow-hidden mb-10">
                {current.specs.map(([key, value], i) => (
                  <div
                    key={i}
                    className="flex justify-between p-4 border-b last:border-b-0"
                  >
                    <span className="font-semibold">{key}</span>
                    <span className="text-gray-500">{value}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-semibold"
              >
                상담 문의하기
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}