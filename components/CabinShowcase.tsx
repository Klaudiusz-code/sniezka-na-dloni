import Link from "next/link";
import Image from "next/image";
import { 
  FaArrowRight, 
  FaBed, 
  FaUser, 
  FaFire,
  FaRulerCombined 
} from "react-icons/fa6";

const cabins = [
  {
      id: 1,
      slug: "domki/domek-bialy-orzel",
      name: "Biały Orzeł",
      subtitle: "Klasyczny urok i ciepło.",
      price: "650",
      period: "/doba",
      guests: "4 Os.",
      beds: "2 Syp.",
      area: "65 m²",
      features: ["Widok na las", "Kominek", "Taras"],
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
  },
  {
      id: 2,
      slug: "domki/czarny-jastrzab",
      name: "Czarny Jastrząb",
      subtitle: "Nowoczesność i strefa SPA.",
      price: "850",
      period: "/doba",
      guests: "6 Os.",
      beds: "3 Syp.",
      area: "95 m²",
      features: ["Prywatne SPA", "Sauna", "Panorama"],
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop"
  },
];

export default function CabinShowcase() {
  return (
    <section id="oferta" className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        
        <div className="text-center px-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-[#171717]">Nasze Domy</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {cabins.map((cabin, idx) => (
                <Link 
                    href={cabin.slug} 
                    key={cabin.id} 
                    className="group block bg-white shadow-sm border border-stone-200 hover:shadow-xl hover:border-[#D4A373] transition-all duration-300 min-h-[550px]"
                >
                    <div className="flex flex-col lg:flex-row h-full">
                        
                        <div className="relative w-full lg:w-1/2 h-56 lg:h-auto min-h-[300px] overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-100">
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-none text-[10px] font-bold uppercase tracking-widest text-[#171717] z-10 shadow-sm">
                                Dostępny
                            </div>
                            <Image
                                src={cabin.image}
                                alt={cabin.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10"></div>
                        </div>

                        <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                            
                            <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#171717] leading-none">{cabin.name}</h3>
                                    <p className="text-stone-500 italic text-sm">{cabin.subtitle}</p>
                                </div>
                                <div className="text-right lg:text-left">
                                    <span className="text-2xl font-bold text-[#D4A373]">{cabin.price}</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider ml-1">{cabin.period}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-6 border-t border-b border-stone-100 py-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Goście</p>
                                    <p className="font-bold text-[#171717] text-sm">{cabin.guests}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Syp.</p>
                                    <p className="font-bold text-[#171717] text-sm">{cabin.beds}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Metraż</p>
                                    <p className="font-bold text-[#171717] text-sm">{cabin.area}</p>
                                </div>
                            </div>

                            <div className="flex-grow flex flex-col justify-between">
                                <ul className="space-y-2 mb-6">
                                    {cabin.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-stone-600 text-sm">
                                            <div className="w-1 h-1 rounded-full bg-[#D4A373] flex-shrink-0"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="group/btn flex items-center justify-between border-t border-stone-100 pt-4">
                                    <span className="text-[#171717] font-bold uppercase tracking-widest text-xs md:text-sm">Zobacz szczegóły</span>
                                    <div className="w-10 h-10 bg-[#171717] text-white flex items-center justify-center group-hover/btn:bg-[#D4A373] transition-colors">
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
  );
}