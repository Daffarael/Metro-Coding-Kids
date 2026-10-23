import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    let query = supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

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
