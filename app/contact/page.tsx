'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Inquiry = {
  id: number
  company: string
  phone: string
  product: string
  message: string
  password: string
  created_at: string
}

export default function ContactPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [passwordInput, setPasswordInput] = useState("")
  const [openedId, setOpenedId] = useState<number | null>(null)

  // 🔥 DB에서 불러오기
  async function loadInquiries() {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setInquiries(data)
    }
  }

  useEffect(() => {
    loadInquiries()
  }, [])

  // 🔥 DB에 저장
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const { error } = await supabase.from("inquiries").insert([
      {
        company: String(formData.get("company")),
        phone: String(formData.get("phone")),
        product: String(formData.get("product")),
        message: String(formData.get("message")),
        password: String(formData.get("password")),
      },
    ])

    if (error) {
  alert("문의 저장 실패: " + error.message)
  console.log(error)
  return
}
await fetch("/api/telegram", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    text: `📩 새 문의

상호명: ${formData.get("company")}
연락처: ${formData.get("phone")}
제품: ${formData.get("product")}
내용: ${formData.get("message")}`,
  }),
})

    alert("문의가 접수되었습니다.")
    form.reset()
    loadInquiries()
  }

  const selectedInquiry = inquiries.find((item) => item.id === selectedId)

  return (
    <main className="min-h-screen bg-gray-50 px-8 py-28">

      <section className="max-w-6xl mx-auto">

        {/* 상단 설명 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            견적문의
          </h1>

          <p className="text-gray-600 text-lg leading-8">
            제품 및 솔루션에 궁금한 점을 남겨주시면<br />
            신속하고 정확하게 답변드리겠습니다.
          </p>

          <p className="mt-4 font-semibold">
            전화상담: 010-1234-5678
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* 문의 목록 */}
          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-6">
              문의내역
            </h2>

            {inquiries.length === 0 ? (
              <div className="text-center text-gray-500 p-8 border rounded-2xl">
                아직 문의가 없습니다.
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedId(item.id)
                      setOpenedId(null)
                      setPasswordInput("")
                    }}
                    className="border p-5 rounded-2xl cursor-pointer hover:bg-gray-50"
                  >
                    <p className="text-sm text-gray-500">비공개 문의</p>
                    <p className="font-bold">
                      {item.product} - {item.company}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 상세 보기 */}
            {selectedInquiry && (
              <div className="mt-8 border-t pt-6">

                {openedId === selectedInquiry.id ? (
                  <div className="bg-gray-50 p-5 rounded-2xl">
                    <p><b>상호명:</b> {selectedInquiry.company}</p>
                    <p><b>연락처:</b> {selectedInquiry.phone}</p>
                    <p><b>제품:</b> {selectedInquiry.product}</p>
                    <p className="mt-4">{selectedInquiry.message}</p>
                  </div>
                ) : (
                  <div>
                    <p className="mb-3 text-gray-500">
                      비밀번호 입력
                    </p>

                    <div className="flex gap-2">
                      <input
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        maxLength={4}
                        className="border p-3 rounded-xl flex-1"
                        placeholder="4자리"
                      />

                      <button
                        onClick={() => {
                          if (passwordInput === selectedInquiry.password) {
                            setOpenedId(selectedInquiry.id)
                          } else {
                            alert("비밀번호 틀림")
                          }
                        }}
                        className="bg-black text-white px-5 rounded-xl"
                      >
                        확인
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* 글쓰기 */}
          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-6">
              문의 작성
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input name="company" required placeholder="상호명 / 담당자" className="w-full border p-4 rounded-2xl" />

              <input name="phone" required placeholder="연락처" className="w-full border p-4 rounded-2xl" />

              <input name="product" required placeholder="궁금한 제품" className="w-full border p-4 rounded-2xl" />

              <textarea name="message" required placeholder="문의 내용" className="w-full border p-4 rounded-2xl h-40" />

              <input name="password" required maxLength={4} pattern="[0-9]{4}" placeholder="비밀번호 4자리" className="w-full border p-4 rounded-2xl" />

              <button className="w-full bg-black text-white py-4 rounded-2xl font-semibold">
                보내기
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  )
}