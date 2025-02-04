import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@src/constants";
import App from "@src/App";
import Home from "@src/pages/home";
import Preferences from "@src/pages/preferences";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PREFERENCES} element={<Preferences />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
