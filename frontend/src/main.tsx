import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.ts";
import App from "./App.tsx";
import "aos/dist/aos.css";
import "./variables.css";
import { HashRouter } from "react-router-dom";
import { ScrollToTop } from "./components/index.ts";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <ScrollToTop />
      <App />
    </StrictMode>
  </HashRouter>
);
