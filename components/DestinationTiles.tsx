import Image from "next/image";

const DESTINATIONS = [
  {
    name: "Alibag",
    count: 12,
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/HERO%20Screenshot%202026-06-01%20at%2008.07.35.png",
  },
  {
    name: "Dapoli",
    count: 4,
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.09.04.png",
  },
  {
    name: "Karjat",
    count: 3,
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.08.50.png",
  },
];

export default function DestinationTiles() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Explore by Destination
          </h2>
        </div>
      </div>

      {/* Mobile: horizontal scroll · Desktop: 3-col grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-3 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {DESTINATIONS.map(({ name, count, image }) => (
            <div
              key={name}
              className="relative flex-shrink-0 w-[78vw] sm:w-[56vw] md:w-auto h-72 md:h-96 bg-stone-300 rounded-2xl overflow-hidden group cursor-pointer snap-center"
            >
              <Image
                src={image}
                alt={`${name} villas`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 78vw, 33vw"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />

              {/* Content pinned to bottom-left */}
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="font-heading text-4xl md:text-5xl text-white mb-1">{name}</h3>
                <p className="text-white/60 text-xs tracking-[0.2em] uppercase">
                  {name} · {count} Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
