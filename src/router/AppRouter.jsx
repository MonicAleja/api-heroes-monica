import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPages from "../auth/pages/LoginPages";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
