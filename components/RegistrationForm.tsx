"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { PressDepth } from "@/components/ui/press-depth";

import { ProgramItem, DEFAULT_PROGRAMS } from "@/lib/default-data";

interface RegistrationFormProps {
  whatsappNumber?: string;
  selectedCourse?: string;
  programs?: ProgramItem[];
}

export default function RegistrationForm({
  whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281818778099",
  selectedCourse = "",
  programs = DEFAULT_PROGRAMS,
}: RegistrationFormProps) {
  // Bangun daftar program dinamis dari data kelas aktif
  const dynamicProgramsList = [
    { id: "konsultasi_wa", label: "Konsultasi / Rekomendasi CS (Bantu Pilihkan)" },
    ...(programs || DEFAULT_PROGRAMS)
      .filter((p) => p.isActive !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((p) => ({
        id: p.id,
        label: `${p.title} (${p.ageRaw ? `Usia ${p.ageRaw} Thn` : p.age} - ${p.focus})`,
      })),
  ];
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [courseId, setCourseId] = useState(selectedCourse || "");
  const [prevSelectedCourse, setPrevSelectedCourse] = useState(selectedCourse || "");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (selectedCourse !== prevSelectedCourse) {
    setPrevSelectedCourse(selectedCourse);
    setCourseId(selectedCourse || "");
  }

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

    const chosenProgram = dynamicProgramsList.find((p) => p.id === courseId) || null;
    const programLabel = chosenProgram ? chosenProgram.label : "Konsultasi / Rekomendasi CS (Bantu Pilihkan)";
    const cityName =
      city === "bandung"
        ? "Bandung (Setiabudi, Bandung)"
        : city === "jakarta"
        ? "Jakarta (Taman Palem, Jakarta Barat)"
        : "Belum dipilih (Konsultasi CS)";

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
          course_id: courseId || "konsultasi_wa",
          city: city || "belum_dipilih",
        }),
      });

      // Dispatch event to show live toast
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("new-registration", {
            detail: {
              name: childName.trim(),
              course: chosenProgram ? (chosenProgram.id === "konsultasi_wa" ? "Code & Game" : chosenProgram.label.split("(")[0].trim()) : "Free Trial",
            },
          })
        );
      }

      // 2. Format WhatsApp message with chosen course & city
      const waMessage =
        `Halo Admin Metro Coding Kids, saya ingin booking Free Trial Session untuk anak saya:\n\n` +
        `• Nama Orang Tua: ${parentName.trim()}\n` +
        `• Nama Anak: ${childName.trim()}\n` +
        `• Usia Anak: ${childAge.trim() ? `${childAge.trim()} Tahun` : "Belum dicantumkan"}\n` +
        `• Pilihan Kota: ${cityName}\n` +
        `• Program Pilihan: ${programLabel}\n` +
        `• WhatsApp: ${whatsapp.trim()}\n\n` +
        `Saya ingin klaim Free Trial Session serta Voucher Diskon 15% (Khusus November) untuk program 12 pertemuan (3 bulan). Mohon info ketersediaan jadwalnya. Terima kasih!`;

      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

      setStatusMessage({
        type: "success",
        text: "Data tercatat! Mengarahkan ke WhatsApp Admin...",
      });

      // 3. Smooth redirect to WhatsApp
      setTimeout(() => {
        window.location.href = waUrl;
      }, 400);
    } catch (err) {
      console.error("Submission failed:", err);
      const waMessage =
        `Halo Admin Metro Coding Kids, saya ingin booking Free Trial Session untuk anak saya:\n` +
        `• Nama Orang Tua: ${parentName.trim()}\n` +
        `• Nama Anak: ${childName.trim()} (${childAge.trim()} thn)\n` +
        `• Kota: ${cityName}\n` +
        `• Program: ${programLabel}\n\n` +
        `Saya ingin info jadwal Free Trial Session terdekat. Terima kasih!`;
      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="form-pendaftaran" className="px-5 py-8 bg-[#F7F5EE]">
      <div className="text-center mb-6 flex flex-col items-center">
        <span className="h-7 px-4 inline-flex items-center justify-center rounded-full bg-[#F5BA13] text-[#143D2B] font-nunito text-xs font-black uppercase tracking-wider mb-2.5 shadow-none">
          <span className="translate-y-[1px]">Langkah Mudah</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#143D2B] tracking-tight">
          Book Free Trial Session
        </h2>
        <p className="text-[#143D2B] text-xs sm:text-sm font-bold mt-2 max-w-sm mx-auto leading-relaxed">
          Isi data singkat di bawah ini. Tim CS kami akan segera mengonfirmasi jadwal dan rekomendasi kelas terbaik untuk si kecil.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 border-2 border-[#143D2B] shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Field 1: Nama Orang Tua */}
          <div>
            <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
              Nama Lengkap Orang Tua <span className="text-[#EE4C23]">*</span>
            </label>
            <input
              type="text"
              required
              suppressHydrationWarning
              placeholder="Contoh: Ayah Hendra / Bunda Maya"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border-2 border-[#143D2B]/20 text-xs sm:text-sm text-[#143D2B] font-medium focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400"
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
                suppressHydrationWarning
                placeholder="Contoh: Kenzo"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border-2 border-[#143D2B]/20 text-xs sm:text-sm text-[#143D2B] font-medium focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
                Usia (Thn) <span className="text-[#EE4C23]">*</span>
              </label>
              <input
                type="number"
                required
                min={7}
                max={18}
                suppressHydrationWarning
                placeholder=""
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border-2 border-[#143D2B]/20 text-xs sm:text-sm text-[#143D2B] font-medium focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400 text-center"
              />
            </div>
          </div>

          {/* Field 3: Pilihan Kota (Combobox Jakarta / Bandung) */}
          <div className="relative z-30 focus-within:z-50">
            <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
              Pilihan Kota Belajar <span className="text-[#EE4C23]">*</span>
            </label>
            <Combobox
              value={city}
              onChange={(val) => setCity(val)}
              placeholder="Cari atau pilih kota (Jakarta / Bandung)..."
            >
              <Combobox.Input />
              <Combobox.List emptyMessage="Kota tidak ditemukan (hanya Jakarta atau Bandung)">
                <Combobox.Option value="jakarta">
                  Jakarta (Taman Palem, Jakarta Barat)
                </Combobox.Option>
                <Combobox.Option value="bandung">
                  Bandung (Setiabudi, Bandung)
                </Combobox.Option>
              </Combobox.List>
            </Combobox>
          </div>

          {/* Field 4: Pilihan Program (Combobox) */}
          <div className="relative z-20 focus-within:z-50">
            <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
              Pilihan Program Kelas
            </label>
            <Combobox
              value={courseId}
              onChange={(val) => setCourseId(val)}
              placeholder="Cari atau pilih program kelas..."
            >
              <Combobox.Input />
              <Combobox.List emptyMessage="Program tidak ditemukan">
                {dynamicProgramsList.map((prog) => (
                  <Combobox.Option key={prog.id} value={prog.id}>
                    {prog.label}
                  </Combobox.Option>
                ))}
              </Combobox.List>
            </Combobox>
          </div>

          {/* Field 5: WhatsApp */}
          <div>
            <label className="block text-xs font-bold text-[#143D2B] mb-1.5">
              Nomor WhatsApp Aktif <span className="text-[#EE4C23]">*</span>
            </label>
            <input
              type="tel"
              required
              suppressHydrationWarning
              placeholder="Contoh: 081234567890"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border-2 border-[#143D2B]/20 text-xs sm:text-sm text-[#143D2B] font-medium focus:outline-none focus:border-[#143D2B] focus:ring-2 focus:ring-[#143D2B]/10 transition-all placeholder:text-slate-400"
            />
            <span className="block text-[11px] font-semibold text-[#143D2B]/70 mt-1">
              Digunakan untuk konfirmasi jadwal kelas, slot kuota, dan koordinasi mentor.
            </span>
          </div>

          {/* Feedback status */}
          {statusMessage && (
            <div
              className={`p-3 rounded-2xl text-xs flex items-center gap-2 ${
                statusMessage.type === "success"
                  ? "bg-[#143D2B] text-[#F5BA13] border-2 border-[#143D2B]"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#F5BA13]" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Submit CTA */}
          <PressDepth
            type="submit"
            disabled={isLoading}
            containerClassName="w-full mt-2"
            baseBg="bg-[#b83310]"
            className="w-full py-4 px-6 bg-[#EE4C23] hover:bg-[#d93f18] text-white font-heading font-black text-base sm:text-lg border-none flex items-center justify-center gap-2.5 shadow-md"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Memproses Data...</span>
              </>
            ) : (
              <>
                <span>Book Trial</span>
                <Send className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </PressDepth>
        </form>
      </div>
    </section>
  );
}
