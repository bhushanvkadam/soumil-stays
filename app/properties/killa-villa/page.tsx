import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import GallerySection from "./GallerySection";
import EnquiryCard from "./EnquiryCard";
import GoodToKnow from "./GoodToKnow";
import AmenitiesSection from "./AmenitiesSection";
import StickyMobileBar from "./StickyMobileBar";

// ─── Image URLs ────────────────────────────────────────────────────────────────
const BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa";

const HERO_IMAGE =
  "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png";

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
const AMENITIES: string[] = [
  "3 AC Bedrooms",
  "AC Living Room",
  "Smart TV",
  "Wi-Fi",
  "Private Pool",
  "Lawn",
  "Outdoor Games",
  "Board Games",
  "Refrigerator",
  "Microwave",
  "Induction",
  "Dishes & Silverware",
  "5 Bathrooms",
  "Towels & Toiletries",
  "Power Backup",
  "Caretaker",
  "Private Parking",
  "24hr CCTV",
];

// ─── Pricing rows ──────────────────────────────────────────────────────────────
const PRICING = [
  { season: "Weekday (Mon – Thu)", rate: "Enquire", minStay: "1 Night" },
  { season: "Weekend (Fri – Sun)", rate: "Enquire", minStay: "2 Nights" },
  { season: "Peak (Dec 20 – Jan 5)", rate: "Enquire", minStay: "3 Nights" },
];

// ─── Guest Reviews ─────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    text: "Honestly one of the best villa stays we've had near Mumbai. The glass walls make the living room feel like you're outside, and the pool was perfect. Caretaker was incredibly helpful throughout.",
    reviewer: "Priya M.",
    date: "May 2025",
    rating: 5,
  },
  {
    text: "Great space for our group of 6. Everything was clean, well-maintained, and exactly as described. The location in Varsoli is quieter than Alibag town which we loved.",
    reviewer: "Rahul & Family",
    date: "March 2025",
    rating: 5,
  },
  {
    text: "Perfect weekend escape. Loved the pool and the open living area. Would have loved slightly better kitchen equipment but otherwise a fantastic stay.",
    reviewer: "Sneha K.",
    date: "April 2025",
    rating: 4,
  },
];

// ─── What's Nearby ─────────────────────────────────────────────────────────────
const NEARBY = [
  { place: "Varsoli Beach", distance: "1 km", time: "5 min walk" },
  { place: "Alibag Beach", distance: "3 km", time: "10 min drive" },
  { place: "Alibag Market", distance: "4 km", time: "12 min drive" },
  { place: "Mandva Jetty (Mumbai Ferry)", distance: "15 km", time: "25 min drive" },
  { place: "Kashid Beach", distance: "30 km", time: "45 min drive" },
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

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={s <= rating ? "#f59e0b" : "none"}
          stroke="#f59e0b"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
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

      {/* Hero + Thumbnails (lightbox built into GallerySection) */}
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
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4 leading-tight">
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

              {/* Nearby quick line */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-400">
                {["1km from Varsoli Beach", "3km from Alibag Beach", "15km from Mandva Jetty"].map((n) => (
                  <span key={n} className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    {n}
                  </span>
                ))}
              </div>

              {/* Editorial description */}
              <p className="text-gray-600 text-[15px] leading-relaxed mt-4">
                Wake up to stillness. At Killa Villa, mornings begin with light flooding through full-height glass walls, the pool glinting in the courtyard below, and nothing on the agenda but deciding where to have your coffee. This is a villa designed for people who want to feel genuinely away.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mt-3">
                Killa Villa is a modern 3BHK private villa in Varsoli, Alibag — featuring a double-sized living area, a private swimming pool, and warm interiors that invite you to slow down. With space for six guests and a caretaker on call, every detail of your stay is taken care of.
              </p>
            </div>

            <hr className="border-stone-100" />

            {/* Amenities */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-6">Amenities</h2>
              <AmenitiesSection amenities={AMENITIES} />
            </div>

            <hr className="border-stone-100" />

            {/* Guest Reviews */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">Guest Reviews</h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="font-heading text-5xl text-foreground leading-none">4.8</span>
                <div>
                  <Stars rating={5} size={16} />
                  <p className="text-xs text-gray-400 mt-1">Based on 24 stays</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {REVIEWS.map(({ text, reviewer, date, rating }) => (
                  <div
                    key={reviewer}
                    className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col gap-3"
                  >
                    <Stars rating={rating} />
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      &ldquo;{text}&rdquo;
                    </p>
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-foreground">
                        {reviewer}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Stayed {date} &middot; Killa Villa
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-stone-100" />

            {/* Seasonal Pricing */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Seasonal Pricing</h2>
              <div className="rounded-xl overflow-hidden border border-stone-200">
                <div className="bg-forest grid grid-cols-3 px-5 py-3">
                  {["Season / Day", "Rate (Per Night)", "Min. Stay"].map((h) => (
                    <span key={h} className="text-xs font-medium text-white/80 uppercase tracking-wider">
                      {h}
                    </span>
                  ))}
                </div>
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

            {/* Good to Know (House Rules + FAQ combined) */}
            <GoodToKnow />

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

            {/* What's Nearby */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-6">What&apos;s Nearby</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {NEARBY.map(({ place, distance, time }) => (
                  <div
                    key={place}
                    className="flex flex-col items-center text-center gap-2.5"
                  >
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
          {/* ── END LEFT ─────────────────────────────────────────────────────── */}

          {/* ── RIGHT (sticky booking card) ──────────────────────────────────── */}
          <EnquiryCard />

        </div>
      </div>

      {/* More Villas in Alibag */}
      <section className="pt-16 pb-24 lg:pb-16 px-4 md:px-8 bg-background border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-foreground mb-1">More Villas in Alibag</h2>
          <p className="text-gray-400 text-sm mb-8">You might also love these</p>

          {/* Horizontally scrollable on mobile, grid on sm+ */}
          <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-hide">
            {SIMILAR.map(({ name, area, bedrooms, pool, image }) => {
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
      <StickyMobileBar />
    </>
  );
}
