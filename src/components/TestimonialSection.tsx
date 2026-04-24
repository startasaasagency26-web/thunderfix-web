"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, MapPin, ShieldCheck, Smartphone, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

const trustIcons = [Star, ShieldCheck, MapPin, Smartphone];

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

function StarRating({ className = "", ratingLabel }: { className?: string, ratingLabel: string }) {
  return (
    <div className={`flex items-center gap-1 text-accent ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} className="fill-current" aria-hidden="true" />
      ))}
      <span className="ml-2 text-[12px] font-bold text-black/60">
        {ratingLabel}
      </span>
    </div>
  );
}

export default function TestimonialSection() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    // If reduced motion is preferred, leave the video paused at first frame.
    if (!video || reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting && entry.intersectionRatio >= 0.35;

        if (isVisible) {
          // Guarantee muted + loop in case of SSR hydration drift
          video.muted = true;
          video.loop = true;

          if (video.paused) {
            video.play().catch(() => {
              // Autoplay may still be blocked by the browser; fail silently.
            });
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { threshold: [0, 0.35, 0.75] },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-black/5 bg-white py-24 md:py-32 lg:py-48"
    >
      <div className="container-width relative z-10">
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <FadeUp>
            <span className="badge-pill mb-8">{t.testimonials.badge}</span>
            <h2 className="mx-auto max-w-4xl text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black">
              {t.testimonials.titleTop} {t.testimonials.titleBottom}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] font-medium leading-7 text-black/50 sm:text-[18px]">
              {t.testimonials.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-stretch">
          <FadeUp delay={0.1} className="h-full">
            <article className="flex h-full flex-col items-center justify-center py-2 sm:py-4 lg:py-6">
              <div className="mb-5 inline-flex items-center rounded-full border border-black/8 bg-[#F4F1EA] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-card">
                {t.testimonials.videoBadge}
              </div>

              <div className="w-full max-w-[360px] overflow-hidden rounded-[28px] bg-transparent shadow-[0_28px_80px_rgba(10,10,10,0.16)] ring-1 ring-black/6 sm:w-[clamp(280px,30vw,400px)] sm:max-w-[400px]">
                {/*
                  Decorative proof asset — controls intentionally omitted.
                  The surrounding caption and section heading describe the content.
                */}
                <video
                  ref={videoRef}
                  src="/before-after-repair.mp4"
                  title="Before and after Thunderfix repair result"
                  aria-label="Before and after repair video showing a real customer device restored by Thunderfix"
                  aria-describedby="before-after-caption"
                  autoPlay={!reducedMotion}
                  muted
                  loop={!reducedMotion}
                  playsInline
                  preload="metadata"
                  className="aspect-9/16 w-full rounded-[28px] bg-transparent object-contain focus:outline-none"
                  style={{ display: "block" }}
                />
              </div>

              <div className="mt-5 w-full max-w-[360px] rounded-2xl border border-black/8 bg-[#F7F5F0] px-5 py-3 text-center shadow-card sm:mt-6 sm:max-w-[400px] sm:rounded-full">
                <p
                  id="before-after-caption"
                  className="mx-auto text-[14px] font-medium leading-6 text-[#333333]"
                >
                  {t.testimonials.videoCaption}
                </p>
              </div>
            </article>
          </FadeUp>

          <div className="flex flex-col gap-6">
            <FadeUp delay={0.18} className="h-full">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read verified Google reviews for Thunderfix Seri Kembangan in a new tab"
                className="group block h-full rounded-2xl border border-black/5 bg-surface-low p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-black/10 hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-col items-start gap-3 text-black sm:flex-row sm:items-center">
                      <span className="text-6xl font-black leading-none tracking-normal sm:text-7xl">
                        5.0
                      </span>
                      <div className="flex flex-col">
                        <StarRating ratingLabel={t.testimonials.ratingLabel} />
                        <span className="mt-2 text-[11px] font-black uppercase tracking-[0.22em] text-black/40">
                          {t.testimonials.reviewCount}
                        </span>
                      </div>
                    </div>
                    <p className="mt-5 max-w-lg text-[15px] font-medium leading-7 text-black/60">
                      {t.testimonials.description}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
                    <ExternalLink size={18} aria-hidden="true" />
                  </div>
                </div>

                <ul className="mt-12 space-y-4">
                {t.testimonials.stats.map((item, i) => {
                  const Icon = trustIcons[i];
                  return (
                    <li key={i} className="flex items-center gap-4 text-[15px] font-medium text-black/60">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-card">
                        <Icon size={14} className="text-accent" />
                      </div>
                      {item}
                    </li>
                  );
                })}
              </ul>

                <span className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white transition-colors duration-300 group-hover:bg-zinc-800">
                  {t.testimonials.cta}
                </span>
              </a>
            </FadeUp>

            <FadeUp delay={0.26}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View this customer review source on Google in a new tab"
                className="group block rounded-2xl border border-black/5 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-black/10 hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <StarRating ratingLabel={t.testimonials.ratingLabel} />
                </div>
                <blockquote className="mt-8">
                  <p className="text-[20px] font-medium leading-relaxed tracking-[-0.01em] text-black sm:text-[22px]">
                    "{t.testimonials.quote}"
                  </p>
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-low text-lg font-black text-black">
                    {t.testimonials.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-black">{t.testimonials.name}</span>
                    <span className="text-[13px] font-medium text-black/40">
                      Verified Customer
                    </span>
                  </div>
                </div>

                <span className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-black/50 transition-colors duration-300 group-hover:border-black/20 group-hover:text-black">
                  {t.testimonials.cta}
                  <ExternalLink size={14} aria-hidden="true" />
                </span>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
