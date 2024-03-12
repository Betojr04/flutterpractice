import React from "react";
import "../../styles/LandingPageStyles/HeroSection.css";
import heroImage from "../../assets/hero.png";

export const HeroSection = () => {
  return (
    <section className="hero-container">
      <img src={heroImage} alt="Hero" />
    </section>
  );
};
