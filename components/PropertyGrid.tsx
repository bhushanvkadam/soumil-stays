import { properties } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";

export default function PropertyGrid() {
  const nonFeatured = properties.filter((p) => !p.featured);

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="villas">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Our Villas</h2>
          <a
            href="#"
            className="text-sm text-forest font-medium hover:underline flex items-center gap-1 transition-all"
          >
            View All Properties
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonFeatured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
