"use client";

import Link from "next/link";
import { LiaMapPinSolid, LiaArrowLeftSolid } from "react-icons/lia";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4A373]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[60%] w-[200px] h-[200px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full mx-6">
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl text-center flex flex-col items-center relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D4A373]/10 to-transparent pointer-events-none"></div>

          <div className="w-20 h-20 rounded-full bg-[#D4A373] flex items-center justify-center text-[#050505] mb-8 shadow-[0_0_30px_rgba(212,163,115,0.3)] animate-bounce-slow">
            <LiaMapPinSolid size={40} />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ups, chwilowy brak drogi
          </h2>
          
          <p className="text-stone-400 text-lg font-light leading-relaxed mb-10">
            Wygląda na to, że ta strona uciekła w góry. Ale nic nie stracone – nasza oferta czeka na Ciebie na głównej trasie.
          </p>

          <Link 
            href="/" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4A373] text-[#050505] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <LiaArrowLeftSolid size={18} />
            Powrót do domu
          </Link>

        </div>

        <div className="mt-8 text-center">
           <p className="text-stone-500 text-sm">
            Szukasz czegoś konkretnego? <Link href="/okolica" className="text-[#D4A373] hover:underline underline-offset-4">Przejrzyj okolicę</Link>
           </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </main>
  );
}