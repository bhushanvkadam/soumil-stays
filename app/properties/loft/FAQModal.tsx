"use client";

import { useCallback, useEffect, useState } from "react";

type Category = "stay" | "bookings" | "rules";

interface FAQItem {
  q: string;
  a: string;
  category: Category;
}

const FAQS: FAQItem[] = [
  // Stay & Rooms
  {
    q: "Is there food service or cooking at the property?",
    a: "Loft does not offer in-house meals, catering, or caretaker-cooked food. A restaurant approximately 1 km from the property provides a full menu. Guests coordinate directly with the restaurant for their meals.",
    category: "stay",
  },
  {
    q: "Is there power backup?",
    a: "Yes, Loft has both an inverter and a generator backup, ensuring uninterrupted power supply throughout your stay.",
    category: "stay",
  },
  {
    q: "Is the villa air-conditioned?",
    a: "Yes, all bedrooms and the living area are fully air-conditioned.",
    category: "stay",
  },
  {
    q: "Is there a pool at the property?",
    a: "No, Loft does not have a pool. It is a peaceful retreat focused on scenic relaxation and sea views.",
    category: "stay",
  },
  {
    q: "Can we bring pets?",
    a: "Pets are not permitted at Loft.",
    category: "stay",
  },
  {
    q: "Is parking available?",
    a: "Parking details are to be confirmed — please ask us when you enquire.",
    category: "stay",
  },
  // Bookings & Payment
  {
    q: "How do I confirm my booking?",
    a: "Send us a message on WhatsApp with your preferred dates and group size. We will confirm availability and share the booking details. A 50% advance payment secures your reservation.",
    category: "bookings",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bank transfers (NEFT/IMPS), UPI, and cash. A payment confirmation is shared within 24 hours of receipt.",
    category: "bookings",
  },
  {
    q: "What is the cancellation policy?",
    a: "75% refund if cancelled 7 or more days before check-in. No refund for cancellations made within 7 days of the check-in date. We recommend travel insurance for added peace of mind.",
    category: "bookings",
  },
  // House Rules
  {
    q: "Can we have a DJ or loud music?",
    a: "Music is welcome until 10 PM. Out of respect for neighbours, loud music or DJs after 10 PM are not permitted.",
    category: "rules",
  },
  {
    q: "Are outside guests or day visitors allowed?",
    a: "Only registered guests may use the villa facilities. Day visitors are not permitted without prior approval.",
    category: "rules",
  },
  {
    q: "Is smoking allowed on the property?",
    a: "Smoking is strictly prohibited inside the villa and all indoor areas. A designated outdoor area is available.",
    category: "rules",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "stay", label: "Stay & Rooms" },
  { id: "bookings", label: "Bookings & Payment" },
  { id: "rules", label: "House Rules" },
];

const WA_LINK = "https://wa.me/919112385333";

export default function FAQModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [category, setCategory] = useState<Category>("stay");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    onClose();
    setSearch("");
    setOpenIndex(null);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const filtered = search
    ? FAQS.filter(
        (f) =>
          f.q.toLowerCase().includes(search.toLowerCase()) ||
          f.a.toLowerCase().includes(search.toLowerCase())
      )
    : FAQS.filter((f) => f.category === category);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <h2 className="font-heading text-2xl text-foreground">FAQs</h2>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full hover:bg-stone-100 flex items-center justify-center text-gray-400 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pb-4 flex-shrink-0">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(null);
              }}
              className="w-full border border-stone-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-forest"
            />
          </div>
        </div>

        {/* Category tabs */}
        {!search && (
          <div className="flex border-b border-stone-100 px-6 flex-shrink-0">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  setCategory(id);
                  setOpenIndex(null);
                }}
                className={`flex-shrink-0 pb-3 px-3 text-sm font-medium border-b-2 -mb-px whitespace-nowrap transition-colors duration-200 ${
                  category === id
                    ? "border-forest text-forest"
                    : "border-transparent text-gray-400 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ list */}
        <div className="flex-1 overflow-y-auto px-6 py-2">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-10">
              No FAQs match your search.
            </p>
          ) : (
            <div className="divide-y divide-stone-100">
              {filtered.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-foreground pr-4">
                      {faq.q}
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openIndex === i && (
                    <div className="pb-4 text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-100 bg-[#F8F9FA] flex-shrink-0">
          <p className="text-xs text-gray-500 text-center">
            Have more questions?{" "}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest font-medium hover:underline underline-offset-2"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
