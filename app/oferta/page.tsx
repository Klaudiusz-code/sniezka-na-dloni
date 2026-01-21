"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  FaArrowRight, 
  FaBed, 
  FaUser, 
  FaRulerCombined,
  FaPhone
} from "react-icons/fa6";
import { FaFire, FaHotTub } from "react-icons/fa";
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const cabins = [
  {
      id: 1,
      slug: "domki/orzel-bielik",
      name: "Orzeł Bielik",
      subtitle: "Styl majestatyczny i ponadczasowy.",
      price: "650",
      period: "/doba",
      guests: "2-6 Os.",
      beds: "2 Syp.",
      area: "65 m²",
      status: 'available',
      logo: "/logobielik.png",
      features: ["Widok na las", "Kominek", "Taras"],
      image: "/onasbielik.jpeg"
  },
  {
      id: 2,
      slug: "domki/czarny-jastrzab",
      name: "Czarny Jastrząb",
      subtitle: "Inny charakter, surowsza elegancja.",
      price: "650",
      period: "/doba",
      guests: "2-6 Os.",
      beds: "2 Syp.",
      area: "65 m²",
      status: 'unavailable',
      logo: "/logoczarnyjastrzab.PNG",
      features: ["Prywatne SPA", "Jacuzzi", "Panorama"],
      image: "/onasczarnyjastrzab.jpeg"
  },
];

