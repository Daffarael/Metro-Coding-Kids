import React from "react";
import Image from "next/image";
import { Gamepad2, Users, HeartHandshake, Sparkles } from "lucide-react";

export default function ClassAtmosphere() {
  const scrollToForm = () => {
    const el = document.getElementById("form-pendaftaran");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const values = [
    {
      tag: "SEMI-PRIVAT",
      title: "Maksimal 6 Anak",
      desc: "Semi-privat terpantau",
      bg: "bg-[#F5BA13]",
      textColor: "text-[#143D2B]",
      tagColor: "text-[#143D2B] font-black",
      iconBg: "bg-[#143D2B] text-[#F5BA13]",
      rotate: "-4deg",
      icon: Users,
    },
    {
      tag: "KARYA NYATA",
      title: "Game Karya Sendiri",
      desc: "Bisa dimainkan keluarga",
      bg: "bg-[#EE4C23]",
      textColor: "text-white",
      tagColor: "text-white font-black",
      iconBg: "bg-white text-[#EE4C23]",
      rotate: "4deg",
      icon: Gamepad2,
    },
    {
      tag: "RAMAH & SABAR",
      title: "Mentor Bersahabat",
      desc: "Bebas bertanya tanpa takut",
      bg: "bg-[#2563EB]",
      textColor: "text-white",
      tagColor: "text-white font-black",
      iconBg: "bg-white text-[#2563EB]",
      rotate: "-3deg",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="px-5 py-8 bg-[#F7F5EE]">
      {/* Dynamic Marketing Hook Headline Matching Section 1 & 2 */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2.5">
          Suasana Pembelajaran
        </span>
        <h2
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#143D2B] tracking-tight leading-tight"
        >
          <span>Belajar Coding Sambil</span>{" "}
          <span
            style={{ transform: "rotate(-2deg)" }}
            className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#EE4C23] text-white font-black"
          >
            Berkreasi!
          </span>
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Susun blok kode logika, gerakan karakter, dan wujudkan game impiannya bersama teman sebaya.
        </p>
      </div>

      {/* Showcase Visual Card - Bold & Rounded Matching Pillars Style */}
      <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-white border-2 border-[#143D2B]/10 shadow-none mb-4">
        <div className="relative aspect-[575/295] w-full bg-[#E2F3E7] overflow-hidden">
          <Image
            src="/images/class-kids.png"
            alt="Suasana Belajar Coding Anak di Metro Coding Kids"
            fill
            sizes="(max-width: 540px) 100vw, 540px"
            unoptimized
            className="object-cover object-center"
          />
          {/* Top-Right Tilted Sticker */}
          <div
            style={{ transform: "rotate(4deg)" }}
            className="absolute top-3 right-3 px-3.5 py-1.5 rounded-2xl bg-[#F5BA13] text-[#143D2B] font-heading font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-none select-none z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#143D2B]" />
            <span>100% PRAKTIK</span>
          </div>
        </div>

        {/* Text Content with Rich Accent - Perfectly Balanced & Centered */}
        <div className="p-6 sm:p-7 bg-white border-t-2 border-[#143D2B]/10 text-center flex flex-col items-center">
          <h3
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            className="font-black text-xl sm:text-2xl md:text-[26px] text-[#143D2B] tracking-tight leading-snug mb-2.5 max-w-xl"
          >
            <span>Praktik Langsung, </span>
            <span className="text-[#EE4C23]">Bukan Teori Membosankan!</span>
          </h3>

          <p className="text-[#1E293B] text-xs sm:text-sm md:text-base font-semibold leading-relaxed max-w-lg mx-auto text-balance">
            Sejak pertemuan pertama, anak langsung diajak menyusun blok kode logika dan melihat animasi ciptaannya bergerak hidup di layar komputer atau tablet.
          </p>
        </div>
      </div>

      {/* 3 Bold Kid-Coding Value Cards - Matching Pillars Proyek Card Palette */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
        {values.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              onClick={scrollToForm}
              className={`p-3.5 sm:p-5 rounded-2xl sm:rounded-[24px] ${item.bg} ${item.textColor} flex flex-col justify-between shadow-none min-h-[135px] sm:min-h-[150px] cursor-pointer hover:-translate-y-1 transition-all duration-200 select-none`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className={`text-[10px] sm:text-[11px] font-black tracking-wider uppercase font-nunito ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div
                    style={{ transform: `rotate(${item.rotate})` }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
                  </div>
                </div>
                <h4 className="font-heading font-black text-sm sm:text-base md:text-lg leading-tight tracking-tight mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
