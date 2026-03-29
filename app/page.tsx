import AmenitiesGrid from "@/components/AmenitiesGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import LocationBox from "@/components/LocationBox";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import CabinShowcase from "@/components/CabinShowcase";
import Statue from "@/components/Statue";

export async function generateMetadata() {
  const res = await fetch("http://localhost/sniezka/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query SEO {
          page(id: "cG9zdDoxMQ") {
            seo {
              title
              description
              openGraph {
                title
                description
                siteName
                locale
                type
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  const seo = json?.data?.page?.seo;

  const title =
    seo?.title || "Domki w Karkonoszach – noclegi z widokiem na góry";
  const description =
    seo?.description ||
    "Nowoczesne domki w Karkonoszach. Komfortowe noclegi, piękne widoki i idealna lokalizacja na wypoczynek.";

  return {
    title,
    description,
    metadataBase: new URL("https://twojadomena.pl"),
    alternates: { canonical: "/" },
    openGraph: {
      title: seo?.openGraph?.title || title,
      description: seo?.openGraph?.description || description,
      siteName: seo?.openGraph?.siteName || "Domki Karkonosze",
      locale: seo?.openGraph?.locale || "pl_PL",
      type: seo?.openGraph?.type || "website",
      url: "/",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

const page = async () => {
  // Fetch główne dane strony
  const res = await fetch("http://localhost/sniezka/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query HomePage {
          page(id: "cG9zdDoxMQ") {
            stronaGlowna {
              sekcjaHero {
                heroBadgeTitle
                heroBadgeSubtitle   
                heroTitleMain
                heroTitleAccent
                heroDescription
                heroFeatures {
                  nazwa
                  opis
                }
                heroCta {
                  primarryButton
                  primaryLink
                  secondaryPhone
                  secondaryText
                }
              }
              introSection {
                lokalizacja
                title
                content
                przycisk {
                  buttonText
                  linkPrzycisku
                }
              }
              coNasWyroznia {
                amenitiesGrid {
                  tytulCechy
                  podtytul
                  featureImage {
                    node {
                      uri
                    }
                  }
                  featureItems {
                    tekstPunktu
                  }
                }
              }
              testimonials {
                trescOpinii
                imie
                data
              }
              zasadyPobytu {
                stayRules
                sectionSubtitle
                notes
              }
              lokalizacja {
                sectionTitle
                sectionSubtitle
                przyciski {
                  buttonEmail {
                    emailAdress
                  }
                  phoneButton {
                    phoneNumber
                  }
                  mapa
                }
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  const hero = json?.data?.page?.stronaGlowna?.sekcjaHero;
  const intro = json?.data?.page?.stronaGlowna?.introSection;
  const features = json?.data?.page?.stronaGlowna?.coNasWyroznia?.amenitiesGrid;
  const testimonials = json?.data?.page?.stronaGlowna?.testimonials;
  const statues = json?.data?.page?.stronaGlowna?.zasadyPobytu;
  const location = json?.data?.page?.stronaGlowna?.lokalizacja;

  // Fetch domki
  const cabinsRes = await fetch("http://localhost/sniezka/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Domki {
          domki {
            edges {
              node {
                domki {
                  tytul
                  czyDostepny
                  logoDomku {
                    node {
                      sourceUrl
                    }
                  }
                  zdjecieGlowne {
                    node {
                      sourceUrl
                    }
                  }
                  cena
                  okres
                  liczbaGosci
                  liczbaSypialni
                  metraz
                  domekWyrozniki {
                    wyroznik
                  }
                  krotkiOpisPodNaglowkiem
                  domekStruktura {
                    tytul
                  }
                  domekUdogodnienia {
                    udogodnienie
                  }
                  domekOpiniaTresc
                  galeriaZdjec {
                    galleryImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const cabinsJson = await cabinsRes.json();
  const cabins = cabinsJson?.data?.domki?.edges || [];

  return (
    <div className="bg-white text-[#171717] font-sans antialiased">
      <TopBar />
      <Menu />

      <Hero data={hero} />

      <CabinShowcase cabins={cabins} />

      <IntroStatement data={intro} />
      <AmenitiesGrid data={features} />

      <Testimonials data={testimonials} />
      <Statue data={statues} />

      <LocationBox data={location} />

      <Footer />
    </div>
  );
};

export default page;
