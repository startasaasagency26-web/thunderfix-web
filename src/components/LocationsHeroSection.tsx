"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LocationsHeroSection() {
  return (
    <section
      id="locations-hero"
      aria-label="Thunderfix Locations Hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-surface-low pt-40 pb-24 lg:pt-48 lg:pb-32"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-8%] left-[-8%] w-[40%] h-[40%] bg-accent/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-zinc-300/40 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/60 blur-[80px] rounded-full opacity-60" />
      </div>

      <div className="container-width relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow pill */}
        <FadeUp>
          <div className="badge-pill mb-8">
            <MapPin size={12} className="text-black/50" />
            Thunderfix Locations
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.4rem,7.5vw,5.5rem)] font-black leading-[1.02] tracking-[-0.05em] text-black max-w-4xl mx-auto">
            Visit the Thunderfix branch{" "}
            <span className="text-black/25">nearest to you.</span>
          </h1>
        </FadeUp>

        {/* Supporting copy */}
        <FadeUp delay={0.2} className="mt-8 max-w-xl">
          <p className="text-[17px] leading-relaxed text-black/50 font-medium">
            Choose your preferred Thunderfix location, check directions on
            Google, and start your repair with a trusted local team.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.3} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://wa.me/60144008052"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start a repair inquiry with Thunderfix via WhatsApp"
              className="btn-premium btn-primary"
            >
              Start Repair
              <ArrowRight size={16} />
            </a>
            <a
              href="#location-cards"
              aria-label="Scroll to view Thunderfix branch locations"
              className="btn-premium btn-outline"
            >
              View Locations
            </a>
          </div>
        </FadeUp>

        {/* Decorative branch indicator pills */}
        <FadeUp delay={0.45} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Seri Kembangan", dot: "bg-black" },
              { label: "Shah Alam Seksyen 7", dot: "bg-accent" },
            ].map((branch) => (
              <div
                key={branch.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-black/8 shadow-soft text-[11px] font-black uppercase tracking-[0.18em] text-black/60"
              >
                <span className={`h-2 w-2 rounded-full ${branch.dot} opacity-70`} />
                {branch.label}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
