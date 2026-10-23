"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Users, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onCtaClick?: () => void;
  seatsLeft?: number;
}

export default function Hero({ onCtaClick, seatsLeft = 4 }: HeroProps) {
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
    <section className="px-5 pt-6 pb-8 bg-gradient-to-b from-[#F2F8F1] via-[#F8FAF7] to-[#F8FAF7]">
      {/* Batch Alert Banner */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-950 text-xs font-semibold mb-4 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
        <span>Pendaftaran Batch Baru Dibuka — Sisa {seatsLeft} Kursi Belajar</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-2 mb-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#143E2C] tracking-tight leading-[1.15]">
          Anak Bisa Membuat Game
        </h1>

        {/* Capsule "Sendiri" matching the flyer design */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#143E2C] text-white shadow-sm">
          <span className="text-xl sm:text-2xl font-bold tracking-wide">Sendiri</span>
          <span className="text-base" role="img" aria-label="pencil">
            ✏️
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
        Bukan cuma bermain game, saatnya si kecil belajar berpikir logis, melatih fokus, dan menciptakan karya game pertamanya dengan penuh rasa percaya diri.
      </p>

      {/* Hero Visual Poster Card */}
      <div className="relative rounded-2xl overflow-hidden border border-emerald-900/10 shadow-md bg-white mb-6">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/images/hero-poster.png"
            alt="Anak Belajar Coding Membuat Game Sendiri di Metro Coding Kids"
            fill
            sizes="(max-width: 500px) 100vw, 490px"
            priority
            unoptimized
            className="object-cover object-top"
          />
        </div>
        <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-800">
              Praktik Langsung Scratch & Roblox
            </span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
            Usia 6 - 15 Tahun
          </span>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="space-y-3">
        <button
          onClick={handleScrollToForm}
          className="w-full py-4 px-6 rounded-2xl bg-[#F95724] hover:bg-[#e24a1b] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <span>Daftar Sekarang & Amankan Kursi</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Reassurance Micro-items */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="flex items-center gap-1.5 text-slate-600 text-[12px] font-medium">
            <Users className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Maksimal 6 anak / kelas</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-[12px] font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Mentor ramah & sabar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
