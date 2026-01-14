import Link from "next/link";
import { FaPhone, FaMapPin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <>
      <Menu />
      <main className="bg-[#FDFCF8] text-[#2C2825] font-sans min-h-screen selection:bg-[#D4A373] selection:text-black">
        
        <section className="h-[55vh] w-full flex flex-col justify-center items-center relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10">
             <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1200px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale"></div>
          </div>

          <div className="relative z-10 text-center px-6">
             <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6">
                Lokalizacja
             </p>
             <h1 className="text-5xl md:text-7xl font-serif text-[#2C2825] leading-none mb-6">
               Znajdź nas
             </h1>
             <p className="text-lg text-[#2C2825]/60 max-w-md mx-auto">
                Kostrzyca, ul. Karpacka 103 C.<br/>
                Tylko 5 min od centrum Karpacza.
             </p>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-[70vh]">
                
                <div className="md:col-span-5 flex flex-col justify-between space-y-8 border-r border-[#E5E2D8]">
                    
                    <div>
                        <h2 className="text-4xl font-serif text-[#2C2825] mb-12">Kontakt</h2>
                        <p className="text-[#2C2825]/60">
                            Masz pytania? <br/>
                            Zadzwoń lub napisz.
                        </p>
                    </div>

                    <div className="group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373]">
                                <FaPhone />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2C2825]/40">Telefon</p>
                        </div>
                        <a href="tel:570430338" className="group-hover:text-[#D4A373] transition-colors">
                            <span className="text-5xl md:text-6xl font-bold text-[#2C2825] tracking-tight">570 430 338</span>
                        </a>
                    </div>

                    <div className="group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#2C2825]/5 flex items-center justify-center">
                                <FaEnvelope className="text-[#2C2825]" />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2C2825]/40">Email</p>
                        </div>
                        <a href="mailto:domki-sniezka@wp.pl" className="group-hover:text-[#D4A373] transition-colors">
                            <span className="text-xl md:text-2xl font-bold text-[#2C2825]">domki-sniezka@wp.pl</span>
                        </a>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#2C2825]/5 flex items-center justify-center">
                                <FaMapPin className="text-[#2C2825]" />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2C2825]/40">Adres</p>
                        </div>
                        <div className="border-l-4 border-[#D4A373] pl-6">
                            <p className="text-xl md:text-2xl font-bold text-[#2C2825]">ul. Karpacka 103 C</p>
                            <p className="text-[#2C2825]/60">58-532 Kostrzyca, Karpacz</p>
                        </div>
                    </div>

                    <div className="mt-auto">
                         <Link href="https://maps.google.com/?q=ulica+Karpacka+103+C" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#2C2825] border-b border-[#2C2825] hover:border-[#D4A373] pb-1 transition-colors">
                            Otwórz w Google Maps <FaArrowRight size={12} />
                         </Link>
                    </div>

                </div>

                <div className="md:col-span-7 h-full relative bg-[#E5E2D8] overflow-hidden border border-[#D4D3CD]">
                    
              
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
                    
                    <div className="absolute inset-0 bg-[#2C2825]/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center p-6">
                        
                        <div className="relative mb-8 group cursor-pointer">
                            <div className="w-20 h-20 bg-[#D4A373] rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                                <FaMapPin size={32} />
                            </div>
                            <div className="absolute bottom-0 w-4 h-4 bg-[#2C2825]/20 rounded-full blur-[4px]"></div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg border border-white/50">
                            <h3 className="text-2xl md:text-4xl font-serif text-[#2C2825] mb-2">Śnieżka na Dłoni</h3>
                            <p className="text-lg text-[#2C2825]/70 mb-6">Domki Letniskowe</p>
                            
                            <div className="flex items-center justify-center gap-3 text-[#2C2825]">
                                <div className="w-10 h-[1px] bg-[#2C2825]/20"></div>
                                <span className="text-xl font-bold">ul. Karpacka 103 C</span>
                                <div className="w-10 h-[1px] bg-[#2C2825]/20"></div>
                            </div>
                            <p className="text-sm text-[#2C2825]/50 mt-2">58-532 Kostrzyca</p>
                        </div>

                        <a 
                           href="https://maps.app/?q=ulica+Karpacka+103+C"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2C2825] hover:text-[#D4A373] transition-colors"
                        >
                           Wyznacz trasę <FaArrowRight size={12} />
                        </a>

                    </div>

                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}