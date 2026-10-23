"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Settings,
  Database,
  Search,
  Download,
  MessageCircle,
  Save,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Lock,
  Unlock,
  RefreshCw,
} from "lucide-react";

interface Lead {
  id: string;
  parent_name: string;
  child_name: string;
  child_age: string;
  whatsapp: string;
  course_id: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [activeTab, setActiveTab] = useState<"leads" | "settings" | "sql">("leads");

  // Leads State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);

  // Settings State
  const [settings, setSettings] = useState({
    whatsapp_number: "6282382872411",
    batch_name: "Batch November 2026",
    batch_deadline: "2026-11-15T23:59:59",
    price_normal: 950000,
    price_current: 499000,
    quota_seats_left: 4,
  });
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [settingsToast, setSettingsToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Check login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "admin123" || passcode === "metrokids") {
      setIsAuthenticated(true);
    } else {
      alert("PIN Admin salah. Silakan coba: admin123");
    }
  };

  // Fetch leads
  const fetchLeads = async (searchQuery = "") => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch(`/api/admin/leads?search=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      if (data?.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  // Fetch settings
  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data?.settings) {
        setSettings((prev) => ({ ...prev, ...data.settings }));
      }
    } catch (err) {
      console.error("Failed to fetch settings:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads(search);
      fetchSettings();
    }
  }, [isAuthenticated]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads(search);
  };

  const handleSaveSetting = async (key: string, value: unknown) => {
    setIsSavingSettings(true);
    setSettingsToast(null);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
      const data = await res.json();
      if (data.success) {
        setSettingsToast({ type: "success", text: `Pengaturan "${key}" tersimpan!` });
      } else {
        setSettingsToast({ type: "error", text: data.error || "Gagal menyimpan" });
      }
    } catch (err) {
      setSettingsToast({ type: "error", text: "Terjadi kesalahan koneksi" });
    } finally {
      setIsSavingSettings(false);
    }
  };

  const handleSaveAllSettings = async () => {
    setIsSavingSettings(true);
    setSettingsToast(null);
    try {
      for (const [key, value] of Object.entries(settings)) {
        await fetch("/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, value }),
        });
      }
      setSettingsToast({ type: "success", text: "Semua pengaturan landing page berhasil disimpan!" });
    } catch (err) {
      setSettingsToast({ type: "error", text: "Gagal menyimpan beberapa pengaturan" });
    } finally {
      setIsSavingSettings(false);
    }
  };

  const exportCSV = () => {
    if (!leads.length) {
      alert("Belum ada data pendaftar untuk diexport.");
      return;
    }
    const headers = ["ID", "Waktu Daftar", "Nama Orang Tua", "Nama Anak", "Usia", "WhatsApp", "Pilihan Kelas", "Status"];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.created_at).toLocaleString("id-ID"),
      `"${l.parent_name.replace(/"/g, '""')}"`,
      `"${l.child_name.replace(/"/g, '""')}"`,
      l.child_age,
      `'${l.whatsapp}`,
      l.course_id,
      l.status,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Leads_MetroCodingKids_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Auth Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
          <div className="w-12 h-12 rounded-xl bg-[#143E2C] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
            MK
          </div>
          <h1 className="text-xl font-bold text-center text-slate-900 mb-1">
            Admin Metro Coding Kids
          </h1>
          <p className="text-xs text-center text-slate-500 mb-6">
            Masukkan PIN Admin untuk mengakses Contact Vault & Pengaturan
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="PIN Admin (Default: admin123)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                autoFocus
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm text-center tracking-widest focus:outline-none focus:border-[#143E2C] focus:ring-2 focus:ring-[#143E2C]/10"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#143E2C] hover:bg-[#225E43] text-white text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Unlock className="w-4 h-4" />
              <span>Masuk ke Admin Hub</span>
            </button>
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setIsAuthenticated(true)}
                className="text-[11px] text-emerald-700 font-semibold hover:underline cursor-pointer"
              >
                Masuk Cepat (Demo Mode)
              </button>
              <Link href="/" className="text-xs text-slate-500 hover:text-slate-800 underline">
                ← Kembali ke Web
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 pb-12">
      {/* Admin Header */}
      <header className="bg-[#143E2C] text-white px-4 sm:px-8 py-4 shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Lihat Landing Page"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg leading-tight">
                Metro Coding Kids — Admin Hub
              </h1>
              <p className="text-[11px] text-emerald-200/80">
                Pusat Kendali Data Leads & Pengaturan Konten
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
            >
              <span>Lihat Web</span>
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 text-xs font-semibold cursor-pointer"
            >
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-6 pb-2">
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "leads"
                ? "bg-[#143E2C] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Contact Vault (Leads)</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {leads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "settings"
                ? "bg-[#143E2C] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Pengaturan Landing Page</span>
          </button>

          <button
            onClick={() => setActiveTab("sql")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "sql"
                ? "bg-[#143E2C] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-200/70"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>SQL Supabase</span>
          </button>
        </div>

        {/* TAB 1: CONTACT VAULT (LEADS) */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari nama orang tua, anak, atau nomor WhatsApp..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#143E2C]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#143E2C] text-white text-xs font-bold hover:bg-[#225E43] cursor-pointer"
                >
                  Cari
                </button>
              </form>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fetchLeads(search)}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 cursor-pointer"
                  title="Refresh Data"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoadingLeads ? "animate-spin" : ""}`} />
                </button>
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Waktu</th>
                      <th className="py-3 px-4">Nama Orang Tua</th>
                      <th className="py-3 px-4">Nama Anak</th>
                      <th className="py-3 px-4">WhatsApp</th>
                      <th className="py-3 px-4">Pilihan Kelas</th>
                      <th className="py-3 px-4 text-center">Tindakan Langsung</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">
                          {isLoadingLeads
                            ? "Memuat data pendaftar..."
                            : "Belum ada data pendaftar. Form di landing page siap menerima leads!"}
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                            {new Date(lead.created_at).toLocaleString("id-ID", {
                              day: "2-digit",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">
                            {lead.parent_name}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            <span className="font-semibold">{lead.child_name}</span>{" "}
                            <span className="text-slate-400">({lead.child_age} thn)</span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-600">
                            {lead.whatsapp}
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
                              {lead.course_id}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <a
                              href={`https://wa.me/${lead.whatsapp}?text=${encodeURIComponent(
                                `Halo ${lead.parent_name}, terima kasih telah mendaftarkan ${lead.child_name} di Metro Coding Kids. Saya dari tim admisi ingin mengonfirmasi jadwal kelasnya.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-2xs transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Hubungi WA</span>
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SETTINGS (ANTI-HARDCODE) */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs max-w-2xl">
            <div className="mb-5">
              <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                Pengaturan Dinamis Landing Page
              </h2>
              <p className="text-xs text-slate-500">
                Ubah nomor CS, nama batch, tenggat waktu countdown, dan harga tanpa perlu menyentuh kode program.
              </p>
            </div>

            {settingsToast && (
              <div
                className={`p-3.5 rounded-xl text-xs flex items-center gap-2 mb-5 ${
                  settingsToast.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {settingsToast.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{settingsToast.text}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp CS (Format: 628xxx)
                </label>
                <input
                  type="text"
                  value={settings.whatsapp_number}
                  onChange={(e) => setSettings({ ...settings, whatsapp_number: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-[#143E2C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Batch Pendaftaran
                </label>
                <input
                  type="text"
                  value={settings.batch_name}
                  onChange={(e) => setSettings({ ...settings, batch_name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#143E2C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Tenggat Waktu Countdown (Format: YYYY-MM-DDTHH:MM:SS)
                </label>
                <input
                  type="text"
                  value={settings.batch_deadline}
                  onChange={(e) => setSettings({ ...settings, batch_deadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-[#143E2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Harga Normal (Rp)
                  </label>
                  <input
                    type="number"
                    value={settings.price_normal}
                    onChange={(e) => setSettings({ ...settings, price_normal: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#143E2C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Harga Paket Batch (Rp)
                  </label>
                  <input
                    type="number"
                    value={settings.price_current}
                    onChange={(e) => setSettings({ ...settings, price_current: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#143E2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Sisa Kursi Belajar (Teks Badging)
                </label>
                <input
                  type="number"
                  value={settings.quota_seats_left}
                  onChange={(e) => setSettings({ ...settings, quota_seats_left: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#143E2C]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleSaveAllSettings}
                  disabled={isSavingSettings}
                  className="w-full py-3.5 rounded-xl bg-[#143E2C] hover:bg-[#225E43] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm disabled:opacity-70"
                >
                  <Save className="w-4 h-4" />
                  <span>{isSavingSettings ? "Menyimpan Perubahan..." : "Simpan Semua Pengaturan"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SQL SUPABASE HELPER */}
        {activeTab === "sql" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs max-w-3xl">
            <div className="mb-4">
              <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                Skema Database Supabase
              </h2>
              <p className="text-xs text-slate-500">
                Salin dan jalankan skrip SQL di bawah ini pada Supabase SQL Editor untuk mengaktifkan tabel Leads dan Site Settings secara permanen.
              </p>
            </div>

            <pre className="p-4 bg-slate-900 text-emerald-300 font-mono text-xs rounded-xl overflow-x-auto leading-relaxed">
{`-- 1. Table leads
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    child_name TEXT NOT NULL,
    child_age TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    course_id TEXT NOT NULL,
    status TEXT DEFAULT 'baru',
    notes TEXT DEFAULT '',
    source TEXT DEFAULT 'landing_page',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select leads" ON public.leads FOR SELECT USING (true);

-- 2. Table site_settings
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read site_settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Allow all for site_settings" ON public.site_settings FOR ALL USING (true);`}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
