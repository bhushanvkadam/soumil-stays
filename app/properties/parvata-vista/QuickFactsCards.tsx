"use client";

import { useState, useEffect, useCallback } from "react";

const HOUSE_RULES = [
  {
    heading: "Check-In & Check-Out",
    content:
      "Check-in: 12:00 PM noon. Check-out: 10:00 AM. Early check-in or late check-out may be arranged subject to availability.",
  },
  {
    heading: "No Smoking Inside Rooms",
    content:
      "Smoking is strictly prohibited inside the villa and all indoor areas. The terraces or a designated outdoor area may be used.",
  },
  {
    heading: "ID Proof Required",
    content:
      "All guests must carry a valid government-issued photo ID (Aadhaar, Passport, or Driving Licence) for verification at check-in.",
  },
  {
    heading: "Payment Policy",
    content:
      "50% advance payment is required to confirm your booking. The remaining 50% is due on check-in. A refundable security deposit may apply.",
  },
  {
    heading: "Music Policy",
    content:
      "Music is permitted without strict time restrictions — Parvata Vista is a secluded property with no neighbours nearby, so guests can enjoy music freely.",
  },
  {
    heading: "Cancellation Policy",
    content:
      "75% refund if the booking is cancelled 7 or more days before check-in. No refund for cancellations made within 7 days of the check-in date.",
  },
];

const NEARBY = [
  { place: "Chinese Food Outlet", distance: "7 km", time: "~15 min drive" },
  { place: "Nearest Restaurants", distance: "18 km", time: "~30 min drive" },
  { place: "Bhimashankar Temple Trek", distance: "2–3 hrs", time: "On foot" },
  { place: "Seasonal Waterfalls", distance: "Nearby", time: "Seasonal" },
];

const QUICK_FACTS = [
  { label: "Check-in", value: "12:00 PM", icon: "🕛" },
  { label: "Check-out", value: "10:00 AM", icon: "🕙" },
  { label: "Max Guests", value: "6 Guests", icon: "👥" },
  { label: "Caretaker", value: "After Booking", icon: "🏠" },
];

function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0 border-b border-stone-100">
          <h2 className="font-heading text-xl text-foreground">{title}</h2>
          <button
            onClick={close}
            className="w-9 h-9 rounded-full hover:bg-stone-100 flex items-center justify-center text-gray-400 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

function Accordion({ items }: { items: { heading: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-stone-100">
      {items.map(({ heading, content }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-sm font-medium text-foreground pr-4">{heading}</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {open === i && (
            <div className="pb-4 text-sm text-gray-500 leading-relaxed">{content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function QuickCard({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-stone-200 bg-white text-center transition-all duration-200 hover:border-forest hover:shadow-md hover:-translate-y-0.5 cursor-pointer group"
    >
      <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-forest/10 flex items-center justify-center text-gray-500 group-hover:text-forest flex-shrink-0 transition-colors duration-200">
        {icon}
      </div>
      <span className="text-xs font-medium text-foreground leading-tight">{label}</span>
    </button>
  );
}

type ModalType = "rules" | "cancellation" | "facts" | "todo" | null;

export default function QuickFactsCards() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const close = () => setActiveModal(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <QuickCard
          label="House Rules"
          onClick={() => setActiveModal("rules")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6M9 16h4" />
            </svg>
          }
        />

        <QuickCard
          label="Cancellation"
          onClick={() => setActiveModal("cancellation")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
          }
        />

        <QuickCard
          label="Quick Facts"
          onClick={() => setActiveModal("facts")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          }
        />

        <QuickCard
          label="Things To Do"
          onClick={() => setActiveModal("todo")}
          icon={
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          }
        />
      </div>

      <Modal isOpen={activeModal === "rules"} onClose={close} title="House Rules">
        <Accordion items={HOUSE_RULES} />
      </Modal>

      <Modal isOpen={activeModal === "cancellation"} onClose={close} title="Cancellation Policy">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">7+ days before check-in</p>
              <p className="text-sm text-gray-500 mt-0.5">75% refund on the advance paid</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Within 7 days of check-in</p>
              <p className="text-sm text-gray-500 mt-0.5">No refund for late cancellations</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            We recommend travel insurance for added peace of mind. To cancel, please contact us on WhatsApp with your booking reference.
          </p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "facts"} onClose={close} title="Quick Facts">
        <div className="grid grid-cols-2 gap-4">
          {QUICK_FACTS.map(({ label, value, icon }) => (
            <div key={label} className="flex flex-col gap-1.5 p-4 bg-[#F8F9FA] rounded-xl">
              <span className="text-2xl">{icon}</span>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
              <p className="text-base font-medium text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </Modal>

      <Modal isOpen={activeModal === "todo"} onClose={close} title="Things To Do Nearby">
        <div className="space-y-3">
          {NEARBY.map(({ place, distance, time }) => (
            <div key={place} className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#01B9C5]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#01B9C5" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{place}</p>
                  <p className="text-xs text-gray-400">{time}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-forest bg-[#01B9C5]/10 px-2.5 py-1 rounded-full">
                {distance}
              </span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
