import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import WhySoumilStays from "@/components/WhySoumilStays";
import DestinationTiles from "@/components/DestinationTiles";
import PropertyGrid from "@/components/PropertyGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import AboutTeaser from "@/components/AboutTeaser";
import Footer from "@/components/Footer";
import FAQChatbot from "@/components/FAQChatbot";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollReveal>
        <FeaturedGrid />
      </ScrollReveal>
      <ScrollReveal>
        <WhySoumilStays />
      </ScrollReveal>
      <ScrollReveal>
        <DestinationTiles />
      </ScrollReveal>
      <ScrollReveal>
        <PropertyGrid />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <AboutTeaser />
      </ScrollReveal>
      <Footer />
      <FAQChatbot />
    </>
  );
}
