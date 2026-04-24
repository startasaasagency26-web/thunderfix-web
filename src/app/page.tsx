import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustMetricsSection from "@/components/TrustMetricsSection";
import ServiceGrid from "@/components/ServiceGrid";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import ProductHighlight from "@/components/ProductHighlight";
import FAQSection from "@/components/FAQSection";
import SocialGrid from "@/components/SocialGrid";

export default function Home() {
  return (
    <div className="flex flex-col selection:bg-black selection:text-white">
      <HeroSection />
      
      <TrustMetricsSection />

      {/* Intro / Secondary Feature Grid */}
      <ServiceGrid />

      {/* Product Highlight 1 */}
      <ProductHighlight 
        title="Unleash the Future of Sound Restoration"
        subtitle="Precision Restoration"
        description="Upgrade your audio experience. We specialize in micro-soldering and acoustic diagnostics to ensure your premium headphones deliver the magic they were designed for."
        benefits={[
          "Acoustic fidelity testing",
          "OEM internal components",
          "Surgical-grade soldering"
        ]}
        imageSrc="/product/sound-restoration.jpg"
        imageAlt="Premium headphones and earbuds prepared for sound restoration service"
        ctaText="Book Restoration"
        ctaSecondaryText="View Lab Process"
      />

      <WhyUsSection />

      {/* Product Highlight 2 — Reversed */}
      <ProductHighlight 
        title="Visual Fidelity Without Compromise"
        subtitle="Display Science"
        description="Our engineers handle the world's most delicate display repairs. We maintain TrueTone functionality and color accuracy using laboratory calibration tools."
        benefits={[
          "TrueTone preservation",
          "Haptic Touch calibration",
          "Dust-free cleanroom assembly"
        ]}
        reverse
        ctaText="Get a Quote"
        ctaSecondaryText="See Repair Gallery"
      />

      <TestimonialSection />
      
      <FAQSection />

      <SocialGrid />

      <ContactSection />
    </div>
  );
}
