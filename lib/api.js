const BASE_URL = 'https://wajik-anime-api.vercel.app/otakudesu';

// Ambil daftar anime ongoing
export const getOngoing = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/ongoing?page=${page}`, { next: { revalidate: 1800 } });
  const result = await res.json();
  // PENTING: Wajik naruh listnya di result.data.animeList
  return result.data.animeList || []; 
};

// Ambil detail anime
export const getAnimeDetail = async (id) => {
  const res = await fetch(`${BASE_URL}/anime/${id}`);
  const result = await res.json();
  return result.data; // Detail anime biasanya langsung di dalam .data
};

// Ambil detail episode (untuk nonton)
export const getEpisode = async (id) => {
  const res = await fetch(`${BASE_URL}/episode/${id}`);
  const result = await res.json();
  return result.data;
};
