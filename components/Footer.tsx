import React from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

interface FooterProps {
  whatsappNumber?: string;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="px-5 pt-2 pb-24 sm:pb-8 bg-transparent text-center">
      <div className="flex items-center justify-center gap-1.5">
        <p className="text-xs sm:text-[13px] text-[#143D2B]/60 font-medium font-nunito tracking-wide">
          &copy; 2026 Metro Coding Kids. All rights reserved.
        </p>
        <Link
          href="/admin"
          className="text-[#143D2B]/20 hover:text-[#143D2B]/60 transition-colors p-1"
          title="Admin Portal"
          aria-label="Admin Portal"
        >
          <Lock className="w-3 h-3" />
        </Link>
      </div>
    </footer>
  );
}
