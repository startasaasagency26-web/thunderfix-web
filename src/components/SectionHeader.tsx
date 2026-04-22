"use client";

import React from "react";
import { motion } from "framer-motion";

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
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl leading-[0.95]"
      >
        {title} {italicTitle && <span className="text-black/30 italic font-medium">{italicTitle}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-2xl text-lg leading-relaxed text-black/60 font-medium"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
