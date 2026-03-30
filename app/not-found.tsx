"use client";

import Link from "next/link";
import { LiaMapPinSolid, LiaArrowLeftSolid } from "react-icons/lia";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Menu />
      <main className="relative min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#D4A373] selection:text-white overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4A373]/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="relative z-10 max-w-lg w-full">
            
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[12rem] md:text-[16rem] font-serif leading-none text-white/[0.03] select-none z-0 pointer-events-none">
              404
            </span>

            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl text-center flex flex-col items-center relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D4A373]/10 to-transparent pointer-events-none"></div>

              <div className="w-20 h-20 rounded-full bg-[#D4A373] flex items-center justify-center text-[#050505] mb-8 shadow-[0_0_40px_rgba(212,163,115,0.3)] animate-float-gentle relative z-10">
                <LiaMapPinSolid size={40} />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                Ups, chwilowy brak drogi
              </h2>
              
              <p className="text-stone-400 text-lg font-light leading-relaxed mb-10 relative z-10">
                Wygląda na to, że ta strona uciekła w góry. Ale nic nie stracone – nasza oferta czeka na Ciebie na głównej trasie.
              </p>

              <Link 
                href="/" 
                className="group relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-[#D4A373] text-[#050505] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <LiaArrowLeftSolid size={18} />
                Powrót do domu
              </Link>
            </div>

            <div className="mt-8 text-center relative z-10">
               <p className="text-stone-600 text-sm">
                Szukasz czegoś konkretnego? <Link href="/okolica" className="text-[#D4A373] hover:underline underline-offset-4 transition-colors">Przejrzyj okolicę</Link>
               </p>
            </div>

          </div>
        </div>

      <Footer />

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-12px); 
          }
        }
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </main>
    </>
  );
}