import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("../views/LandingPage"));

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
