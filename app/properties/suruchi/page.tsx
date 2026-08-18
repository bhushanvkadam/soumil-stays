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
const BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Suruchi%20LQ";
const TR = "?tr=w-1200,q-80,f-auto";

const HERO_IMAGE = `${BASE}/UEC44354.jpg${TR}`;

const ALL_IMAGES = [
  HERO_IMAGE,
  `${BASE}/DJI_20250227183504_0056_D.jpg${TR}`,
  `${BASE}/DJI_20250227094314_0015_D.jpg${TR}`,
  `${BASE}/UEC44563-HDR.jpg${TR}`,
  `${BASE}/UEC44305-HDR.jpg${TR}`,
  `${BASE}/DJI_20250227171036_0021_D.jpg${TR}`,
  `${BASE}/UEC44466.jpg${TR}`,
  `${BASE}/DJI_20250227183219_0051_D2.jpg${TR}`,
  `${BASE}/UEC44479-HDR.jpg${TR}`,
  `${BASE}/DJI_20250227183118_0047_D.jpg${TR}`,
  `${BASE}/UEC44365-HDR.jpg${TR}`,
  `${BASE}/UEC43961-HDR.jpg${TR}`,
  `${BASE}/DJI_20250227190821_0064_D.jpg${TR}`,
  `${BASE}/UEC43901-HDR.jpg${TR}`,
  `${BASE}/UEC44544-HDR.jpg${TR}`,
  `${BASE}/UEC44155-HDR.jpg${TR}`,
  `${BASE}/DJI_20250227171801_0028_D.jpg${TR}`,
  `${BASE}/DJI_20250227191307_0073_D.jpg${TR}`,
  `${BASE}/UEC44140-HDR.jpg${TR}`,
  `${BASE}/UEC44549.jpg${TR}`,
  `${BASE}/DJI_20250227183406_0053_D.jpg${TR}`,
  `${BASE}/DJI_20250227190745_0062_D.jpg${TR}`,
  `${BASE}/UEC44218-HDR.jpg${TR}`,
  `${BASE}/UEC43996-HDR.jpg${TR}`,
  `${BASE}/UEC44568-HDR.jpg${TR}`,
  `${BASE}/UEC44135-HDR.jpg${TR}`,
  `${BASE}/UEC44429-HDR.jpg${TR}`,
  `${BASE}/UEC44424-HDR.jpg${TR}`,
  `${BASE}/UEC44278-HDR.jpg${TR}`,
  `${BASE}/UEC44449-HDR.jpg${TR}`,
  `${BASE}/UEC44125-HDR.jpg${TR}`,
  `${BASE}/UEC43931-HDR.jpg${TR}`,
  `${BASE}/UEC44105-HDR.jpg${TR}`,
  `${BASE}/UEC44357-HDR.jpg${TR}`,
  `${BASE}/UEC44019-HDR.jpg${TR}`,
  `${BASE}/UEC44387.jpg${TR}`,
  `${BASE}/UEC44469-HDR.jpg${TR}`,
  `${BASE}/UEC44034-HDR.jpg${TR}`,
  `${BASE}/UEC44223-HDR.jpg${TR}`,
  `${BASE}/UEC44238-HDR.jpg${TR}`,
  `${BASE}/UEC43881-HDR.jpg${TR}`,
  `${BASE}/UEC43981-HDR.jpg${TR}`,
  `${BASE}/UEC43916-HDR.jpg${TR}`,
  `${BASE}/UEC44310-HDR.jpg${TR}`,
  `${BASE}/UEC44484-HDR.jpg${TR}`,
  `${BASE}/UEC44084-HDR.jpg${TR}`,
  `${BASE}/UEC44130-HDR.jpg${TR}`,
  `${BASE}/UEC44248-HDR.jpg${TR}`,
  `${BASE}/UEC43891-HDR.jpg${TR}`,
  `${BASE}/UEC44514-HDR.jpg${TR}`,
  `${BASE}/DJI_20250227190933_0067_D-2.jpg${TR}`,
  `${BASE}/UEC44458-HDR.jpg${TR}`,
  `${BASE}/UEC44258-HDR.jpg${TR}`,
  `${BASE}/UEC44273-HDR.jpg${TR}`,
  `${BASE}/UEC44504-HDR.jpg${TR}`,
  `${BASE}/UEC44437.jpg${TR}`,
  `${BASE}/UEC44315-HDR.jpg${TR}`,
  `${BASE}/UEC43936-HDR.jpg${TR}`,
];

