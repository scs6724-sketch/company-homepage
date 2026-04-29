import Deletebutton from "./deletebutton";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("admin-auth");

  if (!isAuth) {
    return (
      <form
        action="/api/login"
        method="POST"
        className="flex h-screen items-center justify-center"
      >
        <input
          name="password"
          type="password"
          placeholder="관리자 비밀번호"
          className="border p-2"
        />
        <button className="ml-2 bg-black px-4 py-2 text-white">
          입장
        </button>
      </form>
    );
  }

  const { data: inquiries, error } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="p-10">문의 목록을 불러오지 못했습니다.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-2 text-3xl font-bold">관리자 페이지</h1>

      <form action="/api/logout" method="POST" className="mb-6">
        <button className="rounded bg-gray-800 px-4 py-2 text-white">
          로그아웃
        </button>
      </form>

      <div className="space-y-4">
        {inquiries?.map((item) => (
          <div key={item.id} className="rounded-xl bg-white p-5 shadow">
            <p className="font-bold">이름: {item.name}</p>
            <p>연락처: {item.phone}</p>
            <p>내용: {item.message}</p>
            <p className="mt-2 text-sm text-gray-400">
              작성일: {item.created_at}
            </p>

            <Deletebutton id={item.id} />
          </div>
        ))}
      </div>
    </main>
  );
}