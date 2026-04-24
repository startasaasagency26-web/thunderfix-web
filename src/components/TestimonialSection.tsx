"use client";

import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, MapPin, ShieldCheck, Smartphone, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const trustItems = [
  "5.0 Google Rating",
  "218 verified reviews",
  "Trusted local repair team in Seri Kembangan",
  "iPhone, iPad, Android & accessory repairs",
];

const testimonial = {
  name: "Mark Doe",
  quote:
    "Thunderfix is incredible. My sleek iPhone was restored to perfection. They fit snugly into my premium lifestyle without any discomfort.",
};

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

function StarRating({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 text-accent ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} className="fill-current" aria-hidden="true" />
      ))}
      <span className="ml-2 text-[12px] font-bold text-black/60">
        5.0 out of 5 on Google
      </span>
    </div>
  );
}

export default function TestimonialSection() {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const observerPausedRef = useRef(false);
  const hasAutoPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;

        if (isVisible) {
          if (!userPausedRef.current && !video.ended) {
            video.muted = true;

            if (!hasAutoPlayedRef.current || observerPausedRef.current) {
              const playAttempt = video.play();
              hasAutoPlayedRef.current = true;
              observerPausedRef.current = false;

              if (playAttempt !== undefined) {
                playAttempt.catch(() => {
                  // Browser autoplay can still be blocked; native controls remain available.
                });
              }
            }
          }

          return;
        }

        if (!video.paused) {
          observerPausedRef.current = true;
          video.pause();
        }
      },
      { threshold: [0, 0.45, 0.75] },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [reducedMotion]);

  const handleVideoPlay = () => {
    userPausedRef.current = false;
    observerPausedRef.current = false;
  };

  const handleVideoPause = () => {
    const video = videoRef.current;

    if (observerPausedRef.current || video?.ended) {
      return;
    }

    userPausedRef.current = true;
  };

  const handleVideoEnded = () => {
    userPausedRef.current = true;
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-black/5 bg-white py-24 md:py-32 lg:py-48"
    >
      <div className="container-width relative z-10">
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <FadeUp>
            <span className="badge-pill mb-8">Real Repair Results</span>
            <h2 className="mx-auto max-w-4xl text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black">
              See the repair quality before you trust us with your device.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] font-medium leading-7 text-black/50 sm:text-[18px]">
              Real customer devices. Real repair outcomes. Backed by verified
              Google reviews.
            </p>
          </FadeUp>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-stretch">
          <FadeUp delay={0.1} className="h-full">
            <article className="flex h-full flex-col items-center justify-center py-2 sm:py-4 lg:py-6">
              <div className="mb-5 inline-flex items-center rounded-full border border-black/[0.08] bg-[#F4F1EA] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-card">
                Before & After Repair
              </div>

              <div className="w-full max-w-[360px] overflow-hidden rounded-[28px] bg-transparent shadow-[0_28px_80px_rgba(10,10,10,0.16)] ring-1 ring-black/[0.06] sm:w-[clamp(280px,30vw,400px)] sm:max-w-[400px]">
                <video
                  ref={videoRef}
                  src="/before-after-repair.mp4"
                  title="Before and after Thunderfix repair result"
                  aria-label="Before and after repair video showing a real customer device restored by Thunderfix"
                  aria-describedby="before-after-caption"
                  autoPlay={reducedMotion === false}
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoEnded}
                  className="aspect-[9/16] w-full rounded-[28px] bg-transparent object-contain focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
                />
              </div>

              <div className="mt-5 w-full max-w-[360px] rounded-2xl border border-black/[0.08] bg-[#F7F5F0] px-5 py-3 text-center shadow-card sm:mt-6 sm:max-w-[400px] sm:rounded-full">
                <p
                  id="before-after-caption"
                  className="mx-auto text-[14px] font-medium leading-6 text-[#333333]"
                >
                  A real customer device restored by the Thunderfix repair team.
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
                className="group block h-full rounded-[2rem] border border-black/5 bg-surface-low p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-black/10 hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-col items-start gap-3 text-black sm:flex-row sm:items-center">
                      <span className="text-6xl font-black leading-none tracking-normal sm:text-7xl">
                        5.0
                      </span>
                      <div className="flex flex-col">
                        <StarRating />
                        <span className="mt-2 text-[11px] font-black uppercase tracking-[0.22em] text-black/40">
                          218 reviews
                        </span>
                      </div>
                    </div>
                    <p className="mt-5 max-w-lg text-[15px] font-medium leading-7 text-black/60">
                      Verified Google feedback from customers who trusted the
                      Thunderfix Seri Kembangan team with their device repairs.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
                    <ExternalLink size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {trustItems.map((item, i) => {
                    const Icon =
                      i === 0
                        ? Star
                        : i === 1
                          ? ShieldCheck
                          : i === 2
                            ? MapPin
                            : Smartphone;

                    return (
                      <div
                        key={item}
                        className="flex min-h-14 items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 text-left text-[12px] font-black uppercase tracking-[0.12em] text-black/60"
                      >
                        <Icon
                          size={16}
                          className={i === 0 ? "fill-accent text-accent" : "text-black/35"}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <span className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white transition-colors duration-300 group-hover:bg-zinc-800">
                  Read verified Google reviews
                </span>
              </a>
            </FadeUp>

            <FadeUp delay={0.26}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View this customer review source on Google in a new tab"
                className="group block rounded-[2rem] border border-black/5 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-black/10 hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[16px] font-black tracking-tight text-black">
                      {testimonial.name}
                    </span>
                    <StarRating className="mt-2 text-accent" />
                  </div>

                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-white bg-zinc-200 shadow-premium sm:block">
                    <img
                      src="https://i.pravatar.cc/200?img=12"
                      alt="Reviewer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <p className="mt-6 text-[18px] font-bold leading-snug tracking-tight text-black/70 italic lg:text-[20px]">
                  &quot;{testimonial.quote}&quot;
                </p>

                <span className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-black/50 transition-colors duration-300 group-hover:border-black/20 group-hover:text-black">
                  View our Google reviews
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
