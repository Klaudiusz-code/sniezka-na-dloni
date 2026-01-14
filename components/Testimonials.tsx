import { FaQuoteLeft, FaStar } from "react-icons/fa";

const REVIEWS = [
  {
    name: "Anna K.",
    date: "Luty 2024",
    text: "Niesamowite miejsce! Cisza i spokój, o jakim marzyliśmy. Domki są cudownie urządzone, a prywatna górka hitem dla dzieci. Na pewno wrócimy!",
    rating: 5
  },
  {
    name: "Marek i Ewa",
    date: "Styczeń 2024",
    text: "Perfekcyjna lokalizacja. Blisko szlaków, a jednocześnie ogromna prywatność. Jacuzzi z widokiem na Śnieżkę to coś wspaniałego.",
    rating: 5
  },
  {
    name: "Piotr Z.",
    date: "Grudzień 2023",
    text: "Wszystko na najwyższym poziomie. Pełne wyposażenie, Netflix, komfortowe łóżka. Polecam każdemu, kto szuka luksusu w górach.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="opinie" className="py-24 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h3 className="text-3xl font-serif text-center text-stone-800 mb-16">Opinie Gości</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="bg-stone-50 p-10 rounded-3xl relative hover:bg-stone-100 transition">
              <FaQuoteLeft className="text-stone-300 text-4xl mb-6" />
              <p className="text-stone-700 font-light leading-relaxed mb-8 italic text-lg">
                "{rev.text}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-stone-900">{rev.name}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{rev.date}</p>
                </div>
                <div className="flex text-amber-500 text-xs gap-1">
                  {[...Array(rev.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}