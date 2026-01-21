import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBed, FaUser, FaRulerCombined } from "react-icons/fa6";
import { FaFire, FaHotTub } from "react-icons/fa";

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

export default function CabinShowcase() {
  return (
    <section id="oferta" className="bg-[#FAF9F6] text-[#171717] font-sans py-20 px-6">
        <div className="max-w-[1600px] mx-auto">
            <div className="text-center px-6 mb-20">
                <h2 className="text-4xl md:text-5xl font-serif text-[#171717]">Wybierz Swój Kąt</h2>
                <p className="text-stone-500 mt-4 font-light">Dwa domki. Jeden luksusowy standard.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {cabins.map((cabin, idx) => {
                    const isDark = cabin.name.includes("Czarny");
                    const isAvailable = cabin.status === 'available';
                    const statusDotColor = isAvailable ? 'bg-green-500' : 'bg-red-500';
                    const statusText = isAvailable ? 'Dostępny' : 'Niedostępny';

                    const cardBg = isDark ? 'bg-[#050505]' : 'bg-white';
                    const cardBorder = isDark ? 'border-[#1f1f1f]' : 'border-stone-200';
                    const textColor = isDark ? 'text-white' : 'text-[#171717]';
                    const subTextColor = isDark ? 'text-stone-500' : 'text-stone-400';
                    const dividerColor = isDark ? 'border-[#1f1f1f]' : 'border-stone-100';
                    const paramBg = isDark ? 'bg-[#111]' : 'bg-stone-50';
                    const paramBorder = isDark ? 'border-[#222]' : 'border-transparent';
                    
                    const btnBg = isDark ? 'bg-white text-[#050505]' : 'bg-[#171717] text-white';
                    const btnHover = isDark ? 'group-hover/btn:bg-[#D4A373] group-hover/btn:text-[#050505]' : 'group-hover/btn:bg-[#D4A373] group-hover/btn:text-[#171717]';

                    return (
                    <Link 
                        href={cabin.slug} 
                        key={cabin.id} 
                        className={`group block shadow-xl rounded-[2.5rem] overflow-hidden border hover:-translate-y-2 transition-all duration-500 min-h-[600px] ${cardBg} ${cardBorder}`}
                    >
                        <div className="flex flex-col lg:flex-row h-full">
                            
                            <div className="relative w-full lg:w-1/2 h-72 lg:h-auto min-h-[350px] overflow-hidden">
                                
                                <div className={`absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border ${isDark ? 'bg-[#1a1a1a] border-red-900/20 text-stone-400' : 'bg-white/90 border-stone-200 text-stone-600'}`}>
                                    <span className={`w-2 h-2 rounded-full ${statusDotColor} ${isAvailable ? 'animate-pulse' : ''}`}></span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">
                                        {statusText}
                                    </span>
                                </div>

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
                                <div className={`absolute inset-0 bg-gradient-to-t from-white/60 to-transparent lg:from-white/40 lg:to-transparent ${isDark ? 'lg:from-black/80' : ''}`}></div>
                            </div>

                            <div className={`w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
                                
                                <div className="flex flex-col gap-6 mb-8">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="relative w-16 h-16 flex-shrink-0">
                                            <Image
                                                src={cabin.logo}
                                                alt="Logo"
                                                fill
                                                className="object-contain opacity-90"
                                            />
                                        </div>
                                        <div>
                                            <h3 className={`text-3xl md:text-4xl font-serif font-medium leading-none mb-1 ${textColor}`}>
                                                {cabin.name}
                                            </h3>
                                            <p className={`${subTextColor} italic text-sm font-light`}>
                                                {cabin.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`flex items-baseline gap-2 pt-4 ${dividerColor} border-t`}>
                                        <span className="text-4xl font-serif text-[#D4A373]">{cabin.price}</span>
                                        <span className={`${subTextColor} text-sm uppercase tracking-widest`}>{cabin.period}</span>
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-between">
                                    <div className={`grid grid-cols-3 gap-4 mb-8 ${dividerColor} border-t`}>
                                        <div className={`text-center p-3 ${paramBg} rounded-xl ${paramBorder}`}>
                                            <FaUser className="text-[#D4A373] mx-auto mb-1 text-lg" />
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Goście</p>
                                            <p className={`font-bold text-sm ${textColor}`}>{cabin.guests}</p>
                                        </div>
                                        <div className={`text-center p-3 ${paramBg} rounded-xl ${paramBorder}`}>
                                            <FaBed className="text-[#D4A373] mx-auto mb-1 text-lg" />
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Sypialnie</p>
                                            <p className={`font-bold text-sm ${textColor}`}>{cabin.beds}</p>
                                        </div>
                                        <div className={`text-center p-3 ${paramBg} rounded-xl ${paramBorder}`}>
                                            <FaRulerCombined className="text-[#D4A373] mx-auto mb-1 text-lg" />
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Metraż</p>
                                            <p className={`font-bold text-sm ${textColor}`}>{cabin.area}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-8">
                                        {cabin.features.map((feature, fIdx) => (
                                            <li key={fIdx} className={`flex items-center gap-2 text-sm font-light ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                                                <div className="w-1 h-1 rounded-full bg-[#D4A373] flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`group/btn flex items-center justify-between ${dividerColor} border-t pt-6`}>
                                        <span className={`font-bold uppercase tracking-widest text-xs md:text-sm group-hover/btn:text-[#D4A373] transition-colors ${textColor}`}>
                                            Zobacz szczegóły
                                        </span>
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${btnBg} ${btnHover}`}>
                                            <FaArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Link>
                    )}
                )}
            </div>
        </div>
    </section>
  );
}