"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { name: "Services",     href: "/#services"     },
  { name: "Why Us",       href: "/#why-us"       },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ",          href: "/#faq"          },
  { name: "Locations",    href: "/locations"     },
];

const SCROLL_THRESHOLD = 24;
const premiumEase = [0.16, 1, 0.3, 1] as const;
const CTA_HREF = "https://wa.me/60144008052";

// ─── Mobile Drawer ─────────────────────────────────────────────────────────────
function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Focus close button when drawer opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Escape key closes drawer
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }, []);

  const overlayVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  };

  const drawerVariants = {
    hidden:  { x: "100%" },
    visible: { x: 0 },
    exit:    { x: "100%" },
  };

  const itemVariants = {
    hidden:  { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.08 + i * 0.055, duration: 0.45, ease: premiumEase },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="drawer-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className="fixed inset-0 z-998"
            style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer-panel"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleKeyDown}
            variants={reducedMotion ? overlayVariants : drawerVariants}
            initial="hidden"
            animate="visible"
            exit={reducedMotion ? "hidden" : "exit"}
            transition={{ duration: reducedMotion ? 0.15 : 0.5, ease: premiumEase }}
            className="fixed right-0 top-0 z-999 h-full w-full max-w-[420px] bg-white shadow-[−32px_0_80px_rgba(0,0,0,0.12)] flex flex-col overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
              <a href="/" onClick={onClose} aria-label="Go to Thunderfix homepage" className="flex items-center gap-3.5">
                <div className="relative shrink-0 overflow-hidden" style={{ width: 36, height: 36 }}>
                  <Image
                    src="/brand/thunderfix-symbol-transparent.png"
                    alt=""
                    fill
                    sizes="36px"
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="relative shrink-0 overflow-hidden" style={{ width: 130, height: 28 }}>
                  <Image
                    src="/brand/thunderfix-wordmark-transparent.png"
                    alt="Thunderfix"
                    fill
                    sizes="130px"
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/50 transition-all hover:bg-black/10 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                <X size={16} />
              </button>
            </div>

            {/* Nav Links */}
            <nav aria-label="Mobile navigation" className="flex flex-col px-3 py-4 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={reducedMotion ? {} : itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl px-5 py-5 text-[13px] font-black tracking-[0.18em] uppercase text-black/50 transition-all duration-300 hover:bg-black/4 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {link.name}
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-50 group-hover:translate-x-0"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="px-6 pb-8 pt-2">
              <a
                href={CTA_HREF}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Start Repair
                <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Hamburger ─────────────────────────────────────────────────────────────────
function HamburgerButton({
  isOpen,
  onClick,
  triggerRef,
}: {
  isOpen: boolean;
  onClick: () => void;
  triggerRef: React.Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={triggerRef}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition-all hover:bg-black/10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
    >
      <span className="relative flex h-4 w-5 flex-col justify-between">
        <span
          className="block h-px w-full rounded-full bg-current transition-all duration-300 origin-center"
          style={isOpen
            ? { transform: "translateY(7px) rotate(45deg)" }
            : { transform: "none" }}
        />
        <span
          className="block h-px w-full rounded-full bg-current transition-all duration-300"
          style={isOpen ? { opacity: 0, transform: "scaleX(0)" } : { opacity: 1, transform: "none" }}
        />
        <span
          className="block h-px w-full rounded-full bg-current transition-all duration-300 origin-center"
          style={isOpen
            ? { transform: "translateY(-7px) rotate(-45deg)" }
            : { transform: "none" }}
        />
      </span>
    </button>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const reducedMotion = useReducedMotion();
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // initialise on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Return focus to hamburger when drawer closes
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => hamburgerRef.current?.focus(), 50);
  }, []);

  // ── Scroll-driven pill styles ────────────────────────────────────────────────
  const pillStyle: React.CSSProperties = isScrolled
    ? {
        maxWidth: "960px",
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "9999px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        padding: "8px 20px",
      }
    : {
        maxWidth: "1200px",
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        border: "1px solid transparent",
        borderRadius: "0px",
        boxShadow: "none",
        padding: "16px 20px",
      };

  return (
    <>
      {/* ── Header shell — full-width positioner ── */}
      <motion.header
        initial={reducedMotion ? {} : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: premiumEase }}
        className="fixed inset-x-0 top-0 z-100 flex justify-center px-4 pt-4"
      >
        {/* ── Inner pill — transitions between states ── */}
        <div
          className="w-full"
          style={{
            ...pillStyle,
            transition: isScrolled
              ? "all 600ms cubic-bezier(0.16,1,0.3,1)"
              : "all 600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3.5 group shrink-0"
              aria-label="Go to Thunderfix homepage"
            >
              {/* TF monogram icon */}
              <div
                className="relative shrink-0 overflow-hidden transition-all duration-500"
                style={{
                  width:  isScrolled ? "34px" : "44px",
                  height: isScrolled ? "34px" : "44px",
                }}
              >
                <Image
                  src="/brand/thunderfix-symbol-transparent.png"
                  alt=""
                  fill
                  sizes="44px"
                  priority
                  className="object-contain"
                />
              </div>
              {/* Wordmark */}
              <div
                className="relative shrink-0 overflow-hidden hidden sm:block transition-all duration-500"
                style={{
                  width:  isScrolled ? "120px" : "155px",
                  height: isScrolled ? "24px"  : "30px",
                }}
              >
                <Image
                  src="/brand/thunderfix-wordmark-transparent.png"
                  alt="Thunderfix"
                  fill
                  sizes="155px"
                  priority
                  className="object-contain object-left"
                />
              </div>
            </a>

            {/* Desktop nav */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] font-black tracking-[0.2em] uppercase text-black/35 transition-colors duration-300 hover:text-black group focus-visible:outline-none focus-visible:text-black"
                >
                  {link.name}
                  {/* Hover underline dot */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-0 rounded-full bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={CTA_HREF}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 font-black uppercase text-white bg-black transition-all duration-500 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                style={{
                  fontSize:     "10px",
                  letterSpacing:"0.18em",
                  borderRadius: "9999px",
                  padding:       isScrolled ? "8px 20px" : "11px 28px",
                  transition:    "all 500ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                Start Repair
              </a>

              <HamburgerButton
                isOpen={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                triggerRef={hamburgerRef}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer — rendered outside header to avoid stacking context issues */}
      <MobileDrawer isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
