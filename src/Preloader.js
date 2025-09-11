// Preloader.js
import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Preloader;
