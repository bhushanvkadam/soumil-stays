"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import AmenitiesSection from "./AmenitiesSection";
import GoodToKnow from "./GoodToKnow";

// ─── Static data ───────────────────────────────────────────────────────────────
const AMENITIES: string[] = [
  "2 AC Bedrooms",
  "1 Bedroom on Ground Floor",
  "1 Bedroom on First Floor",
  "Attached Washrooms",
  "Spacious Living Area",
  "Two Large Terraces",
  "Panoramic Mountain Views",
  "Private Pool",
  "Basic Kitchen",
  "Induction Cooktop",
  "Essential Utensils",
  "Gated Community (New Matheran)",
  "Seasonal Waterfalls Nearby",
];

const PRICING = [
  { season: "Weekday (Mon – Thu)", rate: "Enquire", minStay: "1 Night" },
  { season: "Weekend (Fri – Sun)", rate: "Enquire", minStay: "2 Nights" },
  { season: "Peak (Dec 20 – Jan 5)", rate: "Enquire", minStay: "3 Nights" },
];

const REVIEWS: {
  text: string;
  reviewer: string;
  date: string;
  rating: number;
  guests: number;
  nights: number;
}[] = [];

interface CategoryRating {
  label: string;
  score: number;
  icon: ReactNode;
}

const CATEGORY_RATINGS: CategoryRating[] = [
  {
    label: "Cleanliness",
    score: 5.0,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Location",
    score: 5.0,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Views",
    score: 5.0,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Value",
    score: 4.8,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
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

// ─── Tab content panels ────────────────────────────────────────────────────────
function AboutContent() {
  return (
    <div className="py-8 flex flex-col gap-5">
      <div className="border-l-4 border-forest bg-[#01B9C5]/5 rounded-r-xl p-5">
        <h3 className="font-heading text-base text-foreground mb-2">
          What Makes This Place Special
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Parvata Vista sits inside the New Matheran gated community, surrounded by the
          Sahyadri mountains. A private pool with no fixed usage-time restrictions and two
          large terraces with panoramic views make this the ideal escape for those who want
          to be completely away — swimming under the stars, waking up to mountain mist, and
          nothing else demanding their time.
        </p>
      </div>

      {/* Pool tile — only this, no lawn tile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-start gap-4 p-5 bg-[#F8F9FA] rounded-xl border border-stone-200">
          <div className="w-10 h-10 rounded-full bg-[#01B9C5]/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M2 12h20M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Private Pool</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              No fixed usage-time restrictions — guests can swim at their leisure, any time
              of day.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-[#F8F9FA] rounded-xl border border-stone-200">
          <div className="w-10 h-10 rounded-full bg-[#01B9C5]/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 9h20" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Two Large Terraces</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Panoramic mountain views from both terraces — ideal for morning tea,
              stargazing, or simply sitting still.
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-[15px] leading-relaxed">
        Parvata Vista is a two-bedroom villa inside the New Matheran gated community,
        Karjat. One bedroom is on the Ground Floor and one on the First Floor — both
        air-conditioned with attached washrooms. A spacious living area and a basic kitchen
        with an induction cooktop and essential utensils make it a comfortable base for
        small groups.
      </p>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        The surrounding landscape is the true draw: Sahyadri peaks in every direction,
        seasonal waterfalls within reach, and the Bhimashankar Temple trek accessible on
        foot in two to three hours. Parvata Vista is secluded enough to feel genuinely off
        the grid, yet inside a well-maintained gated community.
      </p>

      {/* Food advisory — prominent, not buried */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-amber-900 mb-1">Please carry groceries before arriving</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            This is a remote, secluded property surrounded by mountains. A local cook can
            prepare simple home-style meals at an additional charge, but food must be
            pre-arranged in advance — details of the cook are shared after booking is
            confirmed. The nearest restaurants are about 18 km away, with a Chinese food
            outlet roughly 7 km out.{" "}
            <strong>Guests are strongly advised to carry groceries, snacks, and essentials
            before arrival.</strong>
          </p>
        </div>
      </div>

      {/* Location highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {[
          { icon: "🏔️", label: "New Matheran gated community" },
          { icon: "💧", label: "Seasonal waterfalls nearby" },
          { icon: "🛕", label: "Bhimashankar Temple trek (2–3 hrs)" },
          { icon: "🌿", label: "Ideal for nature lovers" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl">
            <span className="text-xl flex-shrink-0">{icon}</span>
            <span className="text-sm text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AmenitiesContent() {
  return (
    <div className="py-8">
      <AmenitiesSection amenities={AMENITIES} />
    </div>
  );
}

function GoodToKnowContent() {
  return (
    <div className="py-8 flex flex-col gap-10">
      <GoodToKnow />
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
              className={`grid grid-cols-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
            >
              <span className="text-foreground">{season}</span>
              <span className="text-gray-500 italic">{rate}</span>
              <span className="text-gray-500">{minStay}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewsContent() {
  return (
    <div className="py-8 flex flex-col gap-6">
      {REVIEWS.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-gray-300">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <p className="text-sm font-medium text-foreground">Reviews coming soon</p>
          <p className="text-xs text-gray-400">Be among the first to stay at Parvata Vista and share your experience.</p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <span className="font-heading text-5xl text-foreground leading-none">5.0</span>
            <div>
              <Stars rating={5} size={16} />
              <p className="text-xs text-gray-400 mt-1">Based on recent stays</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 p-5 bg-[#F8F9FA] rounded-xl">
            {CATEGORY_RATINGS.map(({ label, score, icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#01B9C5]/10 flex items-center justify-center text-forest">
                  {icon}
                </div>
                <span className="font-heading text-lg text-foreground leading-none">{score}</span>
                <span className="text-xs text-gray-400">{label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {REVIEWS.map(({ text, reviewer, date, rating, guests, nights }) => (
              <div
                key={reviewer}
                className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col gap-3"
              >
                <Stars rating={rating} />
                <p className="text-xs text-gray-400">
                  {guests} guests &middot; {nights} nights &middot; {date}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs font-medium tracking-widest uppercase text-foreground">
                    {reviewer}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Parvata Vista</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
type TabId = "about" | "amenities" | "good-to-know" | "reviews";

const TABS: { label: string; id: TabId }[] = [
  { label: "About", id: "about" },
  { label: "Amenities", id: "amenities" },
  { label: "Good to Know", id: "good-to-know" },
  { label: "Reviews", id: "reviews" },
];

export default function PropertyTabs() {
  const [active, setActive] = useState<TabId>("about");

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-[65px] z-10 bg-white border-b border-stone-100 shadow-sm -mx-4 md:-mx-8 lg:mx-0">
        <div className="relative px-4 md:px-8 lg:px-0">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {TABS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex-shrink-0 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-200 ${
                  active === id
                    ? "border-forest text-forest"
                    : "border-transparent text-gray-500 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent lg:hidden" />
        </div>
      </div>

      {/* Tab content */}
      <div className="min-h-[280px]">
        {active === "about" && <AboutContent />}
        {active === "amenities" && <AmenitiesContent />}
        {active === "good-to-know" && <GoodToKnowContent />}
        {active === "reviews" && <ReviewsContent />}
      </div>
    </div>
  );
}
