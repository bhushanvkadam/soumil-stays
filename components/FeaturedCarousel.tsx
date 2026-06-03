"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = "919112385333";
const SLIDE_INTERVAL = 5000;

interface FeaturedItem {
  id: number;
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
    id: 1,
    name: "Suruchi",
    location: { area: "Kurul", destination: "Alibag" },
    bedrooms: 6,
    bathrooms: 7,
    guests: 18,
    badge: "Editor's Pick",
    description:
      "A sprawling six-bedroom estate sitting right on the lake's edge at Kurul. Uninterrupted water views from every common space, a private pool, and capacity for eighteen guests — the definitive venue for milestone celebrations.",
    image: null,
  },
  {
    id: 2,
    slug: "killa-villa",
    name: "Killa Villa",
    location: { area: "Varsoli", destination: "Alibag" },
    bedrooms: 3,
    bathrooms: 5,
    guests: 6,
    description:
      "A modern villa wrapped in full-height glass walls with direct views of the pool and lawn. Warm interiors, natural light throughout, and a private pool — ideal for a weekend reset with family or close friends.",
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png",
  },
  {
    id: 3,
    name: "Aamrai Vista",
    location: { area: "Varsoli", destination: "Alibag" },
    bedrooms: 4,
    bathrooms: 4,
    guests: 10,
    description:
      "Set amid mango groves with open countryside views, Aamrai Vista is a generous four-bedroom retreat perfect for large groups seeking space, quiet, and a private pool.",
    image: null,
  },
  {
    id: 4,
    name: "The Olive House",
    location: { area: "Dapoli", destination: "Dapoli" },
    bedrooms: 3,
    bathrooms: 3,
    guests: 8,
    description:
      "Tucked into the coastal hills of Dapoli, The Olive House offers a rare combination of sea breeze, lush surroundings, and total privacy — a slower, quieter kind of escape.",
    image: null,
  },
];

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const advance = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + FEATURED.length) % FEATURED.length);
    setResetKey((k) => k + 1);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % FEATURED.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, resetKey]);

  return (
    <section className="py-20 px-4 md:px-8 bg-white" id="featured">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-400 font-medium tracking-[0.25em] uppercase mb-8">
          Featured Properties
        </p>

        {/* Carousel */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-sm min-h-[560px] lg:min-h-[520px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {FEATURED.map((p, i) => {
            const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              `Hi, I'm interested in ${p.name} (${p.location.area}, ${p.location.destination}). Could you share availability and pricing?`
            )}`;
            const propertyHref = p.slug ? `/properties/${p.slug}` : null;

            return (
              <div
                key={p.id}
                aria-hidden={i !== current}
                className={`absolute inset-0 flex flex-col lg:flex-row transition-opacity duration-700 ease-in-out ${
                  i === current
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Image — left 60% on desktop */}
                {propertyHref ? (
                  <Link
                    href={propertyHref}
                    className="relative h-56 md:h-72 lg:h-full lg:w-[60%] flex-shrink-0 bg-stone-300 block overflow-hidden"
                    tabIndex={i !== current ? -1 : undefined}
                  >
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover hover:scale-[1.02] transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={i === 0}
                      />
                    )}
                    {p.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-forest text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {p.badge}
                      </div>
                    )}
                  </Link>
                ) : (
                  <div className="relative h-56 md:h-72 lg:h-full lg:w-[60%] flex-shrink-0 bg-stone-300 overflow-hidden">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={i === 0}
                      />
                    )}
                    {p.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-forest text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {p.badge}
                      </div>
                    )}
                  </div>
                )}

                {/* Details — right 40% on desktop */}
                <div className="flex-1 bg-white px-8 py-8 lg:py-0 flex flex-col justify-center overflow-y-auto">
                  <span className="text-xs text-forest font-medium tracking-[0.2em] uppercase mb-3">
                    {p.location.area}, {p.location.destination}
                  </span>

                  {propertyHref ? (
                    <Link href={propertyHref} tabIndex={i !== current ? -1 : undefined}>
                      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4 leading-tight hover:text-forest transition-colors duration-200">
                        {p.name}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                      {p.name}
                    </h2>
                  )}

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-5 flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      {p.bedrooms} BHK
                    </span>
                    <span className="text-stone-300">·</span>
                    <span>{p.bathrooms} Baths</span>
                    <span className="text-stone-300">·</span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      {p.guests} Guests
                    </span>
                  </div>

                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                    {p.description}
                  </p>

                  {propertyHref ? (
                    <Link
                      href={propertyHref}
                      tabIndex={i !== current ? -1 : undefined}
                      className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#15352a] transition-colors self-start"
                    >
                      View Property
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i !== current ? -1 : undefined}
                      className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#15352a] transition-colors self-start"
                    >
                      Check Availability
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {/* Arrows — positioned within image area only */}
          <button
            onClick={() => advance(-1)}
            aria-label="Previous property"
            className="absolute left-4 top-[112px] md:top-[144px] lg:top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-foreground transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => advance(1)}
            aria-label="Next property"
            className="absolute right-4 lg:right-[calc(40%+1rem)] top-[112px] md:top-[144px] lg:top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-foreground transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {FEATURED.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-forest"
                  : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
