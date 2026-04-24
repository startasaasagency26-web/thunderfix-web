"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

// ─── Data ─────────────────────────────────────────────────────────────────────
const navKeys = [
  { key: "services",     href: "/#services"     },
  { key: "whyUs",       href: "/#why-us"       },
  { key: "testimonials", href: "/#testimonials" },
  { key: "faq",          href: "/#faq"          },
  { key: "locations",    href: "/locations"     },
] as const;

const SCROLL_THRESHOLD = 24;
const premiumEase = [0.16, 1, 0.3, 1] as const;
const CTA_HREF = "/locations";

// ─── Language Toggle ──────────────────────────────────────────────────────────
function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div className={`flex items-center rounded-full bg-black/5 p-1 shrink-0 ${mobile ? "mx-auto mb-6 w-max" : "hidden md:flex"}`}>
      <button 
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        aria-label="Switch language to English"
        className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${locale === "en" ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black"}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLocale("ms")}
        aria-pressed={locale === "ms"}
        aria-label="Tukar bahasa ke Bahasa Melayu"
        className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${locale === "ms" ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black"}`}
      >
        BM
      </button>
    </div>
  );
}

// ─── Mobile Drawer ─────────────────────────────────────────────────────────────
function MobileDrawer({
  isOpen,
  onClose,
  onNavClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavClose: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();
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
  useBodyScrollLock(isOpen);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Immediate close without waiting for exit animation or focus return
    onNavClose();

    if (href.startsWith("/#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (pathname === "/") {
        // Same page scroll
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const overlayVariants = {
    hidden:  { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const drawerVariants = {
    hidden:  { x: "100%", opacity: 1 },
    visible: { x: 0, opacity: 1 },
    exit:    { x: "100%", opacity: 1 },
  };

  const itemVariants = {
    hidden:  { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 + i * 0.04, duration: 0.35, ease: premiumEase },
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
            transition={{ duration: reducedMotion ? 0 : 0.22 }}
            className="fixed inset-0 z-998"
            style={{ 
              backgroundColor: "rgba(0,0,0,0.5)", 
              // Removed blur on mobile for better performance
              backdropFilter: "none",
              WebkitBackdropFilter: "none"
            }}
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
            variants={(reducedMotion ? overlayVariants : drawerVariants) as any}
            initial="hidden"
            animate="visible"
            exit={reducedMotion ? "hidden" : "exit"}
            transition={{ duration: reducedMotion ? 0.15 : 0.28, ease: premiumEase }}
            className="fixed right-0 top-0 z-999 h-full w-full max-w-[420px] bg-white shadow-[−32px_0_80px_rgba(0,0,0,0.12)] flex flex-col overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
              <Link href="/" onClick={(e) => handleNavClick(e, "/")} aria-label="Go to Thunderfix homepage" className="flex items-center gap-3.5">
                <div className="relative shrink-0 overflow-hidden" style={{ width: 36, height: 36 }}>
                  <Image
                    src="/brand/thunderfix-symbol-transparent.png"
                    alt=""
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div className="relative shrink-0 overflow-hidden" style={{ width: 130, height: 28 }}>
                  <Image
                    src="/brand/thunderfix-wordmark-transparent.png"
                    alt="Thunderfix"
                    fill
                    sizes="130px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
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
            <nav aria-label={t.nav.menu} className="flex flex-col px-3 py-4 flex-1">
              {navKeys.map((link, i) => (
                <motion.div
                  key={link.key}
                  custom={i}
                  variants={reducedMotion ? {} : itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center justify-between rounded-2xl px-5 py-5 text-[13px] font-black tracking-[0.18em] uppercase text-black/50 transition-all duration-300 hover:bg-black/4 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  >
                    {t.nav[link.key]}
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-50 group-hover:translate-x-0"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Drawer CTA & Language Toggle */}
            <div className="px-6 pb-8 pt-2 flex flex-col items-center">
              <LanguageToggle mobile />
              <Link
                href={CTA_HREF}
                onClick={(e) => handleNavClick(e, CTA_HREF)}
                aria-label={t.common.selectBranch}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                {t.nav.startRepair}
                <ArrowRight size={12} />
              </Link>
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
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 text-black transition-all hover:bg-black/10 xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
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
  const { t, locale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll detection with state guard to prevent redundant re-renders
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > SCROLL_THRESHOLD;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    
    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Normal close handler (e.g. clicking X or overlay)
  const handleClose = useCallback(() => {
    setIsOpen(false);
    // Return focus to hamburger for accessibility
    setTimeout(() => hamburgerRef.current?.focus(), 50);
  }, []);

  // Navigation close handler (closes instantly, no focus return needed)
  const handleNavClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (pathname === "/") {
        // Same page scroll
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  // ── Scroll-driven pill styles ────────────────────────────────────────────────
  const pillStyle: React.CSSProperties = isScrolled
    ? {
        maxWidth: "1120px",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)", // Reduced from 24px for better mobile perf
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "9999px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        padding: "8px 18px",
      }
    : {
        maxWidth: "1240px",
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "none", // Avoid filter on initial state
        WebkitBackdropFilter: "none",
        border: "1px solid transparent",
        borderRadius: "0px",
        boxShadow: "none",
        padding: "12px 24px",
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
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full">

            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
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
              {/* Wordmark (Desktop only) */}
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
            </Link>

            {/* Mobile Center Wordmark */}
            <Link 
              href="/" 
              onClick={(e) => handleNavClick(e, "/")}
              className="sm:hidden justify-self-center relative overflow-hidden" 
              style={{ width: "clamp(110px, 32vw, 150px)", height: "24px" }}
              aria-label="Go to Thunderfix homepage"
            >
              <Image
                src="/brand/thunderfix-wordmark-transparent.png"
                alt="Thunderfix"
                fill
                sizes="150px"
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label={t.nav.menu}
              className="hidden xl:flex items-center justify-center whitespace-nowrap"
              style={{ gap: "clamp(16px, 2vw, 32px)" }}
            >
              {navKeys.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-[11px] font-black uppercase text-black/35 transition-colors duration-300 hover:text-black group focus-visible:outline-none focus-visible:text-black"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {t.nav[link.key]}
                  {/* Hover underline dot */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-0 rounded-full bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3 sm:gap-3.5 shrink-0 justify-self-end">
              <LanguageToggle />
              <Link
                href={CTA_HREF}
                aria-label={t.common.selectBranch}
                className="hidden sm:flex items-center justify-center gap-1.5 font-black uppercase text-white bg-black transition-all duration-500 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                style={{
                  fontSize:     "10px",
                  letterSpacing:"0.18em",
                  borderRadius: "9999px",
                  padding:       isScrolled ? "8px 20px" : "11px 28px",
                  transition:    "all 500ms cubic-bezier(0.16,1,0.3,1)",
                  minWidth:      locale === "ms" ? "124px" : "130px",
                }}
              >
                {t.nav.startRepair}
              </Link>

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
      <MobileDrawer 
        isOpen={isOpen} 
        onClose={handleClose} 
        onNavClose={handleNavClose} 
      />
    </>
  );
}
