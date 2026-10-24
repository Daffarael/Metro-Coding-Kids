export interface RegistrationItem {
  name: string;
  course: string;
  time: string;
  isReal?: boolean;
}

export const RAW_100_REGISTRATIONS: RegistrationItem[] = [
  { name: "Kenzo (Jakarta Selatan)", course: "Code & Game", time: "Baru saja" },
  { name: "Arkan (Bandung)", course: "Creative Technology", time: "2 menit lalu" },
  { name: "Kayla (Bekasi)", course: "Digital Creator", time: "4 menit lalu" },
  { name: "Rasya (Tangerang)", course: "Future Tech", time: "5 menit lalu" },
  { name: "Althaf (Jakarta Timur)", course: "Code & Game", time: "7 menit lalu" },
  { name: "Nafisa (Depok)", course: "Creative Technology", time: "9 menit lalu" },
  { name: "Rafa (Surabaya)", course: "Digital Creator", time: "11 menit lalu" },
  { name: "Gavin (Jakarta Barat)", course: "Future Tech", time: "14 menit lalu" },
  { name: "Aisyah (Semarang)", course: "Code & Game", time: "16 menit lalu" },
  { name: "Darren (Bogor)", course: "Creative Technology", time: "18 menit lalu" },

  { name: "Rayyan (Metro)", course: "Code & Game", time: "Baru saja" },
  { name: "Zara (Bandar Lampung)", course: "Creative Technology", time: "3 menit lalu" },
  { name: "Kenzie (Palembang)", course: "Digital Creator", time: "5 menit lalu" },
  { name: "Naura (Yogyakarta)", course: "Future Tech", time: "8 menit lalu" },
  { name: "Alvaro (Malang)", course: "Code & Game", time: "10 menit lalu" },
  { name: "Kirana (Solo)", course: "Creative Technology", time: "12 menit lalu" },
  { name: "Fathan (Medan)", course: "Digital Creator", time: "15 menit lalu" },
  { name: "Alana (Denpasar)", course: "Future Tech", time: "19 menit lalu" },
  { name: "Bilal (Pekanbaru)", course: "Code & Game", time: "21 menit lalu" },
  { name: "Mikayla (Makassar)", course: "Creative Technology", time: "24 menit lalu" },

  { name: "Malik (Tangerang Selatan)", course: "Digital Creator", time: "Baru saja" },
  { name: "Alesha (Jakarta Pusat)", course: "Future Tech", time: "2 menit lalu" },
  { name: "Nizam (Cimahi)", course: "Code & Game", time: "4 menit lalu" },
  { name: "Kanaya (Sidoarjo)", course: "Creative Technology", time: "6 menit lalu" },
  { name: "Danendra (Batam)", course: "Digital Creator", time: "9 menit lalu" },
  { name: "Safiyya (Padang)", course: "Future Tech", time: "11 menit lalu" },
  { name: "Fabian (Pontianak)", course: "Code & Game", time: "13 menit lalu" },
  { name: "Clarissa (Balikpapan)", course: "Creative Technology", time: "17 menit lalu" },
  { name: "Dylan (Samarinda)", course: "Digital Creator", time: "20 menit lalu" },
  { name: "Syifa (Banjarmasin)", course: "Future Tech", time: "22 menit lalu" },

  { name: "Gibran (Jakarta Selatan)", course: "Code & Game", time: "Baru saja" },
  { name: "Zahra (Bandung)", course: "Creative Technology", time: "3 menit lalu" },
  { name: "Arka (Bekasi)", course: "Digital Creator", time: "5 menit lalu" },
  { name: "Shanum (Depok)", course: "Future Tech", time: "7 menit lalu" },
  { name: "Bima (Bogor)", course: "Code & Game", time: "10 menit lalu" },
  { name: "Ayra (Tangerang)", course: "Creative Technology", time: "12 menit lalu" },
  { name: "Elvano (Jakarta Barat)", course: "Digital Creator", time: "15 menit lalu" },
  { name: "Nadine (Jakarta Timur)", course: "Future Tech", time: "18 menit lalu" },
  { name: "Keenan (Surabaya)", course: "Code & Game", time: "21 menit lalu" },
  { name: "Callista (Semarang)", course: "Creative Technology", time: "25 menit lalu" },

  { name: "Rafandra (Yogyakarta)", course: "Digital Creator", time: "Baru saja" },
  { name: "Aurel (Solo)", course: "Future Tech", time: "2 menit lalu" },
  { name: "Sean (Malang)", course: "Code & Game", time: "4 menit lalu" },
  { name: "Nayla (Metro)", course: "Creative Technology", time: "6 menit lalu" },
  { name: "Azka (Bandar Lampung)", course: "Digital Creator", time: "9 menit lalu" },
  { name: "Talita (Palembang)", course: "Future Tech", time: "11 menit lalu" },
  { name: "Mikael (Medan)", course: "Code & Game", time: "14 menit lalu" },
  { name: "Jasmine (Denpasar)", course: "Creative Technology", time: "17 menit lalu" },
  { name: "Nathan (Batam)", course: "Digital Creator", time: "19 menit lalu" },
  { name: "Hana (Pekanbaru)", course: "Future Tech", time: "23 menit lalu" },

  { name: "Liam (Jakarta Utara)", course: "Code & Game", time: "Baru saja" },
  { name: "Raisa (Jakarta Selatan)", course: "Creative Technology", time: "3 menit lalu" },
  { name: "Julian (Bandung)", course: "Digital Creator", time: "5 menit lalu" },
  { name: "Annisa (Tangerang Selatan)", course: "Future Tech", time: "8 menit lalu" },
  { name: "Rehan (Bekasi)", course: "Code & Game", time: "10 menit lalu" },
  { name: "Arumi (Depok)", course: "Creative Technology", time: "13 menit lalu" },
  { name: "Farhan (Bogor)", course: "Digital Creator", time: "16 menit lalu" },
  { name: "Bianca (Cimahi)", course: "Future Tech", time: "18 menit lalu" },
  { name: "Alden (Surabaya)", course: "Code & Game", time: "22 menit lalu" },
  { name: "Davira (Sidoarjo)", course: "Creative Technology", time: "26 menit lalu" },

  { name: "Athar (Semarang)", course: "Digital Creator", time: "Baru saja" },
  { name: "Felicia (Yogyakarta)", course: "Future Tech", time: "2 menit lalu" },
  { name: "Haidar (Solo)", course: "Code & Game", time: "4 menit lalu" },
  { name: "Giselle (Malang)", course: "Creative Technology", time: "7 menit lalu" },
  { name: "Dzaky (Metro)", course: "Digital Creator", time: "9 menit lalu" },
  { name: "Hasna (Bandar Lampung)", course: "Future Tech", time: "12 menit lalu" },
  { name: "Keanu (Palembang)", course: "Code & Game", time: "14 menit lalu" },
  { name: "Inara (Medan)", course: "Creative Technology", time: "17 menit lalu" },
  { name: "Davin (Makassar)", course: "Digital Creator", time: "20 menit lalu" },
  { name: "Joanna (Manado)", course: "Future Tech", time: "24 menit lalu" },

  { name: "Mirza (Jakarta Timur)", course: "Code & Game", time: "Baru saja" },
  { name: "Keira (Jakarta Barat)", course: "Creative Technology", time: "3 menit lalu" },
  { name: "Kevin (Jakarta Pusat)", course: "Digital Creator", time: "5 menit lalu" },
  { name: "Luna (Jakarta Selatan)", course: "Future Tech", time: "8 menit lalu" },
  { name: "Oliver (Tangerang)", course: "Code & Game", time: "10 menit lalu" },
  { name: "Maudy (Bekasi)", course: "Creative Technology", time: "13 menit lalu" },
  { name: "Adrian (Depok)", course: "Digital Creator", time: "15 menit lalu" },
  { name: "Nicole (Bogor)", course: "Future Tech", time: "19 menit lalu" },
  { name: "Arya (Bandung)", course: "Code & Game", time: "21 menit lalu" },
  { name: "Olivia (Surabaya)", course: "Creative Technology", time: "25 menit lalu" },

  { name: "Tristan (Semarang)", course: "Digital Creator", time: "Baru saja" },
  { name: "Patricia (Yogyakarta)", course: "Future Tech", time: "2 menit lalu" },
  { name: "Bryan (Solo)", course: "Code & Game", time: "4 menit lalu" },
  { name: "Queensha (Malang)", course: "Creative Technology", time: "6 menit lalu" },
  { name: "Satria (Metro)", course: "Digital Creator", time: "9 menit lalu" },
  { name: "Rania (Bandar Lampung)", course: "Future Tech", time: "11 menit lalu" },
  { name: "Danish (Palembang)", course: "Code & Game", time: "14 menit lalu" },
  { name: "Salma (Denpasar)", course: "Creative Technology", time: "16 menit lalu" },
  { name: "Fikri (Batam)", course: "Digital Creator", time: "20 menit lalu" },
  { name: "Tiara (Pekanbaru)", course: "Future Tech", time: "23 menit lalu" },

  { name: "Zaidan (Pontianak)", course: "Code & Game", time: "Baru saja" },
  { name: "Umaira (Balikpapan)", course: "Creative Technology", time: "3 menit lalu" },
  { name: "Rayhan (Samarinda)", course: "Digital Creator", time: "5 menit lalu" },
  { name: "Valerie (Banjarmasin)", course: "Future Tech", time: "7 menit lalu" },
  { name: "Barra (Makassar)", course: "Code & Game", time: "10 menit lalu" },
  { name: "Widya (Manado)", course: "Creative Technology", time: "12 menit lalu" },
  { name: "Arkana (Jakarta Selatan)", course: "Digital Creator", time: "15 menit lalu" },
  { name: "Yasmin (Bandung)", course: "Future Tech", time: "18 menit lalu" },
  { name: "Fathir (Bekasi)", course: "Code & Game", time: "22 menit lalu" },
  { name: "Zaskia (Tangerang)", course: "Creative Technology", time: "26 menit lalu" },
];

/**
 * Returns a randomized shuffle of the 100 registrations
 * so each page refresh feels completely fresh and natural.
 */
export function getShuffledRegistrations(): RegistrationItem[] {
  const array = [...RAW_100_REGISTRATIONS];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
