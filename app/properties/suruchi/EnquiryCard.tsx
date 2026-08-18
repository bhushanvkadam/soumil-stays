"use client";

import { useState } from "react";

const WA_NUMBER = "919112385333";

export default function EnquiryCard() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const inputCls =
    "w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm text-foreground bg-white placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-forest";
  const labelCls = "block text-xs font-medium text-gray-500 mb-1.5";

  const handleEnquire = () => {
    const parts = [
      `Hi, I'd like to book Suruchi in Kurul, Alibag.`,
      checkin ? `Check-in: ${checkin}` : "",
      checkout ? `Check-out: ${checkout}` : "",
      guests ? guests : "",
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);
    const text = parts.join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <aside id="enquiry" className="lg:sticky lg:top-24 self-start bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
      <h3 className="font-heading text-2xl text-foreground mb-1">Reserve Your Stay</h3>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <p className="text-sm text-gray-500">Enquire for pricing</p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
          Booking link coming soon
        </span>
      </div>

      {/* Caretaker TBD notice */}
      <div className="mb-4 flex items-start gap-2.5 p-3 bg-stone-50 rounded-xl border border-stone-200">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-gray-400 mt-0.5 flex-shrink-0">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        </svg>
        <p className="text-xs text-gray-500">
          <span className="font-medium text-foreground">Caretaker:</span> TBD — contact details will be shared on booking confirmation.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Check-in / Check-out */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Check In</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <input
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className={`${inputCls} pl-8`}
              />
            </div>
          </div>
          <div>
            <label className={labelCls}>Check Out</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <input
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className={`${inputCls} pl-8`}
              />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className={labelCls}>Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={inputCls}
          >
            {Array.from({ length: 18 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={`${n} Guest${n !== 1 ? "s" : ""}`}>
                {n} Guest{n !== 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div>
          <label className={labelCls}>Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelCls}>Phone Number</label>
          <input
            type="tel"
            placeholder="+91 00000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelCls}>Message</label>
          <textarea
            placeholder="Tell us about your trip..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Primary CTA */}
        <button
          onClick={handleEnquire}
          className="w-full bg-forest text-white rounded-lg py-3 text-sm font-medium hover:bg-[#019aaa] transition-colors flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enquire on WhatsApp
        </button>

        <p className="text-xs text-gray-400 text-center -mt-1">
          We&apos;ll confirm availability within a few hours
        </p>
      </div>
    </aside>
  );
}
