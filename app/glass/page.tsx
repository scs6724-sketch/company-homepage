import Link from "next/link";

export default function glass() {
  const features = [
    "로고 및 브랜드 이미지 제작",
    "실내외 고보조명 적용 가능",
    "현장 목적에 맞춘 맞춤 제작",
  ];

  const steps = ["상담", "도안 확인", "제작", "검수 및 출고"];

  return (
    <main className="bg-neutral-950 text-white">
      <section className="relative overflow-hidden px-6 py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]"></div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold tracking-[0.35em] text-zinc-500">
            IMAGE GLASS
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            선명한 투사를 위한
            <br />
            이미지글래스 제작
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            고보조명의 핵심은 이미지 품질입니다. 케이라이트는 로고, 문구, 패턴을 조명 투사에 적합한 이미지글래스로 제작합니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] shadow-2xl">
            <img
              src="/images/2.jpg"
              alt="이미지글래스 제작 이미지"
              className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-zinc-500">
              CUSTOM IMAGE GLASS
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              조명 환경에 맞춘
              <br />
              맞춤형 이미지글래스
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              단순 출력물이 아니라 투사 거리, 밝기, 설치 환경을 고려해 이미지 선명도와 완성도를 높이는 방향으로 제작합니다.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-black text-black">
                    {index + 1}
                  </p>

                  <p className="font-bold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 text-black md:p-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold text-zinc-500">
              PROCESS
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              제작 프로세스
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center"
              >
                <p className="text-4xl font-black text-zinc-300">
                  0{index + 1}
                </p>

                <p className="mt-5 text-xl font-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-bold text-zinc-500">
                REQUEST
              </p>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                이미지글래스 제작이
                <br />
                필요하신가요?
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
                사용하실 로고나 이미지를 보내주시면 제작 가능 여부와 적합한 진행 방향을 안내드립니다.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-white px-9 py-4 font-bold text-black transition hover:bg-zinc-200"
              >
                견적 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}