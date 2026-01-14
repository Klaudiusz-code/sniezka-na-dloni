import Link from "next/link";
import {
  FaMountain,
  FaSkiing,
  FaUtensils,
  FaMapMarkerAlt,
  FaChurch,
  FaWater,
  FaTree,
  FaChild,
} from "react-icons/fa";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

export default function page() {
  return (
    <>
      <Menu />
      <main className="bg-[#050505] text-[#FAFAF9] font-sans min-h-screen selection:bg-[#D4A373] selection:text-black">
        <section className="h-[55vh] w-full bg-[#050505] flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10 text-center px-6">
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-xs mb-6">
              Location
            </p>
            <h1 className="text-7xl md:text-9xl font-serif text-white leading-none mb-6">
              Okolica
            </h1>
            <p className="text-stone-500 text-lg">
              Karpacz i Kostrzyca pełne są <br /> ciekawych miejsc.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>

        <section className="py-16 px-6 bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0F0F0F] p-12 md:p-16 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#D4A373]">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Nasz Adres
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                  Kostrzyca <br />
                  <span className="text-[#D4A373] italic">
                    ul. Karpacka 103 C
                  </span>
                </h2>
                <p className="text-stone-500">Karpacz, PL</p>
              </div>

              <a
                href="https://maps.google.com/?q=ulica+Karpacka+103+Karpacz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-black transition-all rounded-full"
              >
                Otwórz mapę
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#050505]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/5 pb-8">
              {" "}
              <div>
                <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-xs mb-4">
                  Atrakcje
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-none">
                  Co robić <br /> w okolicy?
                </h2>
              </div>
              <div className="text-stone-500 text-sm max-w-xs text-left md:text-right mt-6 md:mt-0">
                {" "}
                Wszystko w zasięgu krótkiej <br />
                przejażdki lub spaceru.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-8 bg-[#0F0F0F] rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                    <FaUtensils size={24} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#D4A373]/20 transition-colors">
                    06
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Centrum Karpacza
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Kolorowa promenada, restauracje, sklepy i słynna Złotówka.
                  Idealne na wieczorny spacer.
                </p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  ~6 min autem
                </p>
              </div>

              <div className="group p-8 bg-[#0F0F0F] rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                    <FaChurch size={24} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#D4A373]/20 transition-colors">
                    10
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Kościół Wang
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Unikalna, drewniana norweska świątynia przeniesiona z
                  Wikingowiej wioski. Przepiękny widok na okolicę.
                </p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  ~10 min autem
                </p>
              </div>

              <div className="group p-8 bg-[#0F0F0F] rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                    <FaSkiing size={24} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#D4A373]/20 transition-colors">
                    07
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Karpacz Ski Arena
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Największy i najnowocześniejszy kompleks narciarski w
                  regionie. Pętle dla każdego.
                </p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  ~7 min autem
                </p>
              </div>

              <div className="group p-8 bg-[#0F0F0F] rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                    <FaWater size={24} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#D4A373]/20 transition-colors">
                    12
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Wodospad Lomniczki
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Urokliwy wodospad w dolinie Łomniczki. Idealny na romantyczny
                  spacer w lesie.
                </p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  ~12 min autem
                </p>
              </div>

              <div className="group p-8 bg-[#0F0F0F] rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                    <FaMountain size={24} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#D4A373]/20 transition-colors">
                    15
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Kopa Rest House
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Najwyższy położony hotel w Polsce (1470m). Zimowa Kopa i widok
                  na Śnieżkę. Kolejką Gondolową.
                </p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  ~15 min autem
                </p>
              </div>

              <div className="group p-8 bg-[#0F0F0F] rounded-3xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                    <FaChild size={24} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#D4A373]/20 transition-colors">
                    05
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Muzeum Zabawek
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  Największa kolekcja zabawek w Polsce. Dwie wieze, 5 pięter i
                  bajkowe klimaty.
                </p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  ~5 min autem
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#050505] border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/40 text-sm mb-6">
              Nie możesz się zdecydować, gdzie pójść?
            </p>
            <a
              href="tel:570430338"
              className="inline-block px-10 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full"
            >
              Zapytaj nas
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
