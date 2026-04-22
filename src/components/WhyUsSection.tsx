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
    <section id="why-us" className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-48 border-t border-white/5">
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="max-w-xl sticky top-32">
            <FadeUp>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 block">
                The Thunderfix Standard
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-white mb-10">
                Why the elite choose <br />
                <span className="text-white/40">surgical-grade</span> <br />
                repair.
              </h2>
              <p className="text-[17px] leading-relaxed text-white/50 font-medium max-w-md">
                We've built a reputation on obsessive attention to detail. Every device that enters our laboratory is treated with the same precision as a scientific instrument.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-12">
            {features.map((feature, i) => (
              <FadeUp key={feature.title} delay={i * 0.1}>
                <div className="group flex gap-8 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-white/30 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-black uppercase tracking-[0.1em] text-white mb-4 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-white/40 font-medium group-hover:text-white/60 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
      
      {/* Absolute decorative element */}
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
