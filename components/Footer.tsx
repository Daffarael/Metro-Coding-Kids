import React from "react";
import Link from "next/link";
import { MessageCircle, MapPin, Lock } from "lucide-react";

interface FooterProps {
  whatsappNumber?: string;
}

export default function Footer({ whatsappNumber = "6282382872411" }: FooterProps) {
  return (
    <footer className="px-5 pt-8 pb-24 bg-[#143E2C] text-white">
      <div className="space-y-5">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-300 text-sm">
              MK
            </div>
            <span className="font-extrabold text-base tracking-tight">
              Metro Koding Kids
            </span>
          </div>
          <p className="text-emerald-100/70 text-xs leading-relaxed max-w-sm">
            Membekali generasi masa depan dengan keterampilan berpikir logis, daya cipta kreatif, dan problem solving melalui pemrograman game interaktif.
          </p>
        </div>

        {/* Contact info */}
        <div className="space-y-2.5 pt-3 border-t border-emerald-800/80 text-xs text-emerald-100/90">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-emerald-400 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <a
              href="https://instagram.com/metrokodingkids"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2"
            >
              @metrokodingkids
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              +62 823-8287-2411 (CS Konsultasi)
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Metro, Lampung & Sesi Online via Zoom</span>
          </div>
        </div>

        {/* Copyright and Admin access */}
        <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-[11px] text-emerald-200/60">
          <span>&copy; 2026 Metro Coding Kids.</span>
          <Link
            href="/admin"
            className="flex items-center gap-1 hover:text-emerald-100 transition-colors"
          >
            <Lock className="w-3 h-3" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
