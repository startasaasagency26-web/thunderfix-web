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
    <section id="contact" className="relative bg-black py-24 md:py-32 lg:py-48 overflow-hidden border-t border-white/5">
      <div className="container-width relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-start">
          
          <div className="flex flex-col gap-12">
            <FadeUp>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 block">
                Get Your Quote
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1] tracking-[-0.04em] text-white mb-10">
                Ready to restore <br />
                <span className="text-white/40">perfection?</span>
              </h2>
              <p className="max-w-md text-[17px] leading-relaxed text-white/50 font-medium">
                Join the hundreds of clients who trust Thunderfix with their most valuable
                technology. Our experts are ready to diagnose and resolve your device's
                issues with unmatched precision.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2">
                <a
                  href="https://wa.me/60144008052"
                  className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-center backdrop-blur-3xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/30 transition-all group-hover:bg-white group-hover:text-black">
                    <MessageSquare size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">WhatsApp</span>
                </a>
                <a
                  href="https://maps.google.com/?q=No.+19-G,+Jalan+Pinang+B+18/B,+Seksyen+18,+40200+Shah+Alam"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-center backdrop-blur-3xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/30 transition-all group-hover:bg-white group-hover:text-black">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Our Lab</span>
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-white/[0.01] blur-[80px] rounded-full" />
              <div className="relative rounded-[3rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-3xl lg:p-12">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 px-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. John Doe"
                        className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-[14px] font-medium text-white outline-none transition-all focus:border-white/20 focus:bg-white/[0.08]"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 px-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-[14px] font-medium text-white outline-none transition-all focus:border-white/20 focus:bg-white/[0.08]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 px-1">Device Type</label>
                    <select 
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-[14px] font-medium text-white outline-none transition-all focus:border-white/20 focus:bg-white/[0.08] appearance-none"
                    >
                      <option className="bg-zinc-900">iPhone (All Models)</option>
                      <option className="bg-zinc-900">Samsung Galaxy</option>
                      <option className="bg-zinc-900">iPad / Tablet</option>
                      <option className="bg-zinc-900">MacBook / Laptop</option>
                      <option className="bg-zinc-900">Other Smartphone</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 px-1">Issue Description</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us what's wrong..."
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-[14px] font-medium text-white outline-none transition-all focus:border-white/20 focus:bg-white/[0.08] resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="liquid-glass w-full !py-5 !text-[11px]"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
      
      {/* Absolute Glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* Minimalist Footer */}
      <footer className="container-width relative z-10 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Thunderfix</span>
          <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.1em]">© 2025 All Rights Reserved.</p>
        </div>
        
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Support"].map((item) => (
            <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Malaysia</span>
        </div>
      </footer>
    </section>
  );
}
