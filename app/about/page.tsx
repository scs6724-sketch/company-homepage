export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">

          <p className="tracking-[0.3em] text-sm text-zinc-400 mb-6">
            ABOUT K-LIGHT
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            케이라이트는<br />
            이미지글래스 제작 전문기업입니다.
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-8">
            단순한 제작을 넘어, 공간과 브랜드를 빛으로 표현하는
            고품질 이미지글래스 솔루션을 제공합니다.
          </p>

        </div>
      </section>

      {/* 소개 본문 */}
      <section className="py-28 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* 이미지 자리 */}
          <div className="h-[420px] bg-gray-200 rounded-[32px] flex items-center justify-center text-gray-500">
            회사 이미지 영역
          </div>

          {/* 텍스트 */}
          <div className="space-y-6 text-lg leading-8 text-gray-700">

            <p>
              케이라이트는 다년간의 제작 경험과 현장 노하우를 바탕으로
              국내 최고 수준의 이미지글래스 제작 품질을 목표로 합니다.
            </p>

            <p>
              단순히 제품을 제작하는 것에 그치지 않고,
              고객의 목적과 공간 환경에 맞는 결과물을 만들기 위해
              한 장 한 장 정성을 다해 제작합니다.
            </p>

            <p>
              또한 고보조명, 경관조명, 특수조명 분야에서 오랜 경험을 쌓아온
              전문가로서 조명 연출과 이미지 투사 품질까지 함께 고려한
              솔루션을 제공합니다.
            </p>

          </div>

        </div>
      </section>

      {/* 핵심 강점 */}
      <section className="py-28 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            K-LIGHT Strength
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-10 bg-white rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold mb-4">
                전문 제작
              </h3>
              <p className="text-gray-600">
                이미지글래스 중심의 고정밀 제작 기술
              </p>
            </div>

            <div className="p-10 bg-white rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold mb-4">
                현장 경험
              </h3>
              <p className="text-gray-600">
                고보조명 및 경관조명 다수 프로젝트 수행
              </p>
            </div>

            <div className="p-10 bg-white rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold mb-4">
                맞춤 솔루션
              </h3>
              <p className="text-gray-600">
                환경과 목적에 맞춘 설계 및 제작
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            프로젝트 상담이 필요하신가요?
          </h2>

          <p className="text-zinc-400 mb-10">
            맞춤 제작 상담을 통해 최적의 솔루션을 제공합니다.
          </p>

          <a
            href="/contact"
            className="px-10 py-4 bg-white text-black rounded-2xl font-semibold inline-block"
          >
            문의하기
          </a>

        </div>
      </section>

    </main>
  )
}