"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah anak harus punya laptop berspesifikasi tinggi?",
      a: "Sama sekali tidak perlu laptop canggih atau laptop gaming. Laptop standar biasa dengan koneksi internet dan browser Google Chrome sudah sangat cukup untuk menjalankan platform belajar Scratch dan Roblox. Untuk kelas Junior, anak bahkan bisa mulai menggunakan tablet.",
    },
    {
      q: "Bagaimana jika anak belum lancar mengetik di keyboard?",
      a: "Tidak masalah sama sekali. Khususnya pada kelas Junior (6-8 tahun), kurikulum kami berbasis visual block drag-and-drop (seperti menyusun kepingan puzzle). Anak tidak dituntut mengetik panjang, justru metode ini melatih koordinasi motorik dan nalar anak secara bertahap.",
    },
    {
      q: "Berapa lama durasi tiap pertemuan dan jadwal kelasnya?",
      a: "Program intensif ini terdiri dari 8 sesi pertemuan, dengan durasi 60-75 menit per sesi. Pilihan jadwal tersedia di akhir pekan (Sabtu/Minggu) maupun sore hari pada hari kerja, sehingga tidak bentrok dengan jam sekolah anak.",
    },
    {
      q: "Apakah kelas diadakan tatap muka atau online?",
      a: "Tersedia pilihan kelas tatap muka (offline) di Kota Metro, Lampung, maupun kelas online interaktif via Zoom untuk peserta dari luar kota. Kedua format sama-sama dibatasi maksimal 6 anak per sesi agar mentor fokus mendampingi.",
    },
    {
      q: "Jika anak berhalangan hadir karena sakit, apakah ada sesi pengganti?",
      a: "Tentu ada. Kami menyediakan sesi makeup class (kelas pengganti) dengan jadwal yang disepakati bersama mentor, sehingga si kecil tidak akan kehilangan tahapan proyek pembuatan gamenya.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="px-5 py-8 bg-white border-b border-[#1B4332]/10">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold text-[#1B4332] uppercase tracking-wider bg-[#EBF5EA] border border-[#BCE1B7] px-3.5 py-1 rounded-full inline-block mb-2">
          Tanya Jawab
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#1B4332] tracking-tight">
          Pertanyaan Umum Orang Tua
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Informasi transparan seputar teknis kelas, perangkat, dan jadwal belajar si kecil.
        </p>
      </div>

      <div className="space-y-2.5">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? "bg-[#EBF5EA]/50 border-[#BCE1B7] shadow-2xs"
                  : "bg-white border-slate-200 hover:border-[#1B4332]/20"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
              >
                <span className="font-extrabold text-xs sm:text-sm text-[#1B4332] leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#1B4332] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-[#334155] text-xs leading-relaxed border-t border-[#1B4332]/10">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
