"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";

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
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface-low pt-40 pb-24 lg:pt-48 lg:pb-32">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-zinc-200 blur-[100px] rounded-full" />
      </div>

      <div className="container-width relative z-10 flex flex-col items-center text-center">
        
        {/* Trust Badge */}
        <FadeUp>
          <div className="badge-pill mb-8">
            <Star size={12} className="fill-accent text-accent" />
            One of the best repair labs in the region
          </div>
        </FadeUp>

        {/* Main Headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.05em] text-black max-w-5xl mx-auto">
            Surgical Precision <br />
            <span className="text-black/30">For Your Premium Tech</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-8 max-w-2xl">
          <p className="text-[18px] leading-relaxed text-black/50 font-medium">
            We don't just fix devices; we restore them to factory standards. 
            Experience the gold standard in laboratory-grade hardware restoration.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.25} className="mt-12 w-full max-w-sm sm:max-w-none mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="https://wa.me/60144008052" className="btn-premium btn-accent w-full sm:w-auto">
              Start Your Repair
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-premium btn-outline w-full sm:w-auto">
              View Services
            </a>
          </div>
        </FadeUp>

        {/* Focal Point & Floating Cards */}
        <div className="relative mt-24 w-full max-w-5xl mx-auto px-4">
          
          {/* Main Video Frame */}
          <FadeUp delay={0.3}>
            <div className="hero-focal-wrap aspect-16/10 w-full rounded-[3rem] overflow-hidden shadow-premium border border-black/5 bg-white">
              <video
                src="/hf_20260331_113227_6113d12f-39d5-4f75-952d-fba94b0b6bda.mp4"
                poster="/hero-monochrome.webp"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </FadeUp>

          {/* Floating Callout 1: Reviews */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="absolute -left-8 top-[15%] hidden xl:block z-20"
          >
            <div className="floating-card p-6! flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[16px] font-black leading-none">5000+</p>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">Lab Successes</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Callout 2: Offer */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="absolute -right-8 top-[40%] hidden xl:block z-20"
          >
            <div className="floating-card p-7! group">
              <p className="text-[42px] font-black leading-none tracking-tighter">10<span className="text-[20px] ml-1 opacity-40">%</span></p>
              <p className="text-[11px] font-bold text-black/40 uppercase tracking-widest mt-2">New Client Offer</p>
              <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform group-hover:scale-110">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* Floating Callout 3: Performance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="absolute -bottom-8 left-[10%] hidden xl:block z-20"
          >
            <div className="floating-card p-4! px-6! flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Zap size={14} className="fill-current" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest">Master Engineering</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

