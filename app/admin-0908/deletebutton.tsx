"use client";

export default function Deletebutton({ id }: { id: number }) {
  const handledelete = async () => {
    const ok = confirm("정말 삭제할까요?");
    if (!ok) return;

    const res = await fetch("/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Number(id) }),
    });

    const result = await res.json();

    if (res.ok) {
      alert("삭제 완료");
      window.location.reload();
    } else {
      alert(result.error);
    }
  };

  return (
    <button
      onClick={handledelete}
      className="mt-3 rounded bg-red-500 px-3 py-1 text-white"
    >
      삭제
    </button>
  );
}