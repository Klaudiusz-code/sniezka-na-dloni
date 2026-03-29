"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../../components/Footer";
import {
  FaFire,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaUtensils,
  FaChevronLeft,
  FaChevronRight,
  FaCar,
  FaHotTub,
  FaTree,
  FaCheck,
  FaQuoteLeft,
} from "react-icons/fa";
import { FaAirbnb, FaXmark, FaStar, FaFacebook } from "react-icons/fa6";
import Menu from "@/components/Menu";

const pageData = {
  title: "Czarny Jastrząb",
  subtitle: "KARPACZ",
  area: "65 m²",
  capacity: "2 - 6 OSÓB",
  description:
    "Dwupoziomowy domek o nowoczesnej architekturze. Inny charakter, surowsza elegancja i ponadczasowy styl, stworzony dla tych, którzy szukają dyskretnego luksusu w ciemnym wydaniu.",

  specs: ["Salon z kuchnią", "2 Sypialnie", "Łazienka", "Taras", "2 Poziomy"],

  amenities: [
    { icon: <FaSnowflake />, label: "Klimatyzacja" },
    { icon: <FaFire />, label: "Ogrzewanie podłogowe" },
    { icon: <FaTv />, label: "TV + Netflix" },
    { icon: <FaWifi />, label: "Szybkie Wi-Fi" },
    { icon: <FaUtensils />, label: "Pełne wyposażenie" },
    { icon: <FaHotTub />, label: "Jacuzzi zewnętrzne" },
    { icon: <FaTree />, label: "Strefa Grilla" },
    { icon: <FaCar />, label: "Parking prywatny" },
  ],

  latestReview: {
    text: "Wersja czarna wygląda jeszcze bardziej ekskluzywnie. Miejsce z duszą. Bardzo czysto i nowocześnie. Polecam.",
    author: "Piotr Kowalski",
    rating: 5,
  },
};

export default function CzarnyJastrzab() {
  const galleryImages = [
    "/czarnygallery1.jpeg",
    "/czarnygallery2.jpeg",
    "/czarnygallery3.jpeg",
    "/czarnygallery4.jpeg",
    "/czarnygallery5.jpeg",
    "/czarnygallery6.jpeg",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: any) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = (e: any) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <>
      <Menu />

      <main className="bg-[#050505] text-[#e5e5e5] font-sans min-h-screen selection:bg-[#94a3b8] selection:text-black">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-40 h-40 mb-8 flex items-center justify-center rounded-lg bg-transparent">
                <div className="w-full h-full relative">
                  <Image
                    src="/logoczarnyjastrzab.PNG"
                    alt="Logo"
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-red-900/30 text-stone-400 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Niedostępny
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-2 text-white">
                Czarny
                <br />{" "}
                <span className="text-stone-500 italic font-normal">
                  Jastrząb
                </span>
              </h1>

              <span className="text-[#94a3b8] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                Kostrzyca/Karpacz
              </span>

              <p className="text-stone-400 text-base leading-relaxed mb-6 max-w-md font-light">
                {pageData.description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
                <span>{pageData.area}</span>
                <span>•</span>
                <span>{pageData.capacity}</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 border border-[#1f1f1f] group">
                <Image
                  src="/onasczarnyjastrzab.jpeg"
                  alt="Dom"
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333] rounded-2xl p-4 flex justify-between items-center shadow-lg">
                  <div>
                    <p className="text-[9px] uppercase text-stone-500 tracking-widest font-bold">
                      Cena
                    </p>
                    <p className="text-2xl font-serif text-white">650 zł</p>
                  </div>
                  <span className="text-sm text-stone-500">/noc</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-t border-[#1f1f1f] bg-[#0c0c0c]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {pageData.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-3 bg-[#111] border border-[#222] rounded-lg text-center hover:border-[#333] transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-[#1f1f1f] bg-[#0c0c0c]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-serif text-white">Udogodnienia</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {pageData.amenities.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111] border border-[#222] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-center hover:border-[#444] hover:bg-[#1a1a1a] transition-all duration-300 group cursor-default"
                >
                  <div className="text-xl text-stone-600 group-hover:text-stone-300 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-stone-500 group-hover:text-stone-200 transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <FaQuoteLeft className="text-[#94a3b8]/10 text-6xl absolute -top-8 -left-4" />
            <div className="flex justify-center gap-1 mb-4 text-[#94a3b8]">
              {[...Array(pageData.latestReview.rating)].map((_, i) => (
                <FaStar key={i} size={16} />
              ))}
            </div>
            <p className="text-lg md:text-xl font-serif font-light text-stone-300 leading-relaxed italic mb-6">
              "{pageData.latestReview.text}"
            </p>
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-500">
              — {pageData.latestReview.author}, Ostatnia opinia
            </div>
          </div>
        </section>

        <section className="py-16 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-[#1f1f1f]"
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Zdjęcie ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Zobacz
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center px-6 border-t border-[#1f1f1f] bg-[#050505]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">
              Zainteresowany?
            </h2>

            <p className="text-stone-500 mb-4">
              Skontaktuj się z nami, jeśli chcesz zarezerwować termin w
              przyszłości.
            </p>

            <p className="text-sm text-stone-400 mb-10">
              Rezerwując przez naszą stronę otrzymasz najlepszą ofertę cenową.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#94a3b8] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#94a3b8]/20"
              >
                <FaAirbnb size={18} /> Airbnb
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-transparent text-stone-500 text-xs font-bold uppercase tracking-widest rounded-full border border-[#333] hover:border-white hover:text-white transition-all duration-300"
              >
                <FaFacebook size={18} /> Facebook
              </Link>
            </div>
          </div>
        </section>

        {modalOpen && (
          <div
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full p-2">
              <FaXmark size={30} />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#94a3b8] transition-colors bg-black/20 rounded-full p-2"
              onClick={prevImage}
            >
              <FaChevronLeft size={30} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#94a3b8] transition-colors bg-black/20 rounded-full p-2"
              onClick={nextImage}
            >
              <FaChevronRight size={30} />
            </button>

            <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
              <Image
                src={galleryImages[currentImageIndex]}
                alt="Full Screen"
                width={1920}
                height={1080}
                className="object-contain max-h-full max-w-auto"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
