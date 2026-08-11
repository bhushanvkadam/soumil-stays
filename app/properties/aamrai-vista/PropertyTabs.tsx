"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import AmenitiesSection from "./AmenitiesSection";
import GoodToKnow from "./GoodToKnow";

// ─── Static data ───────────────────────────────────────────────────────────────
const AMENITIES: string[] = [
  "4 AC Bedrooms",
  "2 Ground Floor Bedrooms",
  "2 First Floor Bedrooms",
  "AC Living Room",
  "Smart TV",
  "Wi-Fi",
  "Private Pool (16×22 ft)",
  "Baby Pool Section",
  "Private Lawn",
  "Basic Kitchen",
  "Essential Utensils",
  "5 Bathrooms (4 Attached + 1 Common)",
  "Parking (up to 7 Cars)",
  "Caretaker Available",
  "Home-Cooked Meals (on request, extra charges)",
];

const PRICING = [
  { season: "Weekday (Mon – Thu)", rate: "Enquire", minStay: "1 Night" },
  { season: "Weekend (Fri – Sun)", rate: "Enquire", minStay: "2 Nights" },
  { season: "Peak (Dec 20 – Jan 5)", rate: "Enquire", minStay: "3 Nights" },
];

const REVIEWS = [
  {
    text: "Great family villa — the baby pool section was a big hit with the kids, and being so close to Varsoli Beach made it very convenient. Clean, spacious, and well-maintained throughout.",
    reviewer: "Priya & Family",
    date: "July 2026",
    rating: 5,
    guests: 8,
    nights: 2,
  },
  {
    text: "Perfect weekend escape for our group of 10. Four bedrooms meant everyone had their own space, and the caretaker was very helpful. Pool and lawn area are lovely for evenings.",
    reviewer: "Rahul S.",
    date: "June 2026",
    rating: 5,
    guests: 10,
    nights: 3,
  },
  {
    text: "Loved the location — 250m to the beach is genuinely walkable. The pool is a good size. Kitchen is basic but functional for light cooking. Would recommend for families.",
    reviewer: "Anita M.",
    date: "August 2026",
    rating: 4,
    guests: 6,
    nights: 2,
  },
];

interface CategoryRating {
  label: string;
  score: number;
  icon: ReactNode;
}

const CATEGORY_RATINGS: CategoryRating[] = [
  {
    label: "Staff",
    score: 4.9,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Cleanliness",
    score: 4.8,
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
    label: "Value",
    score: 4.7,
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
          Aamrai Vista is just 250 metres from Varsoli Beach — a genuine 3-minute stroll. The 16×22 ft
          private pool with a dedicated baby pool section makes it the ideal choice for families,
          while 4 bedrooms spread across two floors give every guest their own space.
        </p>
      </div>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        Wake up to the sound of the coast at Aamrai Vista. Mornings here begin with the pool glinting
        in the sun and the beach just a short walk away. Whether you&apos;re planning a family holiday or
        a group retreat, this villa offers the perfect balance of space and comfort.
      </p>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        Aamrai Vista is a modern 4-bedroom private villa in Varsoli, Alibag — featuring a spacious
        living room with TV, a 16×22 ft pool with a separate baby pool section, a connected private
        lawn, and parking for up to 7 cars. A caretaker is available on request, and home-cooked
        local-style meals can be arranged at extra charges.
      </p>
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
      <div className="flex items-center gap-3">
        <span className="font-heading text-5xl text-foreground leading-none">4.8</span>
        <div>
          <Stars rating={5} size={16} />
          <p className="text-xs text-gray-400 mt-1">Based on 18 stays</p>
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
              <p className="text-xs text-gray-400 mt-0.5">Aamrai Vista</p>
            </div>
          </div>
        ))}
      </div>
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
