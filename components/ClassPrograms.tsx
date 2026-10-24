"use client";

import React from "react";
import { Check, Star, Gamepad2, Code, Sparkles, ArrowRight } from "lucide-react";

interface ClassProgramsProps {
  onSelectClass?: (courseId: string) => void;
}

export default function ClassPrograms({ onSelectClass }: ClassProgramsProps) {
  const programs = [
    {
      id: "junior",
      badge: "Paling Favorit",
      title: "Junior Game Maker",
      age: "Usia 6 – 8 Tahun",
      desc: "Dirancang khusus agar anak bisa langsung praktik membuat cerita animasi dan game sederhana tanpa perlu mahir mengetik keyboard.",
      points: [
        "Pengenalan logika sekuensial (urutan langkah kerja)",
        "Membuat animasi karakter, suara, dan gerakan kustom",
        "Menciptakan mini-game labirin & interaksi sentuh",
        "Cocok untuk melatih motorik halus & konsentrasi anak",
      ],
      highlight: false,
      tagBg: "bg-[#F5BA13] text-[#143D2B]",
      iconBg: "bg-[#F5BA13] text-[#143D2B]",
      iconRotate: "-4deg",
      icon: Gamepad2,
      checkBg: "bg-[#F5BA13] text-[#143D2B]",
      cardBorder: "border-[#143D2B]/15 hover:border-[#F5BA13]",
    },
    {
      id: "explorer",
      badge: "⭐ PALING DIMINATI",
      title: "Explorer Coder",
      age: "Usia 9 – 12 Tahun",
      desc: "Anak belajar membuat game arcade dengan sistem skor, rintangan, gravitasi, dan mekanik logika game yang lebih kompleks.",
      points: [
        "Logika percabangan (if-else), variabel skor, dan timer",
        "Mekanik game seru: Jump & Run, Catch Item, dan Arcade",
        "Pengenalan logika 3D & game mechanic Roblox",
        "Proyek mandiri: menciptakan game yang bisa dimainkan teman",
      ],
      highlight: true,
      tagBg: "bg-[#EE4C23] text-white",
      iconBg: "bg-[#EE4C23] text-white",
      iconRotate: "4deg",
      icon: Sparkles,
      checkBg: "bg-[#EE4C23] text-white",
      cardBorder: "border-2 border-[#EE4C23]",
    },
    {
      id: "master",
      badge: "Persiapan Masa Depan",
      title: "Master Creator Kid",
      age: "Usia 13 – 15 Tahun",
      desc: "Transisi bertahap dari blok visual menuju bahasa pemrograman teks nyata tingkat industri yang digunakan di seluruh dunia.",
      points: [
        "Sintaks Python ramah pemula, tipe data, dan perulangan",
        "Membuat game teks interaktif (RPG petualangan & kuis)",
        "Konsep Computational Thinking tingkat lanjut",
        "Dasar fondasi kuat untuk pemrograman & robotika",
      ],
      highlight: false,
      tagBg: "bg-[#2563EB] text-white",
      iconBg: "bg-[#2563EB] text-white",
      iconRotate: "-3deg",
      icon: Code,
      checkBg: "bg-[#2563EB] text-white",
      cardBorder: "border-[#143D2B]/15 hover:border-[#2563EB]",
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
      {/* Section Header Matching Pillars & Class Atmosphere */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2.5">
          Kurikulum Berjenjang
        </span>
        <h2
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
        >
          <span>Pilihan Kelas</span>{" "}
          <span
            style={{ transform: "rotate(-2deg)" }}
            className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
          >
            Sesuai Usia
          </span>
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Materi disesuaikan secara presisi dengan tahap perkembangan kognitif dan ketertarikan si kecil.
        </p>
      </div>

      {/* Program Cards */}
      <div className="space-y-4">
        {programs.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 bg-white ${item.cardBorder} shadow-none cursor-pointer hover:-translate-y-1 transition-all duration-200 select-none`}
            >
              {/* Header Row: Age Pill & Sticker / Icon */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-xs font-black px-3.5 py-1.5 rounded-2xl font-nunito tracking-wide ${item.tagBg}`}>
                  {item.age}
                </span>

                {item.highlight ? (
                  <div
                    style={{ transform: "rotate(3deg)" }}
                    className="px-3.5 py-1 rounded-2xl bg-[#F5BA13] text-[#143D2B] font-heading font-black text-xs flex items-center gap-1.5 shadow-none select-none"
                  >
                    <Star className="w-3.5 h-3.5 fill-[#143D2B] text-[#143D2B]" />
                    <span>PALING DIMINATI</span>
                  </div>
                ) : (
                  <div
                    style={{ transform: `rotate(${item.iconRotate})` }}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                className="font-black text-xl sm:text-2xl text-[#143D2B] tracking-tight mb-2.5"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#334155] text-xs sm:text-sm font-medium leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Checkpoints with Solid Non-Faded Colors */}
              <div className="space-y-2.5 pt-4 border-t border-[#143D2B]/10">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B] font-semibold">
                    <div className={`w-5 h-5 rounded-full ${item.checkBg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Trigger CTA Button */}
      <div className="mt-7 flex justify-center">
        <button
          onClick={() => {
            const el = document.getElementById("form-pendaftaran");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-[#EE4C23] text-white font-black text-base sm:text-lg tracking-tight shadow-none flex items-center justify-center gap-3 cursor-pointer hover:bg-[#d93f18] active:scale-[0.98] transition-all select-none"
        >
          <span>Pilih Kelas & Daftarkan Si Kecil</span>
          <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </button>
      </div>
    </section>
  );
}
