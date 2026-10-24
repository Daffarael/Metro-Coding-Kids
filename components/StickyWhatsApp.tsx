"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { PressDepth } from "@/components/ui/press-depth";

interface StickyWhatsAppProps {
  whatsappNumber?: string;
  priceCurrent?: number;
}

export default function StickyWhatsApp({
  priceCurrent = 499000,
}: StickyWhatsAppProps) {
  const handleAction = () => {
    const el = document.getElementById("form-pendaftaran");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(priceCurrent);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#E6E1D1] shadow-[0_-4px_25px_rgba(20,61,43,0.1)]">
      <div className="max-w-[540px] mx-auto flex items-center justify-between gap-3">
        {/* Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#EE4C23] animate-pulse" />
            <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-tight">
              Sisa 4 Kursi Belajar
            </span>
          </div>
          <div className="text-sm sm:text-base font-black text-[#143D2B] truncate">
            Voucher Diskon 15% <span className="text-[11px] font-bold text-[#EE4C23] font-nunito">(November)</span>
          </div>
        </div>

        {/* CTA Button */}
        <PressDepth
          type="button"
          onClick={handleAction}
          containerClassName="shrink-0"
          baseBg="bg-[#b83310]"
          className="py-3 px-5 bg-[#EE4C23] text-white font-extrabold text-xs sm:text-sm border-none flex items-center gap-2 hover:bg-[#d93f18]"
        >
          <span>Klaim Voucher</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </PressDepth>
      </div>
    </div>
  );
}
