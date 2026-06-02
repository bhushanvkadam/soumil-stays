const STATS = [
  { number: "19+", label: "Properties" },
  { number: "3", label: "Destinations" },
  { number: "500+", label: "Happy Guests" },
  { number: "4.8★", label: "Average Rating" },
];

export default function WhySoumilStays() {
  return (
    <section className="bg-[#1B4332] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map(({ number, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center py-6 md:py-0 md:px-8"
            >
              <span className="font-heading text-4xl md:text-5xl text-white mb-2">
                {number}
              </span>
              <span className="text-white/60 text-sm font-sans uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
