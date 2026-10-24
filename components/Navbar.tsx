"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  whatsappNumber?: string;
  onEnrollClick?: () => void;
}

export default function Navbar({
  whatsappNumber = "6282382872411",
  onEnrollClick,
}: NavbarProps) {
  const handleEnroll = () => {
    if (onEnrollClick) {
      onEnrollClick();
    } else {
      const el = document.getElementById("form-pendaftaran");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3 sm:py-3.5 shadow-[0_4px_20px_rgba(20,61,43,0.06)] transition-all">
      <div className="flex items-center justify-between gap-3">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/images/logo-rounded.png"
              alt="Metro Coding Kids"
              width={44}
              height={44}
              priority
              className="w-full h-full object-cover"
            />
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

        {/* Right Action: Enriched & Larger Daftarkan Si Kecil & WhatsApp Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            onClick={handleEnroll}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full bg-[#F5BA13] text-[#143D2B] text-xs sm:text-sm font-black tracking-wide shadow-none border-none cursor-pointer"
          >
            <span>Daftarkan Si Kecil</span>
            <div className="w-5 h-5 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center shrink-0">
              <ArrowRight className="w-3 h-3 stroke-[3]" />
            </div>
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Halo CS Metro Coding Kids, saya ingin tanya info pendaftaran kelas koding anak."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat WhatsApp CS"
            role="button"
            className="w-10 h-10 rounded-full bg-[#143D2B] text-white flex items-center justify-center shadow-none border-none shrink-0 cursor-pointer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.835 11.835 0 005.711 1.467h.005c6.554 0 11.89-5.335 11.893-11.894 0-3.18-1.238-6.166-3.49-8.418" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
