import './global.css';

export const metadata = {
  title: 'Indotaku - Nonton Anime Indo Gratis',
  description: 'Streaming Anime Subtitle Indonesia Terlengkap',
  manifest: '/manifest.json', // Memanggil file PWA
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#0b0c10] text-gray-100 antialiased">
        <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
            <Link href="/" className="text-2xl font-black text-orange-500 tracking-tighter">
              INDO<span className="text-white">TAKU</span>
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
