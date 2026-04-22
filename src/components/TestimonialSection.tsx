"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
    <section id="testimonials" className="bg-surface-low py-24 md:py-32 lg:py-48 relative overflow-hidden border-t border-black/5">
      <div className="container-width relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
          
          <div>
            <FadeUp>
              <span className="badge-pill mb-12">Social Proof</span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-black mb-12">
                Trusted by those who <br />
                <span className="text-black/30">demand excellence.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative">
                <Quote size={80} className="absolute -top-12 -left-8 text-black/5 -z-10" />
                <blockquote className="text-[20px] leading-relaxed text-black/70 font-medium italic mb-10">
                  The precision of the repair was invisible to the
                  naked eye. Thunderfix is truly the gold standard
                  in device restoration.
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black text-white text-[12px] font-black uppercase">
                    AP
                  </div>
                  <div>
                    <p className="text-[14px] font-black uppercase tracking-widest text-black">
                      Aidil P.
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative group">
              <div className="floating-card flex flex-col items-center justify-center !p-16 lg:!p-24 text-center">
                <span className="text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-[-0.05em] text-black mb-6">
                  99.8
                  <span className="text-black/20">%</span>
                </span>
                <div className="flex items-center justify-center gap-1 mb-8 text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black/40 mb-4">
                  Successful Repair Rate
                </span>
                <p className="max-w-[280px] text-[13px] leading-relaxed text-black/20 font-medium group-hover:text-black/40 transition-colors">
                  Based on verified outcomes across premium device categories in 2024–2025.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
