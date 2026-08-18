"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("charifund_lang") as Language;
      if (stored === "en" || stored === "bn") {
        setLanguageState(stored);
      }
    } catch (e) {
      console.error("Failed to load language preference", e);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("charifund_lang", lang);
    } catch (e) {
      console.error("Failed to save language preference", e);
    }
  };

  const t = (key: keyof typeof translations.en): string => {
    return translations[language]?.[key] || translations.en[key] || (key as string);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
