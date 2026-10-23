import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Pillars() {
  const values = [
    {
      num: "01",
      title: "Berpikir Terstruktur",
      desc: "Memecah masalah besar menjadi langkah-langkah kecil yang mudah diselesaikan.",
      bg: "bg-white",
      pillBg: "bg-slate-100 text-[#143D2B]",
    },
    {
      num: "02",
      title: "Berani Bereksperimen",
      desc: "Mencoba ide, menemukan kesalahan, lalu memperbaikinya tanpa takut gagal.",
      bg: "bg-[#E2F3E7]",
      pillBg: "bg-white text-[#143D2B]",
    },
    {
      num: "03",
      title: "Percaya Diri Berkarya",
      desc: "Melihat ide sendiri berubah menjadi game yang benar-benar bisa dimainkan.",
      bg: "bg-white",
      pillBg: "bg-slate-100 text-[#143D2B]",
    },
  ];

  const projects = [
    {
      tag: "PROJECT 01",
      title: "Maze Adventure",
      desc: "Anak merancang labirin, karakter, dan aturan permainannya sendiri.",
      bg: "bg-[#F5BA13]",
      textColor: "text-[#143D2B]",
      tagColor: "text-[#143D2B]/80",
      btnBg: "bg-black/10 text-[#143D2B]",
    },
    {
      tag: "PROJECT 02",
      title: "Catch the Stars",
      desc: "Belajar koordinat, skor, dan logika kondisi lewat game tangkap bintang.",
      bg: "bg-[#EE4C23]",
      textColor: "text-white",
      tagColor: "text-white/80",
      btnBg: "bg-white/20 text-white",
    },
    {
      tag: "PROJECT 03",
      title: "My First Story",
      desc: "Menggabungkan coding dan storytelling menjadi cerita interaktif.",
      bg: "bg-[#3B5EDB]",
      textColor: "text-white",
      tagColor: "text-white/80",
      btnBg: "bg-white/20 text-white",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Section 1: Saatnya anak jadi kreator. */}
      <section className="px-5 py-8 bg-[#F7F5EE]">
        <div className="text-center mb-6">
          <span className="text-[11px] font-black text-[#EE4C23] uppercase tracking-wider block mb-1">
            Bukan Cuma Main Gadget
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
            Saatnya anak jadi <span className="text-[#3B5EDB]">kreator.</span>
          </h2>
          <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Di Metro Coding Kids, setiap klik punya tujuan. Anak belajar memecahkan masalah sambil membuat sesuatu yang bisa mereka banggakan.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {values.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-3xl ${item.bg} border border-[#143D2B]/10 shadow-xs flex flex-col justify-between`}
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-xl text-xs font-black mb-4 ${item.pillBg}`}>
                  {item.num}
                </span>
                <h3 className="font-extrabold text-[#143D2B] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Karya Pertama Mereka (Rich Forest Green Box) */}
      <section className="px-4 py-2">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#143D2B] text-white p-6 sm:p-8 overflow-hidden shadow-xl">
          {/* Top-Right Decorative Yellow Circle Arc */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full border-[14px] border-[#F5BA13] pointer-events-none" />

          {/* Header */}
          <div className="mb-6 max-w-sm">
            <span className="text-xs font-black text-[#F5BA13] uppercase tracking-wider block mb-1.5">
              Karya Pertama Mereka
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading tracking-tight text-white leading-snug">
              Belajar coding lewat proyek seru.
            </h2>
            <p className="text-emerald-100/80 text-xs mt-2 leading-relaxed">
              Bukan menghafal kode. Setiap pertemuan membawa anak semakin dekat dengan game buatannya sendiri.
            </p>
          </div>

          {/* 3 Bold Project Cards (Yellow, Coral, Royal Blue) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {projects.map((proj, pIdx) => (
              <div
                key={pIdx}
                className={`p-5 rounded-2xl ${proj.bg} ${proj.textColor} flex flex-col justify-between shadow-sm min-h-[160px]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black tracking-wider uppercase ${proj.tagColor}`}>
                      {proj.tag}
                    </span>
                    <div className={`w-6 h-6 rounded-full ${proj.btnBg} flex items-center justify-center`}>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-lg tracking-tight mb-1.5">
                    {proj.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-90">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
