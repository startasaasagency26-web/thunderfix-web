"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] px-6 sm:px-10 flex justify-center pointer-events-none transition-all duration-500">
      <div className="pointer-events-auto relative flex w-full max-w-[1200px] items-center justify-between rounded-full bg-black/40 px-6 py-4 shadow-premium backdrop-blur-3xl border border-white/10">
        
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 transition-all duration-300 hover:opacity-80 z-10"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <Image
              src="/logo.png"
              alt="Thunderfix"
              width={22}
              height={22}
              className="object-contain invert brightness-200"
              priority
            />
          </div>
          <span className="text-[14px] font-black tracking-[-0.02em] text-white uppercase sm:flex hidden">
            Thunderfix
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/40 transition-all duration-300 hover:text-white hover:tracking-[0.25em]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-4 z-10">
          <a
            href="https://wa.me/60144008052"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-full bg-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-black transition-all duration-500 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
          >
            Get a Quote
          </a>
          
          <a
            href="https://wa.me/60144008052"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden rounded-full bg-white px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.1em] text-black"
          >
            Quote
          </a>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white border border-white/10 transition-all hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-[calc(100%+16px)] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/80 p-6 shadow-elevated backdrop-blur-3xl lg:hidden origin-top"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-6 py-5 text-[12px] font-black tracking-[0.1em] uppercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
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
