"use client";

import React from "react";
import { ArrowRight, Star, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface-low pt-40 pb-24 lg:pt-48 lg:pb-32">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-zinc-200 blur-[100px] rounded-full" />
      </div>

      <div className="container-width relative z-10 flex flex-col items-center text-center">
        
        {/* Trust Badge */}
        <Reveal>
          <div className="badge-pill mb-8">
            <Star size={12} className="fill-accent text-accent" />
            {t.hero.badge}
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.1}>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.05em] text-black max-w-5xl mx-auto">
            {t.hero.titleTop} <br />
            <span className="text-black/30">{t.hero.titleBottom}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 max-w-2xl">
          <p className="text-[18px] leading-relaxed text-black/50 font-medium">
            {t.hero.subtitle}
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.25} className="mt-12 w-full max-w-sm sm:max-w-none mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="/locations" className="btn-premium btn-accent w-full sm:w-auto">
              {t.common.startYourRepair}
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-premium btn-outline w-full sm:w-auto">
              {t.common.viewServices}
            </a>
          </div>
        </Reveal>

        {/* Focal Point & Floating Cards */}
        <div className="relative mt-24 w-full max-w-5xl mx-auto px-4">
          
          {/* Main Video Frame */}
          <Reveal delay={0.3}>
            <div className="hero-focal-wrap aspect-16/10 w-full rounded-[3rem] overflow-hidden shadow-premium border border-black/5 bg-white">
              <video
                src="/hf_20260331_113227_6113d12f-39d5-4f75-952d-fba94b0b6bda.mp4"
                poster="/hero-monochrome.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Floating Callout 1: Reviews */}
          <Reveal
            delay={0.5}
            direction="right"
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
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">{t.hero.labSuccesses}</p>
              </div>
            </div>
          </Reveal>

          {/* Floating Callout 2: Offer */}
          <Reveal
            delay={0.6}
            direction="left"
            className="absolute -right-8 top-[40%] hidden xl:block z-20"
          >
            <div className="floating-card p-7! group">
              <p className="text-[42px] font-black leading-none tracking-tighter">10<span className="text-[20px] ml-1 opacity-40">%</span></p>
              <p className="text-[11px] font-bold text-black/40 uppercase tracking-widest mt-2">{t.hero.newClientOffer}</p>
              <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform group-hover:scale-110">
                <ArrowRight size={16} />
              </div>
            </div>
          </Reveal>

          {/* Floating Callout 3: Performance */}
          <Reveal
            delay={0.7}
            direction="up"
            className="absolute -bottom-8 left-[10%] hidden xl:block z-20"
          >
            <div className="floating-card p-4! px-6! flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Zap size={14} className="fill-current" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest">{t.hero.masterEngineering}</span>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

