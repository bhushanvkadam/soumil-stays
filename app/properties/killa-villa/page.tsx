import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import GallerySection from "./GallerySection";
import EnquiryCard from "./EnquiryCard";
import HouseRulesAccordion from "./HouseRulesAccordion";

// ─── Image URLs ────────────────────────────────────────────────────────────────
const BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa";

const HERO_IMAGE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png";

const THUMBNAILS = [
  `${BASE}/Screenshot%202026-06-01%20at%2008.10.26.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.11.14.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.10.39.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.10.51.png`,
];

const ALL_IMAGES = [
  `${BASE}/HERO%20Screenshot%202026-06-01%20at%2008.07.35.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.08.27.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.09.04.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.08.50.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.09.37.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.09.18.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.10.16.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.10.06.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.11.35.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.07.47.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.08.00.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.08.13.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.08.38.png`,
  `${BASE}/Screenshot%202026-06-01%20at%2008.09.55.png`,
];

// ─── Amenities ─────────────────────────────────────────────────────────────────
interface Amenity {
  label: string;
  icon: ReactNode;
}

const AMENITIES: Amenity[] = [
  {
    label: "3 AC Bedrooms",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "AC Living Room",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v2" /><path d="M2 11v5a2 2 0 002 2h16a2 2 0 002-2v-5a2 2 0 00-4 0v1H6v-1a2 2 0 00-4 0z" />
      </svg>
    ),
  },
  {
    label: "Smart TV",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Wi-Fi",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 12.55a11 11 0 0114.08 0" /><path d="M1.42 9a16 16 0 0121.16 0" /><path d="M8.53 16.11a6 6 0 016.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Private Pool",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
      </svg>
    ),
  },
  {
    label: "Lawn",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2a10 10 0 000 20" /><path d="M12 2a10 10 0 010 20" /><path d="M2 12h20" /><path d="M12 2c-2.8 3.3-4 6.7-4 10s1.2 6.7 4 10" /><path d="M12 2c2.8 3.3 4 6.7 4 10s-1.2 6.7-4 10" />
      </svg>
    ),
  },
  {
    label: "Outdoor Games",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8l4 4-4 4-4-4 4-4z" />
      </svg>
    ),
  },
  {
    label: "Board Games",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Refrigerator",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M5 10h14" /><path d="M10 6v2M10 14v4" />
      </svg>
    ),
  },
  {
    label: "Microwave",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M17 10h.01M17 14h.01" /><rect x="5" y="9" width="8" height="6" rx="1" />
      </svg>
    ),
  },
  {
    label: "Induction",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2c-4 4-4 8 0 12 4-4 4-8 0-12z" /><path d="M5 20h14" /><circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    label: "Dishes & Silverware",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 00-5 5v6h3l-1 11" />
      </svg>
    ),
  },
  {
    label: "5 Bathrooms",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 6a3 3 0 106 0v6H3v2a9 9 0 0018 0v-2h-6V6z" />
      </svg>
    ),
  },
  {
    label: "Towels & Toiletries",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22V12M12 12H2l2-9h16l2 9H12z" />
      </svg>
    ),
  },
  {
    label: "Power Backup",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Caretaker",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Private Parking",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "24hr CCTV",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

// ─── Pricing rows ──────────────────────────────────────────────────────────────
const PRICING = [
  { season: "Weekday (Mon – Thu)", rate: "Enquire", minStay: "1 Night" },
  { season: "Weekend (Fri – Sun)", rate: "Enquire", minStay: "2 Nights" },
  { season: "Peak (Dec 20 – Jan 5)", rate: "Enquire", minStay: "3 Nights" },
];

// ─── Similar properties ────────────────────────────────────────────────────────
const SIMILAR = [
  {
    name: "Soumils 4.0",
    area: "Varsoli, Alibag",
    bedrooms: 3,
    pool: true,
    image: `${BASE}/Screenshot%202026-06-01%20at%2008.10.26.png`,
  },
  {
    name: "Aamrai Vista",
    area: "Varsoli, Alibag",
    bedrooms: 4,
    pool: true,
    image: `${BASE}/Screenshot%202026-06-01%20at%2008.11.14.png`,
  },
  {
    name: "Sea Lestine",
    area: "Varasoli, Alibag",
    bedrooms: 3,
    pool: true,
    image: `${BASE}/Screenshot%202026-06-01%20at%2008.10.39.png`,
  },
];

// ─── Stat badge ───────────────────────────────────────────────────────────────
function StatBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-stone-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
      {icon}
      {label}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KillaVillaPage() {
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
            <span className="text-foreground font-medium">Killa Villa</span>
          </nav>
        </div>
      </div>

      {/* Hero + Thumbnails */}
      <GallerySection
        heroImage={HERO_IMAGE}
        thumbnails={THUMBNAILS}
        allImages={ALL_IMAGES}
      />

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">

          {/* ── LEFT ────────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-10">

            {/* Property header */}
            <div>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Varsoli, Alibag
              </div>
              <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                Killa Villa
              </h1>

              {/* Stat badges */}
              <div className="flex flex-wrap gap-2">
                <StatBadge
                  label="3 Bedrooms"
                  icon={
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="5 Bathrooms"
                  icon={
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M9 6a3 3 0 106 0v6H3v2a9 9 0 0018 0v-2h-6V6z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="6 Guests"
                  icon={
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Private Pool"
                  icon={
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
                    </svg>
                  }
                />
              </div>

              {/* Nearby */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-400">
                {["1km from Varsoli Beach", "3km from Alibag Beach", "15km from Mandva Jetty"].map((n) => (
                  <span key={n} className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    {n}
                  </span>
                ))}
              </div>

              {/* Description — mt-4 keeps it tight to the nearby line */}
              <p className="text-gray-600 text-[15px] leading-relaxed mt-4">
                Killa Villa is a modern 3BHK private villa featuring a spacious double-sized living area designed for comfort and gatherings. Surrounded by full-height glass walls on three sides, the living room offers stunning views of the pool and lawn, filled with natural light and constant airflow. With stylish interiors and ample seating spaces, the villa creates a perfect setting for relaxed getaways with family and friends in a bright, open environment.
              </p>
            </div>

            <hr className="border-stone-100" />

            {/* Amenities */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {AMENITIES.map(({ label, icon }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2.5">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center text-forest">
                      {icon}
                    </div>
                    <span className="text-xs text-gray-500 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-stone-100" />

            {/* Seasonal Pricing */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Seasonal Pricing</h2>
              <div className="rounded-xl overflow-hidden border border-stone-200">
                {/* Table header */}
                <div className="bg-forest grid grid-cols-3 px-5 py-3">
                  {["Season / Day", "Rate (Per Night)", "Min. Stay"].map((h) => (
                    <span key={h} className="text-xs font-medium text-white/80 uppercase tracking-wider">
                      {h}
                    </span>
                  ))}
                </div>
                {/* Rows */}
                {PRICING.map(({ season, rate, minStay }, i) => (
                  <div
                    key={season}
                    className={`grid grid-cols-3 px-5 py-4 text-sm ${
                      i % 2 === 0 ? "bg-white" : "bg-stone-50"
                    }`}
                  >
                    <span className="text-foreground">{season}</span>
                    <span className="text-gray-500 italic">{rate}</span>
                    <span className="text-gray-500">{minStay}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-stone-100" />

            {/* House Rules */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">House Rules</h2>
              <HouseRulesAccordion />
            </div>

            <hr className="border-stone-100" />

            {/* Location */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Location</h2>
              <div className="rounded-2xl overflow-hidden border border-stone-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3771.5!2d72.8592901!3d18.6586991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Killa Villa location map"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Varsoli, Alibag, Maharashtra
              </p>
            </div>

          </div>
          {/* ── END LEFT ─────────────────────────────────────────────────────── */}

          {/* ── RIGHT (sticky enquiry card) ──────────────────────────────────── */}
          <EnquiryCard />

        </div>
      </div>

      {/* Similar Properties */}
      <section className="py-16 px-4 md:px-8 bg-background border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-foreground mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIMILAR.map(({ name, area, bedrooms, pool, image }) => {
              const waLink = `https://wa.me/919112385333?text=${encodeURIComponent(
                `Hi, I'm interested in ${name} (${area}). Could you share availability and pricing?`
              )}`;
              return (
                <div
                  key={name}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative aspect-video bg-stone-200 overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      <span className="text-xs text-gray-400 italic">Enquire for pricing</span>
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
            })}
          </div>
        </div>
      </section>

      <Footer />
      <StickyContact />
    </>
  );
}
