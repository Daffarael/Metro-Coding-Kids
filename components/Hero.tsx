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
    <section className="px-5 pt-6 pb-8 bg-gradient-to-b from-[#EBF5EA] via-[#F4FAF2] to-[#F4FAF2]">
      {/* Batch Alert Banner (No em-dash!) */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F3E4] border border-[#BCE1B7] text-[#1B4332] text-xs font-semibold mb-4 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#1B4332]" />
        <span>Pendaftaran Batch Baru Dibuka • Sisa {seatsLeft} Kursi Belajar</span>
      </div>

      {/* Main Headline in Official More Sugar Font with Sticker Outline */}
      <div className="space-y-2 mb-3.5">
        <h1 className="text-3xl sm:text-[38px] font-heading headline-sticker tracking-normal leading-[1.18]">
          Anak Bisa Membuat Game
        </h1>

        {/* Capsule "Sendiri" in Official Patrick Hand Marker Font */}
        <div className="inline-flex items-center gap-2.5 px-5 py-1 rounded-full bg-[#1B4332] text-white shadow-md">
          <span className="text-2xl sm:text-3xl font-hand tracking-wider pt-0.5">
            Sendiri
          </span>
          <span className="text-lg -rotate-12 select-none" role="img" aria-label="pensil">
            ✏️
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-5 font-normal">
        Bukan cuma bermain game, saatnya si kecil belajar berpikir logis, melatih fokus, dan menciptakan karya game pertamanya dengan penuh rasa percaya diri.
      </p>

      {/* Hero Visual Card: Clean Kids Learning Photo (No Duplicate Headline!) */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1B4332]/12 shadow-md bg-white mb-6">
        <div className="relative aspect-[575/330] w-full bg-[#F4FAF2]">
          <Image
            src="/images/hero-kids.png"
            alt="Anak Belajar Coding Membuat Game Sendiri di Metro Coding Kids"
            fill
            sizes="(max-width: 500px) 100vw, 480px"
            priority
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7CB342] animate-pulse" />
            <span className="text-xs font-semibold text-[#1B4332]">
              Praktik Langsung Scratch & Roblox
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#1B4332] bg-[#EBF5EA] px-2.5 py-0.5 rounded-full border border-[#BCE1B7]">
            Usia 6 - 15 Tahun
          </span>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="space-y-3">
        <button
          onClick={handleScrollToForm}
          className="w-full py-4 px-6 rounded-2xl bg-[#F35D25] hover:bg-[#D84C18] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <span>Daftar Sekarang & Amankan Kursi</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Reassurance Micro-items */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="flex items-center gap-1.5 text-slate-600 text-[12px] font-medium">
            <Users className="w-4 h-4 text-[#1B4332] shrink-0" />
            <span>Maksimal 6 anak / kelas</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-[12px] font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
            <span>Mentor ramah & sabar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
