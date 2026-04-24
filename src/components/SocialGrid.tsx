"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FACEBOOK_URL } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Local SVG replacement for the Facebook icon to avoid brand-icon package drift
 * in specific package versions.
 */
const FacebookIcon = ({
  size = 24, 
  className = "",
}: { 
  size?: number; 
  className?: string; 
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 8.5h2.2V5h-2.9C10.4 5 9 6.7 9 9.1V11H6v3.6h3V21h3.8v-6.4h2.8l.5-3.6h-3.3V9.4c0-.6.3-.9 1.2-.9z" />
  </svg>
);

const ease = [0.16, 1, 0.3, 1] as const;

type SocialItem =
  | {
      id: number;
      type: "image";
      imageSrc: string;
      imageAlt: string;
    }
  | {
      id: number;
      type: "social";
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

const items = [
  {
    id: 1,
    type: "image",
    imageSrc: "/social/facebook-1.jpg",
    imageAlt: "Thunderfix repair work from Facebook showing a device diagnostic result",
  },
  {
    id: 2,
    type: "image",
    imageSrc: "/social/facebook-2.jpg",
    imageAlt: "Thunderfix repaired device showcase from Facebook",
  },
  {
    id: 3,
    type: "image",
    imageSrc: "/social/facebook-3.jpg",
    imageAlt: "Thunderfix device repair post showing a phone charging test",
  },
  {
    id: 4,
    type: "image",
    imageSrc: "/social/facebook-4.jpg",
    imageAlt: "Thunderfix repair work from Facebook showing a phone motherboard check",
  },
  {
    id: 5,
    type: "image",
    imageSrc: "/social/facebook-5.jpg",
    imageAlt: "Thunderfix device repair post showing a battery replacement",
  },
  { id: 6, type: "social" },
] satisfies SocialItem[];

export default function SocialGrid() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-white overflow-hidden">
      <div className="container-width">
        <div className="flex flex-col items-center text-center mb-24">
          <FadeUp>
            <span className="badge-pill mb-8">{t.social.badge}</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black">
              {t.social.titleTop} <span className="text-black/30">{t.social.titleBottom}</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {items.map((item, i) => (
            <FadeUp key={item.id} delay={0.1 * i}>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  item.type === "social"
                    ? t.social.visitText
                    : t.common.viewOnFacebook
                }
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-black/5 bg-surface-low focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
              >
                {item.type === "social" ? (
                  <div className="h-full w-full bg-surface-mid flex flex-col items-center justify-center gap-4 transition-colors group-hover:bg-black group-hover:text-white">
                    <FacebookIcon size={32} className="text-black/20 group-hover:text-white/50" />
                    <span className="text-[12px] font-black tracking-widest text-white/90 group-hover:text-white">
                      {t.social.viewText}
                    </span>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      loading="lazy"
                      quality={90}
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 30vw, 50vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-white/5 opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/10 group-hover:opacity-100">
                      <FacebookIcon size={24} className="text-white" />
                    </div>
                    <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white opacity-0 shadow-soft backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                      View on Facebook
                    </span>
                    <span className="sr-only">View Thunderfix repair post on Facebook</span>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  </>
                )}
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
