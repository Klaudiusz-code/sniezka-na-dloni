import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { LiaArrowRightSolid } from "react-icons/lia";
import { getGlobalSettings } from "../app/helpers/requests";

export default async function Footer() {
  const settings = await getGlobalSettings();

  return (
    <footer className="bg-[#050505] text-[#FAFAF9] pt-24 pb-12 px-6 border-t-4 border-[#D4A373] relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-8">
            <Link href="/" className="block group">
              <h2 className="text-4xl font-serif italic font-light text-white mb-2 group-hover:text-[#D4A373] transition">
                Śnieżka
                <br />
                <span className="text-stone-500 font-sans font-bold not-italic text-2xl">
                  na Dłoni
                </span>
              </h2>
              <div className="w-12 h-1 bg-[#D4A373] group-hover:w-24 transition-all duration-300"></div>
            </Link>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xs">
              Luksusowe domki widokowe w Kostrzycy. Miejsce stworzone z miłością
              do natury.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-6">
              Odkrywaj
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/o-nas"
                  className="text-stone-300 hover:text-white transition flex items-center gap-3 group"
                >
                  <LiaArrowRightSolid
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                  <span className="text-lg font-light italic">O Nas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/oferta"
                  className="text-stone-300 hover:text-white transition flex items-center gap-3 group"
                >
                  <LiaArrowRightSolid
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                  <span className="text-lg font-light italic">Oferta</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/okolica"
                  className="text-stone-300 hover:text-white transition flex items-center gap-3 group"
                >
                  <LiaArrowRightSolid
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                  <span className="text-lg font-light italic">Okolica</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-stone-300 hover:text-white transition flex items-center gap-3 group"
                >
                  <LiaArrowRightSolid
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                  <span className="text-lg font-light italic">Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLUMNA 3 - KONTAKT */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-6">
              Skontaktuj się
            </h3>
            <div className="space-y-6">
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt size={12} className="text-[#D4A373]" /> Adres
                </p>
                <p className="text-white font-medium leading-tight whitespace-pre-line">
                  {settings?.adresFizyczny ||
                    "ul. Karpacka 103 C\n58-532 Kostrzyca"}
                </p>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                  <FaPhone size={12} className="text-[#D4A373]" /> Telefon
                </p>
                <a
                  href={`tel:${settings?.numerTelefonu || "#"}`}
                  className="text-white font-medium leading-tight hover:text-[#D4A373] transition"
                >
                  {settings?.numerTelefonu || "+48 000 000 000"}
                </a>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                  <FaEnvelope size={12} className="text-[#D4A373]" /> Email
                </p>
                <a
                  href={`mailto:${settings?.email || "#"}`}
                  className="text-white font-medium leading-tight hover:text-[#D4A373] transition"
                >
                  {settings?.email || "brak@email.pl"}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-6">
                Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  href={settings?.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={settings?.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
                Realizacja
              </p>
              <a
                href="https://klaudiuszdev.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="https://klaudiuszdev.pl/hello.svg"
                    alt="KlaudiuszDev"
                    fill
                    className="object-contain"
                    style={{
                      filter:
                        "invert(58%) sepia(62%) saturate(450%) hue-rotate(348deg) brightness(96%) contrast(94%)",
                    }}
                  />
                </div>
                <span className="text-stone-300 group-hover:text-[#D4A373] transition-colors font-light  text-lg">
                  klaudiuszdev.pl
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-stone-500">
            © {new Date().getFullYear()} Śnieżka na Dłoni. Wszystkie prawa
            zastrzeżone.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-stone-600">
            <Link
              href="/polityka-prywatnosci"
              className="hover:text-white transition"
            >
              Polityka Prywatności
            </Link>
            <Link
              href="/regulamin"
              className="hover:text-white transition"
            >
              Regulamin{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
