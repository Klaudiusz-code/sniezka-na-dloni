import { MetadataRoute } from "next";

const BASE_URL = "https://sniezkanadloni.pl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPagesQuery = `
    query SitemapPages {
      home: page(id: "cG9zdDoxMQ") { uri }
      oferta: page(id: "cG9zdDoxNg") { uri }
      oNas: pageBy(uri: "/o-nas/") { uri }
      okolica: page(id: "cG9zdDoxOQ") { uri }
      kontakt: page(id: "cG9zdDoyMQ") { uri }
    }
  `;

  const cabinsQuery = `
    query SitemapCabins {
      domki {
        edges {
          node {
            slug
            domki {
              tytul
              zdjecieGlowne {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const [pagesRes, cabinsRes] = await Promise.all([
      fetch("https://sniezkanadloni.pl/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: staticPagesQuery }),
        next: { revalidate: 3600 },
      }),
      fetch("https://sniezkanadloni.pl/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: cabinsQuery }),
        next: { revalidate: 3600 },
      }),
    ]);

    const pagesJson = await pagesRes.json();
    const cabinsJson = await cabinsRes.json();

    const cabinsData = cabinsJson?.data?.domki?.edges || [];

    const staticUrls: MetadataRoute.Sitemap = [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${BASE_URL}/oferta`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/o-nas`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${BASE_URL}/okolica`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${BASE_URL}/kontakt`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.5,
      },
    ];

    const cabinUrls: MetadataRoute.Sitemap = cabinsData.map((edge: any) => {
      const cabin = edge.node;
      const imageUrl = cabin.domki?.zdjecieGlowne?.node?.sourceUrl;

      const cabinEntry: any = {
        url: `${BASE_URL}/domki/${cabin.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };


      if (imageUrl) {
        cabinEntry.images = [
          {
            loc: imageUrl,
            title: cabin.domki?.tytul || "Domek Śnieżka Nad Dłoni",
            caption: cabin.domki?.tytul || "Luksusowy domek w Karkonoszach",
          },
        ];
      }

      return cabinEntry;
    });

    return [...staticUrls, ...cabinUrls];
  } catch (error) {
    console.error("Błąd generowania sitemapy:", error);
    return [
      { url: BASE_URL, lastModified: new Date() },
      { url: `${BASE_URL}/oferta`, lastModified: new Date() },
      { url: `${BASE_URL}/kontakt`, lastModified: new Date() },
    ];
  }
}
