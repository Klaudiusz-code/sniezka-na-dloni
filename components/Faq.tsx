import Link from "next/link";
import { FaClock, FaDog, FaBanSmoking, FaMusic, FaBan, FaArrowRight } from "react-icons/fa6";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-[1400px] mx-auto px-6 py-32 bg-white relative overflow-hidden"
    >
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4F1EA] rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="relative z-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E5E5E5] pb-8">
          <div>
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">
              Regulamin
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Zasady pobytu
            </h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-[#1A1A1A]/10"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        
        {/* Karta: DOBA HOTELOWA (Zasada 1) */}
        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4A373]/5 backdrop-blur-md border border-[#D4A373]/20 flex items-center justify-center text-[#D4A373] mb-8 group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
              <FaClock size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Doba hotelowa
            </h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Przyjazd od 15:00</p>
              <p className="text-lg">Wyjazd do 11:00</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Czas
            </span>
            <div className="w-8 h-[2px] bg-[#D4A373]/20"></div>
            <span className="text-xs font-bold text-[#505050]">
              Punkt 1
            </span>
          </div>
        </div>

        {/* Karta: ZWIERZĘTA (Zasada 3) */}
        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            {/* Ikona z efektem przekreślenia */}
            <div className="relative w-20 h-20 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-8 transition-colors duration-300">
              <FaDog size={32} className="text-stone-300" />
              {/* Nakładka z zakazem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaBan size={38} className="text-red-400 opacity-80" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Zwierzęta
            </h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Niedozwolone</p>
              <p className="text-sm text-stone-400">W obiekcie (Zasada 3)</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Polityka
            </span>
            <div className="w-8 h-[2px] bg-stone-200"></div>
            <span className="text-xs font-bold text-red-400">
              Zakaz
            </span>
          </div>
        </div>

        {/* Karta: PALENIE (Zasada 4) */}
        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4A373]/5 backdrop-blur-md border border-[#D4A373]/20 flex items-center justify-center text-[#D4A373] mb-8 group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
              <FaBanSmoking size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Palenie</h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Całkowity zakaz.</p>
              <p className="text-sm text-stone-400">Również e-papierosy.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Strefa
            </span>
            <div className="w-8 h-[2px] bg-[#D4A373]/20"></div>
            <span className="text-xs font-bold text-[#505050]">
              Zasada 4
            </span>
          </div>
        </div>

        {/* Karta: IMPREZY (Zasada 11) */}
        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            {/* Ikona przekreślona */}
            <div className="relative w-20 h-20 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-8 transition-colors duration-300">
              <FaMusic size={32} className="text-stone-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaBan size={38} className="text-red-400 opacity-80" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Imprezy</h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Zakaz organizowania.</p>
              <p className="text-sm text-stone-400">Tylko cele mieszkalne.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Zasada
            </span>
            <div className="w-8 h-[2px] bg-stone-200"></div>
            <span className="text-xs font-bold text-red-400">
              Punkt 11
            </span>
          </div>
        </div>

      </div>

      {/* SEKCJA Z ODNOŚNIKIEM DO REGULAMINU */}
      <div className="mt-20 text-center">
        <p className="text-stone-400 text-sm mb-8 max-w-2xl mx-auto">
          Poznaj szczegółowe zasady, opłaty serwisowe oraz politykę odpowiedzialności.
        </p>
        
        <Link 
          href="/regulamin" 
          className="group inline-flex items-center gap-4 text-[#1A1A1A]"
        >
            <span className="font-bold uppercase tracking-widest text-xs group-hover:text-[#D4A373] transition-colors">
                Przejdź do pełnego regulaminu
            </span>
            <div className="w-10 h-10 rounded-full border border-[#1A1A1A] flex items-center justify-center transition-all duration-300 bg-white group-hover:bg-[#D4A373] group-hover:border-[#D4A373]">
                <FaArrowRight size={12} />
            </div>
        </Link>
      </div>
    </section>
  );
}