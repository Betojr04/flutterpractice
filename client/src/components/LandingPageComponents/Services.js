import React from "react";
import "../../styles/LandingPageStyles/Services.css";

export const Services = () => {
  return (
    <section className="services-container">
      <div className="cards-container">
        <div className="card">
          <h3>Service 1</h3>
          <p>Snippet of text about the service.</p>
        </div>
        <div className="card">
          <h3>Service 2</h3>
          <p>Snippet of text about the service.</p>
        </div>
        <div className="card">
          <h3>Service 3</h3>
          <p>Snippet of text about the service.</p>
        </div>
      </div>
    </section>
  );
};
