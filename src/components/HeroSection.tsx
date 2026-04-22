"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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
      initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#050505] pb-12 pt-28 lg:pt-32 lg:pb-16 mt-[-48px]">
      
      {/* ── Background Video & Overlays ── */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hf_20260331_113227_6113d12f-39d5-4f75-952d-fba94b0b6bda.mp4"
          poster="/hero-monochrome.png"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
        />
        {/* Base dark overlay for guaranteed text legibility */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Top gradient for seamless Navbar blending */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505]/90 to-transparent" />
        
        {/* Bottom gradient to seamlessly blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
        
        {/* Cinematic atmospheric glows */}
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-zinc-400/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* ── Foreground Content ── */}
      <div className="container-width relative z-10 flex flex-1 flex-col justify-center mt-8 lg:mt-16">
        
        <div className="max-w-2xl space-y-8">
          <FadeUp>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Laboratory Grade Service
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white">
              Broken Phone?
              <br />
              We'll Fix It
              <br />
              <span className="text-white/80 flex mt-1">Today.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="max-w-md text-[15px] leading-[1.7] text-white/60 font-medium tracking-tight">
              Experience precision engineering at your doorstep.
              We specialize in surgical-grade repairs for premium
              mobile devices with obsessive attention to detail.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/60144008052"
                className="liquid-glass-invert !px-7 !py-3.5 !text-[13px] !font-extrabold !gap-2.5"
              >
                Start Your Repair
                <ArrowRight size={15} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-semibold text-white/60 transition-colors hover:text-white"
              >
                <Play size={12} className="fill-current" />
                Repair Process
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Feature Row — Pushed down to rest at bottom of hero */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-32">
          {[
            {
              title: "24 Hr Turnaround",
              desc: "We treat same-day service as an uncompromising standard. Most repairs are completed within hours for seamless planning.",
            },
            {
              title: "No Fix, No Charge",
              desc: "We restore confidence with every device returned. If we cannot resolve your device to its trusted performance, you don't pay a thing.",
            },
            {
              title: "Lifetime Warranty",
              desc: "Every repair is executed with laboratory-grade precision. Every service is backed by a comprehensive warranty for total peace of mind.",
            },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={0.25 + i * 0.06} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-black/20 p-7 backdrop-blur-xl transition-all duration-300 hover:bg-black/40 hover:border-white/[0.15]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-white transition-colors duration-300 group-hover:bg-white/[0.12] group-hover:text-white shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {i === 0 && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <polyline points="20 6 9 17 4 12" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="text-[15px] font-extrabold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.65] text-white/50 font-medium transition-colors duration-300 group-hover:text-white/60">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

