"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section id="testimonials" className="bg-white py-24 md:py-32 lg:py-48 relative overflow-hidden border-t border-black/5">
      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <FadeUp>
            <span className="badge-pill mb-8">Testimonials</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black">
              What Our <span className="text-black/30">Customers Say</span>
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Pill-shaped Testimonial Card */}
            <div className="relative rounded-[4rem] border border-black/5 bg-surface-low p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-soft">
              
              {/* Left: Round-rect Visual */}
              <div className="w-full md:w-[35%] aspect-video md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-black/5 bg-zinc-200 shrink-0">
                <div className="h-full w-full bg-zinc-100 flex items-center justify-center">
                  <span className="text-black/10 font-black uppercase tracking-widest text-[10px]">Client Video</span>
                </div>
              </div>

              {/* Center: Content */}
              <div className="flex-grow text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                  <span className="text-[16px] font-black tracking-tight text-black">Mark Doe</span>
                  <div className="flex items-center gap-0.5 text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[18px] lg:text-[22px] font-bold leading-snug tracking-tight text-black/70 italic">
                  "Thunderfix is incredible. My sleek iPhone was restored to perfection. 
                  They fit snugly into my premium lifestyle without any discomfort."
                </p>
              </div>

              {/* Right: Avatar */}
              <div className="hidden lg:block shrink-0">
                <div className="h-32 w-32 rounded-full border-4 border-white shadow-premium overflow-hidden bg-zinc-200">
                  <img src="https://i.pravatar.cc/200?img=12" alt="Reviewer" className="h-full w-full object-cover" />
                </div>
              </div>

            </div>

            {/* Pagination / Dots mirroring Podly */}
            <div className="mt-12 flex justify-center gap-2">
              <div className="h-1.5 w-12 rounded-full bg-black" />
              <div className="h-1.5 w-4 rounded-full bg-black/10" />
              <div className="h-1.5 w-4 rounded-full bg-black/10" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
