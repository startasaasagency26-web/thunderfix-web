"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Smartphone, Users, MapPin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  {
    icon: Smartphone,
    value: "15,000+",
    label: "Devices Repaired",
    subtext: "Across phones, tablets, and essential repairs",
  },
  {
    icon: Users,
    value: "98%",
    label: "Customer Satisfaction",
    subtext: "Built through trust, speed, and consistency",
  },
  {
    icon: MapPin,
    value: "4",
    label: "Service Centers",
    subtext: "Convenient support across multiple locations",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Repair Success Rate",
    subtext: "Reliable results with a transparent process",
  },
];

const brands = ["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "Oppo"];

export default function TrustMetricsSection() {
  return (
    <section
      aria-labelledby="trust-metrics-heading"
      className="relative border-t border-[#E8E5DE] bg-[#F7F6F2]"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A]">
              Trusted by Thousands
            </p>

            <h2
              id="trust-metrics-heading"
              className="text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl"
            >
              Proof that your device is in the right hands
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666] sm:text-base">
              We combine repair volume, customer satisfaction, and operational
              consistency to give customers one thing that matters most:
              confidence before they even book.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <FadeUp key={stat.label} delay={0.1 * i}>
                <article
                  className="group rounded-[28px] border border-[#E8E5DE] bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#CFC8BA] hover:shadow-[0_20px_60px_rgba(17,17,17,0.06)] focus-within:-translate-y-1 focus-within:border-[#CFC8BA] focus-within:shadow-[0_20px_60px_rgba(17,17,17,0.06)] motion-reduce:transform-none motion-reduce:transition-none h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ECE8DF] bg-[#FAF8F3] text-[#111111] transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="mt-8">
                    <div className="text-4xl font-semibold leading-none tracking-[-0.06em] text-[#111111] sm:text-5xl">
                      {stat.value}
                    </div>

                    <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#7A7A7A]">
                      {stat.label}
                    </h3>

                    <p className="mt-4 max-w-[22ch] text-sm leading-6 text-[#666666]">
                      {stat.subtext}
                    </p>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.4} className="mt-16 border-t border-[#E8E5DE] pt-10">
          <div>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A]">
                Supported Brands
              </p>

              <div
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end"
                aria-label="Supported device brands"
              >
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-full border border-[#E8E5DE] bg-white px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A] transition-colors duration-300 hover:text-[#111111]"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-[#666666]">
                Fast diagnostics. Genuine care. Transparent repair process.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
