import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";

interface Props {
  property: Property;
  image?: string;
  href?: string;
}

export default function PropertyCard({ property: p, image, href = "/properties" }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Image wrapped in link */}
      <Link href={href} className="block relative aspect-video bg-stone-200 overflow-hidden">
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

        {/* Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="block w-full text-center bg-forest text-white rounded-lg py-2 text-sm font-medium">
            Book Now
          </span>
        </div>
      </Link>

      {/* Details */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">
          {p.location.destination} · {p.location.area}
        </p>
        <Link href={href}>
          <h3 className="font-heading text-xl text-foreground mb-3 leading-snug hover:text-forest transition-colors duration-200">
            {p.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{p.bedrooms} Bedroom{p.bedrooms !== 1 ? "s" : ""}</span>
            <span className="text-stone-300">·</span>
            <span>{p.maxGuests} Guests</span>
          </div>
          <p className="text-xs text-gray-400 italic">View Details</p>
        </div>

        <Link
          href={href}
          className="block w-full text-center border border-forest text-forest rounded-lg py-2.5 text-sm font-medium hover:bg-forest hover:text-white transition-colors duration-200"
        >
          View Property
        </Link>
      </div>
    </div>
  );
}
