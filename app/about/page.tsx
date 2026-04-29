import Link from "next/link";

export default function about() {
  const strengths = [
    ["전문 제작", "이미지글래스 중심의 정밀 제작 노하우"],
    ["풍부한 현장 경험", "고보조명, 경관조명, 특수조명 프로젝트 수행"],
    ["다양한 협업 경험", "매장, 행사, 관공서, 기업 공간 등 다양한 현장 대응"],
  ];

  const partners = [
    "브랜드 매장",
    "프랜차이즈",
    "전시·행사 공간",
    "관공서",
    "건축·인테리어 업체",
    "광고·사인 업체",
  ];

  return (
    <main className="bg-white text-black">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold text-gray-400">
            ABOUT K-LIGHT
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            다양한 현장에서 검증된
            <br />
            이미지글래스 제작 전문기업
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            케이라이트는 이미지글래스 제작을 중심으로 고보조명, 경관조명, 특수조명 분야에서 다양한 현장 경험을 쌓아온 제작 전문 업체입니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="/images/5.jpg"
              alt="케이라이트 회사 소개 이미지"
              className="h-[460px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-gray-400">
              EXPERIENCE
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              제작부터 현장 적용까지
              <br />
              결과를 고려합니다
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                케이라이트는 단순히 이미지를 제작하는 것에 그치지 않고, 실제 조명 투사 환경에서 선명하게 보일 수 있는 결과물을 목표로 합니다.
              </p>

              <p>
                매장, 전시장, 행사장, 건축 공간, 사인 업체 등 다양한 파트너와 협업하며 현장 목적에 맞는 이미지글래스와 조명 솔루션을 제공해왔습니다.
              </p>

              <p>
                로고, 문구, 안내 이미지, 패턴 등 고객의 브랜드 요소가 공간 안에서 자연스럽게 표현될 수 있도록 제작 품질과 적용성을 함께 고려합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold text-gray-400">
            K-LIGHT STRENGTH
          </p>

          <h2 className="text-4xl font-bold md:text-5xl mb-12">
            많은 현장에서 선택받는 이유
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map(([title, desc]) => (
              <div key={title} className="p-8 bg-white rounded-3xl shadow-sm">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-gray-500 leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold text-gray-400">
              PARTNERSHIP
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              다양한 업종과 함께한
              <br />
              제작 경험
            </h2>

            <p className="mt-6 text-gray-500 leading-8">
              케이라이트는 여러 업종의 고객과 협력하며 공간 목적에 맞는 결과물을 제작해왔습니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((partner) => (
              <div key={partner} className="p-5 border rounded-2xl font-bold">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold text-gray-400">
            QUALITY STANDARD
          </p>

          <h2 className="text-4xl font-bold md:text-5xl mb-12">
            제작 품질 기준
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-8 bg-white rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">선명도 기준</h3>
              <p className="text-gray-500">
                투사 환경을 고려한 최적의 이미지 선명도 기준 제작
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">내구성</h3>
              <p className="text-gray-500">
                장시간 사용에도 안정적인 성능 유지
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">현장 적용성</h3>
              <p className="text-gray-500">
                실제 설치 환경을 고려한 제작
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold text-gray-400">
            WHY K-LIGHT
          </p>

          <h2 className="text-4xl font-bold md:text-5xl mb-12">
            케이라이트를 선택하는 이유
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-4xl font-bold mb-4">01</p>
              <p className="font-bold">풍부한 제작 경험</p>
              <p className="text-gray-500">다양한 현장 대응 경험</p>
            </div>

            <div>
              <p className="text-4xl font-bold mb-4">02</p>
              <p className="font-bold">맞춤 제작</p>
              <p className="text-gray-500">목적에 맞는 결과물 제작</p>
            </div>

            <div>
              <p className="text-4xl font-bold mb-4">03</p>
              <p className="font-bold">빠른 상담</p>
              <p className="text-gray-500">신속한 응대</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-blue-50 via-blue-100 to-white p-10 md:p-16 text-center">

          <p className="mb-4 text-sm font-bold text-blue-400">
            K-LIGHT IN NUMBERS
          </p>

          <h2 className="text-4xl font-bold md:text-5xl mb-12 text-gray-900">
            숫자로 보는 케이라이트
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <p className="text-5xl font-black text-blue-600 mb-3">
                100+
              </p>
              <p className="text-gray-500 font-medium">
                제작 프로젝트
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <p className="text-5xl font-black text-blue-600 mb-3">
                다수
              </p>
              <p className="text-gray-500 font-medium">
                협력 업체
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <p className="text-5xl font-black text-blue-600 mb-3">
                전국
              </p>
              <p className="text-gray-500 font-medium">
                현장 대응
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-black p-10 text-white md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="text-4xl font-bold md:text-5xl">
                프로젝트 상담이 필요하신가요?
              </h2>

              <p className="mt-6 text-zinc-400">
                제작 이미지, 설치 장소, 목적을 알려주시면 상담드립니다.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="px-9 py-4 bg-white text-black rounded-full font-bold"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}