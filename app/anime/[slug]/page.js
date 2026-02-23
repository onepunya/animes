import { getAnimeDetail } from '@/lib/api';
import Link from 'next/link';

export default async function DetailPage({ params }) {
  const data = await getAnimeDetail(params.slug);
  if (!data) return <div className="p-10 text-center">Anime tidak ditemukan</div>;
  
  const { anime } = data;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={anime.poster} className="w-full md:w-64 rounded-2xl shadow-2xl border border-gray-800" />
        <div className="flex-1">
          <h1 className="text-3xl font-black mb-2 text-orange-500">{anime.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4 text-xs font-bold">
            <span className="text-green-400">{anime.status}</span>
            <span className="text-gray-500">•</span>
            <span className="text-yellow-400">⭐ {anime.rating}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
            {anime.synopsis}
          </p>
          <div className="flex flex-wrap gap-2">
            {anime.genres.map((g) => (
              <span key={g.slug} className="text-[10px] bg-orange-600/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full uppercase font-bold">
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-orange-500 rounded-full"></span>
          Daftar Episode
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {anime.episode_lists.map((ep) => (
            <Link 
              href={`/watch/${ep.slug}`} 
              key={ep.slug}
              className="p-4 bg-[#1f2833] hover:bg-orange-600 hover:text-white rounded-xl text-sm transition-all border border-gray-800 flex justify-between items-center"
            >
              <span>{ep.title}</span>
              <span className="text-[10px] opacity-50">{ep.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
