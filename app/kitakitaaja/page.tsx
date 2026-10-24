"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Tag,
  BookOpen,
  MessageSquare,
  HelpCircle,
  LogOut,
  ExternalLink,
  Search,
  Download,
  MessageCircle,
  Save,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Plus,
  Trash2,
  Edit3,
  Star,
  X,
  FileText,
  Lock,
  Mail,
  ChevronDown,
} from "lucide-react";
import {
  DEFAULT_CAMPAIGN_SETTINGS,
  DEFAULT_PROGRAMS,
  DEFAULT_TESTIMONIALS,
  DEFAULT_FAQS,
  ProgramItem,
  TestimonialItem,
  FAQItem,
  CampaignSettings,
} from "@/lib/default-data";
import { Autocomplete, AutocompleteItemData } from "@/components/ui/autocomplete";

const STATUS_FILTER_OPTIONS: AutocompleteItemData[] = [
  { value: "ALL", label: "Semua Status", description: "Seluruh Pendaftar" },
  { value: "baru", label: "BARU", description: "Leads Baru Masuk", tag: "Pipeline 1" },
  { value: "sudah_dihubungi", label: "SUDAH DIHUBUNGI", description: "Follow Up CS", tag: "Pipeline 2" },
  { value: "free_trial", label: "JADWAL FREE TRIAL", description: "Sesi Uji Coba", tag: "Pipeline 3" },
  { value: "closing", label: "CLOSING", description: "Resmi Murid Baru", tag: "Closing" },
  { value: "batal", label: "BATAL", description: "Tidak Berminat / Batal", tag: "Batal" },
];

interface Lead {
  id: string;
  parent_name: string;
  child_name: string;
  child_age: string;
  whatsapp: string;
  course_id: string;
  status: string;
  notes?: string;
  created_at: string;
}

const COURSE_LABELS: Record<string, string> = {
  code_game: "Code & Game",
  creative_tech: "Creative Technology",
  digital_creator: "Digital Creator",
  future_tech: "Future Tech",
  konsultasi_wa: "Konsultasi / Rekomendasi CS",
};

// 5 Status Prospek Tegas (Murni Teks Bersih, Tanpa Simbol)
const STATUS_OPTIONS = [
  { value: "baru", label: "BARU", bg: "bg-[#2563EB]", text: "text-white" },
  { value: "sudah_dihubungi", label: "SUDAH DIHUBUNGI", bg: "bg-[#F5BA13]", text: "text-[#143D2B]" },
  { value: "free_trial", label: "JADWAL FREE TRIAL", bg: "bg-[#7C3AED]", text: "text-white" },
  { value: "closing", label: "CLOSING", bg: "bg-[#143D2B]", text: "text-[#F5BA13]" },
  { value: "batal", label: "BATAL", bg: "bg-[#DC2626]", text: "text-white" },
];

