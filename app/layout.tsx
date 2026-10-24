import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Patrick_Hand, Nunito, Poppins } from "next/font/google";
import "./globals.css";

const moreSugar = localFont({
  src: "../public/fonts/MoreSugar-Regular.ttf",
  variable: "--font-more-sugar",
  display: "swap",
  declarations: [
    { prop: "unicode-range", value: "U+0000-0025, U+0027-FFFF" },
  ],
  fallback: ["var(--font-poppins)", "var(--font-jakarta)", "sans-serif"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metro Coding Kids | Kursus Koding Anak & Remaja Usia 8-18 Tahun",
  description:
    "4 Core Programs: Code & Game, Creative Technology, Digital Creator, dan Future Tech. Belajar Logic, Coding, Game, AI, Web/App & Automation dalam kelas semi-privat maksimal 6 anak.",
  keywords: [
    "kursus koding anak",
    "coding kids",
    "metro coding kids",
    "code and game",
    "creative technology",
    "digital creator",
    "future tech",
    "belajar coding anak",
    "kursus koding jakarta barat",
    "kursus koding bandung",
    "les koding jakarta",
  ],
  openGraph: {
    title: "Metro Coding Kids - 4 Core Programs Koding Anak & Remaja (8-18 Tahun)",
    description:
      "Kursus koding interaktif untuk usia 8-18 tahun. 4 Core Programs: Code & Game, Creative Technology, Digital Creator, dan Future Tech. Kuota terbatas 6 anak per kelas.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${moreSugar.variable} ${patrickHand.variable} ${nunito.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#EDF4EC] font-sans text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
