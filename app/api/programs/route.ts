import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { DEFAULT_PROGRAMS, ProgramItem } from "@/lib/default-data";

export const dynamic = "force-dynamic";

const SETTINGS_KEY = "class_programs";

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
            value: DEFAULT_PROGRAMS,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "key" }
        );
      } catch (seedErr) {
        console.warn("Auto-seeding programs note:", seedErr);
      }

      return NextResponse.json({
        success: true,
        programs: DEFAULT_PROGRAMS,
      });
    }

    return NextResponse.json({
      success: true,
      programs: data.value,
    });
  } catch (err) {
    console.warn("Failed fetching programs, using defaults:", err);
    return NextResponse.json({
      success: true,
      programs: DEFAULT_PROGRAMS,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { programs } = body;

    if (!Array.isArray(programs)) {
      return NextResponse.json({ error: "Format data programs harus berupa array" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("site_settings").upsert(
      {
        key: SETTINGS_KEY,
        value: programs,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Daftar program kelas berhasil diperbarui.",
      programs,
    });
  } catch (err) {
    console.error("Save programs error:", err);
    return NextResponse.json({ error: "Gagal menyimpan program kelas" }, { status: 500 });
  }
}
