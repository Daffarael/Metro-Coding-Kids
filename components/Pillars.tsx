import React from "react";
import { ArrowUpRight, ArrowRight, Sparkles, Gamepad2 } from "lucide-react";

export default function Pillars() {
  const values = [
    {
      num: "01",
      watermark: "THINK",
      title: "Ubah Main Game Jadi Bikin Game",
      desc: "Jangan biarkan anak cuma jadi penikmat gadget. Di sini anak diajak memprogram karakter, alur cerita, dan aturan main ciptaannya sendiri.",
      bg: "bg-white",
      border: "border-2 border-[#143D2B]/15",
      numBg: "bg-[#EE4C23] text-white",
      tagPill: "bg-[#143D2B] text-white",
      textColor: "text-[#143D2B]",
      descColor: "text-[#1E293B] font-semibold",
    },
    {
      num: "02",
      watermark: "TRY",
      title: "Bimbingan Sabar Sampai Bisa",
      desc: "Bimbingan semi-privat maksimal 6 anak memastikan setiap anak mendapat perhatian penuh dan dipandu langkah demi langkah tanpa takut salah.",
      bg: "bg-[#143D2B]",
      border: "border-2 border-[#143D2B]",
      numBg: "bg-[#F5BA13] text-[#143D2B]",
      tagPill: "bg-[#F5BA13] text-[#143D2B]",
      textColor: "text-white",
      descColor: "text-white font-medium",
    },
    {
      num: "03",
      watermark: "CREATE",
      title: "Punya Karya Nyata yang Membanggakan",
      desc: "Bukan teori membosankan. Di setiap sesi anak langsung menghasilkan game yang bisa dimainkan bersama keluarga dan dipamerkan ke teman-temannya.",
      bg: "bg-[#F5BA13]",
      border: "border-2 border-[#F5BA13]",
      numBg: "bg-[#143D2B] text-white",
      tagPill: "bg-[#143D2B] text-[#F5BA13]",
      textColor: "text-[#143D2B]",
      descColor: "text-[#143D2B] font-bold",
    },
  ];

  const projects = [
    {
      tag: "PROYEK 01",
      title: "Maze Adventure",
      desc: "Rancang labirin, karakter jagoan, & aturan skor game sendiri.",
      bg: "bg-[#F5BA13]",
      textColor: "text-[#143D2B]",
      tagColor: "text-[#143D2B] font-black",
      circleBg: "bg-[#143D2B] text-[#F5BA13]",
    },
    {
      tag: "PROYEK 02",
      title: "Catch the Stars",
      desc: "Logika koordinat gerak, batas waktu, & aksi tangkap bintang.",
      bg: "bg-[#EE4C23]",
      textColor: "text-white",
      tagColor: "text-white font-black",
      circleBg: "bg-white text-[#EE4C23]",
    },
    {
      tag: "PROYEK 03",
      title: "My First Story",
      desc: "Gabungan animasi karakter, alur cerita, & suara interaktif.",
      bg: "bg-[#2563EB]",
      textColor: "text-white",
      tagColor: "text-white font-black",
      circleBg: "bg-white text-[#2563EB]",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Section 1: Saatnya anak jadi kreator. (CTA-Driven with Custom Design) */}
      <section className="px-5 py-8 bg-[#F7F5EE]">
        <div className="text-center mb-6 flex flex-col items-center">
          {/* Dynamic 2-Line Marketing Hook Headline */}
          <h2
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#143D2B] tracking-tight leading-[1.2]"
          >
            <span className="block">
              <span>Gass</span>{" "}
              <span className="relative inline-block text-slate-400 font-black ml-2.5 sm:ml-3">
                Nge-game
                <span
                  style={{ transform: "rotate(-1.5deg)" }}
                  className="absolute left-[-5px] top-[50%] w-[calc(100%+14px)] h-[3.5px] sm:h-[4.5px] bg-[#EE4C23] rounded-full pointer-events-none"
                />
              </span>
            </span>
            <span className="block mt-1 sm:mt-1.5 whitespace-nowrap">
              <span
                style={{ transform: "rotate(-2deg)" }}
                className="inline-block text-[#E59700] font-black"
              >
                Bikin Game!
              </span>
            </span>
          </h2>

          <p className="text-[#334155] text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Jangan biarkan waktu layar si kecil terbuang sia-sia. Ajak mereka mengasah logika, kreativitas, dan wujudkan game impiannya bersama mentor sekarang.
          </p>
        </div>

        {/* 3 Value Cards - Matching User Reference Mockup */}
        <div className="space-y-4">
          {values.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden p-6 sm:p-7 rounded-[32px] ${item.bg} ${item.border} shadow-none flex flex-col justify-between`}
            >
              {/* Header row: Squircle Number on Left (tilted, flat solid color, no shadow), Tag on Right */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div
                  style={{ transform: "rotate(-6deg)" }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-[20px] ${item.numBg} flex items-center justify-center font-nunito font-black text-base sm:text-lg shadow-none transition-transform`}
                >
                  {item.num}
                </div>
                <div
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase font-nunito ${item.tagPill} shadow-none`}
                >
                  {item.watermark}
                </div>
              </div>

              {/* Title and Description - Matching Mockup Rounded Bold Sans */}
              <div className="relative z-10">
                <h3 className={`font-nunito font-black text-xl sm:text-2xl ${item.textColor} tracking-tight mb-2`}>
                  {item.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${item.descColor}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger Button */}
        <div className="mt-6 flex flex-col items-center text-center gap-2">
          <button
            onClick={() => {
              const el = document.getElementById("form-pendaftaran");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-[#EE4C23] text-white font-heading text-base sm:text-lg shadow-none flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Daftarkan Si Kecil Sekarang</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </button>
          <p className="text-xs font-semibold text-[#143D2B]">
            Bimbingan intensif semi-privat maksimal 6 anak
          </p>
        </div>
      </section>

      {/* Section 2: Karya Pertama Mereka (High CTA Conversion Section) */}
      <section className="px-4 py-2">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#143D2B] text-white p-6 sm:p-7 overflow-hidden shadow-xl">
          {/* Top-Right Decorative Yellow Circle Arc */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full border-[14px] border-[#F5BA13] pointer-events-none opacity-80" />

          {/* Header with High-Hook CTA Value */}
          <div className="mb-6 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5BA13] text-[#143D2B] text-[11px] font-black uppercase tracking-wider mb-2.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#143D2B]" />
              <span>Karya Nyata Kelas Koding</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading tracking-tight text-white leading-tight font-black">
              Si Kecil Pulang Bawa Game Buatan Sendiri!
            </h2>
            <p className="text-emerald-100/85 text-xs sm:text-sm mt-2 leading-relaxed">
              Bukan sekadar hafalan rumus kaku. Dalam 4 pertemuan, anak dibimbing merancang logika, karakter, dan skor sampai game-nya siap dimainkan & dipamerkan ke keluarga.
            </p>
          </div>

          {/* 3 Interactive Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {projects.map((proj, pIdx) => (
              <div
                key={pIdx}
                onClick={() => {
                  const el = document.getElementById("form-pendaftaran");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group p-4 sm:p-5 rounded-2xl ${proj.bg} ${proj.textColor} flex flex-col justify-between shadow-sm min-h-[160px] cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200 select-none`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[10px] font-black tracking-wider uppercase ${proj.tagColor}`}>
                      {proj.tag}
                    </span>
                    <div className={`w-6 h-6 rounded-full ${proj.circleBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-base sm:text-lg leading-tight tracking-tight mb-1.5">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed opacity-90 line-clamp-3">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Action Button Inside Green Card */}
          <div className="mt-6 flex flex-col items-center justify-center text-center">
            <button
              onClick={() => {
                const el = document.getElementById("form-pendaftaran");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-[#F5BA13] text-[#143D2B] font-black text-base sm:text-lg tracking-tight shadow-none flex items-center justify-center gap-3 cursor-pointer border-none"
            >
              <span>Gass bikin ginian?</span>
              <div className="w-6 h-6 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </button>
          </div>


        </div>
      </section>
    </div>
  );
}
