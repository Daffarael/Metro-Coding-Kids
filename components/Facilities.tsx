import React from "react";
import { Award, FolderGit2, Users2, BookOpen, ClipboardCheck, MessageSquareHeart } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Sertifikat Kelulusan Resmi",
      desc: "Bukti pencapaian dan apresiasi nyata atas keberhasilan anak menyelesaikan proyek koding mereka.",
      icon: Award,
      color: "text-[#F5BA13]",
      bg: "bg-amber-50",
    },
    {
      title: "Portofolio Game Pribadi",
      desc: "Game buatan anak dapat dimainkan langsung di tablet/komputer dan dipamerkan ke teman serta keluarga.",
      icon: FolderGit2,
      color: "text-[#EE4C23]",
      bg: "bg-orange-50",
    },
    {
      title: "Kelas Maksimal 6 Anak",
      desc: "Format semi-privat agar setiap langkah anak terpantau intensif tanpa ada anak yang tertinggal.",
      icon: Users2,
      color: "text-[#143D2B]",
      bg: "bg-[#E2F3E7]",
    },
    {
      title: "Modul & Panduan Praktis",
      desc: "Langkah-langkah pembuatan game disusun visual dan ramah anak, mudah dipraktikkan kembali di rumah.",
      icon: BookOpen,
      color: "text-[#3B5EDB]",
      bg: "bg-blue-50",
    },
    {
      title: "Laporan Kemajuan Belajar",
      desc: "Orang tua menerima laporan berkala mengenai perkembangan daya nalar, logika, dan kreativitas anak.",
      icon: ClipboardCheck,
      color: "text-[#143D2B]",
      bg: "bg-[#E2F3E7]",
    },
    {
      title: "Pendampingan Mentor Ramah",
      desc: "Mentor berpengalaman dan komunikatif yang mendidik dengan pendekatan menyenangkan tanpa tekanan.",
      icon: MessageSquareHeart,
      color: "text-[#EE4C23]",
      bg: "bg-orange-50",
    },
  ];

  return (
    <section className="px-5 py-8 bg-[#F7F5EE]">
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2 shadow-2xs">
          Fasilitas Lengkap
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
          Yang Didapatkan Si Kecil
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Setiap peserta mendapatkan fasilitas pembelajaran lengkap tanpa biaya tambahan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {facilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-3xl bg-white border border-[#143D2B]/10 shadow-xs flex items-start gap-3"
            >
              <div className={`w-9 h-9 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#143D2B] text-sm mb-0.5">
                  {item.title}
                </h3>
                <p className="text-[#334155] text-xs leading-relaxed">
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
