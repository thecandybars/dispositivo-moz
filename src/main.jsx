import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LanguageProvider from "./contexts/LanguageContext.jsx";
import ThemeProviderWrapper from "./utils/theme/ThemeProviderWrapper.jsx";
import AccesibilityProvider from "./contexts/AccesibilityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccesibilityProvider>
      <ThemeProviderWrapper>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProviderWrapper>
    </AccesibilityProvider>
  </StrictMode>
);
