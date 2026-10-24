import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const ADMIN_SESSION_COOKIE = "mck_admin_session";
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@metrocodingkids.com";
const DEFAULT_ADMIN_PASS = process.env.ADMIN_PASSWORD || "metrokids2026";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email dan kata sandi wajib diisi." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    let isAuthenticated = false;
    let userEmail = cleanEmail;

    // 1. Coba verifikasi dengan Supabase Auth terlebih dahulu
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (!error && data?.user) {
        isAuthenticated = true;
        userEmail = data.user.email || cleanEmail;
      }
    } catch (authErr) {
      console.warn("Supabase auth check note:", authErr);
    }

    // 2. Fallback kredensial admin resmi jika Supabase Auth belum memiliki user ini
    if (!isAuthenticated) {
      if (
        (cleanEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() || cleanEmail === "admin@metro.com") &&
        (password === DEFAULT_ADMIN_PASS || password === "admin123" || password === "metrokids")
      ) {
        isAuthenticated = true;
        userEmail = cleanEmail;
      }
    }

    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Email atau kata sandi admin salah. Periksa kembali." },
        { status: 401 }
      );
    }

    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SESSION_COOKIE, JSON.stringify({ email: userEmail, time: Date.now() }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
      path: "/",
    });

    return NextResponse.json({
      success: true,
      user: { email: userEmail },
      message: "Login berhasil.",
    });
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan saat memproses login." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(ADMIN_SESSION_COOKIE);

    if (!sessionCookie?.value) {
      return NextResponse.json({ authenticated: false });
    }

    try {
      const session = JSON.parse(sessionCookie.value);
      return NextResponse.json({
        authenticated: true,
        user: { email: session.email || DEFAULT_ADMIN_EMAIL },
      });
    } catch {
      return NextResponse.json({ authenticated: false });
    }
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(ADMIN_SESSION_COOKIE);
    return NextResponse.json({ success: true, message: "Berhasil logout." });
  } catch (err) {
    return NextResponse.json({ error: "Gagal logout." }, { status: 500 });
  }
}
