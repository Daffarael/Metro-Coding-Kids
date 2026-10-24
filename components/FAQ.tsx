"use client";

import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { AnimatedAccordionItem } from "@/components/AnimatedAccordion";

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
      q: "Bagaimana cara mendaftar kelasnya?",
      a: "Cukup isi formulir pendaftaran singkat di atas dengan nama dan nomor WhatsApp Anda. Tim CS kami akan segera menghubungi untuk mengonfirmasi ketersediaan kursi dan jadwal belajar si kecil.",
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
      {/* FAQ Section */}
      <section className="px-5">
        {/* Section Header Matching Website Design System */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2.5 shadow-none font-nunito">
            Tanya Jawab
          </span>
          <h2
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
          >
            <span>Pertanyaan yang</span>{" "}
            <span
              style={{ transform: "rotate(-2deg)" }}
              className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
            >
              Sering Ditanyakan
            </span>
          </h2>
          <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Jawaban lengkap seputar metode belajar, jadwal kelas, dan persiapan perangkat si kecil.
          </p>
        </div>

        {/* Clean Divider Accordion Rows with 60fps CSS Grid Height Transition */}
        <div className="border-t border-[#E6E1D1] max-w-xl mx-auto">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <AnimatedAccordionItem
                key={idx}
                title={item.q}
                isOpen={isOpen}
                onToggle={() => toggle(idx)}
              >
                {item.a}
              </AnimatedAccordionItem>
            );
          })}
        </div>
      </section>

      {/* Blue Action Banner */}
      <section className="px-4 pt-4">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#3B5EDB] text-white p-7 sm:p-9 overflow-hidden text-center shadow-none border-2 border-[#3B5EDB]">
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
            <span className="text-[11px] font-black text-[#F5BA13] uppercase tracking-wider block mb-2 font-nunito">
              Siap Melihat Anak Berkarya?
            </span>
            <h2
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2.5"
            >
              Mulai dari satu kelas yang seru.
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Biarkan anak mencoba, bertemu mentor, dan membuat proyek kecil pertamanya bersama teman sebaya.
            </p>

            {/* Bright Yellow Button with Signature White Arrow Badge */}
            <button
              onClick={scrollToForm}
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              className="w-full sm:w-auto max-w-full inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-7 py-3.5 rounded-2xl bg-[#F5BA13] text-[#143D2B] font-black text-sm sm:text-lg shadow-none border-none cursor-pointer hover:bg-[#e0a90f] active:scale-[0.98] transition-all select-none"
            >
              <span className="tracking-wide text-center">Daftarkan Si Kecil Sekarang</span>
              <div className="w-6 h-6 rounded-full bg-[#143D2B] text-[#F5BA13] flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