export default function page() {
  return (
    <>
      <Menu /> 
      <main className="bg-[#FAF9F6] text-[#171717] font-sans min-h-screen">
        
        {/* --- HERO --- */}
        <section className="h-[50vh] md:h-[60vh] w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A373] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 text-center px-6">
             <p className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs mb-6">Wynajem • Karpacz</p>
             <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-6">
               Oferta
             </h1>
             <p className="text-stone-400 text-lg md:text-xl font-light">
               Dwa domki. Dwa światy.
             </p>
          </div>
        </section>

        {/* --- LISTA DOMKÓW --- */}
        <section className="max-w-[1600px] mx-auto px-6 py-20 md:py-32">
            <div className="max-w-2xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#171717]">Wybierz swoją przestrzeń</h2>
                <p className="text-stone-500 text-lg font-light">
                    Każdy domek został zaprojektowany z myślą o różnych potrzebach, zachowując ten sam luksusowy standard.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {cabins.map((cabin, idx) => {
                    // LOGIKA TYLKO DLA KART
                    const isDark = cabin.name.includes("Czarny");
                    
                    // LOGIKA STATUSU
                    const isAvailable = cabin.status === 'available';
                    const statusDotColor = isAvailable ? 'bg-green-500' : 'bg-red-500';
                    const statusText = isAvailable ? 'Dostępny' : 'Niedostępny';

                    // STYLE KARTY
                    const cardBg = isDark ? 'bg-[#050505]' : 'bg-white';
                    const cardBorder = isDark ? 'border-[#1f1f1f]' : 'border-stone-200';
                    const textColor = isDark ? 'text-white' : 'text-[#171717]';
                    const subTextColor = isDark ? 'text-stone-500' : 'text-stone-400';
                    const dividerColor = isDark ? 'border-[#1f1f1f]' : 'border-stone-100';
                    const paramBg = isDark ? 'bg-[#111]' : 'bg-stone-50';
                    const paramBorder = isDark ? 'border-[#222]' : 'border-transparent';
                    
                    // STYL PRZYCISKU
                    const btnBg = isDark ? 'bg-white text-[#050505]' : 'bg-[#171717] text-white';
                    const btnHover = isDark ? 'group-hover/btn:bg-[#D4A373] group-hover/btn:text-[#050505]' : 'group-hover/btn:bg-[#D4A373] group-hover/btn:text-[#171717]';

                    return (
                    <Link 
                        href={cabin.slug} 
                        key={cabin.id} 
                        className={`group block shadow-xl rounded-[2rem] overflow-hidden border hover:-translate-y-2 transition-all duration-500 ${cardBg} ${cardBorder}`}
                    >
                        
                        {/* 1. OBRAZEK (GÓRA) */}
                        <div className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                            
                            {/* BADGE STATUSU */}
                            <div className={`absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border ${isDark ? 'bg-[#1a1a1a] border-red-900/20 text-stone-400' : 'bg-white/90 border-stone-200 text-stone-600'}`}>
                                <span className={`w-2 h-2 rounded-full ${statusDotColor} ${isAvailable ? 'animate-pulse' : ''}`}></span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    {statusText}
                                </span>
                            </div>

                            {/* LOGO NA ZDJĘCIU */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="w-12 h-12 relative">
                                     <Image
                                        src={cabin.logo}
                                        alt={cabin.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <Image
                                src={cabin.image}
                                alt={cabin.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority={idx === 0}
                            />
                            {/* GRADIENT */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-white/60 to-transparent lg:from-white/40 lg:to-transparent ${isDark ? 'lg:from-black/80' : ''}`}></div>
                        </div>

                        {/* 2. TREŚĆ (DÓŁ) */}
                        <div className={`p-8 md:p-12 flex flex-col gap-6 ${cardBg}`}>
                            
                            {/* NAGŁÓWEK: LOGO + NAZWA + CENA */}
                            <div className="flex items-start justify-between gap-4 border-b pb-6">
                                <div className="flex items-center gap-4">
                                     <div className="relative w-12 h-12 flex-shrink-0">
                                        <Image
                                            src={cabin.logo}
                                            alt="Logo"
                                            fill
                                            className="object-contain opacity-70"
                                        />
                                    </div>
                                    <div>
                                        <h3 className={`text-3xl font-serif font-medium leading-none mb-1 ${textColor}`}>
                                            {cabin.name}
                                        </h3>
                                        <p className={`${subTextColor} italic text-sm font-light`}>
                                            {cabin.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-serif text-[#D4A373]">{cabin.price}</span>
                                    <span className={`text-xs uppercase tracking-widest ${subTextColor}`}>{cabin.period}</span>
                                </div>
                            </div>

                            {/* PARAMETRY - SZEROKA LISTA */}
                            <div className={`flex justify-between gap-6 py-4 border-b ${dividerColor}`}>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-[#D4A373] text-sm" />
                                    <span className={`text-sm font-medium ${textColor}`}>{cabin.guests}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaBed className="text-[#D4A373] text-sm" />
                                    <span className={`text-sm font-medium ${textColor}`}>{cabin.beds}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaRulerCombined className="text-[#D4A373] text-sm" />
                                    <span className={`text-sm font-medium ${textColor}`}>{cabin.area}</span>
                                </div>
                            </div>

                            {/* ZAKRES IKONOWY */}
                            <div className="grid grid-cols-3 gap-4">
                                {cabin.features.map((feature, fIdx) => (
                                    <div key={fIdx} className={`flex items-center gap-2 text-sm font-light p-2 rounded-xl ${paramBg} ${paramBorder}`}>
                                        <div className={`w-1 h-1 rounded-full flex-shrink-0 ${isAvailable ? 'bg-[#D4A373]' : 'bg-red-500'}`}></div>
                                        <span className={isDark ? 'text-stone-400' : 'text-stone-600'}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* STOPKA */}
                            <div className={`flex items-center justify-between pt-4 mt-auto border-t ${dividerColor}`}>
                                <span className={`font-bold uppercase tracking-widest text-xs group-hover:text-[#D4A373] transition-colors ${textColor}`}>
                                    Zobacz szczegóły
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${btnBg} ${btnHover}`}>
                                    <FaArrowRight size={14} />
                                </div>
                            </div>

                        </div>
                    </Link>
                    )}
                )}
            </div>
        </section>

        {/* --- FAQ / CTA (STATYCZNA SEKCJA) --- */}
        <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
             <div className="p-12 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[#171717]">
                    Masz pytania?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://airbnb.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[#171717] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4A373] transition-colors"
                    >
                        Sprawdź Terminy
                    </a>
                    <a 
                        href="tel:570430338"
                        className="px-8 py-3 bg-[#FAF9F6] text-[#171717] border border-stone-200 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
                    >
                        <FaPhone size={12} /> Zadzwoń teraz
                    </a>
                </div>
            </div>
        </section>

      </main>
      <Footer/>
    </>
  );
}