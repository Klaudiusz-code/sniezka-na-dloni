import AmenitiesGrid from "@/components/AmenitiesGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import LocationBox from "@/components/LocationBox";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import CabinShowcase from "@/components/CabinShowcase";
import FAQ from "@/components/Faq"; 

const page = () => {
  return (
    <div className="bg-white text-[#171717] font-sans antialiased">
      <TopBar />
      <Menu />
      <Hero />
      <CabinShowcase />
      <IntroStatement />
      <AmenitiesGrid />
      <Testimonials />
      <FAQ />
      <LocationBox />
      <Footer />
    </div>
  );
};

export default page;
