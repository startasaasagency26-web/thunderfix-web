"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Droplets, Cpu, Monitor, Wrench } from "lucide-react";

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

export default function ServiceGrid() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-48 bg-white relative">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <FadeUp>
            <span className="badge-pill mb-8">Our Core Expertise</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-[-0.04em] text-black">
              Engineering Excellence <br />
              <span className="text-black/30">In Every Restore.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Card Grid — 2x2 asymmetric refined */}
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Top Left — Large */}
          <FadeUp delay={0.1}>
            <div className="floating-card group flex h-full min-h-[400px] flex-col justify-end !p-12">
              <div className="absolute right-12 top-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Monitor size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black tracking-tight text-black uppercase mb-6">
                Display Calibration
              </h3>
              <p className="max-w-md text-[17px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors">
                Surgical precision screen replacement with authentic
                color-accurate calibration for premium display fidelity.
              </p>
            </div>
          </FadeUp>

          {/* Top Right — Small */}
          <FadeUp delay={0.2}>
            <div className="floating-card group flex h-full min-h-[400px] flex-col justify-between !p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Cpu size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-black uppercase mb-4">
                  Power Systems
                </h3>
                <p className="text-[15px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors">
                  Advanced battery diagnostics, OEM replacement, and charging systems.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Left — Small */}
          <FadeUp delay={0.3}>
            <div className="floating-card group flex h-full min-h-[400px] flex-col justify-between !p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Droplets size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-black uppercase mb-4">
                  Liquid Recovery
                </h3>
                <p className="text-[15px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors">
                  Chemical ultrasonic cleaning to resolve water damage at micro-board levels.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Right — Large */}
          <FadeUp delay={0.4}>
            <div className="floating-card group flex h-full min-h-[400px] flex-col justify-between !p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Wrench size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight text-black uppercase mb-6">
                  Custom Works
                </h3>
                <p className="max-w-sm text-[17px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors mb-12">
                  Specialized device engineering for complex hardware failures others can't resolve.
                </p>
                <div className="flex items-center gap-6">
                  <button className="btn-premium btn-primary !px-10 !py-4">
                    Inquire Now
                  </button>
                  <ArrowRight size={20} className="text-black/20" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
