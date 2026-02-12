import FeaturedListings from "@/components/sections/FeaturedListing/FeaturedListings";
import Hero from "@/components/sections/Hero";
import MarketInsights from "@/components/sections/MarketInsights/MarketInsights";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <MarketInsights />
      <TestimonialsSection />
    </>
  );
}
