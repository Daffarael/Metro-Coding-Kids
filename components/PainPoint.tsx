"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { PressDepth } from "@/components/ui/press-depth";

export default function PainPoint() {
  const scrollToForm = () => {
    const el = document.getElementById("form-pendaftaran");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pain-point" className="px-5 pt-8 pb-10 bg-[#F7F5EE]">
      {/* 1. Heading Section */}
      <div className="text-center mb-6 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#143D2B] tracking-tight leading-[1.35] sm:leading-[1.25] max-w-xl text-center">
          Pernahkah Anda Cemas Melihat Anak{" "}
          <span className="text-[#EE4C23] inline-block relative font-heading">
            Kecanduan Gadget
            <svg
              aria-hidden="true"
              viewBox="0 0 220 18"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-2.5 w-full text-[#f15a29] pointer-events-none"
              fill="none"
            >
              <path
                d="M4 10C60 5 150 6 216 9"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          dan Main Game Terus-menerus?
        </h2>

        {/* Empathetic Opening Statement */}
        <p className="text-[#143D2B] text-xs sm:text-sm md:text-base font-bold mt-3.5 max-w-lg leading-relaxed text-center">
          Sebagai orang tua, wajar jika Anda merasa khawatir saat melihat anak berjam-jam menatap layar ponsel atau tablet hanya untuk bermain game.
        </p>
      </div>

      {/* 2. Unified Master Card: Mindset Reframe + Transformation (Menjawab Titik Dua) */}
      <div className="rounded-[32px] sm:rounded-[36px] bg-[#143D2B] text-white p-6 sm:p-8 shadow-xl border-2 border-[#143D2B] overflow-hidden">
        {/* Header Reframe */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F5BA13] text-[#143D2B] flex items-center justify-center shrink-0 -rotate-3 shadow-md">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading text-[#F5BA13] tracking-tight">
            Tapi tahukah Anda?
          </h3>
        </div>

        {/* Core Statement yang Berakhir dengan Titik Dua ( : ) */}
        <p className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug">
          Rasa penasaran mereka pada game adalah
        </p>
        <div className="my-2.5">
          <span className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-[#F5BA13] text-[#143D2B] font-heading font-black text-2xl sm:text-3xl md:text-3xl tracking-tight shadow-md">
            Sinyal Kuat Bakat Digital!
          </span>
        </div>

        <p className="text-sm sm:text-base md:text-lg font-black text-[#F5BA13] uppercase tracking-wider font-nunito mt-3 mb-5">
          Alih-alih melarangnya, mari ubah perannya:
        </p>

        {/* 3. Dua Peran: Sebelumnya (Consumer) VS Bersama Metro CodingKids (Creator) */}
        <div className="relative">
          {/* KARTU 1: SEBELUMNYA (Consumer) */}
          <div className="rounded-2xl sm:rounded-3xl bg-white text-[#143D2B] p-5 sm:p-6 pb-6 sm:pb-7 shadow-md">
            <h4 className="font-heading tracking-tight leading-tight">
              <span className="block text-base sm:text-lg text-[#EE4C23] font-heading mb-1">
                Sebelumnya:
              </span>
              <span className="text-lg sm:text-xl md:text-2xl text-[#143D2B] font-heading">
                Anak hanya menjadi <span className="text-[#EE4C23]">Consumer</span>
              </span>
            </h4>
            <p className="text-xs sm:text-sm font-bold text-[#143D2B] mt-1">
              (penonton & pembelanja game)
            </p>

            <p className="text-xs sm:text-sm font-semibold text-[#143D2B] mt-3 leading-relaxed">
              Waktu habis berjam-jam menatap layar ponsel atau tablet hanya untuk bermain game, menonton konten, dan membeli item tanpa mengasah keterampilan nyata.
            </p>

            {/* Poin Ringkas Tegas */}
            <div className="mt-3.5 pt-3 border-t-2 border-[#143D2B]/15 space-y-1.5">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#143D2B]">
                <span className="w-4 h-4 rounded-full bg-[#EE4C23] text-white flex items-center justify-center text-[10px] font-black shrink-0">✕</span>
                <span>Pasif mengonsumsi hiburan instan tanpa belajar logika</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#143D2B]">
                <span className="w-4 h-4 rounded-full bg-[#EE4C23] text-white flex items-center justify-center text-[10px] font-black shrink-0">✕</span>
                <span>Menghabiskan waktu berjam-jam tanpa menghasilkan karya</span>
              </div>
            </div>
          </div>

          {/* Indikator Transformasi Panah Turun - Simetris Sempurna Menyentuh Kartu Atas & Bawah */}
          <div className="flex justify-center -my-2.5 sm:-my-3 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5BA13] text-[#143D2B] flex items-center justify-center font-black shadow-lg border-[3px] border-[#143D2B]">
              <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3.5]" />
            </div>
          </div>

          {/* KARTU 2: BERSAMA METRO CODINGKIDS (Creator) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#F5BA13] text-[#143D2B] p-5 sm:p-6 pt-6 sm:pt-7 shadow-md">
            <h4 className="font-heading tracking-tight leading-tight">
              <span className="block text-base sm:text-lg text-[#143D2B] font-heading mb-1">
                Bersama Metro CodingKids:
              </span>
              <span className="text-lg sm:text-xl md:text-2xl text-[#143D2B] font-heading">
                Anak diarahkan menjadi <span className="text-[#EE4C23]">Creator</span>
              </span>
            </h4>
            <p className="text-xs sm:text-sm font-black text-[#143D2B] mt-1">
              (perancang logika, karakter, dan pembuat game mereka sendiri)
            </p>

            <p className="text-xs sm:text-sm font-bold text-[#143D2B] mt-3 leading-relaxed">
              Rasa penasaran pada game disalurkan menjadi kemampuan koding visual, problem-solving, matematika seru, hingga memprogram game orisinal ciptaan sendiri!
            </p>

            {/* Poin Ringkas Tegas */}
            <div className="mt-3.5 pt-3 border-t-2 border-[#143D2B]/15 space-y-1.5">
              <div className="flex items-center gap-2.5 text-xs font-black text-[#143D2B]">
                <span className="w-4 h-4 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                <span>Menguasai logika pemrograman visual & cara kerja teknologi</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-black text-[#143D2B]">
                <span className="w-4 h-4 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                <span>Membuat portofolio game nyata yang bisa dimainkan bersama keluarga</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Punchline Callout & Tombol CTA */}
        <div className="mt-6 pt-5 border-t-2 border-white/20 text-center flex flex-col items-center">
          <p className="text-base sm:text-lg md:text-xl font-heading text-white leading-snug max-w-md mx-auto">
            Ubah screen-time pasif menjadi{" "}
            <span className="text-[#F5BA13] font-heading font-black">
              productive screen-time
            </span>{" "}
            yang menghasilkan portofolio nyata!
          </p>

          <PressDepth
            type="button"
            onClick={scrollToForm}
            containerClassName="mt-4 w-full sm:w-auto"
            baseBg="bg-[#b83310]"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#EE4C23] text-white font-heading font-black text-sm sm:text-base border-none flex items-center justify-center gap-2.5 hover:bg-[#d93f18] shadow-lg"
          >
            <span>Ubah Minat Game Anak Sekarang</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </PressDepth>
        </div>
      </div>
    </section>
  );
}
