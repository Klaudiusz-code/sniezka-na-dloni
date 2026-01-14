import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaFire,
  FaSnowflake,
  FaHotTub,
  FaAward,
  FaCheck, 
} from "react-icons/fa";
import { FaAirbnb, FaCar } from "react-icons/fa6"; 

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#FAF9F6] flex flex-col lg:flex-row font-sans overflow-hidden">
      
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-start items-start px-6 md:px-16 lg:px-24 xl:px-44 py-20 lg:py-24 z-10">
        
        <div className="mb-10 relative">
            <div className="absolute inset-0 bg-[#171717]/5 blur-md rounded-full"></div>
            <div className="relative flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-stone-200 shadow-sm">
                <FaAward className="text-[#D4A373] text-lg" />
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 leading-none">
                        Gwarancja
                    </span>
                    <span className="text-xs font-bold text-[#171717] leading-none mt-1">
                        Standard Luksusowy
                    </span>
                </div>
            </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] leading-tight mb-6">
          Twój Azyl <br />
          <span className="text-[#D4A373] font-serif italic font-normal text-4xl md:text-5xl">
            w Karkonoszach
          </span>
        </h1>

        <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-lg">
          Odpocznij w naszych drewnianych domkach z widokiem na Śnieżkę. 
          Komfort jacuzzi, ciepło kominka i cisza górskiego lasu. Wszystko, czego potrzebujesz.
        </p>

        <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-3 text-stone-800">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#171717]">
                    <FaFire size={18} />
                </div>
                <div>
                    <p className="text-sm font-bold text-[#171717]">Kominek</p>
                    <p className="text-xs text-stone-400">Drewno gratis</p>
                </div>
            </div>
            <div className="flex items-center gap-3 text-stone-800">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#D4A373]">
                    <FaHotTub size={18} />
                </div>
                <div>
                    <p className="text-sm font-bold text-[#171717]">Jacuzzi</p>
                    <p className="text-xs text-stone-400">Prywatne</p>
                </div>
            </div>
            <div className="flex items-center gap-3 text-stone-800">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#171717]">
                    <FaSnowflake size={18} />
                </div>
                <div>
                    <p className="text-sm font-bold text-[#171717]">Szlak</p>
                    <p className="text-xs text-stone-400">200 metrów</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#171717] text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-all shadow-lg shadow-black/20"
          >
            <FaAirbnb size={20} />
            Zobacz Dostępność
          </Link>

          <a
            href="tel:+48570430338"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-stone-200 text-[#171717] text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-stone-50 hover:border-[#171717] transition-all"
          >
            <FaPhone size={18} />
            Zadzwoń do nas
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex gap-8 text-sm text-stone-500">
            <div>
                <p className="font-bold text-[#171717]">2 - 6 Osób</p>
                <p className="text-xs">Maksymalna pojemność</p>
            </div>
            <div>
                <p className="font-bold text-[#171717]">Karpacz</p>
                <p className="text-xs">Ulica Karpacka 103 C</p>
            </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[45vh] lg:h-auto relative bg-stone-200 overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full">
            <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            alt="Domek w górach"
            fill
            className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl z-20 max-w-[240px] border border-white/20">
            <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-[#171717]">
                    <FaCar size={18} />
                </div>
                <span className="text-[10px] font-bold text-[#D4A373] uppercase tracking-wider">W cenie</span>
            </div>
            <div className="mb-1">
                <span className="text-xl font-bold text-[#171717]">Parking</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-2">
                Monitorowane miejsce na terenie posesji. Bezproblemowy dojazd.
            </p>
        </div>

        <div className="absolute bottom-8 left-8 lg:left-4 lg:translate-x-0 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-xl max-w-xs z-20">
             <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-lg bg-[#171717] flex items-center justify-center text-white text-xl font-bold">
                     20°C
                 </div>
                 <div>
                     <p className="text-xs font-bold uppercase text-stone-500 tracking-wider">Temperatura wewnątrz</p>
                     <p className="text-sm font-bold text-[#171717]">Ogrzewanie podłogowe</p>
                 </div>
             </div>
             <div className="h-[1px] bg-stone-200 w-full mb-3"></div>
             <div className="flex justify-between text-xs text-[#171717] font-medium">
                 <span>85 m²</span>
                 <span>2 Sypialnie</span>
                 <span>Sauna</span>
             </div>
        </div>

      </div>
    </section>
  );
}