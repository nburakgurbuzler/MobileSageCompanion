import React, { createContext, useContext, useEffect, useState } from "react";
import { LanguageType } from "@/types/aiTools";

interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  t: (tr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>("tr");

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as LanguageType | null;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Set html lang attribute
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "tr" ? "en" : "tr");
  };

  // Simple translation function
  const t = (tr: string, en: string) => {
    return language === "tr" ? tr : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
