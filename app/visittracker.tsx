"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function visittracker() {
  const pathname = usePathname();

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const saved = localStorage.getItem("k-light-visit-date");

    if (saved === today) return;

    localStorage.setItem("k-light-visit-date", today);

    fetch("/api/visit", {
      method: "POST",
      body: JSON.stringify({ pathname }),
    });
  }, [pathname]);

  return null;
}