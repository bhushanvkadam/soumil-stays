const STEPS = [
  {
    title: "Browse & Choose",
    body: "Explore our collection of private villas and find the perfect match for your group, dates, and budget.",
  },
  {
    title: "Check Availability",
    body: "Select your dates and group size. We'll confirm availability and share everything you need to know.",
  },
  {
    title: "Book & Relax",
    body: "Secure your stay with a 50% advance. Pay the rest on arrival. We handle everything else.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Simple, transparent, and designed around you.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-6 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-stone-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map(({ title, body }, i) => (
              <div key={title} className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-heading text-xl mb-5 flex-shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
