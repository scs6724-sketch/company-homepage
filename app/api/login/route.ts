import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const password = formData.get("password");

  if (password === "0908") {
    const res = NextResponse.redirect(new URL("/admin-0908", req.url));
    res.cookies.set("admin-auth", "true", {
      maxAge: 60 * 60,
    });
    return res;
  }

  return NextResponse.redirect(new URL("/admin-0908", req.url));
}