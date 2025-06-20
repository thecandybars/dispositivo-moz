/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Create the context
export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  useEffect(() => {
    const storedLang = localStorage.getItem("appLanguage");
    if (storedLang) {
      setLang(storedLang);
    } else {
      localStorage.setItem("appLanguage", "es");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("appLanguage", lang);
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
