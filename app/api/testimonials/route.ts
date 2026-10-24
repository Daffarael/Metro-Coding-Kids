import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { DEFAULT_TESTIMONIALS, TestimonialItem } from "@/lib/default-data";

export const dynamic = "force-dynamic";

const SETTINGS_KEY = "testimonials";

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
            value: DEFAULT_TESTIMONIALS,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "key" }
        );
      } catch (seedErr) {
        console.warn("Auto-seeding testimonials note:", seedErr);
      }

      return NextResponse.json({
        success: true,
        testimonials: DEFAULT_TESTIMONIALS,
      });
    }

    return NextResponse.json({
      success: true,
      testimonials: data.value,
    });
  } catch (err) {
    console.warn("Failed fetching testimonials, using defaults:", err);
    return NextResponse.json({
      success: true,
      testimonials: DEFAULT_TESTIMONIALS,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { testimonials } = body;

    if (!Array.isArray(testimonials)) {
      return NextResponse.json({ error: "Format data testimonials harus berupa array" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("site_settings").upsert(
      {
        key: SETTINGS_KEY,
        value: testimonials,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Daftar testimoni berhasil diperbarui.",
      testimonials,
    });
  } catch (err) {
    console.error("Save testimonials error:", err);
    return NextResponse.json({ error: "Gagal menyimpan testimoni" }, { status: 500 });
  }
}
