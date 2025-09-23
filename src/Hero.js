import React from 'react';
import './Hero.css';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Alquila espacios únicos por horas</h1>
        <p>Encuentra el lugar perfecto para tu próximo evento, reunión o actividad.</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
