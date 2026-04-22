"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, Award, Microscope } from "lucide-react";

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

const features = [
  {
    title: "Surgical Precision",
    desc: "Our technicians operate with micro-level accuracy, ensuring every internal component is seated perfectly to OEM standards.",
    icon: Microscope,
  },
  {
    title: "Original Components",
    desc: "We prioritize authentic parts that maintain the structural integrity and performance fidelity of your premium device.",
    icon: ShieldCheck,
  },
  {
    title: "Rapid Restoration",
    desc: "Most repairs are completed within the same day, minimizing downtime without compromising on our strict quality protocols.",
    icon: Zap,
  },
  {
    title: "Elite Certification",
    desc: "Thunderfix engineers are among the most highly trained in the region, specializing in complex logic-board diagnostics.",
    icon: Award,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#F8F7F4] py-24 md:py-32 lg:py-40">
      <div className="container-width relative z-10">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <FadeUp>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/30 mb-4">
              The Thunderfix Standard
            </p>
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-black sm:text-5xl lg:text-[3.2rem]">
              Why the elite choose
              <br />
              surgical-grade repair.
            </h2>
          </FadeUp>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col rounded-3xl border border-black/[0.03] bg-white/40 p-8 transition-all duration-300 hover:bg-white hover:shadow-premium hover:border-black/[0.08]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <feature.icon size={20} />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-black">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-black/45 font-medium">
                  {feature.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      
      {/* Absolute decorative element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-96 w-96 rounded-full bg-black/[0.02] blur-[100px] pointer-events-none" />
    </section>
  );
}
