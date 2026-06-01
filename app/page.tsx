import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedProperty from "@/components/FeaturedProperty";
import PropertyGrid from "@/components/PropertyGrid";
import DestinationTiles from "@/components/DestinationTiles";
import WhySoumilStays from "@/components/WhySoumilStays";
import Testimonials from "@/components/Testimonials";
import AboutTeaser from "@/components/AboutTeaser";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedProperty />
      <PropertyGrid />
      <DestinationTiles />
      <WhySoumilStays />
      <Testimonials />
      <AboutTeaser />
      <Footer />
      <StickyContact />
    </>
  );
}
