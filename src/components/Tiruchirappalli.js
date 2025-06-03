// src/pages/TiruchirappalliPage.js
import React from 'react';
import RockfortTempleImage from '../assets/rockfort_temple.jpg';
import SriRanganathaswamyTempleImage from '../assets/sri_ranganathaswamy_temple.jpg';
import JambukeswararTempleImage from '../assets/jambukeswarar_temple.jpg';
import KallanaiDamImage from '../assets/kallanai_dam.jpg';
import MukkombuImage from '../assets/mukkombu.jpg';
import './MaduraiStyles.css'; // Ensure you have styles for Tiruchirappalli page

const Tiruchirappalli = () => {
  return (
    <div className="madurai-page">
      <h1>Tiruchirappalli</h1>
      <p>Home to Rockfort Temple. Explore the historical landmarks and vibrant culture of Tiruchirappalli.</p>
      
      <h2>Famous Places in Tiruchirappalli</h2>
      
      <div className="place">
        <img src={RockfortTempleImage} alt="Rockfort Temple" />
        <div className="place-info">
          <h3>Rockfort Temple</h3>
          <p>An iconic temple perched atop a massive rock, offering panoramic views of the city.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={SriRanganathaswamyTempleImage} alt="Sri Ranganathaswamy Temple" />
        <div className="place-info">
          <h3>Sri Ranganathaswamy Temple</h3>
          <p>One of the largest and most revered temples dedicated to Lord Vishnu.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={JambukeswararTempleImage} alt="Jambukeswarar Temple" />
        <div className="place-info">
          <h3>Jambukeswarar Temple</h3>
          <p>An ancient temple dedicated to Lord Shiva, known for its unique architecture.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={KallanaiDamImage} alt="Kallanai Dam" />
        <div className="place-info">
          <h3>Kallanai Dam</h3>
          <p>One of the oldest functioning dams in the world, built across the Kaveri River.</p>
        </div>
      </div>
      
      <div className="place">
        <img src={MukkombuImage} alt="Mukkombu" />
        <div className="place-info">
          <h3>Mukkombu</h3>
          <p>A popular picnic spot with a picturesque dam and lush green surroundings.</p>
        </div>
      </div>
    </div>
  );
};

export default Tiruchirappalli;
