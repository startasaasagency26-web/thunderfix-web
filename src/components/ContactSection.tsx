"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, MessageSquare } from "lucide-react";

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

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-24 md:py-32 lg:py-48 overflow-hidden border-t border-black/5">
      <div className="container-width relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-start">
          
          <div className="flex flex-col gap-12">
            <FadeUp>
              <span className="badge-pill mb-8">Get Your Quote</span>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1] tracking-[-0.04em] text-black mb-10">
                Ready to restore <br />
                <span className="text-black/30">perfection?</span>
              </h2>
              <p className="max-w-md text-[17px] leading-relaxed text-black/50 font-medium">
                Join the hundreds of clients who trust Thunderfix with their most valuable
                technology. Our experts are ready to diagnose and resolve your device's
                issues with unmatched precision.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2">
                <a
                  href="https://wa.me/60144008052"
                  className="floating-card !p-8 text-center group"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 text-black/30 transition-all group-hover:bg-black group-hover:text-white mx-auto">
                    <MessageSquare size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black">WhatsApp</span>
                </a>
                <a
                  href="https://maps.google.com/?q=No.+19-G,+Jalan+Pinang+B+18/B,+Seksyen+18,+40200+Shah+Alam"
                  target="_blank"
                  rel="noreferrer"
                  className="floating-card !p-8 text-center group"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 text-black/30 transition-all group-hover:bg-black group-hover:text-white mx-auto">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Our Lab</span>
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="floating-card !p-10 lg:!p-16">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full rounded-2xl border border-black/5 bg-surface-low px-6 py-4 text-[14px] font-medium text-black outline-none transition-all focus:border-black/20 focus:bg-surface-mid"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 px-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-black/5 bg-surface-low px-6 py-4 text-[14px] font-medium text-black outline-none transition-all focus:border-black/20 focus:bg-surface-mid"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 px-1">Device Type</label>
                  <select 
                    className="w-full rounded-2xl border border-black/5 bg-surface-low px-6 py-4 text-[14px] font-medium text-black outline-none transition-all focus:border-black/20 focus:bg-surface-mid appearance-none"
                  >
                    <option>iPhone (All Models)</option>
                    <option>Samsung Galaxy</option>
                    <option>iPad / Tablet</option>
                    <option>MacBook / Laptop</option>
                    <option>Other Smartphone</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 px-1">Issue Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us what's wrong..."
                    className="w-full rounded-2xl border border-black/5 bg-surface-low px-6 py-4 text-[14px] font-medium text-black outline-none transition-all focus:border-black/20 focus:bg-surface-mid resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="btn-premium btn-primary w-full !py-5"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </FadeUp>

        </div>
      </div>
      
      {/* Absolute Glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Minimalist Footer */}
      <footer className="container-width relative z-10 mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-[12px] font-black uppercase tracking-[0.2em] text-black">Thunderfix</span>
          <p className="text-[10px] font-medium text-black/20 uppercase tracking-[0.1em]">© 2026 Thunderfix.my · Powered by Infinita Tech Solutions Sdn Bhd</p>
        </div>
        
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Support"].map((item) => (
            <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 hover:text-black transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="h-1 w-1 rounded-full bg-black/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20">Shah Alam, Malaysia</span>
        </div>
      </footer>
    </section>
  );
}
