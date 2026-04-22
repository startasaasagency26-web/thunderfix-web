import React from "react";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import BrandStrip from "@/components/BrandStrip";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col selection:bg-black selection:text-white">
      <HeroSection />
      <ServiceGrid />
      <WhyUsSection />
      <TestimonialSection />
      <BrandStrip />
      <ContactSection />
    </div>
  );
}