export default function AdminPage() {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("admin@metrocodingkids.com");

  // Navigation
  const [activeTab, setActiveTab] = useState<"leads" | "campaign" | "programs" | "testimonials" | "faqs">("leads");

  // Toast Feedback
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // 1. Leads State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchLeads, setSearchLeads] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [selectedLeadForNotes, setSelectedLeadForNotes] = useState<Lead | null>(null);
  const [leadNoteInput, setLeadNoteInput] = useState("");

  // 2. Campaign Settings State
  const [campaign, setCampaign] = useState<CampaignSettings>(DEFAULT_CAMPAIGN_SETTINGS);
  const [isSavingCampaign, setIsSavingCampaign] = useState(false);

  // 3. Programs State
  const [programs, setPrograms] = useState<ProgramItem[]>(DEFAULT_PROGRAMS);
  const [editingProgram, setEditingProgram] = useState<ProgramItem | null>(null);
  const [isAddingProgram, setIsAddingProgram] = useState(false);
  const [isSavingPrograms, setIsSavingPrograms] = useState(false);

  // 4. Testimonials State
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
  const [editingTestimonial, setEditingTestimonial] = useState<TestimonialItem | null>(null);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);
  const [isSavingTestimonials, setIsSavingTestimonials] = useState(false);

  // 5. FAQ State
  const [faqs, setFaqs] = useState<FAQItem[]>(DEFAULT_FAQS);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [isSavingFaqs, setIsSavingFaqs] = useState(false);

  // Check auth session on load
  useEffect(() => {
    fetch("/api/admin/auth")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
          if (data.user?.email) setCurrentUserEmail(data.user.email);
          loadAllData();
        }
      })
      .catch(() => {});
  }, []);

  const showToast = (type: "success" | "error", text: string) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const loadAllData = () => {
    fetchLeads();
    fetchCampaign();
    fetchPrograms();
    fetchTestimonials();
    fetchFaqs();
  };

  // Auth Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsLoggingIn(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: authEmail, password: authPassword }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        if (data.user?.email) setCurrentUserEmail(data.user.email);
        loadAllData();
      } else {
        setAuthError(data.error || "Login gagal. Periksa kembali email dan password Anda.");
      }
    } catch {
      setAuthError("Gagal menghubungi server. Silakan coba kembali.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
    } catch {}
    setIsAuthenticated(false);
  };

  // 1. Leads Operations
  const fetchLeads = async (search = searchLeads, status = statusFilter) => {
    setIsLoadingLeads(true);
    try {
      const res = await fetch(`/api/admin/leads?search=${encodeURIComponent(search)}&status=${encodeURIComponent(status)}`);
      const data = await res.json();
      if (data?.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Fetch leads error:", err);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        showToast("success", "Status prospek berhasil diperbarui.");
      } else {
        showToast("error", "Gagal memperbarui status prospek.");
      }
    } catch {
      showToast("error", "Gagal memperbarui status prospek.");
    }
  };

  const saveLeadNotes = async () => {
    if (!selectedLeadForNotes) return;
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedLeadForNotes.id, notes: leadNoteInput }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLeadForNotes.id ? { ...l, notes: leadNoteInput } : l))
        );
        setSelectedLeadForNotes(null);
        showToast("success", "Catatan follow-up CS tersimpan.");
      }
    } catch {
      showToast("error", "Gagal menyimpan catatan.");
    }
  };

  const deleteLead = async (leadId: string) => {
    if (!confirm("Hapus data pendaftar ini dari Contact Vault?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${leadId}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== leadId));
        showToast("success", "Data pendaftar berhasil dihapus.");
      }
    } catch {
      showToast("error", "Gagal menghapus data.");
    }
  };

  const exportCSV = () => {
    if (!leads.length) {
      alert("Belum ada data leads untuk diexport.");
      return;
    }
    const headers = ["Waktu Daftar", "Nama Orang Tua", "Nama Anak", "Usia", "WhatsApp", "Pilihan Kelas", "Status", "Catatan CS"];
    const rows = leads.map((l) => [
      new Date(l.created_at).toLocaleString("id-ID"),
      `"${l.parent_name.replace(/"/g, '""')}"`,
      `"${l.child_name.replace(/"/g, '""')}"`,
      l.child_age,
      `'${l.whatsapp}`,
      `"${(COURSE_LABELS[l.course_id] || l.course_id).replace(/"/g, '""')}"`,
      l.status?.toUpperCase() || "BARU",
      `"${(l.notes || "").replace(/"/g, '""')}"`,
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

  // 2. Campaign Operations
  const fetchCampaign = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data?.settings) {
        setCampaign((prev) => ({ ...prev, ...data.settings }));
      }
    } catch {}
  };

  const handleSaveCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingCampaign(true);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: campaign }),
      });
      if (res.ok) {
        showToast("success", "Pengaturan Promo & Campaign berhasil disimpan!");
      } else {
        showToast("error", "Gagal menyimpan pengaturan.");
      }
    } catch {
      showToast("error", "Gagal menghubungi server.");
    } finally {
      setIsSavingCampaign(false);
    }
  };

  // 3. Programs Operations
  const fetchPrograms = async () => {
    try {
      const res = await fetch("/api/programs");
      const data = await res.json();
      if (data?.programs) setPrograms(data.programs);
    } catch {}
  };

  const handleSaveAllPrograms = async (updatedPrograms: ProgramItem[]) => {
    setIsSavingPrograms(true);
    try {
      const res = await fetch("/api/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programs: updatedPrograms }),
      });
      if (res.ok) {
        setPrograms(updatedPrograms);
        showToast("success", "Daftar Program Kelas berhasil disinkronkan ke Landing Page!");
      }
    } catch {
      showToast("error", "Gagal menyimpan program kelas.");
    } finally {
      setIsSavingPrograms(false);
    }
  };

  const handleSaveSingleProgram = (programData: ProgramItem) => {
    let updated: ProgramItem[];
    if (isAddingProgram) {
      updated = [...programs, { ...programData, order: programs.length + 1 }];
    } else {
      updated = programs.map((p) => (p.id === programData.id ? programData : p));
    }
    handleSaveAllPrograms(updated);
    setEditingProgram(null);
    setIsAddingProgram(false);
  };

  const handleDeleteProgram = (id: string) => {
    if (!confirm("Hapus program kelas ini dari landing page?")) return;
    const updated = programs.filter((p) => p.id !== id);
    handleSaveAllPrograms(updated);
  };

  const handleToggleProgramActive = (id: string) => {
    const updated = programs.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p));
    handleSaveAllPrograms(updated);
  };

  // 4. Testimonials Operations
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data?.testimonials) setTestimonials(data.testimonials);
    } catch {}
  };

  const handleSaveAllTestimonials = async (updated: TestimonialItem[]) => {
    setIsSavingTestimonials(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testimonials: updated }),
      });
      if (res.ok) {
        setTestimonials(updated);
        showToast("success", "Testimoni orang tua berhasil disinkronkan ke Landing Page!");
      }
    } catch {
      showToast("error", "Gagal menyimpan testimoni.");
    } finally {
      setIsSavingTestimonials(false);
    }
  };

  const handleSaveSingleTestimonial = (data: TestimonialItem) => {
    let updated: TestimonialItem[];
    if (isAddingTestimonial) {
      updated = [...testimonials, { ...data, order: testimonials.length + 1 }];
    } else {
      updated = testimonials.map((t) => (t.id === data.id ? data : t));
    }
    handleSaveAllTestimonials(updated);
    setEditingTestimonial(null);
    setIsAddingTestimonial(false);
  };

  const handleDeleteTestimonial = (id: string) => {
    if (!confirm("Hapus testimoni ini dari landing page?")) return;
    const updated = testimonials.filter((t) => t.id !== id);
    handleSaveAllTestimonials(updated);
  };

  const handleToggleTestimonialActive = (id: string) => {
    const updated = testimonials.map((t) => (t.id === id ? { ...t, isActive: !t.isActive } : t));
    handleSaveAllTestimonials(updated);
  };

  // 5. FAQ Operations
  const fetchFaqs = async () => {
    try {
      const res = await fetch("/api/faq");
      const data = await res.json();
      if (data?.faqs) setFaqs(data.faqs);
    } catch {}
  };

  const handleSaveAllFaqs = async (updated: FAQItem[]) => {
    setIsSavingFaqs(true);
    try {
      const res = await fetch("/api/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ faqs: updated }),
      });
      if (res.ok) {
        setFaqs(updated);
        showToast("success", "Daftar FAQ berhasil disinkronkan ke Landing Page!");
      }
    } catch {
      showToast("error", "Gagal menyimpan FAQ.");
    } finally {
      setIsSavingFaqs(false);
    }
  };

  const handleSaveSingleFaq = (data: FAQItem) => {
    let updated: FAQItem[];
    if (isAddingFaq) {
      updated = [...faqs, { ...data, order: faqs.length + 1 }];
    } else {
      updated = faqs.map((f) => (f.id === data.id ? data : f));
    }
    handleSaveAllFaqs(updated);
    setEditingFaq(null);
    setIsAddingFaq(false);
  };

  const handleDeleteFaq = (id: string) => {
    if (!confirm("Hapus pertanyaan FAQ ini dari landing page?")) return;
    const updated = faqs.filter((f) => f.id !== id);
    handleSaveAllFaqs(updated);
  };

  const handleToggleFaqActive = (id: string) => {
    const updated = faqs.map((f) => (f.id === id ? { ...f, isActive: !f.isActive } : f));
    handleSaveAllFaqs(updated);
  };

  // CRM Metric Counters
  const totalLeads = leads.length;
  const countBaru = leads.filter((l) => !l.status || l.status === "baru").length;
  const countDihubungi = leads.filter((l) => l.status === "sudah_dihubungi").length;
  const countFreeTrial = leads.filter((l) => l.status === "free_trial").length;
  const countClosing = leads.filter((l) => l.status === "closing").length;

  // -------------------------------------------------------------
  // 1. TAMPILAN LOGIN SCREEN (EMAIL & PASSWORD)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F7F5EE] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-7 border-2 border-[#143D2B] shadow-xl">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-3.5 shadow-md border-2 border-[#143D2B]/20">
              <Image
                src="/images/logo-rounded.png"
                alt="Metro Coding Kids"
                width={64}
                height={64}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-heading font-black text-2xl text-[#143D2B] tracking-tight">
              Metro Coding Kids
            </h1>
            <p className="text-xs font-bold text-[#64748B] mt-1 font-nunito">
              Admin Hub • Akses CRM Leads & Konten Landing Page
            </p>
          </div>

          {authError && (
            <div className="mb-4 p-3 rounded-2xl bg-red-50 border-2 border-red-200 text-red-800 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-[#143D2B] mb-1.5 uppercase tracking-wider font-nunito">
                Email Admin
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="admin@metrocodingkids.com"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-3 rounded-2xl border-2 border-[#143D2B]/20 text-sm font-semibold text-[#143D2B] focus:outline-none focus:border-[#143D2B] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-[#143D2B] mb-1.5 uppercase tracking-wider font-nunito">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-3 rounded-2xl border-2 border-[#143D2B]/20 text-sm font-semibold text-[#143D2B] focus:outline-none focus:border-[#143D2B] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 rounded-2xl bg-[#EE4C23] hover:bg-[#d93f18] text-white font-heading font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:translate-y-0.5 disabled:opacity-70 mt-2"
            >
              <span>{isLoggingIn ? "Memverifikasi..." : "Masuk ke Admin Hub"}</span>
            </button>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  setAuthEmail("admin@metrocodingkids.com");
                  setAuthPassword("metrokids2026");
                }}
                className="text-[#143D2B] font-bold hover:underline cursor-pointer"
              >
                Isi Kredensial Cepat
              </button>
              <Link href="/" className="text-slate-500 hover:text-[#143D2B] font-semibold">
                ← Kembali ke Web
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. DASHBOARD ADMIN (SIDEBAR KIRI & PALET BRAND METRO CODING KIDS)
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F7F5EE] text-[#143D2B] flex flex-col md:flex-row">
      {/* GLOBAL TOAST NOTIFICATION */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-xl border-2 transition-all ${
            toast.type === "success"
              ? "bg-[#143D2B] text-white border-[#F5BA13]"
              : "bg-red-600 text-white border-red-800"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-[#F5BA13] shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-white shrink-0" />
          )}
          <span>{toast.text}</span>
        </div>
      )}

      {/* SIDEBAR KIRI (DEEP FOREST GREEN #143D2B) */}
      <aside className="w-full md:w-64 bg-[#143D2B] text-white p-5 flex flex-col justify-between shrink-0 shadow-xl border-r-2 border-[#143D2B]">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/15">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm shrink-0 border border-white/20">
              <Image
                src="/images/logo-rounded.png"
                alt="Metro Coding Kids"
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <h1 className="font-heading font-black text-base text-white tracking-wide truncate">
                Metro Coding Kids
              </h1>
            </div>
          </div>

          {/* 5 Menu Navigasi Monokrom (Stroke Lucide Icons) */}
          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab("leads")}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "leads"
                  ? "bg-[#F5BA13] text-[#143D2B] shadow-md"
                  : "text-white hover:bg-white/15"
              }`}
            >
              <Users className="w-4 h-4 stroke-[2.5]" />
              <span>CRM Leads</span>
            </button>

            <button
              onClick={() => setActiveTab("campaign")}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "campaign"
                  ? "bg-[#F5BA13] text-[#143D2B] shadow-md"
                  : "text-white hover:bg-white/15"
              }`}
            >
              <Tag className="w-4 h-4 stroke-[2.5]" />
              <span>Promo & Campaign</span>
            </button>

            <button
              onClick={() => setActiveTab("programs")}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "programs"
                  ? "bg-[#F5BA13] text-[#143D2B] shadow-md"
                  : "text-white hover:bg-white/15"
              }`}
            >
              <BookOpen className="w-4 h-4 stroke-[2.5]" />
              <span>Program Kelas</span>
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "testimonials"
                  ? "bg-[#F5BA13] text-[#143D2B] shadow-md"
                  : "text-white hover:bg-white/15"
              }`}
            >
              <MessageSquare className="w-4 h-4 stroke-[2.5]" />
              <span>Testimoni Ortu</span>
            </button>

            <button
              onClick={() => setActiveTab("faqs")}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                activeTab === "faqs"
                  ? "bg-[#F5BA13] text-[#143D2B] shadow-md"
                  : "text-white hover:bg-white/15"
              }`}
            >
              <HelpCircle className="w-4 h-4 stroke-[2.5]" />
              <span>Tanya Jawab (FAQ)</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="pt-5 mt-6 border-t-2 border-white/20 space-y-2.5">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white hover:bg-slate-100 text-[#143D2B] text-xs font-black transition-all shadow-md"
          >
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            <span>Lihat Web Pengunjung ↗</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#EE4C23] hover:bg-[#d43f19] text-white text-xs font-black transition-all shadow-md cursor-pointer border-2 border-[#EE4C23]"
          >
            <LogOut className="w-4 h-4 stroke-[2.5]" />
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </aside>

      {/* KONTEN UTAMA DASHBOARD */}
      <main className="flex-1 p-4 sm:p-7 md:p-9 overflow-y-auto">
        {/* ========================================================= */}
        {/* TAB 1: CRM LEADS (CONTACT VAULT)                         */}
        {/* ========================================================= */}
        {activeTab === "leads" && (
          <div className="space-y-5">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-heading font-black text-2xl text-[#143D2B] tracking-tight">
                  Contact Vault • CRM Leads
                </h2>
                <p className="text-xs font-bold text-slate-500 font-nunito mt-0.5">
                  Kelola pendaftar masuk dari formulir landing page & pantau pipeline closing murid
                </p>
              </div>
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#143D2B] hover:bg-[#0f2e21] text-[#F5BA13] font-heading font-black text-xs transition-colors shadow-md cursor-pointer self-start sm:self-auto"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Export CSV / Excel</span>
              </button>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-2xl border-2 border-[#143D2B]/15 shadow-sm">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 font-nunito block mb-1">
                  Total Leads
                </span>
                <span className="font-heading font-black text-2xl text-[#143D2B] leading-none">
                  {totalLeads}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-[#2563EB]/30 shadow-sm">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] font-nunito block mb-1">
                  Perlu Dihubungi
                </span>
                <span className="font-heading font-black text-2xl text-[#2563EB] leading-none">
                  {countBaru}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-[#7C3AED]/30 shadow-sm">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7C3AED] font-nunito block mb-1">
                  Jadwal Free Trial
                </span>
                <span className="font-heading font-black text-2xl text-[#7C3AED] leading-none">
                  {countFreeTrial}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-[#143D2B]/40 shadow-sm bg-[#143D2B]/5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#143D2B] font-nunito block mb-1">
                  Closing / Terdaftar
                </span>
                <span className="font-heading font-black text-2xl text-[#143D2B] leading-none">
                  {countClosing}
                </span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-3xl border-2 border-[#143D2B]/15 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-30">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama orang tua, anak, atau nomor WhatsApp..."
                  value={searchLeads}
                  onChange={(e) => {
                    setSearchLeads(e.target.value);
                    fetchLeads(e.target.value, statusFilter);
                  }}
                  className="w-full pl-10 pr-3.5 h-11 rounded-xl border border-[#143D2B]/20 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#143D2B] bg-white transition-all shadow-sm"
                />
              </div>

              {/* Status Filter Combobox */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-full sm:w-64">
                  <Autocomplete
                    items={STATUS_FILTER_OPTIONS}
                    value={statusFilter === "ALL" ? "" : statusFilter}
                    placeholder="Semua Status"
                    onValueChange={(val) => {
                      const nextStatus = !val || val === "ALL" ? "ALL" : val;
                      setStatusFilter(nextStatus);
                      fetchLeads(searchLeads, nextStatus);
                    }}
                    emptyMessage="Status tidak ditemukan"
                  />
                </div>

                <button
                  onClick={() => fetchLeads()}
                  className="h-11 w-11 flex items-center justify-center rounded-xl border border-[#143D2B]/20 bg-white hover:bg-[#F7F5EE] text-[#143D2B] cursor-pointer no-pop flex-shrink-0 transition-colors shadow-sm"
                  title="Refresh Data"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoadingLeads ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-3xl border-2 border-[#143D2B]/15 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#143D2B] text-[#F5BA13] font-nunito font-black uppercase text-[10.5px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Waktu</th>
                      <th className="py-3 px-4">Orang Tua & Anak</th>
                      <th className="py-3 px-4">WhatsApp</th>
                      <th className="py-3 px-4">Pilihan Program</th>
                      <th className="py-3 px-4 text-center">Status Pipeline</th>
                      <th className="py-3 px-4 text-center">Catatan CS</th>
                      <th className="py-3 px-4 text-center">Aksi Langsung</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-10 text-center text-slate-400 font-semibold">
                          {isLoadingLeads ? "Memuat data pendaftar..." : "Belum ada leads yang cocok dengan pencarian."}
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead) => {
                        const curStatus = (lead.status || "baru").toLowerCase();
                        const statusObj = STATUS_OPTIONS.find((s) => s.value === curStatus) || STATUS_OPTIONS[0];

                        return (
                          <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3 px-4 text-slate-500 whitespace-nowrap text-[11px] font-mono">
                              {new Date(lead.created_at).toLocaleString("id-ID", {
                                day: "2-digit",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td className="py-3 px-4">
                              <span className="font-heading font-black text-sm text-[#143D2B] block">
                                {lead.parent_name}
                              </span>
                              <span className="text-[11px] text-slate-500 font-semibold">
                                Anak: {lead.child_name} ({lead.child_age} thn)
                              </span>
                            </td>
                            <td className="py-3 px-4 font-mono font-bold text-slate-700 whitespace-nowrap">
                              {lead.whatsapp}
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-block px-2.5 py-1 rounded-xl bg-[#F7F5EE] border border-[#143D2B]/15 text-[#143D2B] text-[11px] font-black font-nunito whitespace-nowrap">
                                {COURSE_LABELS[lead.course_id] || lead.course_id}
                              </span>
                            </td>

                            {/* Dropdown Status Pipeline Tegas (Murni Teks) */}
                            <td className="py-3 px-4 text-center whitespace-nowrap">
                              <select
                                value={curStatus}
                                onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                                className={`px-3 py-1.5 rounded-full text-[10.5px] font-black uppercase tracking-wider cursor-pointer border-none shadow-xs ${statusObj.bg} ${statusObj.text} focus:outline-none`}
                              >
                                {STATUS_OPTIONS.map((opt) => (
                                  <option key={opt.value} value={opt.value} className="bg-white text-slate-900 font-bold">
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                            </td>

                            {/* Catatan CS Button */}
                            <td className="py-3 px-4 text-center whitespace-nowrap">
                              <button
                                onClick={() => {
                                  setSelectedLeadForNotes(lead);
                                  setLeadNoteInput(lead.notes || "");
                                }}
                                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-colors flex items-center gap-1 mx-auto cursor-pointer ${
                                  lead.notes
                                    ? "bg-[#143D2B]/10 border-[#143D2B]/20 text-[#143D2B]"
                                    : "bg-slate-100 border-slate-200 text-slate-400 hover:text-slate-700"
                                }`}
                                title={lead.notes || "Belum ada catatan"}
                              >
                                <FileText className="w-3.5 h-3.5" />
                                <span>{lead.notes ? "Lihat Memo" : "+ Catatan"}</span>
                              </button>
                            </td>

                            {/* Action WA & Delete */}
                            <td className="py-3 px-4 text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-1.5">
                                <a
                                  href={`https://wa.me/${lead.whatsapp}?text=${encodeURIComponent(
                                    `Halo ${lead.parent_name}, terima kasih telah mendaftarkan ${lead.child_name} di Metro Coding Kids untuk program ${
                                      COURSE_LABELS[lead.course_id] || lead.course_id
                                    }. Saya dari tim admisi ingin mengonfirmasi jadwal kelasnya.`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-[11px] shadow-sm transition-colors"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                  <span>Chat WA</span>
                                </a>
                                <button
                                  onClick={() => deleteLead(lead.id)}
                                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                  title="Hapus Lead"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Edit Catatan CS */}
            {selectedLeadForNotes && (
              <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 max-w-md w-full border-2 border-[#143D2B] shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-black text-lg text-[#143D2B]">
                      Catatan Follow-up CS
                    </h3>
                    <button
                      onClick={() => setSelectedLeadForNotes(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold mb-3">
                    Orang Tua: <strong>{selectedLeadForNotes.parent_name}</strong> • Anak:{" "}
                    <strong>{selectedLeadForNotes.child_name}</strong>
                  </p>
                  <textarea
                    rows={4}
                    placeholder="Contoh: Ibu minta kelas offline hari Sabtu jam 10 pagi, anak sangat suka game Roblox..."
                    value={leadNoteInput}
                    onChange={(e) => setLeadNoteInput(e.target.value)}
                    className="w-full p-3.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#143D2B] mb-4"
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setSelectedLeadForNotes(null)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 cursor-pointer"
                    >
                      Batal
                    </button>
                    <button
                      onClick={saveLeadNotes}
                      className="px-5 py-2.5 rounded-xl bg-[#143D2B] hover:bg-[#0f2e21] text-[#F5BA13] font-heading font-black text-xs cursor-pointer shadow-md"
                    >
                      Simpan Catatan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: PROMO & CAMPAIGN SETTINGS                          */}
        {/* ========================================================= */}
        {activeTab === "campaign" && (
          <div className="max-w-2xl space-y-6">
            <div>
              <h2 className="font-heading font-black text-2xl text-[#143D2B] tracking-tight">
                Pengaturan Promo & Campaign
              </h2>
              <p className="text-xs font-bold text-slate-500 font-nunito mt-0.5">
                Kontrol nomor WhatsApp CS, countdown timer, dan tiket voucher promo di landing page
              </p>
            </div>

            <form onSubmit={handleSaveCampaign} className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#143D2B]/15 shadow-sm space-y-4">
              {/* 1. Section Navbar WA */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                  Nomor WhatsApp CS Utama (Format: 628xxx)
                </label>
                <input
                  type="text"
                  required
                  value={campaign.whatsapp_number}
                  onChange={(e) => setCampaign({ ...campaign, whatsapp_number: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-mono font-bold focus:outline-none focus:border-[#143D2B]"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Otomatis mengubah nomor di Navbar, Floating WA, tombol konsultasi, dan Footer.
                </span>
              </div>

              {/* 2. Section Hero Sisa Kursi */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                  Sisa Kursi Belajar (Hero Urgency Badge)
                </label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={campaign.quota_seats_left}
                  onChange={(e) => setCampaign({ ...campaign, quota_seats_left: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#143D2B]"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Tampil sebagai badge: &quot;Sisa {campaign.quota_seats_left} Kursi Belajar&quot; di bagian atas Hero.
                </span>
              </div>

              {/* 3. Section Voucher Batch */}
              <div className="pt-3 border-t border-slate-100">
                <label className="block text-xs font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                  Nama Batch Promo
                </label>
                <input
                  type="text"
                  value={campaign.batch_name}
                  onChange={(e) => setCampaign({ ...campaign, batch_name: e.target.value })}
                  placeholder="Contoh: Batch November 2026"
                  className="w-full px-3.5 py-2.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#143D2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                  Tenggat Waktu Countdown Timer
                </label>
                <input
                  type="text"
                  value={campaign.batch_deadline}
                  onChange={(e) => setCampaign({ ...campaign, batch_deadline: e.target.value })}
                  placeholder="Format: YYYY-MM-DDTHH:MM:SS"
                  className="w-full px-3.5 py-2.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-mono font-bold focus:outline-none focus:border-[#143D2B]"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Contoh: 2026-11-15T23:59:59 (Countdown jam, menit, detik di web sinkron otomatis).
                </span>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                  Besaran Voucher Diskon
                </label>
                <input
                  type="text"
                  value={campaign.voucher_badge}
                  onChange={(e) => setCampaign({ ...campaign, voucher_badge: e.target.value })}
                  placeholder="Contoh: DISKON 15%"
                  className="w-full px-3.5 py-2.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#143D2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                  Deskripsi Penawaran Tiket Voucher
                </label>
                <textarea
                  rows={2}
                  value={campaign.voucher_description}
                  onChange={(e) => setCampaign({ ...campaign, voucher_description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-2xl border-2 border-[#143D2B]/20 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#143D2B]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSavingCampaign}
                  className="w-full py-3.5 rounded-2xl bg-[#EE4C23] hover:bg-[#d93f18] text-white font-heading font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all disabled:opacity-70"
                >
                  <Save className="w-4 h-4 stroke-[2.5]" />
                  <span>{isSavingCampaign ? "Menyimpan Perubahan..." : "Simpan Semua Pengaturan"}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PROGRAM KELAS & KURIKULUM                          */}
        {/* ========================================================= */}
        {activeTab === "programs" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-heading font-black text-2xl text-[#143D2B] tracking-tight">
                  Manajemen Program Kelas & Kurikulum
                </h2>
                <p className="text-xs font-bold text-slate-500 font-nunito mt-0.5">
                  Tambah kelas baru atau ubah materi silabus. Perubahan otomatis sinkron ke Landing Page & Form Registrasi.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingProgram({
                    id: `program_${Date.now()}`,
                    title: "",
                    badge: "",
                    age: "Usia 8 – 11 Tahun",
                    ageRaw: "8–11",
                    focus: "",
                    desc: "",
                    points: ["", "", "", ""],
                    highlight: false,
                    colorScheme: "yellow",
                    isActive: true,
                    order: programs.length + 1,
                  });
                  setIsAddingProgram(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#143D2B] hover:bg-[#0f2e21] text-[#F5BA13] font-heading font-black text-xs transition-colors shadow-md cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>+ Tambah Kelas Baru</span>
              </button>
            </div>

            {/* List Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((prog) => (
                <div
                  key={prog.id}
                  className={`bg-white rounded-3xl p-5 border-2 shadow-sm transition-all select-none ${
                    prog.isActive ? "border-[#143D2B]/20" : "border-slate-200 opacity-60 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#143D2B] text-[#F5BA13] font-nunito">
                      {prog.age}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleToggleProgramActive(prog.id)}
                        className={`text-[10px] font-black px-2.5 py-1 rounded-xl cursor-pointer ${
                          prog.isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {prog.isActive ? "AKTIF" : "NON-AKTIF"}
                      </button>
                      <button
                        onClick={() => {
                          setEditingProgram(prog);
                          setIsAddingProgram(false);
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#143D2B] cursor-pointer"
                        title="Edit Kelas"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProgram(prog.id)}
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 cursor-pointer"
                        title="Hapus Kelas"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <span className="text-xs font-black text-slate-400 block mb-0.5 font-nunito uppercase">
                    {prog.badge}
                  </span>
                  <h3 className="font-heading font-black text-lg text-[#143D2B] leading-tight mb-1">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold mb-3 line-clamp-2">
                    {prog.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-[#143D2B] block font-nunito mb-1">
                      Materi ({prog.points?.length || 0} Poin):
                    </span>
                    {prog.points?.slice(0, 3).map((pt, idx) => (
                      <div key={idx} className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#143D2B] shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Tambah / Edit Program Kelas */}
            {editingProgram && (
              <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full border-2 border-[#143D2B] shadow-2xl my-8">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <h3 className="font-heading font-black text-xl text-[#143D2B]">
                      {isAddingProgram ? "Tambah Program Kelas Baru" : "Edit Program Kelas"}
                    </h3>
                    <button
                      onClick={() => setEditingProgram(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Nama Program Kelas
                      </label>
                      <input
                        type="text"
                        required
                        value={editingProgram.title}
                        onChange={(e) => setEditingProgram({ ...editingProgram, title: e.target.value })}
                        placeholder="Contoh: Roblox Studio Mastery"
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Subjudul / Badge Atas
                        </label>
                        <input
                          type="text"
                          value={editingProgram.badge}
                          onChange={(e) => setEditingProgram({ ...editingProgram, badge: e.target.value })}
                          placeholder="Fondasi Koding & Logika"
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                        />
                      </div>
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Kategori Usia
                        </label>
                        <input
                          type="text"
                          value={editingProgram.age}
                          onChange={(e) => setEditingProgram({ ...editingProgram, age: e.target.value })}
                          placeholder="Usia 8 – 11 Tahun"
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Fokus Tagline
                      </label>
                      <input
                        type="text"
                        value={editingProgram.focus}
                        onChange={(e) => setEditingProgram({ ...editingProgram, focus: e.target.value })}
                        placeholder="Logic, Coding, Game"
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Deskripsi Singkat
                      </label>
                      <textarea
                        rows={2}
                        value={editingProgram.desc}
                        onChange={(e) => setEditingProgram({ ...editingProgram, desc: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-semibold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1.5 font-nunito">
                        4 Poin Checklist Materi:
                      </label>
                      <div className="space-y-1.5">
                        {editingProgram.points.map((pt, idx) => (
                          <input
                            key={idx}
                            type="text"
                            value={pt}
                            onChange={(e) => {
                              const newPoints = [...editingProgram.points];
                              newPoints[idx] = e.target.value;
                              setEditingProgram({ ...editingProgram, points: newPoints });
                            }}
                            placeholder={`Poin materi ${idx + 1}`}
                            className="w-full px-3 py-1.5 rounded-xl border border-slate-200 font-semibold focus:outline-none focus:border-[#143D2B]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Tema Warna Kartu
                        </label>
                        <select
                          value={editingProgram.colorScheme}
                          onChange={(e) => setEditingProgram({ ...editingProgram, colorScheme: e.target.value as any })}
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold bg-white focus:outline-none focus:border-[#143D2B]"
                        >
                          <option value="yellow">Kuning Emas (Yellow)</option>
                          <option value="orange">Oranye Cerah (Orange)</option>
                          <option value="blue">Biru Royal (Blue)</option>
                          <option value="green">Hijau Tua (Green)</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2 pt-5">
                        <input
                          type="checkbox"
                          id="highlightCheck"
                          checked={editingProgram.highlight}
                          onChange={(e) => setEditingProgram({ ...editingProgram, highlight: e.target.checked })}
                          className="w-4 h-4 accent-[#EE4C23] cursor-pointer"
                        />
                        <label htmlFor="highlightCheck" className="font-bold text-[#143D2B] cursor-pointer">
                          Kartu Unggulan (Paling Diminati)
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setEditingProgram(null)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveSingleProgram(editingProgram)}
                        className="px-5 py-2.5 rounded-xl bg-[#EE4C23] hover:bg-[#d93f18] text-white font-heading font-black cursor-pointer shadow-md"
                      >
                        Simpan Program
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: TESTIMONI ORANG TUA                                */}
        {/* ========================================================= */}
        {activeTab === "testimonials" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-heading font-black text-2xl text-[#143D2B] tracking-tight">
                  Manajemen Testimoni Orang Tua
                </h2>
                <p className="text-xs font-bold text-slate-500 font-nunito mt-0.5">
                  Tambah atau ubah cerita kepuasan orang tua murid untuk ditampilkan di bagian &quot;Apa Kata Orang Tua&quot;.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingTestimonial({
                    id: `testi_${Date.now()}`,
                    name: "",
                    role: "Orang Tua dari ...",
                    classTaken: "Code & Game",
                    text: "",
                    rating: 5,
                    avatarInitials: "OT",
                    colorScheme: "yellow",
                    isActive: true,
                    order: testimonials.length + 1,
                  });
                  setIsAddingTestimonial(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#143D2B] hover:bg-[#0f2e21] text-[#F5BA13] font-heading font-black text-xs transition-colors shadow-md cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>+ Tambah Testimoni Baru</span>
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className={`bg-white rounded-3xl p-5 border-2 shadow-sm transition-all ${
                    t.isActive ? "border-[#143D2B]/15" : "border-slate-200 opacity-60 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1 text-[#F5BA13]">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F5BA13]" />
                      ))}
                      <span className="text-xs font-black text-[#143D2B] ml-1 font-nunito">5.0</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleToggleTestimonialActive(t.id)}
                        className={`text-[10px] font-black px-2 py-0.5 rounded-lg cursor-pointer ${
                          t.isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {t.isActive ? "TAMPIL" : "SEMBUNYI"}
                      </button>
                      <button
                        onClick={() => {
                          setEditingTestimonial(t);
                          setIsAddingTestimonial(false);
                        }}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(t.id)}
                        className="p-1 rounded-lg text-slate-400 hover:text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 font-semibold leading-relaxed mb-3 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-[#F5BA13] text-[#143D2B] flex items-center justify-center font-heading font-black text-xs">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xs text-[#143D2B] leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[10.5px] text-slate-500 font-semibold">
                        {t.role} • <span className="text-[#EE4C23]">{t.classTaken}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Tambah / Edit Testimoni */}
            {editingTestimonial && (
              <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 max-w-md w-full border-2 border-[#143D2B] shadow-2xl">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <h3 className="font-heading font-black text-xl text-[#143D2B]">
                      {isAddingTestimonial ? "Tambah Testimoni Baru" : "Edit Testimoni"}
                    </h3>
                    <button
                      onClick={() => setEditingTestimonial(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Nama Orang Tua
                      </label>
                      <input
                        type="text"
                        required
                        value={editingTestimonial.name}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                        placeholder="Contoh: Bunda Sarah"
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Keterangan Anak & Usia
                        </label>
                        <input
                          type="text"
                          value={editingTestimonial.role}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                          placeholder="Orang Tua dari Kenzi (10 Thn)"
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                        />
                      </div>
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Kelas yang Diambil
                        </label>
                        <input
                          type="text"
                          value={editingTestimonial.classTaken}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, classTaken: e.target.value })}
                          placeholder="Code & Game"
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Isi Ulasan Testimoni
                      </label>
                      <textarea
                        rows={3}
                        value={editingTestimonial.text}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, text: e.target.value })}
                        placeholder="Cerita perubahan positif si kecil..."
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-semibold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Inisial Avatar (2 Huruf)
                        </label>
                        <input
                          type="text"
                          maxLength={3}
                          value={editingTestimonial.avatarInitials}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, avatarInitials: e.target.value.toUpperCase() })}
                          placeholder="BS"
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold uppercase focus:outline-none focus:border-[#143D2B]"
                        />
                      </div>
                      <div>
                        <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                          Warna Tag
                        </label>
                        <select
                          value={editingTestimonial.colorScheme}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, colorScheme: e.target.value as any })}
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold bg-white focus:outline-none focus:border-[#143D2B]"
                        >
                          <option value="yellow">Kuning (Yellow)</option>
                          <option value="orange">Oranye (Orange)</option>
                          <option value="blue">Biru (Blue)</option>
                          <option value="green">Hijau (Green)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setEditingTestimonial(null)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveSingleTestimonial(editingTestimonial)}
                        className="px-5 py-2.5 rounded-xl bg-[#EE4C23] hover:bg-[#d93f18] text-white font-heading font-black cursor-pointer shadow-md"
                      >
                        Simpan Testimoni
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: TANYA JAWAB (FAQ)                                   */}
        {/* ========================================================= */}
        {activeTab === "faqs" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-heading font-black text-2xl text-[#143D2B] tracking-tight">
                  Manajemen Tanya Jawab (FAQ)
                </h2>
                <p className="text-xs font-bold text-slate-500 font-nunito mt-0.5">
                  Kelola daftar pertanyaan yang sering diajukan orang tua murid pada bagian FAQ landing page.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingFaq({
                    id: `faq_${Date.now()}`,
                    question: "",
                    answer: "",
                    isActive: true,
                    order: faqs.length + 1,
                  });
                  setIsAddingFaq(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#143D2B] hover:bg-[#0f2e21] text-[#F5BA13] font-heading font-black text-xs transition-colors shadow-md cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>+ Tambah FAQ Baru</span>
              </button>
            </div>

            {/* List FAQs */}
            <div className="space-y-3">
              {faqs.map((f, idx) => (
                <div
                  key={f.id}
                  className={`bg-white rounded-3xl p-5 border-2 shadow-sm transition-all ${
                    f.isActive ? "border-[#143D2B]/15" : "border-slate-200 opacity-60 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#143D2B] text-[#F5BA13] font-nunito font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h3 className="font-heading font-black text-base text-[#143D2B] leading-snug">
                        {f.question}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleToggleFaqActive(f.id)}
                        className={`text-[10px] font-black px-2.5 py-1 rounded-xl cursor-pointer ${
                          f.isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {f.isActive ? "TAMPIL" : "SEMBUNYI"}
                      </button>
                      <button
                        onClick={() => {
                          setEditingFaq(f);
                          setIsAddingFaq(false);
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#143D2B] cursor-pointer"
                        title="Edit FAQ"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(f.id)}
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 cursor-pointer"
                        title="Hapus FAQ"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-semibold leading-relaxed pl-8">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Tambah / Edit FAQ */}
            {editingFaq && (
              <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 max-w-lg w-full border-2 border-[#143D2B] shadow-2xl">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <h3 className="font-heading font-black text-xl text-[#143D2B]">
                      {isAddingFaq ? "Tambah FAQ Baru" : "Edit Pertanyaan FAQ"}
                    </h3>
                    <button
                      onClick={() => setEditingFaq(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Kalimat Pertanyaan
                      </label>
                      <input
                        type="text"
                        required
                        value={editingFaq.question}
                        onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                        placeholder="Contoh: Apakah anak harus punya laptop sendiri?"
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-bold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div>
                      <label className="block font-black uppercase tracking-wider text-[#143D2B] mb-1 font-nunito">
                        Jawaban Detail & Meyakinkan
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={editingFaq.answer}
                        onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                        placeholder="Jawaban penjelasan ramah untuk orang tua..."
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#143D2B]/20 font-semibold focus:outline-none focus:border-[#143D2B]"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setEditingFaq(null)}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveSingleFaq(editingFaq)}
                        className="px-5 py-2.5 rounded-xl bg-[#EE4C23] hover:bg-[#d93f18] text-white font-heading font-black cursor-pointer shadow-md"
                      >
                        Simpan FAQ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
