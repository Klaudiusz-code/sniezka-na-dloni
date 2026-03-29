import { FaClock, FaDog, FaBanSmoking, FaMusic } from "react-icons/fa6";

const ICONS = [FaClock, FaDog, FaBanSmoking, FaMusic];

export default function Statue({ data }: any) {
  if (!data || data.length === 0) return null;

  return (
    <section
      id="faq"
      className="max-w-[1400px] mx-auto px-6 py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4F1EA] rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="relative z-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E5E5E5] pb-8">
          <div>
            <p className="text-[#D4A373] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">
              Regulamin
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              Zasady pobytu
            </h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-[#1A1A1A]/10"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {data.map((item: any, i: any) => {
          const Icon = ICONS[i] || FaClock;

          return (
            <div
              key={i}
              className="group bg-white border border-[#F0F0F0] p-10 md:p-14 rounded-[2.5rem] hover:shadow-[0_20px_60px_-12px_rgba(212,163,115,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-8 transition-all duration-300 bg-[#D4A373]/5 border border-[#D4A373]/20 text-[#D4A373] group-hover:scale-110 group-hover:bg-[#D4A373] group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  {item?.stayRules}
                </h3>

                <div className="space-y-2 text-[#505050]">
                  <p className="text-lg">{item?.sectionSubtitle}</p>
                  <p className="text-lg">{item?.notes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}