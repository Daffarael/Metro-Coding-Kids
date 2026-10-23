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
    <section className="px-5 py-7 bg-white border-b border-[#1B4332]/10">
      <div className="text-center mb-5">
        <span className="text-xs font-semibold text-[#1B4332] uppercase tracking-wider bg-[#EBF5EA] border border-[#BCE1B7] px-3.5 py-1 rounded-full inline-block mb-2">
          Cerita Orang Tua
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#1B4332] tracking-tight">
          Apa Kata Para Orang Tua?
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Pengalaman nyata para orang tua yang telah mengarahkan minat digital si kecil menjadi karya nyata.
        </p>
      </div>

      <div className="space-y-3">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#F4FAF2] border border-[#1B4332]/10 shadow-2xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FAB818] text-[#FAB818]" />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-[#1B4332] bg-[#EBF5EA] border border-[#BCE1B7] px-2 py-0.5 rounded-full">
                {rev.classTaken}
              </span>
            </div>

            <p className="text-[#334155] text-xs leading-relaxed italic mb-3">
              &ldquo;{rev.text}&rdquo;
            </p>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-[#1B4332]/10">
              <span className="font-extrabold text-[#1B4332]">{rev.name}</span>
              <span className="text-[11px] text-slate-500">{rev.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
