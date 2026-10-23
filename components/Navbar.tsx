"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";

interface NavbarProps {
  whatsappNumber?: string;
}

export default function Navbar({ whatsappNumber = "6282382872411" }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#143E2C] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            MK
          </div>
          <div>
            <span className="block font-extrabold text-[#143E2C] text-sm sm:text-base leading-tight tracking-tight">
              Metro Koding Kids
            </span>
            <span className="block text-[11px] font-medium text-emerald-800/80 leading-none">
              Eksplorasi • Logika • Game
            </span>
          </div>
        </Link>

        {/* Status Pill & WA CTA */}
        <div className="flex items-center gap-2">
          <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Batch Dibuka</span>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Halo CS Metro Coding Kids, saya ingin tanya informasi pendaftaran kelas koding anak."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#143E2C] text-white text-xs font-semibold hover:bg-[#225E43] transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Tanya CS</span>
          </a>
        </div>
      </div>
    </header>
  );
}
