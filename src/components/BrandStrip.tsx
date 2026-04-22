"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Users, Award, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Devices Restored", value: "15,000+", icon: Smartphone },
  { label: "Happy Clients", value: "98%", icon: Users },
  { label: "Service Centers", value: "4 Locations", icon: Award },
  { label: "Success Rate", value: "99.9%", icon: ShieldCheck },
];

export default function BrandStrip() {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-width relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/40 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
                <stat.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none tracking-tight text-white mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/50 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Brands Sub-strip */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-8 opacity-20 hover:opacity-50 transition-opacity duration-700 grayscale">
          {["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "Oppo"].map((brand) => (
            <span
              key={brand}
              className="text-[12px] font-black uppercase tracking-[0.2em] text-white"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
