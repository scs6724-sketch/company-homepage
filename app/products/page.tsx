"use client";

import { useState } from "react";
import Link from "next/link";

type slide = {
  type: "image" | "video";
  src: string;
};

export default function products() {
  const products = [
    {
      title: "고보라이트",
      slides: [
        { type: "image", src: "/images/gobo1.jpg" },
        { type: "image", src: "/images/gobo2.jpg" },
        { type: "image", src: "/images/gobo3.jpg" },
        { type: "image", src: "/images/gobo4.jpg" },
      ] as slide[],
      desc: "렌즈에 이미지를 각인하여 LED 광원을 통해 공간에 투사하는 조명입니다.",
      detail:
        "로고, 문구, 패턴 등 원하는 이미지를 렌즈에 각인 후 LED 광원을 통해 바닥, 벽면, 외부 공간 등 다양한 장소에 선명하게 투사할 수 있습니다.",
      specs: [
        ["광원", "LED (AC220V)"],
        ["방수", "IP65"],
        ["사용환경", "실내 / 실외"],
        ["연출방식", "1구 고정 / 회전 / 4구 회전 점멸"],
        ["제작", "로고 / 문구 / 이미지 자유 제작"],
      ],
    },
    {
      title: "무빙젝터",
      slides: [
        { type: "video", src: "/videos/moving1.mp4" },
        { type: "video", src: "/videos/moving2.mp4" },
        { type: "video", src: "/videos/moving3.mp4" },
        { type: "image", src: "/images/moving-photo.png" },
      ] as slide[],
      desc: "Full HD 영상 투사와 DMX 제어가 가능한 실내외 무빙젝터입니다.",
      detail:
        "2000루멘 밝기와 IP65 방수 성능을 갖춰 실내외 공간에서 움직이는 영상, 로고, 패턴 연출에 활용할 수 있습니다.",
      specs: [
        ["크기", "475 × 275 × 175mm"],
        ["밝기", "2000루멘"],
        ["투사비", "1.5:1"],
        ["해상도", "1920 × 1080"],
        ["방수", "IP65"],
        ["통신", "DMX512"],
        ["영상 업로드", "USB 비디오 업로드"],
        ["사용환경", "실내 / 실외"],
      ],
    },
    {
      title: "DMX",
      slides: [
        { type: "image", src: "/images/3.jpg" },
        { type: "image", src: "/images/4.jpg" },
        { type: "image", src: "/images/5.jpg" },
      ] as slide[],
      desc: "조명 장비를 전문적으로 제어하는 시스템입니다.",
      detail:
        "여러 조명 장비를 통합 제어하고 시간, 밝기, 패턴 등을 구성해 전문적인 공간 연출이 가능합니다.",
      specs: [
        ["제어방식", "DMX512"],
        ["연결", "유선 제어"],
        ["적용", "조명 전체 제어"],
        ["용도", "행사 / 전시 / 경관 연출"],
      ],
    },
    {
      title: "투광등",
      slides: [
        { type: "image", src: "/images/4.jpg" },
        { type: "image", src: "/images/5.jpg" },
        { type: "image", src: "/images/1.jpg" },
      ] as slide[],
      desc: "넓은 공간과 외부 환경을 안정적으로 비추는 고출력 조명입니다.",
      detail:
        "건물 외벽, 간판, 조형물, 야외 공간 등 밝기와 안정성이 필요한 장소에 적합합니다.",
      specs: [
        ["광원", "LED"],
        ["방수", "IP65"],
        ["사용환경", "외부 / 야외"],
        ["용도", "건축물 / 간판 / 경관 조명"],
      ],
    },
  ];

  const [slideindex, setslideindex] = useState([0, 0, 0, 0]);

  function prev(productindex: number, total: number) {
    setslideindex((prev) =>
      prev.map((value, index) =>
        index === productindex ? (value - 1 + total) % total : value
      )
    );
  }

  function next(productindex: number, total: number) {
    setslideindex((prev) =>
      prev.map((value, index) =>
        index === productindex ? (value + 1) % total : value
      )
    );
  }

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold text-blue-500">PRODUCTS</p>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            제품소개
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            케이라이트는 현장 목적과 설치 환경에 맞춰 고보라이트, 무빙젝터, DMX 제어 시스템, 투광등을 제안합니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-12">
          {products.map((item, index) => {
            const currentslide = item.slides[slideindex[index]];

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-[36px] border border-gray-100 bg-white shadow-xl"
              >
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-center bg-gray-100 p-6">
                    <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-md">
                      {currentslide.type === "video" ? (
                        <video
                          key={currentslide.src}
                          src={currentslide.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="aspect-square w-full object-cover"
                        />
                      ) : (
                        <img
                          src={currentslide.src}
                          alt={item.title}
                          className="aspect-square w-full object-cover transition duration-500"
                        />
                      )}

                      <button
                        onClick={() => prev(index, item.slides.length)}
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold shadow"
                      >
                        ‹
                      </button>

                      <button
                        onClick={() => next(index, item.slides.length)}
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold shadow"
                      >
                        ›
                      </button>

                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        {item.slides.map((_, dotindex) => (
                          <span
                            key={dotindex}
                            className={`h-2 w-2 rounded-full ${
                              slideindex[index] === dotindex
                                ? "bg-black"
                                : "bg-white/70"
                            }`}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-bold text-gray-400">
                        K-LIGHT PRODUCT
                      </span>
                    </div>

                    <h2 className="text-4xl font-black">{item.title}</h2>

                    <p className="mt-5 text-xl leading-8 text-gray-700">
                      {item.desc}
                    </p>

                    <p className="mt-4 leading-8 text-gray-500">
                      {item.detail}
                    </p>

                    <div className="mt-8 overflow-hidden rounded-3xl border border-gray-100">
                      {item.specs.map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between gap-6 border-b border-gray-100 px-5 py-4 last:border-b-0"
                        >
                          <span className="font-bold">{key}</span>
                          <span className="text-right text-gray-500">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-800"
                    >
                      상담 문의하기
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}