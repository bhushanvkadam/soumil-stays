const TESTIMONIALS = [
  {
    quote:
      "The attention to detail at Suruchi was impeccable. The lake views at sunset are something I will never forget. Truly a world-class experience right in Alibag.",
    name: "Rahul Sharma",
    city: "Mumbai",
    property: "Suruchi, Alibag",
    stars: 5,
  },
  {
    quote:
      "Killa Villa in Varsoli was the perfect weekend getaway. The glass-walled living room and private pool made it feel completely private. Caretaker was extremely helpful — highly recommended!",
    name: "Ananya Deshpande",
    city: "Pune",
    property: "Killa Villa, Varsoli",
    stars: 5,
  },
  {
    quote:
      "Soumils 4.0 exceeded all expectations. Two minutes from Varsoli Beach, an immaculate pool, and exactly the kind of relaxed pace we needed. Will definitely book again.",
    name: "Vikram Mehta",
    city: "Delhi",
    property: "Soumils 4.0, Alibag",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#f59e0b" : "none"}
          stroke={i < count ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-amber-500 text-sm font-medium mb-3 font-sans">
            4.8★ across all properties
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map(({ quote, name, city, property, stars }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-sm p-4 md:p-7 flex flex-col gap-4 md:gap-5"
            >
              <Stars count={stars} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4 md:line-clamp-none">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-stone-100">
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{city}</p>
                <p className="text-xs text-gray-400 mt-0.5">Stayed at {property}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
