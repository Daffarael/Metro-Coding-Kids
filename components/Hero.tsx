"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Code } from "lucide-react";

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
    <section className="px-5 pt-6 pb-8 bg-[#F7F5EE]">
      {/* Yellow Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-black tracking-wider uppercase mb-3.5 shadow-2xs">
        <span>Belajar Sambil Bermain</span>
        <span className="w-2 h-2 rounded-full bg-[#EE4C23]" />
      </div>

      {/* Main Headline with Capsule */}
      <div className="space-y-1 mb-4">
        <h1 className="text-4xl sm:text-5xl font-heading text-[#143D2B] leading-[1.08] tracking-tight">
          Anak Bisa<br />Membuat
        </h1>

        {/* Big Forest Green Container with Code Badge */}
        <div className="relative inline-block mt-1">
          <div className="px-6 py-2.5 rounded-2xl bg-[#143D2B] text-white shadow-md">
            <span className="text-3xl sm:text-4xl font-heading tracking-tight block">
              Game Sendiri
            </span>
          </div>

          {/* Purple/Blue tilted code badge */}
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-[#3B5EDB] text-white flex items-center justify-center font-mono font-bold text-xs shadow-md rotate-12">
            <Code className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Hero Visual Card with floating badges (matching user screenshot) */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#143D2B]/10 shadow-lg bg-white my-5">
        <div className="relative aspect-[575/340] w-full bg-[#E2F3E7]">
          <Image
            src="/images/hero-kids.png"
            alt="Anak Belajar Coding Membuat Game Sendiri di Metro Coding Kids"
            fill
            sizes="(max-width: 540px) 100vw, 540px"
            priority
            unoptimized
            className="object-cover object-center"
          />

          {/* Floating Sticker Top Left: Price Pill */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-sm">
            <div className="text-[10px] text-slate-500 font-medium leading-none">Investasi mulai</div>
            <div className="text-xs font-extrabold text-[#143D2B] leading-tight mt-0.5">
              Rp 499K <span className="text-[9px] font-normal text-slate-500">/ 8 sesi</span>
            </div>
          </div>

          {/* Floating Sticker Top Right: Free Trial Star Badge */}
          <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-[#F5BA13] text-[#143D2B] flex flex-col items-center justify-center font-black text-[9px] leading-tight shadow-md rotate-12 border-2 border-white">
            <span>FREE</span>
            <span>TRIAL!</span>
          </div>
        </div>

        {/* Bottom Banner inside photo card */}
        <div className="p-3.5 bg-[#143D2B] text-white flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] font-bold text-[#F5BA13] uppercase tracking-wider">
              Kelas Interaktif Semi-Privat
            </div>
            <div className="text-xs font-extrabold text-white mt-0.5">
              1 mentor • Maks. 6 anak
            </div>
          </div>

          {/* Avatar stack */}
          <div className="flex items-center -space-x-1.5 shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#3B5EDB] border-2 border-[#143D2B] text-white text-[9px] font-bold flex items-center justify-center">
              A
            </div>
            <div className="w-6 h-6 rounded-full bg-[#EE4C23] border-2 border-[#143D2B] text-white text-[9px] font-bold flex items-center justify-center">
              R
            </div>
            <div className="w-6 h-6 rounded-full bg-[#F5BA13] border-2 border-[#143D2B] text-[#143D2B] text-[8px] font-extrabold flex items-center justify-center">
              +500
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-[#334155] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
        Kelas coding seru untuk mengubah waktu layar jadi waktu berkarya. Anak belajar logika, kreativitas, dan percaya diri lewat proyek game pertamanya.
      </p>

      {/* 3 Colorful Saturated Pills */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        <span className="px-3 py-1 rounded-full bg-[#143D2B] text-white text-xs font-bold shadow-2xs">
          Asah Logika
        </span>
        <span className="px-3 py-1 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-bold shadow-2xs">
          Latih Fokus
        </span>
        <span className="px-3 py-1 rounded-full bg-[#EE4C23] text-white text-xs font-bold shadow-2xs">
          Makin Kreatif
        </span>
      </div>

      {/* Primary Action Button & Reassurance */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          onClick={handleScrollToForm}
          className="py-4 px-6 rounded-2xl bg-[#EE4C23] hover:bg-[#d63f17] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
        >
          <span>Coba Kelas Gratis</span>
          <div className="w-5 h-5 rounded-full bg-white text-[#EE4C23] flex items-center justify-center">
            <ArrowRight className="w-3 h-3 stroke-[3]" />
          </div>
        </button>

        <div className="text-[11px] text-slate-500 leading-snug">
          Tanpa komitmen.<br />
          Kenalan dulu dengan mentornya.
        </div>
      </div>
    </section>
  );
}
