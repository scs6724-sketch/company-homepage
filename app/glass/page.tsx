"use client";

import Link from "next/link";
import { useState } from "react";

export default function glass() {
  const [open, setopen] = useState(false);

  const steps = [
    ["상담", "요청 내용 및 사용 환경 확인"],
    ["도안 확인", "이미지 및 디자인 검토"],
    ["제작", "정밀 이미지글래스 제작"],
    ["검수 및 출고", "최종 확인 후 전달"],
  ];

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold text-gray-400">
            IMAGE GLASS
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            선명한 투사를 위한
            <br />
            이미지글래스 제작
          </h1>

          <br />

          <p className="mb-4 text-sm font-bold tracking-widest text-blue-500">
            NO COMPROMISE ON QUALITY
          </p>

          <p className="mt-1 max-w-4xl text-lg leading-9 text-gray-500">
            케이라이트는{" "}
            <span className="font-semibold text-black">
              단순 제작이 아닌, 미세한 먼지 하나까지 관리
            </span>
            하는 정밀 검수를 통해 최상의 품질을 완성합니다.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-9 text-gray-500">
            이미지의 선명도와 디테일, 실제 투사 결과까지 고려하여
            설계부터 제작, 검수까지{" "}
            <span className="font-semibold text-black">
              전 과정의 완성도
            </span>
            를 끌어올립니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="/images/gobolaser.jpg"
              className="h-[520px] w-full max-w-[1000px] ml-auto mr-[-50px] object-contain bg-white"
            />
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-bold">
              커스텀 이미지글래스
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              케이라이트는 국내 생산 기반으로 전문 디자이너와 함께 이미지 설계부터 제작까지 전 과정을 직접 진행합니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                국내 생산 · 직접 제작 시스템 운영
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                Premium Laser Marking System
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
                깨지지 않는 내열 강화유리 사용
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                선명하고 도트 없는 고품질 색 표현
              </div>

              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
                7년 이상 경력의 전문가 중심 제작
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                전문 디자이너 협업 맞춤 설계
              </div>
            </div>

            <p className="mt-8 leading-7 text-gray-500">
              단순한 제작이 아닌, 브랜드 이미지와 공간 환경을 함께 고려하여 최적의 결과물을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[40px] bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 text-center shadow-md">
            <p className="mb-4 text-sm font-bold text-blue-400">
              K-LIGHT PERFORMANCE
            </p>

            <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl">
              누적 제작 건수
            </h2>

            <p className="text-6xl font-black tracking-tight text-blue-600 md:text-7xl">
              100,000+
            </p>

            <p className="mt-4 text-lg text-gray-500">
              다양한 현장에서 검증된 제작 경험
            </p>
          </div>

          <div className="rounded-[40px] bg-gradient-to-br from-cyan-50 via-white to-indigo-100 p-10 text-center shadow-md">
            <p className="mb-4 text-sm font-bold text-cyan-500">
              PARTNERSHIP NETWORK
            </p>

            <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl">
              전국 협력 파트너사
            </h2>

            <p className="text-6xl font-black tracking-tight text-cyan-600 md:text-7xl">
              100+
            </p>

            <p className="mt-4 text-lg text-gray-500">
              전국 현장 대응을 위한 파트너 네트워크
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-4 h-[1.5px] w-20 bg-gray-400"></div>

        <p className="text-xs font-semibold tracking-[0.2em] text-gray-400">
          CUSTOM LENS
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-gray-900 md:text-3xl">
          모든 규격 렌즈 제작 가능
        </h2>

        <p className="mt-3 text-gray-500 leading-7">
          27mm · 30mm · 37mm · 48mm · 53mm · 67mm 등 다양한 규격에 맞춘 맞춤 제작이 가능합니다.
        </p>
      </div>

      <section className="bg-gray-50 px-6 py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold text-gray-400">
            PROCESS
          </p>

          <h2 className="mb-16 text-4xl font-bold md:text-5xl">
            제작 절차
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map(([title, desc], i) => (
              <div key={title} className="relative">
                {i !== steps.length - 1 && (
                  <div className="absolute right-[-50%] top-10 hidden h-[2px] w-full bg-blue-200 md:block"></div>
                )}

                <div className="relative z-10 rounded-3xl bg-white p-8 shadow-md">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white">
                      0{i + 1}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20 mb-24 text-center">
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
            className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-800"
          >
            파일 보내기
          </button>

          <Link
            href="/contact"
            className="rounded-full border border-gray-300 px-8 py-4 font-bold text-black transition hover:bg-gray-100"
          >
            상담 문의하기
          </Link>
        </div>
      </div>

      <section className="bg-black px-6 py-28 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold">
          이미지글래스 제작이 필요하신가요?
        </h2>

        <Link
          href="/contact"
          className="inline-block rounded-full bg-white px-10 py-4 font-bold text-black"
        >
          견적 문의하기
        </Link>
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