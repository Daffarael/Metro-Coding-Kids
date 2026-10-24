"use client";

import React, { useState, useEffect } from "react";
import { Clock, ArrowRight, Check, Sparkles } from "lucide-react";

interface PricingBatchProps {
  onCtaClick?: () => void;
  priceNormal?: number;
  priceCurrent?: number;
  deadlineDate?: string;
  batchName?: string;
}

export default function PricingBatch({
  onCtaClick,
  priceNormal = 950000,
  priceCurrent = 499000,
  deadlineDate = "2026-11-15T23:59:59",
  batchName = "Batch November 2026",
}: PricingBatchProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const target = new Date(deadlineDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineDate]);

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById("form-pendaftaran");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="biaya-paket" className="px-5 py-8 bg-[#F7F5EE]">
      {/* Section Header Matching ClassPrograms & Facilities */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2.5">
          Investasi Belajar Si Kecil
        </span>
        <h2
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
        >
          <span>Paket Pendaftaran</span>{" "}
          <span
            style={{ transform: "rotate(-2deg)" }}
            className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
          >
            {batchName}
          </span>
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Biaya transparan untuk 8 pertemuan intensif. Tanpa ada biaya pendaftaran tersembunyi.
        </p>
      </div>

      <div className="max-w-[460px] mx-auto">
        {/* Countdown Timer Block (Deep Forest Green, Playful & High-Contrast) */}
        <div className="rounded-[32px] sm:rounded-[36px] bg-[#143D2B] text-white p-5 sm:p-6 mb-4 border-2 border-[#143D2B] text-center select-none shadow-none">
          <div className="flex items-center justify-center mb-3.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-black tracking-wide font-nunito">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>WAKTU PENUTUPAN BATCH:</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-[320px] mx-auto">
            <div className="bg-[#0a261a] rounded-2xl py-2 px-1 border border-white/15">
              <span className="block text-2xl sm:text-3xl font-black font-nunito text-white">
                {timeLeft.days}
              </span>
              <span className="block text-[10px] text-[#F5BA13] uppercase font-black tracking-wider">
                Hari
              </span>
            </div>
            <div className="bg-[#0a261a] rounded-2xl py-2 px-1 border border-white/15">
              <span className="block text-2xl sm:text-3xl font-black font-nunito text-white">
                {timeLeft.hours}
              </span>
              <span className="block text-[10px] text-[#F5BA13] uppercase font-black tracking-wider">
                Jam
              </span>
            </div>
            <div className="bg-[#0a261a] rounded-2xl py-2 px-1 border border-white/15">
              <span className="block text-2xl sm:text-3xl font-black font-nunito text-white">
                {timeLeft.minutes}
              </span>
              <span className="block text-[10px] text-[#F5BA13] uppercase font-black tracking-wider">
                Menit
              </span>
            </div>
            <div className="bg-[#0a261a] rounded-2xl py-2 px-1 border border-white/15">
              <span className="block text-2xl sm:text-3xl font-black font-nunito text-white">
                {timeLeft.seconds}
              </span>
              <span className="block text-[10px] text-[#F5BA13] uppercase font-black tracking-wider">
                Detik
              </span>
            </div>
          </div>
        </div>

        {/* Investment Card */}
        <div className="rounded-[32px] sm:rounded-[36px] border-2 border-[#143D2B]/15 bg-white p-6 sm:p-7 shadow-none select-none">
          {/* Header Row: Label & Playful Sticker Badge (Gede & Tegas) */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wide font-nunito">
              Biaya Investasi Lengkap
            </span>
            <div
              style={{ transform: "rotate(2deg)" }}
              className="px-3.5 sm:px-4 py-1.5 rounded-2xl bg-[#EE4C23] text-white font-heading font-black text-sm sm:text-base tracking-wide flex items-center gap-1.5 shadow-none select-none"
            >
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>HEMAT 47%</span>
            </div>
          </div>

          {/* Price Display */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-slate-400 font-semibold line-through">
                Normal: {formatRupiah(priceNormal)}
              </span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#EE4C23] text-white uppercase tracking-wide">
                Hemat Rp 451.000
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                className="text-3xl sm:text-4xl font-black text-[#143D2B] tracking-tight"
              >
                {formatRupiah(priceCurrent)}
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-600 font-nunito">
                / 8 Sesi
              </span>
            </div>

            {/* Inclusions Line - Solid & Clean, Tanpa Warna Pudar */}
            <div className="mt-2.5 flex items-center gap-2 text-xs font-bold text-[#143D2B]">
              <div className="w-4 h-4 rounded-full bg-[#143D2B] text-white flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>Sudah mencakup modul, sertifikat, & akun belajar</span>
            </div>
          </div>

          {/* Feature Inclusions Matching ClassPrograms */}
          <div className="space-y-3 py-4 border-y border-[#143D2B]/10 mb-5">
            {[
              "8x Pertemuan Kelas Intensif (Durasi 60–75 menit)",
              "Maksimal 6 anak per sesi (semi-privat terpantau)",
              "Akses software, akun belajar & template project",
              "Sertifikat resmi kelulusan Metro Coding Kids",
              "Portofolio game yang siap dimainkan dan dipamerkan",
              "Laporan perkembangan dan logika nalar anak",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B] font-semibold">
                <div className="w-5 h-5 rounded-full bg-[#EE4C23] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Signature Action CTA Button */}
          <button
            onClick={handleCta}
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            className="w-full max-w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl bg-[#EE4C23] text-white font-black text-sm sm:text-lg tracking-tight shadow-none border-none flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer hover:bg-[#d93f18] active:scale-[0.98] transition-all select-none"
          >
            <span className="text-center">Daftar Sekarang & Amankan Kursi</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
