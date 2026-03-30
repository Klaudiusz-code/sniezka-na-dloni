import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials({ data }: any) {
  if (!data) return null;

  return (
    <section id="opinie" className="py-24 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h3 className="text-3xl font-serif text-center text-stone-800 mb-16">
          Opinie Gości
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((rev: any, i: any) => (
            <div
              key={i}
              className="bg-stone-50 p-10 rounded-3xl relative hover:bg-stone-100 transition"
            >
              <FaQuoteLeft className="text-stone-300 text-4xl mb-6" />

              <div
                className="text-stone-700 font-light leading-relaxed mb-8 italic text-lg [&_p]:mb-2 [&_p]:last:mb-0"
                dangerouslySetInnerHTML={{ __html: rev?.trescOpinii || "" }}
              />

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-stone-900">{rev?.imie}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    {rev?.data}
                  </p>
                </div>

                <div className="flex text-amber-500 text-xs gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
