"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, translations } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: typeof translations["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("tf_locale") as Locale;
    if (saved === "en" || saved === "ms") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("tf_locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = translations[locale];

  const value = React.useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
