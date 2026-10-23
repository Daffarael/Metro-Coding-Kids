import React from "react";
import { Brain, Lightbulb, Target, Puzzle } from "lucide-react";

export default function Pillars() {
  const pillars = [
    {
      title: "Asah Logika",
      desc: "Anak belajar berpikir terstruktur, memahami konsep sebab-akibat, algoritma langkah demi langkah, dan logika bersyarat (if-then).",
      icon: Brain,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      accentColor: "text-emerald-800",
      tagColor: "bg-emerald-700 text-white",
    },
    {
      title: "Kembangkan Kreativitas",
      desc: "Mengubah ide dan imajinasi anak menjadi alur cerita hidup, animasi karakter unik, dan dunia game interaktif buatan mereka sendiri.",
      icon: Lightbulb,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      accentColor: "text-orange-700",
      tagColor: "bg-[#F95724] text-white",
    },
    {
      title: "Latih Konsentrasi",
      desc: "Mengalihkan kebiasaan screen time pasif (hanya nonton/scrolling) menjadi fokus produktif dan melatih ketelitian menyelesaikan tugas.",
      icon: Target,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      accentColor: "text-amber-800",
      tagColor: "bg-[#E5A00D] text-white",
    },
    {
      title: "Pecahkan Masalah",
      desc: "Membangun ketangguhan mental saat menemukan error atau bug. Anak belajar menganalisis masalah dan pantang menyerah mencari solusi.",
      icon: Puzzle,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accentColor: "text-blue-800",
      tagColor: "bg-[#0A5CB8] text-white",
    },
  ];

  return (
    <section className="px-5 py-7 bg-white border-y border-slate-200/80">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
          Manfaat Nyata untuk Anak
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143E2C] tracking-tight">
          Lebih Dari Sekedar Koding
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-sm mx-auto">
          Belajar koding bukan sekadar mengetik kode komputer, tetapi membekali 4 pondasi kecerdasan penting:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl ${item.bgColor} border ${item.borderColor} shadow-xs flex flex-col justify-between`}
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
                <h3 className="font-extrabold text-slate-900 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
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
