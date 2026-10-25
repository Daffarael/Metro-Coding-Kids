"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

export interface AccordionItemData {
  id?: string | number;
  title: string;
  content: React.ReactNode;
}

export interface AnimatedAccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  defaultOpen?: boolean;
}

export function AnimatedAccordionItem({
  title,
  children,
  isOpen: controlledIsOpen,
  onToggle,
  defaultOpen = false,
}: AnimatedAccordionItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
    if (!isControlled) {
      setInternalIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="py-3.5 border-b border-[#E6E1D1] transition-colors">
      {/* ── TRIGGER BUTTON ── */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={handleToggle}
        suppressHydrationWarning
        style={{ transform: "none" }}
        className="no-pop w-full text-left flex items-center justify-between gap-3 cursor-pointer py-1 group select-none focus:outline-none"
      >
        <span
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          className={`font-black text-xs sm:text-sm leading-snug transition-colors duration-300 ${
            isOpen
              ? "text-[#EE4C23]"
              : "text-[#143D2B] group-hover:text-[#EE4C23]"
          }`}
        >
          {title}
        </span>

        {/* ── ROTASI IKON (0deg -> 45deg) ── */}
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] select-none shadow-none ${
            isOpen
              ? "bg-[#EE4C23] text-white"
              : "bg-[#F5BA13] text-[#143D2B] group-hover:scale-105"
          }`}
        >
          <span
            className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
          </span>
        </div>
      </button>

      {/* ── KONTEN DENGAN ANIMASI CSS GRID ── */}
      <div
        className={`grid transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {/* Child pembungkus wajib overflow-hidden */}
        <div className="overflow-hidden">
          <div
            className={`pt-2 pb-2 text-[#334155] text-xs sm:text-sm leading-relaxed max-w-lg font-medium transition-all duration-300 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
