"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Code, Flame, MessageCircle } from "lucide-react";

interface HeroProps {
  onCtaClick?: () => void;
  seatsLeft?: number;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const handleScrollToForm = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById("form-pendaftaran");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="px-5 pt-8 pb-10 bg-[#F7F5EE]">
      {/* Top Center Hook Block */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-6">
        {/* Yellow Pill Badge - Tilted like user reference */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-black tracking-wider uppercase mb-3.5 shadow-sm -rotate-[2.5deg] hover:rotate-0 transition-transform">
          <span>Belajar Sambil Bermain</span>
          <span className="w-2 h-2 rounded-full bg-[#EE4C23]" />
        </div>

        {/* Main Headline with Capsule - Centered & Larger */}
        <h1 className="text-[40px] sm:text-5xl md:text-6xl font-heading text-[#143D2B] leading-[1.05] tracking-tight">
          Anak Bisa Membuat
        </h1>

        {/* Big Forest Green Container with Code Badge */}
        <div className="relative inline-block mt-2 sm:mt-2.5">
          <div className="px-7 py-2.5 sm:px-8 sm:py-3.5 rounded-2xl sm:rounded-3xl bg-[#143D2B] text-white shadow-md">
            <span className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight block">
              Game Sendiri
            </span>
          </div>

          {/* Purple/Blue tilted code badge */}
          <div className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#3B5EDB] text-white flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-md rotate-12">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed mt-4 max-w-md font-normal">
          Wadah belajar seru untuk mengubah waktu layar jadi waktu berkarya. Si kecil belajar logika, kreativitas, dan percaya diri lewat proyek game ciptaannya sendiri.
        </p>

        {/* 3 Colorful Saturated Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#143D2B] text-white text-xs font-bold shadow-2xs">
            Asah Logika
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-bold shadow-2xs">
            Latih Fokus
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#EE4C23] text-white text-xs font-bold shadow-2xs">
            Makin Kreatif
          </span>
        </div>
      </div>

      {/* Hero Visual Card with floating badges (matching user screenshot) */}
      <div className="relative max-w-xl mx-auto rounded-3xl overflow-hidden border-2 border-[#143D2B]/10 shadow-lg bg-white mb-6">
        <div className="relative aspect-[575/340] w-full bg-[#E2F3E7]">
          <Image
            src="/images/hero-kids.png"
            alt="Anak Belajar Coding Membuat Game Sendiri di Metro Coding Kids"
            fill
            sizes="(max-width: 575px) 100vw, 575px"
            priority
            unoptimized
            className="object-cover object-center"
          />

          {/* Floating Sticker Top Right: Pebble Squircle Sticker */}
          <div className="absolute top-3 right-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[22px] bg-[#F5BA13] text-[#143D2B] flex flex-col items-center justify-center font-heading font-black text-xs sm:text-sm leading-[1.1] shadow-md rotate-12 text-center select-none">
            <span className="block tracking-tight">LET&apos;S GO</span>
            <span className="block tracking-tight">KIDS!</span>
          </div>
        </div>
      </div>

      {/* Primary Action Button & Reassurance - Centered */}
      <div className="flex flex-col items-center text-center gap-2.5 max-w-sm mx-auto w-full px-1">
        <button
          onClick={handleScrollToForm}
          className="w-full max-w-full py-3.5 px-4 sm:px-8 rounded-2xl bg-[#EE4C23] text-white font-heading text-base sm:text-xl shadow-none border-none flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer"
        >
          <span className="tracking-wide">Daftarkan Si Kecil Sekarang</span>
          <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </button>

        {/* Reassurance - Clean, tegas, zero symbols */}
        <div className="text-center pt-1 flex flex-col items-center gap-1">
          <span className="px-3 py-1 rounded-full bg-[#143D2B] text-white text-[11px] font-black tracking-wider uppercase shadow-2xs">
            Kuota Terbatas
          </span>
          <p className="text-xs text-[#143D2B] font-semibold">
            Konsultasi jadwal dan slot belajar
          </p>
        </div>
      </div>
    </section>
  );
}
