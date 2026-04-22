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
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
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
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black pb-24 pt-32 lg:pt-40 lg:pb-32">
      
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/hf_20260331_113227_6113d12f-39d5-4f75-952d-fba94b0b6bda.mp4"
          poster="/hero-monochrome.png"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-105 opacity-60"
        />
        
        {/* Layered Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60" />
        
        {/* Atmospheric Lighting */}
        <div className="absolute -top-[10%] left-[20%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute -bottom-[10%] right-[20%] w-[40%] h-[40%] bg-zinc-400/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* ── Foreground Content ── */}
      <div className="container-width relative z-10 flex flex-1 flex-col justify-center">
        
        <div className="max-w-4xl">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-10">
              Laboratory Grade Service
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-[-0.05em] text-white">
              Broken Phone?
              <br />
              <span className="text-white/40">We'll Fix It</span>
              <br />
              Today.
            </h1>
          </FadeUp>

          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <FadeUp delay={0.2} className="max-w-md">
              <p className="text-[17px] leading-relaxed text-white/50 font-medium tracking-tight">
                Experience precision engineering at your doorstep.
                We specialize in surgical-grade repairs for premium
                mobile devices with obsessive attention to detail.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://wa.me/60144008052"
                  className="liquid-glass group"
                >
                  Start Your Repair
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
                    <Play size={14} className="fill-current ml-0.5" />
                  </div>
                  Process
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Feature Row */}
        <div className="mt-24 lg:mt-40 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "24 Hr Turnaround",
              desc: "Same-day service is our standard. Most repairs are completed within hours.",
            },
            {
              title: "No Fix, No Charge",
              desc: "If we cannot resolve your device to its trusted performance, you don't pay a thing.",
            },
            {
              title: "Lifetime Warranty",
              desc: "Every service is backed by a comprehensive warranty for total peace of mind.",
            },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={0.35 + i * 0.1}>
              <div className="group relative flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 overflow-hidden">
                {/* Subtle highlight effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white/40 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {i === 0 && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </>
                    )}
                    {i === 1 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                    {i === 2 && <polyline points="20 6 9 17 4 12" />}
                  </svg>
                </div>
                <h3 className="text-[14px] font-black uppercase tracking-[0.1em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/40 font-medium transition-colors duration-500 group-hover:text-white/60">
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

