"use client";

import { useState } from "react";
import Link from "next/link";
import { properties, type Destination } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";

const PLACEHOLDER_IMAGES = [
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png",
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.10.26.png",
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.11.14.png",
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.10.39.png",
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.10.51.png",
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.08.27.png",
];

const FILTERS = ["All", "Alibag", "Dapoli", "Karjat"] as const;
type Filter = (typeof FILTERS)[number];

export default function PropertyGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = properties
    .filter((p) =>
      activeFilter === "All"
        ? true
        : p.location.destination === (activeFilter as Destination)
    )
    .slice(0, 6);

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F8F9FA]" id="villas">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Our Villas</h2>

          {/* Filter tabs — horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeFilter === f
                    ? "bg-forest text-white"
                    : "bg-stone-100 text-gray-500 hover:bg-stone-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <PropertyCard
              key={p.id}
              property={p}
              image={PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length]}
              href={p.slug === "killa-villa" ? "/properties/killa-villa" : "/properties"}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 border border-forest text-forest rounded-lg px-8 py-3 text-sm font-medium hover:bg-forest hover:text-white transition-colors duration-200"
          >
            View All Properties
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
