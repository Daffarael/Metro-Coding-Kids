"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface RegistrationFormProps {
  whatsappNumber?: string;
}

export default function RegistrationForm({
  whatsappNumber = "6282382872411",
}: RegistrationFormProps) {
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!parentName.trim() || !childName.trim() || !whatsapp.trim()) {
      setStatusMessage({
        type: "error",
        text: "Mohon lengkapi Nama Orang Tua, Nama Anak, dan Nomor WhatsApp.",
      });
      return;
    }

    setIsLoading(true);

    try {
      // 1. Submit lead to database in background
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_name: parentName,
          child_name: childName,
          child_age: childAge,
          whatsapp: whatsapp,
          course_id: "konsultasi_wa",
        }),
      });

      // 2. Format WhatsApp message without preselected course
      const waMessage =
        `Halo CS Metro Coding Kids, saya ingin mendaftarkan anak saya untuk Batch Belajar Koding:\n\n` +
        `• Nama Orang Tua: ${parentName.trim()}\n` +
        `• Nama Anak: ${childName.trim()}\n` +
        `• Usia Anak: ${childAge.trim() ? `${childAge.trim()} Tahun` : "Belum dicantumkan"}\n` +
        `• WhatsApp: ${whatsapp.trim()}\n\n` +
        `Saya ingin konsultasi rekomendasi program kelas yang paling cocok dan info ketersediaan kursinya. Terima kasih!`;

      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

      setStatusMessage({
        type: "success",
        text: "Data tercatat! Mengarahkan ke WhatsApp CS...",
      });

      // 3. Smooth redirect to WhatsApp
      setTimeout(() => {
        window.location.href = waUrl;
      }, 400);
    } catch (err) {
      console.error("Submission failed:", err);
      const waMessage =
        `Halo CS Metro Coding Kids, saya ingin mendaftarkan anak saya:\n` +
        `• Nama Orang Tua: ${parentName.trim()}\n` +
        `• Nama Anak: ${childName.trim()} (${childAge.trim()} thn)\n\n` +
        `Saya ingin konsultasi pilihan program kelas dan jadwal belajarnya. Terima kasih!`;
      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="form-pendaftaran" className="px-5 py-8 bg-[#F7F5EE]">
      <div className="text-center mb-6">
        <span className="text-[11px] font-black text-[#143D2B] uppercase tracking-wider bg-[#F5BA13] px-3.5 py-1 rounded-full inline-block mb-2 shadow-2xs">
          Langkah Mudah
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
          Form Pendaftaran Cepat
        </h2>
        <p className="text-[#334155] text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Isi data singkat di bawah ini. Tim CS kami akan segera mengonfirmasi jadwal dan rekomendasi kelas terbaik untuk si kecil.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 border-2 border-[#143D2B]/10 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Field 1: Nama Orang Tua */}
          <div>
            <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
              Nama Lengkap Orang Tua <span className="text-[#EE4C23]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Ayah Hendra / Bunda Maya"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Field 2: Nama & Usia Anak */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
                Nama Panggilan Anak <span className="text-[#EE4C23]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Kenzo"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
                Usia (Thn) <span className="text-[#EE4C23]">*</span>
              </label>
              <input
                type="number"
                required
                min={5}
                max={16}
                placeholder="8"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400 text-center"
              />
            </div>
          </div>

          {/* Field 3: WhatsApp */}
          <div>
            <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
              Nomor WhatsApp Aktif <span className="text-[#EE4C23]">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Contoh: 081234567890"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400"
            />
            <span className="block text-[11px] text-slate-400 mt-1">
              Digunakan untuk pengiriman jadwal kelas dan koordinasi mentor.
            </span>
          </div>

          {/* Feedback status */}
          {statusMessage && (
            <div
              className={`p-3 rounded-2xl text-xs flex items-center gap-2 ${
                statusMessage.type === "success"
                  ? "bg-[#E2F3E7] text-[#143D2B] border border-[#143D2B]/20"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#143D2B]" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 rounded-2xl bg-[#EE4C23] hover:bg-[#d63f17] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Memproses Data...</span>
              </>
            ) : (
              <>
                <span>Kirim & Hubungkan ke WhatsApp CS</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
