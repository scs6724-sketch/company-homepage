'use client'

import { useState } from "react"

export default function ContactPage() {

  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">

      <div className="bg-white w-full max-w-2xl p-10 rounded-3xl shadow">

        {/* 제목 */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          제작 문의
        </h1>

        {/* 폼 */}
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >

          <input
            className="w-full border p-4 rounded-2xl"
            placeholder="회사명"
            required
          />

          <input
            className="w-full border p-4 rounded-2xl"
            placeholder="담당자명"
            required
          />

          <input
            className="w-full border p-4 rounded-2xl"
            placeholder="이메일"
            required
          />

          <input
            className="w-full border p-4 rounded-2xl"
            placeholder="연락처"
            required
          />

          <textarea
            className="w-full border p-4 rounded-2xl h-40"
            placeholder="문의 내용을 입력하세요"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl hover:opacity-80 transition"
          >
            문의 접수
          </button>

        </form>

        {/* 제출 완료 메시지 */}
        {submitted && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            문의가 접수되었습니다. 빠르게 연락드리겠습니다.
          </div>
        )}

        {/* 하단 안내 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          ※ 접수 후 영업일 기준 1~2일 내 연락드립니다
        </div>

      </div>

    </main>
  )
}