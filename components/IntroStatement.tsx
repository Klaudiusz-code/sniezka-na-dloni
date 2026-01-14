import Link from "next/link";
import { FaMountainSun, FaCheck } from "react-icons/fa6";
import { FaHeartbeat, FaHome } from "react-icons/fa";
import { LiaArrowRightSolid, LiaTvSolid, LiaWifiSolid } from "react-icons/lia";

export default function IntroStatement() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#050505] overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          
          <div className="col-span-1 md:col-span-7 relative">
            <div className="relative z-10">
              <span className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block">
                Filozofia
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif italic text-white leading-[1.1] mb-8">
                Cisza, którą<br/>
                czujesz,<br/>
                <span className="text-stone-500 font-medium not-italic text-4xl md:text-6xl">
                  nie słyszysz.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl leading-relaxed mb-10">
                Miejsca stworzone dla tych, którzy chcą zwolnić. 
                Połączyliśmy naturę z architekturą, tworząc idealną enklawę spokoju.
              </p>

              <a href="#historia" className="group inline-flex items-center gap-3 border-b border-white/10 pb-1 hover:border-[#D4A373] transition-all duration-300">
                <span className="text-sm font-bold uppercase tracking-widest text-stone-500 group-hover:text-[#D4A373] transition-colors">
                  Poznaj historię miejsca
                </span>
                <LiaArrowRightSolid size={16} className="text-stone-500 group-hover:text-[#D4A373] group-hover:translate-x-2 transition-all"/>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6">
            
            {[
              { icon: <FaMountainSun size={20} />, title: "Natura", desc: "Las, łąki, czyste powietrze." },
              { icon: <FaHome size={20} />, title: "Architektura", desc: "Stylowe wnętrza, drewno, kamień." },
              { icon: <FaHeartbeat size={20} />, title: "Prywatność", desc: "Tylko Wy i góry." },
            ].map((item, i) => (
              <div key={i} className="group bg-[#0F0F0F] p-8 rounded-3xl border border-white/5 hover:border-[#D4A373]/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(212,163,115,0.1)]">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#050505] transition-colors duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#0F0F0F] backdrop-blur-md rounded-3xl p-6 border border-white/5 flex justify-between items-center shadow-inner">
              
              <div className="flex flex-col items-center justify-center gap-2 group cursor-help">
                <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:scale-110 transition-transform">
                  <LiaWifiSolid size={20} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-stone-500">Internet</p>
                  <p className="text-sm font-bold text-white">1000 Mb/s</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10"></div>

              <div className="flex flex-col items-center justify-center gap-2 group cursor-help">
                <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:scale-110 transition-transform">
                  <LiaTvSolid size={20} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-stone-500">Rozrywka</p>
                  <p className="text-sm font-bold text-white">Netflix</p>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  ); 
}