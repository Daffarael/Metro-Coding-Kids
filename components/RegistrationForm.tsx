"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface RegistrationFormProps {
  defaultCourseId?: string;
  whatsappNumber?: string;
}

export default function RegistrationForm({
  defaultCourseId = "junior",
  whatsappNumber = "6282382872411",
}: RegistrationFormProps) {
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [courseId, setCourseId] = useState(defaultCourseId);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (defaultCourseId) {
      setCourseId(defaultCourseId);
    }
  }, [defaultCourseId]);

  const courseNames: Record<string, string> = {
    junior: "Junior Game Maker (Usia 6-8 Tahun)",
    explorer: "Explorer Coder (Usia 9-12 Tahun)",
    master: "Master Creator (Usia 13-15 Tahun)",
  };

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
          course_id: courseId,
        }),
      });

      // 2. Format WhatsApp message
      const selectedCourseName = courseNames[courseId] || courseId;
      const waMessage =
        `Halo CS Metro Coding Kids, saya ingin mendaftarkan anak saya untuk Batch Belajar Koding:\n\n` +
        `• Nama Orang Tua: ${parentName.trim()}\n` +
        `• Nama Anak: ${childName.trim()}\n` +
        `• Usia Anak: ${childAge.trim() ? `${childAge.trim()} Tahun` : "Belum dicantumkan"}\n` +
        `• Pilihan Program: ${selectedCourseName}\n` +
        `• WhatsApp: ${whatsapp.trim()}\n\n` +
        `Mohon info ketersediaan kursi belajar dan jadwal kelasnya. Terima kasih!`;

      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

      setStatusMessage({
        type: "success",
        text: "Pendaftaran tercatat! Mengarahkan ke WhatsApp CS...",
      });

      // 3. Smooth redirect to WhatsApp
      setTimeout(() => {
        window.location.href = waUrl;
      }, 400);
    } catch (err) {
      console.error("Submission failed:", err);
      // Even if API fails, still allow WhatsApp redirect so customer is not lost!
      const selectedCourseName = courseNames[courseId] || courseId;
      const waMessage =
        `Halo CS Metro Coding Kids, saya ingin mendaftarkan anak saya:\n` +
        `• Nama Orang Tua: ${parentName.trim()}\n` +
        `• Nama Anak: ${childName.trim()} (${childAge.trim()} thn)\n` +
        `• Pilihan Program: ${selectedCourseName}`;
      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="form-pendaftaran" className="px-5 py-8 bg-[#F8FAF7] border-b border-slate-200/80">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
          Langkah Mudah
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143E2C] tracking-tight">
          Form Pendaftaran Cepat
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
          Isi 4 data singkat di bawah ini. Tim CS kami akan segera mengonfirmasi jadwal & ketersediaan kursi.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Field 1: Nama Orang Tua */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Nama Lengkap Orang Tua <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Ayah Hendra / Bunda Maya"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143E2C] focus:ring-2 focus:ring-[#143E2C]/10 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Field 2: Nama & Usia Anak */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Nama Panggilan Anak <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Kenzo"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143E2C] focus:ring-2 focus:ring-[#143E2C]/10 transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Usia (Thn) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min={5}
                max={16}
                placeholder="8"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143E2C] focus:ring-2 focus:ring-[#143E2C]/10 transition-all placeholder:text-slate-400 text-center"
              />
            </div>
          </div>

          {/* Field 3: WhatsApp */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Nomor WhatsApp Aktif <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Contoh: 081234567890"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#143E2C] focus:ring-2 focus:ring-[#143E2C]/10 transition-all placeholder:text-slate-400"
            />
            <span className="block text-[11px] text-slate-400 mt-1">
              Digunakan untuk pengiriman jadwal kelas & koordinasi mentor.
            </span>
          </div>

          {/* Field 4: Pilihan Kelas */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Pilihan Program Belajar <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {[
                {
                  id: "junior",
                  title: "Junior Game Maker (Usia 6 - 8 Tahun)",
                  desc: "Scratch Jr • Animasi Cerita & Mini Maze",
                },
                {
                  id: "explorer",
                  title: "Explorer Coder (Usia 9 - 12 Tahun)",
                  desc: "Scratch 3.0 & Roblox • Game Arcade & Logika Variabel",
                },
                {
                  id: "master",
                  title: "Master Creator (Usia 13 - 15 Tahun)",
                  desc: "Python Basics • Text-Code & Game Development",
                },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    courseId === opt.id
                      ? "bg-emerald-50/80 border-[#143E2C] ring-1 ring-[#143E2C]/20"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="courseOption"
                    value={opt.id}
                    checked={courseId === opt.id}
                    onChange={() => setCourseId(opt.id)}
                    className="mt-0.5 accent-[#143E2C]"
                  />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Feedback status */}
          {statusMessage && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                statusMessage.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
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
            className="w-full py-4 px-6 rounded-2xl bg-[#F95724] hover:bg-[#e24a1b] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
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
