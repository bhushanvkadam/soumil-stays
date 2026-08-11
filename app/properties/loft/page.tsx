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
const BASE = "https://ik.imagekit.io/tnf/Soumil%20Stay/Loft%20(Dapoli)";

const HERO_IMAGE = `${BASE}/_M027224-HDR.jpg`;

const ALL_IMAGES = [
  `${BASE}/_M027224-HDR.jpg`,
  `${BASE}/_M027101-HDR.jpg`,
  `${BASE}/_M027156-HDR.jpg`,
  `${BASE}/_M027276-HDR.jpg`,
  `${BASE}/_M027296-HDR.jpg`,
  `${BASE}/_M027021-HDR.jpg`,
  `${BASE}/_M026956-HDR.jpg`,
  `${BASE}/_M027131-HDR.jpg`,
  `${BASE}/_M027257.jpg`,
  `${BASE}/_M027053.jpg`,
  `${BASE}/_M027286-HDR.jpg`,
  `${BASE}/_M027061-HDR.jpg`,
  `${BASE}/_M027046-HDR.jpg`,
  `${BASE}/_M027266-HDR.jpg`,
  `${BASE}/_M027116-HDR.jpg`,
  `${BASE}/_M027031-HDR.jpg`,
  `${BASE}/_M027188-2.jpg`,
  `${BASE}/_M027176-HDR.jpg`,
  `${BASE}/_M027192.jpg`,
  `${BASE}/_M027239-HDR.jpg`,
  `${BASE}/_M027011-HDR.jpg`,
  `${BASE}/_M027234-HDR.jpg`,
  `${BASE}/_M027096-HDR.jpg`,
  `${BASE}/_M027086-HDR.jpg`,
  `${BASE}/_M026976-HDR.jpg`,
  `${BASE}/_M027191.jpg`,
  `${BASE}/_M027001-HDR.jpg`,
  `${BASE}/_M027209-HDR.jpg`,
  `${BASE}/_M027183.jpg`,
  `${BASE}/_M027078.jpg`,
  `${BASE}/_M027166-HDR.jpg`,
  `${BASE}/_M027166-HDR-2.jpg`,
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
export default function LoftPage() {
  const property = getPropertyBySlug("loft");

  return (
    <>
      <Navbar variant="light" activeLink="Properties" />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-sans">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="#" className="hover:text-forest transition-colors">Dapoli</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Loft</span>
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
                Kolthare, Dapoli
              </div>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                Loft
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
                  label="Sea View"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Fully Air-Conditioned"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                    </svg>
                  }
                />
                <StatBadge
                  label="Power Backup"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  }
                />
              </div>

              {/* Nearby quick line — structural placeholder, details TBD */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-400">
                {["Kolthare, Dapoli", "~215 km from Mumbai"].map((n) => (
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
                  src="https://maps.google.com/maps?q=Kolthare+Beach,+Dapoli,+Maharashtra&z=15&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Loft location map"
                />
              </div>
              <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Kolthare, Dapoli, Maharashtra
                </p>
                <a
                  href="https://maps.app.goo.gl/aLUiw4FfqqSeqQnD8?g_st=ic"
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

            {/* What's Nearby — structural placeholder, details TBD */}
            <div className="mt-10">
              <h2 className="font-heading text-2xl text-foreground mb-6">What&apos;s Nearby</h2>
              <div className="flex flex-col items-center justify-center py-10 text-center gap-3 border border-dashed border-stone-200 rounded-2xl">
                <div className="w-11 h-11 rounded-full bg-stone-100 flex items-center justify-center text-gray-300">
                  <PinIcon />
                </div>
                <p className="text-sm text-gray-400">Nearby details coming soon.</p>
                <p className="text-xs text-gray-300">Ask us when you enquire — we&apos;ll share what&apos;s around Kolthare.</p>
              </div>
            </div>

          </div>
          {/* ── END LEFT COLUMN ──────────────────────────────────────────────── */}

          {/* ── RIGHT COLUMN (sticky booking card) ───────────────────────────── */}
          <EnquiryCard />

        </div>
      </div>

      {/* More Properties */}
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
      {property && <FAQChatbot property={property} nearbyItems={[]} />}
    </>
  );
}
