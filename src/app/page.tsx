import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import ReasonsToJoin from "@/components/ReasonsToJoin";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedDestinations />
      <ReasonsToJoin />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
