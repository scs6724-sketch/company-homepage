"use client";

import { useState } from "react";
import Link from "next/link";

export default function products() {
  const [active, setactive] = useState("gobo");

  const products = {
    gobo: {
      title: "고보라이트",
      label: "Gobo Light",
      image: "/images/1.jpg",
      desc: "로고, 패턴, 안내 문구 등을 선명하게 투사하는 맞춤형 고보조명입니다.",
      detail:
        "매장, 전시장, 건축물 등 다양한 공간에서 브랜드 이미지를 빛으로 표현할 수 있습니다.",
    },
    moving: {
      title: "무빙젝터",
      label: "Moving Projector",
      image: "/images/2.jpg",
      desc: "움직이는 이미지 연출과 공간 연출에 적합한 장비입니다.",
      detail:
        "이벤트, 전시, 홍보 공간에서 시선을 집중시키는 연출이 가능합니다.",
    },
    dmx: {
      title: "DMX",
      label: "Lighting Control",
      image: "/images/3.jpg",
      desc: "조명 제어 시스템과 연동 가능한 전문 솔루션입니다.",
      detail:
        "다양한 조명 장비를 제어하고 연출 패턴을 구성할 수 있습니다.",
    },
    flood: {
      title: "투광등",
      label: "Flood Light",
      image: "/images/4.jpg",
      desc: "외부 및 건축 조명에 사용되는 고출력 조명입니다.",
      detail:
        "건축물 외벽, 간판, 조형물 등을 안정적으로 비추는 조명입니다.",
    },
  };

  const strengths = [
    ["맞춤 제작", "현장 환경에 맞춘 제품 제안"],
    ["전문 상담", "용도별 조명 연출 상담"],
    ["품질 관리", "제작부터 검수까지 관리"],
    ["현장 대응", "설치 환경 고려"],
  ];

  const current = products[active as keyof typeof products];

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold text-gray-400">
            PRODUCTS
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            조명 제품 소개
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-500 leading-8">
            케이라이트는 공간과 목적에 맞는 조명 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-wrap gap-3">
            {Object.entries(products).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setactive(key)}
                className={`px-6 py-3 rounded-full font-semibold border transition ${
                  active === key
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-center">

            <div className="rounded-3xl overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">
                {current.label}
              </p>

              <h2 className="text-4xl font-bold">
                {current.title}
              </h2>

              <p className="mt-5 text-lg text-gray-700 leading-8">
                {current.desc}
              </p>

              <p className="mt-4 text-gray-500 leading-7">
                {current.detail}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {strengths.map(([title, desc]) => (
                  <div key={title} className="p-5 border rounded-2xl">
                    <p className="font-bold">{title}</p>
                    <p className="text-sm text-gray-500 mt-2">{desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block mt-10 px-8 py-4 bg-black text-white rounded-2xl font-semibold"
              >
                제품 상담하기
              </Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}