"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { LiaArrowRightSolid } from "react-icons/lia";

// --- DANE (Bez zmian) ---
const ATTRACTIONS = [
  {
    id: 1,
    title: "Dream Jump",
    desc: "Wieża do skoków bungee. Adrenalina w sercu Karkonoszy.",
    time: "10 min",
  },
  {
    id: 2,
    title: "Western City",
    desc: "Dziki Zachód w Karpaczu. Klimat westernowy dla całej rodziny.",
    time: "15 min",
  },
  {
    id: 3,
    title: "Wzgórze Radziwiłłówka",
    desc: "Piękny punkt widokowy z panoramą Kotliny Jeleniogórskiej.",
    time: "12 min",
  },
  {
    id: 4,
    title: "Ogród Japoński",
    desc: "Shiruwa. Azjatycki spokój i harmonia tuż obok domków.",
    time: "15 min",
  },
  {
    id: 5,
    title: "Zapora na Łomnicy",
    desc: "Potężna tama w sercu gór. Malownicze szlaki spacerowe.",
    time: "15 min",
  },
  {
    id: 6,
    title: "Krucze Skały",
    desc: "Legendarny szlak z drewnianą kładką i niesamowitymi widokami.",
    time: "10 min",
  },
  {
    id: 7,
    title: "Kowarska Starówka",
    desc: "Urokliwe miasto z historią kowalstwa i podziemiami.",
    time: "20 min",
  },
  {
    id: 8,
    title: "Dziki Wodospad",
    desc: "Ukryty wodospad, który zachwyca siłą natury i ciszą.",
    time: "10 min",
  },
  {
    id: 9,
    title: "Miejsce Anomalii",
    desc: "Tajemniczy punkt grawitacyjny. Prawo fizyki nie działa?",
    time: "10 min",
  },
  {
    id: 10,
    title: "Karpacz Ski Arena",
    desc: "Największy kompleks narciarski w regionie. Zima w pełni.",
    time: "15 min",
  },
  {
    id: 11,
    title: "Karkonoskie Tajemnice",
    desc: "Multimedialne muzeum. Duchy gór i lokalne legendy.",
    time: "10 min",
  },
  {
    id: 12,
    title: "Młyn Miłości",
    desc: "Magiczne miejsce pełne legend i romantycznej atmosfery.",
    time: "10 min",
  },
  {
    id: 13,
    title: "Karkonoski Park Narodowy",
    desc: "Wrota do dzikiej natury. Start szlaków w Karpaczu.",
    time: "15 min",
  },
  {
    id: 14,
    title: "Muzeum Zabawek",
    desc: "Największa kolekcja zabawek w Polsce. Sentymentalna podróż.",
    time: "10 min",
  },
  {
    id: 15,
    title: "Park Miniatur",
    desc: "Mniejszy model całego Dolnego Śląska w pigułce.",
    time: "10 min",
  },
  {
    id: 16,
    title: "Termy Cieplickie",
    desc: "Kompleks basenów termalnych. Relaks w Cieplicach (Jelenia Góra).",
    time: "~35 min",
  },
  {
    id: 17,
    title: "Kolejka na Szrenicę",
    desc: "Wjazd kolejką linową na szczyt. Widok na 3 kraje.",
    time: "~30 min",
  },
];

export default function Okolica() {
  return (
    <>
      <Menu />
      <main className="bg-[#050505] text-white font-sans min-h-screen selection:bg-[#D4A373] selection:text-black">
        {/* --- HERO SEKCJA --- */}
        <section className="pt-32 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs">
                Okolica
              </span>
              <div className="h-[1px] w-12 bg-white/20"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-[1.05] mb-8">
              Co robić <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-500">
                w okolicy?
              </span>
            </h2>

            <p className="text-stone-400 font-light leading-relaxed text-lg max-w-2xl mx-auto">
              Sprawdź naszą listę atrakcji. Wszystko jest blisko.
            </p>
          </div>
        </section>

        {/* --- LISTA ATRAKCJI (Pionowa, Listowa) --- */}
        <section className="pb-32 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              {ATTRACTIONS.map((item, index) => (
                <div
                  key={item.id}
                  className="group py-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300 cursor-default"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* LEWA: Numer i Tytuł + Opis */}
                    <div className="flex items-start gap-6">
                      {/* Numer */}
                      <span className="text-[#D4A373]/20 font-serif text-2xl leading-none pt-2 select-none w-8 text-center">
                        {item.id}
                      </span>

                      {/* Tekst */}
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#D4A373] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* PRAWA: Czas i Strzałka (Wyrównane do prawej na desktop) */}
                    <div className="flex items-center gap-6 pl-14 md:pl-0 min-w-[140px] md:text-right">
                      {/* Czas */}
                      <div className="flex flex-col md:items-end">
                        <span className="text-[10px] uppercase tracking-widest text-stone-600 mb-1">
                          Dojazd
                        </span>
                        <span className="text-stone-300 font-medium">
                          {item.time}
                        </span>
                      </div>

                      {/* Ikona */}
                      <div className="text-stone-700 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all duration-300">
                        <LiaArrowRightSolid size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SEKCJA --- */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-3">
              <h2 className="text-3xl font-serif text-white">
                Gotowy na przygodę?
              </h2>
              <p className="text-stone-500 text-base tracking-wide">
                Rezerwuj domek i zobacz Karkonosze na własne oczy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="tel:570430338"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Zadzwoń do nas
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kostrzyca+ul+Karpacka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A373] text-[#050505] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4A373]/20"
              >
                Wyznacz trasę
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
