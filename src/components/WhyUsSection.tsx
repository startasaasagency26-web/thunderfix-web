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
    desc: "Most repairs are completed within the same day, minimizing downtime without compromising on our strict protocols.",
    icon: Zap,
  },
  {
    title: "Elite Certification",
    desc: "Thunderfix engineers are among the most highly trained in the region, specializing in complex diagnostics.",
    icon: Award,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white py-24 md:py-32 lg:py-48 border-y border-black/5">
      <div className="container-width">
        <div className="flex flex-col items-center text-center mb-24">
          <FadeUp>
            <span className="badge-pill mb-8">The Difference</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1] tracking-[-0.04em] text-black">
              The <span className="text-black/30">Thunderfix</span> Standard
            </h2>
          </FadeUp>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={0.1 * i} className="group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-low border border-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:scale-110">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[14px] font-black uppercase tracking-widest text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-black/40 font-medium max-w-[240px]">
                  {feature.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Brand Promise Card */}
        <FadeUp delay={0.4} className="mt-24">
          <div className="floating-card !bg-black !border-none p-12 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none" />
            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight text-white mb-8 relative z-10">
              "We handle what others can't. <br /> That is our promise."
            </h3>
            <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40 mb-12 relative z-10">
              — The Thunderfix Guarantee
            </p>
            <a href="https://wa.me/60144008052" className="btn-premium btn-accent relative z-10">
              Consult an Expert
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
