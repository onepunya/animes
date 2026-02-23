import { getEpisode } from '../../../lib/api';

export default async function WatchPage({ params }) {
  const data = await getEpisode(params.slug);
  if (!data) return <div className="p-10 text-center">Episode tidak ditemukan</div>;

  const { episode } = data;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-lg font-bold mb-4 text-orange-500 leading-tight">{episode.title}</h1>
      
      <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        <iframe 
          src={episode.stream_url} 
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-4">Opsi Download</h3>
        <div className="grid gap-4">
          {episode.download_urls.map((res, i) => (
            <div key={i} className="bg-[#1f2833] p-4 rounded-2xl border border-gray-800">
              <p className="text-xs font-black text-orange-500 mb-3">{res.resolution}</p>
              <div className="flex flex-wrap gap-2">
                {res.links.map((link, j) => (
                  <a 
                    key={j} 
                    href={link.url} 
                    target="_blank"
                    className="bg-gray-800 hover:bg-orange-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-colors border border-gray-700"
                  >
                    {link.provider}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
