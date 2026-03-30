import Link from "next/link";
import { FaPhone, FaMapPin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { getKontaktData, getGlobalSettings } from "../helpers/requests";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getKontaktData();

  return {
    title: seo?.title || "Kontakt – Śnieżka na dłoni",
    description: seo?.description || "Skontaktuj się z nami",
    openGraph: {
      title: seo?.openGraph?.title || seo?.title,
      description: seo?.openGraph?.description || seo?.description,
      siteName: seo?.openGraph?.siteName || "Śnieżka na dłoni",
      locale: seo?.openGraph?.locale || "pl_PL",
      type: seo?.openGraph?.type || "article",
    },
  };
}

export default async function KontaktPage() {
  const { kontakt } = await getKontaktData();
  const settings = await getGlobalSettings();

  return (
    <>
      <Menu />
      <main className="bg-[#FDFCF8] text-[#2C2825] font-sans min-h-screen selection:bg-[#D4A373] selection:text-black">
        <section className="h-[40vh] sm:h-[50vh] md:h-[55vh] w-full flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1200px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6">
              Lokalizacja
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#2C2825] leading-none mb-4 md:mb-6">
              {kontakt?.tytul}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#2C2825]/60 max-w-md mx-auto">
              {kontakt?.opis}
            </p>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-5 sm:px-6 py-6 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-12 md:h-[70vh]">
            <div className="hidden md:flex md:col-span-5 flex-col justify-between md:border-r border-[#E5E2D8] md:pr-12">
              <div>
                <h2 className="text-4xl font-serif text-[#2C2825] mb-12">
                  Kontakt
                </h2>
                <p className="text-base text-[#2C2825]/60">
                  Masz pytania? <br />
                  Zadzwoń lub napisz.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373]">
                    <FaPhone />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2C2825]/40">
                    Telefon
                  </p>
                </div>
                <a
                  href={`tel:${settings?.numerTelefonu}`}
                  className="group-hover:text-[#D4A373] transition-colors inline-block"
                >
                  <span className="text-5xl lg:text-6xl font-bold text-[#2C2825] tracking-tight leading-tight">
                    {settings?.numerTelefonu || "+48 000 000 000"}
                  </span>
                </a>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#2C2825]/5 flex items-center justify-center">
                    <FaEnvelope className="text-[#2C2825]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2C2825]/40">
                    Email
                  </p>
                </div>
                <a
                  href={`mailto:${settings?.email}`}
                  className="group-hover:text-[#D4A373] transition-colors inline-block"
                >
                  <span className="text-2xl font-bold text-[#2C2825]">
                    {settings?.email || "brak@email.pl"}
                  </span>
                </a>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#2C2825]/5 flex items-center justify-center">
                    <FaMapPin className="text-[#2C2825]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2C2825]/40">
                    Adres
                  </p>
                </div>
                <div className="border-l-4 border-[#D4A373] pl-6">
                  <p className="text-2xl font-bold text-[#2C2825] whitespace-pre-line">
                    {settings?.adresFizyczny ||
                      "ul. Karpacka 103 C\n58-532 Kostrzyca, Karpacz"}
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  href={settings?.linkDoGoogleMaps || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#2C2825] border-b border-[#2C2825] hover:border-[#D4A373] pb-1 transition-colors"
                >
                  Otwórz w Google Maps <FaArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="hidden md:block md:col-span-7 h-full relative bg-[#E5E2D8] overflow-hidden border border-[#D4D3CD] rounded-sm">
              <a
                href={settings?.linkDoGoogleMaps || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-[#2C2825]/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center p-6">
                  <div className="relative mb-8 group cursor-pointer">
                    <div className="w-20 h-20 bg-[#D4A373] rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                      <FaMapPin size={32} />
                    </div>
                    <div className="absolute bottom-0 w-4 h-4 bg-[#2C2825]/20 rounded-full blur-[4px]"></div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/50">
                    <h3 className="text-4xl font-serif text-[#2C2825] mb-2">
                      Śnieżka na Dłoni
                    </h3>
                    <p className="text-lg text-[#2C2825]/70 mb-6">
                      Całoroczne domki widokowe
                    </p>
                    <div className="flex items-center justify-center gap-3 text-[#2C2825]">
                      <div className="w-10 h-[1px] bg-[#2C2825]/20"></div>
                      <span className="text-xl font-bold whitespace-pre-line text-center">
                        {settings?.adresFizyczny ||
                          "ul. Karpacka 103 C\n58-532 Kostrzyca"}
                      </span>
                      <div className="w-10 h-[1px] bg-[#2C2825]/20"></div>
                    </div>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2C2825] hover:text-[#D4A373] transition-colors">
                    Wyznacz trasę <FaArrowRight size={12} />
                  </span>
                </div>
              </a>
            </div>

            <div className="md:hidden relative h-[85vh] rounded-xl overflow-hidden shadow-2xl border border-[#E5E2D8]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-[#2C2825]/20"></div>

              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-[#D4A373] rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                  <FaMapPin size={28} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/95 to-transparent pt-16 pb-6 px-5 rounded-t-3xl">
                <div className="space-y-3">
                  <a
                    href={`tel:${settings?.numerTelefonu}`}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-black/5 active:scale-[0.98] transition-transform"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] shrink-0">
                      <FaPhone size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C2825]/40 mb-0.5">
                        Zadzwoń
                      </p>
                      <p className="text-lg font-bold text-[#2C2825] truncate">
                        {settings?.numerTelefonu || "+48 000 000 000"}
                      </p>
                    </div>
                  </a>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 space-y-3">
                    <a
                      href={`mailto:${settings?.email}`}
                      className="flex items-center gap-4 active:scale-[0.98] transition-transform"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#2C2825]/5 flex items-center justify-center shrink-0">
                        <FaEnvelope size={16} className="text-[#2C2825]/70" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C2825]/40 mb-0.5">
                          Napisz
                        </p>
                        <p className="text-sm font-semibold text-[#2C2825] truncate">
                          {settings?.email || "brak@email.pl"}
                        </p>
                      </div>
                    </a>

                    <div className="border-t border-dashed border-[#E5E2D8]"></div>

                    <div className="flex items-start gap-4 pl-1">
                      <div className="w-11 h-11 rounded-full bg-[#2C2825]/5 flex items-center justify-center shrink-0 -ml-0.5">
                        <FaMapPin size={16} className="text-[#2C2825]/70" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C2825]/40 mb-0.5">
                          Adres
                        </p>
                        <p className="text-sm font-semibold text-[#2C2825] whitespace-pre-line leading-snug">
                          {settings?.adresFizyczny ||
                            "ul. Karpacka 103 C\n58-532 Kostrzyca, Karpacz"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={settings?.linkDoGoogleMaps || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#2C2825] text-[#FDFCF8] text-xs font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#3d3835] active:scale-[0.98] transition-all shadow-lg"
                  >
                    Wyznacz trasę w maps <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
