"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Star } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Apakah anak harus sudah pernah coding?",
      a: "Sama sekali tidak perlu! Kurikulum kami dirancang dari nol dengan metode visual block drag-and-drop yang ramah anak. Anak yang belum pernah pegang laptop pun akan dibimbing secara sabar sampai bisa membuat game pertamanya.",
    },
    {
      q: "Kelasnya online atau offline?",
      a: "Tersedia pilihan kelas tatap muka (offline) langsung di Kota Metro, Lampung, maupun kelas online interaktif via Zoom untuk peserta dari luar kota. Kedua format sama-sama semi-privat maksimal 6 anak per kelas.",
    },
    {
      q: "Perangkat apa yang dibutuhkan?",
      a: "Cukup laptop standar biasa atau komputer dengan koneksi internet dan browser Google Chrome. Untuk kelas Junior (usia 6-8 tahun), anak bahkan bisa mulai belajar dengan menggunakan tablet.",
    },
    {
      q: "Bagaimana cara mencoba kelas gratis?",
      a: "Cukup isi formulir pendaftaran singkat di atas dengan nama dan nomor WhatsApp Anda. Tim CS kami akan segera menghubungi untuk mengatur jadwal sesi perkenalan gratis bersama mentor.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const scrollToForm = () => {
    const el = document.getElementById("form-pendaftaran");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-6 bg-[#F7F5EE] py-8">
      {/* FAQ Section (Matching User Image 4) */}
      <section className="px-5">
        <div className="text-center mb-6">
          <span className="text-[11px] font-black text-[#3B5EDB] uppercase tracking-wider block mb-1">
            Yang Sering Ditanyakan
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
            Biar makin yakin.
          </h2>
        </div>

        {/* Clean Divider Accordion Rows */}
        <div className="divide-y divide-[#E6E1D1] border-y border-[#E6E1D1]">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-3.5 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-3 cursor-pointer py-1"
                >
                  <span className="font-extrabold text-xs sm:text-sm text-[#143D2B] leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#143D2B] text-white"
                        : "bg-[#E2F3E7] text-[#143D2B] hover:bg-[#cbe8d2]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[3]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-2 text-[#334155] text-xs leading-relaxed max-w-lg">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Blue Action Banner (Exact match to User Image 4 bottom) */}
      <section className="px-4 pt-4">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#3B5EDB] text-white p-7 sm:p-9 overflow-hidden text-center shadow-xl">
          {/* Top-Left Coral Orange Half Circle */}
          <div className="absolute -top-7 -left-7 w-20 h-20 rounded-full bg-[#EE4C23] pointer-events-none" />

          {/* Bottom-Right Golden Yellow Quarter Circle */}
          <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-[#F5BA13] pointer-events-none" />

          {/* Star doodle top right */}
          <div className="absolute top-4 right-5 text-[#F5BA13] opacity-90 pointer-events-none">
            <Star className="w-6 h-6 stroke-[2] fill-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-sm mx-auto">
            <span className="text-[11px] font-black text-[#F5BA13] uppercase tracking-wider block mb-2">
              Siap Melihat Anak Berkarya?
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading text-white tracking-tight leading-[1.15] mb-2.5">
              Mulai dari satu kelas yang seru.
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Biarkan anak mencoba, bertemu mentor, dan membuat proyek kecil pertamanya. Gratis dan tanpa komitmen.
            </p>

            {/* Bright Yellow Button */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#F5BA13] hover:bg-[#e2a809] active:scale-[0.99] text-[#143D2B] font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Coba Kelas Gratis</span>
              <div className="w-5 h-5 rounded-full bg-[#143D2B] text-white flex items-center justify-center">
                <ArrowRight className="w-3 h-3 stroke-[3]" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
