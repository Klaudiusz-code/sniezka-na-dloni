import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function LocationBox() {
  return (
    <section id="kontakt" className="relative w-full py-32 md:py-48 bg-[#050505] text-[#FAFAF9] overflow-hidden">
      
      <div className="absolute top-0 left-0 text-[20rem] md:text-[25rem] font-black text-neutral-800 leading-none select-none pointer-events-none opacity-[0.03]">
        03
      </div>

      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center relative z-10">
        
        <div className="col-span-1 md:col-span-5 space-y-12">
          <div>
            <span className="text-[#D4A373] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
              Lokalizacja
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light leading-tight mb-6">
              Odnajdź nas <br/>
              <span className="text-[#FAFAF9]">w sercu Karpacza.</span>
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Zapraszamy do Kostrzycy. To spokojna dzielnica, z której rozpoczynają się górskie wędrówki.
              Sprawdź GPS i przyjedź.
            </p>
          </div>

          <div className="space-y-8">
            <a href="tel:+48570430338" className="group flex items-start gap-6 border-l border-white/10 pl-6 hover:border-[#D4A373] transition-colors duration-300">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors duration-300">
                <FaPhone size={18} />
              </div>
              <div className="pt-1">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Telefon</p>
                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4A373] transition-colors">
                  +48 570 430 338
                </p>
              </div>
            </a>

            <a href="mailto:domki-sniezka@wp.pl" className="group flex items-start gap-6 border-l border-white/10 pl-6 hover:border-[#D4A373] transition-colors duration-300">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors duration-300">
                <FaEnvelope size={18} />
              </div>
              <div className="pt-1">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Email</p>
                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4A373] transition-colors">
                  domki-sniezka@wp.pl
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 relative h-[500px] md:h-[600px] w-full">
          
          <div className="absolute inset-0 bg-neutral-800 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
              alt="Okoliczny widok"
              fill
              className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              unoptimized
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
          </div>

          <div className="absolute inset-0 border border-white/5 m-4 md:m-8 pointer-events-none rounded-none"></div>

          <Link 
            href="https://www.google.com/maps/search/?api=1&query=Kostrzyca+58-532+ul+Karpacka+103+C"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 group"
          >
            <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-6 md:px-8 py-4 md:py-5 flex items-center gap-4 hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-black transition-all duration-300">
              <div className="w-10 h-10 bg-white/10 rounded-none flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#D4A373] group-hover:text-black" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 group-hover:text-black/70 mb-1">GPS</p>
                <p className="text-sm md:text-base font-bold text-white group-hover:text-black">
                  Google Maps
                </p>
              </div>
            </div>
          </Link>

          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 pointer-events-none">
             <div className="bg-[#050505]/80 backdrop-blur-sm border border-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                GPS
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}