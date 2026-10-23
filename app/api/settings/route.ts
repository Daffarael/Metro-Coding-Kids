import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

const DEFAULT_SETTINGS: Record<string, unknown> = {
  whatsapp_number: "6282382872411",
  batch_name: "Batch November 2026",
  batch_deadline: "2026-11-15T23:59:59",
  price_normal: 950000,
  price_current: 499000,
  quota_seats_left: 4,
};

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from("site_settings").select("*");

    if (error || !data || data.length === 0) {
      return NextResponse.json({
        success: true,
        settings: DEFAULT_SETTINGS,
      });
    }

    const settingsMap: Record<string, unknown> = { ...DEFAULT_SETTINGS };
    data.forEach((row) => {
      settingsMap[row.key] = row.value;
    });

    return NextResponse.json({
      success: true,
      settings: settingsMap,
    });
  } catch (err) {
    console.warn("Failed fetching settings from Supabase, returning defaults:", err);
    return NextResponse.json({
      success: true,
      settings: DEFAULT_SETTINGS,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { key, value } = body;

    if (!key) {
      return NextResponse.json({ error: "Key wajib diisi" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("site_settings").upsert(
      {
        key,
        value,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Pengaturan berhasil diperbarui." });
  } catch (err) {
    console.error("Update settings error:", err);
    return NextResponse.json({ error: "Gagal memperbarui pengaturan." }, { status: 500 });
  }
}
