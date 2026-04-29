import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = NextResponse.redirect(new URL("/admin-0908", req.url));
  res.cookies.delete("admin-auth");
  return res;
}