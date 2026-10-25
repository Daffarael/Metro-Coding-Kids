"use client";

import React from "react";
import { Check, Star, Gamepad2, Sparkles, Layers, Terminal, ArrowRight, Code } from "lucide-react";
import { PressDepth } from "@/components/ui/press-depth";
import { Amp } from "@/components/ui/amp";
import { ProgramItem, DEFAULT_PROGRAMS } from "@/lib/default-data";

function formatWithAmp(text: string) {
  if (!text || !text.includes("&")) return text;
  const parts = text.split("&");
  return (
    <>
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {part}
          {idx < parts.length - 1 && <Amp />}
        </React.Fragment>
      ))}
    </>
  );
}

interface ClassProgramsProps {
  onSelectClass?: (courseId: string) => void;
  programs?: ProgramItem[];
}

const COLOR_SCHEME_STYLES = {
  yellow: {
    tagBg: "bg-[#F5BA13] text-[#143D2B] border-2 border-[#143D2B]",
    fokusTagBg: "bg-[#143D2B] text-[#F5BA13]",
    badgeColor: "text-[#143D2B]",
    iconBg: "bg-[#F5BA13] text-[#143D2B]",
    iconBorder: "border-2 border-[#143D2B]",
    iconRotate: "-3deg",
    icon: Gamepad2,
    checkBg: "bg-[#143D2B] text-[#F5BA13]",
    cardBorder: "border-2 border-[#143D2B]",
    btnBg: "bg-[#143D2B] hover:bg-[#0f2e21] active:bg-[#0a2016] text-white",
    baseBg: "bg-[#0a2016]",
    arrowBg: "bg-[#F5BA13] text-[#143D2B]",
  },
  orange: {
    tagBg: "bg-[#EE4C23] text-white border-2 border-[#143D2B]",
    fokusTagBg: "bg-[#EE4C23] text-white",
    badgeColor: "text-[#EE4C23]",
    iconBg: "bg-[#EE4C23] text-white",
    iconBorder: "border-2 border-[#143D2B]",
    iconRotate: "3deg",
    icon: Sparkles,
    checkBg: "bg-[#EE4C23] text-white",
    cardBorder: "border-[3px] border-[#EE4C23]",
    btnBg: "bg-[#EE4C23] hover:bg-[#d93f18] active:bg-[#c23612] text-white",
    baseBg: "bg-[#b83310]",
    arrowBg: "bg-white text-[#EE4C23]",
  },
  blue: {
    tagBg: "bg-[#3B5EDB] text-white border-2 border-[#3B5EDB]",
    fokusTagBg: "bg-[#3B5EDB] text-white",
    badgeColor: "text-[#3B5EDB]",
    iconBg: "bg-[#3B5EDB] text-white",
    iconBorder: "border-2 border-[#3B5EDB]",
    iconRotate: "-3deg",
    icon: Layers,
    checkBg: "bg-[#3B5EDB] text-white",
    cardBorder: "border-2 border-[#3B5EDB]",
    btnBg: "bg-[#3B5EDB] hover:bg-[#2e4bb8] active:bg-[#253f9e] text-white",
    baseBg: "bg-[#243d9e]",
    arrowBg: "bg-white text-[#3B5EDB]",
  },
  green: {
    tagBg: "bg-[#143D2B] text-[#F5BA13] border-2 border-[#F5BA13]",
    fokusTagBg: "bg-[#143D2B] text-[#F5BA13]",
    badgeColor: "text-[#143D2B]",
    iconBg: "bg-[#143D2B] text-[#F5BA13]",
    iconBorder: "border-2 border-[#F5BA13]",
    iconRotate: "3deg",
    icon: Terminal,
    checkBg: "bg-[#143D2B] text-[#F5BA13]",
    cardBorder: "border-2 border-[#143D2B]",
    btnBg: "bg-[#143D2B] hover:bg-[#0f2e21] active:bg-[#0a2016] text-white",
    baseBg: "bg-[#0a2016]",
    arrowBg: "bg-[#F5BA13] text-[#143D2B]",
  },
};

