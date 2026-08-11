"use client";

import { useState } from "react";

const RULES = [
  {
    title: "Check-In & Check-Out",
    content: "Check-in: 12:00 PM noon. Check-out: 10:00 AM. Early check-in or late check-out may be arranged subject to availability.",
  },
  {
    title: "No Smoking Inside Rooms",
    content: "Smoking is strictly prohibited inside the villa and all indoor areas. A designated outdoor smoking area is available.",
  },
  {
    title: "ID Proof Required",
    content: "All guests must carry a valid government-issued photo ID proof (Aadhaar, Passport, or Driving Licence) for verification at check-in.",
  },
  {
    title: "Payment Policy",
    content: "50% advance payment is required to confirm your booking. The remaining 50% is due on check-in. A refundable security deposit may apply.",
  },
  {
    title: "Cancellation Policy",
    content: "75% refund if the booking is cancelled 7 or more days before check-in. No refund for cancellations made within 7 days of the check-in date.",
  },
];

export default function HouseRulesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100">
      {RULES.map(({ title, content }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors duration-150"
          >
            <span className="text-sm font-medium text-foreground">{title}</span>
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
