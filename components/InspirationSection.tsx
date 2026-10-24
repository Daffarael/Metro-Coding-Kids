"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Quote, ArrowRight, Heart } from "lucide-react";
import { PressDepth } from "@/components/ui/press-depth";
import { Amp } from "@/components/ui/amp";

export default function InspirationSection() {
  const scrollToForm = () => {
    const el = document.getElementById("form-pendaftaran");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inspirasi" className="px-5 py-8 bg-[#F7F5EE]">
      {/* 1. Section Header Matching PainPoint & Pillars */}
      <div className="text-center mb-6 flex flex-col items-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#143D2B] tracking-tight leading-[1.2] max-w-xl text-center">
          Inovasi Besar Dunia Berawal dari{" "}
          <span className="text-[#EE4C23] inline-block relative font-heading">
            Langkah Kecil di Usia Dini
            <svg
              aria-hidden="true"
              viewBox="0 0 220 18"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-[#f15a29]"
              fill="none"
            >
              <path
                d="M4 11C60 6 150 7 216 10"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-[#143D2B] text-xs sm:text-sm md:text-base font-bold mt-3.5 max-w-lg leading-relaxed text-center">
          Tokoh-tokoh teknologi dunia seperti pendiri aplikasi global sudah mulai menulis baris kode pertama mereka sejak usia anak-anak.
        </p>
      </div>

      {/* 2. Dua Kartu Terhubung (Pola Identik dengan PainPoint) */}
      <div className="relative">
        {/* KARTU 1: Tokoh Inspirasi Dunia (Luis von Ahn, CEO Duolingo) */}
        <div className="rounded-[32px] sm:rounded-[36px] bg-white text-[#143D2B] p-5 sm:p-7 pb-6 sm:pb-8 shadow-md border-2 border-[#143D2B]">
          {/* Header Row: Squircle Icon + Tag */}
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div
                style={{ transform: "rotate(-4deg)" }}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#F5BA13] text-[#143D2B] flex items-center justify-center font-black border-2 border-[#143D2B] shrink-0"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <span className="px-3 py-1 inline-flex items-center justify-center rounded-full bg-[#143D2B] text-[#F5BA13] font-nunito text-[11px] sm:text-xs font-black tracking-wider uppercase whitespace-nowrap">
                <span>Kisah Nyata</span>
              </span>
            </div>
            <span className="px-3 py-1 inline-flex items-center justify-center rounded-full bg-[#F5BA13] text-[#143D2B] font-nunito text-[11px] sm:text-xs font-black tracking-wide uppercase border border-[#143D2B]/15 whitespace-nowrap">
              <span>Mulai Usia 8–9 Tahun</span>
            </span>
          </div>

          {/* Profile Row: Avatar & Bio */}
          <div className="flex items-center gap-3.5 sm:gap-4 mb-3.5">
            <div
              style={{ transform: "rotate(-3deg)" }}
              className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#143D2B] shadow-sm shrink-0 bg-[#143D2B]"
            >
              <Image
                src="/images/luis-von-ahn.jpg"
                alt="Luis von Ahn - Pendiri & CEO Duolingo"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading text-[#143D2B] tracking-tight leading-tight">
                Luis von Ahn
              </h3>
              <p className="text-xs sm:text-sm font-heading text-[#EE4C23] mt-0.5">
                Pendiri <Amp /> CEO Duolingo (Aplikasi Edukasi #1 Dunia)
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-[#143D2B]/85 mt-1 leading-snug">
                Pencipta reCAPTCHA yang diakuisisi Google <Amp /> kini memimpin Duolingo dengan 500+ juta pengguna global.
              </p>
            </div>
          </div>

          {/* Narasi Pengantar */}
          <p className="text-xs sm:text-sm font-semibold text-[#143D2B] mt-2.5 leading-relaxed">
            Ia mengenal pemrograman sejak usia anak-anak. Rasa penasaran itu bertransformasi menjadi kemampuan membangun teknologi kelas dunia yang merevolusi cara belajar ratusan juta orang.
          </p>

          {/* Kotak Pertanyaan Kunci - Solid Forest Green Tanpa Warna Pudar */}
          <div className="mt-4 pt-3.5 border-t-2 border-[#143D2B]/15">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#143D2B] text-white border-2 border-[#143D2B] shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-[#F5BA13] text-[#143D2B] flex items-center justify-center text-xs font-black shrink-0">
                  ?
                </span>
                <span className="font-heading text-sm sm:text-base text-[#F5BA13] tracking-wide">
                  Mengapa di usia anak-anak?
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed pl-7">
                Karena pola pikir logis (<em>logical thinking</em>) paling efektif dibentuk saat otak anak berada di masa emas pertumbuhannya.
              </p>
            </div>
          </div>
        </div>

        {/* Indikator Penghubung - Simetris Menyentuh Kartu 1 & Kartu 2 */}
        <div className="flex justify-center -my-3 sm:-my-3.5 relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EE4C23] text-white flex items-center justify-center font-black shadow-lg border-[3px] border-[#143D2B]">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-[2.5]" />
          </div>
        </div>

        {/* KARTU 2: Menjual Emosi & Momen Membanggakan Buah Hati */}
        <div className="rounded-[32px] sm:rounded-[36px] bg-[#F5BA13] text-[#143D2B] p-5 sm:p-7 pt-6 sm:pt-8 shadow-md border-2 border-[#143D2B]">
          {/* Header Row: Squircle Icon + Tag */}
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2.5">
              <div
                style={{ transform: "rotate(4deg)" }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#143D2B] text-[#F5BA13] flex items-center justify-center font-black border-2 border-[#143D2B] shrink-0"
              >
                <Heart className="w-5 h-5 fill-[#F5BA13] stroke-[2.5]" />
              </div>
              <span className="px-3 py-1 inline-flex items-center justify-center rounded-full bg-[#143D2B] text-[#F5BA13] font-nunito text-[11px] sm:text-xs font-black tracking-wider uppercase whitespace-nowrap">
                <span>Momen Membanggakan</span>
              </span>
            </div>
          </div>

          <h3 className="font-heading tracking-tight leading-tight">
            <span className="block text-base sm:text-lg text-[#143D2B] font-heading mb-1">
              Untuk Anda dan Buah Hati:
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl text-[#143D2B] font-heading">
              Bayangkan <span className="text-[#EE4C23]">Momen Ini</span>
            </span>
          </h3>

          <p className="text-xs sm:text-sm font-bold text-[#143D2B] mt-2.5 leading-relaxed">
            Saat anak Anda dengan mata berbinar-binar menunjukkan hasil karya game buatannya sendiri kepada Anda, lalu berkata:
          </p>

          {/* Balon Kutipan Dialog Anak */}
          <div className="my-3.5 p-4 sm:p-5 rounded-2xl bg-white text-[#143D2B] border-2 border-[#143D2B] shadow-md relative">
            <Quote className="w-5 h-5 text-[#EE4C23] stroke-[3] mb-1" />
            <p className="text-lg sm:text-xl md:text-2xl font-heading text-[#EE4C23] tracking-tight leading-snug">
              &ldquo;Ibu/Ayah, lihat! Game ini aku sendiri yang buat kodenya!&rdquo;
            </p>
          </div>

          {/* Konklusi Nilai Emosional */}
          <div className="mt-3.5 pt-3 border-t-2 border-[#143D2B]/15 space-y-2">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm font-black text-[#143D2B]">
              <span className="w-5 h-5 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                ✓
              </span>
              <span>Rasa bangga yang tidak ternilai harganya bagi buah hati dan keluarga.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm font-black text-[#143D2B]">
              <span className="w-5 h-5 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                ✓
              </span>
              <span>Investasi terbaik untuk kemandirian, daya nalar logis, <Amp /> rasa percaya diri anak.</span>
            </div>
          </div>

          {/* Tombol CTA Emosional */}
          <PressDepth
            type="button"
            onClick={scrollToForm}
            containerClassName="w-full mt-5"
            baseBg="bg-[#b83310]"
            className="w-full py-3.5 px-4 bg-[#EE4C23] text-white font-heading font-black text-sm sm:text-base border-none flex items-center justify-center gap-2.5 hover:bg-[#d93f18] shadow-lg"
          >
            <span>Wujudkan Momen Ini untuk Anak Anda</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </PressDepth>
        </div>
      </div>
    </section>
  );
}
