import Link from "next/link"

export default function GlassPage() {
  return (
    <main className="bg-white text-black">

      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.3em] text-sm text-zinc-400 mb-6">
            IMAGE GLASS
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            선명한 투사를 위한<br />
            이미지글래스 제작
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-8">
            고보조명의 핵심은 이미지 품질입니다. 케이라이트는 용도와 환경에 맞는
            이미지글래스를 정성껏 제작합니다.
          </p>
        </div>
      </section>

      <section className="py-28 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="h-[520px] bg-gray-200 rounded-[32px] flex items-center justify-center text-gray-500 text-2xl">
            이미지글래스 사진 영역
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              맞춤형 이미지글래스
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-8">
              로고, 패턴, 안내 문구, 사인 이미지 등 다양한 이미지를 조명 투사에 적합하도록 제작합니다.
              단순 출력물이 아닌 조명 환경에 맞춘 선명도와 내구성을 고려합니다.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border">
                로고 및 브랜드 이미지 제작
              </div>

              <div className="p-5 rounded-2xl border">
                실내외 고보조명 적용 가능
              </div>

              <div className="p-5 rounded-2xl border">
                현장 목적에 맞춘 맞춤 제작
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-28 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            제작 프로세스
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["상담", "도안 확인", "제작", "검수 및 출고"].map((step, i) => (
              <div key={step} className="p-8 bg-white rounded-3xl shadow">
                <p className="text-4xl font-bold mb-4">
                  0{i + 1}
                </p>
                <p>{step}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-28 bg-black text-white text-center px-8">
        <h2 className="text-4xl font-bold mb-6">
          이미지글래스 제작이 필요하신가요?
        </h2>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-black rounded-2xl font-semibold"
        >
          견적 문의하기
        </Link>
      </section>

    </main>
  )
}