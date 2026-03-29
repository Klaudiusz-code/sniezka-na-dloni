import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaFire,
  FaUtensils,
  FaHotTub,
  FaAward,
  FaCar,
  FaBicycle,
  FaChild,
} from "react-icons/fa";
import { FaAirbnb, FaCheck } from "react-icons/fa6";

const iconMap = {
  kominek: <FaFire />,
  grill: <FaUtensils />,
  jacuzzi: <FaHotTub className="text-[#D4A373]" />,
  parking: <FaCar />,
  rowery: <FaBicycle />,
  "plac zabaw": <FaChild />,
};

export default function Hero({ data }: any) {
  if (!data) return null;
  return (
    <section className="relative w-full min-h-[90vh] bg-[#FAF9F6] flex flex-col lg:flex-row font-sans overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 py-16 lg:py-24 z-10 transition-all duration-300">
        <div className="mb-6 lg:mb-8 relative">
          <div className="absolute inset-0 bg-[#171717]/5 blur-md rounded-full"></div>
          <div className="relative flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-stone-200 shadow-sm">
            <FaAward className="text-[#D4A373] text-base" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                {data.heroBadgeTitle}
              </span>
              <span className="text-xs font-bold text-[#171717] mt-0.5">
                {data.heroBadgeSubtitle}
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-[#171717] leading-tight mb-6">
          {data.heroTitleMain} <br />
          <span className="text-[#D4A373] font-serif italic font-normal text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            {data.heroTitleAccent}
          </span>
        </h1>

        <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-8 max-w-[90%] lg:max-w-lg">
          {data.heroDescription}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-4 lg:gap-y-5 mb-10 w-full">
          {data.heroFeatures?.map((item: any, i: any) => {
            const key = item.nazwa?.toLowerCase();
              // @ts-ignore
            const icon = iconMap[key] || <FaCheck />;

            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                  {icon}{" "}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171717] leading-tight">
                    {item.nazwa}
                  </p>
                  <p className="text-[11px] text-stone-400">{item.opis}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-col xl:flex-row gap-3 w-full max-w-md">
          <Link
            href={data.heroCta.primaryLink}
            target="_blank"
            className="
              w-full xl:w-auto
              flex items-center justify-center gap-3
              px-6 py-3.5 lg:py-4
              bg-[#171717] text-white
              text-xs font-bold uppercase tracking-wider
              rounded-lg
              hover:bg-black transition shadow-md
              text-center
            "
          >
            <FaAirbnb size={18} />
            {data.heroCta.primarryButton}{" "}
          </Link>
          <a
            href={`tel:${data.heroCta.secondaryPhone}`}
            className="
              w-full xl:w-auto
              flex items-center justify-center gap-3
              px-6 py-3.5 lg:py-4
              bg-white border border-stone-200 text-[#171717]
              text-xs font-bold uppercase tracking-wider
              rounded-lg
              hover:bg-stone-50 transition
              text-center
            "
          >
            <FaPhone size={16} />
            {data.heroCta.secondaryText}{" "}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 flex gap-6 lg:gap-8 text-xs lg:text-sm text-stone-500 w-full max-w-md">
          <div>
            <p className="font-bold text-[#171717]">2 – 6 Osób</p>
            <p className="text-[10px] lg:text-xs">Maksymalna pojemność</p>
          </div>
          <div>
            <p className="font-bold text-[#171717]">Kostrzyca</p>
            <p className="text-[10px] lg:text-xs">Ulica Karpacka 103 C</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative bg-stone-200 overflow-hidden">
        <Image
          src="/hero.png"
          alt="Domek w górach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />

        <div className="absolute inset-0 p-4 lg:p-8 lg:block z-20 pointer-events-none">
          <div className="hidden lg:flex absolute top-8 right-8 pointer-events-auto flex-col gap-3 items-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-sm max-w-[220px]">
              <div className="flex items-center justify-between mb-1">
                <FaCar className="text-white/90" />
                <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider">
                  W cenie
                </span>
              </div>
              <span className="text-lg font-bold text-white">Parking</span>
              <p className="text-[10px] text-white/70 border-t border-white/10 pt-1.5 mt-1.5 leading-tight">
                Monitorowane miejsce na posesji.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition pointer-events-auto">
              <FaHotTub className="text-white text-xs" />
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-8 lg:bottom-12 left-8 lg:left-12 pointer-events-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-xl shadow-sm max-w-[280px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#D4A373] text-white flex items-center justify-center rounded-lg font-bold text-sm shadow-sm">
                  21°C
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/70 font-bold tracking-wider">
                    Temperatura wewnątrz
                  </p>
                  <p className="text-sm font-bold text-white leading-none mt-0.5">
                    Ogrzewanie podłogowe
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-[10px] lg:text-xs font-medium text-white/90 border-t border-white/10 pt-2">
                <span>65 m²</span>
                <span>2 Sypialnie</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex flex-col gap-2 absolute bottom-0 left-0 w-full p-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-2">
                <FaCar className="text-white/90" />
                <span className="text-white text-sm font-bold">Parking</span>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-lg">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  W cenie
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  21°C
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-white/60 tracking-wider">
                    Temp.
                  </span>
                  <span className="text-white text-[10px] font-bold">
                    Podłogówka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
