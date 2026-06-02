import Image from "next/image";
import { Property } from "@/lib/properties";

const WA_NUMBER = "919112385333";

interface Props {
  property: Property;
  image?: string;
}

export default function PropertyCard({ property: p, image }: Props) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${p.name} (${p.location.area}, ${p.location.destination}). Could you share availability and pricing?`
  )}`;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-video bg-stone-200 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={p.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-200 group-hover:scale-105 transition-transform duration-500" />
        )}

        {/* Hover enquire overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-forest text-white rounded-lg py-2 text-sm font-medium hover:bg-[#15352a] transition-colors"
          >
            Enquire
          </a>
        </div>
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
