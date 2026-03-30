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
import {
  getCabins,
  getHomePageData,
  getGlobalSettings,
} from "./helpers/requests"; 

export async function generateMetadata() {
  const { hero } = await getHomePageData(); 

  const title = "Śnieżka na Dłoni – Luksusowe Domki w Karkonoszach";
  const description =
    "Całoroczne domki widokowe w Kostrzycy k. Karpacza. Wyjątkowy wypoczynek blisko natury.";

  return {
    title,
    description,
    metadataBase: new URL("https://sniezkanadloni.pl"),
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      siteName: "Śnieżka na Dłoni",
      locale: "pl_PL",
      type: "website",
      url: "/",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

const page = async () => {
  const { hero, intro, features, testimonials, statues, location } =
    await getHomePageData();

  const { cabins } = await getCabins();
  const settings = await getGlobalSettings();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Śnieżka na Dłoni",
    description: "Luksusowe domki widokowe w Kostrzycy",
    url: "https://sniezkanadloni.pl",
    telephone: settings?.numerTelefonu,
    email: settings?.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        settings?.adresFizyczny?.split("\n")[0] || "ul. Karpacka 103 C",
      addressLocality: "Kostrzyca",
      postalCode: "58-532",
      addressCountry: "PL",
    },
    hasMap: "https://share.google/HhrgYbsHppmknnzWL",
    sameAs: [
      settings?.facebook || "#",
    ],
  };

  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

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
    </>
  );
};

export default page;
