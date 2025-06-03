// src/pages/SalemPage.js
import React from 'react';
import YercaudImage from '../assets/Yercaud.jpg';
import KiliyurFallsImage from '../assets/kiliyur_falls.jpg';
import LingamTempleImage from '../assets/salem_place4.jpg';
import SugavaneswararTempleImage from '../assets/sugavaneswarar_temple.jpg';
import MetturDamImage from '../assets/mettur_dam.webp';
import KumaragiriHillImage from '../assets/salem_place6.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Salem page

const Salem = () => {
  return (
    <div className="madurai-page">
      <h1>Salem</h1>
      <p>Explore the famous places in Salem, known for its rich history and cultural heritage.</p>
      
      <h2>Famous Places in Salem</h2>
      
      <div className="place">
        <img src={YercaudImage} alt="Yercaud" />
        <div className="place-info">
          <h3>Yercaud</h3>
          <p>A beautiful hill station with stunning views and pleasant weather.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KiliyurFallsImage} alt="Kiliyur Falls" />
        <div className="place-info">
          <h3>Kiliyur Falls</h3>
          <p>A breathtaking waterfall located in the Servaroyan hill range.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={LingamTempleImage} alt="1008 Lingam Temple" />
        <div className="place-info">
          <h3>1008 Lingam Temple</h3>
          <p>A unique temple with 1008 Shiva Lingams arranged in a serene environment.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SugavaneswararTempleImage} alt="Arulmigu Sugavaneswarar Swamy Temple" />
        <div className="place-info">
          <h3>Arulmigu Sugavaneswarar Swamy Temple</h3>
          <p>An ancient temple dedicated to Lord Shiva.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={MetturDamImage} alt="Mettur Dam" />
        <div className="place-info">
          <h3>Mettur Dam</h3>
          <p>One of the largest dams in India, offering scenic views and a peaceful environment.</p>
        </div>
      </div>
      
    
      
      <div className="place">
        <img src={KumaragiriHillImage} alt="Kumaragiri Hill" />
        <div className="place-info">
          <h3>Kumaragiri Hill</h3>
          <p>A perfect spot for trekking and nature enthusiasts.</p>
        </div>
      </div>
    </div>
  );
};

export default Salem;
