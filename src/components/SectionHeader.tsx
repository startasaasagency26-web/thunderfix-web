"use client";

import React from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  italicTitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, italicTitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl space-y-6 ${centered ? "mx-auto text-center" : "mb-16"}`}>
      {tag && (
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
            {tag}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl leading-[0.95]">
          {title} {italicTitle && <span className="text-black/30 italic font-medium">{italicTitle}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="max-w-2xl text-lg leading-relaxed text-black/60 font-medium">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
