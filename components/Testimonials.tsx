import React from "react";
import { Star, Quote } from "lucide-react";

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
    <section className="px-5 py-7 bg-white border-b border-slate-200/80">
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
          Cerita Orang Tua
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143E2C] tracking-tight">
          Apa Kata Para Orang Tua?
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Pengalaman nyata para orang tua yang telah mengarahkan minat digital si kecil menjadi karya nyata.
        </p>
      </div>

      <div className="space-y-3">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#F8FAF7] border border-slate-200/80 shadow-2xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                {rev.classTaken}
              </span>
            </div>

            <p className="text-slate-700 text-xs leading-relaxed italic mb-3">
              &ldquo;{rev.text}&rdquo;
            </p>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
              <div className="w-7 h-7 rounded-full bg-[#143E2C] text-white flex items-center justify-center font-bold text-xs">
                {rev.name[0]}
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900 leading-tight">
                  {rev.name}
                </div>
                <div className="text-[10px] text-slate-500">{rev.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
