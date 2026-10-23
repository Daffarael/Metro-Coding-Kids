import React from "react";
import Image from "next/image";
import { Gamepad2, Users, HeartHandshake, Sparkles } from "lucide-react";

export default function ClassAtmosphere() {
  return (
    <section className="px-5 py-7 bg-[#F8FAF7]">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
          Suasana Pembelajaran
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143E2C] tracking-tight">
          Belajar Koding Sambil Berkreasi
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Suasana kelas interaktif, ceria, dan dirancang khusus agar anak betah bereksplorasi.
        </p>
      </div>

      {/* Showcase Visual Card */}
      <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm mb-4">
        <div className="relative aspect-[4/3] w-full bg-slate-100">
          <Image
            src="/images/class-showcase.png"
            alt="Suasana Belajar Coding Anak di Metro Coding Kids"
            fill
            sizes="(max-width: 500px) 100vw, 490px"
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
            <h3 className="font-bold text-slate-900 text-sm">
              Praktik Langsung, Bukan Teori Membosankan
            </h3>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            Sejak pertemuan pertama, anak langsung menyusun blok kode logika dan melihat animasi buatannya bergerak hidup di layar komputer/tablet.
          </p>
        </div>
      </div>

      {/* 3 Value Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-slate-900">Maksimal 6 Anak</div>
            <div className="text-[10px] text-slate-500">Semi-privat terpantau</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
            <Gamepad2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-slate-900">Game Karya Sendiri</div>
            <div className="text-[10px] text-slate-500">Bisa dimainkan keluarga</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-xs text-slate-900">Mentor Ramah & Sabar</div>
            <div className="text-[10px] text-slate-500">Bebas bertanya tanpa takut</div>
          </div>
        </div>
      </div>
    </section>
  );
}
