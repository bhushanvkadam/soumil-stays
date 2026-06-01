import { getPropertiesByDestination, type Destination } from "@/lib/properties";

const DESTINATIONS: { name: Destination; gradient: string }[] = [
  { name: "Alibag", gradient: "from-amber-900 to-stone-700" },
  { name: "Dapoli", gradient: "from-teal-900 to-stone-700" },
  { name: "Karjat", gradient: "from-green-900 to-stone-700" },
];

export default function DestinationTiles() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Explore by Destination
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESTINATIONS.map(({ name, gradient }) => {
            const count = getPropertiesByDestination(name).length;
            return (
              <div
                key={name}
                className="relative h-72 md:h-96 bg-stone-300 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Placeholder background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:scale-105 transition-transform duration-700`} />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Content pinned to bottom-left */}
                <div className="absolute bottom-0 left-0 p-7">
                  <h3 className="font-heading text-4xl md:text-5xl text-white mb-1">{name}</h3>
                  <p className="text-white/60 text-xs tracking-[0.2em] uppercase">
                    {count} {count === 1 ? "Property" : "Properties"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
