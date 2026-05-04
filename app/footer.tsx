export default function footer() {
  return (
    <footer className="bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* 상단 */}
        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-black">K-LIGHT</h2>
            <p className="mt-4 text-sm text-zinc-400 leading-6">
              고보라이트 · 이미지글래스 · 무빙젝터 · DMX · 투광등
              <br />
              경관조명 전문 제작
            </p>
          </div>

          <div className="text-sm space-y-3">
            <p className="text-zinc-500">COMPANY</p>

            <p>케이라이트</p>
            <p>대표 서찬석</p>
            <p>사업자번호 739-02-02662</p>
          </div>

          <div className="text-sm space-y-3">
            <p className="text-zinc-500">CONTACT</p>

            <p>대전광역시 동구 동부로99</p>

            <a
              href="https://kko.to/UfFg41qVMo"
              target="_blank"
              className="inline-block mt-2 text-white underline underline-offset-4"
            >
              위치 보기
            </a>
          </div>

        </div>

        {/* 하단 */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-zinc-500">
          © 2026 K-LIGHT. All rights reserved.
        </div>

      </div>
    </footer>
  );
}