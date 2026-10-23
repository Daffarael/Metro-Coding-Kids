import React from "react";
import Image from "next/image";
import { Gamepad2, Users, HeartHandshake, Sparkles } from "lucide-react";

export default function ClassAtmosphere() {
  return (
    <section className="px-5 py-8 bg-[#F7F5EE]">
      <div className="text-center mb-5">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2 shadow-2xs">
          Suasana Pembelajaran
        </span>
        <div className="flex items-center justify-center gap-2 flex-wrap mb-1">
          <h2 className="text-2xl sm:text-3xl font-heading text-[#143D2B] tracking-tight">
            Belajar Coding Sambil
          </h2>
          <span className="px-4 py-0.5 rounded-full bg-[#143D2B] text-white font-heading text-xl sm:text-2xl shadow-xs inline-flex items-center gap-1.5">
            Berkreasi
            <span className="text-sm select-none" role="img" aria-label="kreatif">
              🎨
            </span>
          </span>
        </div>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Susun blok kode, gerakan karakter, dan ciptakan cerita interaktif yang menyenangkan.
        </p>
      </div>

      {/* Showcase Visual Card */}
      <div className="rounded-3xl overflow-hidden bg-white border border-[#143D2B]/10 shadow-md mb-4">
        <div className="relative aspect-[575/285] w-full bg-[#E2F3E7]">
          <Image
            src="/images/class-kids.png"
            alt="Suasana Belajar Coding Anak di Metro Coding Kids"
            fill
            sizes="(max-width: 540px) 100vw, 540px"
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#EE4C23] shrink-0" />
            <h3 className="font-extrabold text-[#143D2B] text-sm sm:text-base">
              Praktik Langsung, Bukan Teori Membosankan
            </h3>
          </div>
          <p className="text-[#334155] text-xs leading-relaxed">
            Sejak pertemuan pertama, anak langsung menyusun blok kode logika dan melihat animasi buatannya bergerak hidup di layar komputer atau tablet.
          </p>
        </div>
      </div>

      {/* 3 Value Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="p-3.5 rounded-2xl bg-white border border-[#143D2B]/10 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E2F3E7] text-[#143D2B] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-[#143D2B]">Maksimal 6 Anak</div>
            <div className="text-[10px] text-slate-500">Semi-privat terpantau</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#143D2B]/10 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#EE4C23] flex items-center justify-center shrink-0">
            <Gamepad2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-[#143D2B]">Game Karya Sendiri</div>
            <div className="text-[10px] text-slate-500">Bisa dimainkan keluarga</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#143D2B]/10 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#3B5EDB] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-[#143D2B]">Mentor Ramah</div>
            <div className="text-[10px] text-slate-500">Bebas bertanya tanpa takut</div>
          </div>
        </div>
      </div>
    </section>
  );
}
