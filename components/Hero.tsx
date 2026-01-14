import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaFire,
  FaSnowflake,
  FaHotTub,
  FaAward,
  FaCar,
} from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#FAF9F6] flex flex-col lg:flex-row font-sans overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6 md:px-16 lg:px-24 xl:px-44 py-20 lg:py-24 z-10">
        {/* Badge */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-[#171717]/5 blur-md rounded-full"></div>
          <div className="relative flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-stone-200 shadow-sm">
            <FaAward className="text-[#D4A373] text-lg" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Gwarancja
              </span>
              <span className="text-xs font-bold text-[#171717] mt-1">
                Standard Luksusowy
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] leading-tight mb-6">
          Twój Azyl <br />
          <span className="text-[#D4A373] font-serif italic font-normal text-4xl md:text-5xl">
            w Karkonoszach
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-lg">
          Odpocznij w naszych drewnianych domkach z widokiem na Śnieżkę. Komfort
          jacuzzi, ciepło kominka i cisza górskiego lasu.
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-6 mb-12">
          {[
            { icon: <FaFire />, title: "Kominek", desc: "Drewno gratis" },
            {
              icon: <FaHotTub className="text-[#D4A373]" />,
              title: "Jacuzzi",
              desc: "Prywatne",
            },
            { icon: <FaSnowflake />, title: "Szlak", desc: "200 metrów" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-[#171717]">{item.title}</p>
                <p className="text-xs text-stone-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://airbnb.com"
            target="_blank"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#171717] text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-black transition shadow-lg"
          >
            <FaAirbnb size={20} />
            Zobacz Dostępność
          </Link>

          <a
            href="tel:+48570430338"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-stone-200 text-[#171717] text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-stone-50 transition"
          >
            <FaPhone size={18} />
            Zadzwoń do nas
          </a>
        </div>

        {/* Info */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex gap-8 text-sm text-stone-500">
          <div>
            <p className="font-bold text-[#171717]">2 – 6 Osób</p>
            <p className="text-xs">Maksymalna pojemność</p>
          </div>
          <div>
            <p className="font-bold text-[#171717]">Karpacz</p>
            <p className="text-xs">Ulica Karpacka 103 C</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 h-[45vh] lg:h-auto relative bg-stone-200 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
          alt="Domek w górach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* INFO CARDS */}
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-4 lg:inset-0 lg:block z-20">
          {/* Parking */}
          <div className="relative lg:absolute lg:top-8 lg:right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-[240px] border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <FaCar />
              <span className="text-[10px] font-bold text-[#D4A373] uppercase tracking-wider">
                W cenie
              </span>
            </div>
            <span className="text-xl font-bold text-[#171717]">Parking</span>
            <p className="text-xs text-stone-600 border-t pt-2 mt-2">
              Monitorowane miejsce na posesji.
            </p>
          </div>

          {/* Temperature */}
          <div className="relative lg:absolute lg:bottom-8 lg:left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-xl max-w-xs">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-[#171717] text-white flex items-center justify-center rounded-lg font-bold">
                20°C
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500 font-bold">
                  Temperatura wewnątrz
                </p>
                <p className="text-sm font-bold text-[#171717]">
                  Ogrzewanie podłogowe
                </p>
              </div>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <span>85 m²</span>
              <span>2 Sypialnie</span>
              <span>Sauna</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
