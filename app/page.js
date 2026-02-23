import { getHome } from '@/lib/api';
import Link from 'next/link';

export default async function HomePage() {
  const data = await getHome();
  const ongoing = data.home.ongoing;

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
        <h2 className="text-xl font-bold uppercase tracking-wider">Update Ongoing</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ongoing.map((item) => (
          <Link href={`/anime/${item.slug}`} key={item.slug} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg bg-gray-900">
              <img 
                src={item.poster} 
                alt={item.title} 
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 p-2 bg-gradient-to-t from-black via-black/60 to-transparent w-full">
                <p className="text-[10px] font-bold text-orange-400 truncate">{item.current_episode}</p>
              </div>
            </div>
            <h3 className="mt-2 text-xs font-semibold line-clamp-2 group-hover:text-orange-500 transition">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
