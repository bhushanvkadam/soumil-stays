"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Is the pool heated?",
    answer:
      "The pool is not heated but is maintained at a comfortable temperature year-round. It is ideal for swimming from October through May.",
  },
  {
    question: "Is the caretaker available 24/7?",
    answer:
      "A caretaker is available on-site during the day and reachable by phone at all times. They assist with housekeeping, basic requests, and any issues during your stay.",
  },
  {
    question: "Can we bring pets?",
    answer: "Pets are not permitted at Killa Villa.",
  },
  {
    question: "Is the kitchen fully equipped?",
    answer:
      "The kitchen has a refrigerator, microwave, induction cooktop, and basic cookware. Guests are welcome to cook. Catering can be arranged on request.",
  },
  {
    question: "How far is the nearest hospital?",
    answer:
      "Alibag Civil Hospital is approximately 5 km away, about 15 minutes by car.",
  },
  {
    question: "Can we have a DJ or loud music?",
    answer:
      "Music is welcome until 10 PM. Out of respect for neighbours, loud music or DJs after 10 PM are not permitted.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100">
      {FAQS.map(({ question, answer }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors duration-150"
          >
            <span className="text-sm font-medium text-foreground">{question}</span>
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
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
