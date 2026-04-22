"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

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
    <section className="bg-black pt-24 md:pt-32 lg:pt-48 pb-12 overflow-hidden text-white">
      <div className="container-width relative z-10">
        
        {/* Newsletter Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <FadeUp>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black leading-tight tracking-tight mb-12">
              Subscribe to Our Newsletter
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2} className="w-full max-w-4xl">
            <form className="flex flex-col md:flex-row items-end gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-grow w-full space-y-3">
                <input 
                  type="text" 
                  placeholder="Full Name*"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-[14px] font-medium text-white outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex-grow w-full space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Here*"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-[14px] font-medium text-white outline-none focus:border-white transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="btn-premium !bg-white !text-black !px-10 !py-4 !rounded-none w-full md:w-auto shrink-0 uppercase text-[12px] font-black tracking-widest"
              >
                Subscribe Now
              </button>
            </form>
          </FadeUp>
        </div>

        {/* Footer Links & Branding */}
        <footer className="mt-48 pt-12 border-t border-white/10 flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[20px] font-black tracking-tighter uppercase">Thunderfix</span>
            <div className="flex items-center gap-8">
              {["Home", "Products", "Blog", "About Us"].map((item) => (
                <a key={item} href="#" className="text-[12px] font-bold text-white/40 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5 opacity-30">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 Thunderfix. All Rights Reserved.</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Designed by Infinita Tech Solutions</p>
          </div>
        </footer>

      </div>
    </section>
  );
}
