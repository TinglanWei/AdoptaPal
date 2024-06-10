import React from "react";
import { Container } from "react-bootstrap";
import "./css/Frontpage.css";

const Frontpage = () => {
  return (
      <div className="hero-section">
      <div className="text-overlay">
        <h1 className="hero-title">Help Our Pal Friend</h1>
        <p className="hero-subtext">
          <span className="highlight">100+</span> pets
          <span className="highlight">15</span> shelters
          <span className="highlight">200+</span> families
        </p>
        <p className="hero-subtext">Connect directly with shelters and individual owners.</p>
      </div>
    </div>
  );
};

export default Frontpage;
