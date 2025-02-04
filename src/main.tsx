import { createRoot } from "react-dom/client";
import App from "@src/App.tsx";
import { AppProviders } from "@src/providers";
import "@src/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
