import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("child_name, course_id, created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error || !data || data.length === 0) {
      return NextResponse.json({ registrations: [] });
    }

    const registrations = data.map((item) => {
      const courseMap: Record<string, string> = {
        junior: "Junior Game Maker",
        explorer: "Explorer Coder",
        creator: "Master Creator Kid",
        konsultasi_wa: "Kelas Koding Anak",
      };

      const diffMs = Math.max(0, Date.now() - new Date(item.created_at).getTime());
      const diffMinutes = Math.floor(diffMs / 60000);
      let timeText = "Baru saja";
      if (diffMinutes >= 1440) {
        timeText = "Kemarin";
      } else if (diffMinutes >= 60) {
        const diffHours = Math.floor(diffMinutes / 60);
        timeText = `${diffHours} jam lalu`;
      } else if (diffMinutes > 1) {
        timeText = `${diffMinutes} menit lalu`;
      }

      return {
        name: item.child_name || "Siswa Baru",
        course: courseMap[item.course_id] || "Kelas Koding Anak",
        time: timeText,
      };
    });

    return NextResponse.json({ registrations });
  } catch (err) {
    console.warn("Failed to fetch recent registrations:", err);
    return NextResponse.json({ registrations: [] });
  }
}
