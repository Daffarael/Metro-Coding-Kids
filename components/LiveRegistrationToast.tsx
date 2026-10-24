"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ArrowRight } from "lucide-react";
import {
  RegistrationItem,
  getShuffledRegistrations,
} from "@/lib/social-proof-data";

export default function LiveRegistrationToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Inisialisasi antrean dengan 100 data acak unik tiap reload/refresh
  const [queue, setQueue] = useState<RegistrationItem[]>([]);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Acak 100 data simulasi saat pertama kali dimuat di browser
  useEffect(() => {
    setQueue(getShuffledRegistrations());
  }, []);

  // 2. Ambil data registrasi asli dari Supabase database jika ada
  useEffect(() => {
    fetch("/api/recent-registrations")
      .then((res) => res.json())
      .then((data) => {
        if (
          data?.registrations &&
          Array.isArray(data.registrations) &&
          data.registrations.length > 0
        ) {
          const realItems: RegistrationItem[] = data.registrations.map(
            (item: RegistrationItem) => ({
              ...item,
              isReal: true,
            })
          );

          setQueue((prev) => {
            // Tempatkan data pendaftar asli di urutan paling awal
            const filteredSimulated = prev.filter((p) => !p.isReal);
            return [...realItems, ...filteredSimulated];
          });
        }
      })
      .catch((err) => {
        console.warn("Menggunakan antrean simulasi:", err);
      });
  }, []);

  // 3. Tangkap event pendaftaran baru langsung dari formulir (real-time instant)
  useEffect(() => {
    const handleRealRegistration = (e: Event) => {
      const customEvent = e as CustomEvent<{ name: string; course: string }>;
      if (customEvent.detail) {
        const newItem: RegistrationItem = {
          name: customEvent.detail.name,
          course: customEvent.detail.course || "Junior Game Maker",
          time: "Baru saja",
          isReal: true,
        };

        // Langsung taruh di urutan terdepan dan tampilkan seketika
        setQueue((prev) => [newItem, ...prev]);
        setCurrentIndex(0);
        setIsVisible(true);

        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 6500);
      }
    };

    window.addEventListener("new-registration", handleRealRegistration);
    return () => {
      window.removeEventListener("new-registration", handleRealRegistration);
    };
  }, []);

  // 4. Siklus rotasi berkala: tampil 6.5 detik, jeda 8 detik antar notifikasi
  useEffect(() => {
    if (isDismissed) return;

    let isMounted = true;

    const triggerCycle = () => {
      if (!isMounted || isDismissed) return;

      setIsVisible(true);

      hideTimeoutRef.current = setTimeout(() => {
        if (!isMounted) return;
        setIsVisible(false);

        showTimeoutRef.current = setTimeout(() => {
          if (!isMounted) return;
          // Pindah ke item berikutnya (jika data real habis, otomatis lanjut ke 100 data acak)
          setCurrentIndex((prev) => prev + 1);
          triggerCycle();
        }, 8000);
      }, 6500);
    };

    // Jeda alami 1.8 detik saat pengunjung baru membuka halaman
    const initialDelay = setTimeout(() => {
      triggerCycle();
    }, 1800);

    return () => {
      isMounted = false;
      clearTimeout(initialDelay);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    };
  }, [isDismissed]);

  if (isDismissed || queue.length === 0) return null;

  // Modulo index berputar aman melintasi seluruh antrean
  const current = queue[currentIndex % queue.length] || queue[0];

  const handleClickToast = () => {
    const formElement = document.getElementById("form-pendaftaran");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      role="status"
      aria-live="polite"
      className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-3.5"
    >
      <div
        className={`w-full max-w-[430px] transition-all duration-500 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-6 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative flex items-center gap-3 p-3.5 sm:p-4 rounded-[22px] sm:rounded-[26px] bg-white/98 backdrop-blur-md border-2 border-[#143D2B]/12 shadow-[0_14px_36px_rgba(20,61,43,0.14)] select-none">
          {/* Ikon Lonceng Golden Yellow */}
          <div
            style={{ transform: "rotate(-6deg)" }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#F5BA13] text-white flex items-center justify-center shrink-0 text-xl sm:text-2xl shadow-none"
          >
            🔔
          </div>

          {/* Konten Teks 3 Baris Rapi & Bersih */}
          <div
            onClick={handleClickToast}
            className="flex-1 min-w-0 pr-1 cursor-pointer group"
          >
            {/* Baris 1: Judul BERHASIL!!! & Waktu */}
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="text-[11px] sm:text-[12px] font-black tracking-wide text-[#143D2B] uppercase">
                BERHASIL!!!
              </span>
              <span className="text-[10px] font-medium text-slate-400 font-nunito shrink-0">
                ⏱️ {current.time}
              </span>
            </div>

            {/* Baris 2: Nama Pendaftar & Kelas */}
            <p className="text-[12px] sm:text-[12.5px] leading-snug text-slate-700">
              <strong className="font-extrabold text-slate-900">
                {current.name}
              </strong>{" "}
              <span className="text-slate-500">telah daftar di</span>{" "}
              <strong className="font-extrabold text-[#143D2B]">
                {current.course}
              </strong>
            </p>

            {/* Baris 3: Ajakan / CTA Lembut */}
            <div className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-bold text-[#EE4C23] group-hover:text-[#c93b16] transition-colors">
              <span>ayo daftarkan juga buah hatimu</span>
              <div className="w-4 h-4 rounded-full bg-[#EE4C23] text-white flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Tombol Tutup Notifikasi */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
              setIsDismissed(true);
            }}
            title="Tutup notifikasi"
            aria-label="Tutup notifikasi"
            className="w-6 h-6 rounded-full hover:bg-slate-100 text-slate-300 hover:text-slate-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer self-start sm:self-center"
          >
            <X className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
