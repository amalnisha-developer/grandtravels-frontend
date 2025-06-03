// src/pages/TirunelveliPage.js
import React from 'react';
import NellaiapparTempleImage from '../assets/nellaiappar_temple.jpg';
import PapanasamFallsImage from '../assets/papanasam_falls.jpg';
import ManimutharDamImage from '../assets/dam.jpg';
import CourtallamFallsImage from '../assets/Kutralam.jpg';
import SankaranainarKovilImage from '../assets/templee.jpg';
import UvariBeachImage from '../assets/urvasibeach.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Tirunelveli page

const Tirunelveli = () => {
  return (
    <div className="madurai-page">
      <h1>Tirunelveli</h1>
      <p>Famous for halwa. Savor the sweet delights and rich cultural heritage of Tirunelveli.</p>
      
      <h2>Famous Places in Tirunelveli</h2>
      
      <div className="place">
        <img src={NellaiapparTempleImage} alt="Nellaiappar Temple" />
        <div className="place-info">
          <h3>Nellaiappar Temple</h3>
          <p>An ancient temple dedicated to Lord Shiva, known for its grand architecture and religious significance.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={PapanasamFallsImage} alt="Papanasam Falls" />
        <div className="place-info">
          <h3>Papanasam Falls</h3>
          <p>A picturesque waterfall located in the Western Ghats, offering a serene environment and scenic beauty.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={ManimutharDamImage} alt="Manimuthar Dam" />
        <div className="place-info">
          <h3>Manimuthar Dam</h3>
          <p>A large dam providing breathtaking views and a perfect spot for picnics and relaxation.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={CourtallamFallsImage} alt="Courtallam Falls" />
        <div className="place-info">
          <h3>Courtallam Falls</h3>
          <p>Famous waterfalls known for their therapeutic properties and stunning natural beauty.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SankaranainarKovilImage} alt="Sankaranainar Kovil" />
        <div className="place-info">
          <h3>Sankaranainar Kovil</h3>
          <p>A historic temple dedicated to Lord Sankara Narayanan, known for its unique architecture.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={UvariBeachImage} alt="Uvari Beach" />
        <div className="place-info">
          <h3>Uvari Beach</h3>
          <p>A serene beach offering beautiful sunsets and a tranquil atmosphere.</p>
        </div>
      </div>
    </div>
  );
};

export default Tirunelveli;
