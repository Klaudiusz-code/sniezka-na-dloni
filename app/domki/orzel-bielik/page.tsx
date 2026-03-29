"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
    "/bielik-gallery/1.jpeg",
    "/bielik-gallery/2.jpeg",
    "/bielik-gallery/3.jpeg",
    "/bielik-gallery/4.jpeg",
    "/bielik-gallery/5.jpeg",
    "/bielik-gallery/6.jpeg",
    "/bielik-gallery/7.jpeg",
    "/bielik-gallery/8.jpeg",
    "/bielik-gallery/9.jpeg",
    "/bielik-gallery/10.jpeg",
    "/bielik-gallery/11.jpeg",
    "/bielik-gallery/13.jpeg",
    "/bielik-gallery/14.jpeg",
    "/bielik-gallery/15.jpeg",
    "/bielik-gallery/16.jpeg",
    "/bielik-gallery/17.jpeg",
    "/bielik-gallery/18.jpeg",
    "/bielik-gallery/19.jpeg",
    "/bielik-gallery/20.jpeg",
    "/bielik-gallery/21.jpeg",
    "/bielik-gallery/22.jpeg",
    "/bielik-gallery/23.jpeg",
    "/bielik-gallery/24.jpeg",
    "/bielik-gallery/25.jpeg",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Obsługa zamykania klawiszem Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
        {/* --- HERO --- */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* LEWA: LOGO I TEKST */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
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
                Kostrzyca/Karpacz{" "}
              </span>

              <p className="text-stone-500 text-lg leading-relaxed mb-6 max-w-md font-light">
                {pageData.description}
              </p>

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
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-stone-100 text-center"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    {spec}
                  </span>
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

        {/* --- GALERIA: ULEPSZONA (MASONRY) --- */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-center mb-10 text-[#1a1a1a]">
            Galeria
          </h2>

          {/* Układ kolumnowy (Masonry) - ładnie układa zdjęcia różnej wielkości */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-stone-100"
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Zdjęcie ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
              Zainteresowany?
            </h2>

            <p className="text-stone-500 mb-4">
              Czekamy na Ciebie w sercu Karkonoszy.
            </p>

            <p className="text-sm text-stone-400 mb-10">
              Rezerwując przez naszą stronę otrzymasz najlepszą ofertę cenową.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#D4A373] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#c49363] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4A373]/20"
              >
                <FaAirbnb size={18} /> Airbnb
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-transparent text-stone-500 text-xs font-bold uppercase tracking-widest rounded-full border border-stone-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all duration-300"
              >
                <FaFacebook size={18} /> Facebook
              </Link>
            </div>
          </div>
        </section>

        {/* --- MODAL: ZAMYKANY, ŁADNY, MAŁY --- */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setModalOpen(false)}
          >
            {/* Główny kontener modala - "małe okno" na desktopie */}
            <div
              className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-stone-800 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* PASEK GÓRNY: ZAMYKANIE */}
              <div className="flex justify-end p-3 sm:p-4 bg-[#1a1a1a] z-10 absolute top-0 right-0 w-full">
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-stone-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200"
                  aria-label="Zamknij"
                >
                  <FaXmark size={24} />
                </button>
              </div>
              {/* OBSZAR ZDJĘCIA */}
              <div className="relative flex-1 flex items-center justify-center bg-black min-h-[300px] p-4 sm:p-12">
                {/* Strzałka Lewa */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#D4A373] bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-20"
                >
                  <FaChevronLeft size={20} />
                </button>

                {/* Zdjęcie */}
                <Image
                  src={galleryImages[currentImageIndex]}
                  alt="Full Screen"
                  width={1200}
                  height={900}
                  className="max-h-[75vh] w-auto object-contain rounded shadow-lg"
                />

                {/* Strzałka Prawa */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#D4A373] bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-20"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
              /* STOPKA: LICZNIK */
              <div className="p-3 bg-[#1a1a1a] text-center border-t border-stone-800">
                <p className="text-stone-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
