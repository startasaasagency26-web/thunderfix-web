"use client";

import React from "react";
import { ShieldCheck, Smartphone, Users, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

const statIcons = [Smartphone, Users, MapPin, ShieldCheck];
const statValues = ["5,000+", "98%", "2", "99.9%"];
const brands = ["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "Oppo"];

export default function TrustMetricsSection() {
  const { t } = useLanguage();
  return (
    <section
      aria-labelledby="trust-metrics-heading"
      className="relative border-t border-border bg-surface-low"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-text-muted">
              {t.proof.badge}
            </p>

            <h2
              id="trust-metrics-heading"
              className="text-3xl font-semibold tracking-[-0.04em] text-text sm:text-4xl lg:text-5xl"
            >
              {t.proof.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666] sm:text-base">
              {t.proof.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {t.proof.stats.map((stat, i) => {
            const Icon = statIcons[i];
            const value = statValues[i];

            return (
              <Reveal key={stat.label} delay={0.1 * i}>
                <article
                  className="group rounded-[28px] border border-border bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#CFC8BA] hover:shadow-[0_20px_60px_rgba(10,10,10,0.06)] focus-within:-translate-y-1 focus-within:border-[#CFC8BA] focus-within:shadow-[0_20px_60px_rgba(10,10,10,0.06)] motion-reduce:transform-none motion-reduce:transition-none h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ECE8DF] bg-[#FAF8F3] text-text transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="mt-8">
                    <div className="text-4xl font-semibold leading-none tracking-[-0.06em] text-text sm:text-5xl">
                      {value}
                    </div>

                    <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#7A7A7A]">
                      {stat.label}
                    </h3>

                    <p className="mt-4 max-w-[22ch] text-sm leading-6 text-[#666666]">
                      {stat.subtext}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4} className="mt-16 border-t border-border pt-10">
          <div>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-text-muted">
                {t.proof.supportedBrands}
              </p>

              <div
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end"
                aria-label="Supported device brands"
              >
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-full border border-border bg-white px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.24em] text-text-muted transition-colors duration-300 hover:text-text"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-[#666666]">
                {t.proof.footerText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
