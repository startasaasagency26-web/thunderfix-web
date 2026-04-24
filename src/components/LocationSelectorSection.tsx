"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const BRANCHES = [
  {
    area: "Seri Kembangan",
    description:
      "Conveniently located for customers across the Seri Kembangan corridor and surrounding townships.",
    googleUrl: "https://share.google/W4kiym7rddhhE0Cli",
    fullName: "Thunderfix Seri Kembangan",
    dotColor: "bg-black",
    accent: "group-hover:bg-black group-hover:text-white",
  },
  {
    area: "Shah Alam Seksyen 7",
    description:
      "Serving the Shah Alam Seksyen 7 community with expert smartphone repair and fast turnarounds.",
    googleUrl: "https://share.google/T02eW3oZMtksfE0pu",
    fullName: "Thunderfix Shah Alam Seksyen 7",
    dotColor: "bg-accent",
    accent: "group-hover:bg-black group-hover:text-white",
  },
];

export default function LocationSelectorSection() {
  return (
    <section
      aria-labelledby="branch-selector-heading"
      className="bg-white py-24 md:py-32 lg:py-40 border-t border-black/5"
    >
      <div className="container-width">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="badge-pill mb-8">Choose Your Branch</span>
            <h2
              id="branch-selector-heading"
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-black max-w-2xl"
            >
              Choose the branch that is{" "}
              <span className="text-black/25">easiest for you.</span>
            </h2>
          </div>
        </FadeUp>

        {/* Selector cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BRANCHES.map((branch, i) => (
            <FadeUp key={branch.area} delay={0.1 + i * 0.1}>
              <article
                className="group flex flex-col rounded-2xl border border-black/[0.07] bg-surface-low p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated hover:border-black/12 hover:bg-white motion-reduce:transform-none motion-reduce:transition-none"
                aria-label={`Select ${branch.fullName}`}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-black/40 transition-all duration-400 group-hover:bg-black group-hover:text-white motion-reduce:transform-none">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-black/35">
                      Branch
                    </span>
                  </div>
                  <span className={`h-2.5 w-2.5 rounded-full ${branch.dotColor} opacity-50`} />
                </div>

                {/* Area name */}
                <h3 className="text-[1.4rem] font-black leading-tight tracking-[-0.03em] text-black mb-3">
                  {branch.area}
                </h3>

                {/* Short description */}
                <p className="text-[13px] leading-relaxed text-black/40 font-medium flex-1 mb-8">
                  {branch.description}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={branch.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${branch.fullName} in Google Maps`}
                    className="group/btn flex flex-1 items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-black/10 text-[10px] font-black uppercase tracking-[0.2em] text-black/70 transition-all duration-300 hover:border-black hover:bg-black hover:text-white active:scale-95 motion-reduce:transform-none"
                  >
                    <ExternalLink size={12} />
                    Open in Google Maps
                  </a>
                  <a
                    href="https://wa.me/60144008052"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Start a repair at ${branch.fullName} via WhatsApp`}
                    className="flex flex-1 items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-800 active:scale-95 motion-reduce:transform-none"
                  >
                    Start Repair
                    <ArrowRight size={12} />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
