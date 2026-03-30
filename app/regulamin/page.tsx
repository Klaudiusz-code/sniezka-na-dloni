import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Regulamin – Śnieżka na dłoni",
  description: "Regulamin pobytu w obiektach Śnieżka na Dłoni. Poznaj zasady rezerwacji i pobytu w naszych domkach.",
};

const rules = [
  {
    text: <>
      Doba hotelowa zaczyna się o godz. <strong className="text-[#2C2825] font-medium">15:00</strong> i kończy o godz. <strong className="text-[#2C2825] font-medium">11:00</strong> ostatniego dnia pobytu.
    </>
  },
  {
    text: <>
      Płatność za pobyt nie podlega zwrotowi w przypadku skrócenia pobytu. Opłata miejscowa nie jest wliczona w cenę pokoju.
    </>
  },
  {
    text: <>
      W obiekcie <strong className="text-[#D4A373] font-medium">nie akceptujemy zwierząt</strong>.
    </>
  },
  {
    text: <>
      W obiekcie obowiązuje <strong className="text-[#D4A373] font-medium">całkowity zakaz palenia</strong> tytoniu oraz papierosów elektronicznych. Za złamanie zakazu obiekt ma prawo naliczyć karę w wysokości <strong className="text-[#D4A373] font-medium">300 PLN</strong>.
    </>
  },
  {
    text: <>
      <strong className="text-[#2C2825] font-serif text-base md:text-lg">Cisza nocna</strong> obowiązuje od godz. 22:00 do godz. 6:00 rano.
    </>
  },
  {
    text: <>
      Goście obiektu ponoszą odpowiedzialność za wszelkie wyrządzone szkody na terenie obiektu. Szkoda oznacza zarówno zniszczenie, jak i uszkodzenie elementów wyposażenia pokoju, jak i ich utratę.
    </>
  },
  {
    text: <>
      W przypadku powstania szkody podczas pobytu, gość jest zobowiązany do pokrycia kosztów jej naprawy. Za szkody wyrządzone przez dzieci odpowiadają rodzice.
    </>
  },
  {
    text: <>
      Gość powinien zawiadomić właścicieli o wystąpieniu szkody bądź też o jej stwierdzeniu w chwili zdarzenia.
    </>
  },
  {
    text: <>
      Goście zobowiązani są przechowywać klucz do pokoju z należytą starannością. W przypadku jego utraty, goście zostaną obciążeni kosztami w wysokości <strong className="text-[#D4A373] font-medium">250 zł</strong>.
    </>
  },
  {
    text: <>
      Obiekt nie ponosi odpowiedzialności za uszkodzenia pojazdu należącego do gościa, jak również za rzeczy wartościowe pozostawione w obiekcie.
    </>
  },
  {
    text: <>
      Goście zobowiązują się wykorzystywać obiekt jedynie do celów mieszkalnych — <strong className="text-[#D4A373] font-medium">zabrania się organizowania imprez</strong> w obiekcie.
    </>
  },
  {
    text: <>
      W przypadku, gdy gość w sposób znaczący narusza spokój i/lub dobra sąsiadów oraz nie przestrzega powszechnie stosowanych norm współżycia, obiekt zastrzega sobie prawo do wypowiedzenia pobytu gościowi i nie jest wtedy zobowiązany do zwrotu pieniędzy za niewykorzystany okres.
    </>
  },
  {
    text: <>
      Na terenie obiektu wprowadzony jest <strong className="text-[#2C2825] font-medium">zakaz używania otwartego ognia</strong>; grill można użytkować tylko w wyznaczonym do tego celu miejscu.
    </>
  }
];

export default function RegulaminPage() {
  return (
    <>
      <Menu />
      <main className="bg-[#FDFCF8] text-[#2C2825] font-sans min-h-screen selection:bg-[#D4A373] selection:text-black">
        
        {/* HERO */}
        <section className="h-[35vh] sm:h-[40vh] w-full flex flex-col justify-center items-center relative overflow-hidden border-b border-[#E5E2D8]">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1200px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">
              Zasady pobytu
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2C2825] leading-none">
              Regulamin
            </h1>
          </div>
        </section>

        {/* LISTA REGUŁ */}
        <section className="max-w-3xl mx-auto px-6 py-12 md:py-24">
          
          <div className="space-y-8 md:space-y-10">
            {rules.map((rule, index) => (
              <div key={index} className="relative pl-12 md:pl-16 group">
                {/* Numer w tle */}
                <span className="absolute left-0 top-0 text-3xl md:text-5xl font-bold text-[#E5E2D8] group-hover:text-[#D4A373]/30 transition-colors duration-300 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Treść */}
                <div className="pt-1 md:pt-2 border-b border-[#E5E2D8]/50 pb-8">
                  <p className="text-sm md:text-base text-[#2C2825]/70 leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WYRÓŻNIONY OSTATNI PUNKT (OPŁATA) */}
          <div className="mt-12 md:mt-16 relative">
            <div className="bg-[#E5E2D8]/50 border border-[#D4D3CD] p-6 md:p-8 rounded-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl md:text-5xl font-bold text-[#D4A373]/40 select-none">14</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-2">Opłata serwisowa</p>
                  <p className="text-sm md:text-base text-[#2C2825]/80 leading-relaxed">
                    Pobierana jest jednorazowa opłata serwisowa w wysokości <strong className="text-[#2C2825] font-medium">180 zł</strong>, przeznaczona na przygotowanie obiektu dla gości przed rozpoczęciem pobytu.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* STOPKA Z KONTAKTEM */}
        <section className="bg-[#2C2825] text-[#FDFCF8]">
          <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FDFCF8]/40 mb-6">
              W razie pytań dotyczących regulaminu
            </p>
            
            <h2 className="text-2xl md:text-3xl font-serif text-[#FDFCF8] mb-8">
              Skontaktuj się z nami
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#FDFCF8]/70">
              <a 
                href="mailto:domki-sniezka@wp.pl"
                className="flex items-center gap-3 hover:text-[#D4A373] transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-full border border-[#FDFCF8]/10 flex items-center justify-center">
                  <FaEnvelope size={14} />
                </div>
                domki-sniezka@wp.pl
              </a>
              
              <div className="hidden sm:block w-[1px] h-6 bg-[#FDFCF8]/20"></div>

              <a 
                href="tel:+48570430338"
                className="flex items-center gap-3 hover:text-[#D4A373] transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-full border border-[#FDFCF8]/10 flex items-center justify-center">
                  <FaPhone size={14} />
                </div>
                +48 570 430 338
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}