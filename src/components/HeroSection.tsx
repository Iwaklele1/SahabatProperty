// src/components/HeroSection.tsx
import React from "react";
import "../styles/HeroSection.css";
import rumah3 from "../assets/rumah3.png";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <img src={rumah3} alt="Hero" className="hero-image" />

      <div className="hero-content">
        <h1 className="hero-title">
          Sahabat Property – Teman Setia <br /> Mewujudkan Hunian Impian
        </h1>
        <p className="hero-subtitle">
          Di Sahabat Property, kami percaya bahwa rumah bukan hanya bangunan, 
          tetapi tempat di mana cerita terbaik hidup Anda dimulai.
        </p>
        <p className="hero-desc">
          Dengan komitmen pada kejujuran, transparansi, dan pelayanan sepenuh hati, 
          kami hadir untuk menjadi mitra terpercaya dalam setiap langkah perjalanan properti Anda.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
