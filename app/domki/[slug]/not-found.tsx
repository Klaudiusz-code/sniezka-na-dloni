import Link from "next/link";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { FaMountain, FaArrowLeft } from "react-icons/fa6";

export default function CabinNotFound() {
  return (
    <>
      <Menu />
      <main className="font-sans min-h-screen flex flex-col bg-white text-[#1a1a1a] selection:bg-[#D4A373] selection:text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-[#D4A373]/5 pointer-events-none" />

        <div className="flex-1 flex items-center justify-center px-6 relative z-10">
          <div className="text-center max-w-2xl relative">
            <span className="absolute -top-20 left-1/2 -translate-x-1/2 text-[12rem] md:text-[18rem] font-serif leading-none text-stone-100 select-none z-0 pointer-events-none">
              404
            </span>

            <div className="relative z-10 mb-8 animate-float">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/20">
                <FaMountain className="text-4xl text-[#D4A373]" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif mb-4 relative z-10 leading-tight">
              Ten domek utknął
              <br />
              <span className="italic text-stone-400">we mgle</span>
            </h1>

            <p className="text-stone-500 font-light leading-relaxed mb-12 max-w-md mx-auto relative z-10">
              Wygląda na to, że ta ścieżka prowadzi donikąd. Nie martw się,
              najlepsze widoki i ciepłe kominki czekają na Ciebie w naszych
              innych domkach.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                href="/oferta"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#D4A373] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#c49363] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4A373]/20"
              >
                Sprawdź inne domki
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-transparent text-stone-500 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all duration-300"
              >
                <FaArrowLeft size={14} /> Strona główna
              </Link>
            </div>
          </div>
        </div>

    
      </main>
      <Footer />
    </>
  );
}