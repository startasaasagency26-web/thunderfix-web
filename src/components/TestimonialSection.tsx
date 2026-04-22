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

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#111111] py-24 md:py-32 lg:py-40"
    >
      <div className="container-width relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left — Header + Testimonial */}
          <div>
            <FadeUp>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-4">
                Social Proof
              </p>
              <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.2rem]">
                Trusted by those who
                <br />
                demand excellence.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <blockquote className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.04] p-7">
                <p className="text-[15px] leading-[1.7] text-white/65 font-medium italic">
                  "The precision of the repair was invisible to the
                  naked eye. Thunderfix is truly the gold standard
                  in device restoration."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/60">
                    AP
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-white/80">
                      Aidil P.
                    </p>
                    <p className="text-[10px] font-medium text-white/30">
                      Verified Client
                    </p>
                  </div>
                </div>
              </blockquote>
            </FadeUp>
          </div>

          {/* Right — Stats */}
          <FadeUp delay={0.15}>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-12 text-center lg:p-16">
              <p className="text-[80px] font-extrabold leading-none tracking-[-0.04em] text-white sm:text-[100px]">
                99.8
                <span className="text-white/40">%</span>
              </p>
              <p className="mt-4 text-[13px] font-semibold text-white/35 uppercase tracking-[0.15em]">
                Successful Repair Rate
              </p>
              <p className="mt-3 max-w-[260px] text-[12px] leading-relaxed text-white/25 font-medium">
                Based on verified repair outcomes across all device categories in 2024–2025.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute -bottom-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
    </section>
  );
}
