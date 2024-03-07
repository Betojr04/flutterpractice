import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing componenents
import { Nav } from "../components/Nav.js";

// importing views with lazy loading
const LandingPage = lazy(() => import("../views/LandingPage"));

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
