import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  page?: string;
};

function esc(s: string) {
  // простое экранирование для Telegram HTML
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Partial<LeadPayload>;

    // базовая валидация
    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const email = (body.email || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || "").trim();
    const page = (body.page || "").trim();

    const text =
      `<b>New Lead</b>\n` +
      `<b>Name:</b> ${esc(name)}\n` +
      `<b>Phone:</b> ${esc(phone)}\n` +
      (email ? `<b>Email:</b> ${esc(email)}\n` : "") +
      (service ? `<b>Service:</b> ${esc(service)}\n` : "") +
      (message ? `<b>Message:</b> ${esc(message)}\n` : "") +
      (page ? `<b>Page:</b> ${esc(page)}\n` : "");

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      return NextResponse.json({ ok: false, error: errText }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
