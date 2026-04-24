"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

const serviceMeta = [
  {
    imageSrc: "/services/display-calibration.webp",
    imageAlt:
      "Smartphone display calibration on a clean repair bench with color bars and precision tools",
    titleClassName: "text-3xl",
    descriptionClassName: "max-w-md text-[17px]",
  },
  {
    imageSrc: "/services/power-systems.webp",
    imageAlt:
      "Open smartphone battery and charging system diagnostics with precision tools on a clean bench",
    titleClassName: "text-2xl",
    descriptionClassName: "text-[15px]",
  },
  {
    imageSrc: "/services/liquid-recovery.webp",
    imageAlt:
      "Smartphone logic board liquid recovery process with tweezers and ultrasonic cleaning setup",
    titleClassName: "text-2xl",
    descriptionClassName: "text-[15px]",
  },
  {
    imageSrc: "/services/custom-works.webp",
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
    <div className="relative mb-8 aspect-4/3 w-full overflow-hidden rounded-[1.75rem] border border-black/5 bg-surface-low shadow-card">
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
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 md:py-32 lg:py-48 bg-white relative">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <FadeUp>
            <span className="badge-pill mb-8">{t.services.badge}</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-[-0.04em] text-black">
              {t.services.titleTop} <br />
              <span className="text-black/30">{t.services.titleBottom}</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Top Left — Large */}
          <FadeUp delay={0.1}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col p-6! sm:p-8! lg:p-10!">
              <ServiceImage
                src={serviceMeta[0].imageSrc}
                alt={serviceMeta[0].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${serviceMeta[0].titleClassName} mb-6 font-black uppercase tracking-tight text-black`}>
                  {t.services.services[0].title}
                </h3>
                <p className={`${serviceMeta[0].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {t.services.services[0].desc}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Top Right — Small */}
          <FadeUp delay={0.2}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col p-6! sm:p-8! lg:p-10!">
              <ServiceImage
                src={serviceMeta[1].imageSrc}
                alt={serviceMeta[1].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${serviceMeta[1].titleClassName} mb-4 font-black uppercase tracking-tight text-black`}>
                  {t.services.services[1].title}
                </h3>
                <p className={`${serviceMeta[1].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {t.services.services[1].desc}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Left — Small */}
          <FadeUp delay={0.3}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col p-6! sm:p-8! lg:p-10!">
              <ServiceImage
                src={serviceMeta[2].imageSrc}
                alt={serviceMeta[2].imageAlt}
              />
              <div className="mt-auto">
                <h3 className={`${serviceMeta[2].titleClassName} mb-4 font-black uppercase tracking-tight text-black`}>
                  {t.services.services[2].title}
                </h3>
                <p className={`${serviceMeta[2].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                  {t.services.services[2].desc}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bottom Right — Large w/ CTA */}
          <FadeUp delay={0.4}>
            <div className="floating-card group flex h-full min-h-[520px] flex-col bg-surface-low! p-6! sm:p-8! lg:p-10!">
              <ServiceImage
                src={serviceMeta[3].imageSrc}
                alt={serviceMeta[3].imageAlt}
              />
              <div className="mt-auto flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className={`${serviceMeta[3].titleClassName} mb-6 font-black uppercase tracking-tight text-black`}>
                    {t.services.services[3].title}
                  </h3>
                  <p className={`${serviceMeta[3].descriptionClassName} font-medium leading-relaxed text-black/40 transition-colors group-hover:text-black/60`}>
                    {t.services.services[3].desc}
                  </p>
                </div>
                <a
                  href="/locations"
                  className="group/btn flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  aria-label={t.services.customQuote || "Get Custom Quote"}
                >
                  <ArrowRight size={20} className="transition-transform duration-500 group-hover/btn:-rotate-45" />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
