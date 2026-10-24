import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { DEFAULT_CAMPAIGN_SETTINGS } from "@/lib/default-data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from("site_settings").select("*");

    if (error || !data || data.length === 0) {
      return NextResponse.json({
        success: true,
        settings: DEFAULT_CAMPAIGN_SETTINGS,
      });
    }

    const settingsMap: Record<string, unknown> = { ...DEFAULT_CAMPAIGN_SETTINGS };
    data.forEach((row) => {
      settingsMap[row.key] = row.value;
    });

    if (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) {
      settingsMap.whatsapp_number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    }

    return NextResponse.json({
      success: true,
      settings: settingsMap,
    });
  } catch (err) {
    console.warn("Failed fetching settings from Supabase, returning defaults:", err);
    return NextResponse.json({
      success: true,
      settings: DEFAULT_CAMPAIGN_SETTINGS,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { key, value, settings } = body;

    // Allow bulk update
    if (settings && typeof settings === "object") {
      const entries = Object.entries(settings);
      for (const [k, v] of entries) {
        await supabaseAdmin.from("site_settings").upsert(
          {
            key: k,
            value: v,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "key" }
        );
      }
      return NextResponse.json({ success: true, message: "Pengaturan berhasil diperbarui." });
    }

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
