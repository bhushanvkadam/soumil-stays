const PROPERTY_LINKS = ["Luxury Villas", "Boutique Stays", "Pet Friendly", "Pool Villas"];
const DESTINATION_LINKS = ["Alibag", "Dapoli", "Karjat"];

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <p className="font-heading text-white text-2xl mb-3 tracking-wide">Soumil Stays</p>
            <p className="text-sm text-white/40 leading-relaxed">
              Curating extraordinary living experiences in India&apos;s most beautiful destinations.
            </p>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-white text-sm font-medium mb-5">Properties</h4>
            <ul className="flex flex-col gap-3">
              {PROPERTY_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white text-sm font-medium mb-5">Destinations</h4>
            <ul className="flex flex-col gap-3">
              {DESTINATION_LINKS.map((dest) => (
                <li key={dest}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-medium mb-5">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:soumilsstays@gmail.com"
                  className="text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  soumilsstays@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919112385333"
                  className="text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91 91123 85333
                </a>
              </li>
              <li>
                <span className="text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Soumil Stays. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
