"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBed,
  FaUser,
  FaRulerCombined,
  FaTag,
  FaCheck,
} from "react-icons/fa6";

const cabins = [
  {
    id: 1,
    slug: "domki/orzel-bielik",
    name: "Orzeł Bielik",
    subtitle: "Styl majestatyczny i ponadczasowy.",
    price: "650",
    period: "/doba",
    guests: "2-6 Os.",
    beds: "2 Syp.",
    area: "65 m²",
    status: "available",
    logo: "/logobielik.png",
    features: ["Widok na sniezke", "Kominek", "Taras"],
    image: "/onasbielik.jpeg",
  },
  {
    id: 2,
    slug: "domki/czarny-jastrzab",
    name: "Czarny Jastrząb",
    subtitle: "Inny charakter, surowsza elegancja.",
    price: "650",
    period: "/doba",
    guests: "2-6 Os.",
    beds: "2 Syp.",
    area: "65 m²",
    status: "unavailable",
    logo: "/logoczarnyjastrzab.PNG",
    features: ["Prywatne SPA", "Jacuzzi", "Panorama"],
    image: "/onasczarnyjastrzab.jpeg",
  },
];
// @ts-ignore
function CabinCard({ cabin, idx }) {
  const [isPackageActive, setIsPackageActive] = useState(false);

  const isDark = cabin.name.includes("Czarny");
  const isAvailable = cabin.status === "available";
  const basePrice = parseInt(cabin.price);
  const packageDays = 3;
  const packagePrice = 1800;
  const savings = basePrice * packageDays - packagePrice;

  const cardBg = isDark ? "bg-[#050505]" : "bg-stone-200";
  const cardBorder = isDark ? "border-[#1f1f1f]" : "border-stone-300"; 
  const textColor = isDark ? "text-white" : "text-[#171717]";
  const subTextColor = isDark ? "text-stone-500" : "text-stone-600";
  const dividerColor = isDark ? "border-[#1f1f1f]" : "border-stone-300";
  const statusDotColor = isAvailable ? "bg-green-500" : "bg-red-500";
  const statusText = isAvailable ? "Dostępny" : "Niedostępny";
  const statusBg = isDark
    ? "bg-[#1a1a1a] border-red-900/20 text-stone-400"
    : "bg-white/95 border-stone-200 text-stone-700 shadow-md";
  const imageGradient = isDark ? "lg:from-black/80" : "lg:from-stone-100/80";
  const shadowClass = isDark
    ? "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
    : "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)]";

  const btnBg = isDark ? "bg-white text-[#050505]" : "bg-[#171717] text-white";
  const btnHover = isDark
    ? "group-hover/btn:bg-[#D4A373] group-hover/btn:text-[#050505]"
    : "group-hover/btn:bg-[#D4A373] group-hover/btn:text-[#171717]";

  return (
    <Link
      href={cabin.slug}
      className={`group block rounded-[2.5rem] overflow-hidden border transition-all duration-700 ease-out min-h-[500px] relative ${cardBg} ${cardBorder} ${shadowClass} hover:-translate-y-1`}
    >
      {/* --- ZMIANA: flex-col lg:flex-row ZMENIONO NA xl:flex-row --- */}
      {/* Od teraz pionowa karta zachowuje się aż do 1280px (xl), potem się rozkłada poziomo */}
      <div className="flex flex-col lg:flex-col xl:flex-row h-full">
        <div className="relative w-full xl:w-1/2 h-64 lg:h-80 xl:h-auto min-h-[300px] overflow-hidden">
          <div
            className={`absolute top-4 left-4 md:top-6 md:left-6 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm border transition-all duration-300 ${statusBg}`}
          >
            <span
              className={`w-2 h-2 rounded-full ${statusDotColor} ${isAvailable ? "animate-pulse" : ""}`}
            ></span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
              {statusText}
            </span>
          </div>

          {/* Logo na zdjęciu (zawsze widoczne) */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 w-10 h-10 md:w-12 md:h-12 relative">
            <Image
              src={cabin.logo}
              alt={cabin.name}
              fill
              className="object-contain"
            />
          </div>

          <Image
            src={cabin.image}
            alt={cabin.name}
            fill
            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
            priority={idx === 0}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-white/60 to-transparent lg:from-white/40 lg:to-transparent ${imageGradient}`}
          ></div>
        </div>

        <div
          className={`w-full xl:w-1/2 p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between ${cardBg}`}
        >
          <div className="flex flex-col gap-3 md:gap-4 mb-2">
            <div className="flex items-start justify-between gap-3 md:gap-4">
              
              {/* --- ZMIANA: Logo w tekście ukryte na tabletach i małych laptopach (hidden xl:block) --- */}
              {/* Dzięki temu na 1188px tekst ma pełną szerokość i się nie ściska */}
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 hidden xl:block">
                <Image
                  src={cabin.logo}
                  alt="Logo"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
              
              <div className="w-full">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-none mb-1 ${textColor}`}
                >
                  {cabin.name}
                </h3>
                <p className={`${subTextColor} italic text-xs md:text-sm font-light`}>
                  {cabin.subtitle}
                </p>
              </div>
            </div>

            <div className={`border-t ${dividerColor} pt-4 md:pt-6`}>
              <div className="relative h-10 md:h-12 overflow-visible mb-4 md:mb-6">
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform flex items-baseline gap-2
                                    ${isPackageActive ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"}`}
                >
                  <span className={`text-2xl md:text-4xl font-serif ${textColor}`}>
                    {cabin.price}
                  </span>
                  <span
                    className={`text-xs md:text-sm font-sans font-normal ${subTextColor}`}
                  >
                    {cabin.period}
                  </span>
                </div>

                <div
                  className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform flex items-baseline gap-2
                                    ${isPackageActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}`}
                >
                  <span className="text-sm md:text-2xl text-stone-500 line-through decoration-red-500/50 decoration-2 mr-2">
                    {basePrice * packageDays} zł
                  </span>
                  <span className="text-2xl md:text-4xl font-serif text-[#D4A373]">
                    {packagePrice} zł
                  </span>
                  <span
                    className={`text-xs md:text-sm font-sans font-normal text-[#D4A373]/80`}
                  >
                    / {packageDays} noce
                  </span>
                </div>
              </div>

              <div className="relative bg-[#0A0A0A] rounded-xl p-1 flex mb-2">
                <div
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#D4A373] rounded-lg shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0
                                        ${isPackageActive ? "translate-x-full" : "translate-x-0"}`}
                ></div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPackageActive(false);
                  }}
                  className={`flex-1 relative z-10 py-2 text-[8px] md:text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                                        ${!isPackageActive ? "text-[#050505]" : "text-stone-500 hover:text-stone-300"}`}
                >
                  Standard
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPackageActive(true);
                  }}
                  className={`flex-1 relative z-10 py-2 text-[8px] md:text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                                        ${isPackageActive ? "text-[#050505]" : "text-stone-500 hover:text-stone-300"}`}
                >
                  <FaTag size={10} /> Pakiet 3 Dni
                </button>
              </div>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isPackageActive ? "100px" : "0px",
                  opacity: isPackageActive ? "1" : "0",
                }}
              >
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-3 rounded-lg mt-2">
                  <div className="bg-green-500 text-white rounded-full p-1.5 shrink-0 shadow-sm">
                    <FaCheck size={10} />
                  </div>
                  <p className="text-xs text-green-400 font-medium">
                    Super oferta! Oszczędzasz{" "}
                    <span className="font-bold text-white text-sm ml-1">
                      {savings} zł
                    </span>{" "}
                    na wygodzie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-between">
            <div
              className={`grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 ${dividerColor} border-t pt-4 md:pt-6`}
            >
              <div
                className={`text-center p-2 md:p-3 ${isDark ? "bg-[#111]" : "bg-stone-100"} rounded-xl ${isDark ? "border-[#222]" : "border-stone-300"} transition-colors group-hover:bg-[#D4A373]/20`}
              >
                <FaUser className="text-[#D4A373] mx-auto mb-1 text-base md:text-lg" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500">
                  Goście
                </p>
                <p className={`font-bold text-xs md:text-sm ${textColor}`}>
                  {cabin.guests}
                </p>
              </div>
              <div
                className={`text-center p-2 md:p-3 ${isDark ? "bg-[#111]" : "bg-stone-100"} rounded-xl ${isDark ? "border-[#222]" : "border-stone-300"} transition-colors group-hover:bg-[#D4A373]/20`}
              >
                <FaBed className="text-[#D4A373] mx-auto mb-1 text-base md:text-lg" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500">
                  Sypialnie
                </p>
                <p className={`font-bold text-xs md:text-sm ${textColor}`}>{cabin.beds}</p>
              </div>
              <div
                className={`text-center p-2 md:p-3 ${isDark ? "bg-[#111]" : "bg-stone-100"} rounded-xl ${isDark ? "border-[#222]" : "border-stone-300"} transition-colors group-hover:bg-[#D4A373]/20`}
              >
                <FaRulerCombined className="text-[#D4A373] mx-auto mb-1 text-base md:text-lg" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500">
                  Metraż
                </p>
                <p className={`font-bold text-xs md:text-sm ${textColor}`}>{cabin.area}</p>
              </div>
            </div>
            <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
              {cabin.features.map((feature: any, fIdx: any) => (
                <li
                  key={fIdx}
                  className={`flex items-center gap-2 text-xs md:text-sm font-light ${isDark ? "text-stone-400" : "text-stone-600"}`}
                >
                  <div className="w-1 h-1 rounded-full bg-[#D4A373] flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div
              className={`group/btn flex items-center justify-between ${dividerColor} border-t pt-4 md:pt-6`}
            >
              <span
                className={`font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover/btn:text-[#D4A373] transition-colors duration-300 ${textColor}`}
              >
                Zobacz szczegóły
              </span>
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${btnBg} ${btnHover}`}
              >
                <FaArrowRight size={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CabinShowcase() {
  return (
    <section
      id="oferta"
      className="bg-[#FAF9F6] text-[#171717] font-sans py-20 px-6"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center px-6 mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-[#171717]">
            Wybierz Swój Świat Na Chwilę
          </h2>
          <p className="text-stone-500 mt-4 font-light">
            Dwa domki. Jeden komfortowy standard.
          </p>
        </div>

        {/* Zmiana w grid: lg:grid-cols-2 zachowane, ale karty są pionowe, więc jest więcej miejsca */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {cabins.map((cabin, idx) => (
            <CabinCard key={cabin.id} cabin={cabin} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}