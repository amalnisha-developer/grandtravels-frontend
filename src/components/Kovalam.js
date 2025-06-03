// src/pages/KovalamPage.js
import React from 'react';
import LighthouseBeachImage from '../assets/kovalam_lighthouse_beach.webp';
import HawaBeachImage from '../assets/kovalam_hawa_beach.jpeg';
import SamudraBeachImage from '../assets/Samudra Beachh.jpg';
import VizhinjamLighthouseImage from '../assets/kovalam_vizhinjam_lighthouse.jpg';
import VellayaniLakeImage from '../assets/kovalam_vellayani_lake.jpg';
import HalcyonCastleImage from '../assets/kovalam_halcyon_castle.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Kovalam page

const Kovalam = () => {
  return (
    <div className="madurai-page">
      <h1>Kovalam</h1>
      <p>Known for its beautiful beaches. Relax and unwind at the scenic beaches of Kovalam.</p>
      
      <h2>Famous Places in Kovalam</h2>
      
      <div className="place">
        <img src={LighthouseBeachImage} alt="Lighthouse Beach, Kovalam" />
        <div className="place-info">
          <h3>Lighthouse Beach</h3>
          <p>A popular beach known for its iconic lighthouse and vibrant atmosphere.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={HawaBeachImage} alt="Hawa Beach, Kovalam" />
        <div className="place-info">
          <h3>Hawa Beach</h3>
          <p>Also known as Eve’s Beach, famous for its relaxed vibes and picturesque views.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SamudraBeachImage} alt="Samudra Beach, Kovalam" />
        <div className="place-info">
          <h3>Samudra Beach</h3>
          <p>A serene beach ideal for solitude and enjoying peaceful sunsets.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={VizhinjamLighthouseImage} alt="Vizhinjam Lighthouse, Kovalam" />
        <div className="place-info">
          <h3>Vizhinjam Lighthouse</h3>
          <p>An old lighthouse offering panoramic views of the coastline and the Arabian Sea.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={VellayaniLakeImage} alt="Vellayani Lake, Kovalam" />
        <div className="place-info">
          <h3>Vellayani Lake</h3>
          <p>A freshwater lake surrounded by lush greenery, perfect for boating and nature walks.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={HalcyonCastleImage} alt="Halcyon Castle, Kovalam" />
        <div className="place-info">
          <h3>Halcyon Castle</h3>
          <p>A historic castle converted into a heritage hotel, offering a glimpse into Kovalam’s colonial past.</p>
        </div>
      </div>
    </div>
  );
};

export default Kovalam;
