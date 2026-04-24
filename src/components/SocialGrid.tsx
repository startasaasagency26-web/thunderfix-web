"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FACEBOOK_URL } from "@/lib/constants";

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
  { id: 1, type: "image" },
  { id: 2, type: "image" },
  { id: 3, type: "image" },
  { id: 4, type: "image" },
  { id: 5, type: "image" },
  { id: 6, type: "social" },
];

export default function SocialGrid() {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-white overflow-hidden">
      <div className="container-width">
        <div className="flex flex-col items-center text-center mb-24">
          <FadeUp>
            <span className="badge-pill mb-8">Stay Connected</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black">
              Follow Us On <span className="text-black/30">Facebook</span>
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
                    ? "Visit Thunderfix on Facebook"
                    : "Open Thunderfix Facebook page in a new tab"
                }
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-black/5 bg-surface-low focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
              >
                {item.type === "social" ? (
                  <div className="h-full w-full bg-surface-mid flex flex-col items-center justify-center gap-4 transition-colors group-hover:bg-black group-hover:text-white">
                    <FacebookIcon size={32} className="text-black/20 group-hover:text-white/50" />
                    <span className="max-w-[18ch] text-center text-[10px] font-black uppercase tracking-[0.16em]">
                      Visit Thunderfix on Facebook
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="h-full w-full bg-zinc-100 flex items-center justify-center">
                      <span className="text-black/5 font-black uppercase tracking-widest text-[10px]">Lifestyle {item.id}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <FacebookIcon size={24} className="text-white" />
                    </div>
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
