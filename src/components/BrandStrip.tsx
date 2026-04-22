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
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden border-y border-black/5">
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
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/30 transition-all duration-500 group-hover:bg-black group-hover:text-white">
                <stat.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none tracking-tighter text-black mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 group-hover:text-black/50 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Brands Sub-strip */}
        <div className="mt-24 pt-16 border-t border-black/5 flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-8 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale">
          {["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "Oppo"].map((brand) => (
            <span
              key={brand}
              className="text-[12px] font-black uppercase tracking-[0.2em] text-black"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
