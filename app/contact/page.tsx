"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type inquiry = {
  id: number;
  company: string;
  phone: string;
  product: string;
  message: string;
  password: string;
  created_at: string;
};

export default function contactpage() {
  const [inquiries, setinquiries] = useState<inquiry[]>([]);
  const [selectedid, setselectedid] = useState<number | null>(null);
  const [passwordinput, setpasswordinput] = useState("");
  const [openedid, setopenedid] = useState<number | null>(null);

  async function loadinquiries() {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setinquiries(data);
    }
  }

  useEffect(() => {
    loadinquiries();
  }, []);

  async function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formdata = new FormData(form);

    const { error } = await supabase.from("inquiries").insert([
      {
        company: String(formdata.get("company")),
        phone: String(formdata.get("phone")),
        product: String(formdata.get("product")),
        message: String(formdata.get("message")),
        password: String(formdata.get("password")),
      },
    ]);

    if (error) {
      alert("문의 저장 실패: " + error.message);
      return;
    }

    await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `📩 새 문의

상호명: ${formdata.get("company")}
연락처: ${formdata.get("phone")}
제품: ${formdata.get("product")}
내용: ${formdata.get("message")}`,
      }),
    });

    alert("문의가 접수되었습니다.");
    form.reset();
    loadinquiries();
  }

  const selectedinquiry = inquiries.find((item) => item.id === selectedid);

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-32 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold text-zinc-500">
            K-LIGHT CONTACT
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            제작 문의
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            원하시는 이미지, 설치 장소, 사용 목적을 남겨주시면 확인 후 연락드리겠습니다.
          </p>

          <p className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-zinc-200">
            전화상담: 010-5710-5493
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-zinc-500">BOARD</p>
                <h2 className="mt-2 text-3xl font-black">문의내역</h2>
              </div>

              <p className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
                {inquiries.length}건
              </p>
            </div>

            {inquiries.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-black/20 p-10 text-center text-zinc-500">
                아직 문의가 없습니다.
              </div>
            ) : (
              <div className="max-h-[560px] space-y-4 overflow-y-auto pr-1">
                {inquiries.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setselectedid(item.id);
                      setopenedid(null);
                      setpasswordinput("");
                    }}
                    className={`w-full rounded-3xl border p-5 text-left transition ${
                      selectedid === item.id
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-black/20 text-white hover:bg-white/10"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        selectedid === item.id ? "text-zinc-600" : "text-zinc-500"
                      }`}
                    >
                      비공개 문의
                    </p>

                    <p className="mt-2 text-lg font-bold">
                      {item.product} - {item.company}
                    </p>

                    <p
                      className={`mt-2 text-sm ${
                        selectedid === item.id ? "text-zinc-500" : "text-zinc-500"
                      }`}
                    >
                      {new Date(item.created_at).toLocaleDateString("ko-KR")}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {selectedinquiry && (
              <div className="mt-8 border-t border-white/10 pt-6">
                {openedid === selectedinquiry.id ? (
                  <div className="rounded-3xl bg-white p-6 text-black">
                    <div className="space-y-3">
                      <p>
                        <span className="font-bold">상호명:</span>{" "}
                        {selectedinquiry.company}
                      </p>
                      <p>
                        <span className="font-bold">연락처:</span>{" "}
                        {selectedinquiry.phone}
                      </p>
                      <p>
                        <span className="font-bold">제품:</span>{" "}
                        {selectedinquiry.product}
                      </p>
                    </div>

                    <p className="mt-6 whitespace-pre-wrap leading-8 text-zinc-700">
                      {selectedinquiry.message}
                    </p>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p className="mb-4 font-bold">비밀번호 확인</p>

                    <div className="flex gap-3">
                      <input
                        value={passwordinput}
                        onChange={(e) => setpasswordinput(e.target.value)}
                        maxLength={4}
                        className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white px-4 py-4 text-black outline-none"
                        placeholder="4자리"
                      />

                      <button
                        onClick={() => {
                          if (passwordinput === selectedinquiry.password) {
                            setopenedid(selectedinquiry.id);
                          } else {
                            alert("비밀번호가 틀렸습니다.");
                          }
                        }}
                        className="rounded-2xl bg-white px-6 py-4 font-bold text-black"
                      >
                        확인
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="rounded-[36px] bg-white p-6 text-black shadow-2xl md:p-8">
            <div className="mb-8">
              <p className="text-sm font-bold text-zinc-500">REQUEST</p>
              <h2 className="mt-2 text-3xl font-black">문의 작성</h2>
              <p className="mt-4 leading-7 text-zinc-600">
                정확한 견적을 위해 제품 종류, 설치 장소, 원하는 이미지 내용을 함께 남겨주세요.
              </p>
            </div>

            <form onSubmit={handlesubmit} className="space-y-4">
              <input
                name="company"
                required
                placeholder="상호명 / 담당자"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-black"
              />

              <input
                name="phone"
                required
                placeholder="연락처"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-black"
              />

              <input
                name="product"
                required
                placeholder="궁금한 제품 예: 고보라이트, 이미지글래스, DMX컨트롤러"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-black"
              />

              <textarea
                name="message"
                required
                placeholder="문의 내용 예: 매장 입구 바닥에 로고를 투사하고 싶습니다. 설치 장소와 원하는 크기는 아직 미정입니다."
                className="h-44 w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-black"
              />

              <input
                name="password"
                required
                maxLength={4}
                pattern="[0-9]{4}"
                placeholder="글 확인용 비밀번호 4자리"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 outline-none focus:border-black"
              />

              <button className="w-full rounded-2xl bg-black py-4 font-bold text-white transition hover:bg-zinc-800">
                문의 접수하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}