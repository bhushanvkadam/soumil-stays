import { featuredProperty } from "@/lib/properties";

const WA_NUMBER = "919112385333";

export default function FeaturedProperty() {
  const p = featuredProperty;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${p.name} (${p.location.area}, ${p.location.destination}). Could you share availability and pricing?`
  )}`;

  return (
    <section className="py-20 px-4 md:px-8 bg-white" id="featured">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-400 font-medium tracking-[0.25em] uppercase mb-8">
          Featured Property
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-start">

          {/* Image — LEFT */}
          <div className="relative aspect-[4/3] bg-stone-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-200" />
            {/* Editor's Pick badge */}
            <div className="absolute top-4 left-4 bg-forest text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Editor&apos;s Pick
            </div>
          </div>

          {/* Details — RIGHT */}
          <div className="flex flex-col">
            <p className="text-xs text-gray-400 mb-2 tracking-wide">
              {p.location.destination} · {p.location.area}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              {p.name}
            </h2>

            {/* Stats row */}
            <div className="flex items-center gap-5 mb-5 text-sm text-gray-500 flex-wrap">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                {p.bedrooms} BHK
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 19v-8.93a2 2 0 01.89-1.66l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19h18M3 19a2 2 0 002 2h14a2 2 0 002-2" />
                </svg>
                {p.bathrooms} Baths
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                {p.maxGuests} Guests
              </span>
            </div>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">{p.description}</p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#15352a] transition-colors self-start"
            >
              Enquire for Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
