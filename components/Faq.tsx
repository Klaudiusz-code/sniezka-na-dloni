import { FaClock, FaDog, FaBanSmoking, FaFire } from "react-icons/fa6";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-[1400px] mx-auto px-6 py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4F1EA] rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="relative z-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E5E5E5] pb-8">
          <div>
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">
              Informacje
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Regulamin
            </h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-[#1A1A1A]/10"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4A373]/5 backdrop-blur-md border border-[#D4A373]/20 flex items-center justify-center text-[#D4A373] mb-8 group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
              <FaClock size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Zameldowanie
            </h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Przyjazd od 16:00</p>
              <p className="text-lg">Wyjazd do 11:00</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Czas
            </span>
            <div className="w-8 h-[2px] bg-[#D4A373]/20"></div>
            <span className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#D4A373] transition-colors">
              Szczegóły
            </span>
          </div>
        </div>

        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4A373]/5 backdrop-blur-md border border-[#D4A373]/20 flex items-center justify-center text-[#D4A373] mb-8 group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
              <FaDog size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Zwierzęta
            </h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Zgłoś przed przyjazdem.</p>
              <p className="text-lg text-[#D4A373] font-medium">50 zł / noc</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Opłata
            </span>
            <div className="w-8 h-[2px] bg-[#D4A373]/20"></div>
            <span className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#D4A373] transition-colors">
              Więcej
            </span>
          </div>
        </div>

        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4A373]/5 backdrop-blur-md border border-[#D4A373]/20 flex items-center justify-center text-[#D4A373] mb-8 group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
              <FaBanSmoking size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Palenie</h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Zakaz wewnątrz.</p>
              <p className="text-lg">Dopuszczalne na tarasie.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Strefa
            </span>
            <div className="w-8 h-[2px] bg-[#D4A373]/20"></div>
            <span className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#D4A373] transition-colors">
              Zasady
            </span>
          </div>
        </div>

        <div className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D4A373]/5 backdrop-blur-md border border-[#D4A373]/20 flex items-center justify-center text-[#D4A373] mb-8 group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white transition-all duration-300">
              <FaFire size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Ogień</h3>
            <div className="space-y-3 text-[#505050]">
              <p className="text-lg">Drewno do kominka.</p>
              <p className="text-lg">Bez opłat.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F0F0F0] flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Status
            </span>
            <div className="w-8 h-[2px] bg-[#D4A373]/20"></div>
            <span className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#D4A373] transition-colors">
              Free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
