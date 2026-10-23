"use client";

import React from "react";
import Link from "next/link";
import { Star, MessageCircle } from "lucide-react";

interface NavbarProps {
  whatsappNumber?: string;
}

export default function Navbar({ whatsappNumber = "6282382872411" }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#F7F5EE]/95 backdrop-blur-md border-b border-[#E6E1D1] px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#143D2B] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            M/
          </div>
          <div>
            <span className="block font-heading text-[#143D2B] text-base sm:text-lg leading-tight tracking-tight">
              Metro
            </span>
            <span className="block font-heading text-[#143D2B] text-base sm:text-lg leading-none tracking-tight">
              Coding Kids
            </span>
          </div>
        </Link>

        {/* Center Star Doodle */}
        <div className="hidden xs:flex items-center justify-center text-[#143D2B]">
          <Star className="w-5 h-5 stroke-[1.8] fill-none" />
        </div>

        {/* Right Status Pill & WA CTA */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6E1D1] text-[#143D2B] text-[11px] font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#EE4C23]" />
            <span className="tracking-wide uppercase text-[10px]">Kelas Usia 6 - 15 Thn</span>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Halo CS Metro Coding Kids, saya ingin tanya info pendaftaran kelas koding anak."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-[#143D2B] text-white text-xs font-bold hover:bg-[#1E523A] transition-colors shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>CS</span>
          </a>
        </div>
      </div>
    </header>
  );
}
