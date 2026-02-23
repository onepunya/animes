import './globals.css';

export const metadata = {
  title: 'Indotaku - Nonton Anime Indo',
  description: 'Streaming anime subtitle Indonesia gratis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#0b0c10] text-gray-100 antialiased">
        <nav className="fixed top-0 w-full bg-[#1f2833]/90 backdrop-blur-md z-50 p-4 border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-black text-orange-500 tracking-tighter">INDOTAKU</h1>
          </div>
        </nav>
        
        <main className="pt-20 pb-20 max-w-6xl mx-auto px-4">
          {children}
        </main>

        {/* Mobile Navigation Bar */}
        <div className="fixed bottom-0 w-full bg-[#1f2833] border-t border-gray-800 flex justify-around p-3 md:hidden">
          <button className="text-orange-500 text-xs">Home</button>
          <button className="text-gray-400 text-xs">Search</button>
          <button className="text-gray-400 text-xs">Genre</button>
        </div>
      </body>
    </html>
  );
}
