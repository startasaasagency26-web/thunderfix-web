"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    title: "Display Calibration",
    description:
      "Surgical precision screen replacement with authentic color-accurate calibration for premium display fidelity.",
    imageSrc: "/services/display-calibration.png",
    imageAlt:
      "Smartphone display calibration on a clean repair bench with color bars and precision tools",
    titleClassName: "text-3xl",
    descriptionClassName: "max-w-md text-[17px]",
  },
  {
    title: "Power Systems",
    description:
      "Advanced battery diagnostics, OEM replacement, and charging systems.",
    imageSrc: "/services/power-systems.png",
    imageAlt:
      "Open smartphone battery and charging system diagnostics with precision tools on a clean bench",
    titleClassName: "text-2xl",
    descriptionClassName: "text-[15px]",
  },
  {
    title: "Liquid Recovery",
    description:
      "Chemical ultrasonic cleaning to resolve water damage at micro-board levels.",
    imageSrc: "/services/liquid-recovery.png",
    imageAlt:
      "Smartphone logic board liquid recovery process with tweezers and ultrasonic cleaning setup",
    titleClassName: "text-2xl",
    descriptionClassName: "text-[15px]",
  },
  {
    title: "Custom Works",
    description:
      "Specialized device engineering for complex hardware failures others can't resolve.",
    imageSrc: "/services/custom-works.png",
    imageAlt:
      "Board-level smartphone repair under a microscope with precision soldering tools",
    titleClassName: "text-3xl",
    descriptionClassName: "max-w-sm text-[17px]",
    hasCta: true,
  },
];

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

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-black/5 bg-surface-low shadow-card">
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        quality={90}
        sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-105 group-hover:contrast-105 motion-reduce:transform-none motion-reduce:transition-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(10,10,10,0.04))]"
      />
    </div>
  );
}

export default function ServiceGrid() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-48 bg-white relative">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <FadeUp>
            <span className="badge-pill mb-8">Our Core Expertise</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-[-0.04em] text-black">
              Engineering Excellence <br />
              <span className="text-black/30">In Every Restore.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Card Grid — 2x2 asymmetric refined */}
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Top Left — Large */}
          <FadeUp delay={0.1}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col !p-6 sm:!p-8 lg:!p-10">
              <ServiceImage
                src={services[0].imageSrc}
                alt={services[0].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${services[0].titleClassName} mb-6 font-black uppercase tracking-tight text-black`}>
                  {services[0].title}
                </h3>
                <p className={`${services[0].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {services[0].description}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Top Right — Small */}
          <FadeUp delay={0.2}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col !p-6 sm:!p-8 lg:!p-10">
              <ServiceImage
                src={services[1].imageSrc}
                alt={services[1].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${services[1].titleClassName} mb-4 font-black uppercase tracking-tight text-black`}>
                  {services[1].title}
                </h3>
                <p className={`${services[1].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {services[1].description}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Left — Small */}
          <FadeUp delay={0.3}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col !p-6 sm:!p-8 lg:!p-10">
              <ServiceImage
                src={services[2].imageSrc}
                alt={services[2].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${services[2].titleClassName} mb-4 font-black uppercase tracking-tight text-black`}>
                  {services[2].title}
                </h3>
                <p className={`${services[2].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {services[2].description}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Right — Large */}
          <FadeUp delay={0.4}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col !p-6 sm:!p-8 lg:!p-10">
              <ServiceImage
                src={services[3].imageSrc}
                alt={services[3].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${services[3].titleClassName} mb-6 font-black uppercase tracking-tight text-black`}>
                  {services[3].title}
                </h3>
                <p className={`${services[3].descriptionClassName} mb-12 font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {services[3].description}
                </p>
                <div className="flex items-center gap-6">
                  <button className="btn-premium btn-primary !px-10 !py-4">
                    Inquire Now
                  </button>
                  <ArrowRight size={20} className="text-black/20" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
