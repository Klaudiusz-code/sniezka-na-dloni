import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności – Śnieżka na Dłoni",
  description: "Polityka prywatności serwisu Śnieżka na Dłoni.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Menu />
      <main className="bg-white text-[#171717] font-sans min-h-screen selection:bg-[#D4A373] selection:text-white">
        {/* HERO */}
        <section className="pt-32 pb-16 w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A373] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 text-center px-6">
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.3em] text-xs mb-6">
              Informacje prawne
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Polityka Prywatności
            </h1>
          </div>
        </section>

        {/* TREŚĆ - PREMIUM DESIGN */}
        <section className="py-24 px-6 bg-[#FAF9F6]">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-stone-400 uppercase tracking-[0.2em] font-bold mb-20">
              Ostatnia aktualizacja: Marzec 2026
            </p>

            <div className="space-y-20">
              {/* SEKCJA 1 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#171717] mb-6 pb-4 border-b border-stone-200">
                  1. Administrator
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed font-light">
                  Administratorem Twoich danych osobowych w rozumieniu przepisów
                  o ochronie danych osobowych (RODO) jest podmiot prowadzący
                  działalność pod nazwą{" "}
                  <span className="font-medium text-[#171717]">
                    Śnieżka na Dłoni
                  </span>
                  . Kontakt jest możliwy wyłącznie za pomocą danych
                  udostępnionych w zakładce Kontakt na naszej stronie
                  internetowej.
                </p>
              </div>

              {/* SEKCJA 2 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#171717] mb-6 pb-4 border-b border-stone-200">
                  2. Jakie dane zbieramy?
                </h2>
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                  <p>
                    Nasza strona internetowa{" "}
                    <span className="font-medium text-[#171717]">
                      nie posiada formularzy kontaktowych, systemów rezerwacji
                      ani ankiety
                    </span>
                    . Oznacza to, że nie zbieramy automatycznie żadnych danych
                    osobowych (takich jak imię, nazwisko czy adres e-mail).
                  </p>
                  <p>
                    Kontakt (numer telefonu, adres e-mail, adres fizyczny) jest
                    jedynie wyświetlany na stronie w celach informacyjnych.
                    Przetwarzanie Twoich danych osobowych następuje wyłącznie w
                    momencie, gdy z własnej, dobrowolnej woli zdecydujesz się do
                    nas zadzwonić lub wysłać do nas wiadomość e-mail.
                  </p>
                </div>
              </div>

              {/* SEKCJA 3 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#171717] mb-6 pb-4 border-b border-stone-200">
                  3. Pliki Cookies i Analityka
                </h2>
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                  <p>
                    Nasza strona korzysta z usługi{" "}
                    <span className="font-medium text-[#171717]">
                      Google Analytics
                    </span>
                    . Narzędzie to wykorzystuje pliki „cookies” (ciasteczka),
                    które służą do analizy, w jaki sposób użytkownicy korzystają
                    ze strony internetowej (np. z jakich urządzeń wchodzą, ile
                    czasu spędzają na stronie).
                  </p>
                  <p>
                    Informacje generowane przez cookie na temat Twojego
                    korzystania z witryny są przesyłane na serwer Google i tam
                    przechowywane. Zastrzegamy, że korzystamy z Google Analytics
                    z włączoną anonimizacją IP (Twój adres IP jest skracany
                    przed zapisaniem na serwerach Google).
                  </p>
                  <p>
                    Możesz zablokować zapisywanie plików cookies, zmieniając
                    ustawienia swojej przeglądarki internetowej lub korzystając
                    z dodatków blokujących (np. uBlock Origin).
                  </p>
                </div>
              </div>

              {/* SEKCJA 4 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#171717] mb-6 pb-4 border-b border-stone-200">
                  4. Cel i podstawa prawna
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-white border border-stone-100 rounded-2xl">
                    <span className="text-[#D4A373] font-serif text-2xl font-bold">
                      01
                    </span>
                    <div className="text-stone-600 text-lg font-light">
                      <p className="font-medium text-[#171717] mb-1">
                        Dane kontaktowe
                      </p>
                      <p>
                        Jeśli dobrowolnie skontaktujesz się z nami telefonicznie
                        lub mailowo, przetwarzamy przekazane dane wyłącznie w
                        celu udzielenia Ci odpowiedzi. Podstawą prawną jest nasz
                        prawnie uzasadniony interes (komunikacja z potencjalnym
                        klientem).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-white border border-stone-100 rounded-2xl">
                    <span className="text-[#D4A373] font-serif text-2xl font-bold">
                      02
                    </span>
                    <div className="text-stone-600 text-lg font-light">
                      <p className="font-medium text-[#171717] mb-1">
                        Dane analityczne
                      </p>
                      <p>
                        Dane zebrane przez Google Analytics przetwarzamy w celu
                        analizy ruchu na stronie i optymalizacji jej działania.
                        Podstawą prawną jest nasz prawnie uzasadniony interes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEKCJA 5 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#171717] mb-6 pb-4 border-b border-stone-200">
                  5. Komu przekazujemy dane?
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed font-light">
                  Twoje dane osobowe nie są sprzedawane, wymieniane ani
                  przekazywane stronom trzecim w celach marketingowych. Jedynym
                  podmiotem zewnętrznym mającym techniczny dostęp do danych
                  analitycznych (cookies) jest firma Google w ramach usługi
                  Google Analytics.
                </p>
              </div>

              {/* SEKCJA 6 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#171717] mb-6 pb-4 border-b border-stone-200">
                  6. Twoje prawa
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed font-light">
                  Zgodnie z RODO przysługuje Ci prawo do: dostępu do swoich
                  danych, ich sprostowania, usunięcia, ograniczenia
                  przetwarzania oraz przenoszenia danych. W sprawach związanych
                  z ochroną danych możesz się z nami skontaktować w dowolnym
                  momencie, korzystając z danych widocznych na stronie.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
