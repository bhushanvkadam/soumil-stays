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
const BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Parvata%20Vista%20LQ";
const TR = "?tr=w-1200,q-80,f-auto";

const HERO_IMAGE = `${BASE}/DJI_20250729143745_0127_D%20copy.jpg${TR}`;

const ALL_IMAGES = [
  `${BASE}/DJI_20250729143745_0127_D%20copy.jpg${TR}`,
  `${BASE}/DJI_20250729143745_0127_D.jpg${TR}`,
  `${BASE}/DJI_20250729094940_0100_D%20copy.jpg${TR}`,
  `${BASE}/DJI_20250729144923_0139_D.jpg${TR}`,
  `${BASE}/DJI_20250729144122_0132_D.jpg${TR}`,
  `${BASE}/_M020571-HDR%20copy.jpg${TR}`,
  `${BASE}/_M020576-HDR.jpg${TR}`,
  `${BASE}/_M020626-HDR%20copy.jpg${TR}`,
  `${BASE}/DJI_20250729084748_0087_D.jpg${TR}`,
  `${BASE}/_M020591-HDR-2.jpg${TR}`,
  `${BASE}/_M020723-HDR.jpg${TR}`,
  `${BASE}/_M020546-HDR.jpg${TR}`,
  `${BASE}/_M020596-HDR.jpg${TR}`,
  `${BASE}/_M020541-HDR.jpg${TR}`,
  `${BASE}/_M020653-HDR.jpg${TR}`,
  `${BASE}/_M020648-HDR.jpg${TR}`,
  `${BASE}/_M020693-HDR.jpg${TR}`,
  `${BASE}/_M020678-HDR%20copy.jpg${TR}`,
  `${BASE}/_M020663-HDR%20copy.jpg${TR}`,
  `${BASE}/_M020703-HDR.jpg${TR}`,
  `${BASE}/_M020531-HDR.jpg${TR}`,
  `${BASE}/_M020698-HDR.jpg${TR}`,
  `${BASE}/_M020643-HDR.jpg${TR}`,
  `${BASE}/_M020551-HDR.jpg${TR}`,
  `${BASE}/_M020621-HDR%20copy.jpg${TR}`,
  `${BASE}/_M020556-HDR.jpg${TR}`,
  `${BASE}/_M020720.jpg${TR}`,
  `${BASE}/_M020611-HDR%20copy.jpg${TR}`,
];

// ─── Nearby ────────────────────────────────────────────────────────────────────
const NEARBY = [
  { place: "Chinese Food Outlet", distance: "7 km", time: "~15 min drive" },
  { place: "Nearest Restaurants", distance: "18 km", time: "~30 min drive" },
  { place: "Bhimashankar Temple Trek", distance: "2–3 hrs", time: "On foot" },
  { place: "Seasonal Waterfalls", distance: "Nearby", time: "Seasonal" },
];

// ─── Similar properties ────────────────────────────────────────────────────────
const KV_BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Soumil%20Stay%20Killa";
const ATH_BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Athaang";
const AV_BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Aamrai%20Vista";

const SIMILAR = [
  {
    name: "Killa Villa",
    area: "Varsoli, Alibag",
    bedrooms: 3,
    pool: true,
    image: `${KV_BASE}/Screenshot%202026-06-01%20at%2008.10.26.png`,
    href: "/properties/killa-villa",
  },
  {
    name: "Athaangg",
    area: "Thal, Alibag",
    bedrooms: 4,
    pool: true,
    image: `${ATH_BASE}/Screenshot%202026-08-11%20at%2008.44.51.png`,
    href: "/properties/athaangg",
  },
  {
    name: "Aamrai Vista",
    area: "Varsoli, Alibag",
    bedrooms: 4,
    pool: true,
    image: `${AV_BASE}/Screenshot%202026-08-11%20at%2008.21.50.png`,
    href: "/properties/aamrai-vista",
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
export default function ParvataVistaPage() {
  const property = getPropertyBySlug("parvata-vista");

  return (
    <>
      <Navbar variant="light" activeLink="Properties" />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-sans">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="#" className="hover:text-forest transition-colors">Karjat</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Parvata Vista</span>
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
                New Matheran, Karjat
              </div>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                Parvata Vista
              </h1>

              {/* Stat badges */}
              <div className="flex flex-wrap gap-3">
                <StatBadge
                  label="2 Bedrooms"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  }
                />
                <StatBadge
                  label="2 Bathrooms"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" /><path d="M6 12V5a2 2 0 012-2h3v2.25" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Private Pool"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Two Terraces"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 9h20" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Mountain Views"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M3 20l5-10 4 6 3-4 6 8H3z" />
                    </svg>
                  }
                />
              </div>

              {/* Nearby quick line */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-400">
                {["New Matheran gated community", "~80 km from Mumbai", "Bhimashankar trek nearby"].map((n) => (
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
                  src="https://maps.google.com/maps?q=New+Matheran+Karjat+Maharashtra&z=14&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Parvata Vista location map"
                />
              </div>
              <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  New Matheran, Karjat, Maharashtra
                </p>
                <a
                  href="https://maps.app.goo.gl/RcL7L4eLTmZtQtZT9?g_st=ic"
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* More Properties by Soumil's Stays */}
      <section className="pt-16 pb-24 lg:pb-16 px-4 md:px-8 bg-[#F8F9FA] border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-foreground mb-1">More Properties by Soumil&apos;s Stays</h2>
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
                      <Link href={href} className="text-xs text-gray-400 italic hover:text-forest transition-colors">View Details</Link>
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
