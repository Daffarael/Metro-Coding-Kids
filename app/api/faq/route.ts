import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { DEFAULT_FAQS, FAQItem } from "@/lib/default-data";

export const dynamic = "force-dynamic";

const SETTINGS_KEY = "faqs";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("site_settings")
      .select("value")
      .eq("key", SETTINGS_KEY)
      .maybeSingle();

    if (error || !data || !Array.isArray(data.value) || data.value.length === 0) {
      // Auto-seed if not exists in database yet
      try {
        await supabaseAdmin.from("site_settings").upsert(
          {
            key: SETTINGS_KEY,
            value: DEFAULT_FAQS,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "key" }
        );
      } catch (seedErr) {
        console.warn("Auto-seeding faqs note:", seedErr);
      }

      return NextResponse.json({
        success: true,
        faqs: DEFAULT_FAQS,
      });
    }

    return NextResponse.json({
      success: true,
      faqs: data.value,
    });
  } catch (err) {
    console.warn("Failed fetching faqs, using defaults:", err);
    return NextResponse.json({
      success: true,
      faqs: DEFAULT_FAQS,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { faqs } = body;

    if (!Array.isArray(faqs)) {
      return NextResponse.json({ error: "Format data faqs harus berupa array" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("site_settings").upsert(
      {
        key: SETTINGS_KEY,
        value: faqs,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Daftar FAQ berhasil diperbarui.",
      faqs,
    });
  } catch (err) {
    console.error("Save faqs error:", err);
    return NextResponse.json({ error: "Gagal menyimpan FAQ" }, { status: 500 });
  }
}
