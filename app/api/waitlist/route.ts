import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let email = "";
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // Placeholder — Supabase/Resend wiring comes later.
  console.log(`[waitlist] ${email}`);

  return NextResponse.json({ ok: true });
}
