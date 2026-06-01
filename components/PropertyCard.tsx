import { Property } from "@/lib/properties";

const WA_NUMBER = "919112385333";

function poolBadgeLabel(p: Property): string | null {
  if (!p.pool.hasPool) return null;
  if (p.pool.type === "infinity") return "Infinity Pool";
  if (p.pool.type === "clubhouse") return "Clubhouse Pool";
  return "Pool";
}

export default function PropertyCard({ property: p }: { property: Property }) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${p.name} (${p.location.area}, ${p.location.destination}). Could you share availability and pricing?`
  )}`;
  const badge = poolBadgeLabel(p);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-video bg-stone-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-200 group-hover:scale-105 transition-transform duration-500" />
        {/* Pool / feature badge — top-left */}
        {badge && (
          <div className="absolute top-3 left-3 bg-forest text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">
          {p.location.destination} · {p.location.area}
        </p>
        <h3 className="font-heading text-xl text-foreground mb-3 leading-snug">
          {p.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{p.bedrooms} Bedroom{p.bedrooms !== 1 ? "s" : ""}</span>
            <span className="text-stone-300">·</span>
            <span>Sleeps {p.maxGuests}</span>
          </div>
          <p className="text-xs text-gray-400 italic">Enquire for pricing</p>
        </div>

        {/* View Property button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border border-forest text-forest rounded-lg py-2.5 text-sm font-medium hover:bg-forest hover:text-white transition-colors duration-200"
        >
          View Property
        </a>
      </div>
    </div>
  );
}
