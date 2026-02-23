const BASE_URL = 'https://otakudesu-unofficial-api.vercel.app/v1';

export const getHome = async () => {
  const res = await fetch(`${BASE_URL}/home`, { next: { revalidate: 1800 } });
  if (!res.ok) return { home: { ongoing: [] } };
  return res.json();
};

export const getAnimeDetail = async (slug) => {
  const res = await fetch(`${BASE_URL}/anime/${slug}`);
  if (!res.ok) return null;
  return res.json();
};

export const getEpisode = async (slug) => {
  const res = await fetch(`${BASE_URL}/episode/${slug}`);
  if (!res.ok) return null;
  return res.json();
};
