import React from "react";
import "../styles/LandingPageStyles/LandingPage.css";
import { HeroSection } from "../components/LandingPageComponents/HeroSection";
import { Services } from "../components/LandingPageComponents/Services";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <Services />
    </main>
  );
};

export default LandingPage;
