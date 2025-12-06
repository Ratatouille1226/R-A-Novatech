import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.ts";
import App from "./App.tsx";
import "./variables.css";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/index.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollToTop />
      <App />
    </StrictMode>
  </BrowserRouter>
);
