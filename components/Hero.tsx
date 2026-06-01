export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-stone-800">
      {/* Placeholder gradient — replace with real photo via next/image */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-forest opacity-90" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-40">
        <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5 font-sans">
          Alibag · Dapoli · Karjat
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-5 max-w-2xl">
          Your Perfect Escape Awaits
        </h1>
        <p className="text-white/75 text-base md:text-lg mb-10 max-w-md leading-relaxed font-sans">
          Handpicked luxury villas in Alibag, Dapoli &amp; Karjat
        </p>
        <a
          href="#villas"
          className="inline-block bg-forest text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-[#15352a] transition-colors duration-300"
        >
          Explore Properties
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 4v16M2 14l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
