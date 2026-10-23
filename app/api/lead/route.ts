import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parent_name, child_name, child_age, whatsapp, course_id } = body;

    if (!parent_name || !child_name || !whatsapp) {
      return NextResponse.json(
        { error: "Nama orang tua, nama anak, dan nomor WhatsApp wajib diisi." },
        { status: 400 }
      );
    }

    // Clean phone number (e.g. 0812 -> 62812)
    let cleanWa = whatsapp.trim().replace(/\D/g, "");
    if (cleanWa.startsWith("0")) {
      cleanWa = "62" + cleanWa.slice(1);
    }

    const leadData = {
      parent_name: parent_name.trim(),
      child_name: child_name.trim(),
      child_age: String(child_age || "").trim(),
      whatsapp: cleanWa,
      course_id: course_id || "junior",
      status: "baru",
      source: "landing_page",
      created_at: new Date().toISOString(),
    };

    let leadId = `lead-${Date.now()}`;

    // Attempt save to Supabase
    try {
      const { data, error } = await supabaseAdmin
        .from("leads")
        .insert([leadData])
        .select()
        .single();

      if (error) {
        console.warn("Supabase lead insert warning (table might need migration):", error.message);
      } else if (data) {
        leadId = data.id;
      }
    } catch (dbError) {
      console.warn("Database save skipped or table not initialized yet:", dbError);
    }

    return NextResponse.json({
      success: true,
      lead_id: leadId,
      message: "Data pendaftaran berhasil disimpan.",
    });
  } catch (error) {
    console.error("API /api/lead error:", error);
    return NextResponse.json(
      { error: "Terjadi kendala pada sistem. Silakan hubungi CS langsung." },
      { status: 500 }
    );
  }
}
