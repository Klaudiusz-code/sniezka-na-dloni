"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// Zdefiniowanie typów zamiast "any"
interface Opinia {
  imie?: string;
  trescOpinii?: string;
  [key: string]: any; // Jeśli masz inne pola, zostaną tu obsłużone
}

interface OpiniaKartaProps {
  rev: Opinia;
}

function OpiniaKarta({ rev }: OpiniaKartaProps) {
  const [isRozwiniete, setIsRozwiniete] = useState(false);
  const [czyDlugie, setCzyDlugie] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      setCzyDlugie(element.scrollHeight > 96);
    }
  }, [rev?.trescOpinii]); 

  const dynamicMaxHeight = isRozwiniete
    ? `${contentRef.current?.scrollHeight}px`
    : "6rem";

  return (
    <div className="bg-stone-50 p-10 rounded-3xl relative hover:bg-stone-100 transition-colors flex flex-col h-full overflow-hidden">
      <FaQuoteLeft className="text-stone-300 text-4xl mb-6 shrink-0" />

      <div className="relative mb-4 flex-1">
        <div
          ref={contentRef}
          style={{ maxHeight: dynamicMaxHeight }}
          className="text-stone-700 font-light leading-relaxed italic text-lg 
                     [&_p]:mb-2 [&_p]:last:mb-0 
                     overflow-hidden transition-[max-height] duration-500 ease-in-out"
          dangerouslySetInnerHTML={{ __html: rev?.trescOpinii || "" }}
        />

        {!isRozwiniete && czyDlugie && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-stone-50 to-transparent pointer-events-none" />
        )}
      </div>

      {czyDlugie && (
        <button
          onClick={() => setIsRozwiniete((prev) => !prev)}
          className="text-sm text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1 mb-6 cursor-pointer self-start z-10"
        >
          {isRozwiniete ? (
            <>
              <FaChevronUp className="text-xs" /> Zwiń
            </>
          ) : (
            <>
              <FaChevronDown className="text-xs" /> Czytaj więcej
            </>
          )}
        </button>
      )}

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-stone-200 shrink-0">
        <div>
          <p className="font-bold text-stone-900">{rev?.imie}</p>
        </div>

        <div className="flex text-amber-500 text-xs gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TestimonialsProps {
  data: Opinia[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  if (!data || data.length === 0) return null;

  return (
    <section id="opinie" className="py-24 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h3 className="text-3xl font-serif text-center text-stone-800 mb-16">
          Opinie Gości
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((rev, i) => (
            <OpiniaKarta key={rev.imie || i} rev={rev} />
          ))}
        </div>
      </div>
    </section>
  );
}
