import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { LiaArrowRightSolid } from "react-icons/lia";
import Head from "next/head";

async function getOkolicaData() {
  const res = await fetch("http://localhost/sniezka/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query OkolicaPage {
          page(id: "cG9zdDoxOQ") {
            seo {
              title
              description
              openGraph {
                title
                description
                siteName
                locale
                type
                updatedTime
              }
            }
            okolica {
              attractionsSection {
                title
                opisAtrakcji
                time
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page; 
}

export default async function Okolica() {
  const pageData = await getOkolicaData();
  const seo = pageData?.seo;
  const attractions = pageData?.okolica?.attractionsSection || [];

  return (
    <>
      <Head>
        <title>{seo?.title || "Okolica – Śnieżka na dłoni"}</title>
        <meta
          name="description"
          content={seo?.description || "Atrakcje w okolicy naszych domków"}
        />
        <meta
          property="og:title"
          content={seo?.openGraph?.title || seo?.title}
        />
        <meta
          property="og:description"
          content={seo?.openGraph?.description || seo?.description}
        />
        <meta
          property="og:site_name"
          content={seo?.openGraph?.siteName || "Śnieżka na dłoni"}
        />
        <meta
          property="og:locale"
          content={seo?.openGraph?.locale || "PL_PL"}
        />
        <meta property="og:type" content={seo?.openGraph?.type || "article"} />
      </Head>

      <Menu />
      <main className="bg-[#050505] text-white font-sans min-h-screen selection:bg-[#D4A373] selection:text-black">
        <section className="pt-32 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs">
                Okolica
              </span>
              <div className="h-[1px] w-12 bg-white/20"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-[1.05] mb-8">
              Co robić <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-500">
                w okolicy?
              </span>
            </h2>

            <p className="text-stone-400 font-light leading-relaxed text-lg max-w-2xl mx-auto">
              Sprawdź naszą listę atrakcji. Wszystko jest blisko.
            </p>
          </div>
        </section>

        <section className="pb-32 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              {attractions.length > 0 ? (
                attractions.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="group py-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300 cursor-default"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-6">
                        <span className="text-[#D4A373]/20 font-serif text-2xl leading-none pt-2 select-none w-8 text-center">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#D4A373] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">
                            {item.opisAtrakcji}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 pl-14 md:pl-0 min-w-[140px] md:text-right">
                        <div className="flex flex-col md:items-end">
                          <span className="text-[10px] uppercase tracking-widest text-stone-600 mb-1">
                            Dojazd
                          </span>
                          <span className="text-stone-300 font-medium">
                            {item.time}
                          </span>
                        </div>

                        <div className="text-stone-700 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all duration-300">
                          <LiaArrowRightSolid size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-stone-400 py-12">
                  Brak dostępnych atrakcji w tej chwili.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-3">
              <h2 className="text-3xl font-serif text-white">
                Gotowy na przygodę?
              </h2>
              <p className="text-stone-500 text-base tracking-wide">
                Rezerwuj domek i zobacz Karkonosze na własne oczy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="tel:570430338"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Zadzwoń do nas
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kostrzyca+ul+Karpacka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A373] text-[#050505] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4A373]/20"
              >
                Wyznacz trasę
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
