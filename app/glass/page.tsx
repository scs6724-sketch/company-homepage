import Link from "next/link";

export default function glass() {
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

          <h1 className="text-5xl font-bold md:text-6xl leading-tight">
            선명한 투사를 위한
            <br />
            이미지글래스 제작
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-500 leading-8">
            케이라이트는 단순 제작이 아닌 실제 조명 환경에서 선명하게 보이는 결과를 목표로 이미지글래스를 제작합니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-[32px] overflow-hidden">
            <img
              src="/images/3.jpg"
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              맞춤형 이미지글래스
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-8">
              케이라이트는 국내 생산 기반으로 전문 디자이너와 함께
              이미지 설계부터 제작까지 전 과정을 직접 진행합니다.
            </p>

            <div className="space-y-4">

              <div className="p-5 rounded-2xl border bg-blue-50 border-blue-100">
                국내 생산 · 직접 제작 시스템 운영
              </div>

              <div className="p-5 rounded-2xl border bg-slate-50">
                최고급 레이저 마킹 장비 사용
              </div>

              <div className="p-5 rounded-2xl border bg-indigo-50 border-indigo-100">
                전문 디자이너 협업 맞춤 설계
              </div>

            </div>

            <p className="mt-8 text-gray-500 leading-7">
              단순한 제작이 아닌, 브랜드 이미지와 공간 환경을 함께 고려하여
              최적의 결과물을 제공합니다.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 숫자 강조 */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 text-center shadow-md">

          <p className="text-sm font-bold text-blue-400 mb-4">
            K-LIGHT PERFORMANCE
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            누적 제작 건수
          </h2>

          <p className="text-6xl md:text-7xl font-black text-blue-600 tracking-tight">
            100,000+
          </p>

          <p className="mt-4 text-gray-500 text-lg">
            다양한 현장에서 검증된 제작 경험
          </p>

        </div>
      </section>

      <section className="px-6 py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-4 text-sm font-bold text-gray-400">
            PROCESS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl mb-16">
            제작 절차
          </h2>

          <div className="grid gap-6 md:grid-cols-4">

            {steps.map(([title, desc], i) => (
              <div key={title} className="relative">

                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-[-50%] w-full h-[2px] bg-blue-200"></div>
                )}

                <div className="bg-white rounded-3xl p-8 shadow-md relative z-10">

                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      0{i + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    {desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="px-6 py-28 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">
          이미지글래스 제작이 필요하신가요?
        </h2>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold"
        >
          견적 문의하기
        </Link>
      </section>

    </main>
  );
}