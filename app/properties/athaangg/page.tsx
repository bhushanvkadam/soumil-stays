import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQChatbot from "@/components/FAQChatbot";
import GallerySection from "./GallerySection";
import EnquiryCard from "./EnquiryCard";
import StickyMobileBar from "./StickyMobileBar";
import QuickFactsCards from "./QuickFactsCards";
import PropertyTabs from "./PropertyTabs";
import { getPropertyBySlug } from "@/lib/properties";

// ─── Image URLs ────────────────────────────────────────────────────────────────
const BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Athaang";
const KV_BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa";
const AV_BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Aamrai%20Vista";

const HERO_IMAGE = `${BASE}/Screenshot%202026-08-11%20at%2008.44.51.png`;

const ALL_IMAGES = [
  `${BASE}/Screenshot%202026-08-11%20at%2008.44.51.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.44.59.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.45.55.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.29.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.03.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.45.17.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.45.37.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.45.47.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.02.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.11.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.18.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.37.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.46.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.46.53.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.01.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.19.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.28.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.37.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.45.png`,
  `${BASE}/Screenshot%202026-08-11%20at%2008.47.53.png`,
];

// ─── What's Nearby ─────────────────────────────────────────────────────────────
const NEARBY = [
  { place: "Thal Beach", distance: "250 m", time: "3 min walk" },
  { place: "Varsoli Beach", distance: "6.5 km", time: "18 min drive" },
  { place: "Alibag Bus Stand", distance: "6.5 km", time: "18 min drive" },
  { place: "Alibag Beach", distance: "7.5 km", time: "20 min drive" },
  { place: "Kihim Beach", distance: "8 km", time: "22 min drive" },
  { place: "Mandwa Jetty", distance: "15 km", time: "28 min drive" },
];

// ─── Similar properties ────────────────────────────────────────────────────────
const SIMILAR = [
  {
    name: "Aamrai Vista",
    area: "Varsoli, Alibag",
    bedrooms: 4,
    pool: true,
    image: `${AV_BASE}/Screenshot%202026-08-11%20at%2008.21.50.png`,
    href: "/properties/aamrai-vista",
  },
  {
    name: "Killa Villa",
    area: "Varsoli, Alibag",
    bedrooms: 3,
    pool: true,
    image: `${KV_BASE}/Screenshot%202026-06-01%20at%2008.10.26.png`,
    href: "/properties/killa-villa",
  },
  {
    name: "Sea Lestine",
    area: "Varsoli, Alibag",
    bedrooms: 3,
    pool: true,
    image: `${KV_BASE}/Screenshot%202026-06-01%20at%2008.11.14.png`,
    href: "#",
  },
];

// ─── Stat badge ───────────────────────────────────────────────────────────────
function StatBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 bg-[#01B9C5]/8 border border-[#01B9C5]/20 text-foreground text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-[#01B9C5]/15">
      <span className="text-forest flex-shrink-0">{icon}</span>
      {label}
    </span>
  );
}

// ─── Location pin icon ─────────────────────────────────────────────────────────
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AthaanggPage() {
  const property = getPropertyBySlug("athaangg");

  return (
    <>
      <Navbar variant="light" activeLink="Properties" />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-sans">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="#" className="hover:text-forest transition-colors">Alibag</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Athaangg</span>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <GallerySection heroImage={HERO_IMAGE} allImages={ALL_IMAGES} />

      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">

          {/* ── LEFT COLUMN ────────────────────────────────────────────────── */}
          <div className="flex flex-col pb-24 lg:pb-0">

            {/* Property header */}
            <div className="pb-6">
              <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Thal, Alibag
              </div>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                Athaangg
              </h1>

              {/* Stat badges */}
              <div className="flex flex-wrap gap-3">
                <StatBadge
                  label="4 Bedrooms"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="4 Bathrooms"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M9 6a3 3 0 106 0v6H3v2a9 9 0 0018 0v-2h-6V6z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="10 Guests"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Pool + Baby Pool"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
                    </svg>
                  }
                />
              </div>

              {/* Nearby quick line */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-400">
                {["250m from Thal Beach", "6.5km from Alibag Beach", "15km from Mandwa Jetty"].map((n) => (
                  <span key={n} className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts Cards */}
            <div className="pb-8">
              <QuickFactsCards />
            </div>

            {/* Content-switching tabs */}
            <PropertyTabs />

            {/* Location */}
            <div className="mt-10 pt-10 border-t border-stone-100">
              <h2 className="font-heading text-2xl text-foreground mb-4">Location</h2>
              <div className="rounded-2xl overflow-hidden border border-stone-200">
                <iframe
                  src="https://maps.google.com/maps?q=Thal+Beach,+Alibag,+Maharashtra&z=15&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Athaangg location map"
                />
              </div>
              <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Thal, Alibag, Maharashtra
                </p>
                <a
                  href="https://maps.app.goo.gl/5FMWTQABPFrt18KW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-forest text-forest rounded-lg px-4 py-2 text-sm font-medium hover:bg-forest hover:text-white transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* What's Nearby */}
            <div className="mt-10">
              <h2 className="font-heading text-2xl text-foreground mb-6">What&apos;s Nearby</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {NEARBY.map(({ place, distance, time }) => (
                  <div key={place} className="flex flex-col items-center text-center gap-2.5">
                    <div className="w-11 h-11 rounded-full bg-stone-100 flex items-center justify-center text-forest">
                      <PinIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-snug">{place}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {distance} &middot; {time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {/* ── END LEFT COLUMN ──────────────────────────────────────────────── */}

          {/* ── RIGHT COLUMN (sticky booking card) ───────────────────────────── */}
          <EnquiryCard />

        </div>
      </div>

      {/* More Villas in Alibag */}
      <section className="pt-16 pb-24 lg:pb-16 px-4 md:px-8 bg-[#F8F9FA] border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-foreground mb-1">More Villas in Alibag</h2>
          <p className="text-gray-400 text-sm mb-8">You might also love these</p>

          <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-hide">
            {SIMILAR.map(({ name, area, bedrooms, pool, image, href }) => {
              const waLink = `https://wa.me/919112385333?text=${encodeURIComponent(
                `Hi, I'm interested in ${name} (${area}). Could you share availability and pricing?`
              )}`;
              return (
                <div
                  key={name}
                  className="flex-shrink-0 w-[260px] sm:w-auto bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative aspect-video bg-stone-200 overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">{area}</p>
                    <h3 className="font-heading text-xl text-foreground mb-3">{name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-2 text-xs text-gray-500">
                        {bedrooms} Bedrooms
                        {pool && (
                          <>
                            <span className="text-stone-300">·</span>
                            <span className="flex items-center gap-1">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
                              </svg>
                              Pool
                            </span>
                          </>
                        )}
                      </span>
                      <span className="text-xs text-gray-400 italic">View Details</span>
                    </div>
                    <a
                      href={href === "#" ? waLink : href}
                      target={href === "#" ? "_blank" : undefined}
                      rel={href === "#" ? "noopener noreferrer" : undefined}
                      className="block w-full text-center border border-forest text-forest rounded-lg py-2.5 text-sm font-medium hover:bg-forest hover:text-white transition-colors duration-200"
                    >
                      View Property
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileBar />
      {property && <FAQChatbot property={property} nearbyItems={NEARBY} />}
    </>
  );
}
