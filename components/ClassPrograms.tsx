"use client";

import React from "react";
import { Check, Star, ArrowRight } from "lucide-react";

interface ClassProgramsProps {
  onSelectClass?: (courseId: string) => void;
}

export default function ClassPrograms({ onSelectClass }: ClassProgramsProps) {
  const programs = [
    {
      id: "junior",
      badge: "Paling Favorit untuk Pemula",
      title: "Junior Game Maker",
      age: "Usia 6 - 8 Tahun",
      tools: "Scratch Jr & Visual Block",
      desc: "Dirancang khusus agar anak bisa langsung praktik membuat cerita animasi dan game sederhana tanpa perlu mahir mengetik keyboard.",
      points: [
        "Pengenalan logika sekuensial (urutan langkah kerja)",
        "Membuat animasi karakter, suara, dan gerakan kustom",
        "Menciptakan mini-game labirin & interaksi sentuh",
        "Cocok untuk melatih motorik halus & konsentrasi anak",
      ],
      highlight: false,
      accentBg: "bg-[#F5BA13]",
      tagColor: "bg-[#F5BA13] text-[#143D2B]",
    },
    {
      id: "explorer",
      badge: "Paling Diminati Anak Usia Sekolah",
      title: "Explorer Coder",
      age: "Usia 9 - 12 Tahun",
      tools: "Scratch 3.0 & Roblox Logic",
      desc: "Anak belajar membuat game arcade dengan sistem skor, rintangan, gravitasi, dan mekanik logika game yang lebih kompleks.",
      points: [
        "Logika percabangan (if-else), variabel skor, dan timer",
        "Mekanik game seru: Jump & Run, Catch Item, dan Arcade",
        "Pengenalan logika 3D & game mechanic Roblox",
        "Proyek mandiri: menciptakan game yang bisa dimainkan teman",
      ],
      highlight: true,
      accentBg: "bg-[#EE4C23]",
      tagColor: "bg-[#EE4C23] text-white",
    },
    {
      id: "master",
      badge: "Persiapan Masa Depan",
      title: "Master Creator",
      age: "Usia 13 - 15 Tahun",
      tools: "Python Basics & Game Dev",
      desc: "Transisi bertahap dari blok visual menuju bahasa pemrograman teks nyata tingkat industri yang digunakan di seluruh dunia.",
      points: [
        "Sintaks Python ramah pemula, tipe data, dan perulangan",
        "Membuat game teks interaktif (RPG petualangan & kuis)",
        "Konsep Computational Thinking tingkat lanjut",
        "Dasar fondasi kuat untuk pemrograman & robotika",
      ],
      highlight: false,
      accentBg: "bg-[#3B5EDB]",
      tagColor: "bg-[#3B5EDB] text-white",
    },
  ];

  const handleSelect = (courseId: string) => {
    if (onSelectClass) {
      onSelectClass(courseId);
    }
    const formElement = document.getElementById("form-pendaftaran");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="program-kelas" className="px-5 py-8 bg-[#F7F5EE]">
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2 shadow-2xs">
          Kurikulum Berjenjang
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
          Pilihan Kelas Sesuai Usia
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Materi disesuaikan secara presisi dengan tahap perkembangan kognitif dan ketertarikan si kecil.
        </p>
      </div>

      <div className="space-y-4">
        {programs.map((item) => (
          <div
            key={item.id}
            className={`rounded-3xl p-5 sm:p-6 border-2 transition-all ${
              item.highlight
                ? "bg-white border-[#EE4C23] shadow-md ring-2 ring-[#EE4C23]/20"
                : "bg-white border-[#143D2B]/10 shadow-2xs hover:border-[#143D2B]/30"
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className={`text-[11px] font-black px-3 py-1 rounded-full ${item.tagColor}`}>
                {item.age}
              </span>
              {item.highlight && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  {item.badge}
                </span>
              )}
            </div>

            <h3 className="text-xl font-extrabold text-[#143D2B] tracking-tight mb-1">
              {item.title}
            </h3>

            <div className="inline-block text-xs font-bold text-[#143D2B] bg-[#E2F3E7] px-3 py-1 rounded-lg mb-3 border border-[#143D2B]/10">
              🛠️ Tool: {item.tools}
            </div>

            <p className="text-[#334155] text-xs leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-2 mb-5 pt-3 border-t border-slate-100">
              {item.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-[#E2F3E7] text-[#143D2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleSelect(item.id)}
              className={`w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                item.highlight
                  ? "bg-[#EE4C23] hover:bg-[#d63f17] text-white shadow-sm"
                  : "bg-[#143D2B] hover:bg-[#1E523A] text-white"
              }`}
            >
              <span>Pilih Program Ini</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
