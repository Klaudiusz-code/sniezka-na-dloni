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
import { FaAirbnb, FaXmark, FaStar } from "react-icons/fa6";
import Menu from "@/components/Menu";

// --- DANE ---
const pageData = {
  title: "Orzeł Bielik",
  subtitle: "KARPACZ",
  area: "65 m²",
  capacity: "2 - 6 OSÓB",
  description:
    "Dwupoziomowy domek o nowoczesnej architekturze. Styl majestatyczny i ponadczasowy, stworzony dla tych, którzy szukają prawdziwego, dyskretnego luksusu.",

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
    text: "Absolutny szok w pozytywnym sensie. Wnętrze jest jeszcze ładniejsze niż na zdjęciach. Cisza, spokój i widok, który zapiera dech. Z pewnością wrócimy!",
    author: "Anna Nowak",
    rating: 5,
  },
};

export default function OrzelBielik() {
  const galleryImages = [
    "/bielikgallery1.jpeg",
    "/bielikgallery2.jpeg",
    "/bielikgallery3.jpeg",
    "/bielikgallery4.jpeg",
    "/bielikgallery5.jpeg",
    "/bielikgallery6.jpeg",
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

      <main className="bg-white text-[#1a1a1a] font-sans min-h-screen selection:bg-[#D4A373] selection:text-white">
        
        {/* --- HERO: POPRAWIONY, DUŻE LOGO, BEZ RAMEK --- */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            
            {/* LEWA: LOGO I TEKST */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              
              {/* DUŻE LOGO: CZYSTY ZŁOTY KWADRAT BEZ RAMEK */}
              <div className="w-40 h-40 bg-[#D4A373] flex items-center justify-center rounded-lg mb-8">
                <div className="w-full h-full relative p-8">
                  <Image
                    src="/logobielik.png"
                    alt="Logo"
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
              </div>

              {/* STATUS */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 mb-5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Dostępny
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] mb-2 text-[#1a1a1a]">
                Orzeł
                <br />{" "}
                <span className="text-stone-300 italic font-normal">
                  Bielik
                </span>
              </h1>

              <span className="text-[#D4A373] text-[10px] font-bold tracking-[0.35em] uppercase mb-5 block">
                KARPACZ
              </span>

              <p className="text-stone-500 text-lg leading-relaxed mb-6 max-w-md font-light">
                {pageData.description}
              </p>

              {/* INFO */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-stone-400 uppercase tracking-widest">
                <span>{pageData.area}</span>
                <span>•</span>
                <span>{pageData.capacity}</span>
              </div>

            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50 border border-stone-100 group">
                <Image
                  src="/onasbielik.jpeg"
                  alt="Dom"
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>

                {/* CENNIK */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-stone-100 rounded-2xl p-4 flex justify-between items-center shadow-lg">
                  <div>
                    <p className="text-[9px] uppercase text-stone-400 tracking-widest font-bold">
                      Cena
                    </p>
                    <p className="text-2xl font-serif text-[#1a1a1a]">650 zł</p>
                  </div>
                  <span className="text-sm text-stone-400">/noc</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SPECYFIKACJA --- */}
        <section className="py-8 border-t border-stone-100 bg-stone-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {pageData.specs.map((spec, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-stone-100 text-center">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-stone-100 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-serif text-[#1a1a1a]">
                Udogodnienia
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {pageData.amenities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-center hover:border-[#D4A373] hover:shadow-md hover:shadow-[#D4A373]/10 transition-all duration-300 group cursor-default"
                >
                  <div className="text-xl text-stone-300 group-hover:text-[#D4A373] transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-stone-600 group-hover:text-[#1a1a1a] transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-6 text-center">
           <div className="relative">
               <FaQuoteLeft className="text-[#D4A373]/10 text-6xl absolute -top-8 -left-4" />
               <div className="flex justify-center gap-1 mb-4 text-[#D4A373]">
                   {[...Array(pageData.latestReview.rating)].map((_, i) => (
                       <FaStar key={i} size={16} />
                   ))}
               </div>
               <p className="text-lg md:text-xl font-serif font-light text-stone-700 leading-relaxed italic mb-6">
                   "{pageData.latestReview.text}"
               </p>
               <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                   — {pageData.latestReview.author}, Ostatnia opinia
               </div>
           </div>
        </section>

        <section className="py-16 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-stone-100"
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Zdjęcie ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Zobacz
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center px-6 border-t border-stone-100 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#1a1a1a]">
              Zarezerwuj swój pobyt
            </h2>
            <p className="text-stone-500 mb-10">
              Czekamy na Ciebie w sercu Karpacza.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#D4A373] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#c49363] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4A373]/20"
              >
                <FaAirbnb size={18} /> Zarezerwuj teraz
              </Link>
              
              <Link
                href="/oferta"
                className="inline-flex items-center gap-2 px-10 py-3.5 bg-transparent text-stone-500 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all duration-300"
              >
                Sprawdź inne domki
              </Link>
            </div>
          </div>
        </section>

        {modalOpen && (
          <div
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full p-2">
              <FaXmark size={30} />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#D4A373] transition-colors bg-black/20 rounded-full p-2"
              onClick={prevImage}
            >
              <FaChevronLeft size={30} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#D4A373] transition-colors bg-black/20 rounded-full p-2"
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