"use client";

import { useState } from "react";

const FAQS = [
  { question: "Is food available at the apartment?", answer: "The owner/caretaker can provide home-cooked, authentic local-style meals at extra charges. There is no obligation to order from the property — guests can order via Zomato/Swiggy or visit nearby restaurants." },
  { question: "Can we order food delivery?", answer: "Yes, Zomato and Swiggy deliveries work in Alibag. Multiple restaurants and local eateries are also accessible within a short walk or drive." },
  { question: "Is parking available?", answer: "Yes, open car parking is available on the premises." },
  { question: "How far is Alibag Beach?", answer: "Alibag Beach is approximately 1 km from Cherry — about a 5-minute drive or a short walk." },
  { question: "Can we bring pets?", answer: "Pets are not permitted at Cherry." },
  { question: "Is the kitchen equipped for cooking?", answer: "A basic kitchen setup is available with essential utensils for light cooking. Guests are welcome to use it." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100">
      {FAQS.map(({ question, answer }, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors duration-150">
            <span className="text-sm font-medium text-foreground">{question}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
          </button>
          {open === i && <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{answer}</div>}
        </div>
      ))}
    </div>
  );
}
