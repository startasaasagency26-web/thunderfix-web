"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;


export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-48 bg-white border-t border-black/5">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black mb-16">
                {t.faq.titleTop} <br />
                <span className="text-black/30">{t.faq.titleBottom}</span>
              </h2>
            </Reveal>

            <div className="space-y-4">
              {t.faq.items.map((faq, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <div 
                    className="border-b border-black/5 pb-4 last:border-0"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex w-full items-center justify-between py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                    >
                      <span className={`text-[17px] font-black tracking-tight transition-colors ${openIndex === i ? "text-black" : "text-black/40 group-hover:text-black"}`}>
                        {faq.q}
                      </span>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/5 transition-all ${openIndex === i ? "bg-black text-white border-black" : "text-black/20 group-hover:text-black group-hover:border-black/20"}`}>
                        {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-[15px] leading-relaxed text-black/50 font-medium max-w-lg">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-10 bg-accent/10 blur-[40px] md:blur-[80px] rounded-full opacity-50" />
                <div className="relative rounded-[3rem] overflow-hidden border border-black/6 aspect-4/3 bg-white"
                     style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.06)" }}>
                  <Image
                    src="/faq-visual.webp"
                    alt="Thunderfix repair tools and brand visual"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
