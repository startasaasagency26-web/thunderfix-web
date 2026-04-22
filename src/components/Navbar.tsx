"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6 flex justify-center pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto relative flex w-full max-w-[1100px] items-center justify-between rounded-[2.5rem] bg-[#050505]/40 px-5 py-3.5 sm:px-8 sm:py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-2xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        
        {/* Logo — Top Left */}
        <a
          href="#home"
          className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-70 z-10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.2)] backdrop-blur-md">
            <Image
              src="/logo.png"
              alt="Thunderfix"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-[16px] font-[900] tracking-[-0.03em] text-white drop-shadow-md uppercase">
              Thunderfix
            </span>
          </div>
        </a>

        {/* Desktop Navigation — Centered */}
        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/50 transition-colors duration-200 hover:text-white drop-shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action — Right */}
        <div className="flex items-center gap-3 z-10">
          <a
            href="https://wa.me/60144008052"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-full bg-[#f64c18] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_6px_20px_-4px_rgba(246,76,24,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(246,76,24,0.5)]"
          >
            Get a Quote
          </a>
          
          <a
            href="https://wa.me/60144008052"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden rounded-full bg-[#f64c18] px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_6px_20px_-4px_rgba(246,76,24,0.4)]"
          >
            Quote
          </a>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white border border-white/5 transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-[calc(100%+12px)] w-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050505]/70 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-3xl lg:hidden origin-top"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-5 py-4 text-[13px] font-bold tracking-wide text-white/90 transition-colors hover:bg-white/5"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-40" />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
