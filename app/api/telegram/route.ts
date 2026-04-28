import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chat_id = process.env.TELEGRAM_CHAT_ID

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id,
      text: body.text,
    }),
  })

  return NextResponse.json({ ok: true })
}