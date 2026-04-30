"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function home() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  const [index, setindex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setindex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-neutral-950 text-white">
      <section className="relative h-screen w-full overflow-hidden">
        {images.map((image, i) => (
          <img
            key={image}
            src={image}
            alt="케이라이트 제작 이미지"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-neutral-950"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <p className="mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-zinc-200 backdrop-blur">
            고보라이트 · 이미지글래스 · 특수조명 전문 제작
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            공간의 첫인상을 바꾸는
            <br />
            맞춤 조명 제작
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            케이라이트는 매장, 행사, 전시, 브랜드 공간에 필요한 고보라이트와 이미지글래스를 제작합니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-black transition hover:bg-zinc-200"
            >
              제작 문의하기
            </Link>

            <a
              href="https://kko.to/UfFg41qVMo"
              target="_blank"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              오시는 길
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-zinc-500">
                K-LIGHT PORTFOLIO
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                주요 제작 이미지
              </h2>
            </div>

            <p className="max-w-xl text-zinc-400">
              실제 공간에 어울리는 밝기, 크기, 이미지 선명도를 고려해 제작합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {images.map((image, i) => (
              <div
                key={image}
                className={`group overflow-hidden rounded-[32px] bg-neutral-900 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt="케이라이트 제작 사례"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    i === 0 ? "h-[520px]" : "h-[360px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-4xl font-black">01</p>
            <h3 className="mt-6 text-2xl font-bold">맞춤 제작</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              로고, 문구, 이미지에 맞춰 고보라이트와 이미지글래스를 제작합니다.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-4xl font-black">02</p>
            <h3 className="mt-6 text-2xl font-bold">선명한 투사</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              현장 환경에 맞는 밝기와 사이즈를 고려해 결과물을 제안합니다.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-4xl font-black">03</p>
            <h3 className="mt-6 text-2xl font-bold">빠른 상담</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              문의 내용을 확인한 뒤 제작 가능 여부와 진행 방향을 안내드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[36px] bg-white text-black">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <p className="mb-4 text-sm font-bold text-zinc-500">
                CONTACT
              </p>

              <h2 className="text-3xl font-black leading-tight md:text-4xl">
                제작 상담이
                <br />
                필요하신가요?
              </h2>

              <p className="mt-5 leading-7 text-zinc-600">
                원하시는 이미지, 설치 장소, 사용 목적을 남겨주시면 확인 후 연락드리겠습니다.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-black px-6 py-3 font-bold text-white transition hover:bg-zinc-800"
              >
                문의하기
              </Link>
            </div>

            <div className="bg-neutral-100 p-8 md:p-10">
              <h3 className="text-xl font-black">Company Information</h3>

              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="text-zinc-500">상호명</p>
                  <p className="font-bold">케이라이트</p>
                </div>

                <div>
                  <p className="text-zinc-500">대표</p>
                  <p className="font-bold">서찬석</p>
                </div>

                <div>
                  <p className="text-zinc-500">사업자등록번호</p>
                  <p className="font-bold">739-02-02662</p>
                </div>

                <div>
                  <p className="text-zinc-500">주소</p>
                  <p className="font-bold">
                    대전광역시 동구 동부로99, 1층 케이라이트
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="https://kko.to/UfFg41qVMo"
                    target="_blank"
                    className="inline-block rounded-full border border-black px-5 py-2 text-center text-sm font-bold transition hover:bg-black hover:text-white"
                  >
                    위치 보기
                  </a>

                  <div className="h-[120px] w-[120px] overflow-hidden rounded-2xl border bg-white shadow-sm">
                    <iframe
                      src="https://map.kakao.com/?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%8F%99%EB%B6%80%EB%A1%9C99"
                      className="h-full w-full border-0 grayscale pointer-events-none"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}