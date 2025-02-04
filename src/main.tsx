import { createRoot } from "react-dom/client";
import { AppProviders } from "@src/providers";
import { AppRoutes } from "@src/router";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import "@src/styles/global.css";

dayjs.extend(relativeTime);

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <AppRoutes />
  </AppProviders>,
);
