"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding !pb-48 bg-white">
      <div className="container-width">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          
          {/* Left — Hook + Direct Contact */}
          <div className="flex flex-col gap-8">
            <FadeUp>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/30 mb-4">
                Get Your Quote
              </p>
              <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-black sm:text-5xl lg:text-7xl leading-[0.95]">
                Ready to restore
                <br />
                perfection?
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.7] text-black/45 font-medium">
                Join the hundreds of clients who trust Thunderfix with their most valuable
                technology. Our experts are ready to diagnose and resolve your device's
                issues with unmatched precision.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="https://wa.me/60144008052"
                  className="liquid-glass-dark !px-8 !py-4 !text-[13px] !font-extrabold !gap-4 justify-between w-full sm:max-w-xs"
                >
                  Message on WhatsApp
                  <ArrowRight size={15} />
                </a>
                <a
                  href="https://maps.google.com/?q=No.+19-G,+Jalan+Pinang+B+18/B,+Seksyen+18,+40200+Shah+Alam"
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-glass !px-8 !py-4 !text-[13px] !font-extrabold w-full sm:max-w-xs"
                >
                  Visit our Lab in Shah Alam
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right — Formal Contact Form */}
          <FadeUp delay={0.2} className="relative">
            <div className="rounded-[2.5rem] border border-black/[0.05] bg-[#F8F7F4]/50 p-8 shadow-premium backdrop-blur-sm lg:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full rounded-2xl border border-black/[0.05] bg-white px-5 py-4 text-[13px] font-medium outline-none transition-all focus:border-black/20 focus:ring-4 focus:ring-black/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 px-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-black/[0.05] bg-white px-5 py-4 text-[13px] font-medium outline-none transition-all focus:border-black/20 focus:ring-4 focus:ring-black/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 px-1">Device Type</label>
                  <select 
                    className="w-full rounded-2xl border border-black/[0.05] bg-white px-5 py-4 text-[13px] font-medium outline-none transition-all focus:border-black/20 focus:ring-4 focus:ring-black/5 appearance-none"
                  >
                    <option>iPhone (All Models)</option>
                    <option>Samsung Galaxy</option>
                    <option>iPad / Tablet</option>
                    <option>MacBook / Laptop</option>
                    <option>Other Smartphone</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 px-1">Issue Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us what's wrong with your device..."
                    className="w-full rounded-2xl border border-black/[0.05] bg-white px-5 py-4 text-[13px] font-medium outline-none transition-all focus:border-black/20 focus:ring-4 focus:ring-black/5 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full rounded-full bg-black py-5 text-[13px] font-[900] uppercase tracking-[0.1em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-black/[0.02] blur-3xl" />
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
