"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ExternalLink, ArrowRight, Navigation } from "lucide-react";

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
      initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const LOCATIONS = [
  {
    name: "Thunderfix Seri Kembangan",
    shortName: "Seri Kembangan",
    googleUrl: "https://share.google/W4kiym7rddhhE0Cli",
    area: "Seri Kembangan",
    description:
      "Smartphone repair services for customers around Seri Kembangan and nearby areas. Our team delivers fast, reliable repairs with transparent pricing.",
    accent: "from-zinc-50 to-white",
    dotColor: "bg-black",
    index: "01",
  },
  {
    name: "Thunderfix Shah Alam Seksyen 7",
    shortName: "Shah Alam Seksyen 7",
    googleUrl: "https://share.google/T02eW3oZMtksfE0pu",
    area: "Shah Alam Seksyen 7",
    description:
      "Smartphone repair services for customers around Shah Alam Seksyen 7 and nearby areas. Trusted by hundreds of local customers for quality repairs.",
    accent: "from-amber-50/60 to-white",
    dotColor: "bg-accent",
    index: "02",
  },
];

function LocationCard({
  loc,
  delay,
}: {
  loc: (typeof LOCATIONS)[number];
  delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <article
        className="group relative flex flex-col bg-white rounded-3xl border border-black/[0.07] shadow-card transition-all duration-700 hover:-translate-y-3 hover:shadow-elevated hover:border-black/12 overflow-hidden focus-within:-translate-y-2 focus-within:shadow-elevated motion-reduce:transform-none motion-reduce:transition-none"
        aria-label={`Thunderfix branch at ${loc.area}`}
      >
        {/* Top gradient band */}
        <div
          className={`h-2 w-full bg-linear-to-r ${
            loc.index === "01"
              ? "from-zinc-200 via-zinc-100 to-white"
              : "from-amber-200 via-amber-100/60 to-white"
          } opacity-80`}
        />

        {/* Card body */}
        <div className="flex flex-col flex-1 p-8 lg:p-10">
          {/* Top row — index + area badge */}
          <div className="flex items-start justify-between mb-8">
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-black/20">
              {loc.index}
            </span>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-low border border-black/5 text-[10px] font-black uppercase tracking-[0.22em] text-black/50">
              <span className={`h-2 w-2 rounded-full ${loc.dotColor} opacity-60`} />
              {loc.area}
            </div>
          </div>

          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-low border border-black/5 text-black/40 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-105 motion-reduce:transform-none">
            <MapPin size={24} strokeWidth={1.5} />
          </div>

          {/* Branch name */}
          <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-black leading-tight tracking-[-0.03em] text-black mb-4">
            {loc.name}
          </h2>

          {/* Description */}
          <p className="text-[14px] leading-relaxed text-black/45 font-medium flex-1 mb-8">
            {loc.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-black/5 mb-8" />

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={loc.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to Thunderfix ${loc.area}`}
              className="group/btn flex flex-1 items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-black text-white text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-400 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 motion-reduce:transform-none"
            >
              <Navigation size={14} />
              Get Directions
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
              />
            </a>

            <a
              href={loc.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Thunderfix ${loc.area} on Google`}
              className="flex flex-1 items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border-2 border-black/10 text-black text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-400 hover:border-black hover:bg-black hover:text-white hover:-translate-y-0.5 active:scale-95 motion-reduce:transform-none"
            >
              <ExternalLink size={14} />
              View on Google
            </a>

            <a
              href="https://wa.me/60144008052"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Start a repair inquiry at Thunderfix ${loc.area} via WhatsApp`}
              className="flex flex-1 items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border-2 border-black/10 text-black text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-400 hover:border-black/30 hover:bg-surface-mid hover:-translate-y-0.5 active:scale-95 motion-reduce:transform-none"
            >
              Start Repair
            </a>
          </div>
        </div>
      </article>
    </FadeUp>
  );
}

export default function LocationCardsSection() {
  return (
    <section
      id="location-cards"
      aria-labelledby="locations-heading"
      className="bg-surface-low py-24 md:py-32 lg:py-48 border-t border-black/5"
    >
      <div className="container-width">
        {/* Section header */}
        <FadeUp>
          <div className="flex flex-col items-center text-center mb-20">
            <span className="badge-pill mb-8">Our Branches</span>
            <h2
              id="locations-heading"
              className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.04em] text-black max-w-3xl"
            >
              Two locations.{" "}
              <span className="text-black/25">One standard of excellence.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-black/45 font-medium max-w-xl">
              Both branches offer the full Thunderfix experience — premium
              repairs, transparent pricing, and a team you can trust.
            </p>
          </div>
        </FadeUp>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {LOCATIONS.map((loc, i) => (
            <LocationCard key={loc.area} loc={loc} delay={0.1 + i * 0.12} />
          ))}
        </div>

        {/* Visual map section */}
        <FadeUp delay={0.3} className="mt-16">
          <div className="relative rounded-3xl overflow-hidden border border-black/[0.07] bg-white shadow-card">
            {/* Map visual — stylized location display */}
            <div className="relative flex flex-col items-center justify-center py-20 px-8 bg-linear-to-br from-surface-low via-white to-surface-mid overflow-hidden">
              {/* Decorative radial rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[280, 420, 560].map((size, i) => (
                  <div
                    key={size}
                    className="absolute rounded-full border border-black/5"
                    style={{ width: size, height: size, opacity: 0.6 - i * 0.15 }}
                  />
                ))}
              </div>

              {/* Center marker */}
              <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-elevated">
                <MapPin size={28} strokeWidth={1.5} />
              </div>

              <p className="relative z-10 text-[12px] font-black uppercase tracking-[0.3em] text-black/30 mb-6">
                Selangor, Malaysia
              </p>

              {/* Branch chips */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.area}
                    href={loc.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${loc.name} on Google Maps`}
                    className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-black/8 shadow-soft text-[12px] font-black uppercase tracking-[0.18em] text-black/70 transition-all duration-400 hover:border-black hover:bg-black hover:text-white hover:-translate-y-1 active:scale-95 motion-reduce:transform-none"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${loc.dotColor} transition-colors group-hover:bg-white`} />
                    {loc.shortName}
                    <ExternalLink
                      size={12}
                      className="opacity-40 group-hover:opacity-80 transition-opacity"
                    />
                  </a>
                ))}
              </div>

              <p className="relative z-10 mt-8 text-[12px] text-black/30 font-medium">
                Click a branch chip to open it in Google Maps
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
