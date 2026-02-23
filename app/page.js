import { getOngoing } from '../lib/api'; 
import Link from 'next/link';

export default async function HomePage() {
  const ongoing = await getOngoing();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">
            Update Ongoing
          </h2>
        </div>
      </div>

      {/* Grid Anime */}
      {ongoing.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {ongoing.map((item) => (
            <Link 
              href={`/anime/${item.animeId}`} 
              key={item.animeId} 
              className="group relative flex flex-col"
            >
              {/* Poster Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
                <img 
                  src={item.poster} 
                  alt={item.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Badge Hari Rilis */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-orange-400 uppercase">
                  {item.releaseDay}
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-orange-500 drop-shadow-md">
                      Episode {item.episodes}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium italic">
                      {item.latestReleaseDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm font-bold text-gray-200 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-900/50 rounded-3xl border border-dashed border-gray-800">
          <p className="text-gray-500 font-medium">Wah, belum ada data nih. Coba refresh ya!</p>
        </div>
      )}
    </div>
  );
}