export default function ClassPrograms({
  onSelectClass,
  programs = DEFAULT_PROGRAMS,
}: ClassProgramsProps) {
  // Hanya tampilkan program yang aktif dan diurutkan
  const activePrograms = (programs || DEFAULT_PROGRAMS)
    .filter((p) => p.isActive !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const handleSelect = (courseId: string) => {
    if (onSelectClass) {
      onSelectClass(courseId);
    }
    const formElement = document.getElementById("form-pendaftaran");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="program-kelas" className="px-5 py-8 bg-[#F7F5EE]">
      {/* 1. Section Header Matching PainPoint & InspirationSection */}
      <div className="text-center mb-6 flex flex-col items-center">
        <span className="h-7 px-4 inline-flex items-center justify-center rounded-full bg-[#F5BA13] text-[#143D2B] font-nunito text-xs font-black uppercase tracking-wider mb-2.5 shadow-none">
          <span className="translate-y-[1px]">{activePrograms.length} Core Programs</span>
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#143D2B] tracking-tight leading-[1.2] max-w-xl text-center">
          Pilihan Program{" "}
          <span className="text-[#EE4C23] inline-block relative font-heading">
            Sesuai Usia
            <svg
              aria-hidden="true"
              viewBox="0 0 220 18"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-[#f15a29]"
              fill="none"
            >
              <path
                d="M4 11C60 6 150 7 216 10"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-[#143D2B] text-xs sm:text-sm md:text-base font-bold mt-3.5 max-w-lg leading-relaxed text-center">
          Kurikulum terstruktur mulai usia 8 hingga 18 tahun: Logic, Coding, Game, AI, Web/App, hingga Automasi Modern.
        </p>
      </div>



      {/* 3. Program Detail Cards */}
      <div className="space-y-4">
        {activePrograms.map((item) => {
          const style = COLOR_SCHEME_STYLES[item.colorScheme] || COLOR_SCHEME_STYLES.yellow;
          const IconComp = style.icon || Code;

          return (
            <div
              key={item.id}
              className={`relative rounded-[32px] sm:rounded-[36px] p-5 sm:p-7 bg-white ${style.cardBorder} shadow-md transition-all duration-200 select-none`}
            >
              {/* Header Row: Age Pill & Sticker / Icon */}
              <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                <span className={`px-3 py-1 inline-flex items-center justify-center rounded-full font-nunito text-[11px] sm:text-xs font-black uppercase tracking-wide whitespace-nowrap shrink-0 ${style.tagBg}`}>
                  <span>{item.age}</span>
                </span>

                {item.highlight ? (
                  <div
                    style={{ transform: "rotate(2deg)" }}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl bg-[#F5BA13] text-[#143D2B] font-heading font-black text-[11px] sm:text-xs flex items-center gap-1 sm:gap-1.5 border-2 border-[#143D2B] shadow-sm select-none whitespace-nowrap shrink-0"
                  >
                    <Star className="w-3.5 h-3.5 fill-[#143D2B] text-[#143D2B] shrink-0" />
                    <span>PALING DIMINATI</span>
                  </div>
                ) : (
                  <div
                    style={{ transform: `rotate(${style.iconRotate})` }}
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl ${style.iconBg} ${style.iconBorder} flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                )}
              </div>

              {/* Title & Stage Kicker */}
              <div className="mb-2.5">
                <span className={`text-xs font-black uppercase tracking-wider font-nunito block mb-1 ${style.badgeColor}`}>
                  {formatWithAmp(item.badge)}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#143D2B] tracking-tight leading-tight">
                  {formatWithAmp(item.title)}
                </h3>
              </div>

              {/* Fokus Row */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`h-6 px-2.5 inline-flex items-center justify-center rounded-full ${style.fokusTagBg} font-nunito font-black text-[10px] uppercase tracking-wider shrink-0 shadow-none`}>
                  <span className="translate-y-[0.5px]">FOKUS</span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#143D2B]">
                  {formatWithAmp(item.focus)}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm font-semibold text-[#143D2B] leading-relaxed mb-4">
                {formatWithAmp(item.desc)}
              </p>

              {/* Checkpoints with Solid Colors */}
              <div className="space-y-2 pt-3.5 border-t-2 border-[#143D2B]/15">
                {item.points && item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#143D2B] font-bold">
                    <div className={`w-5 h-5 rounded-full ${style.checkBg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{formatWithAmp(pt)}</span>
                  </div>
                ))}
              </div>

              {/* Card Action Button */}
              <PressDepth
                type="button"
                onClick={() => handleSelect(item.id)}
                containerClassName="w-full mt-5"
                baseBg={style.baseBg}
                className={`w-full py-3 px-3 sm:py-3.5 sm:px-4 ${style.btnBg} font-heading font-black text-[11px] sm:text-sm flex items-center justify-between gap-2 border-none shadow-md`}
              >
                <span className="text-left leading-snug">{formatWithAmp(`Konsultasi & Pilih ${item.title}`)}</span>
                <div className={`w-6 h-6 rounded-full ${style.arrowBg} flex items-center justify-center shrink-0 ml-1`}>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </PressDepth>
            </div>
          );
        })}
      </div>

      {/* 4. Action Trigger CTA Button */}
      <div className="mt-8 flex justify-center w-full px-1">
        <PressDepth
          type="button"
          onClick={() => {
            const el = document.getElementById("form-pendaftaran");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          containerClassName="w-full sm:w-auto"
          baseBg="bg-[#b83310]"
          className="w-full sm:w-auto py-4 px-6 sm:px-8 bg-[#EE4C23] text-white font-heading font-black text-base sm:text-lg shadow-lg flex items-center justify-center gap-2.5 sm:gap-3 hover:bg-[#d93f18] border-none"
        >
          <span className="text-center">{formatWithAmp("Pilih Kelas & Daftarkan Si Kecil")}</span>
          <div className="w-6 h-6 rounded-full bg-white text-[#EE4C23] flex items-center justify-center shrink-0">
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </PressDepth>
      </div>
    </section>
  );
}
