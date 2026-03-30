import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { getGlobalSettings } from "../app/helpers/requests"; 

export default async function TopBar() {
  const settings = await getGlobalSettings();

  return (
    <div className="top-0 left-4 right-4 md:top-2 md:left-6 md:right-6 z-50">
      <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-4 md:px-6 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex justify-between items-center">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between">
          <div className="hidden md:flex items-center gap-6 text-white/70">
            <span className="flex items-center gap-3 hover:text-white transition cursor-default">
              <div className="w-8 h-8 flex items-center justify-center text-[#D4A373]">
                <FaMapMarkerAlt />
              </div>
              <span className="text-sm font-bold tracking-wide">
                {settings?.adresFizyczny || "Kaarpacz"}
              </span>
            </span>
            <span className="w-px h-px bg-white/20"></span>
            <span>Dostępne 365 dni</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${settings?.email || "#"}`}
              className="group flex items-center gap-2 text-white/70 hover:text-white transition"
            >
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                <FaEnvelope size={14} />
              </div>
              <span className="hidden md:inline text-sm font-medium">
                {settings?.email || "brak@email.pl"}
              </span>
            </a>

            <a
              href={`tel:${settings?.numerTelefonu || "#"}`}
              className="group flex items-center gap-2 text-white/70 hover:text-white transition"
            >
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center group-hover:bg-[#D4A373] group-hover:text-black transition-colors">
                <FaPhoneAlt size={14} />
              </div>
              <span className="text-sm font-medium tracking-wide">
                {settings?.numerTelefonu || "+48 000 000 000"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
