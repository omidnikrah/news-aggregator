import { createRoot } from "react-dom/client";
import { AppProviders } from "@src/providers";
import { AppRoutes } from "@src/router";
import "@src/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <AppRoutes />
  </AppProviders>,
);
