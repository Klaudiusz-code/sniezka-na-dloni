import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaHotTub,
  FaSleigh,
  FaFire,
  FaMountain,
} from "react-icons/fa";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Head from "next/head";

async function getAboutData() {
  const res = await fetch("http://localhost/sniezka/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query AboutPage {
          pageBy(uri: "/o-nas/") {
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
            oNas {
              tytulObokZdjecia
              opis
              doswiadczenie {
                aboutExperienceTitle
                aboutExperienceDesc
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.pageBy;
}

export default async function AboutPage() {
  const pageData = await getAboutData();
  const seo = pageData?.seo;
  const oNas = pageData?.oNas || {
    tytulObokZdjecia: "",
    opis: "",
    doswiadczenie: [],
  };

  return (
    <>
      <Head>
        <title>{seo?.title || "O Nas – Śnieżka na dłoni"}</title>
        <meta
          name="description"
          content={
            seo?.description || "Dwa luksusowe domki – poznaj naszą historię"
          }
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

      <main className="bg-[#FAF9F6] text-[#171717] font-sans min-h-screen selection:bg-[#D4A373] selection:text-white">
        <section className="h-[60vh] w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A373] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 text-center px-6">
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs mb-6">
              Wynajem • Kostrzyca/Karpacz
            </p>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-6">
              O Nas
            </h1>
            <p className="text-stone-400 text-lg font-light">
              Dwa luksusowe domki. Jedna historia.
            </p>
          </div>
        </section>

        <section className="py-32 border-y border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
              <div className="w-full lg:w-5/12 aspect-[4/5] rounded-[2.5rem] relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#f0f0f0] group-hover:scale-105 transition-transform duration-1000"></div>
                <div className="absolute -bottom-20 -left-20 w-[150%] h-[80%] bg-gradient-to-r from-white to-transparent rounded-t-full blur-xl opacity-80"></div>
                <div className="absolute inset-0 flex items-end p-10 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaMountain className="text-white/80 text-3xl mb-2" />
                    <p className="font-serif text-3xl text-white">
                      Widok na Śnieżkę
                    </p>
                    <p className="text-stone-200 text-sm mt-1">
                      Na wyciągnięcie ręki
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-6/12">
                <div className="mb-8">
                  <span className="text-[#D4A373] font-bold tracking-widest text-xs uppercase">
                    Lokalizacja
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif mt-2 mb-6">
                    {oNas?.tytulObokZdjecia}
                  </h3>
                </div>

                <p className="text-stone-600 text-xl leading-relaxed mb-8 font-light">
                  {oNas?.opis}
                </p>

                <div className="flex items-center gap-4 px-6 py-4 bg-stone-50 rounded-xl border border-stone-100 w-fit">
                  <FaMapMarkerAlt className="text-[#D4A373] text-xl" />
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">
                      Odległość do centrum
                    </p>
                    <p className="text-sm font-bold text-[#171717]">
                      5 min samochodem (Karpacz)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-[#FAF9F6]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center">
              <h3 className="text-3xl font-serif mb-4">Doświadczenie</h3>
              <p className="text-stone-500">
                Detale, które tworzą wspomnienia.
              </p>
            </div>

            <div className="space-y-32">
              {oNas?.doswiadczenie?.map((exp: any, i: any) => (
                <div key={i} className="group relative">
                  <div className="flex items-start gap-10 md:gap-16">
                    <div
                      className={`hidden md:flex flex-col items-center gap-2`}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-[#D4A373] group-hover:text-[#D4A373] transition-all duration-500">
                        {i === 0 && (
                          <FaHotTub
                            size={32}
                            className="text-stone-400 transition-colors"
                          />
                        )}
                        {i === 1 && (
                          <FaSleigh
                            size={32}
                            className="text-stone-400 transition-colors"
                          />
                        )}
                        {i === 2 && (
                          <FaFire
                            size={32}
                            className="text-stone-400 transition-colors"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 md:pt-2">
                      <h4 className="text-3xl font-serif mb-4 text-[#171717]">
                        {exp.aboutExperienceTitle}
                      </h4>
                      <p className="text-stone-500 text-lg leading-relaxed">
                        {exp.aboutExperienceDesc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent group-hover:via-[#D4A373]/50 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#171717] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4A373] rounded-full blur-[120px] opacity-20"></div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
              Poczuj klimat <br />{" "}
              <span className="text-[#D4A373]">Śnieżki</span>
            </h2>
            <p className="text-stone-400 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Mamy tylko dwa domki. To gwarancja, że nie będziesz się tłoczyć z
              innymi turystami. Tylko Ty, Twoi bliscy i góry.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/oferta"
                className="px-12 py-5 bg-[#D4A373] text-[#171717] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 shadow-[0_10px_30px_rgba(212,163,115,0.3)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transform"
              >
                Wybierz domek
              </Link>
              <a
                href="tel:570430338"
                className="px-12 py-5 bg-transparent text-white border border-white/20 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-[#171717] transition-colors duration-300"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
