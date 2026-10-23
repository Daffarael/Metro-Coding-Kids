import React from "react";
import { Brain, Lightbulb, Target, Puzzle } from "lucide-react";

export default function Pillars() {
  const pillars = [
    {
      title: "Asah Logika",
      desc: "Anak belajar berpikir terstruktur, memahami konsep sebab-akibat, algoritma langkah demi langkah, dan logika bersyarat (if-then).",
      icon: Brain,
      bgColor: "bg-[#EBF5EA]",
      borderColor: "border-[#BCE1B7]",
      accentColor: "text-[#1B4332]",
      tagColor: "bg-[#1B4332] text-white",
    },
    {
      title: "Kembangkan Kreativitas",
      desc: "Mengubah ide dan imajinasi anak menjadi alur cerita hidup, animasi karakter unik, dan dunia game interaktif buatan mereka sendiri.",
      icon: Lightbulb,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      accentColor: "text-[#F35D25]",
      tagColor: "bg-[#F35D25] text-white",
    },
    {
      title: "Latih Konsentrasi",
      desc: "Mengalihkan kebiasaan screen time pasif (hanya nonton/scrolling) menjadi fokus produktif dan melatih ketelitian menyelesaikan tugas.",
      icon: Target,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      accentColor: "text-[#FAB818]",
      tagColor: "bg-[#FAB818] text-white",
    },
    {
      title: "Pecahkan Masalah",
      desc: "Membangun ketangguhan mental saat menemukan error atau bug. Anak belajar menganalisis masalah dan pantang menyerah mencari solusi.",
      icon: Puzzle,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accentColor: "text-[#0A5CB8]",
      tagColor: "bg-[#0A5CB8] text-white",
    },
  ];

  return (
    <section className="px-5 py-7 bg-white border-y border-[#1B4332]/10">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold text-[#1B4332] uppercase tracking-wider bg-[#EBF5EA] border border-[#BCE1B7] px-3.5 py-1 rounded-full inline-block mb-2">
          Manfaat Nyata untuk Anak
        </span>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-heading text-[#1B4332] tracking-tight">
            Lebih Dari Sekedar
          </h2>
          <span className="px-3.5 py-0.5 rounded-full bg-[#1B4332] text-white font-heading text-xl sm:text-2xl shadow-xs inline-flex items-center gap-1.5">
            Coding
            <span className="text-xs font-mono font-bold text-[#FAB818]">&lt;/&gt;</span>
          </span>
        </div>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-sm mx-auto">
          Belajar koding bukan sekadar mengetik kode komputer, tetapi membekali 4 pondasi kecerdasan penting:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl ${item.bgColor} border ${item.borderColor} shadow-2xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>
                    Pilar {idx + 1}
                  </span>
                  <div className={`p-2 rounded-xl bg-white/90 shadow-2xs ${item.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-extrabold text-[#1B4332] text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-[#334155] text-xs leading-relaxed">
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
