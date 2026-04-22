"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Apple",
  "Samsung",
  "Google",
  "Huawei",
  "Xiaomi",
  "Oppo",
  "Vivo",
  "Sony",
];

export default function BrandStrip() {
  return (
    <div className="border-y border-black/[0.04] bg-white/30 py-8 backdrop-blur-sm">
      <div className="container-width">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale transition-opacity hover:opacity-100">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-[14px] font-[900] uppercase tracking-[0.25em] text-black"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
