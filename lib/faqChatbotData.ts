import type { Property } from "./properties";

export interface QAPair {
  question: string;
  answer: string;
}

export const GENERIC_QAS: QAPair[] = [
  {
    question: "How do I book a stay?",
    answer:
      "You can check availability and book directly on this page, or message us on WhatsApp and our team will confirm your dates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer, and major cards. 50% advance confirms your booking, with the balance due at check-in.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "75% of your paid amount is refundable if you cancel at least 7 days before check-in. No refunds for cancellations within 7 days.",
  },
  {
    question: "What are check-in and check-out times?",
    answer: "Check-in is at 12:00 PM and check-out is at 10:00 AM.",
  },
  {
    question: "How do I get pricing for a villa?",
    answer:
      "Pricing varies by season and villa. Tap 'Check Availability' on any property page or message us on WhatsApp for a quote.",
  },
];

export function getPropertyQAs(
  property: Property,
  nearbyItems?: { place: string; distance: string; time: string }[]
): QAPair[] {
  const hasCaretaker = property.amenities.some((a) =>
    a.toLowerCase().includes("caretaker")
  );

  const poolAnswer = (() => {
    if (!property.pool.hasPool) {
      return `${property.name} does not have a pool. Ask us on WhatsApp about nearby beach or water access.`;
    }
    if (property.pool.type === "infinity")
      return `Yes — ${property.name} has a stunning infinity pool.`;
    if (property.pool.type === "private+baby")
      return `Yes — ${property.name} has a private pool and a dedicated baby pool.`;
    if (property.pool.type === "clubhouse")
      return `${property.name} has access to a shared clubhouse pool.`;
    return `Yes — ${property.name} has a private pool.`;
  })();

  const nearbyAnswer =
    nearbyItems && nearbyItems.length > 0
      ? nearbyItems
          .map((n) => `${n.place} (${n.distance}, ${n.time})`)
          .join(" · ")
      : `Nearby details for ${property.name} — message us on WhatsApp for local tips.`;

  return [
    {
      question: "How many bedrooms and bathrooms does it have?",
      answer: `${property.name} has ${property.bedrooms} bedroom${
        property.bedrooms !== 1 ? "s" : ""
      } and ${property.bathrooms} bathroom${
        property.bathrooms !== 1 ? "s" : ""
      }, accommodating up to ${property.maxGuests} guests.`,
    },
    {
      question: "Is there a private pool?",
      answer: poolAnswer,
    },
    {
      question: "Is there a caretaker on site?",
      answer: hasCaretaker
        ? `Yes, a caretaker is available on-site at ${property.name} throughout your stay.`
        : `Caretaker availability at ${property.name} — please confirm with us on WhatsApp before booking.`,
    },
    {
      question: "What amenities are included?",
      answer:
        property.amenities.length > 0
          ? property.amenities.join(", ") + "."
          : `Amenity details for ${property.name} are being finalized — please ask us on WhatsApp.`,
    },
    {
      question: "Does this villa include meals?",
      answer: (property.slug === "aamrai-vista" || property.slug === "athaangg" || property.slug === "cherry")
        ? `The owner/caretaker at ${property.name} can provide home-cooked, authentic local-style meals at extra charges. There's no obligation to order from the property — you can order via Zomato/Swiggy or visit multiple nearby restaurants.`
        : `Meal details for ${property.name} are being finalized — please ask us on WhatsApp for current arrangements.`,
    },
    {
      question: "What's nearby this villa?",
      answer: nearbyAnswer,
    },
  ];
}
