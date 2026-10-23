"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldCheck, ArrowRight, Check } from "lucide-react";

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
      <div className="text-center mb-5">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2 shadow-2xs">
          Investasi Belajar Si Kecil
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
          Paket Pendaftaran {batchName}
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Biaya transparan untuk 8 pertemuan intensif. Tanpa ada biaya pendaftaran tersembunyi.
        </p>
      </div>

      {/* Countdown Timer Block (Deep Forest Green) */}
      <div className="bg-[#143D2B] text-white p-5 rounded-3xl mb-5 shadow-lg text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#F5BA13] mb-3">
          <Clock className="w-4 h-4" />
          <span>Waktu Penutupan Pendaftaran Batch:</span>
        </div>
        <div className="grid grid-cols-4 gap-2 max-w-[300px] mx-auto">
          <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
            <span className="block text-2xl font-black">{timeLeft.days}</span>
            <span className="block text-[10px] text-[#F5BA13] uppercase font-bold">Hari</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
            <span className="block text-2xl font-black">{timeLeft.hours}</span>
            <span className="block text-[10px] text-[#F5BA13] uppercase font-bold">Jam</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
            <span className="block text-2xl font-black">{timeLeft.minutes}</span>
            <span className="block text-[10px] text-[#F5BA13] uppercase font-bold">Menit</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
            <span className="block text-2xl font-black">{timeLeft.seconds}</span>
            <span className="block text-[10px] text-[#F5BA13] uppercase font-bold">Detik</span>
          </div>
        </div>
      </div>

      {/* Investment Card */}
      <div className="rounded-3xl border-2 border-[#143D2B]/15 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Biaya Investasi Lengkap
          </span>
          <span className="text-[11px] font-black text-white bg-[#EE4C23] px-3 py-1 rounded-full shadow-2xs">
            Hemat 47% untuk Batch Ini
          </span>
        </div>

        {/* Price Display */}
        <div className="mb-4">
          <div className="text-xs text-slate-400 line-through mb-0.5">
            Normal: {formatRupiah(priceNormal)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-[#143D2B] tracking-tight">
              {formatRupiah(priceCurrent)}
            </span>
            <span className="text-xs font-bold text-slate-500">/ 8 Sesi</span>
          </div>
          <p className="text-xs text-[#143D2B] font-bold mt-1">
            ✓ Sudah mencakup seluruh modul, sertifikat, dan akun belajar
          </p>
        </div>

        {/* Feature inclusions */}
        <div className="space-y-2.5 py-3.5 border-y border-slate-100 mb-5">
          {[
            "8x Pertemuan Kelas Intensif (Durasi 60-75 menit)",
            "Maksimal 6 anak per sesi (semi-privat terpantau)",
            "Akses software, akun belajar & template project",
            "Sertifikat resmi kelulusan Metro Coding Kids",
            "Portofolio game yang siap dimainkan dan dipamerkan",
            "Laporan perkembangan dan logika nalar anak",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <div className="w-4 h-4 rounded-full bg-[#E2F3E7] text-[#143D2B] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleCta}
          className="w-full py-4 px-6 rounded-2xl bg-[#EE4C23] hover:bg-[#d63f17] active:scale-[0.99] text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Daftar Sekarang & Amankan Kursi</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium mt-3">
          <ShieldCheck className="w-4 h-4 text-[#143D2B]" />
          <span>Garansi pendampingan sampai anak menyelesaikan gamenya</span>
        </div>
      </div>
    </section>
  );
}
