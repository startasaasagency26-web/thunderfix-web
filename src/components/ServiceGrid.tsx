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
    <section id="services" className="section-padding bg-surface-low relative">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between text-center lg:text-left">
          <FadeUp>
            <div className="space-y-4">
              <span className="badge-pill">Our Specialization</span>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-[-0.04em] text-black">
                Surgical <br />
                <span className="text-black/30">Diagnostics.</span>
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <a
              href="#contact"
              className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-black"
            >
              Explore all services
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 group-hover:border-black/20 transition-all">
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </FadeUp>
        </div>

        {/* Card Grid — 2x2 asymmetric refined */}
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
          {/* Top Left — Large */}
          <FadeUp delay={0.1}>
            <div className="floating-card group flex h-full min-h-[350px] flex-col justify-end">
              <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Monitor size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-black uppercase mb-4">
                Display Calibration
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors">
                Surgical precision screen replacement with authentic
                color-accurate calibration for premium display fidelity.
              </p>
            </div>
          </FadeUp>

          {/* Top Right — Small */}
          <FadeUp delay={0.2}>
            <div className="floating-card group flex h-full min-h-[350px] flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Cpu size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-black uppercase mb-4">
                  Power Systems
                </h3>
                <p className="text-[14px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors">
                  Advanced battery diagnostics, OEM replacement, and charging port soldering.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Left — Small */}
          <FadeUp delay={0.3}>
            <div className="floating-card group flex h-full min-h-[350px] flex-col justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Droplets size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-black uppercase mb-4">
                  Liquid Recovery
                </h3>
                <p className="text-[14px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors">
                  Chemical ultrasonic cleaning to resolve water damage at micro-board levels.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Right — Large */}
          <FadeUp delay={0.4}>
            <div className="floating-card group flex h-full min-h-[350px] flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                <Wrench size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-black uppercase mb-4">
                  Custom Engineering
                </h3>
                <p className="max-w-sm text-[15px] leading-relaxed text-black/40 font-medium group-hover:text-black/60 transition-colors mb-12">
                  Have a specialized device or a complex logic-board issue?
                  Our engineers handle what others can't.
                </p>
                <a
                  href="#contact"
                  className="btn-premium btn-primary !px-10 !py-4 !text-[10px]"
                >
                  Inquire Directly
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
