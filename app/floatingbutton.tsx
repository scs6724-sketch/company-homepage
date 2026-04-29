"use client";

import Link from "next/link";

export default function floatingbutton() {
  const showphone = () => {
    alert("전화 상담: 010-0000-0000");
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4">
      <div className="flex gap-3">
        <button
          onClick={showphone}
          className="flex-1 rounded-full bg-black py-4 text-center font-bold text-white shadow-xl"
        >
          전화번호 보기
        </button>

        <Link
          href="/contact"
          className="flex-1 rounded-full bg-white py-4 text-center font-bold text-black shadow-xl"
        >
          문의하기
        </Link>
      </div>
    </div>
  );
}