import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Bunda Maya",
      role: "Orang Tua dari Arkan (8 Tahun)",
      classTaken: "Junior Game Maker",
      classTag: "bg-[#F5BA13] text-[#143D2B]",
      avatarBg: "bg-[#F5BA13] text-[#143D2B]",
      avatarInitials: "BM",
      avatarRotate: "-4deg",
      text: "Dulu anak saya kalau pegang tablet cuma nonton video berjam-jam. Setelah ikut Metro Coding Kids, dia sekarang bangga banget nunjukin game buatan sendiri ke keluarga. Screen time jadi produktif!",
    },
    {
      name: "Ayah Hendra",
      role: "Orang Tua dari Rasya (11 Tahun)",
      classTaken: "Explorer Coder",
      classTag: "bg-[#EE4C23] text-white",
      avatarBg: "bg-[#EE4C23] text-white",
      avatarInitials: "AH",
      avatarRotate: "4deg",
      text: "Metode belajarnya visual dan sangat seru. Mentornya sabar dan telaten memandu anak sampai paham. Kelasnya semi-privat jadi tiap anak benar-benar diperhatikan.",
    },
    {
      name: "Bunda Citra",
      role: "Orang Tua dari Kayla (13 Tahun)",
      classTaken: "Master Creator Kid",
      classTag: "bg-[#2563EB] text-white",
      avatarBg: "bg-[#2563EB] text-white",
      avatarInitials: "BC",
      avatarRotate: "-3deg",
      text: "Kayla yang tadinya pemalu jadi jauh lebih percaya diri saat mempresentasikan hasil karya game kodingnya. Kemampuan logika berpikir dan problem solving-nya terasa sekali meningkat.",
    },
  ];

  return (
    <section className="px-5 py-8 bg-[#F7F5EE]">
      {/* Dynamic Section Header Matching Pillars & Facilities */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2.5">
          Cerita Orang Tua
        </span>
        <h2
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
        >
          <span>Apa Kata</span>{" "}
          <span
            style={{ transform: "rotate(-2deg)" }}
            className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
          >
            Orang Tua?
          </span>
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Pengalaman nyata para orang tua yang telah mengarahkan minat digital si kecil menjadi karya nyata.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="space-y-3.5 sm:space-y-4">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] bg-white border-2 border-[#143D2B]/12 shadow-none hover:-translate-y-1 hover:border-[#143D2B]/25 transition-all duration-200 select-none"
          >
            {/* Top Row: 5 Stars Rating */}
            <div className="flex items-center gap-1 bg-[#F5BA13]/15 px-2.5 py-1 rounded-full w-fit mb-3.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F5BA13] text-[#F5BA13]" />
              ))}
              <span className="text-xs font-black text-[#143D2B] ml-1 font-nunito">5.0</span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed mb-4">
              &ldquo;{rev.text}&rdquo;
            </p>

            {/* Author Info with Colorful Squircle Avatar */}
            <div className="flex items-center gap-3 pt-3.5 border-t border-[#143D2B]/10">
              <div
                style={{ transform: `rotate(${rev.avatarRotate})` }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${rev.avatarBg} flex items-center justify-center font-black text-xs sm:text-sm font-nunito shadow-none shrink-0`}
              >
                {rev.avatarInitials}
              </div>
              <div>
                <h4
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  className="font-black text-xs sm:text-sm text-[#143D2B] leading-tight"
                >
                  {rev.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#64748B] font-semibold mt-0.5">
                  {rev.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

