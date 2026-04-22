"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
      isScrolled ? "bg-white/80 py-4 shadow-soft backdrop-blur-xl border-b border-black/5" : "bg-transparent py-8"
    }`}>
      <div className="container-width flex items-center justify-between">
        
        {/* Logo (Left) */}
        <a
          href="#home"
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition-transform group-hover:scale-110">
            <span className="text-[18px] font-black italic">T</span>
          </div>
          <span className="text-[14px] font-black tracking-[0.1em] text-black uppercase hidden sm:block">
            Thunderfix
          </span>
        </a>

        {/* Navigation (Center) */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 lg:flex absolute left-1/2 -translate-x-1/2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-black tracking-[0.2em] uppercase text-black/30 transition-all duration-300 hover:text-black hover:tracking-[0.25em]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Area (Right) */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/60144008052"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex btn-premium btn-primary !px-8 !py-3.5 !text-[10px]"
          >
            Start Repair
          </a>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition-all hover:bg-black/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 top-full w-full border-t border-black/5 bg-white p-6 shadow-premium lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-6 py-5 text-[12px] font-black tracking-[0.1em] uppercase text-black/60 transition-all hover:bg-black/5 hover:text-black"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-40" />
                  </a>
                ))}
                <a
                  href="https://wa.me/60144008052"
                  className="flex items-center justify-center rounded-2xl bg-black px-6 py-5 text-[12px] font-black tracking-[0.1em] uppercase text-white mt-4"
                >
                  Start Repair
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
