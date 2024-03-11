import React from "react";
import "../../styles/LandingPageStyles/HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h2>Your Company Name Here</h2>
        <p>
          Snippet of text about the company, what it does, and why it's great.
        </p>
      </div>
      <div className="hero-image">
        This is where the image will go or be the background of the text in a
        cool design.
      </div>
    </section>
  );
};
