import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

export const Router = () => {
  return (
    <BrowserRouter basename="/landingpage">
      <Routes>
        {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
