import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Patrick_Hand } from "next/font/google";
import "./globals.css";

const moreSugar = localFont({
  src: "../public/fonts/MoreSugar-Regular.ttf",
  variable: "--font-more-sugar",
  display: "swap",
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

export const metadata: Metadata = {
  title: "Metro Coding Kids | Kursus Koding Anak Usia 6-15 Tahun",
  description:
    "Bukan cuma bermain game, anak bisa menciptakan game pertamanya sendiri! Kursus koding anak interaktif dengan Scratch, Roblox, dan Python. Kuota terbatas 6 anak per kelas.",
  keywords: [
    "kursus koding anak",
    "coding kids",
    "metro coding kids",
    "belajar coding anak",
    "scratch game maker",
    "roblox coding",
    "les koding metro",
  ],
  openGraph: {
    title: "Metro Coding Kids - Anak Bisa Membuat Game Sendiri",
    description:
      "Kursus koding interaktif untuk anak usia 6-15 tahun. Kuota terbatas 6 anak per kelas. Amankan kursi belajar si kecil sekarang!",
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
      className={`${jakarta.variable} ${moreSugar.variable} ${patrickHand.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#EDF4EC] font-sans text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
