"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBed,
  FaUser,
  FaRulerCombined,
  FaPhone,
} from "react-icons/fa6";
import { FaFire, FaHotTub } from "react-icons/fa";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import CabinShowcase from "@/components/CabinShowcase";

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
    features: ["Widok na pasmo Karkonoszy", "Kominek", "Taras"],
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

async function getOffertData() {
  const res = await fetch("http://localhost/sniezka/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Offert {
          page(id: "cG9zdDoxNg") {
            oferta {
              tytul
              kroktiOpis
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.oferta;
}

export default async function Page() {
  const oferta = await getOffertData();

  return (
    <>
      <Menu />
      <main className="bg-[#FAF9F6] text-[#171717] font-sans min-h-screen">
        <section className="h-[50vh] md:h-[60vh] w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A373] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 text-center px-6">
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs mb-6">
              Wynajem • Kostrzyca
            </p>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-6">
              {oferta?.tytul || "Oferta"}
            </h1>
            <p className="text-stone-400 text-lg md:text-xl font-light">
              {oferta?.kroktiOpis || "Dwa domki. Dwa światy."}
            </p>
          </div>
        </section>


        <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
          <div className="p-12 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[#171717]">
              Masz pytania?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#171717] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4A373] transition-colors"
              >
                Sprawdź Terminy
              </a>
              <a
                href="tel:570430338"
                className="px-8 py-3 bg-[#FAF9F6] text-[#171717] border border-stone-200 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone size={12} /> Zadzwoń teraz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
