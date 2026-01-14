import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaFire, FaHotTub, FaTree, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

export default function page() {
  return (
    <>
      <Menu /> 
      <main className="bg-[#FAF9F6] text-[#171717] font-sans min-h-screen">
        
        <section className="h-[55vh] w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A373] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 text-center px-6">
             <p className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs mb-6">Wynajem • Karpacz</p>
             <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-6">
               Oferta
             </h1>
             <p className="text-stone-400 text-lg font-light">
               Dwa domki. Dwa światy.
             </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
            
            <div className="max-w-2xl mx-auto text-center mb-32">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Wybierz swoją przestrzeń</h2>
                <p className="text-stone-500 text-lg leading-relaxed">
                    Prostota w najczystszej formie. Zdecyduj, czy wolisz ciepło rodzinnego kominka, czy nowoczesny chłód prywatnego SPA.
                </p>
            </div>

            <div className="flex flex-col gap-20">
                
                <div className="group">
                    <Link href="/domki/domek-bialy-orzel">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            
                            <div className="flex-1 space-y-8 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373]">
                                        <FaFire size={18} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">Domek Rodzinny</span>
                                </div>
                                
                                <div>
                                    <h2 className="text-5xl md:text-6xl font-serif leading-none mb-4">
                                        Biały Orzeł
                                    </h2>
                                    <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                                        Ciepło, które rozgrzewa. Wnętrza pełne drewna i światła, idealne na wspólne chwile przy kominku.
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-stone-100 flex items-center justify-between max-w-[300px] mx-auto md:mx-0">
                                    <div>
                                        <p className="text-2xl font-bold text-[#171717]">650 zł</p>
                                        <p className="text-[10px] text-stone-400 uppercase tracking-widest">Za noc</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-[#171717] group-hover:text-white group-hover:border-[#171717] transition-all">
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-[400px] aspect-[3/4] relative rounded-[2rem] overflow-hidden shadow-xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
                                    alt="Biały Orzeł"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <Link href="/domki/czarny-jastrzab">
                        <div className="bg-[#171717] text-white rounded-[3rem] p-8 md:p-16 shadow-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                
                                <div className="order-2 md:order-1 w-full md:w-[400px] aspect-square relative rounded-[2rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop"
                                        alt="Czarny Jastrząb"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                <div className="flex-1 space-y-8 text-center md:text-left order-1 md:order-2">
                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D4A373]">
                                            <FaHotTub size={18} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A373]">Domek Premium</span>
                                    </div>
                                    
                                    <div>
                                        <h2 className="text-5xl md:text-6xl font-serif leading-none mb-4">
                                            Czarny Jastrząb
                                        </h2>
                                        <p className="text-stone-400 text-lg leading-relaxed max-w-md">
                                            Nowoczesna strefa SPA z widokiem na góry. Dla tych, którzy cenią architekturę i prywatność na najwyższym poziomie.
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-full">
                                        <div className="flex items-center gap-6">
                                            <div>
                                                <p className="text-2xl font-bold text-[#D4A373]">850 zł</p>
                                                <p className="text-[10px] text-stone-500 uppercase tracking-widest">Za noc</p>
                                            </div>
                                            <div className="w-px h-8 bg-white/20"></div>
                                            <div className="flex items-center gap-2 text-sm text-stone-300">
                                                <FaMapMarkerAlt />
                                                <span>Kostrzyca 103 C</span>
                                            </div>
                                        </div>
                                        
                                        <div className="w-10 h-10 rounded-full bg-[#D4A373] flex items-center justify-center text-[#0a0a0a] hover:bg-white transition-colors">
                                            <FaArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </section>

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
                        className="px-8 py-3 bg-[#FAF9F6] text-[#171717] border border-stone-200 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
                    >
                        Zadzwoń teraz
                    </a>
                </div>
            </div>
        </section>

      </main>
      <Footer/>
    </>
  );
}