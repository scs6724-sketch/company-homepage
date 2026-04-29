import Link from "next/link";

export default function portfolio() {
  const projects = [
    {
      image: "/images/1.jpg",
      title: "매장 로고 고보라이트",
      category: "Gobo Light",
      desc: "브랜드 로고를 바닥과 벽면에 선명하게 투사한 제작 사례입니다.",
    },
    {
      image: "/images/2.jpg",
      title: "이미지글래스 제작",
      category: "Image Glass",
      desc: "원하는 이미지와 문구를 유리에 담아 조명 효과를 극대화했습니다.",
    },
    {
      image: "/images/3.jpg",
      title: "행사장 특수조명",
      category: "Event Lighting",
      desc: "행사 공간 분위기에 맞춰 시선이 모이는 조명 연출을 적용했습니다.",
    },
    {
      image: "/images/4.jpg",
      title: "카페 입구 포인트 조명",
      category: "Store Lighting",
      desc: "입구 동선에 맞춰 고객이 바로 인식할 수 있는 포인트를 만들었습니다.",
    },
    {
      image: "/images/5.jpg",
      title: "브랜드 공간 연출",
      category: "Brand Space",
      desc: "공간의 첫인상과 브랜드 이미지를 함께 살린 제작 사례입니다.",
    },
    {
      image: "/images/1.jpg",
      title: "맞춤 문구 투사",
      category: "Custom Design",
      desc: "로고, 문구, 안내 이미지를 목적에 맞게 제작해 투사했습니다.",
    },
  ];

  return (
    <main className="bg-neutral-950 text-white">
      <section className="relative overflow-hidden px-6 py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%)]"></div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold tracking-[0.35em] text-zinc-500">
            PORTFOLIO
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            실제 공간에 적용된
            <br />
            케이라이트 제작 사례
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            고보라이트, 이미지글래스, 특수조명 제작 사례를 통해 공간에 맞는 조명 연출 방향을 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className={`group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-2xl ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                      index === 0 ? "h-[520px]" : "h-[340px]"
                    }`}
                  />
                </div>

                <div className="p-7">
                  <p className="mb-3 text-sm font-bold text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-black">{project.title}</h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {project.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 text-black md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-bold text-zinc-500">
                CUSTOM PROJECT
              </p>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                비슷한 프로젝트를
                <br />
                준비 중이신가요?
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
                설치 장소, 원하는 이미지, 사용 목적을 알려주시면 제작 가능 여부와 진행 방향을 안내드립니다.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-black px-9 py-4 font-bold text-white transition hover:bg-zinc-800"
              >
                제작 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}