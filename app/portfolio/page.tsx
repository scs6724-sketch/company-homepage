import Link from "next/link"

export default function PortfolioPage() {
  return (
    <main className="bg-white text-black">

      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.3em] text-sm text-zinc-400 mb-6">
            PORTFOLIO
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            제작 및 시공 사례
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-8">
            케이라이트의 고보조명, 이미지글래스, 경관조명 제작 사례를 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-28 px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group rounded-3xl overflow-hidden bg-white shadow">
                <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-500">
                  포트폴리오 이미지 {num}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Project {num}
                  </h3>

                  <p className="text-gray-500">
                    제작 사례 설명을 입력할 공간입니다.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-28 bg-black text-white text-center px-8">
        <h2 className="text-4xl font-bold mb-6">
          비슷한 프로젝트를 준비 중이신가요?
        </h2>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-black rounded-2xl font-semibold"
        >
          제작 문의하기
        </Link>
      </section>

    </main>
  )
}