const REVALIDATE_TIME = 60;
const GQL_API_URL = "http://sniezkanadloni.pl/graphql";

export const getHomePageData = async () => {
  const res = await fetch(GQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query HomePage {
          page(id: "cG9zdDoxMQ") {
            stronaGlowna {
              sekcjaHero { heroBadgeTitle heroBadgeSubtitle heroTitleMain heroTitleAccent heroDescription heroFeatures { nazwa opis } heroCta { primarryButton primaryLink secondaryPhone secondaryText } }
              introSection { lokalizacja title content przycisk { buttonText linkPrzycisku } }
              coNasWyroznia { amenitiesGrid { tytulCechy podtytul featureImage { node { sourceUrl } } featureItems { tekstPunktu } } }
              testimonials { trescOpinii imie data }
              zasadyPobytu { stayRules sectionSubtitle notes }
              lokalizacja { sectionTitle sectionSubtitle przyciski { buttonEmail { emailAdress } phoneButton { phoneNumber } mapa } }
            }
          }
        }
      `,
    }),
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();

  const hero = json?.data?.page?.stronaGlowna?.sekcjaHero;
  const intro = json?.data?.page?.stronaGlowna?.introSection;
  const features = json?.data?.page?.stronaGlowna?.coNasWyroznia?.amenitiesGrid;
  const testimonials = json?.data?.page?.stronaGlowna?.testimonials;
  const statues = json?.data?.page?.stronaGlowna?.zasadyPobytu;
  const location = json?.data?.page?.stronaGlowna?.lokalizacja;

  return { hero, intro, features, testimonials, statues, location };
};

export const getCabins = async () => {
  const cabinsRes = await fetch(GQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
       query Domki {
        domki {
          edges {
            node {
              slug
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
                galeria {
                  nodes {
                    sourceUrl
                  }
                }
                przycisk {
                  linkAirbnb
                }
              }
            }
          }
        }
      }
      `,
    }),
    next: { revalidate: REVALIDATE_TIME },
  });

  const cabinsJson = await cabinsRes.json();
  const cabins = cabinsJson?.data?.domki?.edges || [];
  return { cabins };
};

export const getCabinBySlug = async (slug: string) => {
  if (!slug) return null;

  const res = await fetch(GQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Domki {
  domki{
    edges{
      node{
        slug
        seo{
          title
          description
          openGraph{
            title
            description
            url
          }
          canonicalUrl
        }
        domki{
          tytul
          
          czyDostepny
          logoDomku{
            node{
              sourceUrl
            }
          }
          zdjecieGlowne{
            node{
              sourceUrl
            }
          }
          cena
          okres
          liczbaGosci
          liczbaSypialni
          metraz
        	domekWyrozniki{
            wyroznik
          }
          krotkiOpisPodNaglowkiem
          domekStruktura{
            tytul
          }
          domekUdogodnienia{
            udogodnienie
          }
          domekOpiniaTresc
            galeria {
                nodes {
                sourceUrl
               }
            }
          przycisk{
            linkAirbnb
          }
        }
      }
    }
  }
}
      `,
    }),
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();
  const node = json?.data?.domki?.edges.find(
    (e: any) => e.node.slug === slug,
  )?.node;

  if (!node) return null;
  return node;
};

export const getGlobalSettings = async () => {
  const res = await fetch(GQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GlobalSettings {
          ustawieniaGlobalne {
            nodes {
              ustawieniaGlobalne {
                logoStrony {
                  node {
                    sourceUrl
                  }
                }
                numerTelefonu
                email
                adresFizyczny
                facebook
                instagram
                linkDoGoogleMaps
                airbnb
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();

  return json?.data?.ustawieniaGlobalne?.nodes?.[0]?.ustawieniaGlobalne || null;
};

export const getAboutData = async () => {
  const res = await fetch(GQL_API_URL, {
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
              }
            }
            oNas {
              aboutImage{
              	node{
                  sourceUrl
                }
              }
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
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();
  return {
    seo: json?.data?.pageBy?.seo,
    oNas: json?.data?.pageBy?.oNas,
  };
};

export const getOffertData = async () => {
  const res = await fetch(GQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Offert {
          page(id: "cG9zdDoxNg") {
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
            oferta {
              tytul
              kroktiOpis
            }
          }
        }
      `,
    }),
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();
  return {
    seo: json?.data?.page?.seo,
    oferta: json?.data?.page?.oferta,
  };
};

export const getKontaktData = async () => {
  const res = await fetch(GQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Contact {
          page(id: "cG9zdDoyMQ") {
            seo {
              title
              description
              openGraph {
                description
                locale
                siteName
                title
                type
              }
            }
            kontakt {
              tytul
              opis
            }
          }
        }
      `,
    }),
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();
  return {
    seo: json?.data?.page?.seo,
    kontakt: json?.data?.page?.kontakt,
  };
};

export const getOkolicaData = async () => {
  const res = await fetch(GQL_API_URL, {
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
    next: { revalidate: REVALIDATE_TIME },
  });

  const json = await res.json();
  return {
    seo: json?.data?.page?.seo,
    attractions: json?.data?.page?.okolica?.attractionsSection || [],
  };
};
