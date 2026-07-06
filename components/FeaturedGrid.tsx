"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = "919112385333";

interface FeaturedItem {
  slug?: string;
  name: string;
  location: { area: string; destination: string };
  bedrooms: number;
  bathrooms: number;
  guests: number;
  badge?: string;
  description: string;
  image: string | null;
}

const FEATURED: FeaturedItem[] = [
  {
    slug: "killa-villa",
    name: "Killa Villa",
    location: { area: "Varsoli", destination: "Alibag" },
    bedrooms: 3,
    bathrooms: 5,
    guests: 6,
    badge: "Featured",
    description:
      "A modern villa wrapped in full-height glass walls with direct views of the pool and lawn.",
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png",
  },
  {
    name: "Suruchi",
    location: { area: "Kurul", destination: "Alibag" },
    bedrooms: 6,
    bathrooms: 7,
    guests: 18,
    badge: "Editor's Pick",
    description:
      "A sprawling six-bedroom estate sitting right on the lake's edge. Uninterrupted water views and capacity for eighteen guests.",
    image: "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.10.39.png",
  },
  {
    name: "Aamrai Vista",
    location: { area: "Varsoli", destination: "Alibag" },
    bedrooms: 4,
    bathrooms: 4,
    guests: 10,
    description:
      "Set amid mango groves with open countryside views — a generous four-bedroom retreat with a private pool.",
    image: "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.10.51.png",
  },
  {
    name: "The Olive House",
    location: { area: "Dapoli", destination: "Dapoli" },
    bedrooms: 3,
    bathrooms: 3,
    guests: 8,
    description:
      "Tucked into the coastal hills of Dapoli — sea breeze, lush surroundings, and total privacy.",
    image: "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.08.27.png",
  },
];

function FeaturedCard({ item, index }: { item: FeaturedItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${item.name} (${item.location.area}, ${item.location.destination}). Could you share availability and pricing?`
  )}`;

  const CardWrapper = item.slug ? Link : "div";
  const cardHref = item.slug ? `/properties/${item.slug}` : undefined;

  return (
    <div
      ref={ref}
      className="reveal bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
        {/* @ts-expect-error – href only passed when slug exists */}
        <CardWrapper href={cardHref} className="block w-full h-full">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300" />
          )}
        </CardWrapper>
        {item.badge && (
          <div className="absolute top-3 left-3 bg-forest text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {item.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <p className="text-xs text-forest font-medium tracking-[0.18em] uppercase mb-1">
            {item.location.area}, {item.location.destination}
          </p>
          {item.slug ? (
            <Link href={`/properties/${item.slug}`}>
              <h3 className="font-heading text-xl text-foreground leading-snug hover:text-forest transition-colors duration-200">
                {item.name}
              </h3>
            </Link>
          ) : (
            <h3 className="font-heading text-xl text-foreground leading-snug">{item.name}</h3>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            {item.bedrooms} BHK
          </span>
          <span className="text-stone-300">·</span>
          <span>{item.bathrooms} Baths</span>
          <span className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
            </svg>
            {item.guests} Guests
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>

        {/* CTA */}
        {item.slug ? (
          <Link
            href={`/properties/${item.slug}`}
            className="mt-1 inline-flex items-center justify-center gap-2 bg-forest text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#019aaa] transition-colors duration-200"
          >
            Book Now
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 bg-forest text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#019aaa] transition-colors duration-200"
          >
            Book Now
          </a>
        )}
      </div>
    </div>
  );
}

export default function FeaturedGrid() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white" id="featured">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-400 font-medium tracking-[0.25em] uppercase mb-3">
          Featured Properties
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-10">
          Handpicked Villas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED.map((item, i) => (
            <FeaturedCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
