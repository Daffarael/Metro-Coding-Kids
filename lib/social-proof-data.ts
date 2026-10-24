export interface RegistrationItem {
  name: string;
  course: string;
  time: string;
  isReal?: boolean;
}

export const RAW_100_REGISTRATIONS: RegistrationItem[] = [
  { name: "Kenzo (Jakarta Selatan)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Arkan (Bandung)", course: "Explorer Coder", time: "2 menit lalu" },
  { name: "Kayla (Bekasi)", course: "Junior Game Maker", time: "4 menit lalu" },
  { name: "Rasya (Tangerang)", course: "Explorer Coder", time: "5 menit lalu" },
  { name: "Althaf (Jakarta Timur)", course: "Master Creator Kid", time: "7 menit lalu" },
  { name: "Nafisa (Depok)", course: "Junior Game Maker", time: "9 menit lalu" },
  { name: "Rafa (Surabaya)", course: "Explorer Coder", time: "11 menit lalu" },
  { name: "Gavin (Jakarta Barat)", course: "Master Creator Kid", time: "14 menit lalu" },
  { name: "Aisyah (Semarang)", course: "Junior Game Maker", time: "16 menit lalu" },
  { name: "Darren (Bogor)", course: "Explorer Coder", time: "18 menit lalu" },

  { name: "Rayyan (Metro)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Zara (Bandar Lampung)", course: "Explorer Coder", time: "3 menit lalu" },
  { name: "Kenzie (Palembang)", course: "Junior Game Maker", time: "5 menit lalu" },
  { name: "Naura (Yogyakarta)", course: "Explorer Coder", time: "8 menit lalu" },
  { name: "Alvaro (Malang)", course: "Master Creator Kid", time: "10 menit lalu" },
  { name: "Kirana (Solo)", course: "Junior Game Maker", time: "12 menit lalu" },
  { name: "Fathan (Medan)", course: "Explorer Coder", time: "15 menit lalu" },
  { name: "Alana (Denpasar)", course: "Master Creator Kid", time: "19 menit lalu" },
  { name: "Bilal (Pekanbaru)", course: "Junior Game Maker", time: "21 menit lalu" },
  { name: "Mikayla (Makassar)", course: "Explorer Coder", time: "24 menit lalu" },

  { name: "Malik (Tangerang Selatan)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Alesha (Jakarta Pusat)", course: "Explorer Coder", time: "2 menit lalu" },
  { name: "Nizam (Cimahi)", course: "Junior Game Maker", time: "4 menit lalu" },
  { name: "Kanaya (Sidoarjo)", course: "Explorer Coder", time: "6 menit lalu" },
  { name: "Danendra (Batam)", course: "Master Creator Kid", time: "9 menit lalu" },
  { name: "Safiyya (Padang)", course: "Junior Game Maker", time: "11 menit lalu" },
  { name: "Fabian (Pontianak)", course: "Explorer Coder", time: "13 menit lalu" },
  { name: "Clarissa (Balikpapan)", course: "Master Creator Kid", time: "17 menit lalu" },
  { name: "Dylan (Samarinda)", course: "Junior Game Maker", time: "20 menit lalu" },
  { name: "Syifa (Banjarmasin)", course: "Explorer Coder", time: "22 menit lalu" },

  { name: "Gibran (Jakarta Selatan)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Zahra (Bandung)", course: "Explorer Coder", time: "3 menit lalu" },
  { name: "Arka (Bekasi)", course: "Junior Game Maker", time: "5 menit lalu" },
  { name: "Shanum (Depok)", course: "Explorer Coder", time: "7 menit lalu" },
  { name: "Bima (Bogor)", course: "Master Creator Kid", time: "10 menit lalu" },
  { name: "Ayra (Tangerang)", course: "Junior Game Maker", time: "12 menit lalu" },
  { name: "Elvano (Jakarta Barat)", course: "Explorer Coder", time: "15 menit lalu" },
  { name: "Nadine (Jakarta Timur)", course: "Master Creator Kid", time: "18 menit lalu" },
  { name: "Keenan (Surabaya)", course: "Junior Game Maker", time: "21 menit lalu" },
  { name: "Callista (Semarang)", course: "Explorer Coder", time: "25 menit lalu" },

  { name: "Rafandra (Yogyakarta)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Aurel (Solo)", course: "Explorer Coder", time: "2 menit lalu" },
  { name: "Sean (Malang)", course: "Junior Game Maker", time: "4 menit lalu" },
  { name: "Nayla (Metro)", course: "Explorer Coder", time: "6 menit lalu" },
  { name: "Azka (Bandar Lampung)", course: "Master Creator Kid", time: "9 menit lalu" },
  { name: "Talita (Palembang)", course: "Junior Game Maker", time: "11 menit lalu" },
  { name: "Mikael (Medan)", course: "Explorer Coder", time: "14 menit lalu" },
  { name: "Jasmine (Denpasar)", course: "Master Creator Kid", time: "17 menit lalu" },
  { name: "Nathan (Batam)", course: "Junior Game Maker", time: "19 menit lalu" },
  { name: "Hana (Pekanbaru)", course: "Explorer Coder", time: "23 menit lalu" },

  { name: "Liam (Jakarta Utara)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Raisa (Jakarta Selatan)", course: "Explorer Coder", time: "3 menit lalu" },
  { name: "Julian (Bandung)", course: "Junior Game Maker", time: "5 menit lalu" },
  { name: "Annisa (Tangerang Selatan)", course: "Explorer Coder", time: "8 menit lalu" },
  { name: "Rehan (Bekasi)", course: "Master Creator Kid", time: "10 menit lalu" },
  { name: "Arumi (Depok)", course: "Junior Game Maker", time: "13 menit lalu" },
  { name: "Farhan (Bogor)", course: "Explorer Coder", time: "16 menit lalu" },
  { name: "Bianca (Cimahi)", course: "Master Creator Kid", time: "18 menit lalu" },
  { name: "Alden (Surabaya)", course: "Junior Game Maker", time: "22 menit lalu" },
  { name: "Davira (Sidoarjo)", course: "Explorer Coder", time: "26 menit lalu" },

  { name: "Athar (Semarang)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Felicia (Yogyakarta)", course: "Explorer Coder", time: "2 menit lalu" },
  { name: "Haidar (Solo)", course: "Junior Game Maker", time: "4 menit lalu" },
  { name: "Giselle (Malang)", course: "Explorer Coder", time: "7 menit lalu" },
  { name: "Dzaky (Metro)", course: "Master Creator Kid", time: "9 menit lalu" },
  { name: "Hasna (Bandar Lampung)", course: "Junior Game Maker", time: "12 menit lalu" },
  { name: "Keanu (Palembang)", course: "Explorer Coder", time: "14 menit lalu" },
  { name: "Inara (Medan)", course: "Master Creator Kid", time: "17 menit lalu" },
  { name: "Davin (Makassar)", course: "Junior Game Maker", time: "20 menit lalu" },
  { name: "Joanna (Manado)", course: "Explorer Coder", time: "24 menit lalu" },

  { name: "Mirza (Jakarta Timur)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Keira (Jakarta Barat)", course: "Explorer Coder", time: "3 menit lalu" },
  { name: "Kevin (Jakarta Pusat)", course: "Junior Game Maker", time: "5 menit lalu" },
  { name: "Luna (Jakarta Selatan)", course: "Explorer Coder", time: "8 menit lalu" },
  { name: "Oliver (Tangerang)", course: "Master Creator Kid", time: "10 menit lalu" },
  { name: "Maudy (Bekasi)", course: "Junior Game Maker", time: "13 menit lalu" },
  { name: "Adrian (Depok)", course: "Explorer Coder", time: "15 menit lalu" },
  { name: "Nicole (Bogor)", course: "Master Creator Kid", time: "19 menit lalu" },
  { name: "Arya (Bandung)", course: "Junior Game Maker", time: "21 menit lalu" },
  { name: "Olivia (Surabaya)", course: "Explorer Coder", time: "25 menit lalu" },

  { name: "Tristan (Semarang)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Patricia (Yogyakarta)", course: "Explorer Coder", time: "2 menit lalu" },
  { name: "Bryan (Solo)", course: "Junior Game Maker", time: "4 menit lalu" },
  { name: "Queensha (Malang)", course: "Explorer Coder", time: "6 menit lalu" },
  { name: "Satria (Metro)", course: "Master Creator Kid", time: "9 menit lalu" },
  { name: "Rania (Bandar Lampung)", course: "Junior Game Maker", time: "11 menit lalu" },
  { name: "Danish (Palembang)", course: "Explorer Coder", time: "14 menit lalu" },
  { name: "Salma (Denpasar)", course: "Master Creator Kid", time: "16 menit lalu" },
  { name: "Fikri (Batam)", course: "Junior Game Maker", time: "20 menit lalu" },
  { name: "Tiara (Pekanbaru)", course: "Explorer Coder", time: "23 menit lalu" },

  { name: "Zaidan (Pontianak)", course: "Junior Game Maker", time: "Baru saja" },
  { name: "Umaira (Balikpapan)", course: "Explorer Coder", time: "3 menit lalu" },
  { name: "Rayhan (Samarinda)", course: "Junior Game Maker", time: "5 menit lalu" },
  { name: "Valerie (Banjarmasin)", course: "Explorer Coder", time: "7 menit lalu" },
  { name: "Barra (Makassar)", course: "Master Creator Kid", time: "10 menit lalu" },
  { name: "Widya (Manado)", course: "Junior Game Maker", time: "12 menit lalu" },
  { name: "Arkana (Jakarta Selatan)", course: "Explorer Coder", time: "15 menit lalu" },
  { name: "Yasmin (Bandung)", course: "Master Creator Kid", time: "18 menit lalu" },
  { name: "Fathir (Bekasi)", course: "Junior Game Maker", time: "22 menit lalu" },
  { name: "Zaskia (Tangerang)", course: "Explorer Coder", time: "26 menit lalu" },
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
