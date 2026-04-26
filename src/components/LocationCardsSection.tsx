"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ExternalLink,
  ArrowRight,
  Navigation,
  Phone,
  X,
  Map,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOCATIONS = [
  {
    name: "Thunderfix Seri Kembangan",
    shortName: "Seri Kembangan",
    area: "Seri Kembangan",
    phone: "017-700 5497",
    telHref: "tel:+60177005497",
    googleUrl: "https://share.google/W4kiym7rddhhE0Cli",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Thunderfix+Seri+Kembangan",
    wazeUrl: "https://waze.com/ul?q=Thunderfix%20Seri%20Kembangan",
    descKey: "seriKembangan",
    image: "/branch-seri-kembangan-new.jpg",
    imageAlt: "Thunderfix Seri Kembangan storefront",
    dotColor: "bg-black",
    bandClass: "from-zinc-200 via-zinc-100 to-white",
    index: "01",
    whatsappUrl: {
      en: "https://wa.me/60177005497?text=Hi%20Thunderfix%20Seri%20Kembangan%2C%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.",
      ms: "https://wa.me/60177005497?text=Hi%20Thunderfix%20Seri%20Kembangan%2C%20saya%20ingin%20bertanya%20tentang%20servis%20baiki%20peranti."
    }
  },
  {
    name: "Thunderfix Shah Alam Seksyen 7",
    shortName: "Shah Alam Seksyen 7",
    area: "Shah Alam Seksyen 7",
    phone: "014-400 8052",
    telHref: "tel:+60144008052",
    googleUrl: "https://share.google/T02eW3oZMtksfE0pu",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Thunderfix+Shah+Alam+Seksyen+7",
    wazeUrl:
      "https://waze.com/ul?q=Thunderfix%20Shah%20Alam%20Seksyen%207",
    descKey: "shahAlam",
    image: "/branch-shah-alam.webp",
    imageAlt: "Thunderfix Shah Alam Seksyen 7 storefront",
    dotColor: "bg-amber-400",
    bandClass: "from-amber-200 via-amber-100/60 to-white",
    index: "02",
    whatsappUrl: {
      en: "https://wa.me/60144008052?text=Hi%20Thunderfix%20Shah%20Alam%20Seksyen%207%2C%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.",
      ms: "https://wa.me/60144008052?text=Hi%20Thunderfix%20Shah%20Alam%20Seksyen%207%2C%20saya%20ingin%20bertanya%20tentang%20servis%20baiki%20peranti."
    }
  },
] as const;

type LocationEntry = (typeof LOCATIONS)[number];

// ─── Directions Modal ─────────────────────────────────────────────────────────
function DirectionsModal({
  loc,
  onClose,
}: {
  loc: LocationEntry;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { closeButtonRef.current?.focus(); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useBodyScrollLock(true);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, []);

  const navOptions = [
    { label: t.common.googleMaps, href: loc.googleMapsUrl, icon: Map, description: "Open in Google Maps", ariaLabel: `Open ${loc.name} in Google Maps` },
    { label: t.common.waze, href: loc.wazeUrl, icon: Navigation, description: "Navigate with Waze", ariaLabel: `Navigate to ${loc.name} with Waze` },
    { label: t.common.viewOnGoogle, href: loc.googleUrl, icon: ExternalLink, description: "View Google Business listing", ariaLabel: `View ${loc.name} on Google` },
  ];

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.2 }}
        className="fixed inset-0 z-200 flex items-center justify-center p-4"
        style={{ 
          backgroundColor: "rgba(0,0,0,0.45)", 
          backdropFilter: "none",
          WebkitBackdropFilter: "none"
        }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        aria-hidden="true"
      />
      <motion.div
        ref={panelRef}
        key="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="directions-modal-title"
        aria-describedby="directions-modal-desc"
        onKeyDown={handleKeyDown}
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.99 }}
        transition={{ duration: reducedMotion ? 0 : 0.25, ease }}
        className="fixed inset-0 z-201 flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-sm bg-white rounded-3xl border border-black/8 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.18)] overflow-hidden">
          <div className="flex items-start justify-between p-6 pb-4">
            <div>
              <p id="directions-modal-title" className="text-[13px] font-black uppercase tracking-[0.22em] text-black">{t.locationCards.chooseApp}</p>
              <p id="directions-modal-desc" className="mt-1 text-[12px] text-black/40 font-medium leading-relaxed">{t.locationCards.directionsTo} {loc.name}</p>
            </div>
            <button ref={closeButtonRef} onClick={onClose} aria-label="Close directions chooser"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-black/50 transition-all hover:bg-black/10 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20">
              <X size={14} />
            </button>
          </div>
          <div className="h-px bg-black/5 mx-6" />
          <div className="flex flex-col gap-2 p-4">
            {navOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a key={opt.label} href={opt.href} target="_blank" rel="noopener noreferrer" aria-label={opt.ariaLabel}
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 hover:bg-surface-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-low border border-black/5 text-black/50 transition-all duration-200 group-hover:bg-black group-hover:text-white">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-black text-black">{opt.label}</p>
                    <p className="text-[11px] text-black/40 font-medium mt-0.5">{opt.description}</p>
                  </div>
                  <ArrowRight size={14} className="text-black/25 group-hover:text-black/50 transition-colors shrink-0" />
                </a>
              );
            })}
          </div>
          <div className="px-6 pb-5">
            <p className="text-center text-[10px] text-black/25 font-medium">{t.locationCards.opensInNewTab}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Location Card ────────────────────────────────────────────────────────────
