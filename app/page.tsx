import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import PropertyGrid from "@/components/PropertyGrid";
import DestinationTiles from "@/components/DestinationTiles";
import WhySoumilStays from "@/components/WhySoumilStays";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import AboutTeaser from "@/components/AboutTeaser";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCarousel />
      <PropertyGrid />
      <DestinationTiles />
      <WhySoumilStays />
      <HowItWorks />
      <Testimonials />
      <AboutTeaser />
      <Footer />
      <StickyContact />
    </>
  );
}
