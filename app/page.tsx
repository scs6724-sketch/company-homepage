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
  const [open, setopen] = useState(false);

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
            고보라이트 · 이미지글래스 · 무빙젝터 · DMX · 투광등
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            빛으로 공간의 인상을
            <br />
            설계합니다
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            경관조명을 기반으로 매장, 전시, 행사 공간에 맞는 조명 연출을 제안합니다.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            고보라이트 제작, 고보조명 설치, 바닥광고 조명, 고보조명 렌즈 제작까지 현장 목적에 맞게 안내드립니다.
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

      <section className="bg-gray-50 px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-gray-400">
                K-LIGHT PORTFOLIO
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                실제 제작 이미지
              </h2>
            </div>

            <p className="max-w-xl text-gray-500">
              현장 환경과 조명 목적을 고려해 제작된 결과물입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {images.map((image, i) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[28px] bg-white ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt="케이라이트 제작 사례"
                  className={`w-full object-cover transition duration-700 hover:scale-105 ${
                    i === 0 ? "h-[420px]" : "h-[320px]"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-800"
            >
              포트폴리오 더보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 text-black">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-20 text-center md:grid-cols-3">
            <div>
              <p className="text-base font-semibold text-gray-400">01</p>
              <h3 className="mt-6 text-3xl font-bold">제작 기준</h3>
              <p className="mt-5 text-lg leading-8 text-gray-500">
                현장 환경과 조명 목적을 기준으로 제작 방향을 설정합니다.
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-gray-400">02</p>
              <h3 className="mt-6 text-3xl font-bold">이미지 디테일</h3>
              <p className="mt-5 text-lg leading-8 text-gray-500">
                선명도와 표현 방식을 고려해 결과물을 설계합니다.
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-gray-400">03</p>
              <h3 className="mt-6 text-3xl font-bold">검수 과정</h3>
              <p className="mt-5 text-lg leading-8 text-gray-500">
                제작 후 결과 기준으로 품질을 확인합니다.
              </p>
            </div>
          </div>

          <div className="mt-20 mb-4 text-center">
            <div className="mx-auto mb-6 h-[1.5px] w-16 bg-gray-300"></div>

            <h3 className="text-3xl font-bold text-gray-900">
              디자인 파일이 없어도 괜찮습니다.
            </h3>

            <p className="mt-4 text-gray-500 leading-7">
              참고 <span className="font-semibold text-black">사진 한 장</span>만으로도 번거로움 없이 제작용 디자인을 도와드립니다.
              <br />
              <span className="font-semibold text-black">평균 30분 내</span> 제작 가능 여부를 안내드립니다.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => setopen(true)}
                className="rounded-full border border-black px-10 py-4 font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                파일 보내기
              </button>

              <Link
                href="/contact"
                className="rounded-full border border-gray-300 px-10 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-black hover:text-black"
              >
                상담 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-black">
              파일 보내기
            </h3>

            <p className="mt-3 leading-7 text-gray-500">
              편하신 방법으로 참고 사진이나 이미지를 보내주세요.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="https://pf.kakao.com/_Ajxlgxj"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black"
              >
                카카오톡 채널로 보내기
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("k-lights@daum.net");
                  alert("이메일 주소가 복사되었습니다");
                }}
                className="rounded-2xl border border-gray-200 px-6 py-4 font-bold text-black"
              >
                이메일 주소 복사
              </button>
            </div>

            <button
              onClick={() => setopen(false)}
              className="mt-6 text-sm font-bold text-gray-400"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}