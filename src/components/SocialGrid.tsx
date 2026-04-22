"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Instagram } from "lucide-react";

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
              Follow Us On <span className="text-black/30">Instagram</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {items.map((item, i) => (
            <FadeUp key={item.id} delay={0.1 * i}>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-black/5 bg-surface-low group cursor-pointer">
                {item.type === "social" ? (
                  <div className="h-full w-full bg-surface-mid flex flex-col items-center justify-center gap-4 transition-colors group-hover:bg-black group-hover:text-white">
                    <Instagram size={32} strokeWidth={1.5} className="text-black/20 group-hover:text-white/50" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">@thunderfix.my</span>
                  </div>
                ) : (
                  <>
                    <div className="h-full w-full bg-zinc-100 flex items-center justify-center">
                      <span className="text-black/5 font-black uppercase tracking-widest text-[10px]">Lifestyle {item.id}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Instagram size={24} className="text-white" />
                    </div>
                  </>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
