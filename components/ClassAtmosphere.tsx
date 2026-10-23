import React from "react";
import Image from "next/image";
import { Gamepad2, Users, HeartHandshake, Sparkles } from "lucide-react";

export default function ClassAtmosphere() {
  return (
    <section className="px-5 py-7 bg-[#F4FAF2]">
      <div className="text-center mb-5">
        <span className="text-xs font-semibold text-[#1B4332] uppercase tracking-wider bg-[#EBF5EA] border border-[#BCE1B7] px-3.5 py-1 rounded-full inline-block mb-2">
          Suasana Pembelajaran
        </span>
        <div className="flex items-center justify-center gap-2 flex-wrap mb-1">
          <h2 className="text-2xl sm:text-3xl font-heading text-[#1B4332] tracking-tight">
            Belajar Coding Sambil
          </h2>
          <span className="px-4 py-0.5 rounded-full bg-[#1B4332] text-white font-heading text-xl sm:text-2xl shadow-xs inline-flex items-center gap-1.5">
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
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#1B4332]/12 shadow-sm mb-4">
        <div className="relative aspect-[575/285] w-full bg-[#EBF5EA]">
          <Image
            src="/images/class-kids.png"
            alt="Suasana Belajar Coding Anak di Metro Coding Kids"
            fill
            sizes="(max-width: 500px) 100vw, 480px"
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#1B4332] shrink-0" />
            <h3 className="font-extrabold text-[#1B4332] text-sm sm:text-base">
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
        <div className="p-3 rounded-2xl bg-white border border-[#1B4332]/12 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#EBF5EA] text-[#1B4332] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-[#1B4332]">Maksimal 6 Anak</div>
            <div className="text-[10px] text-slate-500">Semi-privat terpantau</div>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-white border border-[#1B4332]/12 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#F35D25] flex items-center justify-center shrink-0">
            <Gamepad2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-[#1B4332]">Game Karya Sendiri</div>
            <div className="text-[10px] text-slate-500">Bisa dimainkan keluarga</div>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-white border border-[#1B4332]/12 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0A5CB8] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-[#1B4332]">Mentor Sabar & Ramah</div>
            <div className="text-[10px] text-slate-500">Bebas bertanya tanpa takut</div>
          </div>
        </div>
      </div>
    </section>
  );
}
