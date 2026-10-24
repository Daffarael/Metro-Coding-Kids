import React from "react";

interface FooterProps {
  whatsappNumber?: string;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="px-5 pt-2 pb-24 sm:pb-8 bg-transparent text-center">
      <p className="text-xs sm:text-[13px] text-[#143D2B]/60 font-medium font-nunito tracking-wide">
        &copy; 2026 Metro Coding Kids. All rights reserved.
      </p>
    </footer>
  );
}