function LocationCard({
  loc,
  delay,
  onGetDirections,
  triggerRef,
}: {
  loc: LocationEntry;
  delay: number;
  onGetDirections: () => void;
  triggerRef: (el: HTMLButtonElement | null) => void;
}) {
  const { t, locale } = useLanguage();
  return (
    <Reveal delay={delay} className="flex h-full">
      <article
        className="group relative flex flex-col w-full bg-white rounded-3xl border border-black/[0.07] shadow-card transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated hover:border-black/12 overflow-hidden focus-within:-translate-y-1 focus-within:shadow-elevated motion-reduce:transform-none motion-reduce:transition-none"
        aria-label={`Thunderfix branch at ${loc.area}`}
      >
        {/* Top accent band */}
        <div className={`h-1.5 w-full shrink-0 bg-linear-to-r ${loc.bandClass} opacity-90`} />

        {/* ── Storefront image — flush to card top, portrait ratio ── */}
        <div
          className="relative w-full overflow-hidden shrink-0"
          style={{ aspectRatio: "4 / 5" }}
        >
          <Image
            src={loc.image}
            alt={loc.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover object-center"
          />
          {/* Subtle bottom fade into card */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/30 to-transparent pointer-events-none" />
        </div>

        {/* ── Card body ── */}
        <div className="flex flex-col flex-1 px-6 pt-4 pb-6 lg:px-7 lg:pb-7 h-full">

          {/* Meta row */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black/20">{loc.index}</span>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-low border border-black/5 text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
              <span className={`h-1.5 w-1.5 rounded-full ${loc.dotColor} opacity-70`} />
              {loc.area}
            </div>
          </div>

          {/* Title — min-height so both cards align */}
          <h2 className="min-h-[3.2rem] text-[clamp(1.25rem,2vw,1.6rem)] font-black leading-tight tracking-[-0.03em] text-black mb-2">
            {loc.name}
          </h2>

          {/* Phone */}
          <a href={loc.telHref}
            className="inline-flex items-center gap-2 mb-4 text-[12px] font-bold text-black/40 hover:text-black transition-colors duration-200 w-fit"
            aria-label={`Call ${loc.name} at ${loc.phone}`}>
            <Phone size={12} strokeWidth={2} />
            {loc.phone}
          </a>

          {/* Description — flex-1 pushes CTA to bottom */}
          <p className="flex-1 text-[13px] leading-relaxed text-black/45 font-medium mb-6">
            {t.locationCards.descriptions[loc.descKey]}
          </p>

          {/* CTA grid */}
          <div className="mt-auto pt-5 border-t border-black/5 flex flex-col gap-3 sm:grid sm:grid-cols-2">
            {/* Get Directions */}
            <button
              ref={triggerRef}
              type="button"
              onClick={onGetDirections}
              aria-label={`Get directions to ${loc.name}`}
              className="group/btn flex flex-1 items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-black text-white text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 motion-reduce:transform-none min-h-[44px]"
            >
              <Navigation size={12} />
              {t.locationCards.getDirections}
              <ArrowRight size={11} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </button>

            {/* View on Google */}
            <a href={loc.googleUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`View ${loc.name} on Google`}
              className="flex flex-1 items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border-2 border-black/10 text-black text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 motion-reduce:transform-none min-h-[44px]">
              <ExternalLink size={12} />
              {t.locationCards.viewOnGoogle}
            </a>

            {/* Start Repair — correct branch phone */}
            <a href={loc.telHref}
              aria-label={`Call ${loc.name}`}
              className="group flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border-2 border-black/10 text-black text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:border-black/25 hover:bg-surface-mid hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 motion-reduce:transform-none min-h-[44px]">
              <Phone size={12} className="text-black/40 group-hover:text-black transition-colors" />
              {t.locationCards.startRepair}
            </a>

            {/* WhatsApp Inquiry */}
            <a href={loc.whatsappUrl[locale]} target="_blank" rel="noopener noreferrer"
              aria-label={`${t.locationCards.sendWhatsappInquiry} ${loc.name}`}
              className="group flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border-2 border-[#25D366]/35 bg-[#fdfdfd] text-black text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/5 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 motion-reduce:transform-none min-h-[44px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]/70 group-hover:text-[#25D366] transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span className="sm:hidden">{t.locationCards.whatsapp}</span>
              <span className="hidden sm:inline">{t.locationCards.whatsappInquiry}</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function LocationCardsSection() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClose = useCallback(() => {
    const idx = activeModal;
    setActiveModal(null);
    if (idx !== null) {
      setTimeout(() => triggerRefs.current[idx]?.focus(), 50);
    }
  }, [activeModal]);

  return (
    <>
      <section
        id="location-cards"
        aria-labelledby="locations-heading"
        className="bg-surface-low py-24 md:py-32 lg:py-48 border-t border-black/5"
      >
        <div className="container-width">

          {/* Section header */}
          <Reveal>
            <div className="flex flex-col items-center text-center mb-20">
              <span className="badge-pill mb-8">Our Branches</span>
              <h2
                id="locations-heading"
                className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.04em] text-black max-w-3xl"
              >
                Two locations.{" "}
                <span className="text-black/25">One standard of excellence.</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-black/45 font-medium max-w-xl">
                Both branches offer the full Thunderfix experience — premium
                repairs, transparent pricing, and a team you can trust.
              </p>
            </div>
          </Reveal>

          {/* Cards — items-stretch keeps both at equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {LOCATIONS.map((loc, i) => (
              <LocationCard
                key={loc.area}
                loc={loc}
                delay={0.1 + i * 0.12}
                onGetDirections={() => setActiveModal(i)}
                triggerRef={(el) => { triggerRefs.current[i] = el; }}
              />
            ))}
          </div>

          {/* Visual map area */}
          <Reveal delay={0.3} className="mt-16">
            <div className="relative rounded-3xl overflow-hidden border border-black/[0.07] bg-white shadow-card">
              <div className="relative flex flex-col items-center justify-center py-20 px-8 bg-linear-to-br from-surface-low via-white to-surface-mid overflow-hidden">
                {/* Radial rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[280, 420, 560].map((size, i) => (
                    <div
                      key={size}
                      className="absolute rounded-full border border-black/5"
                      style={{ width: size, height: size, opacity: 0.6 - i * 0.15 }}
                    />
                  ))}
                </div>

                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-elevated">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>

                <p className="relative z-10 text-[12px] font-black uppercase tracking-[0.3em] text-black/30 mb-6">
                  Selangor, Malaysia
                </p>

                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
                  {LOCATIONS.map((loc) => (
                    <a
                      key={loc.area}
                      href={loc.googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${loc.name} on Google`}
                      className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-black/8 shadow-soft text-[12px] font-black uppercase tracking-[0.18em] text-black/70 transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:-translate-y-1 active:scale-95 motion-reduce:transform-none"
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${loc.dotColor} transition-colors group-hover:bg-white`} />
                      {loc.shortName}
                      <ExternalLink size={12} className="opacity-40 group-hover:opacity-80 transition-opacity" />
                    </a>
                  ))}
                </div>

                <p className="relative z-10 mt-8 text-[12px] text-black/30 font-medium">
                  Click a branch chip to view it on Google
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Directions modal */}
      {activeModal !== null && (
        <DirectionsModal loc={LOCATIONS[activeModal]} onClose={handleClose} />
      )}
    </>
  );
}