// ─── What's Nearby ─────────────────────────────────────────────────────────────
const NEARBY = [
  { place: "Alibag Beach", distance: "3 km", time: "8 min drive" },
  { place: "Nagaon Beach", distance: "4 km", time: "10 min drive" },
  { place: "Varsoli Beach", distance: "3 km", time: "8 min drive" },
  { place: "Akshi Beach", distance: "3 km", time: "8 min drive" },
  { place: "Mandwa Jetty", distance: "20 km", time: "30 min drive" },
  { place: "Alibag Bus Stand", distance: "3 km", time: "8 min drive" },
];

// ─── Similar properties ────────────────────────────────────────────────────────
const SIMILAR = [
  {
    name: "Killa Villa",
    area: "Varsoli, Alibag",
    bedrooms: 3,
    pool: true,
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa/Screenshot%202026-06-01%20at%2008.07.47.png",
    href: "/properties/killa-villa",
  },
  {
    name: "Sea Lestine",
    area: "Varsoli, Alibag",
    bedrooms: 3,
    pool: true,
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Sea%20Lestine/Screenshot%202026-08-12%20at%2017.49.23.png",
    href: "/properties/sea-lestine",
  },
  {
    name: "Athaangg",
    area: "Thal, Alibag",
    bedrooms: 4,
    pool: true,
    image:
      "https://ik.imagekit.io/tnf/Soumil%20Stay/Athaang/Screenshot%202026-08-11%20at%2008.44.51.png",
    href: "/properties/athaangg",
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
export default function SuruchiPage() {
  const property = getPropertyBySlug("suruchi");

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
            <span className="text-foreground font-medium">Suruchi</span>
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
                Kurul, Alibag
              </div>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                Suruchi
              </h1>

              {/* Stat badges */}
              <div className="flex flex-wrap gap-3">
                <StatBadge
                  label="6 Bedrooms"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="7 Bathrooms"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M9 6a3 3 0 106 0v6H3v2a9 9 0 0018 0v-2h-6V6z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="18 Guests"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Pool — 25×55 ft"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Private Lawn"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M12 22V12M12 12C12 7 7 4 3 6M12 12c0-5 5-8 9-6" />
                    </svg>
                  }
                />
              </div>

              {/* Nearby quick line */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-400">
                {["3km from Alibag Beach", "4km from Nagaon Beach", "20km from Mandwa Jetty"].map((n) => (
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
                  src="https://maps.google.com/maps?q=Kurul,+Alibag,+Maharashtra+402209&z=15&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Suruchi location map"
                />
              </div>
              <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Alibag-Revadanda Rd, Kurul, Maharashtra 402209
                </p>
                <a
                  href="https://maps.google.com?q=Suruchi%20Villa%20by%20Soumil%27s%20Stays,%20lake,%20Alibag-Revadanda%20Rd,%20Kurul,%20Maharashtra%20402209&ftid=0x3be87bdbf2b0e9a3:0x614eff50252da149"
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

          {/* ── RIGHT COLUMN (sticky enquiry card) ───────────────────────────── */}
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
                      <Link href={href} className="text-xs text-gray-400 italic hover:text-forest transition-colors">
                        View Details
                      </Link>
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
      <StickyMobileBar />
      {property && <FAQChatbot property={property} nearbyItems={NEARBY} />}
    </>
  );
}
