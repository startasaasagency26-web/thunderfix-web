import type { Metadata } from "next";
import LocationsHeroSection from "@/components/LocationsHeroSection";
import LocationCardsSection from "@/components/LocationCardsSection";
import LocationSelectorSection from "@/components/LocationSelectorSection";
import LocationsFinalCTA from "@/components/LocationsFinalCTA";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Thunderfix Locations | Seri Kembangan & Shah Alam Seksyen 7",
  description:
    "Find Thunderfix smartphone repair branches in Seri Kembangan and Shah Alam Seksyen 7. Get directions, view Google details, and start your repair.",
  openGraph: {
    title: "Thunderfix Locations | Seri Kembangan & Shah Alam Seksyen 7",
    description:
      "Find Thunderfix smartphone repair branches in Seri Kembangan and Shah Alam Seksyen 7. Get directions, view Google details, and start your repair.",
  },
};

export default function LocationsPage() {
  return (
    <div className="flex flex-col selection:bg-black selection:text-white">
      <LocationsHeroSection />
      <LocationCardsSection />
      <LocationSelectorSection />
      <LocationsFinalCTA />
      <ContactSection />
    </div>
  );
}
