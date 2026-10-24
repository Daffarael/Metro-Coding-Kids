export interface ProgramItem {
  id: string;
  badge: string;
  title: string;
  age: string;
  ageRaw: string;
  focus: string;
  desc: string;
  points: string[];
  highlight: boolean;
  colorScheme: "yellow" | "orange" | "blue" | "green";
  isActive: boolean;
  order: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  classTaken: string;
  text: string;
  rating: number;
  avatarInitials: string;
  colorScheme: "yellow" | "orange" | "blue" | "green";
  isActive: boolean;
  order: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isActive: boolean;
  order: number;
}

export interface CampaignSettings {
  whatsapp_number: string;
  batch_name: string;
  batch_deadline: string;
  voucher_badge: string;
  voucher_description: string;
  quota_seats_left: number;
}

export const DEFAULT_CAMPAIGN_SETTINGS: CampaignSettings = {
  whatsapp_number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281818778099",
  batch_name: "Batch November 2026",
  batch_deadline: "2026-11-15T23:59:59",
  voucher_badge: "DISKON 15%",
  voucher_description: "Khusus untuk pendaftar baru yang mengamankan kursi belajar di bulan November.",
  quota_seats_left: 4,
};

export const DEFAULT_PROGRAMS: ProgramItem[] = [
  {
    id: "code_game",
    badge: "Fondasi Koding & Logika",
    title: "Code & Game",
    age: "Usia 8 – 11 Tahun",
    ageRaw: "8–11",
    focus: "Logic, Coding, Game",
    desc: "Anak belajar dasar logika pemrograman dan algoritma komputasional melalui pembuatan game interaktif yang seru dan menyenangkan.",
    points: [
      "Computational Thinking & logika sekuensial (urutan langkah algoritma)",
      "Coding logika game interaktif ramah pemula tanpa beban hafalan sintaks rumit",
      "Menciptakan game aksi, petualangan labirin, dan animasi interaktif mandiri",
      "Melatih fokus, daya nalar logis, problem solving, & kreativitas si kecil",
    ],
    highlight: false,
    colorScheme: "yellow",
    isActive: true,
    order: 1,
  },
  {
    id: "creative_tech",
    badge: "Koding Eksploratif & AI Ramah Anak",
    title: "Creative Technology",
    age: "Usia 8 – 11 Tahun",
    ageRaw: "8–11",
    focus: "Coding, AI, Creative Project",
    desc: "Eksplorasi seru menggabungkan koding modern, pengenalan kecerdasan buatan (AI) ramah anak, dan berbagai proyek teknologi kreatif yang aplikatif.",
    points: [
      "Pengenalan konsep Artificial Intelligence (AI) & Computer Vision ramah anak",
      "Eksplorasi sensor interaktif, efek suara cerdas, webcam, & generative art",
      "Creative project: merancang karya teknologi unik sesuai imajinasi si kecil",
      "Mengubah rasa penasaran anak terhadap gadget menjadi aksi nyata berkarya",
    ],
    highlight: true,
    colorScheme: "orange",
    isActive: true,
    order: 2,
  },
  {
    id: "digital_creator",
    badge: "Kreator Mandiri & Produk Digital",
    title: "Digital Creator",
    age: "Usia 12 – 14 Tahun",
    ageRaw: "12–14",
    focus: "Game, Web, AI, Digital Product",
    desc: "Dirancang untuk remaja mengembangkan game level lanjut, desain web interaktif, integrasi AI tools modern, hingga meluncurkan digital product sendiri.",
    points: [
      "Mekanik game tingkat lanjut: fisika gerak, variabel skor dinamis, & multi-level",
      "Dasar pembuatan halaman web interaktif & tampilan antarmuka digital modern",
      "Pemanfaatan AI untuk mempercepat ideasi konsep, aset visual, & problem solving",
      "Menciptakan digital product nyata yang siap diakses dan dipamerkan secara online",
    ],
    highlight: false,
    colorScheme: "blue",
    isActive: true,
    order: 3,
  },
  {
    id: "future_tech",
    badge: "Persiapan Karir & Pemrograman Profesional",
    title: "Future Tech",
    age: "Usia 15 – 18 Tahun",
    ageRaw: "15–18",
    focus: "Python, Web/App, AI, Automation",
    desc: "Persiapan intensif pemrograman profesional berbasis teks nyata: Python, Full-stack Web/App development, implementasi AI, serta otomasi digital modern.",
    points: [
      "Bahasa pemrograman Python standar industri, struktur data, & logika backend",
      "Pengembangan Web & Aplikasi (Web/App) modern yang siap pakai dan responsif",
      "Implementasi AI terapan & skrip automasi untuk menyelesaikan masalah nyata",
      "Membangun portofolio profesional untuk persiapan kuliah IT, kompetisi, & karir",
    ],
    highlight: false,
    colorScheme: "green",
    isActive: true,
    order: 4,
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Bunda Maya",
    role: "Orang Tua dari Arkan (9 Tahun)",
    classTaken: "Code & Game",
    text: "Dulu anak saya kalau pegang tablet cuma nonton video dan nge-game berjam-jam. Setelah ikut kelas Code & Game di Metro Coding Kids, dia sekarang bangga banget nunjukin game buatan sendiri ke keluarga. Screen time jadi produktif!",
    rating: 5,
    avatarInitials: "BM",
    colorScheme: "yellow",
    isActive: true,
    order: 1,
  },
  {
    id: "testi-2",
    name: "Ayah Hendra",
    role: "Orang Tua dari Rasya (11 Tahun)",
    classTaken: "Creative Technology",
    text: "Materi koding dan AI-nya visual dan sangat seru. Mentornya sabar dan telaten memandu eksplorasi proyek kreatif anak sampai tuntas. Kelas semi-privat bikin tiap anak benar-benar terpantau intensif.",
    rating: 5,
    avatarInitials: "AH",
    colorScheme: "orange",
    isActive: true,
    order: 2,
  },
  {
    id: "testi-3",
    name: "Bunda Citra",
    role: "Orang Tua dari Kayla (13 Tahun)",
    classTaken: "Digital Creator",
    text: "Kayla yang tadinya pemalu jadi jauh lebih percaya diri saat mempresentasikan hasil karya web dan digital product ciptaannya. Kemampuan logika berpikir dan problem solving-nya terasa sekali meningkat.",
    rating: 5,
    avatarInitials: "BC",
    colorScheme: "blue",
    isActive: true,
    order: 3,
  },
  {
    id: "testi-4",
    name: "Pak Dimas",
    role: "Orang Tua dari Fathir (16 Tahun)",
    classTaken: "Future Tech",
    text: "Persiapan yang luar biasa untuk masa depan. Di program Future Tech, Fathir belajar Python, web development, dan otomasi AI secara terstruktur. Portofolionya siap untuk lanjut kuliah IT.",
    rating: 5,
    avatarInitials: "PD",
    colorScheme: "green",
    isActive: true,
    order: 4,
  },
];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah anak harus sudah pernah coding sebelumnya?",
    answer: "Sama sekali tidak perlu! Kurikulum kami dirancang dari nol dengan metode bertahap yang sangat ramah anak. Untuk program awal seperti Code & Game dan Creative Technology, anak diajak memahami logika berpikir dan membuat game tanpa perlu pusing menghafal sintaks rumit.",
    isActive: true,
    order: 1,
  },
  {
    id: "faq-2",
    question: "Bagaimana cara memilih di antara 4 Core Programs?",
    answer: "Kami menyediakan 4 jenjang sesuai usia & fokus: Code & Game (8–11 thn: Logic, coding, game), Creative Technology (8–11 thn: Coding, AI, creative project), Digital Creator (12–14 thn: Game, web, AI, digital product), dan Future Tech (15–18 thn: Python, Web/App, AI, automation). Anda juga dapat memilih opsi 'Konsultasi CS' di formulir pendaftaran.",
    isActive: true,
    order: 2,
  },
  {
    id: "faq-3",
    question: "Kelasnya online atau offline?",
    answer: "Tersedia pilihan kelas tatap muka (offline) langsung di Taman Palem, Jakarta Barat dan Setiabudi Bandung, maupun kelas online interaktif via Zoom untuk peserta dari luar kota. Kedua format sama-sama semi-privat maksimal 6 anak per kelas.",
    isActive: true,
    order: 3,
  },
  {
    id: "faq-4",
    question: "Perangkat apa yang dibutuhkan?",
    answer: "Cukup laptop standar biasa atau komputer dengan koneksi internet dan browser Google Chrome.",
    isActive: true,
    order: 4,
  },
  {
    id: "faq-5",
    question: "Bagaimana cara mendaftar kelasnya?",
    answer: "Cukup isi formulir pendaftaran singkat di atas dengan nama dan nomor WhatsApp Anda. Tim Admin kami akan segera menghubungi untuk mengonfirmasi ketersediaan kursi dan rekomendasi jadwal belajar si kecil.",
    isActive: true,
    order: 5,
  },
];
