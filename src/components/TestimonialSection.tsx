"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

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

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-48 border-t border-white/5"
    >
      <div className="container-width relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
          
          <div>
            <FadeUp>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 block">
                Social Proof
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-white mb-12">
                Trusted by those who <br />
                <span className="text-white/40">demand excellence.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative">
                <span className="absolute -top-10 -left-6 text-[80px] font-serif text-white/5 pointer-events-none">"</span>
                <blockquote className="text-[20px] leading-relaxed text-white/70 font-medium italic mb-10">
                  The precision of the repair was invisible to the
                  naked eye. Thunderfix is truly the gold standard
                  in device restoration.
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[12px] font-black text-white/60">
                    AP
                  </div>
                  <div>
                    <p className="text-[14px] font-black uppercase tracking-widest text-white/90">
                      Aidil P.
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-white/[0.02] blur-[80px] rounded-full group-hover:bg-white/[0.04] transition-colors" />
              <div className="relative flex flex-col items-center justify-center rounded-[3rem] border border-white/5 bg-white/[0.02] p-16 text-center backdrop-blur-3xl lg:p-24">
                <span className="text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-[-0.05em] text-white mb-6">
                  99.8
                  <span className="text-white/20">%</span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">
                  Successful Repair Rate
                </span>
                <p className="max-w-[280px] text-[13px] leading-relaxed text-white/20 font-medium">
                  Based on verified outcomes across premium device categories in 2024–2025.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Cinematic Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-radial-gradient from-white/[0.03] to-transparent pointer-events-none" />
    </section>
  );
}
