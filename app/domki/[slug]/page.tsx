import { ReactNode } from "react";
import { notFound } from "next/navigation";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getCabinBySlug } from "../../helpers/requests";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";
import {
  FaFire,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaUtensils,
  FaCar,
  FaTree,
  FaCheck,
  FaBed,
  FaQuoteLeft,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa6";
import { FaHotTub, FaAirbnb } from "react-icons/fa";

interface Props {
  params: { slug: string } | Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = await getCabinBySlug(slug);

  if (!node || !node.domki) return { title: "Domek nie znaleziony" };

  const seo = (node as any).seo;
  const domki = node.domki;

  const fallbackTitle = `${domki.tytul} | Śnieżka Nad Dłoni - Luksusowe Domki`;
  const fallbackDesc =
    domki.krotkiOpisPodNaglowiem ||
    "Zobacz szczegóły naszego luksusowego domku w sercu Karkonoszy.";
  const ogImage =
    seo?.opengraphImage?.sourceUrl || domki.zdjecieGlowne?.node?.sourceUrl;

  return {
    title: seo?.title || fallbackTitle,
    description: seo?.metaDesc || fallbackDesc,
    alternates: {
      canonical: seo?.canonical || `https://sniezkanadloni.pl/domki/${slug}`,
    },
    openGraph: {
      title: seo?.opengraphTitle || seo?.title || fallbackTitle,
      description: seo?.opengraphDescription || seo?.metaDesc || fallbackDesc,
      url: `https://sniezkanadloni.pl/domki/${slug}`,
      siteName: "Śnieżka Nad Dłoni",
      locale: "pl_PL",
      type: "website",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || fallbackTitle,
      description: seo?.twitterDescription || seo?.metaDesc || fallbackDesc,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function CabinPage({ params }: Props) {
  const { slug } = await params;
  const cabinNode = await getCabinBySlug(slug);

  if (!cabinNode || !cabinNode.domki) {
    notFound();
  }

  const { domki } = cabinNode;

  const isDark = slug === "czarny-jastrzab";
  const airbnbLink = domki.przycisk?.linkAirbnb || "https://airbnb.com";

  const theme = {
    main: isDark ? "bg-[#111111] text-white" : "bg-white text-[#1a1a1a]",
    sectionSpec: isDark
      ? "border-stone-800 bg-stone-900/50"
      : "border-stone-100 bg-stone-50/50",
    sectionAmen: isDark
      ? "border-stone-800 bg-[#111111]"
      : "border-stone-100 bg-stone-50",
    cardBg: isDark
      ? "bg-[#1a1a1a] border-stone-800"
      : "bg-white border-stone-100",
    cardBgHover: isDark
      ? "bg-[#1a1a1a] border-stone-700"
      : "bg-white border-stone-200",
    textMuted: isDark ? "text-stone-400" : "text-stone-500",
    textSub: isDark ? "text-stone-500" : "text-stone-400",
    badgeBg: isDark
      ? "bg-stone-800 text-stone-300"
      : "bg-stone-100 text-stone-600",
    titleAccent: isDark ? "text-stone-600" : "text-stone-300",
    priceCard: isDark
      ? "bg-black/80 border-stone-700 text-white"
      : "bg-white/95 border-stone-100 text-[#1a1a1a]",
    priceText: isDark ? "text-stone-400" : "text-stone-400",
    ctaBorder: isDark
      ? "border-stone-800 bg-[#111111]"
      : "border-stone-100 bg-white",
    ctaSecondary: isDark
      ? "text-stone-400 border-stone-700 hover:border-white hover:text-white"
      : "text-stone-500 border-stone-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a]",
  };

  const galleryImages =
    domki.galeria?.nodes
      ?.map((node: any) => node.sourceUrl)
      .filter((url: string | undefined): url is string => Boolean(url)) || [];

  const udogodnieniaIcons: { [key: string]: ReactNode } = {
    Klimatyzacja: <FaSnowflake />,
    "Ogrzewanie podłogowe": <FaFire />,
    TV: <FaTv />,
    "TV + Netflix": <FaTv />,
    "Szybkie Wi-Fi": <FaWifi />,
    "Wi-Fi": <FaWifi />,
    "Pełne wyposażenie": <FaUtensils />,
    Jacuzzi: <FaHotTub />,
    "Jacuzzi zewnętrzne": <FaHotTub />,
    "Strefa Grilla": <FaTree />,
    "Parking prywatny": <FaCar />,
    Parking: <FaCar />,
  };

  const titleParts = domki.tytul?.split(" ") || ["", ""];
  const firstWord = titleParts[0];
  const restWords = titleParts.slice(1).join(" ");

  return (
    <>
      <Menu />
      <main
        className={`font-sans min-h-screen selection:bg-[#D4A373] selection:text-white ${theme.main}`}
      >
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              {domki.logoDomku?.node?.sourceUrl && (
                <div className="w-40 h-40 bg-[#D4A373] flex items-center justify-center rounded-lg mb-8">
                  <div className="w-full h-full relative p-8">
                    <Image
                      src={domki.logoDomku.node.sourceUrl}
                      alt={domki.tytul + " logo"}
                      fill
                      className="object-contain opacity-90"
                    />
                  </div>
                </div>
              )}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 ${theme.badgeBg}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${domki.czyDostepny ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                ></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {domki.czyDostepny ? "Dostępny" : "Zajęty"}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] mb-2">
                {firstWord}
                {restWords && (
                  <>
                    <br />
                    <span className={`italic font-normal ${theme.titleAccent}`}>
                      {restWords}
                    </span>
                  </>
                )}
              </h1>
              {domki.okres && (
                <span className="text-[#D4A373] text-[10px] font-bold tracking-[0.35em] uppercase mb-5 block">
                  {domki.okres}
                </span>
              )}
              <p
                className={`text-lg leading-relaxed mb-6 max-w-md font-light ${theme.textMuted}`}
              >
                {domki.krotkiOpisPodNaglowkiem}
              </p>
              <div
                className={`flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-widest ${theme.textSub}`}
              >
                {domki.metraz && <span>{domki.metraz} m²</span>}
                {domki.metraz && domki.liczbaGosci && <span>•</span>}
                {domki.liczbaGosci && <span>{domki.liczbaGosci} gości</span>}
              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div
                className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border group ${isDark ? "shadow-stone-900/50 border-stone-800" : "shadow-stone-200/50 border-stone-100"}`}
              >
                {domki.zdjecieGlowne?.node?.sourceUrl && (
                  <Image
                    src={domki.zdjecieGlowne.node.sourceUrl}
                    alt={domki.tytul}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {domki.cena && (
                  <div
                    className={`absolute bottom-6 left-6 right-6 backdrop-blur-md border rounded-2xl p-4 flex justify-between items-center shadow-lg ${theme.priceCard}`}
                  >
                    <div>
                      <p
                        className={`text-[9px] uppercase tracking-widest font-bold ${theme.priceText}`}
                      >
                        Cena
                      </p>
                      <p
                        className={`text-2xl font-serif ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                      >
                      Od  {domki.cena} zł
                      </p>
                    </div>
                    <span className={`text-sm ${theme.priceText}`}>/noc</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {domki.domekStruktura?.length > 0 && (
          <section className={`py-8 border-t ${theme.sectionSpec}`}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {domki.domekStruktura.map((s: any, idx: number) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center ${theme.cardBg}`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${theme.textSub}`}
                    >
                      {s.tytul}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {domki.domekUdogodnienia?.length > 0 && (
          <section className={`py-12 border-t ${theme.sectionAmen}`}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-serif ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                >
                  Udogodnienia
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {domki.domekUdogodnienia.map((u: any, idx: number) => (
                  <div
                    key={idx}
                    className={`border rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-center hover:border-[#D4A373] hover:shadow-md hover:shadow-[#D4A373]/10 transition-all duration-300 group cursor-default ${theme.cardBgHover}`}
                  >
                    <div
                      className={`text-xl transition-colors ${isDark ? "text-stone-600 group-hover:text-[#D4A373]" : "text-stone-300 group-hover:text-[#D4A373]"}`}
                    >
                      {udogodnieniaIcons[u.udogodnienie] || <FaCheck />}
                    </div>
                    <span
                      className={`text-xs font-medium transition-colors ${isDark ? "text-stone-400 group-hover:text-white" : "text-stone-600 group-hover:text-[#1a1a1a]"}`}
                    >
                      {u.udogodnienie}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {domki.domekOpiniaTresc && (
          <section className="py-16 max-w-4xl mx-auto px-6 text-center">
            <div className="relative">
              <FaQuoteLeft
                className={`text-6xl absolute -top-8 -left-4 ${isDark ? "text-[#D4A373]/20" : "text-[#D4A373]/10"}`}
              />
              <div className="flex justify-center gap-1 mb-4 text-[#D4A373]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>
              <p
                className={`text-lg md:text-xl font-serif font-light leading-relaxed italic mb-6 ${isDark ? "text-stone-300" : "text-stone-700"}`}
              >
                &ldquo;{domki.domekOpiniaTresc}&rdquo;
              </p>
            </div>
          </section>
        )}

        <Gallery images={galleryImages} isDark={isDark} />

        <section
          className={`py-20 text-center px-6 border-t ${theme.ctaBorder}`}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-serif mb-6 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
            >
              Zainteresowany?
            </h2>
            <p className={`${theme.textMuted} mb-4`}>
              Czekamy na Ciebie w sercu Karkonoszy.
            </p>
            <p className={`text-sm mb-10 ${theme.textSub}`}>
              Rezerwując przez naszą stronę otrzymasz najlepszą ofertę cenową.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#D4A373] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#c49363] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4A373]/20"
              >
                <FaAirbnb size={18} /> Zarezerwuj
              </Link>
              <Link
                href="/oferta"
                className={`inline-flex items-center gap-3 px-10 py-3.5 bg-transparent text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-300 ${theme.ctaSecondary}`}
              >
                <FaArrowLeft size={14} /> Wszystkie domki
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
