"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

interface GalleryProps {
  images: string[];
  isDark: boolean;
}

export default function Gallery({ images, isDark }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight")
        setCurrent((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrent(
          (prev) => (prev - 1 + images.length) % images.length
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <section
        className={`py-16 max-w-7xl mx-auto px-6 ${
          isDark ? "border-t border-stone-800" : "border-t border-stone-100"
        }`}
      >
        <h2
          className={`text-2xl font-serif text-center mb-10 ${
            isDark ? "text-white" : "text-[#1a1a1a]"
          }`}
        >
          Galeria
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: isDark ? "#292524" : "#f5f5f4",
              }}
              onClick={() => {
                setCurrent(index);
                setIsOpen(true);
              }}
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

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-stone-800 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-3 sm:p-4 bg-[#1a1a1a] z-10 absolute top-0 right-0 w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200"
                aria-label="Zamknij"
              >
                <FaXmark size={24} />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center bg-black min-h-[300px] p-4 sm:p-12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(
                    (prev) => (prev - 1 + images.length) % images.length
                  );
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#D4A373] bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-20"
              >
                <FaChevronLeft size={20} />
              </button>

              <Image
                src={images[current]}
                alt="Podgląd"
                width={1200}
                height={900}
                className="max-h-[75vh] w-auto object-contain rounded shadow-lg"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#D4A373] bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-20"
              >
                <FaChevronRight size={20} />
              </button>
            </div>

            <div className="p-3 bg-[#1a1a1a] text-center border-t border-stone-800">
              <p className="text-stone-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                {current + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}