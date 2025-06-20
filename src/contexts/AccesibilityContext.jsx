/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the context
export const AccesibilityContext = createContext();

export default function AccesibilityProvider({ children }) {
  const [fontScale, setFontScale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  // useEffect(() => {
  //   const storedFontScale = localStorage.getItem("fontScale");
  //   if (storedFontScale) {
  //     setFontScale(storedFontScale);
  //   } else {
  //     localStorage.setItem("fontScale", 1);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("fontScale", fontScale);
  // }, [fontScale]);
  return (
    <AccesibilityContext.Provider
      value={{ fontScale, setFontScale, highContrast, setHighContrast }}
    >
      {children}
    </AccesibilityContext.Provider>
  );
}
