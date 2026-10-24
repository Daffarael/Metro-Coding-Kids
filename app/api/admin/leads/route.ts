import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";

    let query = supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (status && status !== "ALL") {
      query = query.eq("status", status);
    }

    if (search) {
      query = query.or(
        `parent_name.ilike.%${search}%,child_name.ilike.%${search}%,whatsapp.ilike.%${search}%`
      );
    }

    const { data, error } = await query;

    if (error) {
      console.warn("Error fetching leads from Supabase:", error.message);
      return NextResponse.json({
        success: true,
        leads: [],
        warning: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      leads: data || [],
    });
  } catch (err) {
    console.error("API /api/admin/leads error:", err);
    return NextResponse.json({
      success: true,
      leads: [],
    });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: "ID lead wajib disertakan" }, { status: 400 });
    }

    const updates: Record<string, any> = {};
    if (status !== undefined) updates.status = status;
    if (notes !== undefined) updates.notes = notes;

    const { data, error } = await supabaseAdmin
      .from("leads")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Update lead error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      lead: data,
      message: "Lead berhasil diperbarui.",
    });
  } catch (err) {
    console.error("PATCH /api/admin/leads error:", err);
    return NextResponse.json({ error: "Gagal memperbarui lead" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID lead wajib disertakan" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("leads").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Lead berhasil dihapus.",
    });
  } catch (err) {
    console.error("DELETE /api/admin/leads error:", err);
    return NextResponse.json({ error: "Gagal menghapus lead" }, { status: 500 });
  }
}
