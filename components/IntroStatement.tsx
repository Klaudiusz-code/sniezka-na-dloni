import { FaMountainSun } from "react-icons/fa6";
import { LiaArrowRightSolid } from "react-icons/lia";

export default function IntroStatement() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#050505] overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          
          <div className="col-span-1 md:col-span-8 relative">
            <div className="relative z-10">
              <span className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-8 block">
                Kostrzyca
              </span>
              
              <div className="text-stone-300 font-light leading-loose space-y-8 text-lg md:text-xl">
                <p className="text-2xl md:text-3xl font-serif italic text-white leading-tight">
                  Śnieżka na dłoni. Blisko Karpacza.
                </p>
                
                <p className="text-lg md:text-xl">
                  <strong className="text-white">Nie wszystko da się opisać.</strong> Czasem wystarczy spojrzeć przez okno.
                </p>
                
                <p className="text-lg md:text-xl">
                  Tu, w Kostrzycy, blisko Karpacza, poranki zaczynają się od <strong className="text-white">ciszy i widoku</strong>, który na chwilę zatrzymuje wszystko inne. Przed Tobą rozciąga się panorama Karkonosze, a ponad nią — Śnieżka. Bliska. Wyraźna. Obecna. Jakby była częścią tego miejsca.
                </p>

                <p className="text-lg md:text-xl">
                  To nie jest nocleg „w górach”. To miejsce, w którym góry są codziennością — widziane z łóżka, z tarasu, z ciszy, która nie potrzebuje dodatków. Bez kurortu. Bez tłumów. Bez przypadkowości.
                </p>

                <p className="text-lg md:text-xl">
                  Domki całoroczne stoją w otwartej przestrzeni, gdzie nic nie zasłania widoku. Dzień płynie tu wolniej. Patrzysz. Oddychasz. Zostajesz dłużej, niż planowałeś. I nagle wiesz, że właśnie tego Ci brakowało.
                </p>

                <p className="text-lg md:text-xl border-l-2 border-[#D4A373] pl-6 italic text-stone-400">
                  Jeśli szukasz miejsca, które nie konkuruje hałasem, tylko krajobrazem — właśnie je znalazłeś.
                </p>
              </div>

              <a href="#oferta" className="group inline-flex items-center gap-3 border-b border-white/10 pb-1 hover:border-[#D4A373] transition-all duration-300 mt-8">
                <span className="text-sm font-bold uppercase tracking-widest text-stone-500 group-hover:text-[#D4A373] transition-colors">
                  Zobacz ofertę domków
                </span>
                <LiaArrowRightSolid size={16} className="text-stone-500 group-hover:text-[#D4A373] group-hover:translate-x-2 transition-all"/>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 flex flex-col justify-center space-y-6 pt-8 md:pt-0">
            
            <div className="group bg-[#050505] p-8 rounded-3xl border border-white/5 hover:border-[#D4A373]/50 transition-all duration-500 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#050505] transition-colors duration-300 flex-shrink-0">
                    <FaMountainSun size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Cisza</h3>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">Bez hałasu. Tylko Ty i góry.</p>
                  </div>
                </div>
            </div>

            <div className="group bg-[#050505] p-8 rounded-3xl border border-white/5 hover:border-[#D4A373]/50 transition-all duration-500 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#050505] transition-colors duration-300 flex-shrink-0">
                    <FaMountainSun size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Widok</h3>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">Śnieżka, Karkonosze, panorama.</p>
                  </div>
                </div>
            </div>

            <div className="bg-[#050505] backdrop-blur-md rounded-3xl p-6 border border-white/5 flex justify-between items-center shadow-inner">
                
                <div className="flex flex-col items-center justify-center gap-2 group cursor-help">
                  <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M12 20a4 4 0 0 0 0-8 4 4 0 0 0 0 8z"></path><path d="M1 12s4-8 11-8 11 8-8 11 8z"></path></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Internet</p>
                    <p className="text-sm font-bold text-white">1000 Mb/s</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-white/10"></div>

                <div className="flex flex-col items-center justify-center gap-2 group cursor-help">
                  <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
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