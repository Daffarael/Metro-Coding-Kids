import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Bunda Maya",
      role: "Orang Tua dari Arkan (8 Tahun)",
      classTaken: "Junior Game Maker",
      text: "Dulu anak saya kalau pegang tablet cuma nonton video berjam-jam. Setelah ikut Metro Coding Kids, dia sekarang bangga banget nunjukin game buatan sendiri ke keluarga. Screen time jadi produktif!",
    },
    {
      name: "Ayah Hendra",
      role: "Orang Tua dari Rasya (11 Tahun)",
      classTaken: "Explorer Coder",
      text: "Metode belajarnya visual dan sangat seru. Mentornya sabar dan telaten memandu anak sampai paham. Kelasnya semi-privat jadi tiap anak benar-benar diperhatikan.",
    },
    {
      name: "Bunda Citra",
      role: "Orang Tua dari Kayla (13 Tahun)",
      classTaken: "Master Creator",
      text: "Kayla yang tadinya pemalu jadi jauh lebih percaya diri saat mempresentasikan hasil karya game kodingnya. Kemampuan logika berpikir dan problem solving-nya terasa sekali meningkat.",
    },
  ];

  return (
    <section className="px-5 py-8 bg-[#F7F5EE]">
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2 shadow-2xs">
          Cerita Orang Tua
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
          Apa Kata Para Orang Tua?
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Pengalaman nyata para orang tua yang telah mengarahkan minat digital si kecil menjadi karya nyata.
        </p>
      </div>

      <div className="space-y-3.5">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-5 rounded-3xl bg-white border border-[#143D2B]/10 shadow-xs"
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5BA13] text-[#F5BA13]" />
                ))}
              </div>
              <span className="text-[10px] font-black text-[#143D2B] bg-[#E2F3E7] px-2.5 py-0.5 rounded-full border border-[#143D2B]/10">
                {rev.classTaken}
              </span>
            </div>

            <p className="text-[#334155] text-xs leading-relaxed italic mb-3.5">
              &ldquo;{rev.text}&rdquo;
            </p>

            <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
              <span className="font-extrabold text-[#143D2B]">{rev.name}</span>
              <span className="text-[11px] text-slate-500">{rev.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
