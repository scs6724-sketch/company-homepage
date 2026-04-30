"use client";

import Link from "next/link";
import { useState } from "react";

export default function portfolio() {
  const [showmore, setshowmore] = useState(false);

  const mainimages = [
    "/images/portfolio1.jpg",
    "/images/portfolio2.jpg",
    "/images/portfolio3.jpg",
    "/images/portfolio4.jpeg",
    "/images/portfolio5.jpg",
    "/images/portfolio6.jpg",
    "/images/portfolio7.jpg",
    "/images/portfolio8.jpg",
    "/images/portfolio9.png",
    "/images/portfolio10.jpg",
    "/images/portfolio11.jpg",
    "/images/portfolio12.png",
    "/images/portfolio13.jpg",
    "/images/portfolio14.png",
    "/images/portfolio15.jpg",
    "/images/portfolio16.jpg",
    "/images/portfolio17.jpg",
    "/images/portfolio18.jpg",
  ];

  const moreimages = [
    "/images/portfolio19.jpg",
    "/images/portfolio20.jpg",
    "/images/portfolio21.jpg",
    "/images/portfolio22.png",
    "/images/portfolio23.jpg",
    "/images/portfolio24.jpg",
    "/images/portfolio25.jpg",
    "/images/portfolio26.jpg",
    "/images/portfolio27.jpg",
    "/images/portfolio28.jpg",
    "/images/portfolio29.jpg",
    "/images/portfolio30.jpg",
    "/images/portfolio31.jpeg",
    "/images/portfolio32.jpg",
    "/images/portfolio33.jpg",
    "/images/portfolio34.jpg",
    "/images/portfolio35.jpg",
    "/images/portfolio36.jpg",
    "/images/portfolio37.jpg",
    "/images/portfolio38.jpg",
    "/images/portfolio39.jpg",
    "/images/portfolio40.png",
    "/images/portfolio41.jpg",
    "/images/portfolio42.jpg",
    "/images/portfolio43.jpg",
    "/images/portfolio44.jpg",
    "/images/portfolio45.jpg",
    "/images/portfolio46.jpg",
    "/images/portfolio47.jpg",
    "/images/portfolio48.png",
  ];

  const images = showmore ? [...mainimages, ...moreimages] : mainimages;

  return (
    <main className="bg-white text-black">

      <section className="px-6 py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold text-gray-400">
            PORTFOLIO
          </p>

          <h1 className="text-5xl font-bold md:text-6xl mb-6">
            제작 및 시공 사례
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl leading-8">
            다년간 수많은 현장에서 적용된 고보라이트 및 이미지글래스 제작 사례입니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {images.map((src, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-[28px] bg-gray-100 ${
                  index < 2 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                    index < 2 ? "h-[500px]" : "h-[320px]"
                  }`}
                />
              </div>
            ))}

          </div>

          {!showmore && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setshowmore(true)}
                className="px-10 py-4 border rounded-2xl font-semibold hover:bg-gray-100"
              >
                더보기
              </button>
            </div>
          )}

        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl text-center">

          <h2 className="text-4xl font-bold mb-6">
            비슷한 프로젝트를 준비 중이신가요?
          </h2>

          <p className="text-gray-500 mb-10">
            원하는 이미지와 설치 환경을 알려주시면 제작 가능 여부를 안내드립니다.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-black text-white rounded-2xl font-semibold"
          >
            제작 문의하기
          </Link>

        </div>
      </section>

    </main>
  );
}