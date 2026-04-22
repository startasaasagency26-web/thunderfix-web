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
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const specializations = [
  {
    title: "Display Calibration",
    desc: "Surgical precision screen replacement with authentic color-accurate calibration for premium display fidelity.",
    icon: Monitor,
    dark: true,
    size: "large",
  },
  {
    title: "Power Systems",
    desc: "Advanced battery diagnostics, OEM replacement, and comprehensive charging port micro-soldering.",
    icon: Cpu,
    dark: true,
    size: "small",
  },
  {
    title: "Liquid Recovery",
    desc: "Chemical ultrasonic cleaning to resolve water damage at micro-board levels.",
    icon: Droplets,
    dark: false,
    size: "small",
  },
  {
    title: "Custom Engineering?",
    desc: "Have a specialized device or a complex logic-board issue? Our repair engineers handle what others can't.",
    icon: Wrench,
    dark: false,
    size: "large",
  },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <FadeUp>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35 mb-4">
                Our Specialization
              </p>
              <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-black sm:text-5xl">
                Precision Diagnostics.
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-black/40 transition-colors hover:text-black"
            >
              Explore all services
              <ArrowRight size={13} />
            </a>
          </FadeUp>
        </div>

        {/* Card Grid — 2x2 asymmetric */}
        <div className="grid gap-4 md:grid-cols-[1.4fr_0.6fr]">
          {/* Top Left — Large Dark */}
          <FadeUp delay={0.05}>
            <div className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-[#141414] p-7 text-white md:min-h-[320px]">
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-white/60 transition-colors duration-300 group-hover:bg-white/[0.12]">
                <Monitor size={18} />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">
                Display Calibration
              </h3>
              <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-white/45 font-medium">
                Surgical precision screen replacement with authentic
                color-accurate calibration for premium display fidelity.
              </p>
            </div>
          </FadeUp>

          {/* Top Right — Small Dark */}
          <FadeUp delay={0.1}>
            <div className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-[#1a1a1a] p-7 text-white md:min-h-[320px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-white/60 transition-colors duration-300 group-hover:bg-white/[0.12]">
                <Cpu size={18} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Power Systems
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/45 font-medium">
                  Advanced battery diagnostics, OEM replacement, and charging port soldering.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-white/50 transition-colors hover:text-white"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Left — Small Light */}
          <FadeUp delay={0.15} className="md:col-span-1">
            <div className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.05] bg-white/60 p-7 transition-all duration-300 hover:bg-white hover:shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <Droplets size={18} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-black">
                  Liquid Recovery
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black/40 font-medium">
                  Chemical ultrasonic cleaning to resolve
                  water damage at micro-board levels.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Right — Large Light */}
          <FadeUp delay={0.2} className="md:col-span-1">
            <div className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.05] bg-white/60 p-7 transition-all duration-300 hover:bg-white hover:shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <Wrench size={18} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-black">
                  Custom Engineering?
                </h3>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-black/40 font-medium">
                  Have a specialized device or a complex logic-board issue?
                  Our repair engineers handle what others can't.
                </p>
                <a
                  href="#contact"
                  className="liquid-glass-dark mt-5 !py-2.5 !px-5 !text-[11px]"
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
