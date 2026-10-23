"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldCheck, ArrowRight, Zap, Check } from "lucide-react";

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
    <section id="biaya-paket" className="px-5 py-8 bg-white border-b border-slate-200/80">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
          Investasi Belajar Si Kecil
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143E2C] tracking-tight">
          Paket Pendaftaran {batchName}
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Biaya transparan untuk 8 pertemuan intensif. Tanpa ada biaya pendaftaran tersembunyi.
        </p>
      </div>

      {/* Countdown Timer Block */}
      <div className="bg-[#143E2C] text-white p-4 rounded-2xl mb-5 shadow-sm text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-300 mb-2.5">
          <Clock className="w-3.5 h-3.5" />
          <span>Waktu Penutupan Pendaftaran Batch:</span>
        </div>
        <div className="grid grid-cols-4 gap-2 max-w-[280px] mx-auto">
          <div className="bg-white/10 rounded-xl p-2 border border-white/10">
            <span className="block text-xl font-extrabold">{timeLeft.days}</span>
            <span className="block text-[10px] text-emerald-200 uppercase font-medium">Hari</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2 border border-white/10">
            <span className="block text-xl font-extrabold">{timeLeft.hours}</span>
            <span className="block text-[10px] text-emerald-200 uppercase font-medium">Jam</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2 border border-white/10">
            <span className="block text-xl font-extrabold">{timeLeft.minutes}</span>
            <span className="block text-[10px] text-emerald-200 uppercase font-medium">Menit</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2 border border-white/10">
            <span className="block text-xl font-extrabold">{timeLeft.seconds}</span>
            <span className="block text-[10px] text-emerald-200 uppercase font-medium">Detik</span>
          </div>
        </div>
      </div>

      {/* Investment Card */}
      <div className="rounded-2xl border-2 border-emerald-600/30 bg-gradient-to-b from-emerald-50/40 via-white to-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Biaya Investasi Lengkap
          </span>
          <span className="text-[11px] font-bold text-orange-950 bg-orange-100 border border-orange-300/80 px-2.5 py-0.5 rounded-full">
            Hemat 47% untuk Batch Ini
          </span>
        </div>

        {/* Price Display */}
        <div className="mb-4">
          <div className="text-xs text-slate-400 line-through mb-0.5">
            Normal: {formatRupiah(priceNormal)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#143E2C] tracking-tight">
              {formatRupiah(priceCurrent)}
            </span>
            <span className="text-xs font-semibold text-slate-500">/ 8 Sesi</span>
          </div>
          <p className="text-[11px] text-emerald-800 font-semibold mt-1">
            ✓ Sudah mencakup seluruh modul, sertifikat, dan aset pembuatan game
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
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleCta}
          className="w-full py-4 px-6 rounded-2xl bg-[#F95724] hover:bg-[#e24a1b] active:scale-[0.99] text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Daftar Sekarang & Amankan Kursi</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium mt-3">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Garansi pendampingan sampai anak menyelesaikan gamenya</span>
        </div>
      </div>
    </section>
  );
}
