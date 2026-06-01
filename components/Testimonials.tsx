const TESTIMONIALS = [
  {
    quote:
      "The attention to detail at Suruchi Villa was impeccable. The lake views at sunset are something I will never forget. Truly a world-class experience right in Alibag.",
    name: "Rahul Sharma",
    location: "Mumbai",
    property: "Stayed at Suruchi Villa",
    stars: 5,
  },
  {
    quote:
      "Ocean Mist Retreat in Dapoli was the perfect weekend getaway. The pool was clean, the staff was extremely helpful — highly recommended for family gatherings!",
    name: "Ananya Deshpande",
    location: "Stayed at Ocean Mist",
    property: "Dapoli",
    stars: 4,
  },
  {
    quote:
      "Booking with Soumil Stays a The Karjat property exceeded all expectations. It is refreshing to find such fsy listings in India.",
    name: "Vikram Mehta",
    location: "Stayed at Athaangg Estate",
    property: "Karjat",
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
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, location, property, stars }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-5"
            >
              <Stars count={stars} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-stone-100">
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{location}</p>
                <p className="text-xs text-forest mt-1">{property}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
