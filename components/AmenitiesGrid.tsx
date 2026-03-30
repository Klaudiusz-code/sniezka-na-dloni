import Link from "next/link";
import {
  FaCheck,
} from "react-icons/fa6";

export default function AmenitiesGrid({ data }: any) {
  if (!data) return null;
  return (
    <section
      id="oferta"
      className="py-32 px-6 bg-[#050505] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#D4A373]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
          <div className="flex-1">
            <span className="text-[#D4A373] text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
              Oferta
            </span>
            <h3 className="text-4xl md:text-7xl font-serif font-light text-white leading-[1.1]">
              Co nas wyróżnia?
            </h3>
          </div>
          <p className="flex-1 text-stone-400 text-sm md:text-base text-center md:text-right max-w-lg font-light leading-relaxed">
            Pełna prywatność, luksus i natura w jednym.{" "}
            <br className="hidden md:block" />
            Sprawdź, co przygotowaliśmy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {data.map((feature: any, i: any) => (
            <div
              key={i}
              className="group block relative h-[750px] md:h-[600px] border-r border-white/10 overflow-hidden last:border-r-0 bg-[#0a0a0a]"
            >
              <img
                src={feature?.featureImage?.node?.sourceUrl}
                alt={feature?.tytulCechy}
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-in-out grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105 absolute inset-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/80 to-[#050505]/40"></div>

              <div className="absolute top-10 right-10 text-[8rem] md:text-[12rem] font-black text-white/5 leading-none select-none pointer-events-none font-serif italic">
                0{i + 1}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                <div className="flex items-center gap-3 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="w-8 h-[1px] bg-[#D4A373]"></span>
                  <span className="text-[#D4A373] text-[9px] font-bold uppercase tracking-widest">
                    {feature?.podtytul}
                  </span>
                  <span className="text-[#D4A373] text-[10px] font-bold uppercase tracking-widest">
                    {feature?.subtitle}
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-none tracking-tight">
                  {feature?.tytulCechy}{" "}
                </h4>

                <div className="max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <ul className="space-y-4 border-t border-white/20 pt-6">
                    {feature?.featureItems?.map((item: any , idx: any) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-white/70 text-sm font-medium hover:text-white transition-colors"
                      >
                        <span className="text-[#D4A373]">
                          <FaCheck />
                        </span>
                        {item?.tekstPunktu}{" "}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-[#D4A373] transition-colors group-hover:translate-x-2 duration-300"
                  >
                    Skontaktuj się{" "}
                    <span className="text-lg font-serif ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
