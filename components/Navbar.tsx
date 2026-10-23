"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

interface NavbarProps {
  whatsappNumber?: string;
}

export default function Navbar({ whatsappNumber = "6282382872411" }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#1B4332]/10 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#1B4332] flex items-center justify-center text-white font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform">
            MK
          </div>
          <div>
            <span className="block font-heading text-[#1B4332] text-lg sm:text-xl leading-tight tracking-tight">
              Metro Coding Kids
            </span>
            <span className="block text-[11px] font-medium text-[#1B4332]/75 leading-none">
              Eksplorasi • Logika • Game
            </span>
          </div>
        </Link>

        {/* Status Pill & WA CTA */}
        <div className="flex items-center gap-2">
          <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF5EA] border border-[#BCE1B7] text-[#1B4332] text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7CB342] animate-pulse" />
            <span>Batch Dibuka</span>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Halo CS Metro Coding Kids, saya ingin tanya informasi pendaftaran kelas koding anak."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1B4332] text-white text-xs font-semibold hover:bg-[#275a45] transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Tanya CS</span>
          </a>
        </div>
      </div>
    </header>
  );
}
