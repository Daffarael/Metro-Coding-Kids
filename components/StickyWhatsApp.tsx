"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface StickyWhatsAppProps {
  whatsappNumber?: string;
  priceCurrent?: number;
}

export default function StickyWhatsApp({
  whatsappNumber = "6282382872411",
  priceCurrent = 499000,
}: StickyWhatsAppProps) {
  const handleAction = () => {
    const el = document.getElementById("form-pendaftaran");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Halo CS Metro Coding Kids, saya ingin daftar kelas koding anak untuk batch ini."
        )}`,
        "_blank"
      );
    }
  };

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(priceCurrent);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#1B4332]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-[480px] mx-auto flex items-center justify-between gap-3">
        {/* Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7CB342] animate-pulse" />
            <span className="text-[11px] font-bold text-[#1B4332] uppercase tracking-tight">
              Sisa 4 Kursi Belajar
            </span>
          </div>
          <div className="text-sm font-extrabold text-[#1B4332] truncate">
            {formattedPrice} <span className="text-[11px] font-normal text-slate-500">/ 8 Sesi</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleAction}
          className="py-3 px-5 rounded-xl bg-[#F35D25] hover:bg-[#D84C18] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>Amankan Kursi</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
