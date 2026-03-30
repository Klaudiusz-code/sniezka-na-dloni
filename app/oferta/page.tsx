import { FaPhone } from "react-icons/fa6";
import {
  getCabins,
  getOffertData,
  getGlobalSettings,
} from "../helpers/requests"; 
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import CabinShowcase from "@/components/CabinShowcase";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { seo, oferta } = await getOffertData();
  const baseUrl = "https://sniezkanadloni.pl";
  const currentUrl = `${baseUrl}/oferta`;

  return {
    title: seo?.title || `${oferta?.tytul || "Oferta"} | Śnieżka Nad Dłoni`,
    description:
      seo?.description ||
      oferta?.kroktiOpis ||
      "Odkryj nasze luksusowe domki w Kostrzycy k. Karpacza.",
    alternates: { canonical: currentUrl },
    openGraph: {
      title:
        seo?.openGraph?.title ||
        seo?.title ||
        `${oferta?.tytul || "Oferta"} | Śnieżka Nad Dłoni`,
      description:
        seo?.openGraph?.description ||
        seo?.description ||
        oferta?.kroktiOpis ||
        "Dwa domki. Dwa światy.",
      url: currentUrl,
      siteName: seo?.openGraph?.siteName || "Śnieżka Nad Dłoni",
      locale: seo?.openGraph?.locale || "pl_PL",
      type: seo?.openGraph?.type || "website",
    },
  };
}

const page = async () => {
  const { cabins } = await getCabins();
  const { oferta } = await getOffertData();
  const settings = await getGlobalSettings(); 

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

        <CabinShowcase cabins={cabins} />

        <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
          <div className="p-12 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[#171717]">
              Masz pytania?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={settings?.airbnb || "https://airbnb.com"} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#171717] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4A373] transition-colors"
              >
                Sprawdź Terminy
              </a>
              <a
                href={`tel:${settings?.numerTelefonu || "#"}`}
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
};

export default page;
