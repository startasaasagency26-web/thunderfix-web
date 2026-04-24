"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

interface HighlightProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  reverse?: boolean;
  ctaText?: string;
  ctaSecondaryText?: string;
}

export default function ProductHighlight({
  title,
  subtitle,
  description,
  benefits,
  imageSrc,
  imageAlt = "",
  videoSrc,
  reverse = false,
  ctaText = "Get Started",
  ctaSecondaryText,
}: HighlightProps) {
  return (
    <section className="py-24 md:py-32 lg:py-48 overflow-hidden bg-white">
      <div className="container-width">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-32 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
          
          {/* Text Content */}
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <FadeUp>
              <span className="badge-pill mb-8">{subtitle}</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black mb-8">
                {title}
              </h2>
              <p className="text-[17px] leading-relaxed text-black/50 font-medium mb-10 max-w-lg">
                {description}
              </p>
              
              <ul className="space-y-4 mb-12">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-[15px] font-bold text-black/70">
                    <CheckCircle2 size={18} className="text-black/20" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8">
                <button className="btn-premium btn-primary w-full sm:w-auto">
                  {ctaText}
                  <ArrowRight size={16} />
                </button>
                {ctaSecondaryText && (
                  <button className="text-[13px] font-black uppercase tracking-widest text-black/30 hover:text-black transition-colors w-full sm:w-auto text-left sm:text-center mt-2 sm:mt-0">
                    {ctaSecondaryText}
                  </button>
                )}
              </div>
            </FadeUp>
          </div>

          {/* Visual Content */}
          <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <FadeUp delay={0.2}>
              <div className="relative group">
                {/* Decorative shape similar to Podly reference */}
                <div className="absolute -inset-10 bg-accent/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="relative rounded-[3rem] overflow-hidden border border-black/5 shadow-premium aspect-4/5 lg:aspect-square bg-surface-low">
                  {videoSrc ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="h-full w-full object-cover"
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  ) : imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      loading="lazy"
                      quality={90}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-zinc-100 flex items-center justify-center">
                      <span className="text-black/10 font-black uppercase tracking-widest">Visual Asset</span>
                    </div>
                  )}
                  
                  {/* Subtle highlight */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
