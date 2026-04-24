"use client";

import React from "react";
import { ArrowRight, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LocationsFinalCTA() {
  const { t } = useLanguage();
  return (
    <section
      aria-labelledby="locations-cta-heading"
      className="bg-surface-low py-24 md:py-32 lg:py-40 border-t border-black/5"
    >
      <div className="container-width">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-black p-12 lg:p-20 text-center">
            {/* Subtle radial highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_65%)] pointer-events-none" />

            {/* Decorative grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-[0.22em] text-white/50 mb-10">
                {t.common.readyToRepairBadge}
              </span>

              <h2
                id="locations-cta-heading"
                className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-white max-w-2xl mx-auto mb-6"
              >
                {t.common.readyToRepairHeading}
              </h2>

              <p className="text-[16px] leading-relaxed text-white/45 font-medium max-w-md mb-12">
                {t.common.readyToRepairSub}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">
                <a
                  href="#location-cards"
                  aria-label="Choose a Thunderfix branch to start your repair"
                  className="group flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-400 hover:bg-zinc-100 hover:-translate-y-1 hover:shadow-elevated active:scale-95 motion-reduce:transform-none"
                >
                  {t.common.startRepair}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#location-cards"
                  aria-label="Go back to view Thunderfix branch locations"
                  className="flex items-center gap-3 px-10 py-5 rounded-full border-2 border-white/15 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-400 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1 active:scale-95 motion-reduce:transform-none"
                >
                  <Navigation size={16} />
                  {t.common.getDirections}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
