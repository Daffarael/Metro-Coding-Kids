"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { PressDepth } from "@/components/ui/press-depth";

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
      {/* Top Center Hook Block - Pilar 1: Menjual Visi */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-6">
        {/* Badge / Tagline Atas */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-black tracking-wider uppercase mb-3.5 shadow-sm -rotate-[2deg] hover:rotate-0 transition-transform font-nunito select-none">
          <span>The Future-Ready Skill for Kids</span>
          <span className="text-sm">🚀</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#143D2B] leading-[1.2] tracking-tight">
          <span className="block">Di Era AI, Coding Bukan Lagi</span>
          <span className="block mt-1">Pilihan Ekstrakurikuler</span>

          {/* Big Forest Green Capsule with AI Sparkle Badge */}
          <span className="relative inline-block mt-2.5 sm:mt-3">
            <span className="px-5 py-2 sm:px-7 sm:py-2.5 rounded-2xl sm:rounded-3xl bg-[#143D2B] text-white shadow-md block text-xl sm:text-2xl md:text-3xl font-heading tracking-tight">
              Tapi Fondasi Wajib
            </span>
            <span className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 w-8 h-8 rounded-xl bg-[#3B5EDB] text-white flex items-center justify-center shadow-md rotate-12">
              <Sparkles className="w-4 h-4 text-[#F5BA13] fill-[#F5BA13]" />
            </span>
          </span>

          <span className="block mt-2.5 text-xl sm:text-2xl md:text-3xl text-[#143D2B] font-heading font-black leading-tight">
            agar Anak{" "}
            <span className="relative inline-block">
              Tidak Tergantikan
              <svg
                aria-hidden="true"
                viewBox="0 0 500 18"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-[#f15a29]"
                fill="none"
              >
                <path
                  d="M4 11C120 6 330 7 496 11"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            oleh
            <br />
            <span className="relative mt-2 inline-block">
              Teknologi.
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
          </span>
        </h1>

        {/* Sub-Headline */}
        <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed mt-4 max-w-lg font-medium text-balance">
          Berikan anak Anda keunggulan kompetitif sejak dini. Melalui{" "}
          <strong className="font-extrabold text-[#143D2B]">Metro CodingKids</strong>, kami melatih{" "}
          <strong className="font-bold text-[#143D2B]">logical thinking</strong>,{" "}
          <strong className="font-bold text-[#143D2B]">problem-solving</strong>, dan{" "}
          <strong className="font-bold text-[#143D2B]">kreativitas digital</strong> anak usia sekolah agar siap memimpin masa depan.
        </p>

      </div>

      {/* Hero Visual Card */}
      <div className="relative max-w-xl mx-auto rounded-3xl overflow-hidden border-2 border-[#143D2B]/10 shadow-lg bg-white mb-6">
        <div className="relative aspect-[575/340] w-full bg-[#E2F3E7]">
          <Image
            src="/images/hero-kids.png"
            alt="Anak Belajar Coding dan Artificial Intelligence di Metro Coding Kids"
            fill
            sizes="(max-width: 575px) 100vw, 575px"
            priority
            unoptimized
            className="object-cover object-center"
          />

          {/* Floating Sticker Top Right: Pebble Squircle Sticker */}
          <div className="absolute top-3 right-3 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-[20px] bg-[#F5BA13] text-[#143D2B] flex flex-col items-center justify-center font-heading font-black text-xs sm:text-sm leading-[1.1] shadow-md rotate-12 text-center select-none">
            <span className="block tracking-tight">FUTURE</span>
            <span className="block tracking-tight">READY! 🚀</span>
          </div>
        </div>
      </div>

      {/* Primary Action Button - Centered */}
      <div className="flex flex-col items-center text-center max-w-md mx-auto w-full px-1">
        <PressDepth
          type="button"
          onClick={handleScrollToForm}
          containerClassName="w-full max-w-full"
          baseBg="bg-[#b83310]"
          className="w-full max-w-full py-3.5 px-4 sm:px-6 bg-[#EE4C23] text-white font-heading text-sm sm:text-base border-none flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#d93f18] shadow-lg"
        >
          <span className="tracking-wide font-black text-center">
            Daftarkan Anak Anda Sekarang
          </span>
          <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </PressDepth>
      </div>
    </section>
  );
}
