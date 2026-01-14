import Link from "next/link";
import Image from "next/image";

import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import { FaFire, FaUtensils, FaArrowRight } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa6";

export default function BialyOrzel() {
  return (

    <>
    <Menu/> 
    <main className="bg-[#FAF9F6] text-[#171717] font-sans min-h-screen">
      
      {/* --- HERO: ABSTRACT BLACK & GOLD (BEZ ZDJĘCIA) --- */}
      <section className="h-[85vh] w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center relative overflow-hidden">
        
        {/* Abstrakcyjny element świetlny */}
        <div className="absolute w-[500px] h-[500px] bg-[#D4A373] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-orange-500 rounded-full blur-[100px] opacity-5 top-0 right-0"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
           {/* Minimalistyczny link powrotny */}
           <Link href="/" className="inline-block mb-12 text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-[#D4A373] transition-colors">
              &#8592; Wróć
            </Link>

          {/* Tytuł: Bardzo duża, klasyczna czcionka */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-500">
            Biały <br/> Orzeł
          </h1>

          {/* Opis: Krótki i przyjazny */}
          <p className="text-lg md:text-2xl font-light text-stone-300 mb-12 max-w-xl mx-auto leading-relaxed">
            Przestrzeń, która Cię ogrzeje. <br/> Ciepło kominka i Twój czas.
          </p>

          {/* Mała "wizytówka" */}
          <div className="inline-flex flex-col md:flex-row items-center gap-8 md:gap-16 text-xs uppercase tracking-widest text-stone-500 border-t border-white/10 pt-8">
            <div>
              <span className="block text-[#D4A373] mb-1">Miejsce</span>
              Karpacz, PL
            </div>
            <div>
              <span className="block text-[#D4A373] mb-1">Klimat</span>
              Family & Warm
            </div>
            <div>
              <span className="block text-[#D4A373] mb-1">Styl</span>
              Rustic Elegance
            </div>
          </div>
        </div>
      </section>

      {/* --- PRZEJŚCIE: CURVE Z CZARNEGO DO BEŻU --- */}
      <div className="relative -mt-24 bg-[#FAF9F6] rounded-t-[4rem] p-6 md:p-12">
        <div className="max-w-6xl mx-auto pt-20 pb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#171717] mb-6">
            Cześć! <span className="text-[#D4A373]">Tu jest ciepło.</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Biały Orzeł to domek o najcieplejszej aurze. Idealny dla rodzin, które szukają spokoju i bliskości z naturą.
          </p>
        </div>

        {/* --- ZAWARTOŚĆ: PRZYJAZNE FOTO-KARTY (LAYOUT "BENTO") --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          
          {/* 1. DUŻA KARTA FOTO (Occupies 2 cols) */}
          <div className="md:col-span-2 h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
             <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#171717]">
                Strefa Rodzinna
             </div>
             <Image 
               src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000" 
               alt="Wnętrze Biały Orzeł" 
               fill 
               className="object-cover transition-transform duration-1000 group-hover:scale-105" 
             />
          </div>

          {/* 2. KARTA TEKSTOWA (Opis) */}
          <div className="bg-white h-[500px] rounded-[3rem] p-10 flex flex-col justify-between shadow-xl border border-stone-100">
            <div>
              <h3 className="text-3xl font-serif text-[#171717] mb-6">
                Odkryj ciepło <br/> <span className="text-[#D4A373] italic">w środku</span>
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Nie tu nie brakuje ciemnych barw. Jest jasno, lekko i w klimacie rustykalnej elegancji.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Centrum domu to duży kominek, wokół którego zbierają się całe rodziny. Przygotowaliśmy dla Was dużą kuchnię, jadalnię i wygodne sypialnie z widokiem na las.
              </p>
            </div>
            <div className="w-12 h-12 bg-[#D4A373] rounded-full flex items-center justify-center text-white">
                <FaArrowRight />
            </div>
          </div>

          {/* 3. KARTA UDOGODNIEŃ (Small) */}
          <div className="bg-[#171717] text-[#FAF9F6] h-[350px] rounded-[3rem] p-10 flex flex-col justify-between shadow-xl">
            <div>
               <p className="text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-4">Co przygotowaliśmy?</p>
               <h4 className="text-2xl font-serif mb-8">Strefa Kominka</h4>
               <ul className="space-y-4 text-sm text-stone-300">
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#D4A373] rounded-full"></div>
                      Kominek z drewnem
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#D4A373] rounded-full"></div>
                      Pełne wyposażenie kuchni
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#D4A373] rounded-full"></div>
                      Smart TV (Netflix)
                   </li>
               </ul>
            </div>
            <div className="flex items-center gap-4 text-[#D4A373]">
               <FaFire size={24} />
               <span className="text-sm font-bold uppercase tracking-widest">Cozy Mode</span>
            </div>
          </div>

          {/* 4. KARTA WIADOMOŚCI (Medium) */}
          <div className="md:col-span-2 bg-[#D4A373]/10 border border-[#D4A373]/20 h-[350px] rounded-[3rem] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <h4 className="text-3xl font-serif text-[#171717] mb-4 relative z-10">
                "Najcieplejsze święta mieliśmy tu."
             </h4>
             <p className="text-stone-600 max-w-md relative z-10">
                Basia i Marek, Wrocław <br/> <span className="text-xs text-stone-400">Grudzień 2023</span>
             </p>
          </div>

        </div>

        {/* --- SEKCJA "BENTO" PODSPONOWA (Specyfikacja) --- */}
        <div className="max-w-6xl mx-auto py-20">
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-stone-100 flex-1 min-w-[140px]">
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Goście</p>
                    <p className="text-2xl font-bold font-serif">4 Osób</p>
                </div>
                <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-stone-100 flex-1 min-w-[140px]">
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Sypialnie</p>
                    <p className="text-2xl font-bold font-serif">2</p>
                </div>
                <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-stone-100 flex-1 min-w-[140px]">
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Powierzchnia</p>
                    <p className="text-2xl font-bold font-serif">65 m²</p>
                </div>
            </div>
        </div>

      </div>

      {/* --- BOOKING: PRZYJAZNE ZAPROSZENIE --- */}
      <section className="bg-[#FAF9F6] px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-100">
            <div className="flex-1">
              <p className="text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-2">Zarezerwuj pobyt</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#171717] mb-2">
                Czekamy na Was.
              </h3>
              <p className="text-stone-500">
                  Sprawdź dostępność na Airbnb i zaplanuj rodzinny wypoczynek.
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
                <p className="text-2xl font-bold text-[#171717]">650 zł <span className="text-sm font-normal text-stone-400">/noc</span></p>
                <Link
                  href="https://airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-[#171717] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#D4A373] hover:text-[#0a0a0a] transition-all rounded-full shadow-lg"
                >
                  <FaAirbnb size={20} /> Rezerwuj
                </Link>
            </div>
        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}