"use client";

import React, { useState, useEffect } from "react";
import { Clock, ArrowRight, Check, Sparkles, Calendar, Timer } from "lucide-react";
import { PressDepth } from "@/components/ui/press-depth";
import { Amp } from "@/components/ui/amp";

interface PricingBatchProps {
  onCtaClick?: () => void;
  priceNormal?: number;
  priceCurrent?: number;
  deadlineDate?: string;
  batchName?: string;
  voucherBadge?: string;
  voucherDescription?: string;
}

export default function PricingBatch({
  onCtaClick,
  deadlineDate = "2026-11-15T23:59:59",
  batchName = "Batch November 2026",
  voucherBadge = "DISKON 15%",
  voucherDescription = "Khusus untuk pendaftar baru yang mengamankan kursi belajar di bulan November.",
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

  return (
    <section id="biaya-paket" className="px-5 py-8 bg-[#F7F5EE]">
      {/* Section Header Matching ClassPrograms & Facilities */}
      <div className="text-center mb-6">
        <span className="h-7 px-4 inline-flex items-center justify-center rounded-full bg-[#F5BA13] text-[#143D2B] font-nunito text-xs font-black uppercase tracking-wider mb-2.5 shadow-none">
          <span className="translate-y-[1px]">Promo Spesial Batch</span>
        </span>
        <h2
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
        >
          <span>Paket Belajar</span>{" "}
          <span
            style={{ transform: "rotate(-2deg)" }}
            className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
          >
            {batchName}
          </span>
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Daftar khusus di bulan November dan klaim voucher potongan 15% untuk 1 program intensif (12 pertemuan / 3 bulan).
        </p>
      </div>

      <div className="max-w-[460px] mx-auto">
        {/* Countdown Timer Block (Deep Forest Green, Playful & High-Contrast) */}
        <div className="rounded-[32px] sm:rounded-[36px] bg-[#143D2B] text-white p-5 sm:p-6 mb-4 border-2 border-[#143D2B] text-center select-none shadow-none">
          <div className="flex items-center justify-center mb-3.5">
            <div className="h-7 px-3.5 inline-flex items-center justify-center rounded-full bg-[#F5BA13] text-[#143D2B] text-xs font-black tracking-wide font-nunito leading-none">
              <Clock className="w-3.5 h-3.5 stroke-[2.5] mr-1.5" />
              <span className="translate-y-[1px]">WAKTU KLAIM VOUCHER NOVEMBER:</span>
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

        {/* Voucher & Program Card */}
        <div className="rounded-[32px] sm:rounded-[36px] border-2 border-[#143D2B]/15 bg-white p-6 sm:p-7 shadow-none select-none">
          {/* Header Row: Label & Playful Sticker Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wide font-nunito">
              Penawaran Khusus
            </span>
            <div
              style={{ transform: "rotate(2deg)" }}
              className="px-3.5 sm:px-4 py-1.5 rounded-2xl bg-[#EE4C23] text-white font-heading font-black text-sm sm:text-base tracking-wide flex items-center gap-1.5 shadow-none select-none"
            >
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>{voucherBadge}</span>
            </div>
          </div>

          {/* Golden Voucher Ticket Box (Menggantikan Tampilan Harga) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#F5BA13] border-2 border-[#143D2B] p-5 sm:p-6 text-[#143D2B] mb-4 shadow-sm relative overflow-hidden">
            {/* Top Row inside ticket */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#143D2B] text-[#F5BA13] font-nunito">
                Voucher Pendaftaran
              </span>
              <span className="text-[11px] sm:text-xs font-black text-[#143D2B] font-nunito uppercase tracking-wide">
                {batchName}
              </span>
            </div>

            {/* Big Voucher Headline */}
            <div className="my-2">
              <div className="text-3xl sm:text-4xl md:text-[40px] font-heading font-black text-[#143D2B] tracking-tight leading-none">
                KLAIM <span className="text-[#EE4C23]">{voucherBadge}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#143D2B] mt-2 leading-relaxed">
                {voucherDescription}
              </p>
            </div>

            {/* Inclusions Line inside ticket */}
            <div className="mt-3 pt-3 border-t-2 border-[#143D2B]/15 flex items-center gap-2 text-xs font-black text-[#143D2B]">
              <div className="w-4 h-4 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>Sudah mencakup modul, sertifikat resmi, & portofolio game</span>
            </div>
          </div>

          {/* 3 Core Highlight Badges (Solid White & Forest Green, Tanpa Warna Pudar) */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="p-2.5 rounded-2xl bg-white border-2 border-[#143D2B] text-center flex flex-col items-center justify-center shadow-xs">
              <Calendar className="w-4 h-4 text-[#EE4C23] mb-1 stroke-[3]" />
              <span className="text-sm sm:text-base font-heading text-[#143D2B] leading-none">
                12 Sesi
              </span>
              <span className="text-[10px] font-black text-[#143D2B] mt-1 leading-tight font-nunito">
                1 Program (3 Bulan)
              </span>
            </div>
            <div className="p-2.5 rounded-2xl bg-white border-2 border-[#143D2B] text-center flex flex-col items-center justify-center shadow-xs">
              <Clock className="w-4 h-4 text-[#EE4C23] mb-1 stroke-[3]" />
              <span className="text-sm sm:text-base font-heading text-[#143D2B] leading-none">
                1x Seminggu
              </span>
              <span className="text-[10px] font-black text-[#143D2B] mt-1 leading-tight font-nunito">
                Jadwal Fleksibel
              </span>
            </div>
            <div className="p-2.5 rounded-2xl bg-white border-2 border-[#143D2B] text-center flex flex-col items-center justify-center shadow-xs">
              <Timer className="w-4 h-4 text-[#EE4C23] mb-1 stroke-[3]" />
              <span className="text-sm sm:text-base font-heading text-[#143D2B] leading-none">
                Maks 90 Mnt
              </span>
              <span className="text-[10px] font-black text-[#143D2B] mt-1 leading-tight font-nunito">
                Per Pertemuan
              </span>
            </div>
          </div>

          {/* Feature Inclusions Matching ClassPrograms */}
          <div className="space-y-2.5 py-4 border-y border-[#143D2B]/10 mb-5">
            {[
              "12x Pertemuan untuk 1 program lengkap (durasi 3 bulan)",
              "Jadwal kelas 1x seminggu (durasi maksimal 90 menit per sesi)",
              "Maksimal 6 anak per sesi (semi-privat terpantau intensif)",
              "Akses software, akun belajar koding & template project",
              "Sertifikat resmi kelulusan Metro Coding Kids",
              "Portofolio game pribadi yang siap dimainkan & dipamerkan",
              "Laporan berkala perkembangan logika & nalar anak",
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
          <PressDepth
            type="button"
            onClick={handleCta}
            containerClassName="w-full"
            baseBg="bg-[#b83310]"
            className="w-full py-3.5 sm:py-4 px-3 sm:px-6 bg-[#EE4C23] text-white font-black text-sm sm:text-lg tracking-tight border-none flex items-center justify-center gap-2.5 sm:gap-3 hover:bg-[#d93f18] shadow-md"
          >
            <span className="text-center">Klaim Voucher 15% <Amp /> Amankan Kursi</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </PressDepth>
        </div>
      </div>
    </section>
  );
}
