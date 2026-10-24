import React from "react";
import { Award, FolderGit2, Users2, BookOpen, ClipboardCheck, MessageSquareHeart } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Sertifikat Kelulusan Resmi",
      desc: "Bukti pencapaian dan apresiasi nyata atas keberhasilan anak menyelesaikan proyek koding mereka.",
      icon: Award,
      iconBg: "bg-[#F5BA13] text-[#143D2B]",
      rotate: "-4deg",
    },
    {
      title: "Portofolio Game Pribadi",
      desc: "Game buatan anak dapat dimainkan langsung di tablet/komputer dan dipamerkan ke teman serta keluarga.",
      icon: FolderGit2,
      iconBg: "bg-[#EE4C23] text-white",
      rotate: "4deg",
    },
    {
      title: "Kelas Maksimal 6 Anak",
      desc: "Format semi-privat agar setiap langkah anak terpantau intensif tanpa ada anak yang tertinggal.",
      icon: Users2,
      iconBg: "bg-[#143D2B] text-[#F5BA13]",
      rotate: "-3deg",
    },
    {
      title: "Modul & Panduan Praktis",
      desc: "Langkah-langkah pembuatan game disusun visual dan ramah anak, mudah dipraktikkan kembali di rumah.",
      icon: BookOpen,
      iconBg: "bg-[#2563EB] text-white",
      rotate: "4deg",
    },
    {
      title: "Laporan Kemajuan Belajar",
      desc: "Orang tua menerima laporan berkala mengenai perkembangan daya nalar, logika, dan kreativitas anak.",
      icon: ClipboardCheck,
      iconBg: "bg-[#F5BA13] text-[#143D2B]",
      rotate: "-4deg",
    },
    {
      title: "Pendampingan Mentor Ramah",
      desc: "Mentor berpengalaman dan komunikatif yang mendidik dengan pendekatan menyenangkan tanpa tekanan.",
      icon: MessageSquareHeart,
      iconBg: "bg-[#EE4C23] text-white",
      rotate: "3deg",
    },
  ];

  return (
    <section className="px-5 py-8 bg-[#F7F5EE]">
      {/* Dynamic Section Header Matching Pillars & Class Atmosphere */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2.5">
          Fasilitas Lengkap
        </span>
        <h2
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
        >
          <span>Yang Didapatkan</span>{" "}
          <span
            style={{ transform: "rotate(-2deg)" }}
            className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
          >
            Si Kecil
          </span>
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Setiap peserta mendapatkan fasilitas pembelajaran lengkap tanpa biaya tambahan.
        </p>
      </div>

      {/* Facilities Grid with Solid Vibrant Icon Badges & Full-Width Text */}
      <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
        {facilities.map((item, idx) => {
          const Icon = item.icon;
          const numStr = `0${idx + 1}`;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-[28px] sm:rounded-[32px] bg-white border-2 border-[#143D2B]/12 shadow-none flex flex-col justify-between hover:-translate-y-1 hover:border-[#143D2B]/30 transition-all duration-200 select-none"
            >
              <div>
                {/* Top Row: Tilted Squircle Icon + Facility Number Pill */}
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    style={{ transform: `rotate(${item.rotate})` }}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-none`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-black px-2.5 py-1 rounded-xl bg-[#143D2B] text-white font-nunito tracking-wider shadow-none">
                    {numStr}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  className="font-black text-sm sm:text-base text-[#143D2B] leading-snug tracking-tight mb-2"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#1E293B] text-[11px] sm:text-xs font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
