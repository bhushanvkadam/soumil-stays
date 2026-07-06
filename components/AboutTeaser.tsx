export default function AboutTeaser() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-xs text-forest font-medium tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Built on a Belief in Better Weekends
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Soumil&apos;s Stays was born from a simple belief: that a weekend away should feel like a
              genuine escape, not just a change of address. We hand-select every property, inspect
              it ourselves, and stay in touch so your experience is seamless — from the first
              message to the drive home.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We are a small team that cares deeply about quality and honesty. No bots, no
              surprises, no compromises on the things that matter.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:gap-3 transition-all duration-200"
            >
              Meet the team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-stone-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-100" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-md px-6 py-4">
              <p className="font-heading text-3xl text-forest">19</p>
              <p className="text-xs text-gray-500 mt-0.5">Curated properties</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-forest rounded-xl shadow-md px-6 py-4">
              <p className="font-heading text-3xl text-white">3</p>
              <p className="text-xs text-white/70 mt-0.5">Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
