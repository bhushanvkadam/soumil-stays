"use client";

import { useState } from "react";

const RULES = [
  {
    heading: "Check-In & Check-Out",
    content:
      "Check-in: 12:00 PM noon. Check-out: 10:00 AM. Early check-in or late check-out may be arranged subject to availability.",
  },
  {
    heading: "No Smoking Inside Rooms",
    content:
      "Smoking is strictly prohibited inside the villa and all indoor areas. A designated outdoor smoking area is available.",
  },
  {
    heading: "ID Proof Required",
    content:
      "All guests must carry a valid government-issued photo ID proof (Aadhaar, Passport, or Driving Licence) for verification at check-in.",
  },
  {
    heading: "Payment Policy",
    content:
      "50% advance payment is required to confirm your booking. The remaining 50% is due on check-in. A refundable security deposit may apply.",
  },
  {
    heading: "Cancellation Policy",
    content:
      "75% refund if the booking is cancelled 7 or more days before check-in. No refund for cancellations made within 7 days of the check-in date.",
  },
];

const FAQS = [
  {
    heading: "Is the pool heated?",
    content:
      "The pool is not heated but is maintained at a comfortable temperature year-round. It is ideal for swimming from October through May.",
  },
  {
    heading: "Is the caretaker available 24/7?",
    content:
      "A caretaker is available on-site during the day and reachable by phone at all times. They assist with housekeeping, basic requests, and any issues during your stay.",
  },
  {
    heading: "Can we bring pets?",
    content: "Pets are not permitted at Killa Villa.",
  },
  {
    heading: "Is the kitchen fully equipped?",
    content:
      "The kitchen has a refrigerator, microwave, induction cooktop, and basic cookware. Guests are welcome to cook. Catering can be arranged on request.",
  },
  {
    heading: "How far is the nearest hospital?",
    content:
      "Alibag Civil Hospital is approximately 5 km away, about 15 minutes by car.",
  },
  {
    heading: "Can we have a DJ or loud music?",
    content:
      "Music is welcome until 10 PM. Out of respect for neighbours, loud music or DJs after 10 PM are not permitted.",
  },
];

type Tab = "rules" | "faq";

function Accordion({ items }: { items: { heading: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100">
      {items.map(({ heading, content }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors duration-150 min-h-[52px]"
          >
            <span className="text-sm font-medium text-foreground pr-4">{heading}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
              {content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GoodToKnow() {
  const [tab, setTab] = useState<Tab>("rules");

  return (
    <div>
      <h2 className="font-heading text-2xl text-foreground mb-6">Good to Know</h2>

      {/* Tab bar */}
      <div className="flex border-b border-stone-200 mb-6 w-full">
        {(["rules", "faq"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 sm:flex-none pb-3 px-4 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px text-center sm:text-left ${
              tab === t
                ? "border-[#1B4332] text-[#1B4332]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {t === "rules" ? "House Rules" : "FAQ"}
          </button>
        ))}
      </div>

      {tab === "rules" ? <Accordion items={RULES} /> : <Accordion items={FAQS} />}
    </div>
  );
}
