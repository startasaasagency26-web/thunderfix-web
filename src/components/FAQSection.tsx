"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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

const faqs = [
  {
    question: "How long does a typical iPhone repair take?",
    answer: "Most standard restorations, such as screen or battery replacements, are completed within 45 to 60 minutes in our laboratory while you wait.",
  },
  {
    question: "Do you use original Apple components?",
    answer: "We prioritize surgical-grade OEM components that maintain the exact performance fidelity and structural integrity of your premium device.",
  },
  {
    question: "Is there a warranty on the restoration?",
    answer: "Yes, every Thunderfix restoration comes with a comprehensive laboratory warranty, covering both the components and the expert craftsmanship.",
  },
  {
    question: "Can you fix logic board issues others have rejected?",
    answer: "Our engineers specialize in micro-soldering and deep-level hardware diagnostics, handling complex board failures that generic repair shops cannot.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-48 bg-white border-t border-black/5">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <FadeUp>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black mb-16">
                Frequently Asked <br />
                <span className="text-black/30">Questions</span>
              </h2>
            </FadeUp>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={0.1 * i}>
                  <div 
                    className="border-b border-black/5 pb-4 last:border-0"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex w-full items-center justify-between py-6 text-left group"
                    >
                      <span className={`text-[17px] font-black tracking-tight transition-colors ${openIndex === i ? "text-black" : "text-black/40 group-hover:text-black"}`}>
                        {faq.question}
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
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <FadeUp delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-10 bg-accent/10 blur-[80px] rounded-full opacity-50" />
                <div className="relative rounded-[3rem] overflow-hidden border border-black/5 aspect-square bg-surface-low">
                  <div className="h-full w-full bg-zinc-100 flex items-center justify-center">
                    <span className="text-black/10 font-black uppercase tracking-widest">FAQ Visual</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
